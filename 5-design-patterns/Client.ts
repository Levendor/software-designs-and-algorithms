import { Shipment } from './Shipment';
import { IShipment } from './shipment.model';

export class Client {
  getShipment(shipmentDTO: IShipment) {
    const shipment = Shipment.getInstance(shipmentDTO);
    console.log(shipment.ship());
  }
}
