'use strict';

angular.module('bookingDirectives', [])

.directive('bookingApprovalIcon', function () {
  return {
    restrict: 'A',
    scope   : { booking: '=bookingApprovalIcon' },
    template: '<i class="{{ className }}" tooltip="{{ tooltip }}"></i>',
    controller: function ($scope) {
      switch ($scope.booking.approved) {

        case 'OK':
          $scope.className = 'fa fa-check text-success';
          $scope.tooltip = 'Akkoord';
          break;

        case 'TO_BE_PAID':
          $scope.className = 'fa fa-eur text-danger';
          $scope.tooltip = 'Nog te betalen';
          break;
      }
    }
  };
});
