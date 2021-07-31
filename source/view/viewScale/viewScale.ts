import { createElementSlider } from '../../functions/functions.ts';

const scaleUnits = {
  unitNames: ['min-value', '20-percent-value', '25-percent-value', '33-percent-value', '40-percent-value',
    '50-percent-value', '60-percent-value', '66-percent-value', '75-percent-value', '80-percent-value', 'max-value'],
  unitPositions: [-0.5, 20, 25, 33, 40, 50, 60, 66, 75, 80, 100],
};
const displayUnitsAt400 = ['min-value', '20-percent-value', '40-percent-value',
  '60-percent-value', '80-percent-value', 'max-value'];
const displayUnitsAt300 = ['min-value', '25-percent-value', '50-percent-value', '75-percent-value', 'max-value'];
const displayUnitsAt200 = ['min-value', '33-percent-value', '66-percent-value', 'max-value'];
const displayUnitsAt150 = ['min-value', '50-percent-value', 'max-value'];
class ViewScale {
    viewScale : HTMLElement;

    units: HTMLElement[];

    constructor(sliderBody:HTMLElement) {
      this.viewScale = createElementSlider(['js-range-slider__scale-bar', 'range-slider__scale-bar']);
      sliderBody.appendChild(this.viewScale);
      this.units = [];
      this.init();
    }

    init() {
      scaleUnits.unitNames.forEach((unitName) => {
        const barUnit = createElementSlider(['js-range-slider__bar-unit', 'range-slider__bar-unit', `${unitName}`]);
        const unitValue = createElementSlider(['js-range-slider__unit-value', 'range-slider__unit-value']);
        barUnit.append(unitValue);
        this.units.push(barUnit);
        this.viewScale.appendChild(barUnit);
      });
    }

    update(coordinates:string[], maxValue:number, minValue:number) :void{
      const size = coordinates[0] === 'vertical' ? parseFloat(getComputedStyle(this.viewScale).height)
        : parseFloat(getComputedStyle(this.viewScale).width);
      this.units.forEach((unit, index) => {
        const { children } = unit;
        if (index === 0) {
          unit.setAttribute('style', `${coordinates[1]} -0.5%`);
          children[0].textContent = minValue.toString();
        } else {
          unit.setAttribute('style', `${coordinates[1]} ${scaleUnits.unitPositions[index]}%`);
          children[0].textContent = (minValue + 0.01 * scaleUnits.unitPositions[index]
          * (maxValue - minValue)).toString();
        }
      });
      this.changeScaleDisplay(size);
    }

    changeScaleDisplay(scaleSize:number) {
      if (scaleSize >= 400) {
        this.searchByScaleElements(displayUnitsAt400);
      } else if (scaleSize >= 300) {
        this.searchByScaleElements(displayUnitsAt300);
      } else if (scaleSize >= 200) {
        this.searchByScaleElements(displayUnitsAt200);
      } else if (scaleSize >= 150) {
        this.searchByScaleElements(displayUnitsAt150);
      }
    }

    searchByScaleElements(displayUnitsAtSomeSize:string[]) {
      this.units.forEach((unit) => {
        unit.classList.add('range-slider__bar-unit_hidden');
        displayUnitsAtSomeSize.forEach((someSizeUnit) => {
          if (unit.classList.contains(someSizeUnit)) {
            unit.classList.remove('range-slider__bar-unit_hidden');
          }
        });
      });
    }
}
export default ViewScale;
