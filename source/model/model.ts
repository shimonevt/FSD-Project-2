import { EventEmitter } from '../eventEmitter/eventEmitter';
import { ISliderCoordinates, ISliderOptions, ISliderParameters } from '../options/options';
import { handler } from '../view/viewHandlers';

export interface IRenderValues {
        coordinates : string[],
        barPosition: number,
        barSize: number,
        isRange: boolean,
        rangeTo: number,
        rangeFrom: number,
        showValues: boolean,
        values: string[],
        valuesPosition: number[]
    }
class Model extends EventEmitter {
        state: ISliderOptions

        constructor(options:ISliderOptions) {
          super();
          this.state = options;
        }

        getDataFromPresenterforModel(data:{sliderParameters: ISliderParameters,
                                    sliderCoordinates: ISliderCoordinates,
                                        handlerWidth: number}):void {
          this.setParameters(data);
        }

        setParameters(data:{sliderParameters: ISliderParameters,
            sliderCoordinates: ISliderCoordinates, handlerWidth: number}):void {
          this.state.sliderParams = data.sliderParameters;
          this.state.sliderCoordinates = data.sliderCoordinates;
          this.state.handlerWidth = data.handlerWidth;
          this.getData(this.state);
        }

        getData(options:ISliderOptions):void {
          this.state = options;
          this.sendStylesForRender(options);
        }

        clickTreatment(data:{top:number, left: number}):void {
          this.sendStylesForRender(this.CalcDataClick(data));
        }

        dragNDropTreatment(data:{top:number, left:number, info:string}):void {
          this.sendStylesForRender(this.CalcDataDrag(data));
        }

        loadInitData(options:ISliderOptions):void {
          this.sendStylesForRender(options);
        }

        CalcDataDrag(data:{top:number, left:number, info:string}):ISliderOptions {
          const {
            maxValue, minValue, fromVal, toVal, isRange,
          } = this.state;
          const currentPosition = this.calcCurrentPosition(data);
          const currentValue = this.calcCurrentValue(currentPosition);
          if (data.info === handler.rangeTo) {
            this.state.toVal = currentValue;
            if (this.state.toVal >= maxValue!) {
              this.state.toVal = maxValue;
            }
            if (isRange) {
              if (toVal! <= fromVal!) {
                this.state.toVal = fromVal;
              }
            } else if (this.state.toVal! <= minValue!) {
              this.state.toVal = minValue;
            }
            return this.state;
          }
          this.state.fromVal = currentValue;
          if (fromVal! >= toVal!) {
            this.state.fromVal = toVal;
          } else if (this.state.fromVal! <= minValue!) {
            this.state.fromVal = minValue;
          }
          return this.state;
        }

        CalcDataClick(data:{top:number, left: number}): ISliderOptions {
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
            } else if (Math.abs(currentPosition - fromValPosition) >= Math.abs(currentPosition - toValPosition)) {
              this.state.toVal = currentValue;
            } else if (Math.abs(currentPosition - fromValPosition) < Math.abs(currentPosition - toValPosition)) {
              this.state.fromVal = currentValue;
            }
          } else {
            this.state.toVal = currentValue;
          }
          return this.state;
        }

        sendStylesForRender({
          minValue, maxValue, isRange, isVertical, fromVal, toVal,
          units, showValues, sliderParams,
        }:ISliderOptions):void {
          const renderData = {
            coordinates: isVertical ? (['vertical', 'bottom: ', 'height: ']) : (['horizontal', 'left: ', 'width: ']),
            barPosition: Model.calcBarPosition(fromVal!, maxValue!, minValue!, isRange!),
            barSize: isVertical ? this.calcBarSize(sliderParams?.height!)
              : this.calcBarSize(sliderParams?.width!),
            isRange,
            rangeTo: this.getHandlePosition(handler.rangeTo),
            rangeFrom: this.getHandlePosition(handler.rangeFrom),
            showValues,
            values: [Model.setVal(fromVal, units), Model.setVal(toVal, units)],
            valuesPosition: [Math.abs(this.setValPosition(fromVal!, maxValue! - minValue!)),
              Math.abs(this.setValPosition(toVal!, maxValue! - minValue!))],
          };
          this.emit('send-values-for-panel', this.state);
          this.emit('values-ready', renderData);
        }

        static setVal(text: number|undefined, units: string|undefined): string {
          if (text !== undefined) {
            if (units !== undefined) {
              return (`${text} ${units}`);
            }
            return text.toString();
          }
          return '';
        }

        setValPosition(val:number, minMax:number): number {
          const { handlerWidth, sliderParams, isVertical } = this.state;
          return (isVertical
            ? Math.ceil(100 * (val / minMax) - 2 * (handlerWidth! / sliderParams?.height!))
            : Math.ceil(100 * (val / minMax) - (handlerWidth! / sliderParams?.width!)));
        }

        getHandlePosition(whichHandle:string):number {
          const size = this.state.isVertical ? this.state.sliderParams?.height
            : this.state.sliderParams?.width;
          const {
            toVal, fromVal, maxValue, minValue, handlerWidth,
          } = this.state;
          if (whichHandle === handler.rangeTo) {
            if (this.state.isRange) {
              if (toVal! <= fromVal!) {
                this.state.toVal = fromVal;
              }
            }
            if (toVal! >= maxValue!) {
              return 100 * ((maxValue! - minValue!) / (maxValue! - minValue!) - 0.5 * (handlerWidth! / size!));
            }
            return 100 * ((toVal! - minValue!) / (maxValue! - minValue!) - 0.5 * (handlerWidth! / size!));
          }
          if (fromVal! <= minValue!) return 100 * -0.5 * (handlerWidth! / size!);
          return 100 * ((fromVal! - minValue!) / (maxValue! - minValue!) - 0.5 * (handlerWidth! / size!));
        }

        calcCurrentPosition(coords:{left: number, top:number}):number {
          const { isVertical, sliderCoordinates, sliderParams } = this.state;
          const cursorPosition = isVertical ? sliderCoordinates?.top!
                + sliderParams?.height! - coords.top : coords.left - sliderCoordinates?.left!;
          return isVertical ? Math.ceil(100 * (cursorPosition / sliderParams?.height!))
            : Math.ceil(100 * (cursorPosition / sliderParams?.width!));
        }

        calcCurrentValue(currentPosition:number):number {
          const { minValue, maxValue } = this.state;
          return Math.ceil(minValue! + 0.01 * currentPosition * Math.abs(maxValue! - minValue!));
        }

        static calcBarPosition(value:number, maxValue:number,
          minValue:number, range:boolean):number {
          let barPosition = range ? Math.ceil(100 * ((-minValue + value) / (maxValue - minValue)))
            : Number(0);
          if (barPosition <= 0) barPosition = 0;
          return barPosition;
        }

        calcBarSize(size:number):number {
          const {
            isRange, toVal, fromVal, maxValue, minValue, handlerWidth,
          } = this.state;
          let barSize = isRange ? Math.abs(100 * ((toVal! - fromVal!) / (maxValue! - minValue!)))
            : 100 * ((toVal! - minValue!) / (maxValue! - minValue!) - 0.5 * (handlerWidth! / size));
          if (barSize >= 100) {
            barSize = 100;
          } else if (barSize <= 0) {
            barSize = 0;
          }
          return barSize;
        }
}
export { Model };
