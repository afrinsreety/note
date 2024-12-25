import { getCookie } from "../utility/helper";

async function saveNoteToFirebase(note){
    try {
        const url = "https://firestore.googleapis.com/v1/projects/enote-2025/databases/(default)/documents/notes?key=AIzaSyDXAwsDhK38AfoeO_zrwVb87qG01JUIpIE";

    const headers = {	
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ getCookie("idToken")
    }

    const body = {
        "fields": {
          "title": { "stringValue": note.title },
          "description": { "stringValue": note.description },
          "date": { "timestampValue": new Date(note.date).toISOString() },
          "userId": { "stringValue": getCookie("localId") }
        }
      }

      const response = await fetch(url,{
        method:"POST",
        headers: headers,
        body: JSON.stringify(body)
      })

      const data = await response.json();

      console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

export { saveNoteToFirebase };