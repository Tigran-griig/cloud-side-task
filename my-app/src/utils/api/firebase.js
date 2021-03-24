import {axiosFirebase} from "../../core";
export default {
   getData:()=> axiosFirebase.get('/notes.json'),
   postData:(note) =>axiosFirebase.post("/notes.json",note),
   deleteData:(id)=>axiosFirebase.delete(`/notes/${id}/.json`),
   updateData:(id,note)=>axiosFirebase.patch(`/notes/${id}/.json`,note),

};