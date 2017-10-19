let wrapper = document.querySelector('.wrapper');
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let lines = document.querySelector(".lines");
let pie1 = document.querySelector('.quaterPie1');
let pie2 = document.querySelector('.quaterPie2');
let pie3 = document.querySelector('.quaterPie3');
let pie4 = document.querySelector('.quaterPie4');
lines.addEventListener('click', flyIn);
function flyIn(){
    wrapper.className = "wrapper flyIn";
    setTimeout(showPies, 500);
    function showPies(){
        pie1.style.display = "inherit";
        pie1.className = "quaterPie quaterPie1 turn1";
        setTimeout(showOtherPies, 500);
    }
    function showOtherPies(){
        pie2.style.display = "inherit";
    }
    setTimeout(cross, 500);
    function cross() {
        line1.classList.toggle("clicked");
        line2.classList.toggle("clicked");
        console.log ("hshs")
    }
}



lines.addEventListener('click', cross);

