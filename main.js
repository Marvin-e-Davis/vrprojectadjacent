function onLoad(){
var submit = document.createElement('button');
submit.innerText = 'submit';
submit.addEventListener('click', onSubmit);
var form = document.getElementById('anime_quiz')
form.appendChild(submit);
}

function onSubmit(){
console.log('submitted');
}
