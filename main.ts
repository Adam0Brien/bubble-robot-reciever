radio.onReceivedString(function (receivedString) {
    if (receivedString == "wave") {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo8, 0)
        basic.pause(1000)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo8, 45)
    } else if (receivedString == "fan") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 80)
        basic.pause(1000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "beep") {
        music.play(music.stringPlayable("E D G F B A C5 B ", value), music.PlaybackMode.UntilDone)
    }
})
basic.showNumber(2)
radio.setGroup(2)
