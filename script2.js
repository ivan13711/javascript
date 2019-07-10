var button = document.getElementById("button1");
button.innerHTML = 'HelloWorld';
var div= document.querySelector(".wrapper");
div.innerHTML ="<button > Click me</button>";
alert(div.classList);

div.addEventListener('click', function(){
  if(div.classList.contains('wrapper')){
  div.classList.remove('wrapper');
  div.classList.add('block');}
  else {
    div.classList.remove('block');
    div.classList.add('wrapper');
  }
})
var dip= document.getElementById("color");
dip.addEventListener('click', function(){
  dip.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," +
Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
});
