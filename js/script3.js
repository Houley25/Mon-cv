 function salutation() {
    return "Bonjour monsieur";
}

for (let i = 1; i <= 20; i++){
    document.write(i + ' ' + salutation() + '<br/>')
}