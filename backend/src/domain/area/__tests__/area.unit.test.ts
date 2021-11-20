import { Area } from "../area";
import { AreaId } from "../area-id";
import { IAreaDomain } from "../__interface__/area-domain-interface";

const areaProps: IAreaDomain = {
  code: 1,
  name: "関西電力",
};

describe("Area", () => {
  it("createできる", () => {
    expect(Area.create(areaProps)).toEqual(expect.any(Area));
  });

  it("restoreできる", () => {
    const areaId: AreaId = AreaId.restore("test-id");
    expect(Area.restore(areaProps, AreaId)).toEqual(expect.any(Area));
    expect(Area.restore(areaProps, AreaId).id.equals(AreaId)).toBe(true);
  });
});
