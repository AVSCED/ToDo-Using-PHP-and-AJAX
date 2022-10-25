<?php
// Start the session
session_start();
if (isset($_POST['resetData'])) {
    session_destroy();
}
?>
<html>
<head>
    <title>TODO List</title>
    <link href="style.css" type="text/css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <div class="container">
    <h2>TODO LIST</h2>
  <h3>Add Item</h3>
  <p>
    <input id="new-task" type="text" />
    <button  id="add_btn">Add</button>
    <button  id="update_btn">Update</button>
  </p>

  <h3>Todo</h3>
  <ul id="incomplete-tasks">
    <li>
      <input type="checkbox" /><label>Pay Bills</label
      ><input type="text" /><button class="edit">Edit</button
      ><button class="delete">Delete</button>
    </li>
    <li>
      <input type="checkbox" /><label>Go Shopping</label
      ><input type="text" value="Go Shopping" /><button class="edit">
        Edit</button
      ><button class="delete">Delete</button>
    </li>
  </ul>

  <h3>Completed</h3>
  <ul id="completed-tasks">
    <li>
      <input type="checkbox" checked /><label>See the Doctor</label
      ><input type="text" /><button class="edit">Edit</button
      ><button class="delete">Delete</button>
    </li>
  </ul>
    </div>

    <!-- To reset the session data -->
    <form action="" method="POST">
        <p style="margin-left:2% "><b>Reset data:</b>
            <button style="margin-left:2% " type=submit name="resetData">&#9850;</button>
        </p>
        <hr>
    </form>

</body>
<script src="./srcipt.js"></script>

</html>