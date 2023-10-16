var first = parseInt(window.prompt("Enter first interger"));
var second = parseInt(window.prompt("Enter second interger"));

if (first > second) {
    document.write(first + " is larger integer than "+second);
} else if (first < second) {
    document.write(second + " is larger integer than "+first);
} else {
    document.write(first + " and "+second+ " both are equal");
}