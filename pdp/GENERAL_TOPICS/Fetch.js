let responseURL = 'https://jsonplaceholder.typicode.com/users';
fetchRequest = async (url) => {

  let response = await fetch(url);
  console.log(response);
}
fetchRequest(responseURL)