'use strict';
module.exports = function() {
  return {
    setValue : function(key,value){
      this.key = value;
    },
    getValue : function(key){
      if(this.key){
        return this.key;
      } else return null;
    }
  };
};