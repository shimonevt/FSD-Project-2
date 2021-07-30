import { createElementSlider } from '../../functions/functions.ts';

class ViewBar {
  viewBar : HTMLElement;

  constructor(sliderBody:HTMLElement) {
    this.viewBar = createElementSlider(['progress__bar']);
    sliderBody.append(this.viewBar);
  }

  update(coordinates:string[], barPosition:number, barSize:number) {
    this.viewBar.setAttribute('style', `${coordinates[1]}${barPosition}%;${coordinates[2]}${barSize}%`);
  }
}
export { ViewBar };
