const returnfun = () => {
  const x = document.getElementById("input").value;
  const node = document.createElement("li");
  const textnode = document.createTextNode(x);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  document.getElementById("input").value = " ";

  const del = document.createElement("button");
  del.setAttribute("hey","buttoan");
  document.getElementById("myList").appendChild(del);

  del.addEventListener("click", myFunction);
  function myFunction() {
    document.getElementById("node");
    node.remove();
    document.getElementById("del");
    del.remove();
  }
}
