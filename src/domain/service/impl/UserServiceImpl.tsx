import {UserDto} from '../../../data/dto/UserDto';
import {UserRepository} from '../../repository/UserRepository';
import {UserService} from '../UserService';

export class UserServiceImpl implements UserService {
  userRepository: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepository = userRepo;
  }

  loginUser(userDto: UserDto): void {
    this.userRepository.loginUser(userDto);
  }

  signUpUser(userDto: UserDto): void {
    this.userRepository.signUpUser(userDto);
  }

  getUser(id: number): UserDto {
    const userDto: UserDto = this.userRepository.getUser(1);

    console.log(userDto);

    userDto.FullName = 'Kaweesha Hasarinda';

    return userDto;
  }
}
