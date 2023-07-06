import React,{useState,useEffect} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app"


const firebaseApp = initializeApp({ 
    apiKey: "AIzaSyAp6bRSuR-F8duf-jcZI3Hv5Ls66jTGV74",
    authDomain: "signin-93891.firebaseapp.com",
    projectId: "signin-93891",
    storageBucket: "signin-93891.appspot.com",
    messagingSenderId: "229126540162",
    appId: "1:229126540162:web:ab2f6bde40a538a186dd9b",
    measurementId: "G-78RVEBG24R"
});
const auth = getAuth(firebaseApp);
const Signin = () => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
      onAuthStateChanged(auth,person=>{
        if(person){
          setUser(person);
        }
        else{
          setUser(null);
        }
      })
  
    },[]
    )
    const signInWithGoogle=async()=>{
      try{
        await signInWithPopup(auth,new firebase.auth.GoogleAuthProvider);
   
      }
     
      catch(err)
      {
        console.log(err);
  
      }
    }
  return (
    
        <div>
      <center>
        {user ?

        < div >
      
          
          
          
          <button onClick={()=>auth.signOut()}>Sign out</button>

          

        </div> :
      <button onClick={signInWithGoogle}>sign in with google</button>
      }
      </center>
        
    </div>
      
    
  )
}

export default Signin