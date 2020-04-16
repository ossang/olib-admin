export class OlibCheckbox {

    private key : number;
    private label : string;

    constructor(key:number,label:string){
        this.key = key;
        this.label = label;
    }

    /**
     * Getter $key
     * @return {number}
     */
	public get $key(): number {
		return this.key;
	}

    /**
     * Getter $label
     * @return {string}
     */
	public get $label(): string {
		return this.label;
	}

    /**
     * Setter $key
     * @param {number} value
     */
	public set $key(value: number) {
		this.key = value;
	}

    /**
     * Setter $label
     * @param {string} value
     */
	public set $label(value: string) {
		this.label = value;
	}

}