import { Options } from './options';

export class Questions {

    constructor(
        public type: string,
        public id: number,
        public question: string,
        public options?: Array<Options>,
        public nextQuestion?: number
    ) { }

}
