const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const themeToggle = document.getElementById("themeToggle");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const lengthInput = document.getElementById("length");
const lengthSlider = document.getElementById("lengthSlider");

const getRandomChar = {
  upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
  lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
  symbol: () => "!@#$%^&*()_+-=<>?/[]{}".charAt(Math.floor(Math.random() * 20)),
};

function generatePassword() {
  const len = parseInt(lengthInput.value);
  const types = [];
  if (uppercase.checked) types.push("upper");
  if (lowercase.checked) types.push("lower");
  if (numbers.checked) types.push("number");
  if (symbols.checked) types.push("symbol");

  if (types.length === 0) {
    passwordOutput.value = "Select at least one option!";
    return;
  }

  let pwd = "";
  for (let i = 0; i < len; i++) {
    const randType = types[Math.floor(Math.random() * types.length)];
    pwd += getRandomChar[randType]();
  }

  passwordOutput.value = pwd;
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordOutput.value);
  copyBtn.innerText = "✅";
  setTimeout(() => (copyBtn.innerText = "📋"), 1000);
});

generateBtn.addEventListener("click", generatePassword);

lengthSlider.addEventListener("input", (e) => {
  lengthInput.value = e.target.value;
});
lengthInput.addEventListener("input", (e) => {
  lengthSlider.value = e.target.value;
});

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});
