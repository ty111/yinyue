
window.onload=function(){
    var  slide=document.getElementById('box2');
    var slideimg=new SlideLoopImage(['images/app8.jpg','images/app7.jpg','images/app6.jpg'],slide);
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
    that.container.style.width=280*(that.imagesArray.length)+'px';
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
            sport(that.container,'left',-(count++)*280);
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
                sport(that.container,'left',-(m--)*280);
                if(m==-1) {count=1;flag=1; m=that.imagesArray.length-2;}
            }
        }
    },3000);
};