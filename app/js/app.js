var app = angular.module('slate', []);
app.run(['$rootScope', function($root) {}]);

app.controller('slateMain', ['$scope', '$rootScope', '$timeout', function($scope, $root, $timeout) {
    //variables
        $scope.items = [
            ['red', 'orange', 'yellow'],
            ['green', 'blue', 'purple', 'brown'],
            ['black', 'gray', 'salmon']
        ];

    //Functions
        $scope.getWidth = function(rowLength) {
            if($(window).width() < 1025) {
                return '90%';
            } else {
                return (100 / rowLength - 2) + '%';
            }
        };
        $scope.onResize = function() {
            $scope.setMarginY(true);
        };
        $scope.setMarginY = function(fast) {
            $timeout(function() {
                var total = $('main').height();
                $('.row').each(function() {
                    total -= $(this).height();
                });
                $scope.verticalMargin = (total / ($('.row').length * 2)) + 'px';
            }, fast ? 0 : 10);
        };

        function init() {
            var functions = [
                $scope.setMarginY
            ];
            $.each(functions, function(i, fn) {
                fn();
            });
        }
        init();

    //Listeners
        $(window).resize($scope.onResize);

}]);
