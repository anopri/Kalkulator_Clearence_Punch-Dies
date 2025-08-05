// clearance.js

function roundToNearestClearance(value) {
  if (value < 0.025) return 0.0;
  if (value < 0.07) return 0.05;
  if (value < 0.10) return 0.1;
  return Math.round(value * 20) / 20;
}

function calculateClearance() {
  const thickness = parseFloat(document.getElementById('thickness').value);
  const material = document.getElementById('material').value;
  const toolFactor = parseFloat(document.getElementById('tool').value);

  if (isNaN(thickness) || thickness <= 0) {
    alert("Masukkan tebal plat yang valid (lebih dari 0).“);
    return;
  }

  let minPercent, bestPercent, maxPercent;

  switch (material) {
    case 'aluminium':
      minPercent = 0.12;
      bestPercent = 0.15;
      maxPercent = 0.20;
      break;
    case 'sphc':
      minPercent = 0.18;
      bestPercent = 0.20;
      maxPercent = 0.25;
      break;
    case 'stainless':
      minPercent = 0.18;
      bestPercent = 0.20;
      maxPercent = 0.25;
      break;
  }

  const minClearance = roundToNearestClearance(thickness * minPercent * toolFactor);
  const bestClearance = roundToNearestClearance(thickness * bestPercent * toolFactor);
  const maxClearance = roundToNearestClearance(thickness * maxPercent * toolFactor);

  document.getElementById('result').innerHTML = `
    <div class="result-line best">
      <div class="label-col bold">Best :</div>
      <div class="value-col bold">${bestClearance.toFixed(2)} mm (Rekomendasi)</div>
    </div>
    <div class="result-line">
      <div class="label-col">Min  :</div>
      <div class="value-col">${minClearance.toFixed(2)} mm</div>
    </div>
    <div class="result-line">
      <div class="label-col">Max :</div>
      <div class="value-col">${maxClearance.toFixed(2)} mm</div>
    </div>
  `;
}
