import axios from "axios";

export async function getCollection() {
    const response = await axios.get('https://learnlingo-8ca11-default-rtdb.europe-west1.firebasedatabase.app/.json?auth=3A4afETTaGY5mfaCShm7rgWrygB3');
    const teachersData = response.data;
    return teachersData;
};

