export function classNames(defaultValue: string, declarations: { [index: string]: boolean }): string {
    const classes: string[] = [ defaultValue ];
    for (let property in declarations) {
        if (declarations.hasOwnProperty(property)) {
            const isActive = declarations[property];
            if (isActive) {
                classes.push(property);
            }
        }
    }

    return classes.join(' ');
}