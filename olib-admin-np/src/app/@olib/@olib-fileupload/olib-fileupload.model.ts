export class OlibFileupload{
    private idx : number;
    private fileSize : number;
    private viewFileName : string;
    private realFileName : string;
    private filePath : string;

    constructor(){
    }

    /**
     * Getter $idx
     * @return {number}
     */
	public get $idx(): number {
		return this.idx;
	}

    /**
     * Getter $fileSize
     * @return {number}
     */
	public get $fileSize(): number {
		return this.fileSize;
	}

    /**
     * Getter $viewFileName
     * @return {string}
     */
	public get $viewFileName(): string {
		return this.viewFileName;
	}

    /**
     * Getter $realFileName
     * @return {string}
     */
	public get $realFileName(): string {
		return this.realFileName;
	}

    /**
     * Getter $filePath
     * @return {string}
     */
	public get $filePath(): string {
		return this.filePath;
	}

    /**
     * Setter $idx
     * @param {number} value
     */
	public set $idx(value: number) {
		this.idx = value;
	}

    /**
     * Setter $fileSize
     * @param {number} value
     */
	public set $fileSize(value: number) {
		this.fileSize = value;
	}

    /**
     * Setter $viewFileName
     * @param {string} value
     */
	public set $viewFileName(value: string) {
		this.viewFileName = value;
	}

    /**
     * Setter $realFileName
     * @param {string} value
     */
	public set $realFileName(value: string) {
		this.realFileName = value;
	}

    /**
     * Setter $filePath
     * @param {string} value
     */
	public set $filePath(value: string) {
		this.filePath = value;
	}

}