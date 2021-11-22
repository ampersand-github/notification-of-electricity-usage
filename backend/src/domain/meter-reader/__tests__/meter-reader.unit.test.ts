import { MeterReader } from '../meter-reader'
import { MeterReaderId } from '../meter-reader-id'
import { IMeterReaderDomain } from '../__interface__/meter-reader-domain-interface'

const meterReaderProps: IMeterReaderDomain = {
  name: '名前'
}

describe('MeterReader', () => {
  it('createできる', () => {
    expect(MeterReader.create(meterReaderProps)).toEqual(
      expect.any(MeterReader)
    )
  })

  it('restoreできる', () => {
    const meterReaderId: MeterReaderId = MeterReaderId.restore('test-id')
    expect(MeterReader.restore(meterReaderProps, meterReaderId)).toEqual(
      expect.any(MeterReader)
    )
    expect(
      MeterReader.restore(meterReaderProps, meterReaderId).id.equals(
        meterReaderId
      )
    ).toBe(true)
  })
})
