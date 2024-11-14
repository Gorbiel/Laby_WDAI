function generatePassword() {
    const minLength = parseInt(document.getElementById('minLength').value);
    const maxLength = parseInt(document.getElementById('maxLength').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;
    const avoidAmbiguous = document.getElementById('avoidAmbiguous').checked;

    if (minLength > maxLength) {
        alert("Minimal password length can't be longer than maximum password length");
        return;
    }


    let numbers;
    let uppercaseChars;
    let lowercaseChars;
    let specialChars = "!@#$%^&*+?";

    if (avoidAmbiguous) {
        lowercaseChars = "abcdefghijkmnopqrstuvwxyz";
        uppercaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
        numbers = "23456789";
    } else {
        lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        numbers = "0123456789";
    }

    let charset = lowercaseChars + numbers;
    if (includeUppercase) charset += uppercaseChars;
    if (includeSpecialChars) charset += specialChars;

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    alert(`Your new password: ${password}`);
}