import { SupplyPointSpecificNumberId } from '../supply-point-specific-number-id'
import { ISupplyPointSpecificNumberDomain } from '../__interface__/supply-point-specific-number-domain-interface'
import { SupplyPointSpecificNumber } from '../supply-point-specific-number'
import { AreaId } from 'src/domain/area/area-id'
import { OthersNumber } from '../others-number'

describe('SupplyPointSpecificNumber', () => {
  const supplyPointSpecificNumberProps: ISupplyPointSpecificNumberDomain = {
    address: '住所',
    areaId: AreaId.create(),
    othersNumber: OthersNumber.create({ othersNumber: 1234567891234567 })
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
})
