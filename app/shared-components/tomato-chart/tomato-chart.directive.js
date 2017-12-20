(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoChart', tomatoChart);
 
    function tomatoChart() {
        var directive = {
            scope: {
                data: "<",
                type: "@",
                header: "@?",
                horizontalAxisLabel: "@?",
                verticalAxisLabel: "@?",
                displayLegend: "<?"
            },
            restrict: 'E',
            controller: TomatoChartController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-chart/tomato-chart.directive.html'
        };
 
        return directive;
    }
 
    TomatoChartController.$inject = ['tomatoChartService'];
 
    function TomatoChartController(tomatoChartService) {
        var vm = this;
        vm.chartData = tomatoChartService.getBarChartData(vm.data);
        vm.chartOptions = tomatoChartService.getChartOptions(
            vm.horizontalAxisLabel, vm.verticalAxisLabel, 
            vm.displayLegend
        );
    }
 })();
 