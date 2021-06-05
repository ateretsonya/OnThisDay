import firebase from "firebase";
import StudentSubmission from "./StudentSubmission";
// FOR TESTING ONLY
import stockPhoto from '../images/home-stock-image.png';
import stockPhoto2 from '../images/sofka-skipwith.jpg'

const db = firebase.firestore();

async function getAllSubmissions(){ 
    // FOR TESTING ONLY ---------------
    const testSub = {
        location: 'London, Englandddddddd',
        eventDate: new Date('03/4/1944'),
        subjectName: 'John Doe',
        images: [stockPhoto],
        submitterName: 'Amy Smith',
    };
    const testSub2 = {
        location: 'St. Petersburg, Russia',
        eventDate: new Date('09/09/1939'),
        subjectName: 'Sofka Skipwith',
        images: [stockPhoto2],
        submitterName: 'Brad Johnson',
    };
    let lst = [];
    //for (let i = 0; i < 7; i++) lst.push(testSub);
    //for (let i = 0; i < 5; i++) lst.push(testSub2);
    //return lst;
   

  let submissionObjects = [];
  var i = 0;
  await db.collection('submissions').get().then((submissions) => {
    submissions.forEach((doc) => {
      console.log(doc.data().date);
      console.log(doc.data().description);
      console.log(doc.data().images);

      submissionObjects[i] = new StudentSubmission("title", doc.data().date, doc.data().description, doc.data().images, doc.data().sources, doc.data().studentName, doc.data().submittedDate, "");
      i+=1;

  })});
  
  console.log(submissionObjects);
  console.log(submissionObjects.length);
  console.log(typeof submissionObjects);
  console.log("this is first card " + submissionObjects[0]);


  return submissionObjects;
};

export default getAllSubmissions;