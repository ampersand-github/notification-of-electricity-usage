import { ContactInfoId } from './contact-info-id'
import { IContactInfoDomain } from './__interface__/contact-info-domain-interface'
import { IMeterDateDomain } from './customer-number/__interface__/meter-date-domain-interface'
import { Entity } from 'src/domain/__shared__/entity'
import { IMeterPlaceDomain } from './customer-number/__interface__/meter-place-domain-interface'
import { OthersNumber } from '../supply-point-specific-number/others-number'

export class ContactInfo extends Entity<IContactInfoDomain, ContactInfoId> {
  public static create (props: IContactInfoDomain): ContactInfo {
    return new ContactInfo(props, ContactInfoId.create())
  }

  public static restore (props: IContactInfoDomain, id: ContactInfoId): ContactInfo {
    return new ContactInfo(props, id)
  }

  public get meterDate (): IMeterDateDomain['meterDate'] {
    return this.props.customerNumber.meterDate
  }

  public get meterPlace (): IMeterPlaceDomain['meterPlace'] {
    return this.props.customerNumber.meterDate
  }

  public get othersNumber (): OthersNumber['othersNumber'] {
    return this.props.customerNumber.othersNumber
  }
/*
  public get name (): IContactInfoDomain['name'] {
    return this.props.name
  }

  public get address (): IContactInfoDomain['address'] {
    return this.props.address
  }

  public get fullContactInfoNumber (): ContactInfoNumber['fullContactInfoNumber'] {
    return this.props.ContactInfoNumber.fullContactInfoNumber
  }

  public get meterDate (): ContactInfoNumber['meterDate'] {
    return this.props.ContactInfoNumber.meterDate
  }

  public get meterPlace (): ContactInfoNumber['meterPlace'] {
    return this.props.ContactInfoNumber.meterPlace
  }

  public get monthHistoryId (): IContactInfoDomain['monthHistoryId'] {
    return this.props.monthHistoryId
  }

  public get supplyPointSpecificNumberId (): IContactInfoDomain['supplyPointSpecificNumberId'] {
    return this.props.supplyPointSpecificNumberId
  }

  public get contractDetailsId (): IContactInfoDomain['contractDetailsId'] {
    return this.props.contractDetailsId
  }

  public get instrumentId (): IContactInfoDomain['instrumentId'] {
    return this.props.instrumentId
  }
 */
}
