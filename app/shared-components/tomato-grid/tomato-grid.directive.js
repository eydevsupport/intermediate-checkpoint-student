(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoGrid', tomatoGrid);
 
    function tomatoGrid() {
        var directive = {
            scope: {
                data: "<",
                listView: "<"
            },
            restrict: 'E',
            controller: TomatoGridController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-grid/tomato-grid.directive.html'
        };
 
        return directive;
    }
 
    TomatoGridController.$inject = ['tomatoGridService'];
 
    function TomatoGridController(tomatoGridService) {
        var vm = this;
    }
 })();
 