import { EventEmitter } from '../eventEmitter/eventEmitter.ts';

import { ISliderOptions } from '../options/options';

import { Presenter } from '../presenter/presenter';

class Panel extends EventEmitter {
    slider: Presenter

    state: ISliderOptions

    panel : Element

    listeners: Array<Element>

    constructor(slider: any) {
      super();
      this.listeners = [];
      this.slider = slider;
      this.state = this.slider.model.state;
      this.init();
    }

    getData(options: ISliderOptions):void {
      this.state = options;
      this.updatePanel();
    }

    init():void {
      this.panel = document.querySelector(`${this.state.containerClass} .panel`);
      this.setValues();
      this.addPanelListeners();
      this.slider.subscribe('send-state', (data:ISliderOptions) => { this.getData(data); });
    }

    setValues():void {
      const {
        maxValue, minValue, toVal, fromVal, sliderStep, units, isVertical, isRange, showValues,
      } = this.state;
      this.createPanelElement('input.max-value', maxValue);
      this.createPanelElement('input.min-value', minValue);
      this.createPanelElement('input.to-val', toVal);
      this.createPanelElement('input.from-val', fromVal);
      this.createPanelElement('input.slider-step', sliderStep);
      this.createPanelElement('input.units', units);
      const checkBoxIsVertical = this.panel.querySelector('div.vertical > input');
      this.checkInputs(checkBoxIsVertical, isVertical);
      const checkBoxIsRange = this.panel.querySelector('div.range > input');
      this.checkInputs(checkBoxIsRange, isRange);
      const checkBoxShowValues = this.panel.querySelector('div.show-values > input');
      this.checkInputs(checkBoxShowValues, showValues);
    }

    checkInputs(elem:Element|null, isTrue:boolean):void {
      if (elem !== null) {
        isTrue ? elem.checked = true : elem.checked = false;
        this.listeners.push(elem);
      } else {
        throw Error(`${elem} is null!`);
      }
    }

    createPanelElement(selector: string, val: number| string):void {
      const elem = this.panel.querySelector(selector);
      elem.value = val.toString();
      this.listeners.push(elem);
    }

    addPanelListeners():void {
      this.listeners.forEach((element) => {
        element.addEventListener('change', (ev) => { this.handleChanges(ev); });
      });
    }

    updatePanel():void {
      for (let i = 0; i < this.listeners.length; i += 1) {
        if (this.listeners[i].classList.contains('max-value')) {
          this.listeners[i].value = this.state.maxValue;
        } else if (this.listeners[i].classList.contains('min-value')) {
          this.listeners[i].value = this.state.minValue;
        } else if (this.listeners[i].classList.contains('to-val')) {
          this.listeners[i].value = this.state.toVal;
        } else if (this.listeners[i].classList.contains('from-val')) {
          this.listeners[i].value = this.state.fromVal;
        } else if (this.listeners[i].classList.contains('slider-step')) {
          this.listeners[i].value = this.state.sliderStep;
        } else if (this.listeners[i].classList.contains('units')) {
          this.listeners[i].value = this.state.units;
        }
      }
    }

    handleChanges(ev:Event):void {
      if (ev.target.classList.contains('is-checkbox')) {
        if (ev.target.name === 'vertical') {
          ev.target.checked ? this.state.isVertical = true : this.state.isVertical = false;
        } else if (ev.target.name === 'range') {
          ev.target.checked ? this.state.isRange = true : this.state.isRange = false;
        } else if (ev.target.name === 'show-values') {
          ev.target.checked ? this.state.showValues = true : this.state.showValues = false;
        }
      } else if (ev.target.classList.contains('max-value')) {
        this.state.maxValue = parseInt(ev.target.value, 10);
      } else if (ev.target.classList.contains('min-value')) {
        this.state.minValue = parseInt(ev.target.value, 10);
      } else if (ev.target.classList.contains('to-val')) {
        this.state.toVal = parseInt(ev.target.value, 10);
      } else if (ev.target.classList.contains('from-val')) {
        this.state.fromVal = parseInt(ev.target.value, 10);
      } else if (ev.target.classList.contains('slider-step')) {
        this.state.sliderStep = parseInt(ev.target.value, 10);
      } else if (ev.target.classList.contains('units')) {
        this.state.units = ev.target.value;
      }
      this.slider.getDataFromPanel(this.state);
    }
}
export { Panel };
