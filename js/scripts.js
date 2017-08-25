//bank constructor Names and balance
function Bank (firstName, lastName, balance){
  this.firstName= firstName;
  this.lastName= lastName;
  this.balance= balance;
}

//bank constructor deposit prototype
Bank.prototype.deposit= function(cash){
  var cash = parseInt(prompt('Weka Pesa'))
  var newBalance = this.balance += cash;
  this.balance = newBalance;
  return this.balance;
}

//bank cons withdrawal prototype
Bank.prototype.deposit= function(cash){
var cash = parseInt(prompt('Weka Pesa'))
this.balance +=cash;
return this.balance;
}
