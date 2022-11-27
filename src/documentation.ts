import { app } from "./firebase/config";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, onSnapshot, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore";

const firebaseDB = getFirestore(app);

const specialDayDocRef = doc(firebaseDB, "specials", "1");
// path segments: ["specials", "1"], equals "specials/1"

const specialOfTheDay  = doc(firebaseDB, "dailySpecial/2022-03-14");
const childDocRef      = doc(specialOfTheDay, "orderHistory/2021-03-14"); 
  // Equals to: doc(firebaseDB, "dailySpecial/2022-03-14/orderHistory/2021-03-14")


  // To write the document to the database, use setDoc().
  const wiriteSpecialDay = async () => {
    const specialDay = {
      name: "Special Day",
      description: "This is a special day",
      price: 100,
      date: new Date(),
    };
    await setDoc(specialOfTheDay, specialDay);    // 1. Set the "dailySpecial/2022-03-14" document to the value of specialDay
    await updateDoc(specialOfTheDay, specialDay); // 2. Update the document with the new data
    await setDoc(specialOfTheDay, specialDay, { merge: true }); // Replace 1. and 2. with this
  };


  // this method will include a random ID from firestore
  const addANewDocument = async () => {
    const ordersCollection = collection(firebaseDB, "orders");
    const orderFromCustomer = {
      customer: "Daniel Ramirez",
      drink: "Coca Cola",
      price: 100,
    };
    const savedOrder = await addDoc(ordersCollection, orderFromCustomer);
    console.log(savedOrder);
  };


  // Reading a single document
  const readASingleDocument = async () => {
    const mySnapshot = await getDoc(specialOfTheDay);
    if (mySnapshot.exists()) {
      console.log("Document data:", mySnapshot.data());
    }
  };


  // Adding a listener to a document
  const addListenerToADocument = async () => {
    const unsubscribe = onSnapshot(specialOfTheDay, (doc) => {
      console.log("Current data: ", doc.data());
    });
    // // Stop listening to changes
    // unsubscribe();
  };


  // adding a query for documents
  const queryForDocuments = async () => {
    const customerOrdersQuery = query(
      collection(firebaseDB, "orders"),
      where("customer", "==", "Daniel Ramirez"),
      orderBy("price", "desc"),
      limit(3),
    );
    // Get the query snapshot
    const querySnapshot = await getDocs(customerOrdersQuery); // https://youtu.be/BjtxPj6jRM8?t=540
    const unsubscribeCustomersOrrders = onSnapshot(customerOrdersQuery, (querySnapshot) => { // function to listen for changes
      querySnapshot.forEach((doc) => console.log(doc.data()));
    });

    // // Stop listening to changes
    // unsubscribeCustomersOrrders();
  };


  // wiriteSpecialDay();
  // // addANewDocument();
  // readASingleDocument();
  // addListenerToADocument();
  queryForDocuments();