import { Shipper } from '../../shipper/Shipper';
import { Shipment } from '../Shipment';
import { IShipment } from '../shipment.model';

export class WithDoNotLeave<T extends IShipment>  implements IShipment {
  constructor(private shipment: T) {}
  
  ship(shipper: Shipper) {
    const baseString = this.shipment.ship(shipper);
    return baseString + '\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**';
  }
}
