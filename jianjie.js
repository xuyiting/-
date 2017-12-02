
window.onload=function(){
    var oNav=document.getElementsByClassName('nav')[0];
    var navLeft=document.getElementById('left');
    var navRight=document.getElementById('right');
    var myChoose=document.getElementsByClassName('choose');
    var clikMe=document.getElementsByClassName('clik-me')[0];
    var sayHello=document.getElementsByClassName('say-hello')[0];
    var oHand=document.getElementsByClassName('hand')[0];
    var schoolLife=document.getElementById('schoollife');
    var oCaption=document.getElementsByClassName('caption')[0];
    var proGress=document.getElementsByClassName('progress-bar');
    var oContain=document.getElementsByClassName('contain');
    // 导航条选项颜色控制
    for(var i=0;i<4;i++){
        myChoose[i].index=i;
        myChoose[i].onclick=function(){
            for(var i=0;i<4;i++){
                myChoose[i].classList.remove("active");
            }
            this.classList.add("active");
        }
    }
    // 点击后hand消失
    clikMe.onclick=function(){
        sayHello.classList.add('name');
        oHand.style.display='none';
    }
    // 滚动条控制页面动画
    window.onscroll=function(){
        var scrollTop = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;
       // document.title=scrollTop+'px';
        if(scrollTop!=0){
            oNav.style.height=6+'vw';
            navRight.style.height=6+'vw';
            navRight.style.width=7+'vw';
            navLeft.style.fontSize=2.7+'vw';
            navLeft.style.lineHeight=6+'vw';
        }
        else{
            oNav.style.height=7.3+'vw';
            navRight.style.height=7.3+'vw';
            navRight.style.width=9+'vw';
            navLeft.style.fontSize=3.3+'vw';
            navLeft.style.lineHeight=7.3+'vw';
        }
        if(scrollTop<134){
            for(var i=0;i<4;i++){
                myChoose[i].index=i;
                myChoose[i].classList.remove("active");
            }
            myChoose[0].classList.add("active");
        }
        if(scrollTop>135){
            schoolLife.classList.add('flowl');
            for(var i=0;i<4;i++){
                myChoose[i].index=i;
                myChoose[i].classList.remove("active");
            }
            myChoose[1].classList.add("active");
        }
        if(scrollTop>550){
            oCaption.classList.add('flowl');
            for(var j=0;j<7;j++){
                proGress[j].index=j;
                proGress[j].classList.add('activebar');
            }
        }
        if(scrollTop>1170 && scrollTop<2053){
            oContain[0].classList.add('flowr');
        }
        if(scrollTop>1400){
            oContain[1].classList.add('flowr');
            for(var i=0;i<4;i++){
                myChoose[i].index=i;
                myChoose[i].classList.remove("active");
            }
            myChoose[2].classList.add("active");
        }
        if(scrollTop>1700){
            oContain[2].classList.add('flowr');
            for(var i=0;i<4;i++){
                myChoose[i].index=i;
                myChoose[i].classList.remove("active");
            }
            myChoose[3].classList.add("active");
        }
        if(scrollTop<1140){
            oContain[0].classList.remove('flowr');
            oContain[1].classList.remove('flowr');
            oContain[2].classList.remove('flowr');
        }
        if(scrollTop<1450){
            oContain[1].classList.remove('flowr');
        }
        if(scrollTop<1722){
            oContain[2].classList.remove('flowr');
        }
        if(scrollTop>2054){
            oContain[0].classList.remove('flowr');
        }
        if(scrollTop>2327){
            oContain[1].classList.remove('flowr');
        }
    }
}