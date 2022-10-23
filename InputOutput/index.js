const returnfun = () => {
  const x = document.getElementById("input").value;
  const node = document.createElement("li");
  const textnode = document.createTextNode(x);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  node.style.backgroundColor = "blue";
  document.getElementById("input").value = " ";

  var del = document.createElement("button");
  del.setAttribute("id", "hello");
  del.textContent = "Delete";
  document.getElementById("myList").appendChild(del);

  const edit = document.createElement("button");
  edit.setAttribute("id","editt");
  edit.textContent = "Edit";
  document.getElementById("myList").appendChild(edit);

  const save = document.createElement("button");
  save.setAttribute("id","button");
  save.textContent = "Save";
  document.getElementById("myList").appendChild(save);

  del.addEventListener("click", myFunction);
  function myFunction() {
    document.getElementById("node");
    node.remove();
    document.getElementById("del");
    del.remove();
    document.getElementById("editt");
    edit.remove();
    document.getElementById("save");
    save.remove();
  }
  save.addEventListener("click", savefunction);
  function savefunction(){
    document.getElementById("save");
    save.remove();
  }

  edit.addEventListener("click", function() {
  node.contentEditable = true;
  node.style.backgroundColor = "yellow";
  document.getElementById("myList").appendChild(save);
} );

  save.addEventListener("click", function() {
  node.contentEditable = false;
  node.style.backgroundColor = "gray";
} )
}
