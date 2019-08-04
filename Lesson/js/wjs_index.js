$(function (){
    $(window).on("resize",function (){
        // 获取item
        var items = $(".carousel-inner .item");
        console.log(items);
        // console.log("监听window大小");
        // 判断设备宽度
        var device_width = $(window).width();
        if( device_width >= 768 ){
            items.each(function (index, ele){
                // console.log(index, ele);
                $(ele).html("<a href=\"javascript:;\" class=\"pcImg hidden-xs\" style=\"background-image:url('./images/slide_0"+ (index + 1) +"_2000x410.jpg')\"></a>")
            })
        }else{
            items.each(function (index, ele){
                // console.log(index, ele);
                $(ele).html("<a href=\"javascript:;\" class=\"mobileImg hidden-sm hidden-md hidden-lg\">\n" +
                    "                        <img src=\"./images/slide_0"+ (index + 1) +"_640x340.jpg\" alt=\"...\">\n" +
                    "                    </a>")
            })
        }
    }).trigger("resize");


    // 移动端滑动轮播图
    // 获取当前轮播图
    var carousel_inner = document.getElementsByClassName("carousel-inner")[0];
    // console.log(" 获取轮播元素 ",carousel_inner);
    var hm = new Hammer(carousel_inner);
    hm.on("swipeleft",function (){
        $('.carousel').carousel('next')
    });
    hm.on("swiperight",function (){
        $('.carousel').carousel('prev')
    });
    
    


})
