var numCount = document.getElementById('num_count');
var plusButton = document.getElementById('button_plus');
var minusButton = document.getElementById('button_minus');
plusButton.onclick = function () {
    var qty = parseInt(numCount.value);
    qty = qty + 1;
    qty.maxValue = 20;
    numCount.value = qty;
}
minusButton.onclick = function () {
    var qty = parseInt(numCount.value);
    qty = qty - 1;
    qty.minValue = 0;
    numCount.value = qty;
}