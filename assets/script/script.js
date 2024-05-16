// Task 1 
let hero = document.getElementById("hero")

function bgcolor(color) {
    hero.style.backgroundColor = color
}
//Task 2
let bgsection2 = document.getElementById("section2")

function bgSection() {
    bgsection2.classList.toggle("bgcolor")
}
//Task 3 
let iconBtn = document.querySelectorAll(".icon2")

for (let i = 0 ; i < iconBtn.length ; i ++) {
    iconBtn[i].addEventListener('click', function(){
        let content = this.nextElementSibling;
        if (content.style.display == "block") {
            content.style.display ="none"
        }
        else {
            content.style.display = "block"
        }
    })
}


//Task4
let star = document.querySelectorAll(".star i") 
star .forEach((item, index1)=> {
    item.addEventListener('click' , ()=>{
        star.forEach((star , index2) =>{
            index1 >=index2 ? star.classList.add('active'):star.classList.remove('active')
        })
    })
})
