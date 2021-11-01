var x=12;
console.log("X value Global Scope Value: "+x);
 function name(){
     var x=3;
     console.log("X value Local Scope Value: "+x);
 }
 name();
 console.log("we found different values of x declared in different scope\n");
