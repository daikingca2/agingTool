//js

//参考
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
// <script type="text/javascript">
// $(function(){
//     var count = setInterval(changeImg, 500);//ミリ秒数
//     i = 1;
//     function changeImg(){
//         $("#idImgchng").children("img").attr("src","i" + i + ".png");
//         if(i <= 3){	//4枚の画像を切替
//             i++;
//         }else{
//             i = 1;
//         }
//     }
// });
// </script>

$(function(){
	var count = setInterval(changeImg,1000);
	//カウンター
	color_i = 0;
	//使いたい色をここに突っ込む
	var color = ["#000000","#87CEEB","#F0E68C","#FF0000"];
	function changeImg(){
		$("#body").css("background-color",color[color_i]);
		if(color_i <= color.length){ //配列clolorのlength
			color_i++;
		}else{
			color_i = 0;
		}

	}
})