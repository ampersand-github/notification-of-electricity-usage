import { Customer } from '../customer';
import { CustomerId } from '../customer-id';
import { ICustomerDomain } from '../__interface__/customer-domain-interface';

const CustomerProps: ICustomerDomain = {
  name: '名前',
  address: "東京都・・・"
};

describe('Customer', () => {
  it('createできる', () => {
    expect(Customer.create(CustomerProps)).toEqual(expect.any(Customer));
  });

  it('restoreできる', () => {
    const customerId: CustomerId = CustomerId.restore('test-id');
    expect(Customer.restore(CustomerProps, customerId)).toEqual(
      expect.any(Customer),
    );
    expect(
      Customer.restore(CustomerProps, customerId).id.equals(customerId),
    ).toBe(true);
  });
});
