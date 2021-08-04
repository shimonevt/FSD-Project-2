import EventEmitter from '../eventEmitter/eventEmitter.ts';
import Model from '../model/model.ts';
import {
  ISliderCoordinates,
  ISliderOptions,
  ISliderParameters,
  IRenderValues,
} from '../options/options.ts';
import View from '../view/view.ts';

class Presenter extends EventEmitter {
  view: View;

  model: Model;

  constructor(options: ISliderOptions) {
    super();
    this.view = new View(options.containerClass);
    this.model = new Model(options);
    this.init();
  }

  init(): void {
    this.subscribeOnEvents();
    this.model.getInitViewParameters(this.view.updateParameters());
  }

  subscribeOnEvents(): void {
    const { model, view } = this;
    model.subscribe('send-state', (state: ISliderOptions) => {
      this.emit('send-state', state);
    });
    model.subscribe('values-ready', (obj: IRenderValues) => {
      view.getChanges(obj);
    });
    view.subscribe('slider-init', (initParameters: {
      sliderParameters: ISliderParameters;
      sliderCoordinates: ISliderCoordinates;
      handlerWidth: number;
    }) => {
      model.getViewParameters(initParameters);
    });
    view.subscribe(
      'slider-clicked',
      (clickParameters: {
        top: number,
        left: number,
        target: EventTarget,
        parameters: {
          sliderParameters: ISliderParameters,
          sliderCoordinates: ISliderCoordinates,
          handlerWidth: number,
        };
      }) => {
        model.clickTreatment(clickParameters);
      },
    );
    view.subscribe(
      'handle-dragged',
      (dragParameters: {
        top: number;
        left: number;
        info: string;
        parameters: {
          sliderParameters: ISliderParameters;
          sliderCoordinates: ISliderCoordinates;
          handlerWidth: number;
        };
      }) => {
        model.dragNDropTreatment(dragParameters);
      },
    );
    view.subscribe(
      'window-resize',
      (resizeParameters: {
        sliderParameters: ISliderParameters;
        sliderCoordinates: ISliderCoordinates;
        handlerWidth: number;
      }) => {
        model.getViewParameters(resizeParameters);
      },
    );
    view.subscribe(
      'scroll',
      (scrollParameters: {
        sliderParameters: ISliderParameters;
        sliderCoordinates: ISliderCoordinates;
        handlerWidth: number;
      }) => {
        model.getViewParameters(scrollParameters);
      },
    );
  }

  getDataFromPanel(options: ISliderOptions) {
    this.model.sendStylesForRender(options);
    this.model.getViewParameters(this.view.updateParameters());
  }
}
export default Presenter;
