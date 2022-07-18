import '../styles/main.scss';

const requestURL = 'https://jsonplaceholder.typicode.com/posts';

// Promise 
function sendRequest(url) {
  return new Promise((resolve, reject) => {
    try {
      let response = fetch(url);
      resolve(response);
    } catch(err) {
      reject(err);
    }
  })
  .then(response => response.json())
  .then(data => console.log(data.splice(0, 10)));
}

sendRequest(requestURL);

// Async/Await
// async function getResponse(url) {
//   try {
//     let response = await fetch(url);
//     let posts = await response.json();
//     posts = posts.splice(0, 10);
//     console.log(posts);
//   } catch (err) {
//     console.error(err);
//   }
// }

// getResponse(requestURL);


