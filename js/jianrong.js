function getClass(classname,range){
    if(document.getElementsByClassName){
    	return range.getElementsByClassName(classname)
    
}else{
	var all=range.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < all.length; i++) {
		if(charaClass(all[i].className,classname)){
			arr.push(all[i]);
		}
	};
	return arr;
  }
}

function charaClass(tagclass,csclass){
	var arr=tagclass.split(" ");
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==csclass){
	     return true;
        }
	};
    return false;
}
//获取样式
 function getStyle(obj,stl){
       	if(obj.currentStyle){
       		return obj.currentStyle[stl];
       	}else{
       		return getComputedStyle(obj,null)[stl];
       	}
       }
     // alert(getStyle(div[0],'width'))
	


//获取函数
function $(selector,range){
	  var range=range||document;
	  
	if(typeof selector=="string"){ 

		if(selector.charAt(0)=="."){return getClass(selector.substr(1),range)}
			if(selector.charAt(0)=="#"){
				return document.getElementById(selector.substr(1))
			}
			if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
				return range.getElementsByTagName(selector)
			}
	}
	//页面加载事件
	 if(typeof selector=="function"){
	window.onload=selector;
   }
}