radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.setAllMotor(100, 100)
        basic.showNumber(1)
    } else if (receivedNumber == 2) {
        wuKong.setAllMotor(-100, -100)
        basic.showNumber(2)
    } else if (receivedNumber == 3) {
        wuKong.setAllMotor(0, 0)
        basic.showNumber(3)
    } else {
        wuKong.setAllMotor(0, 0)
    }
})
radio.setGroup(1)
