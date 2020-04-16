export class OlibScrollerCols{

    private title:string;
    private width:string;

	constructor($title: string, $width: string) {
		this.title = $title;
		this.width = $width;
    }
    

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $width
     * @return {string}
     */
	public get $width(): string {
		return this.width;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Setter $width
     * @param {string} value
     */
	public set $width(value: string) {
		this.width = value;
	}

}