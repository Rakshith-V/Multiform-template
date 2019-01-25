$( document ).ready(function() {
	dashAnimtot();
	update();
	updategraphs();
	var Timerdashupdate = setInterval(function() {
		update();
	}, (1*60) * 1000);
	var Timerdashupdate = setInterval(function() {
		updategraphs();
	}, (15*60) * 1000);
});
function dashAnimtot() {
	var linearr = linearrdata;
	dashAnimlinename(linearr[linearr.length-1]);
	dashAnimvalues(linearr[linearr.length-1]);
	var countr = 0;
	var Timer = setInterval(function() {
		dashAnimlinename(linearr[countr]);
		dashAnimvalues(linearr[countr]);
		countr++
		if(countr === linearr.length){
			countr = 0;
		}
	}, 8 * 1000);
};
function dashAnimlinename(line) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			$( "#linename" ).hide();
			$("#linename").html(this.responseText);
			$( "#linename" ).slideToggle( "slow" );
		}
	};
	xmlhttp.open("GET","./functions/dashboard/dashanimationvalues.php?name=linename&line="+line,true);
	xmlhttp.send();
};

function dashAnimvalues(line) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			$( "#data" ).hide();
			$("#data").html(this.responseText);
			$( "#data" ).toggle( "slide" );
		}
	};
	xmlhttp.open("GET","./functions/dashboard/dashanimationvalues.php?name=values&line="+line,true);
	xmlhttp.send();
};

function update() {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var newdata = [];
			remotejson = this.responseText;
			var result = $.parseJSON(remotejson);
			$.each(result, function(k, v) {
				document.getElementById(k).innerHTML = v;
			});
		}
	};
	xmlhttp.open("GET","./functions/dashboard/update.php",true);
	xmlhttp.send();
};

function updategraphs() {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var newdatabreak = [];
			var a = [];
			var b = [];
			var c = [];
			var leg = ["legendlineaa","legendlineb","legendlinec","legendlined","legendlinee"];
			remotejson = this.responseText;
			var result = $.parseJSON(remotejson);
			$.each(result, function(k, v) {
				if(k == 'DATES'){
					mykpimaindash.data.labels = v
				}
				if(k == 'DATESS'){
					myhourlymaindash.data.labels = v
				}
				else if(k == 'MCCB'){
					myhourlymaindash.data.datasets[0].data = v
				}
				else if(k == 'CONTACTORS'){
					myhourlymaindash.data.datasets[1].data = v
				}
				else if(k == 'RELAY'){
					myhourlymaindash.data.datasets[2].data = v;
				}
				else if(k == 'OEE'){
					mykpimaindash.data.datasets[0].data = v
				}
				else if(k == 'A'){
					mykpimaindash.data.datasets[1].data = v
				}
				else if(k == 'Q'){
					mykpimaindash.data.datasets[2].data = v;
				}
				else if(k == 'P'){
					mykpimaindash.data.datasets[3].data = v;
				}
				else if(k == 'BREAKDOWN'){
					newdatabreak = v;
				}
			});
			for (var i = 0; i <= 4; i++) {
				a.push(newdatabreak[i]);
			}
			for (var i = 5; i <= 9; i++) {
				b.push(newdatabreak[i]);
			}
			for (var i = 10; i <= 14; i++) {
				c.push(newdatabreak[i]);
			}
			for (var i = 0; i <= 4; i++) {
				document.getElementById(leg[i]).innerHTML = c[i];
			}
			myBreakdownparatomaindash.data.datasets[0].data = a;
			myBreakdownparatomaindash.data.datasets[1].data = b;
			myBreakdownparatomaindash.data.labels = c;
			myBreakdownparatomaindash.update();
			mykpimaindash.update();
			myhourlymaindash.update();
			$('.loadingMAF').hide();
		}
	};
	xmlhttp.open("GET","./functions/dashboard/graphs.php",true);
	xmlhttp.send();
};/* 

function updategraphhourly() {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var newdatahour = [];
			remotejson = this.responseText;
			var result = $.parseJSON(remotejson);
			$.each(result, function(k, v) {
				if(k == 'DATES'){
					myhourlymaindash.data.labels = v
				}
				else if(k == 'MCCB'){
					myhourlymaindash.data.datasets[0].data = v
				}
				else if(k == 'CONTACTORS'){
					myhourlymaindash.data.datasets[1].data = v
				}
				else if(k == 'RELAY'){
					myhourlymaindash.data.datasets[2].data = v;
				}
				else if(k == 'OEE'){
					mykpimaindash.data.datasets[0].data = v
				}
				else if(k == 'A'){
					mykpimaindash.data.datasets[1].data = v
				}
				else if(k == 'Q'){
					mykpimaindash.data.datasets[2].data = v;
				}
				else if(k == 'P'){
					mykpimaindash.data.datasets[3].data = v;
				}
			});
			mykpimaindash.update();
			myhourlymaindash.update();
		}
	};
	xmlhttp.open("GET","./functions/dashboard/graphs.php?type=hourly",true);
	xmlhttp.send();
};

function updategraphkpi() {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var newdatahour = [];
			remotejson = this.responseText;
			var result = $.parseJSON(remotejson);
			$.each(result, function(k, v) {
				if(k == 'DATES'){
					mykpimaindash.data.labels = v
				}
				if(k == 'OEE'){
					mykpimaindash.data.datasets[0].data = v
				}
				else if(k == 'A'){
					mykpimaindash.data.datasets[1].data = v
				}
				else if(k == 'Q'){
					mykpimaindash.data.datasets[2].data = v;
				}
				else if(k == 'P'){
					mykpimaindash.data.datasets[3].data = v;
				}
			});
			mykpimaindash.update();
		}
	};
	xmlhttp.open("GET","./functions/dashboard/graphs.php?type=kpi",true);
	xmlhttp.send();
}; */
		
function newline() {
	'<input id="newline" type="text" class="form-control" name="line" required>';
};