





    // promise exercise 27

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false; // You can change this to false to simulate a failure
            if (success) {
                resolve(" successfully!");
            } else {
                reject("Failed .");
            }
        }, 2000);
    });
}

fetchData()
    .then(message => console.log(message))
    .catch(error => console.error(error));








