# Plugin (Range slider) mvp Typescript

[Демонстрация](shimonevt/github.com.io/FSD-Project-2/build/index.html) 

[Репозиторий](https://github.com/shimonevt/FSD-Project-2/)

Тестовое задание для Fullstack Development

## Описание

Слайдер с возможностью менять значения в панели конфигурации.

## Запуск приложения

npm run start

## Запуск тестов

npm run test

## Запуск транспиляции

npm run build

## Архитектура приложения

При написаниии приложения использовались принципы построения MVP архитектуры.

Плагин делится на три слоя, представленных в виде классов View, Model и Presenter. Взаимодействие между
слоями приложения осуществляется за счет шаблона подписки (описанный в source/eventEmitter  одноименный класс  eventEmitter). 

Слой View и его части (viewHandlers,viewBody etc.) визуализируют приложение. 

Слой Model манипулирует данными. 

Слой Controller управляет приложением.

## UML диаграмма 

![alt text](..)
