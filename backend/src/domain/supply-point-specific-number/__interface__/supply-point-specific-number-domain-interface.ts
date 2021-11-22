import { AreaId } from 'src/domain/area/area-id'
import {OthersNumber} from "../others-number";

export interface ISupplyPointSpecificNumberDomain {
  address: string
  areaId:AreaId
  othersNumber:OthersNumber
}
