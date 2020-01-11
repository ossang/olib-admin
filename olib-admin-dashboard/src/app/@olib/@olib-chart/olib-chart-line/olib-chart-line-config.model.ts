import { OlibChartLineData } from './olib-chart-line-config-data.model';

export class OlibChartLineConfig {

    private categorys : Array<any>;
    private datas : Array<OlibChartLineData>;

    private legend : Array<any>;

    private isDynamicData : boolean;
    private updateTime : number;


    constructor(){}

    /**
     * Getter $legend
     * @return {Array<any>}
     */
	public get $legend(): Array<any> {
		return this.legend;
	}

    /**
     * Setter $legend
     * @param {Array<any>} value
     */
	public set $legend(value: Array<any>) {
		this.legend = value;
	}

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
     * Getter $categorys
     * @return {any}
     */
	public get $categorys(): Array<any> {
		return this.categorys;
	}

    /**
     * Getter $datas
     * @return {OlibChartLineData[]}
     */
	public get $datas(): Array<OlibChartLineData> {
		return this.datas;
	}

    /**
     * Setter $categorys
     * @param {any} value
     */
	public set $categorys(value: Array<any>) {
		this.categorys = value;
	}

    /**
     * Setter $datas
     * @param {OlibChartLineData[]} value
     */
	public set $datas(value: Array<OlibChartLineData>) {
		this.datas = value;
	}

    public get $names() : any{
        let names = [];
        Object.keys(this.datas).forEach(key=>{
            names.push(this.datas[key].$name);
        });
        return names;
    }
}