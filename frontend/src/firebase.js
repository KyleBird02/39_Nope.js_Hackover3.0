// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdRRdC9lLmpxcl23qAeBqe3AzYfmFTty0",
  authDomain: "rsvp-38a1d.firebaseapp.com",
  projectId: "rsvp-38a1d",
  storageBucket: "rsvp-38a1d.appspot.com",
  messagingSenderId: "876846175773",
  appId: "1:876846175773:web:1e37384d22e911ed90d8f4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function upload(file,setLink){
    let d = new Date();
    let uid = '';
    uid += d.getTime()+Math.random(100);
    uid.replace('.','@');
    const storageRef = ref(storage,'id-docs/'+uid);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    console.log(error);
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
        setLink(url);
    })
  }
);
}

