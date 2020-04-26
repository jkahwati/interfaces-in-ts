import {Logger} from './logger'

export class Option1Logger implements Logger{


    write(message) : void {
        console.log(message)
    }


}