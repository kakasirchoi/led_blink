input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
	
})
