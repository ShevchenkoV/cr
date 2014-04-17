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
  'myApp.trade',
  'myApp.ticket',
  'myApp.order-entry-tool',
  'myApp.orders',
  'myApp.positions',
  'myApp.positions-short'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/account', {templateUrl: 'partials/account/account.tpl.html', controller: 'AccountCtrl'})
      .when('/about', {templateUrl: 'partials/about/about.tpl.html', controller: 'AboutCtrl'})
      .when('/balances', {templateUrl: 'partials/balances/balances.tpl.html', controller: 'BalancesCtrl'})
      .when('/faq', {templateUrl: 'partials/faq/faq.tpl.html', controller: 'FaqCtrl'})
      .when('/home', {templateUrl: 'partials/home/home.tpl.html', controller: 'HomeCtrl'})
      .when('/trade', {templateUrl: 'partials/trade/trade.tpl.html', controller: 'TradeCtrl'})
      .when('/ticket',{templateUrl:'partials/ticket/ticket.tpl.html',conroller:'TicketCtrl'})
      .when('/positions',{templateUrl:'partials/positions/positions.tpl.html',conroller:'PositionsCtrl'})
  .otherwise({redirectTo: '/home'});
}]);
