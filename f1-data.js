const raceResults = [
	{ position: 1, name: "Lando Norris", code: "NOR", team: "McLaren", color: "papaya", gap: "Víťaz", points: 25 },
	{ position: 2, name: "Max Verstappen", code: "VER", team: "Red Bull Racing", color: "blue", gap: "+ 14.602 s", points: 18 },
	{ position: 3, name: "Isack Hadjar", code: "HAD", team: "Red Bull Racing", color: "blue", gap: "+ 24.485 s", points: 15 },
	{ position: 4, name: "George Russell", code: "RUS", team: "Mercedes", color: "teal", gap: "+ 33.991 s", points: 12 },
	{ position: 5, name: "Kimi Antonelli", code: "ANT", team: "Mercedes", color: "teal", gap: "+ 36.017 s", points: 10 },
	{ position: 6, name: "Oscar Piastri", code: "PIA", team: "McLaren", color: "papaya", gap: "+ 56.475 s", points: 8 },
	{ position: 7, name: "Charles Leclerc", code: "LEC", team: "Ferrari", color: "red", gap: "+ 73.586 s", points: 6 },
	{ position: 8, name: "Liam Lawson", code: "LAW", team: "Racing Bulls", color: "periwinkle", gap: "+ 75.402 s", points: 4 },
	{ position: 9, name: "Lewis Hamilton", code: "HAM", team: "Ferrari", color: "red", gap: "+ 96.536 s", points: 2 },
	{ position: 10, name: "Nico Hülkenberg", code: "HUL", team: "Audi", color: "orange", gap: "+ 1 kolo", points: 1 },
	{ position: 11, name: "Arvid Lindblad", code: "LIN", team: "Racing Bulls", color: "periwinkle", gap: "+ 1 kolo", points: 0 },
	{ position: 12, name: "Fernando Alonso", code: "ALO", team: "Aston Martin", color: "green", gap: "+ 1 kolo", points: 0 },
	{ position: 13, name: "Franco Colapinto", code: "COL", team: "Alpine", color: "pink", gap: "+ 1 kolo", points: 0 },
	{ position: 14, name: "Pierre Gasly", code: "GAS", team: "Alpine", color: "pink", gap: "+ 1 kolo", points: 0 },
	{ position: 15, name: "Alexander Albon", code: "ALB", team: "Williams", color: "blue2", gap: "+ 1 kolo", points: 0 },
	{ position: 16, name: "Gabriel Bortoleto", code: "BOR", team: "Audi", color: "orange", gap: "+ 1 kolo", points: 0 },
	{ position: 17, name: "Oliver Bearman", code: "BEA", team: "Haas", color: "silver", gap: "+ 1 kolo", points: 0 },
	{ position: 18, name: "Sergio Pérez", code: "PER", team: "Cadillac", color: "sand", gap: "+ 2 kolá", points: 0 },
	{ position: 19, name: "Carlos Sainz", code: "SAI", team: "Williams", color: "blue2", gap: "+ 2 kolá", points: 0 },
	{ position: 20, name: "Rafael Camara", code: "CAM", team: "Haas", color: "silver", gap: "+ 2 kolá", points: 0 },
	{ position: 21, name: "Lance Stroll", code: "STR", team: "Aston Martin", color: "green", gap: "DNF", points: 0 },
	{ position: 22, name: "Valtteri Bottas", code: "BOT", team: "Cadillac", color: "sand", gap: "DNF", points: 0 }
];

