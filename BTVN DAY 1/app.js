// Chuyển bài 
document.getElementById("bt1").addEventListener("click", function () {
    document.getElementById("app").style.display = "flex";
    document.getElementById("app1").style.display = "none";
    document.getElementById("app2").style.display = "none";
})
document.getElementById("bt2").addEventListener("click", function () {
    document.getElementById("app1").style.display = "block";
    document.getElementById("app").style.display = "none";
    document.getElementById("app2").style.display = "none";
})
document.getElementById("bt3").addEventListener("click", function () {
    document.getElementById("app2").style.display = "block";
    document.getElementById("app1").style.display = "none";
    document.getElementById("app").style.display = "none";
})

//Trafic Light
const $red = document.getElementById("red");
const $yellow = document.getElementById("yellow");
const $green = document.getElementById("green");
const $time = document.getElementById("time");
function changeColorYellow() {
    $time.style.color = "yellow";
    $yellow.classList.add("yellow");
    $green.classList.remove("green");
    yellow = setTimeout(() => {
        $time.innerText = 15;
        changeColorRed();
    }, 3100);
}
function changeColorGreen() {
    $time.style.color = "green";
    $green.classList.add("green");
    $red.classList.remove("red");
    green = setTimeout(() => {
        $time.innerText = 3;
        changeColorYellow();
    }, 20100);
}
function changeColorRed() {
    $time.style.color = "red";
    $red.classList.add("red");
    $yellow.classList.remove("yellow");
    red = setTimeout(() => {
        $time.innerText = 20;
        changeColorGreen();
    }, 15100);
}
function traffic() {
    let setTime = setInterval(() => {
        --$time.innerText;
    }, 1000);
    changeColorGreen();
}
traffic();

// New Set

let arrRandom = [1, 1, 2, 3, 4, "a", "a", 5, 5, 5, 5];
document.getElementById("arr").innerText = arrRandom;
arrRandom = [...new Set(arrRandom)];
document.getElementById("check").addEventListener("click", function () {
    alert(`Kết quả: ${arrRandom}`);
});