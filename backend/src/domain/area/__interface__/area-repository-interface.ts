import { Area } from "../area";
import { AreaId } from "../area-id";

export interface IAreaRepository {
  findById(areaId: AreaId): Promise<Area | null>;
  /*
  findAll(): Promise<Area[]>;
  create(Area: Area): Promise<void>;
  update(Area: Area): Promise<void>;
  delete(Area: Area): Promise<void>;
 */
}
