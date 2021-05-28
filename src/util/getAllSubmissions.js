import firebase from "firebase";
import StudentSubmission from "./StudentSubmission";

const db = firebase.firestore();

function getAllSubmissions(){ 
  let documents = []
  const submissionObjects = [];
  var i = 0;
  db.collection('submissions').get().then((submissions) => {
    submissions.forEach((doc) => {
      submissionObjects[i] = new StudentSubmission("title", doc.data().date, doc.data().description, doc.data().images, doc.data().sources, doc.data().studentName, doc.data().submittedDate, "");
      i+=1;

  })});
  
  console.log(documents);
  console.log(submissionObjects);
  console.log(submissionObjects.pop());

  return submissionObjects;
};

export default getAllSubmissions;