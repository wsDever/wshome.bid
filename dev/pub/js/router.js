define(['pub/js/app'],function(app){
	app.config(function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider
			.state("index",{
				url:"/index",
				views:{
					'':{
						templateUrl:"pub/tpls/index.html",
						controllerUrl:"pub/js/controls/mainCtrl",
                		controller: 'mainRootCtrl'
					},
					"topbar@index":{
						templateUrl:"pub/tpls/topbar.html",
						controllerUrl:"pub/js/controls/topbarCtrl",
                		controller: 'topbarCtrl'	
						
					},
					"menu@index":{
						templateUrl:"pub/tpls/menu.html",
						controller:""
					},
					"banner@index":{
						templateUrl:"pub/tpls/banner.html",
						controller:""
					},
					"main@index":{
						templateUrl:"pub/tpls/main.html",
						// controller:"dfCtrl"
					},
					"footer@index":{
						templateUrl:"pub/tpls/footer.html",
						controller:""
					},
					"footbar@index":{
						templateUrl:"pub/tpls/footbar.html",
						controller:""
					}
				}
			})
			.state("index.default",{
				"url":"/default",
				"views":{
					"main@index":{
						templateUrl:"pub/tpls/main.html",
						controller:""
					}
				}
			})
	})
})
