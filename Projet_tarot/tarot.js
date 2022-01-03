/*var selectInt = document.getElementById('selectInt');

selectInt.addEventListener('change', (event)=> {
    this.value
})*/

/*// Je sélectionne le select et quand la valeur change on fait une action
$('select[name="monselect"]').change(function(){
    // Je créer l'id du div qui va être affiché
    var id = "ma_div_" + $(this).val();
    // Je cache toutes les divs grâce à une classe qui va sélectionner le tout
    $('div.mes_divs').hide();
    // Et j'affiche seulement le Div que je souhaite
    $('#'+id).show();
});*/

/*var monselect = document.getElementById('monselect');
var id = "ma_div_" + monselect.value;

function affichageDiv(){

     
};*/

/*var obj = document.getElementById('monselect');
for (var i = 0 ; obj.options[i] ; i++)
{
    if (i == obj.selectedIndex)
        document.getElementById(obj.options[obj.selectedIndex].value).style.display = 'block';
    else
        document.getElementById(obj.options[obj.selectedIndex].value).style.display = 'none';
}*/

var select = document.getElementsById('monselect').value;

alert(select.change);

function logSelect () {
    console.log(textSelect);
}