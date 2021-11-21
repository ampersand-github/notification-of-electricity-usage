import { SupplyPointSpecificNumber } from "../supply-point-specific-number";
import { SupplyPointSpecificNumberId } from "../supply-point-specific-number-id";

export interface ISupplyPointSpecificNumberRepository {
  findById(meterReaderId: SupplyPointSpecificNumberId): Promise<SupplyPointSpecificNumber | null>;
  /*
  findAll(): Promise<Instrument[]>;
  create(Instrument: Instrument): Promise<void>;
  update(Instrument: Instrument): Promise<void>;
  delete(Instrument: Instrument): Promise<void>;
 */
}
