import { createElementSlider } from '../../functions/functions.ts';
import { IRenderValues } from '../../options/options.ts';

class ViewValues {
    toVal: HTMLElement;

    fromVal: HTMLElement;

    constructor(sliderBody: HTMLElement) {
      this.toVal = createElementSlider(['js-range-slider__values', 'range-slider__values', 'range-slider__values_max']);
      this.fromVal = createElementSlider(['js-range-slider__values', 'range-slider__values', 'range-slider__values_min']);
      sliderBody.append(this.toVal);
      sliderBody.append(this.fromVal);
    }

    update(renderData:IRenderValues) {
      const {
        isRange, showValues, coordinates, valuesPosition, values,
      } = renderData;
      const { fromVal, toVal } = this;
      showValues ? this.showValues(true, isRange) : this.showValues(false, isRange);
      fromVal.innerHTML = values[0];
      toVal.innerHTML = values[1];
      fromVal.setAttribute('style', `${coordinates[1]} ${valuesPosition[0]}%`);
      toVal.setAttribute('style', `${coordinates[1]} ${valuesPosition[1]}%`);
    }

    showValues(show: boolean, showBoth: boolean):void {
      if (show === true && showBoth === true) {
        this.toVal.classList.remove('range-slider__values_hidden');
        this.fromVal.classList.remove('range-slider__values_hidden');
      } else if (show === true && showBoth === false) {
        this.toVal.classList.remove('range-slider__values_hidden'); this.fromVal.classList.add('range-slider__values_hidden');
      } else if (show === false) { this.toVal.classList.add('range-slider__values_hidden'); this.fromVal.classList.add('range-slider__values_hidden'); }
    }
}
export default ViewValues;
