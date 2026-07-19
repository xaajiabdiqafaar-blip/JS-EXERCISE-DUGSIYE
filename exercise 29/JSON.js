


// JSON EXERCISE 29

async function fetchData() {
    console.log("Start fetching data...");

    // Simulate fetching JSON data from a file
    const response = await fetch('data.json'); // Replace with actual file path if running on a server
    const data = await response.json(); // Parsing the JSON response to a JavaScript object

    console.log("Fetched Data:", data);
    console.log("Data fetching complete. This message runs after data is fetched.");
}

fetchData();
console.log("This message runs immediately and is not blocked.");

