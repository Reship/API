const apiEndPoint ="https://jsonplaceholder.typicode.com/posts";

const getButton = document.querySelector("#getPost");
const createButton = document.querySelector("#createPost");
const putButton = document.querySelector("#putPost");
const patchButton = document.querySelector("#patchPost");
const deleteButton = document.querySelector("#deletePost");

const getPosts = async () =>{
  const response = await fetch(apiEndPoint);
  const posts = await response.json();
  return posts;
};
getButton.addEventListener("click",async() => {
  const posts = await getPosts();

  const table = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
  ${posts.map(post =>`<tr>
  <th scope="row">${post.id}</th>
  <td>${post.title}</td>
  </tr>`)
  .join("\n")}
    
  </tbody>
  </table>`;
  document.querySelector('#table').innerHTML = table;
});