import { ValueObject } from '../__shared__/value-object'

export interface ICodeDomain {
  code: number;
}

export class Code extends ValueObject<ICodeDomain> {
  public static create (props: ICodeDomain): Code {
    Code.validate(props)
    return new Code(props)
  }

  public get code (): ICodeDomain['code'] {
    return this.props.code
  }

  // todo 値オブジェクトに委譲したい
  private static validate (props: ICodeDomain) {
    if (String(props.code).length > 2) {
      throw new Error('電力会社コードは2桁の値で指定してください')
    }
  }
}
