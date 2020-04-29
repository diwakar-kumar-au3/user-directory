import axios from "axios";

function post(formData) {
  axios
    .post("http://localhost:5000/postinfo", formData)
    .then((res) => res)
    .catch((err) => console.log(err));
}
function del(id) {
  axios
    .delete(`http://localhost:5000/delete/${id}`)
    .then((res) => res)
    .catch((err) => console.log(err));
}
export { post, del };
