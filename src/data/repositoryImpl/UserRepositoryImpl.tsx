import {UserRepository} from '../../domain/repository/UserRepository';
import {UserDto} from '../dto/UserDto';

export class UserRepositoryImpl implements UserRepository {
  getUser(id: number): UserDto {
    const userDto: UserDto = new UserDto();

    userDto.Id = 1;
    userDto.FullName = 'Kaweesha hasarinda';
    userDto.Email = 'Kaweeshahasarinda@gmail.com';
    userDto.Address = 'Nugegoda';
    userDto.Password = '10-10-10';

    return userDto;
  }
}
