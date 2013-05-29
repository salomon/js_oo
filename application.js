$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    Dealer.add();
  });

  $('#roller button.roll').on('click', function() {
    Dealer.roll();
  });
});

var Dealer = {
  add: function(){
    var die = new Die(0);
    die.display();
  },

  roll: function(){
    $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $('.die:eq('+ k +')').text(value);
    });
  }

};

function Die(number){
  this.number = number;
}

Die.prototype = {
  display: function(){
    $('.dice').append('<div class="die">'+this.number+'</div>');
  }
}