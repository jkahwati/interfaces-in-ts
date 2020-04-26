import {Logger} from './logger'

export class Option2Logger implements Logger{


    write(message) : void {
        console.log("->",message)
    }


}