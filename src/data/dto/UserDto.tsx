export class UserDto {
  private id: number;
  private email: string;
  private fullname: string;
  private password: string;
  private address: string;
  private userReferenceId: string;

  get Id(): number {
    return this.id;
  }

  set Id(id: number) {
    this.id = id;
  }

  get Email(): string {
    return this.email;
  }

  set Email(email: string) {
    this.email = email;
  }

  get FullName(): string {
    return this.fullname;
  }

  set FullName(fullName: string) {
    this.fullname = fullName;
  }

  get Password(): string {
    return this.password;
  }

  set Password(password: string) {
    this.password = password;
  }

  get Address(): string {
    return this.address;
  }

  set Address(address: string) {
    this.address = address;
  }

  get UserReferenceId(): string {
    return this.userReferenceId;
  }

  set UserReferenceId(userReferenceId: string) {
    this.userReferenceId = userReferenceId;
  }
}
