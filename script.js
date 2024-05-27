document.addEventListener("DOMContentLoaded",function (e) {
    let check=document.getElementById("submit");
    let theme = document.getElementById("theme");
    let result = document.getElementById("result");

    check.onclick=function (event) {
        let angle = document.getElementById("angle").value;
        
        let randianangle= (angle/360)*2*Math.PI;
        let sin=Math.round(Math.sin(randianangle)*100)/100;
        let cos=Math.round(Math.cos(randianangle)*100)/100;
        let tan=Math.round(Math.tan(randianangle)*100)/100;
        result.innerHTML=`value of sin(${angle}) is:${sin} <br> value of cos(${angle}) is:${cos} <br> value of tan(${angle}) is:${tan} <br>`
    };
    let lighttheme=true;
    theme.onclick=function (event) {
        if (lighttheme) {
            lighttheme=false;
            document.body.style.backgroundColor="black";
            document.body.style.color="white";
        }
        else{
            lighttheme=true;
            document.body.style.backgroundColor="rgba(0, 0, 0, 0.1)";
            document.body.style.color="black";
        }
        
    }
})