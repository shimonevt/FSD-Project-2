export function checkUndefined(variable:number|undefined):number{
    if(variable!= undefined){
        return variable
    }else {
        throw new Error(`variable is not defined`)
    }
}