import '../view/view.scss'
import $ from 'jquery'
import {Slider} from '../slider/slider'
$(document).ready(function(){
    let container =  new Slider();
    let cont2 = new Slider({
        rangeClass: '.container-2',
        range : false
    });
})