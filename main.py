def cmInches(núm: number):
    return núm * 0.39
basic.show_string("Hola David")
basic.show_icon(IconNames.FABULOUS)
maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)

def on_forever():
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) < 4:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 60)
        if randint(1, 2) == 1:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 60)
            basic.pause(200)
        else:
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 60)
            basic.pause(200)
    else:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 33)
basic.forever(on_forever)
