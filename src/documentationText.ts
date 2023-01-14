import { City } from './models/city.model';
import { getDoc, getFirestore } from "firebase/firestore";
import { app } from "./firebase/config";
import { collection, doc, setDoc } from "firebase/firestore"; 

const firebaseDB = getFirestore(app);

const citiesRef = collection(firebaseDB, "cities");

const getData = async () => {
  // Inserting cities in cities collection
  await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
  await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
  await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
  await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
  await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

    // Obtainig San Francisco document
    const docRef = doc(firebaseDB, "cities", "SF");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    }

    console.log(new City("1", "SF", "CA"));

}

getData();