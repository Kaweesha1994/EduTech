import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

export default class FirebaseUtil {

    static signIn = (email, password) => {

        return auth().signInWithEmailAndPassword(email, password);

    }



    static signUp = (email, password) => {

        return auth().createUserWithEmailAndPassword(email, password);

    }

    static signOut = () => {

        return auth().signOut();

    }

    static imageUpload = async (uri) => {

        const uploadUri = uri;
        let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

        try{
            await storage().ref(fileName).putFile(uploadUri);

        } catch (e) {
            console.Console(e);
            alert('Something went wrong!');
        }

    }

}