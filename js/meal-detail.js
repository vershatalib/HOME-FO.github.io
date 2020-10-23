$(document).ready(function() {
    localStorage.clear();

    // Script for detail page
    $basePriceText = $('.right-side .price span').text();
    $basePriceStr = $basePriceText.replace('PKR ', '');

    $productName = $('.right-side .new-heading h1').text();

    // Parse String to number for calculations
    $basePrice = parseInt($basePriceStr);

    localStorage.setItem('productName', $productName);
    localStorage.setItem('productBasePrice', $basePrice);
    localStorage.setItem('totalAmount', $basePrice);
    localStorage.setItem('productQuantity', 1);
    localStorage.setItem('totalProductQtyAmount', $basePrice);
    localStorage.setItem('productExtras', 0);

    $("#c1").click(function() {
        
        $friesValue = $(this).val();
        $friesPrice = parseInt($friesValue);

        if($(this).is(':checked')) {

            localStorage.setItem('fries', 'French Fries');
            localStorage.setItem('friesValue', $friesPrice);

            $productExtras = $friesPrice + parseInt(localStorage.getItem('productExtras'));

            localStorage.setItem('productExtras', $productExtras);
            
            $totalAmount = parseInt(localStorage.getItem('totalAmount')) + $friesPrice;
            localStorage.setItem('totalAmount', $totalAmount);

            $('.total-price p').text('PKR ' + $totalAmount);

        } else {

            localStorage.removeItem('fries');
            localStorage.removeItem('friesValue');

            $productExtras = parseInt(localStorage.getItem('productExtras')) - $friesPrice;

            localStorage.setItem('productExtras', $productExtras);

            $totalAmount = parseInt(localStorage.getItem('totalAmount')) - $friesPrice;
            localStorage.setItem('totalAmount', $totalAmount);

            $('.total-price p').text('PKR ' + $totalAmount);

        }
    });

    $("#c2").click(function() {
        
        $sauceValue = $(this).val();
        $saucePrice = parseInt($sauceValue);

        if($(this).is(':checked')) {

            localStorage.setItem('sauce', 'Extra Sause');
            localStorage.setItem('sauceValue', $saucePrice);

            $productExtras = $saucePrice + parseInt(localStorage.getItem('productExtras'));

            localStorage.setItem('productExtras', $productExtras);

            $totalAmount = parseInt(localStorage.getItem('totalAmount')) + $saucePrice;
            localStorage.setItem('totalAmount', $totalAmount);

            $('.total-price p').text('PKR ' + $totalAmount);

        } else {

            localStorage.removeItem('sauce');
            localStorage.removeItem('sauceValue');

            $productExtras = parseInt(localStorage.getItem('productExtras')) - $saucePrice;

            localStorage.setItem('productExtras', $productExtras);

            $totalAmount = parseInt(localStorage.getItem('totalAmount')) - $saucePrice;
            localStorage.setItem('totalAmount', $totalAmount);

            $('.total-price p').text('PKR ' + $totalAmount);

        }
    });

    $("#c3").click(function() {
        
        $cheeseValue = $(this).val();
        $cheesePrice = parseInt($cheeseValue);

        if($(this).is(':checked')) {

            localStorage.setItem('cheese', 'Double Cheese');
            localStorage.setItem('cheeseValue', $cheesePrice);

            $productExtras = $cheesePrice + parseInt(localStorage.getItem('productExtras'));

            localStorage.setItem('productExtras', $productExtras);

            $totalAmount = parseInt(localStorage.getItem('totalAmount')) + $cheesePrice;
            localStorage.setItem('totalAmount', $totalAmount);

            $('.total-price p').text('PKR ' + $totalAmount);

        } else {

            localStorage.removeItem('cheese');
            localStorage.removeItem('cheeseValue');

            $productExtras = parseInt(localStorage.getItem('productExtras')) - $cheesePrice;

            localStorage.setItem('productExtras', $productExtras);

            $totalAmount = parseInt(localStorage.getItem('totalAmount')) - $cheesePrice;
            localStorage.setItem('totalAmount', $totalAmount);

            $('.total-price p').text('PKR ' + $totalAmount);

        }
    });

});

// On quantity plus
$("#plus-btn").on('click', function() {

    $productQuantityStr = $('#qty_input').val();
    $quantity = parseInt($productQuantityStr);
    
    $productQuantity = $quantity + 1;
    localStorage.setItem('productQuantity', $productQuantity);

    $productBasePrice = parseInt(localStorage.getItem('productBasePrice'));

    $totalProductQtyAmount = $productQuantity * $productBasePrice;
    localStorage.setItem('totalProductQtyAmount', $totalProductQtyAmount);

    if(localStorage.getItem('productExtras') == null) {
        localStorage.setItem('totalAmount', $totalProductQtyAmount);
        $('.total-price p').text('PKR ' + $totalProductQtyAmount);
    } else {
        $productWithExtras = parseInt(localStorage.getItem('productExtras')) + $totalProductQtyAmount;
        localStorage.setItem('totalAmount', $productWithExtras);
        $('.total-price p').text('PKR ' + $productWithExtras);
    }

});

// On quantity minus
$("#minus-btn").on('click', function() {
    $productQuantityStr = $('#qty_input').val();
    $quantity = parseInt($productQuantityStr);

    if($quantity === 1) {

        $productQuantity = $quantity;
        localStorage.setItem('productQuantity', $productQuantity);

    } else {

        $productQuantity = $quantity - 1;
        localStorage.setItem('productQuantity', $productQuantity);

    }

    $productBasePrice = parseInt(localStorage.getItem('productBasePrice'));

    $totalProductQtyAmount = $productQuantity * $productBasePrice;
    localStorage.setItem('totalProductQtyAmount', $totalProductQtyAmount);
    
    if(localStorage.getItem('productExtras') == null) {
        localStorage.setItem('totalAmount', $totalProductQtyAmount);
        $('.total-price p').text('PKR ' + $totalProductQtyAmount);
    } else {
        $productWithExtras = $totalProductQtyAmount + parseInt(localStorage.getItem('productExtras'));
        localStorage.setItem('totalAmount', $productWithExtras);
        $('.total-price p').text('PKR ' + $productWithExtras);
    }

});

// On order now click
$('.order-now-check a').on('click', function (e) {});