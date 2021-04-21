export function checkUndefined(variable:number|undefined):number {
  if (variable !== undefined) {
    return variable;
  }
  throw new Error('variable is not defined');
}
export function createElementSlider(selectors:Array<string>):HTMLDivElement {
  const elem = document.createElement('div');
  for (let i = 0; i < selectors.length; i += 1) {
    elem.classList.add(selectors[i]);
  }
  return elem;
}
export function getContainer(selector:string):HTMLElement {
  return document.querySelector(selector);
}
