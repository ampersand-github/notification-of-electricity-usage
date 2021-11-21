import { CustomerNumberId } from '../customer-number-id'

describe('CustomerNumberId', () => {
  it('createできる', () => {
    expect(CustomerNumberId.create()).toEqual(expect.any(CustomerNumberId))
  })

  it('restoreできる', () => {
    expect(CustomerNumberId.restore('test-id')).toEqual(expect.any(CustomerNumberId))
  })

  it('toStringできる', () => {
    expect(CustomerNumberId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      CustomerNumberId.restore('test-id').equals(CustomerNumberId.restore('test-id'))
    ).toBe(true)
    expect(
      CustomerNumberId.restore('test-id').equals(CustomerNumberId.restore('not-equal-id'))
    ).toBe(false)
  })
})
