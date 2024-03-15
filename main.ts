let xVal = 0
basic.forever(function () {
    xVal = pins.analogReadPin(AnalogPin.P0)
    if (xVal > 800) {
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (xVal > 650) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (xVal > 550) {
        music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (xVal > 450) {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
