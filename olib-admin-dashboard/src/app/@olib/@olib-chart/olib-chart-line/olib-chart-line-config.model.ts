import { OlibChartLineData } from './olib-chart-line-config-data.model';

export class OlibChartLineConfig {

    private categorys : any;
    private datas : OlibChartLineData[];

    constructor(){}

    /**
     * Getter $categorys
     * @return {any}
     */
	public get $categorys(): any {
		return this.categorys;
	}

    /**
     * Getter $datas
     * @return {OlibChartLineData[]}
     */
	public get $datas(): OlibChartLineData[] {
		return this.datas;
	}

    /**
     * Setter $categorys
     * @param {any} value
     */
	public set $categorys(value: any) {
		this.categorys = value;
	}

    /**
     * Setter $datas
     * @param {OlibChartLineData[]} value
     */
	public set $datas(value: OlibChartLineData[]) {
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