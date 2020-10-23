$(document).ready(function() {
    $productName = localStorage.getItem('productName');
    $totalAmount = localStorage.getItem('totalAmount');
    $productQuantity = localStorage.getItem('productQuantity');
    $fries = localStorage.getItem('fries');
    $sauce = localStorage.getItem('sauce');
    $cheese = localStorage.getItem('cheese');

    $tax = -20;
    $promo = 50;

    $('p.product-name').text($productName);
    $('p.product-qty').text($productQuantity);
    $totalAmount = $totalAmount - $tax - $promo;
	
	if($totalAmount <= -30){
		$totalAmount = 0;
	}
	
    $('p.total-amount').text('PKR '+ $totalAmount);

    if($fries != null) {
        $('.product-extras').append('<p>'+$fries+'&nbsp;</p>');
    }
    if($sauce != null) {
        $('.product-extras').append('<p>'+$sauce+'&nbsp;</p>');
    }
    if($cheese != null) {
        $('.product-extras').append('<p>'+$cheese+'&nbsp;</p>');
    }
    if($fries === null && $sauce === null && $cheese === null) {
        $('.product-extras').append('<p>No Extras</p>');
    }
});