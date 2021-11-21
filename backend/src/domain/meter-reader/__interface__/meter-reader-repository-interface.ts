import { MeterReader } from "../meter-reader";
import { MeterReaderId } from "../meter-reader-id";

export interface IMeterReaderRepository {
  findById(meterReaderId: MeterReaderId): Promise<MeterReader | null>;
  /*
  findAll(): Promise<Instrument[]>;
  create(Instrument: Instrument): Promise<void>;
  update(Instrument: Instrument): Promise<void>;
  delete(Instrument: Instrument): Promise<void>;
 */
}
