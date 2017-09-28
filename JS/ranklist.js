/**
 * Created by Administrator on 2016/7/29.
 */
window.onload=function(){
    navshow();
    chooselist();
};
function chooselist(){
    var firstlist=document.getElementById('firstlist');
    var secondlist=document.getElementById('secondlist');
    var firstlistinput=firstlist.getElementsByTagName('input');
    var firstlistbtn=firstlist.getElementsByTagName('button')[0];
    var secondlistinput=secondlist.getElementsByTagName('input');
    var secondlistbtn=secondlist.getElementsByTagName('button')[0];
    firstlistbtn.index=secondlistbtn.index=0;
    secondlistbtn.onclick=function(){
        if(this.index%2==0){
            chooseAll(secondlistinput,firstlistinput.length);
            this.index=1;
        }
        else
        {
            chooseNone(secondlistinput,firstlistinput.length);
            this.index=0;
        }
    };
    firstlistbtn.onclick=function(){
        if(this.index%2==0){
            chooseAll(firstlistinput,firstlistinput.length);
            this.index=1;
        }
        else
        {
            chooseNone(firstlistinput,firstlistinput.length);
            this.index=0;
        }
    };
}
function chooseNone(btns,l){
    for(var i=0;i<l;i++)
    {
        if(btns[i].checked==false){
            btns[i].checked=true;
        }
        else{
            btns[i].checked=false;
        }
    }
}
function chooseAll(btns,l){
    for(var i=0;i<l;i++)
    {
        if(btns[i].checked==false){
            btns[i].checked=true;
        }
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