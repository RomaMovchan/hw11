import {interval} from "rxjs";
import {take, delay} from "rxjs/operators";

const obs = () => interval(1000).pipe(take(5));

obs().pipe(delay(1000))
    .subscribe(data => {
        console.log(data);
    })
