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
        basic.pause(280)
        value = pins.analogReadPin(AnalogPin.P1)
        basic.pause(40)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(9680)
        value = value * (5 / 1024)
        return value
    }
}