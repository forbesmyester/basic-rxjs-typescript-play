/// <reference path="../typings/main.d.ts" />

import * as T from "./types";
import * as Rx from '@reactivex/rxjs';

export default class Twitter {

    msgs: T.Message[];
    sub: Rx.Subject<T.Message>;

    constructor() {
        this.msgs = [];
        this.sub = <Rx.Subject<T.Message>>new Rx.Subject();
        this.sub.subscribe({
            next: (m) => {
                this.msgs.push(m);
            },
        });
        let obs = <Rx.Observable<T.Message>>new Rx.Observable((obs) => {
            obs.next({ txt: "Starting!" });
        });
        let mySub = obs.subscribe({
            next: (m) => {
                this.msgs.push(m);
            }
        });
        mySub.unsubscribe();
    }

    message(txt) {
        this.sub.next({ txt: txt });
    }

    getMessages() {
        return this.msgs;
    }
}
