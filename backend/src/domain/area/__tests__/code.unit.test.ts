import { Code, ICodeDomain } from '../code'

describe('Code', () => {
  describe('validateOfCode', () => {
    it('2桁は正常', () => {
      const data :ICodeDomain = { code: 6 }
      expect(Code.create(data)).toEqual(expect.any(Code))
    })
    it('3桁はエラー', () => {
      const data :ICodeDomain = { code: 6 }
      expect(() => {
        Code.create(data)
      }).toThrowError()
    })
  })
})
