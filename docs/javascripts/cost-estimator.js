function calculateTotal()
{
  let unit_price={
    cpu: 10,
    ram: 11,
    gpua: 12,
    gpub: 13,
    storage: 14
  };
  let item_price={}

  item_price.cpu = ($("#qty_cpu").val() * unit_price.cpu )
  $("#price_cpu").val(item_price.cpu);
  $("#text_price_cpu").text(item_price.cpu);

  item_price.ram = ($("#qty_ram").val() * unit_price.ram )
  $("#price_ram").val(item_price.ram);
  $("#text_price_ram").text(item_price.ram);

  item_price.gpua = ($("#qty_gpua").val() * unit_price.gpua )
  $("#price_gpua").val(item_price.gpua);
  $("#text_price_gpua").text(item_price.gpua);

  item_price.gpub = ($("#qty_gpub").val() * unit_price.gpub )
  $("#price_gpub").val(item_price.gpub);
  $("#text_price_gpub").text(item_price.gpub);

  item_price.storage = ($("#qty_storage").val() * unit_price.storage )
  $("#price_storage").val(item_price.storage);
  $("#text_price_storage").text(item_price.storage);

  let total = item_price.cpu
              + item_price.ram
              + item_price.gpua
              + item_price.gpub
              + item_price.storage;

  $("#total_value").text(total);

}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})
