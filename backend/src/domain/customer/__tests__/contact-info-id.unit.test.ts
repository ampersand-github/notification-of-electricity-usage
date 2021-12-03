import { ContactInfoId } from '../contact-info-id'

describe('ContactInfoId', () => {
  it('createできる', () => {
    expect(ContactInfoId.create()).toEqual(expect.any(ContactInfoId))
  })

  it('restoreできる', () => {
    expect(ContactInfoId.restore('test-id')).toEqual(
      expect.any(ContactInfoId)
    )
  })

  it('toStringできる', () => {
    expect(ContactInfoId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      ContactInfoId.restore('test-id').equals(
        ContactInfoId.restore('test-id')
      )
    ).toBe(true)
    expect(
      ContactInfoId.restore('test-id').equals(
        ContactInfoId.restore('not-equal-id')
      )
    ).toBe(false)
  })
})
