// Variable Declarations
let cookies, smitog, add, amount, cost1, upg1_amount, slave, cost2

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
    document.getElementById("amount").innerHTML = cookies 

    // le return
    return cookies, smitog, add, amount
}

function Worker() {
    cookies = cookies + slave
    document.getElementById("amount").innerHTML = cookies

    return cookies, slave
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
        cost2 = 15 + (upg2_amount * 2)
        upg2_amount = parseInt(document.getElementById("upg2_amount").innerHTML) 
        if (cookies >= cost2) {
            slave++
            cookies = cookies - cost2
            document.getElementById("amount").innerHTML = cookies
            Worker() 
        } else {
            alert("Just admit you are broke boy.")
        }
        return slave, upg2_amount, cost2, cookies
       default:
        break;
    }
}