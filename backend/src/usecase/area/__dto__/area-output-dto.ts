import { Area } from 'src/domain/area/area'

export class AreaOutputDto {
  public readonly code: number;
  public readonly name: string;
  public constructor (area: Area) {
    this.code = area.code
    this.name = area.name
  }
}
