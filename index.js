import { of, interval } from 'rxjs';

import { mergeMap, take } from 'rxjs/operators';

const firstObservable = of('Перший потік');

const secondObservable = () => interval(1000).pipe(take(3));


firstObservable
    .pipe(
        mergeMap(() => secondObservable())
    )
    .subscribe(data1 => {
        console.log("Вкладений subscribe: 2", data1);
    })
