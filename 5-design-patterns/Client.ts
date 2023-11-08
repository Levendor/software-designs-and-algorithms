import { Shipment } from './shipment/Shipment';
import { Letter } from './shipment/letter';
import { Oversized } from './shipment/oversized';
import { Package } from './shipment/package';
import { IShipment } from './shipment/shipment.model';
import { AirEastShipper } from './shipper/air-east-shipper';
import { ChicagoSprintShipper } from './shipper/chicago-sprint-shipper';
import { PacificParcelShipper } from './shipper/pacific-parcel-shipper';

export class Client {
  
  chooseShipper(zipCode: string) {
    switch (zipCode[0]) {
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
  
  chooseShipmentType(shipment: IShipment) {
    if (shipment.weight <= 15) {
      return Letter.getInstance(shipment);
    } else if (shipment.weight <= 160) {
      return Package.getInstance(shipment);
    } else {
      return Oversized.getInstance(shipment);
    }
  }

  getShipment(shipmentDTO: IShipment) {
    const shipper = this.chooseShipper(shipmentDTO.fromZipCode);
    const shipment = this.chooseShipmentType(shipmentDTO);
    console.log(shipment.ship(shipper));
  }
}
