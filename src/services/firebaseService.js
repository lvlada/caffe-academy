/* eslint-disable no-undef */
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig"; 
import { 
  createUserWithEmailAndPassword, 
  updateProfile,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";


export async function fetchCoffeeTypes() {
  try {
    const colRef = collection(db, "coffeTypes");
    const querySnapshot = await getDocs(colRef);
    const coffeeTypes = [];
    querySnapshot.forEach((doc) => {
      coffeeTypes.push({ id: doc.id, ...doc.data() });
    });
    return coffeeTypes;
  } catch (error) {
    console.error("Error fetching coffee types:", error.message);
    throw error; 
  }
}

export async function fetchUsers() {
  try {
    const colRef = collection(db, "users");
    const querySnapshot = await getDocs(colRef);
    const coffeeTypes = [];
    querySnapshot.forEach((doc) => {
      coffeeTypes.push({ id: doc.id, ...doc.data() });
    });
    return coffeeTypes;
  } catch (error) {
    console.error("Error fetching coffee types:", error.message);
    throw error; 
  }
}

export async function createUser(name, email, password) {
  try {
    const cread = await createUserWithEmailAndPassword(auth, email, password);
    const user = cread.user;

    await updateProfile(user, {
      displayName: name,
    });

    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
    });

    console.log("You added a new user!");
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

export async function signOutUser(){
  try{
    await signOut(auth);
  } catch(error){
    console.log("Sign out error: ", error.message);
  }
  
}

export async function signInUser(email, password){
  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user
  }catch(error){
    console.log("Sign in error: ", error.message)
  }
  
}


  


