import {UserDto} from '../../data/dto/UserDto';

export interface UserRepository {
  loginUser(userDto: UserDto): void;
  signUpUser(userDto: UserDto): void;
  getUser(id: number): UserDto;
}
