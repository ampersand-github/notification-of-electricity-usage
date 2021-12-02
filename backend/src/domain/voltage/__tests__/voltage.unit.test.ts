import { IMeterReaderDomain } from "src/domain/meter-reader/__interface__/meter-reader-domain-interface"
import { Voltage } from "../voltage"
import { VoltageId } from "../voltage-id"

const meterReaderProps: IMeterReaderDomain = {
  name: '名前'
}

describe('MeterReader', () => {
  it('createできる', () => {
    expect(Voltage.create(meterReaderProps)).toEqual(
      expect.any(Voltage)
    )
  })

  it('restoreできる', () => {
    const meterReaderId: VoltageId = VoltageId.restore('test-id')
    expect(Voltage.restore(meterReaderProps, meterReaderId)).toEqual(
      expect.any(Voltage)
    )
    expect(
      Voltage.restore(meterReaderProps, meterReaderId).id.equals(
        meterReaderId
      )
    ).toBe(true)
  })
})
