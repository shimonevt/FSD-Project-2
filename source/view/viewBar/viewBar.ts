import { createElementSlider } from '../../functions/functions';

class ViewBar {
  viewBar: HTMLElement;

  constructor(sliderBody: HTMLElement) {
    this.viewBar = createElementSlider([
      'js-range-slider__progress-bar',
      'range-slider__progress-bar',
    ]);
    sliderBody.append(this.viewBar);
  }

  update(coordinates: string[], barPosition: number, barSize: number) {
    this.viewBar.setAttribute(
      'style',
      `${coordinates[1]}${barPosition}%;${coordinates[2]}${barSize}%`,
    );
  }
}
export default ViewBar;
