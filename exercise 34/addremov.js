


// adding and removing newitem exercise 34

const list = document.querySelector('#list');


function addItem(){

    const newItem = document.createElement('li');
    newItem.textContent = 'boosaso';

    list.appendChild(newItem);

}


function RemoveItem(){


    if(list.lastChild){

        list.removeChild(list.lastChild)

    }

    else{
        alert('end')
    }

 
}