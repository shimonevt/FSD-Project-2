export function setVal(text: number,units: string) {
        if (units != undefined && text != undefined) {
            return (`${text}${units}`)
        }else if(text!= undefined){
            return text.toString()
        }              
}
export function getElement(selector:string){
    if(selector!) {
        const elem = document.querySelector(selector)
        return elem
    }else { 
        throw Error(`Не удалось найти ${selector}`)
    }
}
export function createElementSlider(selector:Array<string>):HTMLElement {
    const elem = document.createElement('div')
    for (let i=0;i<selector.length;i++) {
        elem.classList.add(selector[i])
    }
    return elem
}
export function calcValue(elem:Element,coord: number,width:string,units:string|undefined) {
    if(units == undefined) {
        throw Error(`Ошибка: не определен options.units`)
    }
    elem.textContent =`${Math.ceil(coord*0.01*parseInt(width))} ${units}`
}