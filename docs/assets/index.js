
document.getElementById('root').innerHTML = `
  <div style="max-width: 600px; margin: auto; background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="font-size: 1.5rem; font-weight: bold;">Gehaltsrechner</h1>
    <p>Jahresbrutto eingeben:</p>
    <input type="number" id="jahresbrutto" style="width: 100%; padding: 0.5rem; margin-bottom: 1rem;" placeholder="z.B. 50000">
    <button onclick="berechneNetto()" style="padding: 0.5rem 1rem; background-color: #2563eb; color: white; border: none; border-radius: 0.5rem;">Berechnen</button>
    <div id="ergebnis" style="margin-top: 1rem;"></div>
  </div>
`;

function berechneNetto() {
  const jb = parseFloat(document.getElementById("jahresbrutto").value);
  if (isNaN(jb) || jb <= 0) return;

  const mb = jb / 12;
  const lohn = mb * 0.2;
  const soli = mb * 0.01;
  const kirche = lohn * 0.09;
  const renten = mb * 0.093;
  const krank = mb * 0.073;
  const arbeitslos = mb * 0.012;
  const pflege = mb * 0.01525;

  const abzug = lohn + soli + kirche + renten + krank + arbeitslos + pflege;
  const nettoMonat = mb - abzug;
  const nettoJahr = nettoMonat * 12;

  document.getElementById("ergebnis").innerHTML = `
    <p><strong>Monatliches Netto:</strong> ${nettoMonat.toFixed(2)} EUR</p>
    <p><strong>Jahresnetto:</strong> ${nettoJahr.toFixed(2)} EUR</p>
    <p><strong>Monatliches Brutto:</strong> ${mb.toFixed(2)} EUR</p>
  `;
}
