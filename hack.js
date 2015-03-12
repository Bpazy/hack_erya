$(document).ready(function(){
   		var info = {
			  videoId:"9715", //视频ID
			  seriNum:parseInt('6'), //当前是第几集
			  title:"什么是幸福（二）", //视频标题
			  getVideoUrl:"http://hrbeu.tsk.erya100.com:80/player/playerAction!getVideoUrl?videoId=9715&courseId=TS022&schoolId=000080&seriNum=6", //获得视频播放地址数组(加密地址)
			  
			  subtitleUrl:"http://hrbeu.tsk.erya100.com:80/player/playerAction!getNewSubtitle?videoId=9715&courseId=TS022&schoolId=000080&seriNum=6", //视频字幕加载地址
			  playListUrl:"http://hrbeu.tsk.erya100.com:80/player/playerAction!getPlayList?videoId=9715&courseId=TS022&schoolId=000080&pageNo=1&pageSize=10",
			  resourceUrl:"http://hrbeu.tsk.erya100.com:80/player/playerAction!getResourceUrl?videoId=9715&courseId=TS022&schoolId=000080&seriNum=6"
   			
   		};
		var c = getPlayConfig(info,''.length != 0);
		if(''.length == 0){
			c.skin.text.playLines=[{index:1,name:"公网"}];
		}
		if(checkFlashVersion()){
			var player = $("#eryaPlayer").cxplayer(c);
		}

		
			if(!-[1,]&&!window.XMLHttpRequest||navigator.userAgent.indexOf("MSIE 8.0")>0){
				document.onfocusout   = function(){
					if(isDiu==false){
						
					}
					isDiu=false;
				};
			}else{
				window.onblur = function(){
					if(isDiu==false){
						
					}
					isDiu=false;
				};
			}
			if(!-[1,]&&!window.XMLHttpRequest||navigator.userAgent.indexOf("MSIE 8.0")>0){
				document.onfocusin = function(){
					
				}
			}else{
				window.onfocus = function(){
					
				}
			}
		

		add53KF();
	});