import { ContactDetailsId } from '../contact-details-id'

describe('ContactDetailsId', () => {
  it('createできる', () => {
    expect(ContactDetailsId.create()).toEqual(expect.any(ContactDetailsId))
  })

  it('restoreできる', () => {
    expect(ContactDetailsId.restore('test-id')).toEqual(expect.any(ContactDetailsId))
  })

  it('toStringできる', () => {
    expect(ContactDetailsId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      ContactDetailsId.restore('test-id').equals(ContactDetailsId.restore('test-id'))
    ).toBe(true)
    expect(
      ContactDetailsId.restore('test-id').equals(ContactDetailsId.restore('not-equal-id'))
    ).toBe(false)
  })
})
