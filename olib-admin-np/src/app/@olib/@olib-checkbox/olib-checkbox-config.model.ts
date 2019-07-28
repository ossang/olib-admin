import { OlibCheckbox } from './olib-checkbox.model';

export class OlibCheckConfig {

    private allSelectedLabel : string;
    private checkboxList : Array<OlibCheckbox>;
    private isVertical : boolean;
    private value : Array<any> = new Array;

    constructor(){

    }

    /**
     * Getter $allSelectedLabel
     * @return {string}
     */
	public get $allSelectedLabel(): string {
		return this.allSelectedLabel;
	}

    /**
     * Getter $checkboxList
     * @return {Array<OlibCheckbox>}
     */
	public get $checkboxList(): Array<OlibCheckbox> {
		return this.checkboxList;
	}

    /**
     * Setter $allSelectedLabel
     * @param {string} value
     */
	public set $allSelectedLabel(value: string) {
		this.allSelectedLabel = value;
	}

    /**
     * Setter $checkboxList
     * @param {Array<OlibCheckbox>} value
     */
	public set $checkboxList(value: Array<OlibCheckbox>) {
		this.checkboxList = value;
	}

    /**
     * Getter $isVertical
     * @return {boolean}
     */
	public get $isVertical(): boolean {
		return this.isVertical;
	}

    /**
     * Setter $isVertical
     * @param {boolean} value
     */
	public set $isVertical(value: boolean) {
		this.isVertical = value;
	}

    /**
     * Getter $value
     * @return {Array<any> }
     */
	public get $value(): Array<any>  {
		return this.value;
	}

    /**
     * Setter $value
     * @param {Array<any> } value
     */
	public set $value(value: Array<any> ) {
		this.value = value;
	}

}