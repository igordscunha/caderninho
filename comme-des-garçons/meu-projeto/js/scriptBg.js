let bgImg = [
"https://www.comme-des-garcons.com/dm/2023_ss/00.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/01.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/02.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/03.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/04.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/05.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/06.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/07.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/08.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/09.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/10.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/11.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/12.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/13.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/14.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/15.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/16.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/17.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/18.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/19.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/20.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/21.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/22.jpg",
"https://www.comme-des-garcons.com/dm/2023_ss/23.jpg"
]

let currentIndex = 0


function changeBackgroundImage(){

    let bgIndex = document.getElementById("bg-index")

    bgIndex.classList.add("drag")

    setTimeout(function(){
        currentIndex = (currentIndex + 1) % bgImg.length
        bgIndex.style.backgroundImage = "url('" + bgImg[currentIndex] + "')"
        bgIndex.classList.remove("drag")
    }, 200)

}

const bgIndex = document.querySelector("#bg-index")
const body = document.querySelector('body')
body.addEventListener("click", changeBackgroundImage)