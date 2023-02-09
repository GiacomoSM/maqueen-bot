function luces () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function cmInches (núm: number) {
    return núm * 0.39
}
function lucesApagar () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function hacerCuadrado () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
}
function conducir () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 60)
        if (randint(1, 2) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
            basic.pause(200)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
            basic.pause(200)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 33)
    }
}
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
luces()
basic.showString("Hola David")
basic.showIcon(IconNames.Fabulous)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
loops.everyInterval(10, function () {
    music.playMelody("E A E A E A E A ", 110)
})
basic.forever(function () {
    conducir()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    conducir()
    basic.pause(300)
    conducir()
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    conducir()
    basic.pause(300)
    conducir()
})
