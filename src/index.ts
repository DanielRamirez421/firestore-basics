import "./documentation";

import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"; 

const addNewUser = async () => {
  const userOne = {
    name: "Daniel Ramirez",
    email: "daniel@gmail.com",
    age: 28,
    birthday: new Date(),
  };

  const userTwo = {
    name: "Fernando Ramirez",
    email: "fernando@gmail.com",
    age: 30,
    birthday: new Date(),
  };
  // Documento = fila en SQL
  // Coleccion = tabla en SQL
  // addDoc() = INSERT INTO

  // Agregar un nuevo documento a la coleccion "users"
  // Agregar un nuevo reigistro a la tabla "users"

  /* Existen dos formas de guardar registros en un documento
  1. Dejando que firebase genere un Id de forma automática
  2. Asignando el id automáticamente pode medio de una ruta*/

  // 1. Dejando que firebase genere un Id de forma automática
  // const docRef = await addDoc(collection(firebaseDB, "users"), userOne);
  // console.log("Document written with ID: ", docRef.id, "and path: ", docRef.path);
  // console.log(docRef);

  // 2. Asignando el id automáticamente pode medio de una ruta
  // El atributo merge permite actualizar un atributo de un documento en caso de que no exista
  // const userDocReference = doc( firebaseDB, "users", "1" );
  // await setDoc(userDocReference, userTwo, { merge: true });

  /*Para traer todos los doscumentos de una colección se usa getDocs, 
  éste trae todos los registros además de métodos para gestionarlos dentro de su prototype*/

  // Obtener todos los documentos de una coleccion
  // const querySnapshot = await getDocs(collection(firebaseDB, "users"));
  // querySnapshot.forEach((doc) => console.log(`${doc.id} => ${JSON.stringify(doc.data())}`));
};

addNewUser();