'use strict'

(function(){
	if(!window.debug){
		window.debug = function(message){
			try{
				if(!window.console){
					window.console = {};
					window.console.log = function() {
						return ;
					}
				}
				window.console.log(message+"");
			}catch(e){
				
			}
		}
	}
})()