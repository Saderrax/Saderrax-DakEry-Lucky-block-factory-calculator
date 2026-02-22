const select = document.getElementById("brainrotSelect");
const resultSpan = document.getElementById("result");

const emptyOption = document.createElement("option");
emptyOption.value = "";
emptyOption.textContent = "-- Sélectionner --";
select.appendChild(emptyOption);

for (const name in brainrots) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = `${name} (${brainrots[name].rarity})`;
  select.appendChild(option);
}

function calculer() {
  const selectedName = select.value;

  if (!selectedName || !brainrots[selectedName]) {
    resultSpan.textContent = "0";
    return;
  }

  let total = brainrots[selectedName].base;
  const checkboxes = document.querySelectorAll(".mutation-check");

  checkboxes.forEach(box => {
    if (box.checked) {
      total *= parseFloat(box.value);
    }
  });

  resultSpan.textContent = Math.round(total).toLocaleString('fr-FR');
}
