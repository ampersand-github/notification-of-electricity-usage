import { ContactInfoId } from './contact-info-id'
import { IContactInfoDomain } from './__interface__/contact-info-domain-interface'
import { OthersNumber } from '../supply-point-specific-number/others-number'
import { Entity } from '../__shared__/entity'
import { IMeterDateDomain } from './value-objects/__interface__/meter-date-domain-interface'
import { IMeterPlaceDomain } from './value-objects/__interface__/meter-place-domain-interface'
import { ContactDetail } from '../contact-detail/contact-detail'
import { Area } from '../area/area'
import { Voltage } from '../voltage/voltage'
import { Instrument } from '../instrument/instrument'
import { IdentificationNumber } from './value-objects/identification-number'
import { CustomerNumber } from './customer-number'

export class ContactInfo extends Entity<IContactInfoDomain, ContactInfoId> {
  public static create (props: IContactInfoDomain): ContactInfo {
    return new ContactInfo(props, ContactInfoId.create())
  }

  public static restore (
    props: IContactInfoDomain,
    id: ContactInfoId
  ): ContactInfo {
    return new ContactInfo(props, id)
  }

  // - - - - - - - - - -  CustomerNumber - - - - - - - - - -
  public get meterDate (): IMeterDateDomain['meterDate'] {
    return this.props.customerNumber.meterDate
  }

  public get meterPlace (): IMeterPlaceDomain['meterPlace'] {
    return this.props.customerNumber.meterDate
  }

  public get othersNumber (): OthersNumber['othersNumber'] {
    return this.props.customerNumber.othersNumber
  }

  public get fullCustomerNumber (): CustomerNumber['fullCustomerNumber'] {
    return this.props.customerNumber.fullCustomerNumber
  }

  // - - - - - - - - - -  それ以外 - - - - - - - - - -
  public get contactDetailName (): ContactDetail['name'] {
    return this.props.contactDetail.name
  }

  public get areaCode (): Area['code'] {
    return this.props.area.code
  }

  public get areaName (): Area['name'] {
    return this.props.area.name
  }

  public get voltageCode (): Voltage['code'] {
    return this.props.voltage.code
  }

  public get voltageName (): Voltage['name'] {
    return this.props.voltage.name
  }

  public get instrumentNumber (): Instrument['code'] {
    return this.props.instrument.code
  }

  public get instrumentName (): Instrument['name'] {
    return this.props.instrument.name
  }

  public get identificationNumber (): IdentificationNumber['identificationNumber'] {
    return this.props.identificationNumber.identificationNumber
  }

  // 供給地点特定番号
  public get supplyPointSpecificNumber (): string {
    return ContactInfo.combineSupplyPointSpecificNumber(
      this.areaCode,
      this.voltageCode,
      this.fullCustomerNumber,
      this.identificationNumber
    )
  }

  private static combineSupplyPointSpecificNumber (
    areaCode: number,
    voltageCode: number,
    fullCustomerNumber: string,
    identificationNumber: number
  ): string {
    const _areaCode = String(areaCode).padStart(2, '0')
    const _voltageCode = String(voltageCode).padStart(1, '0')
    const _identificationNumber = String(identificationNumber).padStart(5, '0')
    const result =
      _areaCode + _voltageCode + fullCustomerNumber + _identificationNumber
    if (String(result).length !== 22) {
      throw new Error('供給地点特定番号は22桁で設定してください')
    }
    return result
  }
}
