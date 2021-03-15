import '../view/view.scss'
import * as $ from 'jquery'
import {View } from '../view/view';
import { sliderOptionsDefault } from '../model/model';
$(document).ready(function(){
    let container =  new View(sliderOptionsDefault);
})