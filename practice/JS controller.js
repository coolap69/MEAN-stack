angular.module('myApp').controller('MyController', MyController).controller('AboutController', AboutController);

function MainController() {
    var vm = this;
    
$http.get('http//swapi-tpiros.rhcloud.com/films').then(function(response) {
vm.films = response.data;
});
    vm.name ='Tamas';
}

function FilmController($http, $routeParams) {
    var vm = this;
    var id = $routeParams.id;
    $http.get('http//swapi-tpiros.rhcloud.com/films/' + id).then(function(response) {
        vm.film =response.data;
    });
}