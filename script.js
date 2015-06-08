//js



$(function(){

	//背景色変更
	var count = setInterval(changeColor,2000);
	//カウンター
	color_i = 0;
	//使いたい色をここに突っ込む
	var color = ["#FF370A","#F90941","#F9F009","#009AF6","00F6B1"];
	function changeColor(){
		$("#body").css("background-color",color[color_i]);
		if(color_i <= color.length){ //配列clolorのlength
			color_i++;
		}else{
			color_i = 0;
		}

	}

	//流れる物体
	function boxSlide(){
		$("#box").animate({left:'120%'},6000);
		$("#box").animate({left:'-120%'},6000);
	}

	setInterval(boxSlide,2000);

	setInterval( function(){
		var d = new Date();
		var str =d.toTimeString();
    	$("#time").text(str);
  	}, 1000);








})