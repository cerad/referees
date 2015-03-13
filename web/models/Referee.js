'use strict';

var Referee = function(params)
{
    this.entity = 'Referee';
    
    this.id    = null;
    this.name  = null;
    this.email = null;
    this.badge = null;
    
    if (params)
    {
        // Needs more work, hasOwnProperty and possible recursion
        for (var key in params) { this[key] = params[key]; }
    }
};
var RefereeFactory = {
  create: function(params)
  {
      return new Referee(params);
  }
};

var art = new Referee({ name: 'Art Hundiak', email: 'ahundiak@gmail.com' });

var joe = RefereeFactory.create({name: 'Joe' });

var jim = RefereeFactory.create();


console.log(art);
console.log(joe);
console.log(jim);
