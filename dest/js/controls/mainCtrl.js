define(['app','data','directive'],function(app){
	app.controller("mainRootCtrl",function($rootScope,$scope){
		$scope.menus = menus ;
		var ck = false ;  

		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext('2d');
		var viewtype = 'ball' ; 
		var bodybg = new Image();
		var size = 20 ;
		var Dots = [] ;
		
		$(function(){
		    canvas.height = $('.canvasbox').height() ;
		    canvas.width = $('.canvasbox').width() ;
		    bodybg.src = "images/bg.png" ;
		    // 自执行一次取值
		    setDots()
		    visanalyser();

		    $(".sbtn").on('click',function(){
		        var s = $(".sbtn");
		        for(var i=0;i<s.length;i++)
		            $(s[i]).removeClass('sbtnsted');
		        $(this).addClass('sbtnsted');
		        viewtype = $(this).attr('tp');
		        setDots();
		    })
			$(".menu_idx").on("mouseover",function(){
			        $(".menubg").addClass("menubg_on");
			    }).on("mouseleave",function(){
			        if(!ck)
			            $(".menubg").removeClass("menubg_on");  
			        else
			            return ;    
			    })
			  $(".menubg").on('click',function(){
				$(".menu_idx").trigger('click');  	
			  })
		    $(".menu_idx").on('click',function(){	
		    	console.log(ck);
		    	if(!ck){        
			        $(".about").addClass('about_on');
			        $(".blog").addClass('blog_on');
			        $(".github").addClass('github_on');
			        $(".info").addClass('info_on');
			        $(".other").addClass('other_on');
		        }
		        else{
		        	$(".menubg").removeClass("menubg_on");      
		        	$(".about").removeClass('about_on');
			        $(".blog").removeClass('blog_on');
			        $(".github").removeClass('github_on');
			        $(".info").removeClass('info_on');
			        $(".other").removeClass('other_on');
		        }
			    ck = !ck ;
		    })

		    $(".circle div").on('click',function(){
		        $(".menubg").removeClass("menubg_on");      
		        $(".about").removeClass('about_on');
		        $(".blog").removeClass('blog_on');
		        $(".github").removeClass('github_on');
		        $(".info").removeClass('info_on');
		        $(".other").removeClass('other_on');
		        ck = false ;				        
		    }).on('mouseover',function(){
		    	$(this).addClass('mouseon');
		    }).on("mouseleave",function(){
		    	$(this).removeClass('mouseon');
		    })
		   
		});

		function drawView()
		{
		    var cw = canvas.width ;
		    var zw = cw / size  ;
		    var ch = canvas.height ;

		    ctx.clearRect(0,0,cw,ch);
		    ctx.drawImage(bodybg,0,0,cw,ch)

		    for(var i=0;i<size;i++)
		    {
		        var o = Dots[i];
		       if(viewtype == 'circle') {  // 圆状图
		            ctx.beginPath();
		            var o = Dots[i];
		            var r = 5 + o.r / 256 * (ch>cw?cw:ch)/10 ;
		            ctx.arc(o.x,o.y,r,0,2*Math.PI);
		            ctx.strokeStyle =  o.color2;
		            ctx.stroke();
		            o.x += o.vx ;
		            if(o.x > cw + r)
		            {
		                o.x = 0 - r  ;
		                o.y = random(0,ch) ;
		            }
		        }
		        else if(viewtype == 'ball'){
		            ctx.beginPath();
		           
		            var r = 10 + o.r / 256 * (ch>cw?cw:ch)/10 ;

		            ctx.arc(o.x,o.y,r,0,2*Math.PI);
		            var rag = ctx.createRadialGradient(o.x , o.y , 0 , o.x , o.y , r);
		            o.x += o.vx ;
		            if(o.x > cw + r )
		            {
		                o.x = 0 - r  ;
		                o.y = random(0,ch) ;
		            }
		            rag.addColorStop(0,'#fff');
		            rag.addColorStop(1,o.color);

		            ctx.fillStyle = rag ;
		            ctx.fill();
		        }
		    }
		}

		
		function random(m,n){
		    return Math.round(Math.random()*(n - m) + m);
		}
		function setDots(){
		    Dots = [] ;
		    var cw = canvas.width ;
		    var ch = canvas.height ;

		    for(var i=0;i<size;i++)
		    {
		        var x = random(0,cw);
		        var y = random(0,ch);        
		        var c = "rgba("+ random(0,255) +","+ random(0,255) +","+ random(0,255) +",0)" ;
		        var c2 = "rgb("+ random(0,255) +","+ random(0,255) +","+ random(0,255) +")";
		        Dots.push({
		            x:x,
		            vx:random(1,4),
		            y:y,
		            r:random(10,300),
		            color:c,
		            color2:c2,
		            cap:0
		        });
		    }
		}

		function setCir(){
			setInterval(function(){
			    for(var i=0;i<size;i++)
			    {
			        if( i%2 )
			        {
			            if(Dots[i].r<200)
			                Dots[i].r += random(1,40) ;
			            else{
			                Dots[i].r -= random(1,40) ;

			            }
			        }
			        else if(!i%2 )
			        {
			            if(Dots[i].r>0)
			                Dots[i].r -= random(1,40) ;
			            else{
			                Dots[i].r += random(1,40) ;
			            }
			        }
			        if(Dots[i].r < 0)
			                Dots[i].r = 5 ;
			    }    
			},1000)
		}

		function visanalyser()
		{
		 	requestAnimationFrame = window.requestAnimationFrame || window.webkitrequestAnimationFrame || window.mozrequestAnimationFrame;
		    function v(){
		        drawView();         //画柱状图
		        requestAnimationFrame(v);
		    }  
		    requestAnimationFrame(v);
		    setCir();
		}


	});
});

