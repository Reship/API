const apiEndPoint ="https://jsonplaceholder.typicode.com/posts";

const getButton = document.querySelector("#getPost");
const createButton = document.querySelector("#createPost");

const getPosts = async () =>{
  const response = await fetch(apiEndPoint);
  const posts = await response.json();
  return posts;
};

const createPost = async (newpost)=>{
  const response = await fetch(apiEndPoint,{
    method:"POST",
    body:JSON.stringify(newpost),
    headers: {"Content-type":"appilication/json; charset=UTF-8"},
  });
  
  const post = await response.json();
  return post;
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

createButton.addEventListener('click',async () => {
  const newPost ={
    title: "New Post Title",
    body:"New Post Body",
    userId:1,

  };
  const createdpost = await createPost(newPost);
  console.log(createdpost);
})