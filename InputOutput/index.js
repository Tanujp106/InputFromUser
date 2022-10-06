const returnfun = () => {
  const x = document.getElementById("input").value;
  const node = document.createElement("li");
  const textnode = document.createTextNode(x);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  document.getElementById("input").value = " ";
  }