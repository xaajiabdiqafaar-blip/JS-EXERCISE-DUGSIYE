

// get method exercise 31


async function fetchUsers() {
  try {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

   
    const users = await response.json();

    console.log("Users:", users);
  } catch (error) {
    
    console.error("Error fetching users:", error.message);
  }
}


fetchUsers();