export class OlibChartBarConfig{
    private isVertical : boolean;
    private categorys : any;
    private values : any;

    constructor(){}

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