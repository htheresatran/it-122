function tip() {
    var total = document.getElementById("total").value;
    var salesTax = document.getElementById("salesTax").value;
    var tip = document.getElementById("tip").value;
  
  var total = ((total * salesTax / 100) + total) * (tip / 100 + 1);
  //round to two decimal places
  total = Math.round(total * 100) / 100;
}

  //accepts total price
  //accepts sales tax
  //accept percentage for tip