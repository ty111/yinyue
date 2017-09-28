/**
 * Created by Administrator on 2016/7/23.
 */
window.onload=function(){
    navshow();
    contentcenterImage();
    content2choose();
    content3song();
    content2singer();
};
function content2singer(){
    var imgparent=document.getElementById('tab241');
    var aimg=imgparent.getElementsByTagName('img');
    //alert(aimg.length);
    for(var i=0;i<aimg.length;i++)
    {
        aimg[i].onmouseover=function(){
            for(var j=0;j<aimg.length;j++)
            {
                aimg[j].className=' ';
            }
            this.className='frame';
        };
        aimg[i].onmouseout=function(){
            this.className=' ';
        };
    }
}
function content3song(){
    var sbox=document.getElementById('sbox');
    var adiv=sbox.getElementsByTagName('div');
    //alert(adiv.length);
    for(var i=0;i<adiv.length;i++)
    {
        adiv[i].index=i;
        adiv[i].onmouseover=function(){
            for(var j=0;j<adiv.length;j++)
            {
                var aimg0=adiv[j].getElementsByTagName('img')[0];
                var font0=adiv[j].getElementsByTagName('font')[0];
                var button0=adiv[j].getElementsByTagName('button')[0];
                aimg0.className=' ';
                aimg0.className='hidden';
                button0.className='hidden';
                font0.className=' ';
                addClass(button0,'btn');
                addClass(button0,'btn-warning');
                addClass(button0,'btn-sm');
            }
            var aimg=this.getElementsByTagName('img')[0];
            var font1=this.getElementsByTagName('font')[0];
            var button1=this.getElementsByTagName('button')[0];
            aimg.className=' ';
            aimg.className='show';
            button1.className='show';
            font1.className='active1';
            addClass(button1,'btn');
            addClass(button1,'btn-warning');
            addClass(button1,'btn-sm');
        };
    }
}
function content2choose(){
    var sing1=document.getElementById('tab21');
    var btnsong1=sing1.getElementsByTagName('input');
    var sing2=document.getElementById('tab221');
    var btnsong2=sing2.getElementsByTagName('input');
    var sing3=document.getElementById('tab231');
    var btnsong3=sing3.getElementsByTagName('input');
    var allchoicebtn1=document.getElementById('choose1');
    var allchoicebtn2=document.getElementById('choose2');
    var allchoicebtn3=document.getElementById('choose3');
    allchoicebtn1.onclick=function(){
        choose(btnsong1,btnsong1.length);
    };
    allchoicebtn2.onclick=function(){
        choose(btnsong2,btnsong2.length);
    };
    allchoicebtn3.onclick=function(){
        choose(btnsong3,btnsong3.length);
    };
}
function choose(btns,l){
    for(var i=0;i<l;i++)
    {
        if(btns[i].checked==false){
            btns[i].checked=true;
        }
    }
}
function contentcenterImage(){
    var tab1=document.getElementById('tab1');
    var img=tab1.getElementsByTagName('img');
    var play=tab1.getElementsByClassName('play')[0];
    // alert(play.length);
    var l=img.length;
    //alert(l);
    for(var i=0;i<l;i+=2)
    {

        img[i].index=i;
        img[i].onmouseover=function(){
            for(var j=0;j<l;j++)
            {
                img[j].style.opacity=1;
            }
            // alert(this.index+1);
            img[this.index+1].className=" ";
            addClass(img[this.index+1],'play');
            addClass(img[this.index+1],'show');
            this.style.opacity=img[this.index+1]=0.6;

        };
        img[i].onmouseout=function(){
            this.style.opacity=1;
            //alert(this.index+1);
            img[this.index+1].className=" ";
            addClass(img[this.index+1],'play');
            addClass(img[this.index+1],'hidden');
        };
    }
}
function navshow(){
    var singer=document.getElementById('singer');
    var channal=document.getElementById('channal');
    var show1=document.getElementById('show1');
    var show2=document.getElementById('show2');
    singer.onmouseover=function(){
        show1.className=" ";
        addClass(show1,'col-md-12');
        addClass(show1,'show');
        show2.className=" ";
        addClass(show2,'col-md-12');
        addClass(show2,'hidden');
    };
    channal.onmouseover=function(){
        show1.className=" ";
        addClass(show1,'col-md-12');
        addClass(show1,'hidden');
        show2.className=" ";
        addClass(show2,'col-md-12');
        addClass(show2,'show');
    };

}
function addClass(element,value)
{
    if(!element.className)
    {
        element.className=value;
    }
    else
    {
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}