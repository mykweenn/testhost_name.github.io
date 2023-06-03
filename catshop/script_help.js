
const details = document.querySelectorAll("details");
const ul = document.querySelectorAll(".ulbord1");


details.forEach(element => {

  element.addEventListener("toggle", () => {

  ul[0].setAttribute('style', 'animation: sweep 2s ease-in-out;');

    
    let e = element.querySelector('.image-icon')
 
    
    if (e.src.slice(-12) == "cat_open.jpg")
    {
    
        e.setAttribute('src', 'image/cat_close.jpg');
        e.setAttribute('style', 'transition-duration: 0.8s;');
    }
    else
    {
        e.setAttribute('src', 'image/cat_open.jpg');

    }
  
  
})
  
});


