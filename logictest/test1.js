let words = "beever";

function makeLine(length) {
    var line = "";
    for (var i = 0; i < length; i++) {
        for (var j = 0; j <= i; j++) {
            line += words[j];
        }
        if(i !== length - 1){
            line += "\n";
        }
    }
    return line;
}

console.log(makeLine(words.length));

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever