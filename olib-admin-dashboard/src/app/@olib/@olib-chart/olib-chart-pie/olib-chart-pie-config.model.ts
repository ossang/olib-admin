export class OlibChartPieConfig{
    private title : string;
    private data : any;

    constructor(){}


    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $data
     * @return {any}
     */
	public get $data(): any {
		return this.data;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Setter $data
     * @param {any} value
     */
	public set $data(value: any) {
		this.data = value;
	}

    public get $names() : any {
        let names = [];
        Object.keys(this.data).forEach(key=>
            names.push(this.data[key].name)
        );
        return names;
    }
}