const qualifyingRows = [
	["Lando Norris", "McLaren", "papaya"], ["George Russell", "Mercedes", "teal"], ["Kimi Antonelli", "Mercedes", "teal"],
	["Charles Leclerc", "Ferrari", "red"], ["Liam Lawson", "Racing Bulls", "periwinkle"], ["Nico Hülkenberg", "Audi", "orange"],
	["Isack Hadjar", "Red Bull Racing", "blue"], ["Oliver Bearman", "Haas", "silver"], ["Fernando Alonso", "Aston Martin", "green"],
	["Alexander Albon", "Williams", "blue2"], ["Lewis Hamilton", "Ferrari", "red"], ["Oscar Piastri", "McLaren", "papaya"],
	["Rafael Camara", "Haas", "silver"], ["Arvid Lindblad", "Racing Bulls", "periwinkle"], ["Carlos Sainz", "Williams", "blue2"],
	["Max Verstappen", "Red Bull Racing", "blue"], ["Franco Colapinto", "Alpine", "pink"], ["Pierre Gasly", "Alpine", "pink"],
	["Lance Stroll", "Aston Martin", "green"], ["Valtteri Bottas", "Cadillac", "sand"], ["Sergio Pérez", "Cadillac", "sand"],
	["Gabriel Bortoleto", "Audi", "orange"]
];
const qualifyingLapTimes = {
	q1: ["1:30.939", "1:31.206", "1:32.229", "1:32.121", "1:32.085", "1:31.693", "1:32.059", "1:33.030", "1:32.092", "1:33.150", "1:31.666", "1:32.251", "1:32.809", "1:32.306", "1:32.959", "1:31.238", "1:33.327", "1:33.449", "1:33.653", "1:33.774", "1:34.509", "1:41.564"],
	q2: ["1:29.207", "1:26.745", "1:29.302", "1:28.082", "1:27.049", "1:28.361", "1:27.218", "1:29.130", "1:29.072", "1:28.918", "1:30.001", "1:30.369", "1:31.515", "1:31.687", "1:31.785", null],
	q3: ["1:27.470", "1:27.674", "1:28.095", "1:28.289", "1:28.321", "1:28.668", "1:28.763", "1:29.831", "1:30.311", "1:30.456"]
};
const qualifyingResults = qualifyingRows.map(([name, team, color], index) => ({
	position: index + 1,
	name,
	team,
	color,
	q1: qualifyingLapTimes.q1[index],
	q2: qualifyingLapTimes.q2[index] ?? "—",
	q3: qualifyingLapTimes.q3[index] ?? "—",
	status: index >= 16 ? "VYPADOL V Q1" : index >= 10 ? "VYPADOL V Q2" : "POSTÚPIL DO Q3"
}));

const sprintResults = [
	["Max Verstappen", "Red Bull Racing", "blue"], ["Lewis Hamilton", "Ferrari", "red"], ["Charles Leclerc", "Ferrari", "red"],
	["Kimi Antonelli", "Mercedes", "teal"], ["Liam Lawson", "Racing Bulls", "periwinkle"], ["Oliver Bearman", "Haas", "silver"],
	["Nico Hülkenberg", "Audi", "orange"], ["Lando Norris", "McLaren", "papaya"], ["Pierre Gasly", "Alpine", "pink"],
	["Esteban Ocon", "Haas", "silver"], ["Fernando Alonso", "Aston Martin", "green"], ["Carlos Sainz", "Williams", "blue2"],
	["Arvid Lindblad", "Racing Bulls", "periwinkle"], ["Oscar Piastri", "McLaren", "papaya"], ["Alexander Albon", "Williams", "blue2"],
	["Gabriel Bortoleto", "Audi", "orange"], ["Valtteri Bottas", "Cadillac", "sand"], ["Isack Hadjar", "Red Bull Racing", "blue"],
	["Franco Colapinto", "Alpine", "pink"], ["George Russell", "Mercedes", "teal"], ["Sergio Pérez", "Cadillac", "sand"],
	["Lance Stroll", "Aston Martin", "green"]
].map(([name, team, color], index) => ({ position: index + 1, name, team, color }));

const driverStandings = [
	["Kimi Antonelli", "Mercedes", "teal", 400], ["Max Verstappen", "Red Bull", "blue", 297],
	["George Russell", "Mercedes", "teal", 274], ["Lando Norris", "McLaren", "papaya", 271],
	["Lewis Hamilton", "Ferrari", "red", 263], ["Charles Leclerc", "Ferrari", "red", 255],
	["Oscar Piastri", "McLaren", "papaya", 160], ["Isack Hadjar", "Red Bull", "blue", 137],
	["Liam Lawson", "Racing Bulls", "periwinkle", 93], ["Pierre Gasly", "Alpine", "pink", 42],
	["Arvid Lindblad", "Racing Bulls", "periwinkle", 38], ["Franco Colapinto", "Alpine", "pink", 27],
	["Oliver Bearman", "Haas", "silver", 23], ["Nico Hülkenberg", "Audi", "orange", 15],
	["Gabriel Bortoleto", "Audi", "orange", 14], ["Esteban Ocon", "Haas", "silver", 7],
	["Fernando Alonso", "Aston Martin", "green", 7], ["Carlos Sainz", "Williams", "blue2", 7],
	["Alexander Albon", "Williams", "blue2", 5], ["Yuki Tsunoda", "Racing Bulls", "periwinkle", 1],
	["Ryo Hirakawa", "Haas", "silver", 1], ["Rafael Camara", "Haas", "silver", 0],
	["Lance Stroll", "Aston Martin", "green", 0], ["Valtteri Bottas", "Cadillac", "sand", 0],
	["Sergio Pérez", "Cadillac", "sand", 0]
].map(([name, team, color, points], index) => ({ position: index + 1, name, team, color, points }));

