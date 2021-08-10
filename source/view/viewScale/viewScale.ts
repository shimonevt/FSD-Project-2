import { calcScaleStep, createElementSlider } from '../../functions/functions';

class ViewScale {
  viewScale: HTMLElement;

  constructor(sliderBody: HTMLElement) {
    this.viewScale = createElementSlider([
      'js-range-slider__scale-bar',
      'range-slider__scale-bar',
    ]);
    sliderBody.appendChild(this.viewScale);
  }

  updateScaleUnits(minValue:number, maxValue:number, scaleStep: number, coordinates: string[]) {
    this.viewScale.innerHTML = '';
    for (let i = scaleStep; i <= maxValue - minValue; i += scaleStep) {
      const scaleUnit = createElementSlider(['js-range-slider__bar-unit', 'range-slider__bar-unit']);
      const unitValue = createElementSlider(['js-range-slider__unit-value', 'range-slider__unit-value']);
      if (i === scaleStep) {
        const firstUnit = createElementSlider(['js-range-slider__bar-unit', 'range-slider__bar-unit']);
        const initUnitValue = createElementSlider(['js-range-slider__unit-value', 'range-slider__unit-value']);
        firstUnit.setAttribute('style', `${coordinates[1]} -0.5%`);
        firstUnit.dataset.location = '0';
        initUnitValue.textContent = (minValue).toString();
        initUnitValue.dataset.location = '0';
        firstUnit.append(initUnitValue);
        this.viewScale.append(firstUnit);
      }
      scaleUnit.setAttribute('style', `${coordinates[1]} ${100 * (i / (maxValue - minValue))}%`);
      scaleUnit.dataset.location = `${100 * (i / (maxValue - minValue))}`;
      unitValue.textContent = (minValue + i).toString();
      unitValue.dataset.location = `${100 * (i / (maxValue - minValue))}`;
      scaleUnit.append(unitValue);
      this.viewScale.append(scaleUnit);
    }
  }

  update(coordinates: string[], maxValue: number, minValue: number, sliderStep: number): void {
    const scaleStep = calcScaleStep(maxValue - minValue, sliderStep);
    this.updateScaleUnits(minValue, maxValue, scaleStep, coordinates);
  }
}
export default ViewScale;
