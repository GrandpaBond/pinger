radio.onReceivedString(function (receivedString) {
    if (receivedString == "pong") {
        linked = 1
        radio.sendString("ping")
    } else {
        basic.showIcon(IconNames.No)
    }
})
let linked = 0
radio.setGroup(99)
linked = 0
while (linked == 0) {
    radio.sendString("ping")
}
