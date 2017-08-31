/**
 * Created by Administrator on 2017/7/20.
 */
window.onload = function()
{
        var oDiv=document.getElementsByClassName("hd_top_rg")[0];
        var aLi=oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');
        var aDiv1=[];
        var aDiv2=[];
        var aI=[];
        var oTimer=null;
        var i=0;
        for(i=0;i<aLi.length;i++)
            {
             aDiv1.push(aLi[i].getElementsByTagName('div')[0]);
             aDiv2.push(aLi[i].getElementsByTagName('div')[1]);
             aI.push(aLi[i].getElementsByTagName('i')[0]);
            }
        for(i=0;i<aLi.length;i++)
         {
          aDiv1[i].listIndex=i;
          aDiv1[i].onmouseover=function(){
           if(oTimer){
            clearTimeout(oTimer);
            oTimer=null;
           }
          for(i=0;i<aLi.length;i++){
           aDiv2[i].style.display='none';
           aLi[i].style.border='none';
          }
          aI[this.listIndex].className='tangle2';
          aDiv2[this.listIndex].style.display='block';
           aLi[this.listIndex].style.border='1px solid #F9F9F9';
         };
         aDiv1[i].onmouseout=function(){
          var index=this.listIndex;
          oTimer=setTimeout(function(){
           aDiv2[index].style.display='none';
           oTimer=null;
          },1000);
          aI[this.listIndex].className='tangle';
         };
         aDiv2[i].listIndex=i;
         aDiv2[i].onmouseover=function(){
          aI[this.listIndex].className='tangle2';
          if(oTimer){
           clearTimeout(oTimer);
           oTimer=null;
          }
         };
         aDiv2[i].onmouseout=function(){
          var index=this.listIndex;
          oTimer=setTimeout(function(){
           aI[index].className='tangle';
           aDiv2[index].style.display='none';
           oTimer=null;
          },30);
         }
        }



};



