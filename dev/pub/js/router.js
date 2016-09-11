define(['require', 'pub/js/app'],function(require,app){
	return app.web.config(function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider
			.state("index",{
				"url":"/index",
				"views":{
					'':{
						templateUrl:"pub/tpls/index.html",
						controller:""
					},
					"topbar@index":{
						templateUrl:"pub/tpls/topbar.html",
						controller:""
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
						// templateUrl:"res/mainTpls/main.html",
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
