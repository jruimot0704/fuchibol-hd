radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        yvalue = value
    }
    if (name == "y") {
        yvalue = value
    }
})
let yvalue = 0
radio.setGroup(1)
basic.forever(function () {
    cuteBot.motors(yvalue + yvalue, yvalue - yvalue)
})
