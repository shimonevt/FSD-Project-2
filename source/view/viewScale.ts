import { createElementSlider } from '../functions/functions.ts';

const scaleUnits = {
  unitNames: ['min-value', '20-percent-value', '25-percent-value', '33-percent-value', '40-percent-value',
    '50-percent-value', '60-percent-value', '66-percent-value', '75-percent-value', '80-percent-value', 'max-value'],
  unitPositions: [-0.5, 20, 25, 33, 40, 50, 60, 66, 75, 80, 100],
};
class ViewScale {
    viewScale : HTMLElement;

    units: Array<HTMLElement>;

    constructor(sliderBody:HTMLElement) {
      this.viewScale = createElementSlider(['progress__scale-bar']);
      sliderBody.appendChild(this.viewScale);
      this.units = [];
      this.init();
    }

    init() {
      for (let i = 0; i < scaleUnits.unitNames.length; i += 1) {
        const barUnit = createElementSlider(['scale-bar__unit', `${scaleUnits.unitNames[i]}`]);
        const unitValue = createElementSlider(['unit__value']);
        barUnit.append(unitValue);
        this.units.push(barUnit);
        this.viewScale.appendChild(barUnit);
      }
    }

    update(coordinates:string[], maxValue:number, minValue:number) :void{
      const size = coordinates[0] === 'vertical' ? parseFloat(getComputedStyle(this.viewScale).height)
        : parseFloat(getComputedStyle(this.viewScale).width);
      for (let i = 0; i < this.units.length; i += 1) {
        if (i === 0) {
          this.units[i].setAttribute('style', `${coordinates[1]} -0.5%`);
          this.units[i].children[0].textContent = minValue.toString();
        } else {
          this.units[i].setAttribute('style', `${coordinates[1]} ${scaleUnits.unitPositions[i]}%`);
          this.units[i].children[0].textContent = (minValue + 0.01 * scaleUnits.unitPositions[i] * (maxValue - minValue)).toString();
        }
      }
      this.changeScaleDisplay(size);
    }

    changeScaleDisplay(scaleSize:number) {
      const displayUnitsAt400 = ['min-value', '20-percent-value', '40-percent-value',
        '60-percent-value', '80-percent-value', 'max-value'];
      const displayUnitsAt300 = ['min-value', '25-percent-value', '50-percent-value', '75-percent-value', 'max-value'];
      const displayUnitsAt200 = ['min-value', '33-percent-value', '66-percent-value', 'max-value'];
      const displayUnitsAt150 = ['min-value', '50-percent-value', 'max-value'];
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
      for (let i = 0; i < this.units.length; i += 1) {
        this.units[i].classList.add('hidden');
        for (let j = 0; j < displayUnitsAtSomeSize.length; j += 1) {
          if (this.units[i].classList.contains(displayUnitsAtSomeSize[j])) {
            this.units[i].classList.remove('hidden');
            break;
          }
        }
      }
    }
}
export { ViewScale };
