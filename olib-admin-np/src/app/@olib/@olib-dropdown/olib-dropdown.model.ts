export class OlibDropdown{
    private name : string;
    private value : string;

    constructor(name : string, value : string){
        this.name = name;
        this.value = value;
    }

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $value
     * @return {string}
     */
	public get $value(): string {
		return this.value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $value
     * @param {string} value
     */
	public set $value(value: string) {
		this.value = value;
	}

}