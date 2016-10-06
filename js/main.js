window.onload=function(){
	    //main1选项卡
		var tagbox2=getClass("brand_content",document)[0];
		var links=getClass("link",document)[0];
		
		var lis2=links.getElementsByTagName('li');

		var lists=getClass("list",tagbox2);
    var sanjiao=$(".sanjiao",links);
		//alert(lists)
    lis2[0].style.borderColor="red";
    sanjiao[0].style.display="block";
		for (var i = 0; i < lis2.length; i++) {
			lis2[i].index=i;
			lis2[i].onmouseover=function(){
				for (var j = 0; j < lists.length; j++) {
					lists[j].style.display="none";
					lis2[j].style.borderColor="";
          sanjiao[j].style.display="none";
				};
				lists[this.index].style.display="block";
				lis2[this.index].style.borderColor="red";
        sanjiao[this.index].style.display="block";
			}
		};
    //main1图片边框动画
    for (var z = 0;z < lists.length; z++) {
         main1bkdh(lists[z])
    };

    function main1bkdh(list){
    var listone=$(".listone",tagbox2);
   // alert(listone)
for (var i = 0; i < listone.length; i++) {
    listone[i].onmouseover=function(){
    animate($(".lt2",this)[0],{width:220},300)
    animate($(".ll2",this)[0],{height:260},300)
    animate($(".rr2",this)[0],{height:260},300)
    animate($(".rb2",this)[0],{width:220},300)
    }
    listone[i].onmouseout=function(){
    animate($(".lt2",this)[0],{width:0},300)
    animate($(".ll2",this)[0],{height:0},300)
    animate($(".rr2",this)[0],{height:0},300)
    animate($(".rb2",this)[0],{width:0},300)
    }
}
}
  //银泰百货选项卡
     var  main2box=getClass("main2-rbx",document)[0];
     var m2rtbx=getClass("m2r-tbx",main2box)[0];
    //获取li
     var m2rlis=m2rtbx.getElementsByTagName("li")
     //获取控制内容
    var m2rlists=getClass("m2r-con",main2box);
     var sanjiao2=$(".sanjiao2",m2rtbx);
          m2rlis[0].style.borderColor="red";
          sanjiao2[0].style.display="block";

    // alert(m2rlists)
     for (var i = 0; i < m2rlis.length; i++) {
     	m2rlis[i].index=i;
     	m2rlis[i].onmouseover=function(){
     		for (var j = 0; j < m2rlists.length; j++) {
					m2rlists[j].style.display="none";
					m2rlis[j].style.borderColor="";
					m2rlis[j].style.fontWeight="normal";
          sanjiao2[j].style.display="none";
				};
				m2rlists[this.index].style.display="block";
				m2rlis[this.index].style.borderColor="red";
				m2rlis[this.index].style.fontWeight="bold";
        sanjiao2[this.index].style.display="block";

			}
     	}
  //银泰百货图片边框动画
   var bztjcon=$(".bztj-con",main2box)[0];
   //alert(bztjcon)
  var lis5=$("li",bztjcon)
  for (var y = 0; y < lis5.length; y++) {
    lis5[y].onmouseover=function(){
    animate($(".lt3",this)[0],{width:200},300)
    animate($(".ll3",this)[0],{height:250},300)
    animate($(".rr3",this)[0],{height:250},300)
    animate($(".rb3",this)[0],{width:200},300)
    }
    lis5[y].onmouseout=function(){
    animate($(".lt3",this)[0],{width:0},300)
    animate($(".ll3",this)[0],{height:0},300)
    animate($(".rr3",this)[0],{height:0},300)
    animate($(".rb3",this)[0],{width:0},300)
    }
} 
    //时尚名品选项卡
     var floor=getClass("floor_slide",document);
     for (var i = 0; i < floor.length; i++) {
           main3zj(floor[i])
     };
      function main3zj(floor){
     var pannels=getClass("content-box",floor)[0];
     var bas=pannels.getElementsByTagName('a');
      var blis=floor.getElementsByTagName('li');
     var rightbtn2=getClass("right",floor)[0];
     var leftbtn2=getClass("left",floor)[0];
    // alert(leftbtn)
     var indexx=0;
     bas[0].style.display="block";
     blis[0].style.background="red";
     // var t=setInterval(move,1000)
     //   function move(){
     //    index++;
     //    if(index==bas.length){index=0}
     //        for (var i = 0; i < bas.length; i++) {
     //            bas[i].style.display="none";
     //            blis[i].style.background="";
     //        };
     //        bas[index].style.display="block";
     //        blis[index].style.background="#fff";
     // }
      for (var i = 0; i < bas.length; i++) {
          blis[i].index=i;
          blis[i].onclick=function(){
            for (var j = 0; j < blis.length; j++) {
                blis[j].style.background="";
                bas[j].style.display="none"
            };
            blis[this.index].style.background="red";
            bas[this.index].style.display="block";
          }
      };
      rightbtn2.onclick=function(){
            indexx++;
         if(indexx==bas.length){indexx=0}
            for (var i = 0; i < bas.length; i++) {
                bas[i].style.display="none";
                blis[i].style.background="";
            };
            bas[indexx].style.display="block";
             blis[indexx].style.background="red"; 
      }
    leftbtn2.onclick=function(){
        indexx--;
        if(indexx<0){indexx=bas.length-1}
                for (var i = 0; i < bas.length; i++) {
                bas[i].style.display="none";
                blis[i].style.background="";
            };
            bas[indexx].style.display="block";
             blis[indexx].style.background="#fff"; 

    }
   //移入出现
   floor.onmouseover=function(){
     animate(leftbtn2,{left:0},200)
     animate(rightbtn2,{right:0},200)
   } 
    floor.onmouseout=function(){
     animate(leftbtn2,{left:-40},200)
     animate(rightbtn2,{right:-40},200)
   } 
};
    //banner轮播
    var tagbox=getClass("tag-box",document)[0];
        var imgbox=getClass("img-box",tagbox)[0];        
        //alert(tagbox)
        var as=tagbox.getElementsByTagName('a');
        //获取li
        var lis=tagbox.getElementsByTagName("li");
        //获取leftbtn
        var leftbtn=getClass("left",tagbox)[0];
        var rightbtn=getClass("right",tagbox)[0];
       // alert(rightbtn)
        var index=0;
        //轮播图
        as[0].style.display="block";
        //li轮播
        lis[0].style.backgroundColor="red";
        var t=setInterval(move,2000);
        function move(){
            index++;
            if(index==as.length){ index=0}
            for (var i = 0; i < as.length; i++) {
                as[i].style.display="none";
                lis[i].style.backgroundColor="";
            };
               as[index].style.display="block";
               lis[index].style.backgroundColor="red";
        };
        //底下色块-选项卡
        for (var i = 0; i < as.length; i++) {
             lis[i].index=i;
             lis[i].onclick=function(){
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.backgroundColor="";
                    as[j].style.display="none";
                };
                   lis[this.index].style.backgroundColor="red";
                   as[this.index].style.display="block";
             }
        };              

        //鼠标进入停止播放
       imgbox.onmouseover=function(){
           clearInterval(t);
          
       }
       //鼠标移出继续轮播
       imgbox.onmouseout=function(){
           t=setInterval(move,2000)
           
       }
       //右侧按钮点击
       rightbtn.onclick=function(){
        move();
       }
       //左侧点击效果
       leftbtn.onclick=function(){
          index--;
          if(index<0){index=as.length-1}
            for (var k = 0; k < as.length; k++) {
                  as[k].style.display="none";
                  lis[k].style.backgroundColor=""
            };
            as[index].style.display="block";
            lis[index].style.backgroundColor="red";
       }
       //banner左右按钮隐藏出现
      tagbox.onmouseover=function(){
         animate(leftbtn,{left:0},200);
           animate(rightbtn,{right:0},200);
      }
      tagbox.onmouseout=function(){
          animate(leftbtn,{left:-30},200);
           animate(rightbtn,{right:-30},200);
      }
