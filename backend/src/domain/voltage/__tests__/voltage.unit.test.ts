import { Voltage } from '../voltage'
import { VoltageId } from '../voltage-id'
import { IVoltageDomain } from '../__interface__/voltage-domain-interface'

const voltageProps: IVoltageDomain = {
  code:0,
  name: "低圧"
}

describe('Voltage', () => {
  it('createできる', () => {
    expect(Voltage.create(voltageProps)).toEqual(
      expect.any(Voltage)
    )
  })

  it('restoreできる', () => {
    const voltageId: VoltageId = VoltageId.restore('test-id')
    expect(Voltage.restore(voltageProps, voltageId)).toEqual(
      expect.any(Voltage)
    )
    expect(
      Voltage.restore(voltageProps, voltageId).id.equals(
          voltageId
      )
    ).toBe(true)
  })
})
