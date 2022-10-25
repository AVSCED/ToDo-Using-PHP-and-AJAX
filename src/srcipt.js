$(document).ready(function(){});
var taskIncompleted = "";
var completedTask = "";
var task_array =[];

//To Add A new Task
$("#add_btn").click(function(){
  var new_Task = $("#new-task").val();
    $.ajax({
    type: "POST",
    url: "crudDataArray.php",
    data: {
      new_Task: new_Task,
      action: "add_to_Task_Array",
    },
    dataType: "json",
  }).done(function (todo_Array) {
    task_array=todo_Array;
    display(task_array);
    uncompleted_task();
    completed_task();
    $("#new-task").val("");
   });
});

//To Display Task Array
function display(task_array) {
  var c = 0;
  for (let i of task_array) {
    if ((i.completed == "0")) {
      taskIncompleted +=
        '<li><input onchange="move_to_completed()" unchecked type="checkbox"/><label>' +
        i.task +
        '</label><input type="text" /><button id="' +
        c +
        '"class="edit" onclick="edit_a_task(id)">Edit</button><button id="' +
        c +
        '"class="delete" onclick="delete_a_task(this.id)">Delete</button></li>';
    } else {
      completedTask +=
        '<li><input onchange="move_to_uncompleted()" checked type="checkbox"/><label>' +
        i.task +
        '</label><button id="' +
        c +
        '"class="edit" onclick="edit_a_task(id)">Edit</button><button id="' +
        c +
        '" class="delete" onclick="delete_a_task(this.id)">Delete</button></li>';
    }
    c++;
  }
}

// To Delete a Task From the Array
function delete_a_task(del){
  console.log(del);
  $.ajax({
    type: "POST",
    url: "crudDataArray.php",
    data: {
      del: del,
      action: "delete_a_task",
    },
    dataType: "json",
  }).done(function (todo_Array) {
    display(todo_Array);
    uncompleted_task();
    $("#new-task").val("");
   });
}

//To Update or Edit a Task From the Array
var update;
function edit_a_task(id) {
  $("#new-task").val(task_array[id].task);
  $("#add_btn").css("display", "none");
  $("#update_btn").css("display", "inline");
  update=id;

}
$("#update_btn").click(function(){
  var updated_value = $("#new-task").val();
  if (updated_value == "") {
    alert("please enter task");
  } else {
    console.log("HI");
    $.ajax({
      type: "POST",
      url: "crudDataArray.php",
      data: {
        update: update, updated_value:updated_value,
        action: "edit_a_task",
      },
      dataType: "json",
    }).done(function (todo_Array) {
      task_array=todo_Array;
      console.log(todo_Array);
      display(todo_Array);
      uncompleted_task();
      completed_task();
      $("#new-task").val("");
      $("#add_btn").css("display", "inline");
      $("#update_btn").css("display", "none");
     });
  }
});

//To Display the uncompleted section of tasks
function uncompleted_task() {
  $("#incomplete-tasks").html(taskIncompleted);
  taskIncompleted = "";
}
//To Display the completed section of tasks
function completed_task() {
  $("#completed-tasks").html(completedTask);
  completedTask = "";
}
//To switch between the completed and incompleted tasks
function move_to_completed() {
    document.querySelectorAll("#incomplete-tasks input:checked").forEach((e)=>{
        console.log("Task Checked");
    var id = e.nextSibling.nextSibling.nextSibling.id;
    task_array[id].completed = "1";
    console.log(task_array[id].completed);
    display(task_array);
    uncompleted_task();
    completed_task();
    });
}
//To switch between the incompleted and completed tasks
function move_to_uncompleted() {
  document
    .querySelectorAll("#completed-tasks input:not(:checked)")
    .forEach((e) => {
      var id = e.nextSibling.nextSibling.nextSibling.id;
      task_array[id].completed = "0";
      display(task_array);
      uncompleted_task();
      completed_task();
    });
}