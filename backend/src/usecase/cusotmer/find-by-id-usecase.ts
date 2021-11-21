/*
customer

export class FindByIdUsecase {
  public constructor(readonly repository: IUserRepository) {}

  public async do(id: string): Promise<CustomerOutputDto> {
    const user: User = await this.repository.findById(UserId.restore(id));
    return new CustomerOutputDto(user);
  }
}

 */
