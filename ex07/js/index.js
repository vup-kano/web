var num=0;

$(document).ready(function(){
    $("img").each(function(){ 
		$(this).click(function(){
   			$(".bigshape").attr("src",this.src);
   			$(".u-box").toggle();
        });
	});

    $(".n1").click(function(){
    	$(".p1").show();
    	$(".p1").siblings().hide();
    	$(".n1").css("background","gray");
    	$(".n1").siblings().css("background","white");
    });
    $(".n2").click(function(){
    	$(".p2").show();
    	$(".p2").siblings().hide();
		$(".n2").css("background","gray");
		$(".n2").siblings().css("background","white");
    }); 
    $(".n3").click(function(){
    	$(".p3").show();
    	$(".p3").siblings().hide();
    	$(".n3").css("background","gray");
    	$(".n3").siblings().css("background","white");
    });

    $(".u-add").click(function(){
    	$(".u-add").prev().append(`<div class="u-content"><div class="u-no">${++num}</div><div class="u-info"></div><div class="u-del">Delete</div></div>`);
    })
    
    $('body').on('click', '.u-del', (e) => {
  		let t = e.currentTarget;
  		$(t).parent().remove();
  		num --;
  		let i=num;
  		let arr = $('.m-data').children();
  		arr=$.map(arr,function(item){
  			--i;
  			$(item).find('.u-no').text(num - i);
  		})
	})

});