//banner完成
//bbanner右侧图片移动
var bannerright=$(".banner-right")[0];
var bannritimg=$("img",bannerright)[0];
bannerright.onmouseover=function(){
  bannritimg.style.right="10px";
}
bannerright.onmouseout=function(){
  bannritimg.style.right="0";
}

//右下边框动画

   var youxiabkJs=$(".floor_banner");
    for (var i = 0; i < youxiabkJs.length; i++) {
             main3yxbk(youxiabkJs[i])
    };
   function main3yxbk(youxiabkJs){
var animation=$(".border_animation");
  for (var i = 0; i < animation.length; i++) {
    animation[i].onmouseover=function(){
    animate($(".bt",this)[0],{width:270},300)
    animate($(".bl",this)[0],{height:180},300)
    animate($(".br",this)[0],{height:180},300)
    animate($(".bb",this)[0],{width:270},300)
  }
    animation[i].onmouseout=function(){
    animate($(".bt",this)[0],{width:0},300)
    animate($(".bl",this)[0],{height:0},300)
    animate($(".br",this)[0],{height:0},300)
    animate($(".bb",this)[0],{width:0},300)
    }
};
}
//main3左下轮播
  var main3Js=$(".floorbarndSlide");
      for (var i = 0; i < main3Js.length; i++) {
        zuoxialb(main3Js[i])
      };
  function zuoxialb(main3Js){
  var imgs=$("img",main3Js);
  var m3zxleftbtn=$(".leftxiao",main3Js)[0];
  var m3zxrightbtn=$(".rightxiao",main3Js)[0];
  var iw=parseInt(getStyle(imgs[0],"width"))
 // alert(m3zxleftbtn)
  imgs[0].style.left=0+"px";
   var index1=0;
   var next=0;
   function scro(){
    next++;
    if(next==imgs.length){next=0}
        imgs[next].style.left=iw+"px";//把即将要显示的图片已过去
        animate(imgs[index1],{left:-iw},500);
        animate(imgs[next],{left:0},500);
        index1=next; 
   }
   var t2=setInterval(scro,1000)
   main3Js.onmouseover=function(){
    clearInterval(t2)
   }
   main3Js.onmouseout=function(){
    t2=setInterval(scro,1000)
   }
  
    m3zxrightbtn.onclick=function(){
    scro();
  }
    m3zxleftbtn.onclick=function(){
          next--;
          if(next<0){next=imgs.length-1}
       imgs[next].style.left=-iw+"px";//把即将要显示的图片已过去
        animate(imgs[index1],{left:iw},500);
        animate(imgs[next],{left:0},500);
        index1=next; 
    }

}
//右下角导航栏
var floatnav=$(".float_nav")[0];
var containerbox=$(".container-box")
var floatnavas=$("a",floatnav);
//alert(floatnavas)
var tops=[];
var flag=true;
for (var i = 0; i < containerbox.length; i++) {
    tops.push(containerbox[i].offsetTop)
    //alert(tops.length)
};
var strs=[];
for (var i = 0; i < floatnavas.length; i++) {
  strs.push(floatnavas[i].className)
};
//console.log(strs)
window.onscroll=function(){
  var scrtop=document.documentElement.scrollTop||document.body.scrollTop;
  if(scrtop>744){
    if(flag){
      flag=false;
    floatnav.style.display="block"
  }
 }else{
  if(!flag){
    flag=true;
    floatnav.style.display="none";
  }
 }
 //楼层显示

 for (var i = 0; i < tops.length; i++) {
      if(tops[i]<scrtop+80){
        for (var j = 0; j < strs.length; j++) {
          floatnavas[j].className=strs[j];
        };
        floatnavas[i].className+=" f_active"
      }
 };
 
 }
