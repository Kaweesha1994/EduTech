import {UserRepository} from '../../domain/repository/UserRepository';
import {UserDto} from '../dto/UserDto';
import FirebaseUtil from '../../Utils/FirebaseUtil';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

export class UserRepositoryImpl implements UserRepository {
  databaseReference = database().ref('/USER');

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
        this.addUserDetails(userDto);
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

  addUserDetails(userDto: UserDto): void {
    this.databaseReference
      .push()
      .set({
        id: userDto.Id,
        fullname: userDto.FullName,
        email: userDto.Email,
        address: userDto.Address,
      })
      .then(() => {
        // alert('User update successful');
      })
      .catch(e => {
        console.log(e);
        alert('Something went wrong in creation');
      });
  }

  async getUserByEmail(email: string): Promise<UserDto> {
    const userDto = new UserDto();

    await database()
      .ref('/USER')
      .orderByChild('email')
      .equalTo(email)
      .once('value')
      .then(snapshot => {
        for (var child in snapshot.val()) {
          let user = snapshot.child(child).val();

          console.log(child);

          // const userEntity = Object.values(user);
          const userEntity = JSON.parse(JSON.stringify(user));

          userDto.Id = userEntity.id;
          userDto.Email = userEntity.email;
          userDto.FullName = userEntity.fullname;
          userDto.Address = userEntity.address;
          userDto.UserReferenceId = child;
        }
      });

    console.log('userrepositoryimpl-line 85');
    console.log(userDto);

    return userDto;
  }

  updateUserDetails(userDto: UserDto): void {
    console.log('usereposiory - line 94');
    console.log(userDto.UserReferenceId);
    database()
      .ref('/USER/' + userDto.UserReferenceId)
      .update({
        id: userDto.Id,
        fullname: userDto.FullName,
        email: userDto.Email,
        address: userDto.Address,
      })
      .then(() => {
        alert('User update successful');
      })
      .catch(e => {
        console.log(e);
        alert('Something went wrong in updating');
      });
  }

  async uploadProfilePic(userDto: UserDto): Promise<UserDto> {

    console.log("upload image");
    console.log(userDto.ProfilePicUri);

    let fileName = userDto.ProfilePicUri.substring(userDto.ProfilePicUri.lastIndexOf('/') + 1);

    FirebaseUtil.imageUpload(userDto.ProfilePicUri);

    await database()
            .ref('/USER/' + userDto.UserReferenceId)
            .update({
            profilePicFileName: fileName
            });

    return userDto;
  }

  async getProfilePicture(userDto: UserDto): Promise<UserDto> {

    let userDtoNew = new UserDto();
    let fileName = '';

    await database()
      .ref('/USER')
      .orderByChild('email')
      .equalTo(userDto.Email)
      .once('value')
      .then(snapshot => {
        for (var child in snapshot.val()) {
          let user = snapshot.child(child).val();

          console.log(child);

          // const userEntity = Object.values(user);
          const userEntity = JSON.parse(JSON.stringify(user));

          fileName = userEntity.profilePicFileName;
          console.log('getProfilepic: ');
          console.log(fileName);
        }
      });

      await storage()
      .ref(fileName) //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        console.log('downloading image uri: ');
        console.log(url);
        userDtoNew.ProfilePicUri = url;
      })
      .catch((e) => console.log('Errors while downloading => ', e));


    return userDtoNew;

  }

}
