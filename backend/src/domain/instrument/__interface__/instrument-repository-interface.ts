import { Instrument } from "../instrument";
import { InstrumentId } from "../instrument-id";


export interface IInstrumentRepository {
  findById(instrumentId: InstrumentId): Promise<Instrument | null>;
  /*
  findAll(): Promise<Instrument[]>;
  create(Instrument: Instrument): Promise<void>;
  update(Instrument: Instrument): Promise<void>;
  delete(Instrument: Instrument): Promise<void>;
 */
}
