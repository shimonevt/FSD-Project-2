import { createElementSlider } from '../functions/functions';
import { IRenderValues } from '../model/model';

class ViewValues {
    private toVal: HTMLElement;

    private fromVal: HTMLElement;

    constructor(sliderBody: HTMLElement) {
      this.toVal = createElementSlider(['range__values', 'max-value']);
      this.fromVal = createElementSlider(['range__values', 'min-value']);
      sliderBody.appendChild(this.toVal);
      sliderBody.appendChild(this.fromVal);
    }

    update(renderData:IRenderValues) {
      const {
        isRange, showValues, coordinates, rangeFrom, rangeTo, values,
      } = renderData;
      const { fromVal, toVal } = this;
      showValues ? this.showValues(true, isRange) : this.showValues(false, isRange);
      fromVal.innerHTML = values[0];
      toVal.innerHTML = values[1];
      fromVal.setAttribute('style', `${coordinates[1]} ${rangeFrom}%`);
      toVal.setAttribute('style', `${coordinates[1]} ${rangeTo}%`);
    }

    showValues(show: boolean, showBoth: boolean):void {
      if (show === true && showBoth === true) {
        this.toVal.classList.remove('hidden');
        this.fromVal.classList.remove('hidden');
      } else if (show === true && showBoth === false) {
        this.toVal.classList.remove('hidden'); this.fromVal.classList.add('hidden');
      } else if (show === false) { this.toVal.classList.add('hidden'); this.fromVal.classList.add('hidden'); }
    }
}
export { ViewValues };