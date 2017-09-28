/**
 * Created by Boody on 2016/7/27.
 */
window.onload=function(){
    navshow();
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