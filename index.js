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
  $('.placeholder').html('');
 
  if(responseJson.status == "success"){
    $('.placeholder').append(`<img src='${responseJson.message}' class='results-img' alt='randomDogImage'>`)
  }
  else{
    $('.placeholder').append(`<div id='errorMessage'>${responseJson.message}</div>`)
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
