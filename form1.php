<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./asserts/css/style.css">
	<link rel="stylesheet" href="./asserts/css/bootstrap.min.css">
	<script src="./asserts/js/jquery.min.js"></script>
	<script src="./asserts/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="./asserts/datatables/DataTables-1.10.16/css/dataTables.bootstrap.css"/>
	<link rel="stylesheet" type="text/css" href="./asserts/datatables/Buttons-1.5.1/css/buttons.bootstrap.css"/>
	<script type="text/javascript" src="./asserts/datatables/JSZip-2.5.0/jszip.js"></script>
	<script type="text/javascript" src="./asserts/datatables/pdfmake-0.1.32/pdfmake.js"></script>
	<script type="text/javascript" src="./asserts/datatables/pdfmake-0.1.32/vfs_fonts.js"></script>
	<script type="text/javascript" src="./asserts/datatables/DataTables-1.10.16/js/jquery.dataTables.js"></script>
	<script type="text/javascript" src="./asserts/datatables/DataTables-1.10.16/js/dataTables.bootstrap.js"></script>
	<script type="text/javascript" src="./asserts/datatables/Buttons-1.5.1/js/dataTables.buttons.js"></script>
	<script type="text/javascript" src="./asserts/datatables/Buttons-1.5.1/js/buttons.bootstrap.js"></script>
	<script type="text/javascript" src="./asserts/datatables/Buttons-1.5.1/js/buttons.flash.js"></script>
    <script type="text/javascript" src="./asserts/datatables/Buttons-1.5.1/js/buttons.html5.js"></script>
    <style>
        h2{
          padding:0.5em;
        }
        input{
            margin:1.5%;
            width:15em;
            height:2.5em;
        }
        .group{
            display:block;
        }
        .form-group col-md-4 {
          padding-left:40px;
          padding-right:40px;
        }

    </style>
</head>
<body>
<form action=".php" method="POST">
<div class="container">
    <h2 style="text-align:center;">Data of CDRF</h2><br>
    <div align="center">

      <strong>
        <input type="text" value="MONTH" style="text-align:center;" id="date" readonly></input>
        <input type="text" value="SHIFT" style="text-align:center;" readonly></input>
      </strong>


    </div>
    <br>
    <div class="form-row"  align="center" >

    <div class="form-group col-md-6">
      <!-- <label for="inputText4">CDRF form server</label> -->
      <input type="text" class="form-control" id="inputText4" placeholder="CDRF from server" style="width:50%;" readonly>
    </div>
    <div class="form-group col-md-6">
      <!-- <label for="inputText4">PDRF form server</label> -->
      <input type="text" class="form-control" id="inputText4" placeholder="PDRF from server"  style="width:50%"   readonly>
    </div>
 
  </div>
    <br>
    <br>
    <div class="form-row"  align="center" >

    <div class="form-group col-md-6">
      <label for="inputText4">Enter M/c value</label>
      <input type="text" class="form-control" id="inputText4" placeholder="Enter value here" style="width:50%;" required>
    </div>
    <div class="form-group col-md-6">
      <label for="inputText4">Enter KG value</label>
      <input type="text" class="form-control" id="inputText4" placeholder="Enter value here" style="width:50%;" required>
    </div>

  </div>

      <br>
      <div align="center" style="text-align:center;">

        <button type="submit" style="margin:auto;" class="btn  btn-success">Submit</input>

      </div>
    </div>
  </div>
</form>
</body>
</html>     