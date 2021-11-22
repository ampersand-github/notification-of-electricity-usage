import { Area } from 'src/domain/Area/Area'
import { AreaId } from 'src/domain/Area/Area-id'
import { IAreaRepository } from 'src/domain/Area/__interface__/Area-repository-interface'
import { AreaOutputDto } from './__dto__/Area-output-dto'

export class AreaFindByIdUsecase {
  public constructor (readonly repository: IAreaRepository) {}

  public async do (id: string): Promise<AreaOutputDto> {
    const area: Area = await this.repository.findById(AreaId.restore(id))
    return new AreaOutputDto(area)
  }
}
