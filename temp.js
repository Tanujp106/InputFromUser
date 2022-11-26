let task = [];
const addTask = (ev) => {
  ev.preventDefault();
  let x = {
    // id: Date.now(),
    title: document.getElementById("input").value,
  };
  task.push(x);
  document.forms[0].reset();

  console.warn("added", { task });
  let pre = document.querySelector("#msg pre");
  pre.textContent = "\n" + JSON.stringify(task, "\t", 2);

  localStorage.setItem("tasklist", JSON.stringify(task));
};
