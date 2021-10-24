import React, {Component, useContext, useState, useEffect, useRef, useDebugValue} from 'react';
import { View, PermissionsAndroid, Platform, Alert } from 'react-native';
import ProfileComponent from './ProfileComponent';
import styles from './Profile.component.style';
import { UserDto } from '../../../data/dto/UserDto';
import nextId from 'react-id-generator'
import { UserRepositoryImpl } from '../../../data/repositoryImpl/UserRepositoryImpl';
import { UserServiceImpl } from '../../../domain/service/impl/UserServiceImpl';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { LoginContext } from '../../../Utils/LoginProvider';
import ImagePicker, {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { file } from '@babel/types';

export const userRepository = new UserRepositoryImpl();
export const userService = new UserServiceImpl(userRepository);

function Profile(){ 

    let isAble = false;

    const {user} = useContext(LoginContext);

    const [filePath, setFilePath] = useState({});

    const[userDto, setUserDto] = useState({});
    const [id, setId] = useState(0);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState(user);
    const [address, setAddress] = useState(''); 
    const[userReferenceId, setUserReferenceId]=useState('');
    const [uploading, setUpload] = useState(false);
    const [transferred, setTransferred] = useState(null); 
    const [uri, setUri] = useState('');

    // const unsubscribe = useRef(() => undefined);

    const fetchUserEmail = async () => {
        const response = await userService.getUserByEmail(user?.email).then(response =>  {
            
            // isAble = true;
            setUserDto(response);
            setId(response.id);
            setEmail(response.email);
            setFullname(response.fullname);
            setAddress(response.address);
            setUserReferenceId(response.userReferenceId);
        });
        // const { userDto } = await response;
        


        console.log('profile.js-line 37');
        console.log(response);

      };

      const uploadImage = async => {

        console.log('upload image 111: ');
        console.log(uri);
    

        let userDto = new UserDto();
        userDto.profilePicUri = uri;
        userDto.UserReferenceId = userReferenceId;

        setUpload(true);

        userService.uploadProfilePic(userDto).then(response => {
          setUpload(false);
          
        });

      }

      const getImage = async => {
        let userDto = new UserDto();
        userDto.Email = user?.email;

        let userDtoNew = new UserDto();
        userService.loadProfilePic(userDto).then(response => {

          console.log('get image parent');
        console.log(response.ProfilePicUri);

        setUri(response.ProfilePicUri);

        });

        
      }

     useEffect(() => {      
        
        // if(isAble) {

            fetchUserEmail();
            getImage();

            console.log('profile.js - 74');

        // }

        // return () => (isAble = false);
          



    },[]);

    const handleUpdate = () => {

        let userDto = new UserDto();

        userDto.Id = id;
        userDto.email = email;
        userDto.FullName = fullname;
        userDto.Address = address;
        userDto.UserReferenceId = userReferenceId;

        userService.updateUserDetails(userDto);

        fetchUserEmail();

    }

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'Camera Permission',
                message: 'App needs camera permission',
              },
            );
            // If CAMERA Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (err) {
            console.warn(err);
            return false;
          }
        } else return true;
      };
      
      const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'External Storage Write Permission',
                message: 'App needs write permission',
              },
            );
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
          }
          return false;
        } else return true;
      };
    
      const captureImage = async (type) => {
    
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
          videoQuality: 'low',
          durationLimit: 30, //Video max duration in seconds
          saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
    
        if (isCameraPermitted && isStoragePermitted) {
    
          launchCamera(options, (response) => {
    
            console.log('Response = ', response);
    
            if (response.didCancel) {
              alert('User cancelled camera picker');
              return;
            } else if (response.errorCode == 'camera_unavailable') {
              alert('Camera not available on device');
              return;
            } else if (response.errorCode == 'permission') {
              alert('Permission not satisfied');
              return;
            } else if (response.errorCode == 'others') {
              alert(response.errorMessage);
              return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setUri(response.assets[0].uri);

            uploadImage();

          });
    
          const chooseFile = (type) => {
            let options = {
              mediaType: type,
              maxWidth: 300,
              maxHeight: 550,
              quality: 1,
            };
            launchImageLibrary(options, (response) => {
    
              console.log('Response = ', response);
        
              if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
              } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
              } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
              } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
              }
              console.log('base64 -> ', response.base64);
              console.log('uri -> ', response.uri);
              console.log('width -> ', response.width);
              console.log('height -> ', response.height);
              console.log('fileSize -> ', response.fileSize);
              console.log('type -> ', response.type);
              console.log('fileName -> ', response.fileName);
              setUri(response.assets[0].uri);
            
              uploadImage();

            });
          };
    
        }
      };
    
      const chooseFile = (type) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
        };
        launchImageLibrary(options, (response) => {
          console.log('Response = ', JSON.stringify(response));
    
          if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
          } else if (response.errorCode == 'camera_unavailable') {
            alert('Camera not available on device');
            return;
          } else if (response.errorCode == 'permission') {
            alert('Permission not satisfied');
            return;
          } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
          }
          
          console.log('base64 -> ', response.assets);
          console.log('uri -> ', response.assets[0].uri);
          console.log('width -> ', response.assets.width);
          console.log('height -> ', response.assets.height);
          console.log('fileSize -> ', response.assets.fileSize);
          console.log('type -> ', response.assets.type);
          console.log('fileName -> ', response.assets.fileName);
          setUri(response.assets[0].uri);

          uploadImage();
        });
      };

        return (
            <View style = {styles.container}>
                <ProfileComponent
                email={email}
                fullname = {fullname}
                address = {address}
                setEmail = {setEmail}
                setFullname = {setFullname}
                setAddress = {setAddress}
                handleUpdate = {handleUpdate}
                uri = {uri}
                captureImage= {captureImage}
                chooseFile = {chooseFile}
                />
            </View>
        );
    

}

export default Profile;