let box = document.getElementsByClassName("circle");

window.addEventListener("click",getClickHere());

function getClickHere(e){
    let xPosition = e.clientX - (circle.offsetWidth/2);
    let yPosition = e.clientY - (circle.offsetHeight/2);

    let translate = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    circle.style.transform = translate;
}