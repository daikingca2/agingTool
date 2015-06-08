//js



$(function(){
	var count = setInterval(changeColor,1000);
	//カウンター
	color_i = 0;
	//使いたい色をここに突っ込む
	var color = ["#000000","#87CEEB","#F0E68C","#FF0000"];
	function changeColor(){
		$("#body").css("background-color",color[color_i]);
		if(color_i <= color.length){ //配列clolorのlength
			color_i++;
		}else{
			color_i = 0;
		}

	}
})