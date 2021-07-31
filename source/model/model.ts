import EventEmitter from '../eventEmitter/eventEmitter.ts';
import { ISliderCoordinates, ISliderOptions, ISliderParameters } from '../options/options.ts';
import { handler } from '../view/viewHandlers/viewHandlers.ts';

class Model extends EventEmitter {
        state: ISliderOptions

        constructor(options:ISliderOptions) {
          super();
          this.state = options;
        }

        getInitViewParameters(data:{sliderParameters: ISliderParameters,
          sliderCoordinates: ISliderCoordinates, handlerWidth: number}) {
          this.state = {
            ...this.state,
            sliderParameters: data.sliderParameters,
            sliderCoordinates: data.sliderCoordinates,
            handlerWidth: data.handlerWidth,
          };
          this.sendStylesForFirstRender(this.state);
        }

        getViewParameters(data:{sliderParameters: ISliderParameters,
            sliderCoordinates: ISliderCoordinates, handlerWidth: number}):void {
          this.state = {
            ...this.state,
            sliderParameters: data.sliderParameters,
            sliderCoordinates: data.sliderCoordinates,
            handlerWidth: data.handlerWidth,
          };
          this.sendStylesForRender(this.state);
        }

        getData(options:ISliderOptions):void {
          this.state = options;
          this.sendStylesForRender(this.state);
        }

        clickTreatment(data:{top:number, left: number,
          sliderData:{sliderParameters: ISliderParameters,
          sliderCoordinates: ISliderCoordinates, handlerWidth: number} }):void {
          this.getViewParameters(data.sliderData);
          this.sendStylesForRender(this.calcDataClick(data));
        }

        dragNDropTreatment(data:{top:number, left:number, info:string,
          sliderData:{sliderParameters: ISliderParameters,
          sliderCoordinates: ISliderCoordinates, handlerWidth: number}}):void {
          this.getViewParameters(data.sliderData);
          this.sendStylesForRender(this.calcDataDrag(data));
        }

        loadInitData(options:ISliderOptions):void {
          this.sendStylesForRender(options);
        }

        calcDataDrag(data:{top:number, left:number, info:string}):ISliderOptions {
          const {
            maxValue, minValue, fromVal, toVal, isRange,
          } = this.state;
          const currentPosition = this.calcCurrentPosition(data);
          const currentValue = this.calcCurrentValue(currentPosition);
          if (data.info === handler.rangeTo) {
            this.state.toVal = currentValue;
            if (this.state.toVal >= maxValue) {
              this.state.toVal = maxValue;
            }
            if (isRange) {
              if (toVal <= fromVal) {
                this.state.toVal = fromVal;
              }
            } else if (this.state.toVal <= minValue) {
              this.state.toVal = minValue;
            }
            return this.state;
          }
          this.state.fromVal = currentValue;
          if (fromVal >= toVal) {
            this.state.fromVal = toVal;
          } else if (this.state.fromVal <= minValue) {
            this.state.fromVal = minValue;
          }
          return this.state;
        }

        calcDataClick(data:{top:number, left: number}): ISliderOptions {
          const { isRange } = this.state;
          const currentPosition = this.calcCurrentPosition(data);
          const currentValue = this.calcCurrentValue(currentPosition);
          const fromValPosition = this.getHandlePosition(handler.rangeFrom);
          const toValPosition = this.getHandlePosition(handler.rangeTo);
          if (isRange) {
            if (toValPosition === fromValPosition) {
              if (currentPosition - fromValPosition < 0) {
                this.state.fromVal = currentValue;
              } else if (currentPosition - toValPosition > 0) {
                this.state.toVal = currentValue;
              }
            } else if (Math.abs(currentPosition - fromValPosition)
                    >= Math.abs(currentPosition - toValPosition)) {
              this.state.toVal = currentValue;
            } else if (Math.abs(currentPosition - fromValPosition)
                  < Math.abs(currentPosition - toValPosition)) {
              this.state.fromVal = currentValue;
            }
          } else {
            this.state.toVal = currentValue;
          }
          return this.state;
        }

        sendStylesForFirstRender({
          minValue, maxValue, isRange, isVertical, fromVal,
          toVal, units, showValues, sliderParameters,
        }:ISliderOptions):void {
          if (toVal >= maxValue) {
            this.state.toVal = maxValue;
          } else if (toVal <= minValue) {
            this.state.toVal = minValue;
          }
          if (isRange) {
            if (fromVal <= minValue) {
              this.state.fromVal = minValue;
            }
          }
          const firstRenderData = {
            coordinates: isVertical ? (['vertical', 'bottom: ', 'height: ']) : (['horizontal', 'left: ', 'width: ']),
            isRange,
            barPosition: this.calcBarPosition(fromVal, maxValue, minValue),
            rangeTo: isVertical ? (this.calcBarSize(sliderParameters?.height)
            + this.calcBarPosition(fromVal, maxValue, minValue))
              : this.calcBarSize(sliderParameters?.width)
              + this.calcBarPosition(fromVal, maxValue, minValue),
            rangeFrom: this.calcBarPosition(fromVal, maxValue, minValue),
            barSize: isVertical ? this.calcBarSize(sliderParameters?.height)
              : this.calcBarSize(sliderParameters?.width),
            showValues,
            values: [this.setVal(fromVal, units), this.setVal(toVal, units)],
            valuesPosition: [this.setValPosition(fromVal, maxValue, minValue),
              this.setValPosition(toVal, maxValue, minValue)],
            minValue: this.state.minValue,
            maxValue: this.state.maxValue,
          };
          this.emit('send-state', this.state);
          this.emit('values-ready', firstRenderData);
        }

