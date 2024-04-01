

/**
 * string- immutable(no changes can be made)
 */

/**
 * methods- actions that can be performed on objects.
 */

/*trim method(trim extra spaces)*/

let msg = "   hello  ";
msg.trim()


/**
 * toUpperCase() and toLowerCase()
 */

let str = "random string";
str.toUpperCase();
str.toLowerCase();


/**
 * string methods with arguments
 */

stringName.method(arg)/* format */

let n= "Newtocoding";

n.indexOf("coding") /*index- first occurance of letter in string*/
n.indexOf("w")
n.indexOf("o")
n.indexOf("l")


/*slice*/
/* str.slice(start,end) */

n.slice(5) /* "coding" */
n.slice(1,4) /* "ewt"(4 not included) */ 
n.slice(-1)// 11-1=>10(ans is g)//
 
/*replace and repeat */

n.replace("to","to do") //new to do coding 
n.repeat(2)//newtocodingnewtocoding

// parseInt(n) {n was string now by this it has become an int}