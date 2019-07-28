export class OlibOrderCols{
    private title : string;
    private width : string;
    private isImg : boolean;

    constructor(title:string,width:string,isImg:boolean){
        this.title = title;
        this.width = width;
        this.isImg = isImg;
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
     * Getter $isImg
     * @return {boolean}
     */
	public get $isImg(): boolean {
		return this.isImg;
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

    /**
     * Setter $isImg
     * @param {boolean} value
     */
	public set $isImg(value: boolean) {
		this.isImg = value;
	}

}