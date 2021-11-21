import { SupplyPointSpecificNumber } from 'src/domain/supply-point-specific-number/supply-point-specific-number'

export class SupplyPointSpecificNumberOutputDto {
  public readonly address: string;
  public readonly othersNumber: number;
  public constructor (area: SupplyPointSpecificNumber) {
    this.address = area.address
    this.othersNumber = area.othersNumber
  }
}
