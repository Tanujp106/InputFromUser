let node = document.createElement("li");
    const returnfun = () => {
    const x = document.getElementById("input").value; 
    const textnode = document.createTextNode(x);
    node.appendChild(textnode);
    // returnfun();
};

const showfun = () => {
    // document.getElementById(node).style.display = "none";
    
  document.getElementById("myList").appendChild(node);
  document.getElementById("input").value = " ";

   const del = document.createElement("button");
  del.setAttribute("hey", "buttoan");
  document.getElementById("myList").appendChild(del);
  del.addEventListener("click", myFunction);
  function myFunction() {
    document.getElementById("node");
    node.remove();
    document.getElementById("del");
    del.remove();
  }
}
