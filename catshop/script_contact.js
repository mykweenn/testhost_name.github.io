const a = document.querySelectorAll(".aboba");
const cat = document.querySelector(".cat");


cat.addEventListener("mouseenter", () => {

    cat.setAttribute('src', 'image/cat_open.jpg');
    a.forEach(element => {
        element.setAttribute("style", "box-shadow: 0px 0px 12px #941952; padding: 8px; transition-duration: 0.8s;");


    }

    );

});

a.forEach(element => {


    element.addEventListener("mouseenter", () => {

        cat.setAttribute('src', 'image/cat_open.jpg');

        element.setAttribute("style", "box-shadow: 0px 0px 12px #e45890; transition-duration: 0.8s; padding: 8px;");

    }



    );
    element.addEventListener("mouseleave", () => {
        element.removeAttribute("style");
        cat.removeAttribute("style");
        cat.setAttribute('src', 'image/cat_close.jpg');


    });





});
cat.addEventListener("mouseleave", () => {

    cat.setAttribute('src', 'image/cat_close.jpg');
    a.forEach(element => {
        element.removeAttribute("style");

    });


});