import { Card } from '../alpaki-ui';
import { useMemo } from 'react';

export function NotFound() {
    return (
        <div className="flex place-content-center">
            <div className="sm:w-3/5 md:w-2/5 w-4/5 max-w-sm">

                <Card>
                    <div className="text-8xl text-alternative">
                        404
                    </div>
                    <div className="text-2xl">
                        upsss... Page not found
                    </div>
                </Card>
            </div>
        </div>
    );
}

abstract class HookComponent {
    abstract render(): JSX.Element;

    constructor () {
        return this.render() as any;
    }
}
