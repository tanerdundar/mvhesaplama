const hesapla = document.getElementById("hesapla");
const sıfırla = document.getElementById("zero");

const millet = document.getElementById("ittm");
const cumhur = document.getElementById("ittc");
const emek = document.getElementById("itte");

const koltuk = document.getElementById("koltuk");
let chp = document.getElementById("chp");
let iyip = document.getElementById("iyip");
let akp = document.getElementById("akp");
let mhp = document.getElementById("mhp");
let ysp = document.getElementById("ysp");
let tip = document.getElementById("tip");
let diger = document.getElementById("diger");
let cvk = document.getElementById("cvk");
let ivk = document.getElementById("ivk");
let avk = document.getElementById("avk");
let mvk = document.getElementById("mvk");
let yvk = document.getElementById("yvk");
let tvk = document.getElementById("tvk");
let dvk = document.getElementById("dvk");
let c;

hesapla.addEventListener("click", () => {
  c = chp.value;
  i = iyip.value;
  a = akp.value;
  m = mhp.value;
  y = ysp.value;
  t = tip.value;
  d = diger.value;
  const oylar = {
    CHP: c,
    İYİP: i,
    AKP: a,
    MHP: m,
    YSP: y,
    TİP: t,
    DİĞER: d,
  };
  const result = dHondt(oylar, koltuk.value);
  cvk.innerHTML = result.CHP;
  ivk.innerHTML = result.İYİP;
  avk.innerHTML = result.AKP;
  mvk.innerHTML = result.MHP;
  yvk.innerHTML = result.YSP;
  tvk.innerHTML = result.TİP;
  dvk.innerHTML = result.DİĞER;
  millet.innerHTML = result.CHP + result.İYİP;
  cumhur.innerHTML = result.AKP + result.MHP;
  emek.innerHTML = result.YSP + result.TİP;
});
zero.addEventListener("click", () => {
  cvk.innerHTML = 0;
  ivk.innerHTML = 0;
  avk.innerHTML = 0;
  mvk.innerHTML = 0;
  yvk.innerHTML = 0;
  tvk.innerHTML = 0;
  dvk.innerHTML = 0;
  chp.value = 0;
  iyip.value = 0;
  akp.value = 0;
  mhp.value = 0;
  ysp.value = 0;
  tip.value = 0;
  diger.value = 0;
  millet.innerHTML = 0;
  cumhur.innerHTML = 0;
  emek.innerHTML = 0;
});

function dHondt(votes, seats) {
  const results = {};
  let remainingSeats = seats;
  const parties = Object.keys(votes).sort((a, b) => votes[b] - votes[a]);
  parties.forEach((party) => (results[party] = 0));
  while (remainingSeats > 0) {
    let maxQuotient = 0;
    let maxParty = "";

    parties.forEach((party) => {
      const quotient = votes[party] / (results[party] + 1);
      if (quotient > maxQuotient) {
        maxQuotient = quotient;
        maxParty = party;
      }
    });

    results[maxParty]++;
    remainingSeats--;
  }

  return results;
}

// console.log(results);
// Output: { 'Party A': 4, 'Party B': 3, 'Party C': 0, 'Party D': 0 }
