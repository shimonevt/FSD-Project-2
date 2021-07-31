import { createElementSlider } from '../../functions/functions.ts';
import { IRenderValues } from '../../options/options.ts';

class ViewValues {
    toVal: HTMLElement;

    fromVal: HTMLElement;

    constructor(sliderBody: HTMLElement) {
      this.toVal = createElementSlider(['range__values', 'max-value']);
      this.fromVal = createElementSlider(['range__values', 'min-value']);
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
        this.toVal.classList.remove('hidden');
        this.fromVal.classList.remove('hidden');
      } else if (show === true && showBoth === false) {
        this.toVal.classList.remove('hidden'); this.fromVal.classList.add('hidden');
      } else if (show === false) { this.toVal.classList.add('hidden'); this.fromVal.classList.add('hidden'); }
    }
}
export default ViewValues;
