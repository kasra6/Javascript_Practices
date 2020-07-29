function onSuccess(){
  console.log('you are correct');
}

function onError(e){
  console.log(e.message);
}

function isFirstOfficer(name, onError, onSuccess){
  if (name === 'Spock'){
    onSuccess();
  } else {
    onError(new Error('Sorry, Wrong officer'));
  }
}


isFirstOfficer('scotty', onError, onSuccess);
isFirstOfficer('Spock', onError, onSuccess);

let refErr = new ReferenceError('This is a refrence error');
console.log(refErr.message);

class myCustomError extends Error{
  constructor(message){
    super(message);
  }
}

let myCustomErrorInstance = new myCustomError('this is a custom error');
console.log(myCustomErrorInstance.message);
console.log(myCustomErrorInstance.stack);

try{
  throw(new myCustomError('there has beeeen a mistake!'));
} catch(e) {
  console.log(e.message);
  console.log(e.stack);
}
