import { MeterPlace, MeterPlaceProps } from '../meter-place'

describe('MeterPlace', () => {
  it('3桁はエラー', () => {
    const data: MeterPlaceProps = { meterPlace: 100 }
    expect(() => {
      MeterPlace.create(data)
    }).toThrowError()
  })
  it('2桁は正常', () => {
    const data: MeterPlaceProps = { meterPlace: 99 }
    expect(MeterPlace.create(data)).toEqual(expect.any(MeterPlace))
  })
})
