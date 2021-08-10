import EventEmitter, { SliderDataType } from '../eventEmitter/eventEmitter';
import Model from '../model/model';
import { IRenderValues, ISliderOptions } from '../options/options';
import View from '../view/view';

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
    model.subscribe('send-state', (state) => {
      this.emit('send-state', state);
    });
    model.subscribe('values-ready', (obj) => {
      view.getChanges(obj as IRenderValues);
    });
    view.subscribe('slider-init', (initParameters) => {
      model.getViewParameters(
        initParameters as {
          sliderParameters: {
            width: number;
            height: number;
          };
          sliderCoordinates: {
            top: number;
            left: number;
          };
          handlerWidth: number;
        },
      );
    });
    view.subscribe('slider-clicked', (clickParameters: SliderDataType) => {
      model.clickTreatment(
        clickParameters as {
          top: number;
          left: number;
          target: HTMLElement;
          isBarUnit: boolean;
          sliderData: {
            sliderParameters: {
              width: number;
              height: number;
            };
            sliderCoordinates: {
              top: number;
              left: number;
            };
            handlerWidth: number;
          };
        },
      );
    });
    view.subscribe('handle-dragged', (dragParameters) => {
      model.dragNDropTreatment(
        dragParameters as {
          top: number;
          left: number;
          info: string;
          sliderData: {
            sliderParameters: {
              width: number;
              height: number;
            };
            sliderCoordinates: {
              top: number;
              left: number;
            };
            handlerWidth: number;
          };
        },
      );
    });
    view.subscribe('window-resize', (resizeParameters) => {
      model.getViewParameters(resizeParameters as {
        sliderParameters: {
            width: number;
            height: number;
        };
        sliderCoordinates: {
            top: number;
            left: number;
        };
        handlerWidth: number;
      });
    });
    view.subscribe('scroll', (scrollParameters) => {
      model.getViewParameters(scrollParameters as {
        sliderParameters: {
          width: number;
          height: number;
        };
        sliderCoordinates: {
            top: number;
            left: number;
        };
        handlerWidth: number;
      });
    });
  }

  getDataFromPanel(options: ISliderOptions) {
    this.model.sendStylesForRender(options);
    this.model.getViewParameters(this.view.updateParameters());
  }
}
export default Presenter;
