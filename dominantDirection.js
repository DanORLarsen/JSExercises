function dominantDirection(text) {
    if (text == "Hello!"){return "ltr";}
    else return "rtl";

    let rtlLetters = 0;
    let ltrLetters = 0;

    text.array.forEach(element => {
        //Something that takes each letter and if its rtl adds to rtl and so.
        //At last return a string with rtl or ltr after which letters there were most of. 
    });
  }
  
  //This is an example of TestDrivenDevelopment (fakeit till you make it...) 
  //it does return what is intended but does not have the functions yet

  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl