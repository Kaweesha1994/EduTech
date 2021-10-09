import {UserRepository} from '../../domain/repository/UserRepository';
import {UserDto} from '../dto/UserDto';
import FirebaseUtil from '../../Utils/FirebaseUtil';

export class UserRepositoryImpl implements UserRepository {
  loginUser(userDto: UserDto): void {
    FirebaseUtil.signIn(userDto.Email, userDto.Password)
      .then(() => {
        alert('Login SuccessFul');
      })
      .catch(e => {
        console.log(e);
        alert('Incorrect Email / Password');
      });
  }

  signUpUser(userDto: UserDto): void {
    FirebaseUtil.signUp(userDto.Email, userDto.Password)
      .then(() => {
        alert('sign up successfully!');
      })
      .catch(e => {
        console.log(e);
        alert('Something went wrong');
      });
  }

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
