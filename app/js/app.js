'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.account',
  'myApp.balances',
  'myApp.balances-short',
  'myApp.faq',
  'myApp.home',
  'myApp.history',
  'myApp.ticket',
  'myApp.order-entry-tool',
  'myApp.orders',
  'myApp.positions',
  'myApp.positions-short',
    'myApp.api',
    'myApp.contact',
    'myApp.status',
    'myApp.twitter',
    'myApp.security',
    'myApp.terms',
    'myApp.about',
    'myApp.footer-menu'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/account', {templateUrl: 'js/modules/account/account.tpl.html', controller: 'AccountCtrl'})

      .when('/balances', {templateUrl: 'js/modules/balances/balances.tpl.html', controller: 'BalancesCtrl'})
      .when('/faq', {templateUrl: 'js/modules/faq/faq.tpl.html', controller: 'FaqCtrl'})
      .when('/home', {templateUrl: 'js/modules/home/home.tpl.html', controller: 'HomeCtrl'})
      .when('/history', {templateUrl: 'js/modules/history/history.tpl.html', controller: 'HistoryCtrl'})
      .when('/ticket',{templateUrl:'js/modules/ticket/ticket.tpl.html',conroller:'TicketCtrl'})
      .when('/positions',{templateUrl:'js/modules/positions/positions.tpl.html',conroller:'PositionsCtrl'})
      .when('/api',{templateUrl:'js/modules/footer-menu/api/api.tpl.html', controller:'ApiCtrl'})
      .when('/contact',{templateUrl:'js/modules/footer-menu/contact/contact.tpl.html', controller:'ContactCtrl'})
      .when('/terms',{templateUrl:'js/modules/footer-menu/terms/terms.tpl.html', controller:'TermsCtrl'})
      .when('/security',{templateUrl:'js/modules/footer-menu/security/security.tpl.html', controller:'SecurityCtrl'})
      .when('/twitter',{templateUrl:'js/modules/footer-menu/twitter/twitter.tpl.html', controller:'TwitterCtrl'})
      .when('/status',{templateUrl:'js/modules/footer-menu/status/status.tpl.html', controller:'StatusCtrl'})
      .when('/about', {templateUrl: 'js/modules/footer-menu/about/about.tpl.html', controller: 'AboutCtrl'})
  .otherwise({redirectTo: '/home'});
}]);
