export function DateString(): string {
    const _dateStr: string = (new Date().toLocaleDateString) as any;

    return _dateStr;
}
