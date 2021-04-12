export function checkUndefined(variable:number|undefined):number{
    if(variable!= undefined){
        return variable
    }else {
        throw new Error(`variable is not defined`)
    }
}
export function createElementSlider(selectors:Array<string>):HTMLDivElement{
    const elem = document.createElement('div')
    for (let i=0;i<selectors.length;i++) {
        elem.classList.add(selectors[i])
    }
    return elem
}