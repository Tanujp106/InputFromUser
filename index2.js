   let y = localStorage.getItem('tasklist')
   document.getElementById("output").textContent += y;

   document.getElementById("butn").addEventListener("click", function(){
   localStorage.setItem('task','t');
   })



