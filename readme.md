# Plugin (Range slider) mvp Typescript

[Демонстрация](https://shimonevt.github.io/FSD-Project-2/index.html) 

[Репозиторий](https://github.com/shimonevt/FSD-Project-2/)

Тестовое задание для Fullstack Development

## Развертывание

`git clone https://github.com/shimonevt/FSD-Project-2` - клонирование репозитория  

`npm i` - установление зависимостей  

`npm run start` - запуск webpack dev server  

`npm run dev` - сборка в режиме development  

`npm run build` - сборка в режиме production  

## Описание

Слайдер с возможностью менять значения в панели конфигурации.

## Запуск приложения

npm run start

## Запуск тестов

npm run test

## Запуск транспиляции

npm run build

## Архитектура приложения

При написании приложения использовались принципы построения MVP архитектуры.

Плагин делится на три слоя, представленных в виде классов View, Model и Presenter. Взаимодействие между
слоями приложения осуществляется за счет шаблона подписки (описанный в source/eventEmitter  одноименный класс  eventEmitter). 

Слой View и его части (viewHandlers,viewBody etc.) визуализируют приложение. 

Слой Model манипулирует данными. 

Слой Controller управляет приложением, Slider - jQuery-обертка Controller .

## UML диаграмма 

![alt text](https://github.com/shimonevt/FSD-Project-2/blob/master/source/diagram.svg)
