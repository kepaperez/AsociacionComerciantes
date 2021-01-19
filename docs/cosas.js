$scope.add = function (item, $index) {
    $scope.Chocolates[$index].unidades = $scope.Chocolates[$index].unidades - 1;
    existe = false;
    for (let i = 0; i < $scope.carro.length; i++) {
        if ($scope.carro[i].id == item.id) {
            existe = true;
        }
    }
    if (existe == false) {
        $scope.carro.push({
            'id': item.id,
            'nombre': item.nombre,
            'precio': item.precio,
            'cantidad': 1,
            'unidades': item.unidades,
            'tipo': item.tipo,
            'tipo': item.imagen,
        });

    } else {
        $scope.carro[$index].cantidad = parseInt($scope.carro[$index].cantidad) + 1;
    }

    console.log($scope.carro);


};