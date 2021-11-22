import { MeterDate, MeterDateProps } from '../meter-date'

describe('MeterDate', () => {
  it('0日はエラー', () => {
    const data :MeterDateProps = { meterDate: 0 }
    expect(() => { MeterDate.create(data) }).toThrowError()
  })
  it('1日は正常', () => {
    const data :MeterDateProps = { meterDate: 1 }
    expect(MeterDate.create(data)).toEqual(expect.any(MeterDate))
  })
  it('28日は正常', () => {
    const data :MeterDateProps = { meterDate: 28 }
    expect(MeterDate.create(data)).toEqual(expect.any(MeterDate))
  })
  it('29日はエラー', () => {
    const data :MeterDateProps = { meterDate: 29 }
    expect(() => { MeterDate.create(data) }).toThrowError()
  })
})
