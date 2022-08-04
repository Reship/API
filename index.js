const apiEndPoint ="https://jsonplaceholder.typicode.com/posts";

const getButton = document.querySelector("#getPost");
const createButton = document.querySelector("#createPost");
const putButton = document.querySelector("#putPost");
const patchButton = document.querySelector("#patchPost");
const deleteButton = document.querySelector("#deletePost");

function getPosts(){
  fetch(apiEndPoint)
  .then(response => {
   response.json()
   .then((posts)=> console.log(posts));
  });
}

getButton.addEventListener("click",() => {
  getPosts();
});