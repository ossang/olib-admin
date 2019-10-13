export class OlibChartBarConfig{
    private isVertical : boolean;
    private categorys : any;
    private values : any;

    private isDynamicData : boolean;
    private updateTime : number;
    private isLoading : boolean;

    constructor(){}

    /**
     * Getter $isDynamicData
     * @return {boolean}
     */
	public get $isDynamicData(): boolean {
		return this.isDynamicData;
	}

    /**
     * Getter $updateTime
     * @return {number}
     */
	public get $updateTime(): number {
		return this.updateTime;
	}

    /**
     * Getter $isLoading
     * @return {boolean}
     */
	public get $isLoading(): boolean {
		return this.isLoading;
	}

    /**
     * Setter $isDynamicData
     * @param {boolean} value
     */
	public set $isDynamicData(value: boolean) {
		this.isDynamicData = value;
	}

    /**
     * Setter $updateTime
     * @param {number} value
     */
	public set $updateTime(value: number) {
		this.updateTime = value;
	}

    /**
     * Setter $isLoading
     * @param {boolean} value
     */
	public set $isLoading(value: boolean) {
		this.isLoading = value;
	}

    /**
     * Getter $isVertical
     * @return {boolean}
     */
	public get $isVertical(): boolean {
		return this.isVertical;
	}

    /**
     * Getter $categorys
     * @return {any}
     */
	public get $categorys(): any {
		return this.categorys;
	}

    /**
     * Getter $values
     * @return {any}
     */
	public get $values(): any {
		return this.values;
	}

    /**
     * Setter $isVertical
     * @param {boolean} value
     */
	public set $isVertical(value: boolean) {
		this.isVertical = value;
	}

    /**
     * Setter $categorys
     * @param {any} value
     */
	public set $categorys(value: any) {
		this.categorys = value;
	}

    /**
     * Setter $values
     * @param {any} value
     */
	public set $values(value: any) {
		this.values = value;
	}


}