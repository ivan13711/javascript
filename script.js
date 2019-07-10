var readmore = document.getElementById("readmore");
readmore.addEventListener('click', function(){
  var expand = document.getElementById('expand');
  if (expand.classList.contains("hidden")){
    expand.classList.remove("hidden");
    readmoreLink.innerHTML = "Read less";
  } else{
    expand.classList.add("hidden");
      readmoreLink.innerHTML = "Read more";
  }
});
