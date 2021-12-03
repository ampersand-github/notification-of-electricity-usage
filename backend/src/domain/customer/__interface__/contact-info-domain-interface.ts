import { IAreaDomain } from 'src/domain/area/__interface__/area-domain-interface'
import { IInstrumentDomain } from 'src/domain/instrument/__interface__/instrument-domain-interface'
import { IVoltageDomain } from 'src/domain/voltage/__interface__/voltage-domain-interface'
import { CustomerNumber } from '../customer-number'

export interface IContactInfoDomain {
  customerNumber : CustomerNumber,
  area:IAreaDomain,
  voltage:IVoltageDomain,
  instrument:IInstrumentDomain,
  specific: number // todo これ値オブジェクト化
}
