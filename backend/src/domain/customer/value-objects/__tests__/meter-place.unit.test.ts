import { MeterPlace } from '../meter-place'
import { IMeterPlaceDomain } from '../__interface__/meter-place-domain-interface'

describe('MeterPlace', () => {
  it('3桁はエラー', () => {
    const data: IMeterPlaceDomain = { meterPlace: 100 }
    expect(() => {
      MeterPlace.create(data)
    }).toThrowError()
  })
  it('2桁は正常', () => {
    const data: IMeterPlaceDomain = { meterPlace: 99 }
    expect(MeterPlace.create(data)).toEqual(expect.any(MeterPlace))
  })
})
