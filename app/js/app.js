'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.account',
  'myApp.about',
  'myApp.balances',
  'myApp.balances-short',
  'myApp.faq',
  'myApp.home',
  'myApp.history',
  'myApp.ticket',
  'myApp.order-entry-tool',
  'myApp.orders',
  'myApp.positions',
  'myApp.positions-short'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/account', {templateUrl: 'js/modules/account/account.tpl.html', controller: 'AccountCtrl'})
      .when('/about', {templateUrl: 'js/modules/about/about.tpl.html', controller: 'AboutCtrl'})
      .when('/balances', {templateUrl: 'js/modules/balances/balances.tpl.html', controller: 'BalancesCtrl'})
      .when('/faq', {templateUrl: 'js/modules/faq/faq.tpl.html', controller: 'FaqCtrl'})
      .when('/home', {templateUrl: 'js/modules/home/home.tpl.html', controller: 'HomeCtrl'})
      .when('/history', {templateUrl: 'js/modules/history/history.tpl.html', controller: 'HistoryCtrl'})
      .when('/ticket',{templateUrl:'js/modules/ticket/ticket.tpl.html',conroller:'TicketCtrl'})
      .when('/positions',{templateUrl:'js/modules/positions/positions.tpl.html',conroller:'PositionsCtrl'})
  .otherwise({redirectTo: '/home'});
}]);
