// Back-end

// Constructor for a customer's bank account
function BankAccount (firstName, lastName, balance){
  this.firstName= firstName;
  this.lastName= lastName;
  this.balance= balance;
}


//bank constructor deposit prototype
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    return this.balance;
}

//bank cons withdrawal prototype
BankAccount.prototype.withdrawal = function (amount) {
  this.balance -= amount;
  return this.balance;
}

// Reset input fields
function resetFields() {
  $('input#firstName').val("");
  $('input#lastName').val("");
  $('input#initialDeposit').val("");
  $('input#deposit').val("");
  $('input#withdraw').val("");
}

// Front-end
$(document).ready(function() {
  $('#newAccount').submit(function (event) {
    event.preventDefault();

    var inputtedFirstName = $('input#firstName').val();
      var inputtedLastName = $('input#lastName').val();

    var inputtedDeposit = parseFloat($('input#initialDeposit').val());

    var newCustomer = new BankAccount(inputtedFirstName,inputtedLastName, inputtedDeposit);
    // Test
    console.log(newCustomer);
    $('.balanceDisplay').append('<p>'+ newCustomer.balance + '</p>');


    $("form#depositTransaction").submit(function(event) {
      event.preventDefault();

      $('.balanceDisplay').empty();
      var depositAdded = parseFloat($('input#deposit').val());
      console.log(newCustomer.deposit(depositAdded));
      // console.log(newCustomer.balance);
      $('.balanceDisplay').append('<p>'+ newCustomer.balance + '</p>');

      resetFields();
    });

    $("form#withdrawalTransaction").submit(function(event) {
      event.preventDefault();

      $('.balanceDisplay').empty();
      var withdrawnAmount = parseFloat($('input#withdraw').val());
    console.log(newCustomer.withdrawal(withdrawnAmount));
      // console.log(newCustomer.balance);
      $('.balanceDisplay').append('<p>'+ newCustomer.balance + '</p>');

      resetFields();
    })
    resetFields();
  });

});
