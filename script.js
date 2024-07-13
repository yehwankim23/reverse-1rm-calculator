const max = document.querySelector("#max");
const sets = document.querySelector("#sets");
const reps = document.querySelector("#reps");

const percentages = [
  0, 1.0, 0.97, 0.94, 0.92, 0.89, 0.86, 0.83, 0.81, 0.78, 0.75, 0.73, 0.71, 0.7, 0.68, 0.67, 0.65,
  0.64, 0.63, 0.61, 0.6, 0.59, 0.58, 0.57, 0.56, 0.55, 0.54, 0.53, 0.52, 0.51, 0.5,
];

function calculateWeight() {
  document.querySelector("#weight").value = Math.round(
    max.value * percentages[sets.value] * percentages[reps.value]
  );
}

[max, sets, reps].forEach((element) => {
  element.addEventListener("focus", () => {
    element.value = "";
  });

  element.addEventListener("blur", () => {
    if (element.value === "") {
      element.value = 0;
    }

    calculateWeight();
  });

  element.addEventListener("input", () => {
    max.value = Math.round(Math.max(max.value, 0));
    sets.value = Math.round(Math.max(Math.min(sets.value, 30), 0));
    reps.value = Math.round(Math.max(Math.min(reps.value, 30), 0));

    calculateWeight();
  });
});
