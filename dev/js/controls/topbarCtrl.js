define(['app'],function(app){
	app.controller("topbarCtrl",function($rootScope,$scope){
		// $rootScope.theme = "main-red" ;
        $scope.changeTheme = function(theme){	
        	$rootScope.theme = theme ;
        }
	});
});