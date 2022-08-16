const petals = document.querySelectorAll('.petal')

const fal = ['', '', '', '', '', '', '', '', '', '', '', '']
const durum = document.querySelector('.durum')

let random = Math.floor(Math.random() * 2)
let shuffle = [true, false]
console.log(random);

function startRandom() {
    return shuffle[random]
}

/*


*/

function GameOver(sonuc) {
    document.querySelector(`.${sonuc}`).classList.remove('fade')
    document.querySelector(`.${sonuc}`).classList.add('show')
    document.querySelector(`.${sonuc}`).style.display = 'block'

    setTimeout(function () {
        console.log('hello')
        document.querySelector(`.${sonuc}`).classList.add('fade')
        document.querySelector(`.${sonuc}`).classList.remove('show')
        document.querySelector(`.${sonuc}`).style.display = 'none'
        document.location.reload()

    }, 20000)
}
let firstClick=true
let check = startRandom();
// remove element by one by slow motion

petals.forEach((petal, index) => {
    petal.addEventListener('click', (e) => {
        if (index === 0 && firstClick) {
            alert('Soldan sağa')
        } else {
            //   let start = startRandom();
            firstClick=false
            if (!check) {
                check = true
                console.log("seviyor")
                durum.innerHTML = "SEVİYOR 😍"
                fal[index] = "seviyor"
            } else {
                check = false
                console.log("sevmiyorr")
                durum.innerHTML = "SEVMİYOR 😢"
                fal[index] = "sevmiyor"
            }

            if (fal[0] == 'seviyor') {
                console.log('oley be')

                GameOver(fal[0])
            }
            if (fal[0] == 'sevmiyor') {
                console.log('yak bi cugara')
                GameOver(fal[0])
                var audio = document.getElementById("myaudio");
                audio.currentTime = 0;
                audio.play();
                setTimeout(function () {
                    audio.pause();
                }, 20000)
            }
            e.target.remove()
        }

        // remove petal every one second automatically

    })




})



var myhol = document.getElementById("hol");

// start function randVal
function randVal(myVal, other) {

    if (Array.isArray(myVal)) {

        var ranInArray = Math.floor(Math.random() * myVal.length);
        return myVal[ranInArray];


    } else {

        var randnum = Math.floor(Math.random() * myVal);
        return randnum;

    }


}
// end function randVal
var color = ['#cc3673', '#273522', '#7c001b', '#3a0003', '#dbd000', '#824275', '#eba2a3', '#d1003b'],
    sizebox = [10, 15, 20, 5, 12, 30, 22, 34, 16],
    myh = document.getElementById("hol"),
    lV = document.getElementById("h");






// for (i = 0; i < 100; i++) {
//     for (x = 0; x < myh.children.length; x++) {

//         var mypub = document.createElement("div");

//         var size = randVal(sizebox) + "px";

//         mypub.style.backgroundColor = randVal(color);

//         mypub.style.borderColor = randVal(color);

//         mypub.style.width = size;

//         mypub.style.height = size;

//         mypub.style.left = randVal(100) + "%";

//         mypub.style.top = randVal(100) + "%";

//         myh.children[x].appendChild(mypub);

//     }
// }
// var ct = document.getElementById("center");

// setInterval(function () {
//     lV.style.backgroundColor = randVal(color);
//     lV.nextElementSibling.style.backgroundColor = randVal(color);

//     for (i = 0; i < ct.children.length; i++) {
//         ct.children[i].style.backgroundColor = randVal(color);
//     }

// }, 1000);