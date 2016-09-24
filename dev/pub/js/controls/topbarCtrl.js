define(['pub/js/app'],function(app){
	app.controller("topbarCtrl",function($rootScope,$scope){
		$scope.options = [
            {
                name:"蓝色",
                value:"blue"
            },
            {
                name:"红色",
                value:"red"
            }
        ];
        //默认选择第一个样式
        $rootScope.theme = $scope.options[0];

        $scope.changeTheme = function(n){
        	// $rootScope.theme = 
        	alert(n)
        }

	});
});