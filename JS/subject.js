window.onload=function(){
    navshow();
    var  slide=document.getElementById('box2');
    var slideimg=new SlideLoopImage(['images/subjectroll1.png','images/subjectroll2.png','images/subjectroll3.png'],slide);
    slideimg.changeImage();
};
var LoopImages=function(imgArr,container){
    this.imagesArray=imgArr;  //ÂÖ²¥Í¼Æ¬×é
    this.container=container; //ÂÖ²¥Í¼Æ¬ÈÝÆ÷
};

LoopImages.prototype={
    createImage:function(){
        return "create image";
    },
    changeImage:function(){
        return "change Image";
    }
};

//ÉÏÏÂÇÐ»»Í¼Æ¬
var  SlideLoopImage=function(imgArr,container){
    LoopImages.call(this,imgArr,container);
};

SlideLoopImage.prototype=new LoopImages();

SlideLoopImage.prototype.changeImage=function()
{
    var that=this;
    var timer1=null;
    var count=1;
    var flag=1;
    for(var i=0;i<this.imagesArray.length;i++)
    {
        that.container.innerHTML+='<img src='+that.imagesArray[i]+'/>';
    }
    var m=that.imagesArray.length-2;
    that.container.style.width=700*(that.imagesArray.length)+'px';
    //alert(cssStyle(that.container,'width'));
    timer1=setInterval(function(){

        if(flag==1 &&count< that.imagesArray.length)
        {
            //alert(that.imagesArray.length);
//			for(var i=0;i<abtn.length;i++)
//			{
//				abtn[i].className='';
//			}
//			abtn[count].className="active";
            sport(that.container,'left',-((count++)*700-100));
            if(count==that.imagesArray.length){flag=-1;}
        }
        else
        {
            if(flag==-1 && m>=0)
            {
                //--m;
//			  for(var i=0;i<abtn.length;i++)
//				{
//					abtn[i].className='';
//				}
//			  abtn[m].className="active";
                sport(that.container,'left',-((m--)*700-100));
                if(m==-1) {count=1;flag=1; m=that.imagesArray.length-2;}
            }
        }
    },3000);
};
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
