export function createElementSlider(selectors: string[]): HTMLDivElement {
  const elem = document.createElement('div');
  for (let i = 0; i < selectors.length; i += 1) {
    elem.classList.add(selectors[i]);
  }
  return elem;
}
export function getContainer(selector: string):HTMLElement {
    return document.querySelector(selector)!;
}
export function calcScaleStep(range: number, sliderStep: number):number {
  for (let i = sliderStep; i <= range; i += sliderStep) {
    if (range / i <= 10) {
      return i;
    }
  }
  return sliderStep;
}
export function checkUndefined(value: number|string|boolean) {
  if (value !== undefined) {
    return value;
  }
  throw new Error('value is undefined!');
}
