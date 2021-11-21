import { SupplyPointSpecificNumberId } from '../supply-point-specific-number-id'
import { ISupplyPointSpecificNumberDomain } from '../__interface__/supply-point-specific-number-domain-interface'
import { SupplyPointSpecificNumber } from '../supply-point-specific-number'
import { AreaId } from 'src/domain/area/area-id'

describe('SupplyPointSpecificNumber', () => {
  const supplyPointSpecificNumberProps: ISupplyPointSpecificNumberDomain = {
    address: '住所',
    areaId: AreaId.create(),
    othersNumber: 111
  }

  it('createできる', () => {
    expect(SupplyPointSpecificNumber.create(supplyPointSpecificNumberProps)).toEqual(expect.any(SupplyPointSpecificNumber))
  })

  it('restoreできる', () => {
    const supplyPointSpecificNumberId: SupplyPointSpecificNumberId = SupplyPointSpecificNumberId.restore('test-id')
    expect(SupplyPointSpecificNumber.restore(supplyPointSpecificNumberProps, supplyPointSpecificNumberId)).toEqual(
      expect.any(SupplyPointSpecificNumber)
    )
    expect(
      SupplyPointSpecificNumber.restore(supplyPointSpecificNumberProps, supplyPointSpecificNumberId).id.equals(supplyPointSpecificNumberId)
    ).toBe(true)
  })

  describe('validate', () => {
    describe('validateOfOthersNumber', () => {
      it('16桁は正常', () => {
        const data = { ...supplyPointSpecificNumberProps, othersNumber: 1234567890123456 }
        expect(SupplyPointSpecificNumber.create(data)).toEqual(expect.any(SupplyPointSpecificNumber))
      })
      it('17桁はエラー', () => {
        const data = { ...supplyPointSpecificNumberProps, othersNumber: 12345678901234567 }
        expect(() => {
          SupplyPointSpecificNumber.create(data)
        }).toThrowError()
      })
    })
  })
})
