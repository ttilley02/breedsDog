'use strict';

//Calls on the entire cast of functions to create the dog images specified by user input
function getDogImage(dogBreed) {
  fetch(' https://dog.ceo/api/breed/'+dogBreed+'/images/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('That breed does not exist.  Please try again!'));
  
}


function displayResults(responseJson) {
  console.log(responseJson);
 
  if(responseJson.status === 'success'){
    $('.placeholder').replaceWith(`<img src='${responseJson.message}' class='placeholder' alt='randomDogImage'>`)
  }
  else if(responseJson.status === 'error'){
    $('.placeholder').replaceWith(`<div class='placeholder id='errorMessage'>${responseJson.message}</div>`)
    alert('No doggy data found!.  Please try again!');
  }
  
  

  //display the results section
  $('.results').removeClass('hidden');
}

//grabs input (hopefully a intger 1-50) from user
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    console.log('WatchForm has ran!');
    let dogType = $('.js-dogNumber').val();
    getDogImage(dogType);
  });
}



$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
