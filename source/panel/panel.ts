import EventEmitter from '../eventEmitter/eventEmitter.ts';
import { ISliderOptions } from '../options/options.ts';
import Presenter from '../presenter/presenter.ts';

class Panel extends EventEmitter {
    slider: Presenter

    state: ISliderOptions

    panel : Element

    listeners: Element[]

    constructor(slider: Presenter) {
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
      this.listeners.forEach((listener) => {
        if (listener.classList.contains('max-value')) {
          listener.value = this.state.maxValue;
        } else if (listener.classList.contains('min-value')) {
          listener.value = this.state.minValue;
        } else if (listener.classList.contains('to-val')) {
          listener.value = this.state.toVal;
        } else if (listener.classList.contains('from-val')) {
          listener.value = this.state.fromVal;
        } else if (listener.classList.contains('slider-step')) {
          listener.value = this.state.sliderStep;
        } else if (listener.classList.contains('units')) {
          listener.value = this.state.units;
        }
      });
    }

    handleChanges(ev:Event):void {
      const {
        classList, checked, name, value,
      } = ev.target;
      if (classList.contains('is-checkbox')) {
        if (name === 'vertical') {
          this.state.isVertical = checked === true;
        } else if (name === 'range') {
          this.state.isRange = checked === true;
        } else if (name === 'show-values') {
          this.state.showValues = checked === true;
        }
      } else if (classList.contains('max-value')) {
        this.state.maxValue = parseInt(value, 10);
      } else if (classList.contains('min-value')) {
        this.state.minValue = parseInt(value, 10);
      } else if (classList.contains('to-val')) {
        this.state.toVal = parseInt(value, 10);
      } else if (classList.contains('from-val')) {
        this.state.fromVal = parseInt(value, 10);
      } else if (classList.contains('slider-step')) {
        this.state.sliderStep = parseInt(value, 10);
      } else if (classList.contains('units')) {
        this.state.units = value;
      }
      this.slider.getDataFromPanel(this.state);
    }
}
export default Panel;
