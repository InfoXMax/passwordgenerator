function generatePassword() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbols = "[]{}()*;/,._-$&=<:!?";
    const all = lower + upper + number + symbols;
    const length = 16;
    const password = "".concat(
      Array.from({ length: length }, () => all[Math.floor(Math.random() * all.length)])
          .join("")
    );
  
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const url = document.querySelector("#url").value;
  
    document.querySelector("#username-output").textContent = username;
    document.querySelector("#email-output").textContent = email;
    document.querySelector("#url-output").textContent = url;
    document.querySelector("#password-output").textContent = password;
  
    // Code to save the generated password to a file or database can be added here
  }
  
  
function saveToCSV() {
    const username = document.querySelector("#username-output").textContent;
    const email = document.querySelector("#email-output").textContent;
    const url = document.querySelector("#url-output").textContent;
    const password = document.querySelector("#password-output").textContent;
  
    const data = `Username: ${username}\nEmail: ${email}\nURL: ${url}\nPassword: ${password}\n`;
  
    const file = new Blob([data], { type: "text/csv" });
    const fileUrl = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "passwords.csv";
    link.click();
  }

  const copyButton = document.getElementById("copy-button");
const passwordOutput = document.getElementById("output");

copyButton.addEventListener("click", function() {
  const textToCopy = passwordOutput.textContent;
  const tempInput = document.createElement("input");

  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  tempInput.value = textToCopy;

  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
});
