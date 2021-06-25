
function onLoad(){
var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
form();
submit.innerHTML = 'submit';
var form = document.getElementById("anime_quiz");
form.appendChild(submit);

var entries = [];
var formData = null;

var options = {
   H : 0,
   GL : 0,
   FMAB : 0,
   DN : 0,
   HH : 0,
   SG : 0
  };


var key = null;

var shows = new Map([
  ['Haikyuu!!', options.H],
  ['Gurren Lagann',options.GL],
  ['FullMetal Alchemist:Brotherhood', options.FMAB],
  ['Death Note',options.DN],
  ['Hunter x Hunter', options.HH],
  ['Steins;Gate', options.SG ]
]);

var max = 0;
var maxKey ="";

function form(){
  const form = document.forms[0];
  form.addEventListener("submit", function(event){
    event.preventDefault();
    formData = new FormData(this);
    entries = formData.entries();
    for (const entry of entries) {
      tally(entry[1]);
    }
    shows.forEach(logMapElements);
    console.log(maxKey);
   //redirect(maxKey);
  });
}
function tally(entry){
  key = `${entry}`;
  var addTo = shows.get(key);
  ++addTo;
  shows.set(key, addTo);
  console.log(addTo);
}

function logMapElements(value, key) {
  console.log(`m[${key}] = ${value}`);
  if(value > max){
    max = value;
    maxKey = key;
  }
}

  function redirect(key){
    window.location.href = "results.html";
}


}
