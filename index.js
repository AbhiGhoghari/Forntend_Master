var list = document.querySelectorAll("li");


for(var i= 0 ; i < list.length; i++){
    list[i].addEventListener("mouseover" , function(){
        this.style.color ="hsl(5, 85%, 63%)";
    })
}

for(var i= 0 ; i < list.length; i++){
    list[i].addEventListener("mouseout" , function(){
        this.style.color ="hsl(236, 13%, 42%)";
    })
}


var h3 = document.querySelectorAll("h3");


for(var i= 0 ; i < h3.length; i++){
    h3[i].addEventListener("mouseover" , function(){
        this.style.color ="hsl(35, 77%, 62%)";

        
    })
}

for(var i= 0 ; i < h3.length; i++){
    h3[i].addEventListener("mouseout" , function(){
        this.style.color ="white";
    })
}


document.querySelector(".button").addEventListener("mouseover" , function(){
    document.querySelector(".button").style.backgroundColor ="hsl(240, 100%, 5%)";
})


document.querySelector(".button").addEventListener("mouseout" , function(){
    document.querySelector(".button").style.backgroundColor ="hsl(5, 85%, 63%)";
})


var h4 = document.querySelectorAll("h4");


for(var i= 0 ; i < h4.length; i++){
    h4[i].addEventListener("mouseover" , function(){
        this.style.color ="hsl(5, 85%, 63%)";

      
    })
}

for(var i= 0 ; i < h4.length; i++){
    h4[i].addEventListener("mouseout" , function(){
        this.style.color ="black";
    })
}

var sidebar = document.querySelector(".sidebar");

var menu = document.querySelector(".close");
menu.addEventListener("click" , function(){

   

   

    if(menu.getAttribute('src') === './assets/images/icon-menu.svg'){
        
        menu.setAttribute('src' , './assets/images/icon-menu-close.svg' );
        sidebar.style.visibility = "visible";
    }else{
        
        menu.setAttribute('src' , './assets/images/icon-menu.svg' );
        sidebar.style.visibility ="hidden";
    }
    
    
})
