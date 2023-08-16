document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const passwordInput = document.getElementById('password');
 
    generateBtn.addEventListener('click', function() {
        const length = document.getElementById('length').value;
        const alphabets = document.getElementById('alpha').value;
        const numDigits = document.getElementById('digits').value;
        const numSpecialChars = document.getElementById('specialChars').value;
 
        if (length < 8 )  
        {
            alert("Password length should be atleast 8 characters.");
            return;
        }
        if(length > 15)
        {
          alert("Password length should be 1essthan or equal to 15 characters.")
        }
        
 
        if (alphabets<=0||numDigits <=0 || numSpecialChars <=0) {
            alert("Number of alphabets,digits and special characters should not be negative and zero.");
            return;
        }
 
        const numLetters = length - numDigits - numSpecialChars - alphabets;
 
        if (numLetters!=0) {
            alert("The total number of alphabets,digits and special characters should equal to the password length.");
            return;
        }
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '0123456789';
        const specialChars = '@#$';
 
        let password = '';
 
         // Generate alphabets
        for (let i = 0; i < alphabets; i++) {
         const randomIndex = Math.floor(Math.random() * letters.length);
         password += letters[randomIndex];
        }
 
        // Generate digits
        for (let i = 0; i < numDigits; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            password += digits[randomIndex];
        }
 
        // Generate special characters
        for (let i = 0; i < numSpecialChars; i++) {
            const randomIndex = Math.floor(Math.random() * specialChars.length);
            password += specialChars[randomIndex];
        }
 
        // Shuffle the password to randomize the order of characters
        password = shuffle(password);
 
        passwordInput.value = password;
    });
 
    // Function to shuffle a string
    function shuffle(string) {
        const array = string.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }
 });
 function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
  }