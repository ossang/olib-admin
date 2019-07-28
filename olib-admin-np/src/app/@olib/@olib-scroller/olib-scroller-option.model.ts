export class OlibScrollerOption{
    private itemSize : number;

	constructor(itemSize : number) {
        this.itemSize = itemSize;
	}

    /**
     * Getter $itemSize
     * @return {number}
     */
	public get $itemSize(): number {
		return this.itemSize;
	}

    /**
     * Setter $itemSize
     * @param {number} value
     */
	public set $itemSize(value: number) {
		this.itemSize = value;
	}
    
}