$(document).ready(function() {
    
    $productName = localStorage.getItem('productName');
    $totalAmount = localStorage.getItem('totalAmount');
    $productBasePrice = localStorage.getItem('productBasePrice');
    $productQuantity = localStorage.getItem('productQuantity');
    $totalProductQtyAmount = localStorage.getItem('totalProductQtyAmount');
    $productExtras = localStorage.getItem('productExtras');
    $fries = localStorage.getItem('fries');
    $friesValue = localStorage.getItem('friesValue');
    $sauce = localStorage.getItem('sauce');
    $sauceValue = localStorage.getItem('sauceValue');
    $cheese = localStorage.getItem('cheese');
    $cheeseValue = localStorage.getItem('cheeseValue');

    $tax = -20;
    $promo = 50;
	

    $('h4.product-name').text($productName);
    $('td.qty').text($productQuantity);
    $('td.product-total').text('PKR ' + $totalProductQtyAmount);
    $('h3.total-amount ins').text('PKR ' + $totalAmount);

    $('p.qty-price').text($productQuantity + ' X PKR ' + $productBasePrice);
    $('p.base-price').text('PKR ' + $productBasePrice);
    $('p.product-total').text('PKR ' + $totalProductQtyAmount);

    $totalAmount = $totalAmount - $tax - $promo;

	if($totalAmount <= -30){
		$totalAmount = 0;
	}
	
    $('p.total-amount').text('PKR ' + $totalAmount);

    if($fries != null) {
        $('.my-checkout table tbody:nth-last-child(2)').append(
            '<tr>'+
                '<td>' +
                    '<div class="checkout-thumb">' +
                        '<a href="meal_detail.html">' +
                            '<img src="images/checkout/thumb-1.jpg" class="img-responsive" alt="thumb" title="thumb">' +
                        '</a>' +
                    '</div>' +
                    '<div class="name">' +
                        '<a href="meal_detail.html">'+
                            '<h4>'+$fries+'</h4>'+
                        '</a>'+
                        '<a href="restaurant_detail.html">'+
                            '<p>Restaurant Name</p>'+
                        '</a>'+
                        '<div class="star">'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="far fa-star"></i>'+
                            '<span>4.5</span>'+
                        '</div>'+
                    '</div>'+
                '</td>'+
                '<td class="td-content">1</td>'+
                '<td class="td-content">PKR '+ $friesValue +'</td>'+
                '<td><button class="remove-btn fries">Remove</button></td>'+
            '</tr>'
        );
    }

    if($sauce != null) {
        $('.my-checkout table tbody:nth-last-child(2)').append(
            '<tr>'+
                '<td>' +
                    '<div class="checkout-thumb">' +
                        '<a href="meal_detail.html">' +
                            '<img src="images/checkout/thumb-1.jpg" class="img-responsive" alt="thumb" title="thumb">' +
                        '</a>' +
                    '</div>' +
                    '<div class="name">' +
                        '<a href="meal_detail.html">'+
                            '<h4>'+$sauce+'</h4>'+
                        '</a>'+
                        '<a href="restaurant_detail.html">'+
                            '<p>Restaurant Name</p>'+
                        '</a>'+
                        '<div class="star">'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="far fa-star"></i>'+
                            '<span>4.5</span>'+
                        '</div>'+
                    '</div>'+
                '</td>'+
                '<td class="td-content">1</td>'+
                '<td class="td-content">PKR '+ $sauceValue +'</td>'+
                '<td><button class="remove-btn sauce">Remove</button></td>'+
            '</tr>'
        );
    }

    if($cheese != null) {
        $('.my-checkout table tbody:nth-last-child(2)').append(
            '<tr>'+
                '<td>' +
                    '<div class="checkout-thumb">' +
                        '<a href="meal_detail.html">' +
                            '<img src="images/checkout/thumb-1.jpg" class="img-responsive" alt="thumb" title="thumb">' +
                        '</a>' +
                    '</div>' +
                    '<div class="name">' +
                        '<a href="meal_detail.html">'+
                            '<h4>'+$cheese+'</h4>'+
                        '</a>'+
                        '<a href="restaurant_detail.html">'+
                            '<p>Restaurant Name</p>'+
                        '</a>'+
                        '<div class="star">'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="fas fa-star"></i>'+
                            '<i class="far fa-star"></i>'+
                            '<span>4.5</span>'+
                        '</div>'+
                    '</div>'+
                '</td>'+
                '<td class="td-content">1</td>'+
                '<td class="td-content">PKR '+ $cheeseValue +'</td>'+
                '<td><button class="remove-btn cheese">Remove</button></td>'+
            '</tr>'
        );
    }



    $("button.remove-btn.fries").on('click', function() {
        localStorage.removeItem('fries');
        $totalAmount = $totalAmount - $friesValue;
        localStorage.setItem('totalAmount', $totalAmount);
        $('h3.total-amount ins').text('PKR ' + $totalAmount);
        location.reload();
    });

    $("button.remove-btn.sauce").on('click', function() {
        localStorage.removeItem('sauce');
        $totalAmount = $totalAmount - $sauceValue;
        localStorage.setItem('totalAmount', $totalAmount);
        $('h3.total-amount ins').text('PKR ' + $totalAmount);
        location.reload();
    });

    $("button.remove-btn.cheese").on('click', function() {
        localStorage.removeItem('cheese');
        $totalAmount = $totalAmount - $cheeseValue;
        localStorage.setItem('totalAmount', $totalAmount);
        $('h3.total-amount ins').text('PKR ' + $totalAmount);
        location.reload();
    });

    $("button.remove-btn.product").on('click', function() {
        localStorage.removeItem('productQuantity');
        localStorage.removeItem('totalProductQtyAmount');
        localStorage.removeItem('productBasePrice');

		$totalAmount = $totalAmount - $tax + $promo;
        $totalAmount = $totalAmount - $totalProductQtyAmount;
		$totalAmount = 0;
        localStorage.setItem('totalAmount', $totalAmount);
		
        $('td.qty').text($productQuantity);
        $('td.product-total').text('PKR ' + $totalProductQtyAmount);
        $('h3.total-amount ins').text('PKR ' + $totalAmount);
        location.reload();
    });

});