import { getDoc, getFirestore, limit, orderBy, query, startAfter, updateDoc } from 'firebase/firestore';
import { app } from './firebase/config';

import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"; 

const firebaseDB = getFirestore(app);

const addNewUser = async () => {
  const userOne = {
    name: "Daniel Ramirez",
    email: "daniel@gmail.com",
    age: 28,
    birthday: new Date(),
  };

  // Documento = fila en SQL
  // Coleccion = tabla en SQL
  // addDoc() = INSERT INTO

  // Se inserta Doc con Id aleatorio
  const collectionRef = collection(firebaseDB, "users");
  // await addDoc(collectionRef, userOne).then((docRef) => console.log(docRef.id));

  // Se realiza uptdate  de documento en coleccion users con id especifico
  const docRef = doc(firebaseDB, "users", "1xqzf0dGfEPBhhghSTX2");
  // await updateDoc(docRef, { ...userOne, age: 29 });

  // Obtener todos los documentos de una coleccion
  const querySnapshot = await getDocs(collectionRef);
  // querySnapshot.forEach((doc) => console.log(`${doc.id} => ${JSON.stringify(doc.data())}`));

  // Obtener un documento especifico
  const docSnapshot = await getDoc(docRef);
  // console.log(docSnapshot.data());

  // Obtener todos los documentos
  const allDocs = await getDocs(collectionRef);
  let docs: any[] = []; 
  allDocs.forEach((doc) => docs.push({ id: doc.id, ...doc.data() }));
  console.warn(docs.length);


  // adding pagination
  const prevBtn = document.createElement("button");
  prevBtn.innerText = "Prev Page";
  document.body.append(prevBtn);

  const btnNext = document.createElement("button");
  btnNext.innerText = "Next Page";
  document.body.append(btnNext);

  let lastDoc: any = null;

  btnNext.addEventListener("click", async () => {
    const usersQuery = query(
      collectionRef,
      orderBy("name",),
      startAfter(lastDoc),
      limit(8),
    );
    const querySnapshot = await getDocs(usersQuery);
    console.log(querySnapshot.forEach((doc) => console.log(doc.data())));
    lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1] || null;
  });

  btnNext.click();
}

// addNewUser();