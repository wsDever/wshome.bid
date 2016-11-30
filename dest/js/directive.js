define(['app'],function(app){
	// 定义首页的menus
	app.directive('menus',function(){
		return {
			restrict : "A" ,
			replace : true ,
			scope :{
				menuUrl : '@' ,
				menuClass:'@' ,
				menuName:'@' ,
			} ,
			template : '<a ng-href="#/{{menuUrl}}"><div class="{{menuClass}}">{{menuName}}</div></a>',
			controller : 'menuDirectiveCtrl'
		}
	})
	app.controller("menuDirectiveCtrl",function($scope){	
		
	})
})
