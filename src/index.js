let heartIcon = document.querySelectorAll(".heartIcon");
let heardIncrease = document.querySelector(".heardIncrease")
let count = 0;
heartIcon.forEach(heart => {
    heart.addEventListener("click", function () {
        count++
        heardIncrease.innerHTML = count
    })
})


let callbtn = document.querySelectorAll(".callbtn");
let serviceAdd = document.querySelector(".serviceAdd")
let coinAdd = document.querySelector(".coinAdd")


callbtn.forEach(addcall => {
    addcall.addEventListener("click", function () {
        if (coinAdd.innerText <= 0) {
            alert("❌ You dont have sufficient coin.If you want to call. You have atleast 20 coin")
            return;
        }
        let station = addcall.parentElement.parentElement.querySelector(".stationName").innerText;
        let stationHelp = addcall.parentElement.parentElement.querySelector(".stationService").innerText;
        let callNum = addcall.parentElement.parentElement.querySelector(".callNum").innerText;
        let addTime = new Date()
        let addCurrent = addTime.getSeconds() + ":" + addTime.getMinutes() + ":" + addTime.getHours()
        alert("Calling " + station + " " + callNum)
        let div = document.createElement("div")
        div.classList.add("divAdd")
        let cards = `<div class="flex justify-between items-center  p-[11px] rounded-[10px] bg-[#f6f1f1]">
                     <div>
                       <h1 class="font-[600]">${stationHelp}</h1>
                       <p>${callNum}</p>
                     </div>
                     <div>${addCurrent}</div>
                  </div>`
        div.innerHTML = cards
        serviceAdd.append(div)
        coinAdd.innerHTML = coinAdd.innerText - 20

    })
})

let clearCall = document.querySelector(".clearCall");
clearCall.addEventListener("click", function () {
    if (!document.querySelector(".divAdd")) {
        return;
    }

    document.querySelectorAll(".divAdd").forEach(add => {
        add.remove()
    })
    coinAdd.innerHTML = "100"

})


let copyCard = document.querySelectorAll(".copyCard");
let copyAdd = document.querySelector(".copyAdd");
let copyplos = 0;
copyCard.forEach(coppys => {
    coppys.addEventListener("click", function () {

        let yourCall = coppys.parentElement.parentElement.querySelector(".callNum").innerText;
        alert(`your number copy: ${yourCall}`)
        navigator.clipboard.writeText(yourCall)

        copyplos++
        copyAdd.innerHTML = copyplos
    })
})
