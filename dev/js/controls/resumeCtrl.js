define(['app','fullpage'],function(app,f){
	app.controller("resumeCtrl",function($rootScope,$scope){
		$scope.canscroll = false ;
		$scope.shownav = false ;
		
		// ie10以下浏览器
		var ie = navigator.userAgent.toLowerCase();
		if (ie.match(/msie/) != null )
		{
			$('#fullpage').addClass('ltie10');
		}
		

		$(document).ready(function() {
		    $('#fullpage').fullpage({
		    	navigation:true,
		    	navigationColor:'#fff',
		    	verticalCentered: false,
		    	onLeave:function(cur,next,dir){
		    		console.log(cur,next,dir);
		    		if(cur == 2 && next == 1 && dir == 'up'){
		    			return false;
		    		}
		    	}
		    });
		     
			var watchScroll = $scope.$watch('canscroll',function(newValue,oldValue, scope){
	        	$.fn.fullpage.setAllowScrolling(newValue);
			    $.fn.fullpage.setKeyboardScrolling(newValue);
			});
			var watchNav = $scope.$watch('shownav',function(newValue,oldValue, scope){
				if($scope.shownav)
					$("#fp-nav").show(500);
				else
					$("#fp-nav").hide(0);

			});
		});

		$scope.startPage = function(){

			$scope.canscroll = true ;
			$.fn.fullpage.moveSectionDown();

			$($("#fp-nav").children('ul').children('li')[0]).hide()
			$scope.shownav = true ;
		}

		// 画进度条
		drawprogress();

	});

	window.requestAnimFrame = (function(){
  		return  window.requestAnimationFrame || 
			    window.webkitRequestAnimationFrame || 
			    window.mozRequestAnimationFrame    || 
			    window.oRequestAnimationFrame      || 
			    window.msRequestAnimationFrame     ||  
    			function( callback ){
				    window.setTimeout(callback, 1000 / 60);
				};
		})();
	function drawprogress(){

		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		var w = 550, h = 60;
		canvas.width = w;
		canvas.height = h;
		// 重置
		function reset(){
		  ctx.fillStyle = "transparent";
		  ctx.fillRect(0,0,w,h);
		}
		// 画bar
		function progressbar(){
		  this.widths = 0;
		  this.hue = 180;

		  this.draw = function(){
		    ctx.fillStyle = 'hsla('+this.hue+', 50%, 50%, 1)';
		    ctx.fillRect(25,10,this.widths,12);
		    var grad = ctx.createLinearGradient(0,0,0,130);
		    grad.addColorStop(0,"transparent");
		    grad.addColorStop(1,"rgba(0,0,0,0.5)");
		    ctx.fillStyle = grad;
		    ctx.fillRect(25,10,this.widths  ,12);
		    
		    ctx.save();
		    ctx.font = '16px normal' ;
		    ctx.fillStyle = 'hsla('+this.hue+', 50%, 50%, 1)';
		    ctx.fillText("我们正在加载 " ,220,50);
		    var x = (this.widths / 5) + '%' ;
		    if(this.widths >= 498 )
		    {
		    	x = '100%' ;
		    }	
		    ctx.clearRect(320,30,100,30);
		    ctx.fillText(x,330,50);
			ctx.restore()
		  }
		}
		var bar = new progressbar();
		
		function draw(){
			reset();
			bar.hue += 0.5;
			bar.widths += 1.5;
			bar.draw();
		}

		function drawStartCircle(){
			ctx.beginPath();
		    ctx.fillStyle = 'hsla('+ bar.hue +', 50%, 50%, 1)';
			ctx.arc(25,16,6,0,2*Math.PI);
			ctx.fill();
		}
		function drawEndCircle(){
			ctx.beginPath();
		    ctx.fillStyle = 'hsla('+ bar.hue +', 50%, 50%, 1)';
			ctx.arc(525,16,6,1.4*Math.PI,0.6*Math.PI);
			ctx.fill();
		}
		function animloop() {
			var stop = null ;	
			drawStartCircle();
		  	draw();
		  	stop = requestAnimFrame(animloop);
		  	if(bar.widths >= 498 )
		  	{
				window.cancelAnimationFrame(stop);	
				drawEndCircle();
				// 开启滚动
				setTimeout(function(){
					$(".btnBox").fadeIn('1000')
				},1000)
		  	}
		}
		animloop();	
	}
});