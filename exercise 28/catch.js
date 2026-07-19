


// catcha awise exercise 28

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

async function displayUserData(){

   

    try{
         const user = await fetchData();
    console.log(user)

    }catch(err){
        console.log(err)

    }
}

displayUserData()
