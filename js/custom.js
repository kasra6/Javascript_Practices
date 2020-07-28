// function loadFunction(){
//   console.log('The dom has been loaded');
// }
//
// document.addEventListener('DOMContentLoaded', loadFunction);
//
//
// function assignListeneres(){
//   let divs = document.getElementsByTagName('div');
//   for (let i = 0; i < divs.length; i++){
//     divs[i].addEventListener('click', showID, true);
//     divs[i].addEventListener('click', showID, false);
//   }
// }
//
//
// function showID(evt){
//   console.log(evt);
//   alert(evt.currentTarget.id);
// }

// document.addEventListener('DOMContentLoaded', assignListeneres, false);


// let myEvent = new Event('finished');
// let myAnotherEvent = new CustomEvent('done', {'detail': 'done looping!'});
//
// document.addEventListener('finished', function(evt){
//   console.log("finished event called");
// });
//
// document.addEventListener('done', function(evt){
//   console.log(evt.detail);
// });
//
// for (let j = 0; j < 100; j++){
//   if (j == 99){
//     document.dispatchEvent(myEvent);
//     document.dispatchEvent(myAnotherEvent);
//   }
// }


let textField = document.getElementsByTagName("input");
let isListening = true;

function changeMessage(e){
  if (isListening){
    isListening = !isListening;
    document.removeEventListener('click', changeMessage);
    textField[0].value = 'Event Listener = ' + isListening;
  }
}

function setupDoc(evt){
  textField[0].value = 'eventListener = true';
  document.addEventListener('click', changeMessage);
}

document.addEventListener('DOMContentLoaded', setupDoc);
