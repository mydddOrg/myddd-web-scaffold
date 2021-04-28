
export abstract class AbstractEntity {
    
    public id: number;

    public version: number;

    public getId(): number {
        return this.id;
    }

    public getVersion(): number {
        return this.version;
    }

    public setId(id: number) {
        this.id = id;
    }

    public setVersion(version: number) {
        this.version = version;
    }

}