const menu = {
    _meal : "",
    _price : 0,
    set meal(mealTocheck){
      if ( typeof mealTocheck == 'string'){
        return this._meal = mealTocheck;
      } 
    },
    set price(priceToCheck){
      if( typeof priceToCheck == 'number'){
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial(){
      if ( this._meal && this._price){
        return `Today’s Special ${this._meal} is  for ${this._price}$ !"`
      } else "'Meal or price was not set correctly!'"
    }
    }
  //   menu._meal = 2;
  //  menu._price = "coock";
  menu.meal = "Spaghetti" ;
  menu.price = 5 ;
    console.log("Menu : ", menu.todaysSpecial);
  
  
  
  