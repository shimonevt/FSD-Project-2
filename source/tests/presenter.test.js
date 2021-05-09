/* eslint-disable */
import $ from 'jquery';
import { Panel } from '../panel/panel';
import { presenter } from './test-import';

describe('Тестирование Presenter', function () {
    it('Создание экземпляра класса Presenter', () => {
        expect(presenter).toBeDefined();
    });
});