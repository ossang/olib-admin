export class OlibRadioConfig {
    options : Array<any>;
    value : any;
    groupName : any;

    constructor(group,defaultValue){
        this.options = new Array;
        this.groupName = group;
        this.value = defaultValue;
    }

    addOption(label,value){
        this.options.push({value,label});
    }
    
    addOptionDisable(label,value,disabled){
        this.options.push({value,label,disabled});
    }
}