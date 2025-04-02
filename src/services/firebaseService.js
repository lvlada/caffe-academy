import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 


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