
/**
 * Return a timestamp with the format "m-d-yy_h-MM-ss_TT"
 * @type {Date}
 */

exports.timeStamp = function timeStamp() {
    // Create a date object with the current time
      var now = new Date();
    
    // Create an array with the current month, day and time
      var date = [ now.getDate(), now.getMonth() + 1, now.getFullYear() ];
    
    // Create an array with the current hour, minute and second
      var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
    
    // If seconds and minutes are less than 10, add a zero
      for ( var i = 1; i < 3; i++ ) {
        if ( time[i] < 10 ) {
          time[i] = "0" + time[i];
        }
      }
    
    // Return the formatted string
      return date.join("-") + "_" + time.join("-");
    };