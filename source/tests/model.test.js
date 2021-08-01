/* eslint-disable */

import Model from "../model/model";
import { handler } from "../view/viewHandlers/viewHandlers";
const testOptions1 = {
  containerClass: ".container",
  minValue: 500,
  maxValue: 1000,
  isRange: true,
  isVertical: false,
  fromVal: 600,
  toVal: 800,
  sliderStep: 1,
  units: "F",
  showValues: true,
  handlerWidth: 14,
  sliderParameters: {
    height: 300,
    width: 300,
  },
  sliderCoordinates: {
    left: 0,
    top: 0,
  },
};
const testOptions2 = {
  containerClass: ".container",
  minValue: 800,
  maxValue: 1000,
  isRange: false,
  isVertical: false,
  fromVal: 660,
  toVal: 660,
  sliderStep: 1,
  units: "",
  showValues: true,
  handlerWidth: 14,
  sliderParameters: {
    height: 300,
    width: 300,
  },
  sliderCoordinates: {
    left: 0,
    top: 0,
  },
};
const testOptions3 = {
  containerClass: ".container",
  minValue: 650,
  maxValue: 800,
  isRange: true,
  isVertical: false,
  fromVal: 700,
  toVal: 300,
  sliderStep: 1,
  units: "",
  showValues: true,
  handlerWidth: 14,
  sliderParameters: {
    height: 300,
    width: 300,
  },
  sliderCoordinates: {
    left: 0,
    top: 0,
  },
};
const model1 = new Model(testOptions1);
const model2 = new Model(testOptions2);
const model3 = new Model(testOptions3);
describe("Создание экземпляра Model", () => {
  expect(model1).toBeDefined();
});
describe("Тестирование функций Model", () => {
  it("Model1.calcCurrentValue", () => {
    expect(model1.calcCurrentValue(20)).toBe(600);
  });
  it("Model1.calcBarSize", () => {
    expect(model1.calcBarSize(20)).toBe(40);
    expect(model1.calcBarSize(-0.01)).toBe(40);
  });
  it("Model.calcBarPosition", () => {
    expect(model1.calcBarPosition(400, 500, 1000)).toBe(120);
  });
  it("Model.getViewParameters", () => {
    const { sliderParameters, sliderCoordinates, handlerWidth } = testOptions1;
    model1.getViewParameters(sliderParameters, sliderCoordinates, handlerWidth);
    expect(model1.state.handlerWidth).not.toBeNull();
  });
  it("Model.clickTreatment", () => {
    const { sliderParameters, sliderCoordinates, handlerWidth } = testOptions1;
    const sliderData = { sliderParameters, sliderCoordinates, handlerWidth };
    model1.clickTreatment({ top: 0, left: 10, sliderData });
    expect(model1.state.fromVal).toBe(520);
    model3.clickTreatment({ top: 0, left: 400, sliderData });
    expect(model3.state.fromVal).toBe(700);
  });
  it("Model.dragNDropTreatment", () => {
    const { sliderParameters, sliderCoordinates, handlerWidth } = testOptions2;
    const sliderData = { sliderParameters, sliderCoordinates, handlerWidth };
    model2.dragNDropTreatment({
      top: 0,
      left: 305,
      info: handler.rangeTo,
      sliderData,
    });
    expect(model2.state.fromVal).toBe(660);
  });
  it("model.getData", () => {
    model1.getData(testOptions2);
    expect(model1.state.isRange).toBe(false);
  });
  it("model1.loadInitData", () => {
    model1.loadInitData(testOptions2);
    expect(model1.state.isRange).toBe(false);
  });
  it("model.sendStyleForRender", () => {
    model2.sendStylesForRender(testOptions2);
    expect(model2.state.fromVal).toBe(660);
    model3.sendStylesForRender(testOptions3);
    expect(model3.state.toVal).toBe(700);
  });
  it("model.setVal", () => {
    expect(model3.setVal(1, "")).toBe("650 ");
    expect(model3.setVal(1)).toBe("1");
  });
  it("model.CalcDataDrag", () => {
    const dataDragOptions = {
      containerClass: ".container",
      toVal: 700,
      fromVal: 700,
      handlerWidth: 14,
      isVertical: false,
      maxValue: 800,
      minValue: 650,
      isRange: true,
      units: "",
      showValues: true,
      sliderCoordinates: {
        left: 0,
        top: 0,
      },
      sliderParameters: {
        height: 300,
        width: 300,
      },
      sliderStep: 1,
    };
    expect(
      model3.calcDataDrag({ top: 0, left: 1, info: handler.rangeFrom })
    ).toEqual(dataDragOptions);
    expect(
      model3.calcDataDrag({ top: 0, left: 20, info: handler.rangeTo })
    ).toEqual(dataDragOptions);
  });
  it("model.calcDataClick", () => {
    const clickOptions = {
      containerClass: ".container",
      fromVal: 660,
      handlerWidth: 14,
      isRange: false,
      isVertical: false,
      maxValue: 1000,
      minValue: 800,
      showValues: true,
      sliderCoordinates: {
        left: 0,
        top: 0,
      },
      sliderParameters: {
        height: 300,
        width: 300,
      },
      sliderStep: 1,
      toVal: 800,
      units: "",
    };
    expect(model2.calcDataClick({ top: 0, left: 0 })).toEqual(clickOptions);
  });
});
