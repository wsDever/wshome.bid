define(['app','fullpage'],function(app,f){
	app.controller("aboutCtrl",function($rootScope,$scope){
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
		    	verticalCentered: false
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

		}



	});

});