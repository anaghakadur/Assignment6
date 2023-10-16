var x, result;
for (x = 1; x <=100; x++) {
    result = '' + x;
    if (x % 15 == 0) {
        result = 'Marco! Polo!';
    } else if (x % 3 == 0) {
        result = 'Marco!';
    } else if (x % 5 == 0) {
        result = 'Polo!';
    }
    document.write(result + '<br>');
}