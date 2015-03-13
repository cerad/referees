'use strict';

/* ============================================
 * There is no object called window.
 * console.log(window);
 */

/* ============================================
 * Using the command line there is one called global
 * With lots of stuff in it.
 */
// console.log(global);

/* =====================================
 * With strict need a var to define things here
 * Same when within a function
 * It's a run time thing
 */
var window = { object: 'window'};

console.log(window);

(function()
{
    var x = 1;
    var angular = { 'object': 'angular'};
    global.angular = angular;
})();

console.log(angular);

/* ==============================================
 * So basically, anything we explicitly assign to global becomes a global
 */

var ang = require('./ang');

console.log('Window ' + (ang.isObject(window) ? 'Is Object' : 'Is Not Object'));
console.log('Null '   + (ang.isObject(null)   ? 'Is Object' : 'Is Not Object'));

var x = { x: 'xprop' };
var y = { y: 'yprop' };

x = ang.extend(x,y);

console.log(x);