//点击楼层跳转
   for (var l = 0; l < floatnavas.length-1; l++) {
    floatnavas[l].index8=l;
    floatnavas[l].onclick=function(){
           animate(document.documentElement,{scrollTop:tops[this.index8]},300);
           animate(document.body,{scrollTop:tops[this.index8]},300)
     }
   };
  floatnavas[floatnavas.length-1].onclick=function(){
    animate(document.documentElement,{scrollTop:0},300);
           animate(document.body,{scrollTop:0},300)
  }
//头部我的银泰选项卡
var myyintai=$("#myyintai");
var myhome=$(".yt-seller-myhome",myyintai)[0];
var ythome=$("a",myyintai)[0];
//alert(ythome)
 hover(myyintai,function(){
               myhome.style.display="block";
               ythome.style.background="#fff"
                 
      },function(){
               myhome.style.display="none";
               ythome.style.background="";

      })
//微信
var wechat=$(".J_wechat")[0];
var mywechat=$(".yt-seller-wechat",wechat)[0];
var wechata=$(".wechat",wechat)[0];
// var weixin=$("s",wechata)[o];
hover(wechat,function(){
    mywechat.style.display="block";
    wechata.style.width=87+"px";
    wechata.style.background="#fff"
},function(){
    mywechat.style.display="none";
     wechata.style.width=40+"px";
    wechata.style.background=""
})
//手机
var myphone=$(".log-yt-phone")[0];
var iphone=$(".yt-seller-phone",myphone)[0];
var phonea=$(".yt-phone-link",myphone)[0];
hover(myphone,function(){
    iphone.style.display="block";
    phonea.style.width=120+"px";
    phonea.style.background="#fff"
},function(){
    iphone.style.display="none";
     phonea.style.width=72+"px";
    phonea.style.background=""
})
//全部分类列表选项卡
var dlbox=$(".menu-cate-all-out")[0];
var dls=$("dl",dlbox);
var dds=$("dd",dlbox);
var dts=$("dt",dlbox)
for (var i = 0; i < dls.length; i++) {
    dls[i].index=i;
    hover(dls[i],function(){
       dds[this.index].style.display="block";
       dts[this.index].style.background="#e5004f";
    },function(){
       dds[this.index].style.display="none";
       dts[this.index].style.background="";

    })
};
//购物袋选项卡
var gouwudai=$(".icart")[0];
var nothing=$(".yt-bags",gouwudai)[0];
hover(gouwudai,function(){
  nothing.style.display="block";
},function(){
  nothing.style.display="none";
})















}

 
