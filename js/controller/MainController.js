/**
 * Created by Arthur on 23/11/2015.
 */
monApp.controller('monControl', function monControl ($scope) {

    // Les âges de 0 à 99
    var range = [];
    total = 100;
    for(var i=0;i<total;i++) {
        range.push(i);
    }
    $scope.range = range;


    // Par défault, la div class jumbotron n'est pas visible, la variable passé à ng-show est false
    $scope.reponse = false;
    $scope.alert = false;

    // Pour afficher la réponse, on met une directive ng-click sur le bouton pour passer la variable à true
    $scope.afficherReponse = function () {
        if ($scope.nom && $scope.nb && $scope.ville != null) { // Si tous les champs sont remplis
            $scope.reponse = true; // On affiche une réponse
            $scope.alert = false; // On n'affiche pas d'alerte
        }
        else {
            $scope.reponse = false; // On affiche une alerte
            $scope.alert = true; // On n'affiche pas de réponse
        }
    }

});