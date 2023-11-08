import { Shipment } from './shipment/Shipment';
import { WithDoNotLeave } from './shipment/additional-marks/with-do-not-leave';
import { WithFragile } from './shipment/additional-marks/with-fragile';
import { WithReceiptRequested } from './shipment/additional-marks/with-receipt-requested';
import { Letter } from './shipment/letter';
import { Oversized } from './shipment/oversized';
import { Package } from './shipment/package';
import { IShipment, IShipmentDTO } from './shipment/shipment.model';
import { AirEastShipper } from './shipper/air-east-shipper';
import { ChicagoSprintShipper } from './shipper/chicago-sprint-shipper';
import { PacificParcelShipper } from './shipper/pacific-parcel-shipper';

export class Client {
  
  chooseShipper(shipment: IShipmentDTO) {
    switch (shipment.fromZipCode[0]) {
      case '4':
      case '5':
      case '6':
        return ChicagoSprintShipper.getInstance();
      case '7':
      case '8':
      case '9':
        return PacificParcelShipper.getInstance();
      case '1':
      case '2':
      case '3':
      default:
        return AirEastShipper.getInstance();
    }
  }
  
  chooseShipmentType(shipment: IShipmentDTO): Shipment {
    if (shipment.weight <= 15) {
      return Letter.getInstance(shipment);
    } else if (shipment.weight <= 160) {
      return Package.getInstance(shipment);
    } else {
      return Oversized.getInstance(shipment);
    }
  }
  
  markAsFragile(shipment: IShipment) {
    return new WithFragile(shipment);
  }
  
  markDoNotLeave(shipment: IShipment) {
    return new WithDoNotLeave(shipment);
  }
  
  markReceiptRequested(shipment: IShipment) {
    return new WithReceiptRequested(shipment);
  }

  getShipment(shipmentDTO: IShipmentDTO, options: { fragile?: boolean, doNotLeave?: boolean, receiptRequested?: boolean } = {}) {
    const shipper = this.chooseShipper(shipmentDTO);
    let shipment: any = this.chooseShipmentType(shipmentDTO);
    if (options.fragile) {
      shipment = this.markAsFragile(shipment);
    }
    if (options.doNotLeave) {
      shipment = this.markDoNotLeave(shipment);
    }
    if (options.receiptRequested) {
      shipment = this.markReceiptRequested(shipment);
    }
    
    console.log(shipment.ship(shipper));
  }
}