const constructorStandings = [
	["Mercedes", "teal", 674], ["Ferrari", "red", 518], ["Red Bull", "blue", 448],
	["McLaren", "papaya", 431], ["Racing Bulls", "periwinkle", 118], ["Alpine", "pink", 69],
	["Haas", "silver", 31], ["Audi", "orange", 29], ["Williams", "blue2", 12],
	["Aston Martin", "green", 7], ["Cadillac", "sand", 0]
].map(([name, color, points], index) => ({ position: index + 1, name, color, points }));

const formattedPosition = (position) => String(position).padStart(2, "0");
const teamCode = (team) => ({
	Mercedes: "MER",
	Ferrari: "FER",
	"Red Bull": "RBR",
	"Red Bull Racing": "RBR",
	McLaren: "MCL",
	"Racing Bulls": "RB",
	Alpine: "ALP",
	Haas: "HAS",
	Audi: "AUD",
	Williams: "WIL",
	"Aston Martin": "AMR",
	Cadillac: "CAD"
}[team] ?? team.slice(0, 3).toUpperCase());
const raceRow = ({ position, name, code, team, color, gap, points }) => `<tr><td class="rank${position === 1 ? " winner" : ""}">${formattedPosition(position)}</td><td><b>${name}</b><small class="code">${code}</small></td><td><i class="dot ${color}"></i> ${team}</td><td>${gap}</td><td class="num points">${points}</td></tr>`;
const sessionTable = (rows) => `<table class="session-table"><thead><tr><th>POS.</th><th>JAZDEC</th><th>TÍM</th></tr></thead><tbody>${rows.map(({ position, name, team, color }) => `<tr><td class="rank${position === 1 ? " winner" : ""}">${formattedPosition(position)}</td><td><b>${name}</b></td><td><i class="dot ${color}"></i> ${team}</td></tr>`).join("")}</tbody></table>`;
const qualifyingTable = (rows) => `<table class="session-table qualification-table"><thead><tr><th>POS.</th><th>JAZDEC</th><th>TÍM</th><th class="num">Q1</th><th class="num">Q2</th><th class="num">Q3</th><th>STAV</th></tr></thead><tbody>${rows.map(({ position, name, team, color, q1, q2, q3, status }) => `<tr><td class="rank${position === 1 ? " winner" : ""}">${formattedPosition(position)}</td><td><b>${name}</b></td><td><i class="dot ${color}"></i> ${team}</td><td class="num">${q1}</td><td class="num">${q2}</td><td class="num">${q3}</td><td><span class="qualification-status${position > 10 ? " eliminated" : ""}">${status}</span></td></tr>`).join("")}</tbody></table>`;

document.querySelectorAll("#vysledky table:not(.session-table) tbody").forEach((body) => {
	body.innerHTML = raceResults.map(raceRow).join("");
});

document.querySelectorAll(".extras details").forEach((details) => {
	const summary = details.querySelector("summary");
	if (!summary) return;
	const isQualifying = summary.textContent.includes("Kvalifikácia");
	const rows = isQualifying ? qualifyingResults : sprintResults;
	summary.innerHTML = isQualifying
		? "Kvalifikácia · São Paulo <span>07.11.2026 · OFICIÁLNE ČASY</span>"
		: "Posledný šprint · Singapur <span>10.10.2026 · 22 JAZDCOV</span>";
	const table = details.querySelector("table");
	if (table) table.outerHTML = isQualifying ? qualifyingTable(rows) : sessionTable(rows);
});

