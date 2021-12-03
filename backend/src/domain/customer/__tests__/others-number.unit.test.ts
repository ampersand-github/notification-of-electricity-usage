import { MeterDate,  } from '../meter-date'
import {IMeterDateDomain} from "../__interface__/meter-date-domain-interface";

describe('MeterDate', () => {
  it('0日はエラー', () => {
    const data: IMeterDateDomain = { meterDate: 0 }
    expect(() => {
      MeterDate.create(data)
    }).toThrowError()
  })
  it('1日は正常', () => {
    const data: IMeterDateDomain = { meterDate: 1 }
    expect(MeterDate.create(data)).toEqual(expect.any(MeterDate))
  })
  it('28日は正常', () => {
    const data: IMeterDateDomain = { meterDate: 28 }
    expect(MeterDate.create(data)).toEqual(expect.any(MeterDate))
  })
  it('29日はエラー', () => {
    const data: IMeterDateDomain = { meterDate: 29 }
    expect(() => {
      MeterDate.create(data)
    }).toThrowError()
  })
})
