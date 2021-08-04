import EventEmitter from '../eventEmitter/eventEmitter.ts';
import { ISliderOptions } from '../options/options.ts';
import Presenter from '../presenter/presenter.ts';

class Panel extends EventEmitter {
  slider: Presenter;

  state: ISliderOptions;

  panel: Element;

  listeners: HTMLElement[];

  constructor(slider: Presenter) {
    super();
    this.listeners = [];
    this.slider = slider;
    this.state = this.slider.model.state;
    this.init();
  }

  getData(options: ISliderOptions): void {
    this.state = options;
    this.updatePanel();
  }

  init(): void {
    this.panel = document.querySelector(`${this.state.containerClass} .js-panel`);
    this.setValues();
    this.addPanelListeners();
    this.slider.subscribe('send-state', (data: ISliderOptions) => {
      this.getData(data);
    });
  }

  setValues(): void {
    const {
      maxValue,
      minValue,
      toVal,
      fromVal,
      sliderStep,
      units,
      isVertical,
      isRange,
      showValues,
    } = this.state;
    this.createPanelElement('.js-panel__unit_max-value', maxValue);
    this.createPanelElement('.js-panel__unit_min-value', minValue);
    this.createPanelElement('.js-panel__unit_to-val', toVal);
    this.createPanelElement('.js-panel__unit_from-val', fromVal);
    this.createPanelElement('.js-panel__unit_slider-step', sliderStep);
    this.createPanelElement('.js-panel__unit_units', units);
    const checkBoxIsVertical = this.panel.querySelector('.js-panel__unit_is-vertical');
    this.checkInputs(checkBoxIsVertical, isVertical);
    const checkBoxIsRange = this.panel.querySelector('.js-panel__unit_is-range');
    this.checkInputs(checkBoxIsRange, isRange);
    const checkBoxShowValues = this.panel.querySelector(
      '.js-panel__unit_show-values',
    );
    this.checkInputs(checkBoxShowValues, showValues);
  }

  checkInputs(elem: HTMLInputElement, isTrue: boolean): void {
    if (elem !== null) {
      elem.checked = isTrue === true;
      this.listeners.push(elem);
    } else {
      throw Error(`${elem} is null!`);
    }
    this.listeners = Array.from(this.listeners);
  }

  createPanelElement(selector: string, val: number | string): void {
    const elem = this.panel.querySelector(selector)!;
    console.log(elem);
    elem.value = val.toString();
    this.listeners.push(elem);
  }

  addPanelListeners(): void {
    this.listeners.forEach((element) => {
      element.addEventListener('change', (ev) => {
        this.handleChanges(ev);
      });
    });
  }

  updatePanel(): void {
    this.listeners.forEach((listener: HTMLInputElement | HTMLElement) => {
      if (listener.classList.contains('js-panel__unit_max-value')) {
        listener.value = this.state.maxValue;
      } else if (listener.classList.contains('js-panel__unit_min-value')) {
        listener.value = this.state.minValue;
      } else if (listener.classList.contains('js-panel__unit_to-val')) {
        listener.value = this.state.toVal;
      } else if (listener.classList.contains('js-panel__unit_from-val')) {
        listener.value = this.state.fromVal;
      } else if (listener.classList.contains('js-panel__unit_slider-step')) {
        listener.value = this.state.sliderStep;
      } else if (listener.classList.contains('js-panel__unit_units')) {
        listener.value = this.state.units;
      }
    });
  }

  handleChanges(ev: Event): void {
    const {
      classList, checked, name, value,
    } = ev.target;
    if (classList.contains('js-panel__unit_is-checkbox')) {
      if (name === 'vertical') {
        this.state.isVertical = checked === true;
      } else if (name === 'range') {
        this.state.isRange = checked === true;
      } else if (name === 'show-values') {
        this.state.showValues = checked === true;
      }
    } else if (classList.contains('js-panel__unit_max-value')) {
      this.state.maxValue = parseInt(value, 10);
    } else if (classList.contains('js-panel__unit_min-value')) {
      this.state.minValue = parseInt(value, 10);
    } else if (classList.contains('js-panel__unit_to-val')) {
      this.state.toVal = parseInt(value, 10);
    } else if (classList.contains('js-panel__unit_from-val')) {
      this.state.fromVal = parseInt(value, 10);
    } else if (classList.contains('js-panel__unit_slider-step')) {
      this.state.sliderStep = parseInt(value, 10);
    } else if (classList.contains('js-panel__unit_units')) {
      this.state.units = value;
    }
    this.slider.getDataFromPanel(this.state);
  }
}
export default Panel;
