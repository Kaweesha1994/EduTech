export class User {
  private id: number;
  private email: string;
  private fullname: string;
  private password: string;
  private address: string;

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getFullName(): string {
    return this.fullname;
  }

  setFullName(fullName: string): void {
    this.fullname = fullName;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }
}
