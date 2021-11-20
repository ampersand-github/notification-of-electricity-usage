import { AreaId } from "src/domain/area/area-id";

export interface ISupplyPointSpecificNumberDomain {
  address: string
  areaId:AreaId
  othersNumber:number
}
