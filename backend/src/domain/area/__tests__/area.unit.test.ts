import { Area } from '../area'
import { AreaId } from '../area-id'
import { IAreaDomain } from '../__interface__/area-domain-interface'

describe('Area', () => {
  const areaProps: IAreaDomain = {
    code: 6,
    name: '関西電力'
  }

  it('createできる', () => {
    expect(Area.create(areaProps)).toEqual(expect.any(Area))
  })

  it('restoreできる', () => {
    const areaId: AreaId = AreaId.restore('test-id')
    expect(Area.restore(areaProps, areaId)).toEqual(expect.any(Area))
    expect(Area.restore(areaProps, areaId).id.equals(areaId)).toBe(true)
  })
})
