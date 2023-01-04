import { initializeApp } from 'firebase/app'; // no compat for new SDK
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { Set, Exercise } from './backend/models';

const firebaseConfig = {
    apiKey: "AIzaSyDtKxNUx7GiMcHTy4HIDaYaSFjUAj-RNIM",
    authDomain: "dogmap-fe1c5.firebaseapp.com",
    databaseURL: "https://dogmap-fe1c5.firebaseio.com",
    projectId: "dogmap-fe1c5",
    storageBucket: "dogmap-fe1c5.appspot.com",
    messagingSenderId: "945257816849",
    appId: "1:945257816849:web:474b58e49c9e1bec0ba2b0",
    measurementId: "G-R3PK8WXGF8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

async function createTestUser(username: string) {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: username,
            last: "lst",
            born: 1999
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}
let usernames = ["mary", "phil", "max", "eva"];

for (let index = 0; index < usernames.length; index++) {
    createTestUser(usernames[index]);
}


// try {
//     const docRef = await addDoc(collection(db, "users"), {
//         first: "fst",
//         last: "lst",
//         born: 1999
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }
// function createExercise(exercise: Exercise): string {
//     set(ref(database),
//         {
//             name: exercise.name,
//             date: exercise.date,
//             sets: exercise.sets
//         }
//     );
//     return `${exercise.name} ${exercise.date}`;
// }

// export default createExercise;