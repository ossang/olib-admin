export class OlibChartPieConfig{
    private title : string;
    private data : any;

    private isDynamicData : boolean;
    private updateTime : number;
    private isLoading : boolean;

    constructor(){}

    /**
     * Getter $isLoading
     * @return {boolean}
     */
	public get $isLoading(): boolean {
		return this.isLoading;
	}

    /**
     * Setter $isLoading
     * @param {boolean} value
     */
	public set $isLoading(value: boolean) {
		this.isLoading = value;
	}


    /**
     * Getter $updateTime
     * @return {number}
     */
	public get $updateTime(): number {
		return this.updateTime;
	}

    /**
     * Setter $updateTime
     * @param {number} value
     */
	public set $updateTime(value: number) {
		this.updateTime = value;
	}

    /**
     * Getter $isDynamicData
     * @return {boolean}
     */
	public get $isDynamicData(): boolean {
		return this.isDynamicData;
	}

    /**
     * Setter $isDynamicData
     * @param {boolean} value
     */
	public set $isDynamicData(value: boolean) {
		this.isDynamicData = value;
	}

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