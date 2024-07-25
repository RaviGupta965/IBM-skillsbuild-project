let bgImage=["https://d3i3l3kraiqpym.cloudfront.net/wp-content/uploads/2016/02/13105152/water-scarcity.jpg","https://www.worldvision.org.hk/images/G_Learn/image/G05_Learn_issues_02_water.jpg","https://etedge-insights.com/wp-content/uploads/2020/07/Water-Scarcity.jpg"]

let cnt=0;

let element=document.getElementsByClassName('slider')[0];

let cont=document.getElementsByClassName('container')[0];
setInterval(()=>{
    cnt=(cnt+1)%3;
    element.style.backgroundImage=`url(${bgImage[cnt]})`
    cont.style.backgroundImage=`url(${bgImage[cnt%3]})`
},2000);

