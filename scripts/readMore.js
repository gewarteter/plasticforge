function readMore() {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if  (dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML="Подробнее";
        more.style.display="none";
    } else {
        dots.style.display = "none";
        btn.innerHTML="Cкрыть";
        more.style.display="inline";
    }
}

function readMore2() {
    let dots2 = document.getElementById("dots2");
    let more2 = document.getElementById("more2");
    let btn2 = document.getElementById("btn2");

    if  (dots2.style.display === "none"){
        dots2.style.display = "inline";
        btn2.innerHTML="Подробнее";
        more2.style.display="none";
    } else {
        dots2.style.display = "none";
        btn2.innerHTML="Cкрыть";
        more2.style.display="inline";
    }
}

function readMore3() {
    let dots3 = document.getElementById("dots3");
    let more3 = document.getElementById("more3");
    let btn3 = document.getElementById("btn3");

    if  (dots3.style.display === "none"){
        dots3.style.display = "inline";
        btn3.innerHTML="Подробнее";
        more3.style.display="none";
    } else {
        dots3.style.display = "none";
        btn3.innerHTML="Cкрыть";
        more3.style.display="inline";
    }
}