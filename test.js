// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firestore = firebase.firestore();

// firestore.collection('users').doc('IQj4gM3fb6hiMnLngwVi').collection('cartItems').doc('CCVH8cAzLy2SaXAcViiI')

// firestore.doc('/users/IQj4gM3fb6hiMnLngwVi/cart')

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
  const firstUser = users[0];

  console.log(firstUser);

  return fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
  );
})

.then(response => response.json())
.then(posts => console.log(posts));

const myAsyncFunction = async () => {

  //any code below the await fetch does not execute until the fetch operation is complete
  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await usersResponse.json();
  const secondUser = users[1];
  console.log(secondUser);
  const postsResponse = await fetch
  ('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id);

  const posts = await postsResponse.json();
  console.log(posts);
}