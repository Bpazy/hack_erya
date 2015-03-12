$(document).ready(function(){
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