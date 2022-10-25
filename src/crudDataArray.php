<?php 
include './ToDoDataArray.php';

$action =$_POST['action'];

// To add a new task in the Array 
if ($action == 'add_to_Task_Array'){
    $new_task = $_POST['new_Task'];
      if ($new_task != "") {
    $obj = array( "task" => $new_task,
    "completed" => "0");

    array_push($_SESSION['task_array'] , $obj);
  }
  echo json_encode($_SESSION['task_array']);
}
// to delete a task from the array
if ($action == 'delete_a_task'){
    $del=$_POST['del'];
    if ($del>-1){
        array_splice($_SESSION['task_array'],$del , 1);
    }
    echo json_encode($_SESSION['task_array']);
}
//to edit a task from the array
if ($action == 'edit_a_task'){
    $update = $_POST['update'];
    $updated_value=$_POST['updated_value'];

    $_SESSION['task_array'][$update]['task']=$updated_value;

    echo json_encode($_SESSION['task_array']);
}
?>