const standingsTables = document.querySelectorAll("#bodovanie table.compact");
if (standingsTables[0]) {
	standingsTables[0].querySelector("tbody").innerHTML = driverStandings.map(({ position, name, team, color, points }) => `<tr${position > 10 ? ' class="standings-extra"' : ""}><td class="rank${position === 1 ? " winner" : ""}">${formattedPosition(position)}</td><td><b>${name}</b></td><td><i class="dot ${color}"></i><span class="team-code">${teamCode(team)}</span></td><td class="num points">${points}</td></tr>`).join("");
	const standingsWrap = standingsTables[0].closest(".table-scroll");
	if (standingsWrap) {
		const toggle = document.createElement("button");
		toggle.type = "button";
		toggle.className = "standings-toggle";
		toggle.textContent = `Zobraziť všetkých ${driverStandings.length} jazdcov`;
		toggle.setAttribute("aria-expanded", "false");
		toggle.addEventListener("click", () => {
			const expanded = standingsTables[0].classList.toggle("standings-expanded");
			toggle.setAttribute("aria-expanded", String(expanded));
			toggle.textContent = expanded ? "Zobraziť TOP 10" : `Zobraziť všetkých ${driverStandings.length} jazdcov`;
		});
		standingsWrap.insertAdjacentElement("afterend", toggle);
	}
}
if (standingsTables[1]) {
	standingsTables[1].querySelector("tbody").innerHTML = constructorStandings.map(({ position, name, color, points }) => `<tr><td class="rank${position === 1 ? " winner" : ""}">${formattedPosition(position)}</td><td><i class="dot ${color}"></i> ${name}</td><td class="num points">${points}</td><td class="num">${position === 1 ? "—" : `− ${constructorStandings[0].points - points}`}</td></tr>`).join("");
}

document.querySelectorAll(".demo").forEach((label) => { label.textContent = "AKTUALIZOVANÉ · 09.11.2026"; });
const home = document.querySelector("main.page:not(.results-page)");
if (home) {
	const season = home.querySelector(".kicker > span:first-child");
	if (season) season.textContent = "SEZÓNA 2026";
	const featureTitle = home.querySelector(".feature-heading h2");
	if (featureTitle) featureTitle.textContent = "TOP 5 · Veľká cena São Paula";
	const featureEyebrow = home.querySelector(".feature-heading .eyebrow");
	if (featureEyebrow) featureEyebrow.textContent = "FORMULA 1 GRANDE PRÊMIO DE SÃO PAULO · 08.11.2026";
	const raceName = home.querySelector(".featured-results .race-meta strong");
	if (raceName) raceName.textContent = "VEĽKÁ CENA SÃO PAULA 2026";
	const circuit = home.querySelector(".featured-results .race-meta span");
	if (circuit) circuit.textContent = "Autódromo José Carlos Pace · Interlagos · 71 kôl";
	const featureList = home.querySelector(".feature-list");
	if (featureList) featureList.innerHTML = raceResults.slice(0, 5).map(({ position, name, team, gap }) => `<li><b>${formattedPosition(position)}</b><span><strong>${name}</strong><small>${team}</small></span><time>${gap}</time></li>`).join("");
	const winner = home.querySelector(".winner-note");
	if (winner) winner.textContent = "NAJRÝCHLEJŠIE KOLO: KIMI ANTONELLI · 1:12.689";
	const haas = [...home.querySelectorAll(".team-grid article")].find((item) => item.querySelector("h3")?.textContent === "Haas");
	if (haas) haas.querySelector("p").innerHTML = "Rafael Camara <span>CAM</span>";
	const raceNote = home.querySelector("#vysledky .note");
	if (raceNote) raceNote.innerHTML = 'VC São Paula · 8. 11. 2026. Šprint sa na tomto víkende nekonal; zobrazený je posledný šprint sezóny v Singapure. Kvalifikačné časy: <a href="https://www.formula1.com/en/results/2026/races/1299/brazil/qualifying" target="_blank" rel="noopener noreferrer">oficiálna klasifikácia F1</a>.';
}

