export class OlibChartTextConfig{

    private title : any;
    private status : string;
    private value : any;

    constructor(){

    }

    /**
     * Getter $title
     * @return {any}
     */
	public get $title(): any {
		return this.title;
	}

    /**
     * Getter $status
     * @return {string}
     */
	public get $status(): string {
		return this.status;
	}

    /**
     * Getter $value
     * @return {any}
     */
	public get $value(): any {
		return this.value;
	}

    /**
     * Setter $title
     * @param {any} value
     */
	public set $title(value: any) {
		this.title = value;
	}

    /**
     * Setter $status
     * @param {string} value
     */
	public set $status(value: string) {
		this.status = value;
	}

    /**
     * Setter $value
     * @param {any} value
     */
	public set $value(value: any) {
		this.value = value;
	}

}