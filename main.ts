input.onButtonPressed(Button.A, function () {
    if (step < 10) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Sad)
        }
    } else {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Happy)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    step = 0
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
let step = 0
step = 0
basic.forever(function () {
    basic.showNumber(step)
})
