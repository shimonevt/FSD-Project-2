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
export function calcBorder(fromVal:number,toVal:number,minMax:number,isRange: boolean,width:number) {
    return isRange ? Math.abs((100*(toVal - fromVal+(width/2))/minMax)) : Math.abs((100*(toVal+(width/2))/(minMax)))
   
}