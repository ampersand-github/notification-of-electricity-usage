import { AggregateRoot } from '../__shared__/aggregate-root'
import { CustomerId } from './customer-id'
import { ICustomerDomain } from './__interface__/customer-domain-interface'
import { PersonalInfo } from './personal-info'
import { IMeterDateDomain } from './value-objects/__interface__/meter-date-domain-interface'
import { IMeterPlaceDomain } from './value-objects/__interface__/meter-place-domain-interface'
import { OthersNumber } from '../supply-point-specific-number/others-number'
import { ContactDetail } from '../contact-detail/contact-detail'
import { Area } from '../area/area'
import { Voltage } from '../voltage/voltage'
import { Instrument } from '../instrument/instrument'
import { IdentificationNumber } from './value-objects/identification-number'
import { CustomerNumber } from './customer-number'

export class Customer extends AggregateRoot<ICustomerDomain, CustomerId> {
  public static create (props: ICustomerDomain): Customer {
    return new Customer(props, CustomerId.create())
  }

  public static restore (props: ICustomerDomain, id: CustomerId): Customer {
    return new Customer(props, id)
  }

  // - - - - - - - - - - - PersonalInfo - - - - - - - - - - -
  public get name (): PersonalInfo['name'] {
    return this.props.personalInfo.name
  }

  public get address (): PersonalInfo['address'] {
    return this.props.personalInfo.address
  }

  // - - - - - - - - - -  ContactInfo - - - - - - - - - -
  public get meterDate (): IMeterDateDomain['meterDate'] {
    return this.props.contactInfo.meterDate
  }

  public get meterPlace (): IMeterPlaceDomain['meterPlace'] {
    return this.props.contactInfo.meterDate
  }

  public get othersNumber (): OthersNumber['othersNumber'] {
    return this.props.contactInfo.othersNumber
  }

  public get contactDetailName (): ContactDetail['name'] {
    return this.props.contactInfo.contactDetailName
  }

  public get areaCode (): Area['code'] {
    return this.props.contactInfo.areaCode
  }

  public get areaName (): Area['name'] {
    return this.props.contactInfo.areaName
  }

  public get voltageCode (): Voltage['code'] {
    return this.props.contactInfo.voltageCode
  }

  public get voltageName (): Voltage['name'] {
    return this.props.contactInfo.voltageName
  }

  public get instrumentNumber (): Instrument['code'] {
    return this.props.contactInfo.instrumentNumber
  }

  public get instrumentName (): Instrument['name'] {
    return this.props.contactInfo.instrumentName
  }

  public get identificationNumber ():IdentificationNumber['identificationNumber'] {
    return this.props.contactInfo.identificationNumber
  }

  public get fullCustomerNumber ():CustomerNumber['fullCustomerNumber'] {
    return this.props.contactInfo.fullCustomerNumber
  }
}
