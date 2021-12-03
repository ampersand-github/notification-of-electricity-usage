import { PersonalInfo } from '../personal-info'
import { PersonalInfoId } from '../personal-info-id'
import { IPersonalInfoDomain } from '../__interface__/personal-info-domain-interface'

describe('PersonalInfo', () => {
  const personalInfoProps: IPersonalInfoDomain = {
    name: 'name',
    address: 'address'
  }

  it('createできる', () => {
    expect(PersonalInfo.create(personalInfoProps)).toEqual(expect.any(PersonalInfo))
  })

  it('restoreできる', () => {
    const personalInfoId: PersonalInfoId = PersonalInfoId.restore('test-id')
    expect(PersonalInfo.restore(personalInfoProps, personalInfoId)).toEqual(
      expect.any(PersonalInfo)
    )
    expect(
      PersonalInfo.restore(personalInfoProps, personalInfoId).id.equals(personalInfoId)
    ).toBe(true)
  })
})
