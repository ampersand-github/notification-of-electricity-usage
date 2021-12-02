import { Voltage } from '../voltage'
import { VoltageId } from '../voltage-id'

export interface IVoltageRepository {
  findById(VoltageId: VoltageId): Promise<Voltage | null>;
}
