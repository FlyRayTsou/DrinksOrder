var orderList = [{ "orderName": "Milk Tea", "orderPrice": "$50", "orderNote": "no ice"},
               { "orderName": "Black Tea", "orderPrice": "$40", "orderNote": "no sugar"},
               { "orderName": "Green Tea", "orderPrice": "$30", "orderNote": "no ice and no sugar"}
              ]
$( document ).ready(function() {
    var startHtml = "";
    $.each(orderList, function(i, item){     
        startHtml = startHtml + '<div class="card card-service-lg"><div class="con"><div class="title">' + item.orderName + '</div><div class="text">' + item.orderPrice + '</div><div class="note">' + item.orderNote + '</div></div></div>';
    });
    $("#order-part").append(startHtml);
});
var drinkAct = {
    newOrder: function() {
        var orderHtml = "";
        orderHtml = orderHtml + '<div class="card card-service-lg"><div class="con"><div class="title">' + $("#order-name").val() + '</div><div class="text">' + $("#order-price").val() + '</div><div class="note">' + $("#order-note").val() + '</div></div></div>';
        $("#order-part").append(orderHtml);
    },
    editOrder: function() {
    }
}