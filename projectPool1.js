let wrapper = document.querySelector('.wrapper');
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let lines = document.querySelector(".lines");
let allPies = document.querySelectorAll('.quaterPie');
let pie1 = document.querySelector('.quaterPie1');
let pie2 = document.querySelector('.quaterPie2');
let pie3 = document.querySelector('.quaterPie3');
let pie4 = document.querySelector('.quaterPie4');
/*
lines.addEventListener('click', flyIn);
function flyIn(){
    wrapper.className = "wrapper flyIn";
    setTimeout(showPies, 500);
    function showPies(){
        pie1.style.display = "inherit";
        pie1.className = "quaterPie quaterPie1 turn1";
        setTimeout(showPie2, 500);
    }
    function showPie2(){
        pie2.style.display = "inherit";
    }
    setTimeout(cross, 500);
    function cross() {
        line1.classList.add("clicked");
        line2.classList.add("clicked");
    }
}
*/

lines.addEventListener('click', checkPosition);
function checkPosition(){
    let position = lines.getBoundingClientRect();
    if (position.left>300){
        allPies.forEach(hidePie);
        function hidePie(pie){
            pie.style.display = "none";
        }
        setTimeout(flyOut, 500);
        function flyOut(){
            wrapper.className = "wrapper flyOut";
        }
        setTimeout(unCross, 500);
        function unCross(){
            line1.classList.remove("clicked");
            line2.classList.remove("clicked");
        }
    } else {
        flyIn();
        function flyIn(){
            wrapper.className = "wrapper flyIn";
            setTimeout(showPie1, 500);
            function showPie1(){
                pie1.style.display = "inherit";
                showPie4();
                function showPie4(){
                    pie4.style.display = "inherit";
                }
                pie1.className = "quaterPie quaterPie1 turn1";
                setTimeout(showPie2, 670);
                setTimeout(showPie3, 1340);
//                setTimeout(showPie4, 2100);
            }
            function showPie2(){
                pie2.style.display = "inherit";
            }
            function showPie3(){
                pie3.style.display = "inherit";
            }
            setTimeout(cross, 500);
            function cross() {
                line1.classList.add("clicked");
                line2.classList.add("clicked");
            }
        }
    }
}

allPies.forEach(hoverIn);
function hoverIn(pie){
    pie.addEventListener('mouseenter', Opacity);
    function Opacity(){
        pie.style.opacity = ".3";
    }
}
allPies.forEach(hoverOut);
function hoverOut(pie){
    pie.addEventListener('mouseleave', Opacity);
    function Opacity(){
        pie.style.opacity = "1";
    }
}


