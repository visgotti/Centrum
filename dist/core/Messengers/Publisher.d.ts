import { Hook, Handler } from '../Centrum';
export declare class Publisher {
    private pubSocket;
    constructor(pubSocket: any);
    make(name: any, encode?: Function, beforeHook?: Hook, afterHandler?: Handler<Function>): (...args: any[]) => void;
    private makeForData;
    private makeForBeforeHook;
}
