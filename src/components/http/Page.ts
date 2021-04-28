
export class Pagination {
    current: number = 1;
    pageSize: number = 10;
    defaultPageSize: number = 10;
    total: number = 0;

    public totalPage(): number {
        let add = 0;
        if (Math.round(this.total % this.pageSize) != 0) {
            add += 1;
        }
        return Math.round(this.total / this.pageSize) + add;
    }
}

export class Page<T> {

    pageSize: number;

    start: number;

    data: T[];

    resultCount: number;

    pageIndex: number;

}