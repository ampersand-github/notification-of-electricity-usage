import { Customer } from '../customer';
import { CustomerId } from '../customer-id';
import { ICustomerRepository } from '../__interface__/customer-repository-interface';

export class DisallowNotExistIdService {
  public constructor(public readonly userRepository: ICustomerRepository) {}

  public async do(userId: string): Promise<void> {
    /*
      ユーザーのuidが重複していたらエラーを出力する
    */
    const targetId = CustomerId.restore(userId);
    const allUser: Customer[] = await this.userRepository.findAll();
    const result = allUser.filter((one: Customer) => one.id.equals(targetId));
    if (result.length === 0) {
      throw new Error('このユーザーは存在していません。');
    }
  }
}
