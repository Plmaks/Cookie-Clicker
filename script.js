// Variable Inits
let cookies, smitog, add, cost1, upg1_amount, slaves, cost2, whips
// Var Declars
whips = 0
slaves = 0

function earn() {
    // Initialization
    cookies = parseInt(document.getElementById("amount").innerHTML)
    smitog = document.getElementById("smily")
    if (typeof add === "undefined") {
        add = 1
    } else {}

    if (cookies > 1000 && cookies < 2500) {
        smitog.innerHTML = ":)"
    } else if (cookies > 2500 && cookies < 3000) {
        smitog.innerHTML = "Thanks for enjoying my game!"
    } else if (cookies > 3000) {
        smitog.innerHTML = ""
    } else {
        smitog.innerHTML = ""
    }

    // Math
    cookies = cookies + add   
    document.getElementById("amount").innerHTML = cookies

    // le return
    return cookies, smitog, add, amount
}

function Workerspawn() {
    
}

function Worker() {
    if (whips != 0) {
        cookies = parseInt(document.getElementById("amount").innerHTML)
        whips--
        cookies = cookies + slaves
        document.getElementById("amount").innerHTML = cookies
        console.log(whips)
        setTimeout(Worker, 1000)
    } else if (whips != 10 && whips < 9,8,7,6,5,4,3,2,1) {
        whips = 10
    }

    return cookies, slaves, whips
}

function upgrades(type) {
    switch(type) {
       case upg1:
        upg1_amount = parseInt(document.getElementById("upg1_amount").innerHTML) + 1
        cost1 = 8 + (upg1_amount * 2)
        if (cookies >= cost1) {
            add++
            cookies = cookies - cost1
            // Re-setting shit up
            cost1 = cost1 + (upg1_amount * 2)
            document.getElementById("upg1_amount").innerHTML = upg1_amount
            document.getElementById("upg1_cost").innerHTML = cost1
            document.getElementById("amount").innerHTML = cookies
        } else {
            alert("No money?")
        }
        return add, cost1, cookies, upg1_amount
       case upg2:
        upg2_amount = parseInt(document.getElementById("upg2_amount").innerHTML) + 1
        cost2 = 18 + (upg2_amount * 2)
        if (cookies >= cost2) {
            slaves++
            cookies = cookies - cost2
            document.getElementById("amount").innerHTML = cookies
            // Re-setting part 2: The Eletric Boogalo
            cost2 = cost2 + (upg2_amount * 2)
            document.getElementById("upg2_amount").innerHTML = upg2_amount
            document.getElementById("upg2_cost").innerHTML = cost2
            document.getElementById("amount").innerHTML = cookies
            Worker() 
            Workerspawn()
        } else {
            alert("Just admit you are broke, boy")
        }
        if (slaves != 0) {
            document.getElementById("Whip").style.visibility = "visible"
        } else {
            document.getElementById("Whip").style.visibility = "hidden"
        }
        return slaves, upg2_amount, cost2, cookies
       default:
        break;
    }
}