chumma();
async function chumma() {
  const http = new EasyHTTP();

  const url = "https://jsonplaceholder.typicode.com/users";
  const singleUrl = "https://jsonplaceholder.typicode.com/users/7";

  // GET request to fetch all users
  http
    .get(url)
    .then((data) => console.log("GET request response:", data))
    .catch((err) => console.error("GET request error:", err));

  // Example POST request to add a new user
  const newData = {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
  };

  await http
    .post(url, newData)
    .then((data) => console.log("POST request response:", data))
    .catch((err) => console.error("POST request error:", err));

  // Example PUT request to update a user
  const updatedData = {
    name: "Jane Doe",
    username: "janedoe",
    email: "janedoe@example.com",
  };

  await http
    .put(singleUrl, updatedData)
    .then((data) => console.log("PUT request response:", data))
    .catch((err) => console.error("PUT request error:", err));


  // Example DELETE request to delete a user with ID 1
  const userUrl = "https://jsonplaceholder.typicode.com/users/1"; // Assuming you want to delete user with ID 1

  // Example DELETE request to delete a user with ID 1
  await http.delete(userUrl)
    .then(data => console.log("User deleted:", data))
    .catch(error => console.error("Error deleting user:", error));

  http
    .get(url)
    .then((data) => console.log("GET request response:", data))
    .catch((err) => console.error("GET request error:", err));
}
