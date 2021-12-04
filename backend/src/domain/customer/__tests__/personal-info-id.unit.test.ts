import { PersonalInfoId } from '../personal-info-id'

describe('PersonalInfoId', () => {
  it('createできる', () => {
    expect(PersonalInfoId.create()).toEqual(expect.any(PersonalInfoId))
  })

  it('restoreできる', () => {
    expect(PersonalInfoId.restore('test-id')).toEqual(
      expect.any(PersonalInfoId)
    )
  })

  it('toStringできる', () => {
    expect(PersonalInfoId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      PersonalInfoId.restore('test-id').equals(
        PersonalInfoId.restore('test-id')
      )
    ).toBe(true)
    expect(
      PersonalInfoId.restore('test-id').equals(
        PersonalInfoId.restore('not-equal-id')
      )
    ).toBe(false)
  })
})
