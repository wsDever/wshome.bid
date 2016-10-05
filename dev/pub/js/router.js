define(['pub/js/app','respond'],function(app){
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
					// "topbar@index":{
					// 	templateUrl:"pub/tpls/topbar.html",
					// 	controllerUrl:"pub/js/controls/topbarCtrl",
     //            		controller: 'topbarCtrl'	
						
					// },
					// "menu@index":{
					// 	templateUrl:"pub/tpls/menu.html",
					// 	controllerUrl:"pub/js/controls/menuCtrl",
					// 	controller:"menuCtrl"
					// },
					// "banner@index":{
					// 	templateUrl:"pub/tpls/banner.html",
					// 	controller:""
					// },
					// "main@index":{
					// 	templateUrl:"pub/tpls/main.html",
					// 	controller:""
					// },
					// "footer@index":{
					// 	templateUrl:"pub/tpls/footer.html",
					// 	controller:""
					// },
					// "footbar@index":{
					// 	templateUrl:"pub/tpls/footbar.html",
					// 	controller:""
					// }
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