        sendStylesForRender({
          minValue, maxValue, isRange, isVertical, fromVal,
          toVal, units, showValues, sliderParameters,
        }:ISliderOptions):void {
          if (toVal >= maxValue) {
            this.state.toVal = maxValue;
          } else if (toVal <= minValue) {
            this.state.toVal = minValue;
          }
          if (isRange) {
            if (fromVal <= minValue) {
              this.state.fromVal = minValue;
            }
          }
          const renderData = {
            coordinates: isVertical ? (['vertical', 'bottom: ', 'height: ']) : (['horizontal', 'left: ', 'width: ']),
            isRange,
            rangeTo: this.getHandlePosition(handler.rangeTo),
            rangeFrom: this.getHandlePosition(handler.rangeFrom),
            barPosition: this.calcBarPosition(fromVal, maxValue, minValue),
            barSize: isVertical ? this.calcBarSize(sliderParameters?.height)
              : this.calcBarSize(sliderParameters?.width),
            showValues,
            values: [this.setVal(fromVal, units), this.setVal(toVal, units)],
            valuesPosition: [this.setValPosition(fromVal, maxValue, minValue),
              this.setValPosition(toVal, maxValue, minValue)],
            minValue: this.state.minValue,
            maxValue: this.state.maxValue,
          };
          this.emit('send-state', this.state);
          this.emit('values-ready', renderData);
        }

        setVal(value: number, units: string|undefined): string {
          if (units !== undefined) {
            if (value <= this.state.minValue) {
              return (`${this.state.minValue} ${units}`);
            } if (value >= this.state.maxValue) {
              return (`${this.state.maxValue} ${units}`);
            }
            return (`${value} ${units}`);
          }
          return value.toString();
        }

        initHandlePosition(whichHandle:string):number {
          const {
            toVal, fromVal, maxValue, minValue, handlerWidth,
          } = this.state;
          if (whichHandle === handler.rangeTo) {
            if (this.state.isRange) {
              if (toVal <= fromVal) {
                this.state.toVal = fromVal;
              }
            }
            if (toVal >= maxValue) {
              return 100 * ((maxValue - minValue)
              / (maxValue - minValue));
            }
            return 100 * ((toVal - minValue)
             / (maxValue - minValue));
          }
          if (fromVal <= minValue) return 0.5 * handlerWidth;
          return 100 * ((fromVal - minValue)
           / (maxValue - minValue));
        }

        setValPosition(val:number, maxValue:number, minValue:number): number {
          const { handlerWidth, sliderParameters, isVertical } = this.state;
          return (isVertical
            ? Math.ceil(100 * (((val - minValue) / (maxValue - minValue))
            - 1 * (handlerWidth / sliderParameters?.height)))
            : Math.ceil(100 * (((val - minValue) / (maxValue - minValue))
            - 1.25 * (handlerWidth / sliderParameters?.width))));
        }

        getHandlePosition(whichHandle:string):number {
          const size = this.state.isVertical ? this.state.sliderParameters?.height
            : this.state.sliderParameters?.width;
          const {
            toVal, fromVal, maxValue, minValue, handlerWidth,
          } = this.state;
          if (whichHandle === handler.rangeTo) {
            if (this.state.isRange) {
              if (toVal <= fromVal) {
                this.state.toVal = fromVal;
              }
            }
            if (toVal >= maxValue) {
              return 100 * ((maxValue - minValue)
              / (maxValue - minValue) - 0.5 * (handlerWidth / size));
            }
            return 100 * ((toVal - minValue)
             / (maxValue - minValue) - 0.5 * (handlerWidth / size));
          }
          if (fromVal <= minValue) return 100 * -0.5 * (handlerWidth / size);
          return 100 * ((fromVal - minValue)
           / (maxValue - minValue) - 0.5 * (handlerWidth / size));
        }

        calcCurrentPosition(coords:{left: number, top:number}):number {
          const { isVertical, sliderCoordinates, sliderParameters } = this.state;
          const cursorPosition = isVertical ? sliderCoordinates?.top
                + sliderParameters?.height - coords.top : coords.left - sliderCoordinates?.left;
          return isVertical ? Math.ceil(100 * (cursorPosition / sliderParameters?.height))
            : Math.ceil(100 * (cursorPosition / sliderParameters?.width));
        }

        calcCurrentValue(currentPosition:number):number {
          const { minValue, maxValue, sliderStep } = this.state;
          return Math.round((0.01 * currentPosition * (maxValue - minValue)) / sliderStep)
                * sliderStep + minValue;
        }

        calcBarPosition(value:number, maxValue:number,
          minValue:number):number {
          const { isRange } = this.state;
          let barPosition = isRange ? Math.ceil(100 * ((-minValue + value) / (maxValue - minValue)))
            : Number(0);
          if (barPosition <= 0) barPosition = 0;
          return barPosition;
        }

        calcBarSize(size:number):number {
          const {
            isRange, toVal, fromVal, maxValue, minValue, handlerWidth,
          } = this.state;
          let barSize = isRange ? Math.abs(100 * ((toVal - fromVal) / (maxValue - minValue)))
            : 100 * ((toVal - minValue) / (maxValue - minValue) - 0.5 * (handlerWidth / size));
          if (barSize >= 100) {
            barSize = 100;
          } else if (barSize <= 0) {
            barSize = 0;
          }
          return barSize;
        }
}
export default Model;
