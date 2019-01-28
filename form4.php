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
            h1{
                padding:1.0em;
            }
            input{
                margin:1.5%;
                width:15em;
                height:2.5em;
            }
            input.fixed:focus{
                background-color: black;
                border: 3px solid #555;
            }
        </style>
</head>
<body>
    <form action=".php" method="POST">
        <div class="container-fluid">
            <h1 style="text-align:center;">Machine</h1><br>
            <div align="center">
                <strong>
                <input type="text" class="apply" value="CURRENT SHIFT" style="text-align:center;"  readonly></input>
                <input type="text" class="apply" value="PREVIOUS SHIFT" style="text-align:center;" readonly></input>
                </strong>
            </div>
            <br>
            <div class="form-group" align="center">
                <strong>
                    
                    <div class="form-group col-md-6">
                    <label for="ip">Actual kg/mc</label>
                    <input type="text" placeholder="Enter value here" class="form-control" style="text-align:center;width:50%;" required></input>
                    </div>
                    <div class="form-group col-md-6">
                    <label for"ipi">Winnowing Rejection</label>
                    <input type="text" id="ipi" placeholder="Data of Winnowing rejection" class="form-control" style="text-align:center;width:50%;" required></input>
                    </div>
                </strong>
            </div>
            <div align="center">
            <input type="text" class="fixed" placeholder="MNC" style="text-align:center;" readonly></input>
            </div>
            <div align="center">
                <button type="submit" style="margin:auto;margin" class="btn btn-large btn-success">Submit</input>
            </div>
        </div>
    </form>  
</body>
</html>     