export class User {
  private readonly firstName: string = '';
  private readonly lastName: string = '';
  private readonly age: number = 0;

  constructor(data: any) {
    if (data.firstName) {
      this.firstName = data.firstName;
    }
    if (data.lastName) {
      this.lastName = data.lastName;
    }
    if (data.age) {
      this.age = data.age;
    }
  }

  public getFirstName(): string {
    return this.firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }
  public getAge(): number {
    return this.age;
  }
}
