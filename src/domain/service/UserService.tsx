import {UserDto} from '../dto/UserDto';

export interface UserService {
  getUser(): UserDto;
}
