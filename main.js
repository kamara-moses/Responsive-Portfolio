var submit = document.querySelector('#submit');
var nameInput = document.querySelector('#nameInput');
var emailInput = document.querySelector('#emailInput');
var submissionResponse = document.querySelector('.response');
var response = 'Thank you for your submission ' + nameInput + '! We will reach out to you at ' + emailInput + '.';

submit.addEventListener('click', function () {
     event.preventDefault();
         console.log('click');
        // var newName = document.querySelector('#nameInput');
         //localStorage.setItem('name', nameInput)
});

 
