var orderList = [{ "orderName": "Milk Tea", "orderPrice": "50", "orderNote": "no ice"},
               { "orderName": "Black Tea", "orderPrice": "40", "orderNote": "no sugar"},
               { "orderName": "Green Tea", "orderPrice": "30", "orderNote": "no ice and no sugar"}];

$( document ).ready(function() {
    drinkAct.renderOrders();
});

var drinkAct = {
    newOrder: function() {
        orderList.push({ "orderName": $("#order-name").val(), "orderPrice": $("#order-price").val(), "orderNote": $("#order-note").val() });
        drinkAct.renderOrders();
        $("#newOrderModal").modal("hide");
    },
    editOrder: function() {
        var item = $("#item-nums").val();
        orderList[item].orderName = $("#edit-order-name").val();
        orderList[item].orderPrice = $("#edit-order-price").val();
        orderList[item].orderNote = $("#edit-order-note").val();
        drinkAct.renderOrders();
        $("#editOrderModal").modal("hide");
    },
    deleOrder: function(item) {
        orderList.splice(item, 1);
        drinkAct.renderOrders();
    },
    editOrderModal: function(item) {
        $("#item-nums").val(item);
        $("#edit-order-name").val($("#" + item + "-title").text());
        $("#edit-order-price").val($("#" + item + "-text").text());
        $("#edit-order-note").val($("#" + item + "-note").text());
        $("#editOrderModal").modal("show");
    },
    renderOrders: function() {
        $("#order-part").empty();
        var startHtml = "";
        $.each(orderList, function(i, item){     
            startHtml = startHtml + '<div class="card card-service-lg"><div class="con"><div class="pre-intro">Order Name</div><div class="title" id="' + i + '-title">' + item.orderName + '</div><div class="pre-intro">Price $</div><div class="text" id="' + i +'-text">' + item.orderPrice + '</div><div class="pre-intro">Note</div><div class="note" id="' + i + '-note">' + item.orderNote + '</div><button class="btn btn-warning" onclick="drinkAct.editOrderModal(' + i + ')">Edit</button><button class="btn btn-danger" onclick="drinkAct.deleOrder(' + i + ')">Delete</button></div></div>';
        });
        $("#order-part").append(startHtml);
    }
}
