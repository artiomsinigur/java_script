window.addEventListener("load", function() {
    var gallery = document.getElementById("gallery");
    var img = document.querySelector(".img");
    var allBasic = document.getElementsByClassName("is-basic");
    var allHover = document.getElementsByClassName("is-hover");
    var imgBasic = document.querySelector(".is-basic");
    var imgHover = document.querySelector(".is-hover");
    var imgShow = document.querySelector(".is-show");

    // imgBasic.addEventListener("mouseover", function() {
    //     imgHover.classList.add("focus");
    // });
    
    imgHover.addEventListener("mouseout", function() {
        imgHover.classList.remove("focus");
    });

    imgHover.addEventListener("click", function() {
        imgShow.style.display="block";
    });


    for (var i = 0; i < allBasic.length; i++) {


        allBasic[i].addEventListener("mouseover", function() {
            imgHover.classList.add("focus");
        });
    }

    // for (var i = 0; i < allHover.length; i++) {
    //     console.log(allHover[i]);

    //     allHover[i].addEventListener("mouseout", function() {
    //         allHover[i].classList.remove("focus");
    //     });
    // }


    function addFocus(imgFocus) {
        imgBasic.addEventListener("mouseover", function() {
            imgHover.classList.add("focus");
        });
    }
});