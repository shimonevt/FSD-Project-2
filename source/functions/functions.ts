export function setVal(elem:Element,text: any,units: string| undefined) {
        if (units == undefined) {
            elem.innerHTML = text + ''
        } else{
            elem.innerHTML = text + `${units}`
        }              
}
export function getElement(selector:string|undefined):Element{
    if(selector == undefined) {
        throw Error(`Не удалось найти ${selector}`)
    }else { 
        const elem = document.querySelector(selector)
        return elem
    }
}
export function createElementSlider(...selector:[string]):HTMLElement {
    const elem = document.createElement('div')
    for (let i=0;i<selector.length;i++) {
        elem.classList.add(selector[i])
    }
    return elem
}