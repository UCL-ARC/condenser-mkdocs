function calculateTotal()
{
  let unit_price={
    cpu: 22,
    ram: 12,
    gpu: 2,
    storage:43
  };
  let item_price={}

  item_price.cpu = ($("#qty_cpu").val() * unit_price.cpu )
  $("#price_cpu").val(item_price.cpu);
  $("#text_price_cpu").text(item_price.cpu);

  item_price.ram = ($("#qty_ram").val() * unit_price.ram )
  $("#price_ram").val(item_price.ram);
  $("#text_price_ram").text(item_price.ram);

  item_price.gpu = ($("#qty_gpu").val() * unit_price.gpu )
  $("#price_gpu").val(item_price.gpu);
  $("#text_price_gpu").text(item_price.gpu);

  item_price.storage = ($("#qty_storage").val() * unit_price.storage )
  $("#price_storage").val(item_price.storage);
  $("#text_price_storage").text(item_price.storage);

  let total = item_price.cpu + item_price.ram + item_price.gpu + item_price.storage;

  $("#total_value").text(total);

}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})