const photoCarousel = document.querySelector(".feature-photo");
if (photoCarousel) {
	const slides = [...photoCarousel.querySelectorAll(".photo-slide")];
	const counter = photoCarousel.querySelector(".photo-label b");
	if (slides.length > 1 && counter) {
		let activeSlide = 0;
		const dotsWrap = photoCarousel.querySelector(".photo-dots");
		const showSlide = (index) => {
			slides[activeSlide].classList.remove("is-active");
			slides[activeSlide].setAttribute("aria-hidden", "true");
			activeSlide = (index + slides.length) % slides.length;
			slides[activeSlide].classList.add("is-active");
			slides[activeSlide].setAttribute("aria-hidden", "false");
			counter.textContent = `${String(activeSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
			dotsWrap?.querySelectorAll(".photo-dot").forEach((dot, dotIndex) => {
				dot.classList.toggle("is-active", dotIndex === activeSlide);
				dot.setAttribute("aria-current", dotIndex === activeSlide ? "true" : "false");
			});
		};
		const showNextSlide = () => showSlide(activeSlide + 1);
		dotsWrap?.replaceChildren(...slides.map((_, index) => {
			const dot = document.createElement("button");
			dot.type = "button";
			dot.className = `photo-dot${index === 0 ? " is-active" : ""}`;
			dot.setAttribute("aria-label", `Fotografia ${index + 1} z ${slides.length}`);
			dot.setAttribute("aria-current", index === 0 ? "true" : "false");
			dot.addEventListener("click", () => showSlide(index));
			return dot;
		}));
		photoCarousel.querySelector(".photo-prev")?.addEventListener("click", () => showSlide(activeSlide - 1));
		photoCarousel.querySelector(".photo-next")?.addEventListener("click", showNextSlide);
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			window.setInterval(showNextSlide, 3000);
		}
	}
}

const standingsNote = document.querySelector("#bodovanie .note");
if (standingsNote) standingsNote.textContent = "Poradie po VC São Paula. Sezónny súčet zahŕňa aj jazdcov, ktorí počas roka zaskakovali.";

const sessionSwitch = document.querySelector(".session-switch");
if (sessionSwitch) {
	const activateSession = (name) => {
		sessionSwitch.querySelectorAll(".session-tab").forEach((tab) => {
			const active = tab.dataset.session === name;
			tab.classList.toggle("is-active", active);
			tab.setAttribute("aria-selected", String(active));
		});
		document.querySelectorAll(".session-view").forEach((view) => {
			const active = view.dataset.session === name;
			view.classList.toggle("is-mobile-active", active);
			if (view.tagName === "DETAILS" && active) view.open = true;
		});
	};
	sessionSwitch.querySelectorAll(".session-tab").forEach((tab) => tab.addEventListener("click", () => activateSession(tab.dataset.session)));
	activateSession("preteky");
}

const standingsSwitch = document.querySelector(".standings-switch");
if (standingsSwitch) {
	const activateStanding = (name) => {
		standingsSwitch.querySelectorAll(".standings-tab").forEach((tab) => {
			const active = tab.dataset.standing === name;
			tab.classList.toggle("is-active", active);
			tab.setAttribute("aria-selected", String(active));
		});
		document.querySelectorAll("#bodovanie .standing-view").forEach((view) => view.classList.toggle("is-mobile-active", view.dataset.standing === name));
	};
	standingsSwitch.querySelectorAll(".standings-tab").forEach((tab) => tab.addEventListener("click", () => activateStanding(tab.dataset.standing)));
	activateStanding("jazdci");
}

document.querySelectorAll(".team-grid article").forEach((team) => {
	if (team.querySelector("h3")?.textContent === "Haas") {
		team.querySelector("p").innerHTML = "Rafael Camara <span>CAM</span>";
	}
});
const teamsNote = document.querySelector("#timy .note");
if (teamsNote) teamsNote.textContent = "Zostavy podľa štartového poľa VC São Paula 2026.";

const resultsPage = document.querySelector("main.results-page");
if (resultsPage) {
	const kicker = resultsPage.querySelector(".kicker > span:first-child");
	if (kicker) kicker.textContent = "SÃO PAULO / 08.11.2026";
	const intro = resultsPage.querySelector(".page-intro > p");
	if (intro) intro.textContent = "Veľká cena São Paula · Interlagos. Kvalifikácia z 7. novembra a posledný šprint sezóny.";
	const raceTitle = resultsPage.querySelector("#race-title");
	if (raceTitle) raceTitle.textContent = "Veľká cena São Paula";
	const raceMeta = resultsPage.querySelector(".results-meta");
	if (raceMeta) raceMeta.innerHTML = "<strong>VEĽKÁ CENA SÃO PAULA 2026</strong><span>Autódromo José Carlos Pace · Interlagos · 8. 11. 2026</span>";
	const sessionHeading = resultsPage.querySelector(".ruled .section-head h2");
	if (sessionHeading) sessionHeading.textContent = "Kvalifikácia a posledný šprint";
	const note = resultsPage.querySelector(".note");
	if (note) note.innerHTML = 'Kvalifikačné časy: <a href="https://www.formula1.com/en/results/2026/races/1299/brazil/qualifying" target="_blank" rel="noopener noreferrer">oficiálna klasifikácia F1</a>. Šampionát: Jolpica (po 20. kole, doplnený o body zo São Paula). Aktualizované 9. 11. 2026.';
}