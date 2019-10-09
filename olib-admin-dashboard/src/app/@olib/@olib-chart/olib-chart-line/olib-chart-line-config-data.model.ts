export class OlibChartLineData {
    private name : string;
    private type : string;
    private data : any;

    constructor(name : string, data : any){
        this.name = name;
        this.type = 'line';
        this.data = data;
    }
    
    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $type
     * @return {string}
     */
	public get $type(): string {
		return this.type;
	}

    /**
     * Getter $data
     * @return {any}
     */
	public get $data(): any {
		return this.data;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $type
     * @param {string} value
     */
	public set $type(value: string) {
		this.type = value;
	}

    /**
     * Setter $data
     * @param {any} value
     */
	public set $data(value: any) {
		this.data = value;
	}

}