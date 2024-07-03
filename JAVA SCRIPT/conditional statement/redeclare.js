{
    var name="sandhiya";
    let greet="Hi";
    const space="";
   }
    //redeclare
    let greet="Hi";
    const space=" ";
    var name="sandy";
   
    console.log(name+space+greet);
   
   let a=10;
   let b=20;
   
   console.log(a++ +b //a=10  b=20   tot=30
               + a++  //a=11 (11+30) tot=41
               + a++  //a=12 (12+41) tot=53
               + b); //default a=13 (b=20+53)  tot=73
   
   console.log(a-- +b  //a=10 b=20 tot=30  
               +a--    //a=9 (30+9) tot=39
               +b      //a=8 add b=(20+39) tot=59
              +a--);  //a=8  (59+8) tot=67
   
   console.log(++a + b--   //a=11 -b=19 tot=30
               + a--      //a=11 (11+30) tot=41
               - ++b     // a=10 b=20 (41-20) tot=21
               + ++a );    //a=11 b=20  (21+11) tot=32);
   