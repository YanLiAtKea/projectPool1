let wrapper = document.querySelector('.wrapper');
let linesRing = document.querySelector('.linesRing');
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
// click on the centre circle
lines.addEventListener('click', checkPosition);
// check the position of this circle, if it's at it's original position, then make cross, if it's already in the middle of the page, then turn the cross back to the =
function checkPosition(){
    let position = lines.getBoundingClientRect();
    if (position.left>100){ // not accurate number, but works, cuz we only have 2 different positions, either to the left edge or not
        hidePie();
        function hidePie(pie){
            hidePie1();
            function hidePie1(){
                document.querySelector('.wholePie1').className = "wholePie wholePie1 turnOut"
                pie1.className = "quaterPie quaterPie1 turnOut";
                hidePie3(); // first hide pie3, then pie2, in the opposite order as when fly in. don't really need to wait 1ms here, but to be safe?
                setTimeout(hidePie2, 150);
                setTimeout(hidePie4AndFlyOut, 300);
            }
            function hidePie2(){
                pie2.style.display = "none";
            }
            function hidePie3(){
                pie3.style.display = "none";
            }
            function hidePie4AndFlyOut(){
                pie1.style.display = "none";
                pie4.style.display = "none";
                lines.classList.remove('flyIn');
                flyOut();
                function flyOut(){
                    wrapper.className = "wrapper flyOut";
                }
                linesRing.className = "linesRing";
            }

        }
        setTimeout(unCross, 200); // the flyOut itself takes .3s (CSS line 97), so set this unCross animation to start at .2s, so that it looks like the x is turning = on its way to the left edge of the screen
        function unCross(){
            line1.classList.remove("clicked");
            line2.classList.remove("clicked");
        }
    } else { // circle not already in the centre, so fly in
        flyIn();
        function flyIn(){
            linesRing.className = "linesRing";
            wrapper.className = "wrapper flyIn"; // trigger the animation
            lines.classList.add('flyIn'); // because I change the wrapper size during flying and need to change the lines position accordings as well, so I add a class to the lines as well. Not necessary...
            setTimeout(showPie1, 500); // the flyin process takes .5s, so wait 500 to show pie1
            function showPie1(){
                pie1.style.display = "inherit";
                showPie4(); // already show pie4 at the same time as pie1 shows up, so that when pie1 starts to rotate, pie4 is ready to be displayed
                function showPie4(){
                    pie4.style.display = "inherit";
                }
                pie1.className = "quaterPie quaterPie1 turnIn";
                setTimeout(showPie2, 200); // the turning of the pie is now set to .6s, so 1 third of the time is 200
                setTimeout(showPie3, 400);
                setTimeout(dimPie1, 540); // because pie1 by default has opacity = 1 even though it doesn't have focus with mouse, so need to dim pie1. after the turning and dimming, every pie will have full opacity when mouse enters. see comment below as well
                function dimPie1(){
                    let ini = 1;
                    let opacityLowerV = setInterval(opacityLower, 10); // gradually lower opacity. could also use CSS animation for this. will run 6 times and each takes 10ms, altogether 60, add to the 540 on line 79 = 600, so when pie1 finish turning, it will have the same opacity as other pies
                    function opacityLower(){
                        if (ini > .51){
                            ini -= .1;
                        } else {
                            ini = .5;
                            clearInterval(opacityLowerV);
                        }
                        pie1.style.opacity = ini;
                    }
                }
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
// change opacity of the pies based on mouse position
allPies.forEach(hoverIn);
function hoverIn(pie){
    pie.addEventListener('mouseenter', Opacity);
    function Opacity(){
        pie.style.opacity = "1";
    }
}
allPies.forEach(hoverOut);
function hoverOut(pie){
    pie.addEventListener('mouseleave', Opacity);
    function Opacity(){
        pie.style.opacity = ".5";
    }
}
// add a shadow when hover over centre button
hoverButton();
function hoverButton(){
    lines.addEventListener('mouseenter', showRing);
    function showRing(){
        linesRing.className = "linesRing bigger";
    }
}
setTimeout(leaveButton, 300); // set a little timeout when mouse leave the centre button
function leaveButton(){
    lines.addEventListener('mouseleave', hideRing);
    function hideRing(){
        linesRing.className = "linesRing";
    }
}
