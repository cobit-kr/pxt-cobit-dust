/**
 * Functions to operate the cobit dust sensor
 */
//% color=#f44242 icon="\uf1b9" block="cobit-dust"
namespace cobit_dust {

    /**
	 *  Read dust sensor
	 */
    //% weight=90
    //% blockId="cobit-dust_readDustsensor" block="미세먼지센서 읽기"
    export function readDustsensor(): number {
        let value = 0
        pins.digitalWritePin(DigitalPin.P2, 0)
        control.waitMicros(280)
        value = pins.analogReadPin(AnalogPin.P1)
        control.waitMicros(40)
        pins.digitalWritePin(DigitalPin.P2, 1)
        control.waitMicros(9680)
        value = value * (5 / 1024)
        return value
    }
}