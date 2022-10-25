<?php 
session_start();

$task_array = array();

if (!isset($_SESSION['task_array'])){
    $_SESSION['task_array']=[];
}

?>