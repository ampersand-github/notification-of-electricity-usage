import { Voltage } from "../voltage";
import {VoltageId} from "../voltage-id";


export interface IVoltageRepository {
  findById(VoltageId: VoltageId): Promise<Voltage | null>;
  /*
  findAll(): Promise<Instrument[]>;
  create(Instrument: Instrument): Promise<void>;
  update(Instrument: Instrument): Promise<void>;
  delete(Instrument: Instrument): Promise<void>;
 */
}
