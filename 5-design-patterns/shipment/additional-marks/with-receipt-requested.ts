import { Shipper } from '../../shipper/Shipper';
import { Shipment } from '../Shipment';
import { IShipment } from '../shipment.model';

export class WithReceiptRequested<T extends IShipment>  implements IShipment {
  constructor(private shipment: T) {
    this.shipment = shipment;
  }
  
  ship(shipper: Shipper) {
    const baseString = this.shipment.ship(shipper);
    return baseString + '\n**MARK RETURN RECEIPT REQUESTED**';
  }
}
