import { SupplyPointSpecificNumberOutputDto } from './__dto__/supply-point-specific-number-output-dto'
import { SupplyPointSpecificNumber } from '../../domain/supply-point-specific-number/supply-point-specific-number'
import { ISupplyPointSpecificNumberRepository } from 'src/domain/supply-point-specific-number/__interface__/supply-point-specific-number-repository-interface'
import { SupplyPointSpecificNumberId } from 'src/domain/supply-point-specific-number/supply-point-specific-number-id'

export class FindByIdUsecase {
  public constructor (
    readonly repository: ISupplyPointSpecificNumberRepository
  ) {}

  public async do (id: string): Promise<SupplyPointSpecificNumberOutputDto> {
    const supplyPointSpecificNumber: SupplyPointSpecificNumber =
      await this.repository.findById(SupplyPointSpecificNumberId.restore(id))
    return new SupplyPointSpecificNumberOutputDto(supplyPointSpecificNumber)
  }
}
