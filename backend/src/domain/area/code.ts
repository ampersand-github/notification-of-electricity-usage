import { ValueObject } from '../__shared__/value-object'
import { ICodeDomain } from './__interface__/code-domain-interface'

export class Code extends ValueObject<ICodeDomain> {
  public static create (props: ICodeDomain): Code {
    Code.validate(props)
    return new Code(props)
  }

  public get code (): ICodeDomain['code'] {
    return this.props.code
  }

  private static validate (props: ICodeDomain) {
    if (String(props.code).length > 2) {
      throw new Error('電力会社コードは2桁の値で指定してください')
    }
  }
}
