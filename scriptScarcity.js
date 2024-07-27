let bgImage=["https://d3i3l3kraiqpym.cloudfront.net/wp-content/uploads/2016/02/13105152/water-scarcity.jpg","https://www.worldvision.org.hk/images/G_Learn/image/G05_Learn_issues_02_water.jpg","https://etedge-insights.com/wp-content/uploads/2020/07/Water-Scarcity.jpg"]

let cnt=0;

let element=document.getElementsByClassName('slider')[0];

let cont=document.getElementsByClassName('container')[0];
setInterval(()=>{
    cnt=(cnt+1)%3;
    element.style.backgroundImage=`url(${bgImage[cnt]})`
    cont.style.backgroundImage=`url(${bgImage[cnt%3]})`
},2000);
$(".para").on("mouseover", function(){
    $(this).addClass("extra");
});
$(".para").on("mouseout", function(){
    $(this).removeClass("extra enlarge");
});
window.addEventListener("resize", () => {
    if(window.innerWidth < 500 ) {
        if(!$(".navbar").hasClass("dropdown")) {
        $(".navbar").addClass("dropdown");
        $(".logo").append('<svg class="drop" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M7 10l5 5 5-5"></path> </g> </g></svg>'); 
        $(".items").slideUp();
        $(".drop").on("click", ()=> {
            document.querySelector(".drop").classList.toggle("flip");
            $(".items").slideToggle();
        })
    }
    }else {
        if($(".navbar").hasClass("dropdown")){ 
            $(".drop").remove();
            $(".navbar").removeClass("dropdown");
        }
        $(".items").show();
    }
});
if(window.innerWidth < 500 ) {
    if(!$(".navbar").hasClass("dropdown")) {
    $(".navbar").addClass("dropdown");
    $(".logo").append('<svg class="drop" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M7 10l5 5 5-5"></path> </g> </g></svg>'); 
    $(".items").slideUp();
    $(".drop").on("click", ()=> {
        document.querySelector(".drop").classList.toggle("flip");
        $(".items").slideToggle();
    })
}
}else {
    if($(".navbar").hasClass("dropdown")){ 
        $(".drop").remove();
        $(".navbar").removeClass("dropdown");
    }
    $(".items").show();
}