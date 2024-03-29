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
            input:focus{
                background-color: black;
                border: 3px solid #555;
            }

            .group{
            display:block;
             }

            .form-group col-md-2{
            padding-left:40px;
            padding-right:40px;
            }
        </style>
</head>
<body>
    <form action=".php" action="POST">
            <div class="container">
                <h2 style="text-align:center;">CT Feeder no. (based on entry made by CTS Clerk)</h2><br>
                <div align="center">
                    <strong>
                    <input type="text" value="MONTH" style="text-align:center;" id="date" readonly></input>
                    <input type="text" value="SHIFT" style="text-align:center;;" readonly></input>
                    </strong>
                </div>
                <br>
                <div class="col-sm-12" align="center" style="margin:1em;">
                    <strong>
                        <div class=" col-sm-3">
                        <label for="ip1">Maker number</label>
                        <input type="text" class="form-control" placeholder="Enter value here" style="text-align:center;width=50%;" required></input>
                        </div>
                        <div class=" col-sm-3">
                        <label for="ip2">CT feeder number</label>
                        <input type="text" class="form-control" placeholder="Enter value here" style="text-align:center;" required></input>
                        </div>
                        <div class="col-sm-3">
                        <label for="ip3">CT Operation number</label>
                        <input type="text" class="form-control" placeholder="Enter value here" style="text-align:center;" required ></input>
                        </div>
                        <div class=" col-sm-3">
                        <label for="ip3"><i>CT blend value</i></label>
                        <input type="text" placeholder="CT Blend" style="text-align:center;background-color: #3CBC8D;" onclick="alert('pop-up');" readonly></input>
                        </div>
                        </strong>
                </div>
                <br>
                <br>
                <div align="center" style="padding:5em;">
                        <button type="submit" style="margin:auto;" class="btn btn-large btn-success">Submit</input>
                </div>
            </div> 
    </form> 
</body>
</html>     