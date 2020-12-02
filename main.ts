input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (step < 10) {
        basic.showIcon(IconNames.Sad)
        led.stopAnimation()
    } else {
        basic.showIcon(IconNames.Happy)
        led.stopAnimation()
    }
})
let step = 0
step = 0
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showNumber(step)
})
