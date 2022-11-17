function orderAndFind() {
  const pencils = ["2B", "3B", "2H", "4B"];
  const orderIndex = pencils.sort().indexOf("2H");
  console.log(orderIndex);
}
