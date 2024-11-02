

// JavaScript step 1 //
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const errorMessage = document.querySelector('#errorMessage')

// JavaScript step 2 //
button.addEventListener('click', () => {
    errorMessage.textContent = '';
    if (input.value != '') {        // JavaScript step 3 //
        const li = document.createElement('li');  // Create a li element
        const deleteButton = document.createElement('button');  // Create a delete button
        li.textContent = input.value;  // Populate the li elements textContent
        deleteButton.textContent = '❌';  // Populate the button textContent
        li.append(deleteButton);  // Append the li element with the delete button
        list.append(li);  // Append teh li element to the unorderd list

        deleteButton.addEventListener('click', function ( ) {   // Add an event listner 
            list.removeChild(li);                               // to the delete button
            input.focus();                                      // that removes the li element.
        });
        input.focus();  // Send the focus to the input element
        input.value =('');   // Change the input value to nothing or the empty string
    }                       //  to clean up the interface for the user.
    else {
        errorMessage.textContent = 'You made a mistake!!! ';
        input.focus();
    }                    

      
});