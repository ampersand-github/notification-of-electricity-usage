import { ValueObject } from 'src/domain/__shared__/value-object'
import { IIdentificationNumberDomain } from './__interface__/identification-number-domain-interface'

export class IdentificationNumber extends ValueObject<IIdentificationNumberDomain> {
  public static create (props: IIdentificationNumberDomain): IdentificationNumber {
    IdentificationNumber.validate(props)
    return new IdentificationNumber(props)
  }

  public get identificationNumber (): IIdentificationNumberDomain['identificationNumber'] {
    return this.props.identificationNumber
  }

  private static validate (props) {
    if (String(props.identificationNumber).length > 5) {
      throw new Error('必ず５桁以下で入力してください。')
    }
  }
}
