window.addEventListener("resize", () => {
    if(window.innerWidth < 700 ) {
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
if(window.innerWidth < 700 ) {
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