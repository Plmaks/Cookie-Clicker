// Variable Declarations
let cookies, smitog, add, amount, cost1, upg1_amount, slaves, cost2, whips

function earn() {
    // Initialization
    cookies = parseInt(document.getElementById("amount").innerHTML)
    smitog = document.getElementById("smily").innerHTML
    if (typeof add === "undefined") {
        add = 1
    } else {
        
    }

    if (amount < 1000) {
        smitog.innerHTML = ":)"
    } else if (amount < 2500) {
        smitog.innerHTML = "Thanks for enjoying my game!"
    } else if (amount < 3000) {
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
    /*
        The fact that this fucking language goes for conditions first while ignoring every other fucking thing is genuinely more infuriating than
        being stuck on one single fucking bug for 2 hours straight. Actually if we are being real me coding this at nearly 00:50 is more infuriating
        than anything else really, like who the fuck codes after midnight?
    */ 
    if (typeof whips === "undefined") {
        whips = 10
    }

    cookies = parseInt(document.getElementById("amount").innerHTML)
    while (whips > 0) {
        whips--
        setTimeout(Worker, 1000)
    }

    cookies = cookies + slaves
    document.getElementById("amount").innerHTML = cookies

    //Debug
    console.log(whips)

    return cookies, slaves, whips
}

function upgrades(type) {
    switch(type) {
       case upg1:
        upg1_amount = parseInt(document.getElementById("upg1_amount").innerHTML) 
        cost1 = 10 + (upg1_amount * 2)
        if (cookies >= cost1) {
            add++
            cookies = cookies - cost1
            document.getElementById("amount").innerHTML = cookies
        } else {
            alert("No money?")
        }
        return add, cost1, cookies, upg1_amount
       case upg2:
        upg2_amount = parseInt(document.getElementById("upg2_amount").innerHTML) 
        cost2 = 15 + (upg2_amount * 2)
        if (cookies >= cost2) {
            slaves++
            cookies = cookies - cost2
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