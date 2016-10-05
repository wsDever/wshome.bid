"use strict" ;
// (function(){
	var baseUrl = document.getElementById("main").getAttribute("data-baseUrl");
	var config = {
		baseUrl : baseUrl  ,
		// 配置js库及js文件路径
		paths : {
			"jquery":"lib/jquery-3.1.0.min",
			// "pintuer" : "lib/pintuer",
			"angular" : "lib/angular.min",
			"angular-ui-router" : "lib/angular-ui-router.min",
			"angular-async-loader" : "lib/angular-async-loader.min",
			"respond" : "lib/respond"
		},
		// 配置依赖的文件包名
		shim:{
	        "angular":{
	            exports:"angular"
	        },
	        "angular-ui-router":{
	        	deps:['angular'],
	            exports:"angular-ui-router"
	        }
	    },
	    // 最基础的依赖，会先加载
	    deps:["jquery"]
	}

	require.config(config);

	require(['angular','pub/js/router'], function(angular){
		// 启动angular
		// 注意：手动启动angular 时不能在index.html中再添加ng-app
        angular.element(document).ready(function() {
	        angular.bootstrap(document, ['wsWeb']);
	        angular.element(document).find('html').addClass('ng-app');
	    });
    });
// })
