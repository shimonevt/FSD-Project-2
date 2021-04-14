import { EventEmitter } from '../eventEmitter/eventEmitter.ts';
import { getContainer } from '../functions/functions.ts';
import { ISliderOptions } from '../options/options.ts';

class Panel extends EventEmitter {
    options: ISliderOptions

    container: HTMLElement

    header: HTMLElement

    panel : HTMLElement

    listeners: Array<Element>

    constructor(options: ISliderOptions) {
      super();
      this.listeners = [];
      this.options = options;
      this.container = this.getElement(this.options.containerClass!)!;
      this.header = this.getElement(`${this.options.containerClass} p.range-name`)!;
      this.container = getContainer(options.containerClass!)!;
      this.header.innerHTML = this.options.containerClass!;
      this.panel = this.getElement(`${this.options.containerClass} .panel-container`)!;
      this.init();
    }

    getData(options: ISliderOptions):void {
      this.options = options;
      this.updatePanel();
    }

    init():void {
      this.setValues();
      this.addPanelListeners();
      this.subscribe('send-values-for-panel', (data:ISliderOptions) => { this.getData(data); });
    }

    setValues():void {
      const {
        maxValue, minValue, toVal, fromVal, sliderStep, units, isVertical, isRange, showValues,
      } = this.options;
      this.createPanelElement('input.max-value', maxValue!);
      this.createPanelElement('input.min-value', minValue!);
      this.createPanelElement('input.to-val', toVal!);
      this.createPanelElement('input.from-val', fromVal!);
      this.createPanelElement('input.slider-step', sliderStep!);
      this.createPanelElement('input.units', units!);
      const checkBoxIsVertical = this.panel.querySelector('div.vertical > input');
      this.checkInputs(checkBoxIsVertical, isVertical!);
      const checkBoxIsRange = this.panel.querySelector('div.range > input');
      this.checkInputs(checkBoxIsRange, isRange!);
      const checkBoxShowValues = this.panel.querySelector('div.show-values > input');
      this.checkInputs(checkBoxShowValues, showValues!);
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
      let elem = this.panel.querySelector(selector)!;
      elem.nodeValue = val.toString();
      this.listeners.push(elem);
    }

    addPanelListeners():void {
      this.listeners.forEach(element => {
        element.addEventListener('change', (ev) => { this.handleChanges(ev); });
      });
    }

    updatePanel():void {
      for (let i = 0; i < this.listeners.length; i += 1) {
        if (this.listeners[i].classList.contains('max-value')) {
          this.listeners[i].value = this.options.maxValue;
        } else if (this.listeners[i].classList.contains('min-value')) {
          this.listeners[i].value = this.options.minValue;
        } else if (this.listeners[i].classList.contains('to-val')) {
          this.listeners[i].value = this.options.toVal;
        } else if (this.listeners[i].classList.contains('from-val')) {
          this.listeners[i].value = this.options.fromVal; 
        } else if (this.listeners[i].classList.contains('slider-step')) {
          this.listeners[i].value = this.options.sliderStep; 
        } else if (this.listeners[i].classList.contains('units')) {
          this.listeners[i].value = this.options.units;
        }
      }
    }

    handleChanges(ev:Event):void {
      if (ev.target!.classList.contains('is-checkbox')) {
        if (ev.target!.name == 'vertical') {
                ev.target!.checked ? this.options.isVertical = true : this.options.isVertical = false;
        } else if (ev.target!.name == 'range') {
                ev.target!.checked ? this.options.isRange = true : this.options.isRange = false;
        } else if (ev.target!.name == 'show-values') {
                ev.target!.checked ? this.options.showValues = true : this.options.showValues = false;
        }
      } else if (ev.target!.classList.contains('max-value')) {
        this.options.maxValue = parseInt(ev.target!.value);
      } else if (ev.target!.classList.contains('min-value')) {
        this.options.minValue = parseInt(ev.target!.value, 10);
      } else if (ev.target!.classList.contains('to-val')) {
        this.options.toVal = parseInt(ev.target!.value, 10);
      } else if (ev.target!.classList.contains('from-val')) {
        this.options.fromVal = parseInt(ev.target!.value, 10);
      } else if (ev.target!.classList.contains('slider-step')) {
        this.options.sliderStep = parseInt(ev.target!.value, 10);
      } else if (ev.target!.classList.contains('units')) {
        this.options.units = ev.target!.value;
      }
      this.emit('panel-changed', this.options);
    }

    // eslint-disable-next-line class-methods-use-this
    getElement(selector:string) {
      return document.querySelector(selector);
    }
}
export { Panel };
