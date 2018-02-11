	
	frame = document.getElementById('frame'); 
	var context = frame.getContext('2d');
	
	tableArray = [];
	
	for (var i = 0; i < 800; i++){
		tableArray[i] = [];
		for (var j = 0; j < 600; j++){
			tableArray[i][j] = 0;
		}
	}
	
setInterval(function () {run()}, 1);
function run() {
	x = Math.floor(800*Math.random());
	y = Math.floor(600*Math.random());
	context.fillRect(x,y,1,1);
	
}