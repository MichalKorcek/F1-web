const raceResults = [
	{ position: 1, name: "Max Verstappen", code: "VER", team: "Red Bull Racing", color: "blue", gap: "1:27:39.624", points: 25 },
	{ position: 2, name: "Lando Norris", code: "NOR", team: "McLaren", color: "papaya", gap: "+0.639 s", points: 18 },
	{ position: 3, name: "Oscar Piastri", code: "PIA", team: "McLaren", color: "papaya", gap: "+1.529 s", points: 15 },
	{ position: 4, name: "Kimi Antonelli", code: "ANT", team: "Mercedes", color: "teal", gap: "+2.574 s", points: 12 },
	{ position: 5, name: "Pierre Gasly", code: "GAS", team: "Alpine", color: "pink", gap: "+2.927 s", points: 10 },
	{ position: 6, name: "Franco Colapinto", code: "COL", team: "Alpine", color: "pink", gap: "+7.955 s", points: 8 },
	{ position: 7, name: "Lewis Hamilton", code: "HAM", team: "Ferrari", color: "red", gap: "+12.795 s", points: 6 },
	{ position: 8, name: "Carlos Sainz", code: "SAI", team: "Williams", color: "blue2", gap: "+12.938 s", points: 4 },
	{ position: 9, name: "George Russell", code: "RUS", team: "Mercedes", color: "teal", gap: "+13.192 s", points: 2 },
	{ position: 10, name: "Charles Leclerc", code: "LEC", team: "Ferrari", color: "red", gap: "+17.554 s", points: 1 },
	{ position: 11, name: "Nico Hülkenberg", code: "HUL", team: "Audi", color: "orange", gap: "+22.720 s", points: 0 },
	{ position: 12, name: "Gabriel Bortoleto", code: "BOR", team: "Audi", color: "orange", gap: "+28.602 s", points: 0 },
	{ position: 13, name: "Oliver Bearman", code: "BEA", team: "Haas", color: "silver", gap: "+28.843 s", points: 0 },
	{ position: 14, name: "Liam Lawson", code: "LAW", team: "Racing Bulls", color: "periwinkle", gap: "+36.588 s", points: 0 },
	{ position: 15, name: "Isack Hadjar", code: "HAD", team: "Red Bull Racing", color: "blue", gap: "+46.488 s", points: 0 },
	{ position: 16, name: "Rafael Camara", code: "CAM", team: "Haas", color: "silver", gap: "+47.814 s", points: 0 },
	{ position: 17, name: "Lance Stroll", code: "STR", team: "Aston Martin", color: "green", gap: "+68.353 s", points: 0 },
	{ position: 18, name: "Valtteri Bottas", code: "BOT", team: "Cadillac", color: "sand", gap: "+71.673 s", points: 0 },
	{ position: 19, name: "Fernando Alonso", code: "ALO", team: "Aston Martin", color: "green", gap: "DNF", points: 0 },
	{ position: 20, name: "Arvid Lindblad", code: "LIN", team: "Racing Bulls", color: "periwinkle", gap: "DNF", points: 0 },
	{ position: 21, name: "Sergio Pérez", code: "PER", team: "Cadillac", color: "sand", gap: "DNF", points: 0 },
	{ position: 22, name: "Alexander Albon", code: "ALB", team: "Williams", color: "blue2", gap: "DNS", points: 0 }
];

const qualifyingRows = [
	["Kimi Antonelli", "Mercedes", "teal"], ["Max Verstappen", "Red Bull Racing", "blue"], ["George Russell", "Mercedes", "teal"],
	["Lando Norris", "McLaren", "papaya"], ["Isack Hadjar", "Red Bull Racing", "blue"], ["Arvid Lindblad", "Racing Bulls", "periwinkle"],
	["Oscar Piastri", "McLaren", "papaya"], ["Liam Lawson", "Racing Bulls", "periwinkle"], ["Pierre Gasly", "Alpine", "pink"],
	["Franco Colapinto", "Alpine", "pink"], ["Charles Leclerc", "Ferrari", "red"], ["Lewis Hamilton", "Ferrari", "red"],
	["Nico Hülkenberg", "Audi", "orange"], ["Carlos Sainz", "Williams", "blue2"], ["Gabriel Bortoleto", "Audi", "orange"],
	["Alexander Albon", "Williams", "blue2"], ["Rafael Camara", "Haas", "silver"], ["Sergio Pérez", "Cadillac", "sand"],
	["Fernando Alonso", "Aston Martin", "green"], ["Lance Stroll", "Aston Martin", "green"], ["Valtteri Bottas", "Cadillac", "sand"],
	["Oliver Bearman", "Haas", "silver"]
];
const qualifyingLapTimes = {
	q1: ["1:34.684", "1:35.264", "1:34.664", "1:35.109", "1:35.413", "1:35.456", "1:35.491", "1:35.489", "1:35.718", "1:35.930", "1:35.040", "1:35.743", "1:35.710", "1:35.588", "1:36.149", "1:35.856", "1:36.220", "1:37.383", "1:37.400", "1:37.550", "1:37.601", "1:48.005"],
	q2: ["1:35.086", "1:34.394", "1:34.617", "1:34.766", "1:35.064", "1:34.963", "1:34.763", "1:35.048", "1:34.559", "1:34.982", "1:35.197", "1:35.253", "1:35.460", "1:35.641", "1:35.993", "1:36.125", null, null, null, null, null, null],
	q3: ["1:33.893", "1:34.151", "1:34.224", "1:34.244", "1:34.592", "1:34.668", "1:34.899", "1:35.090", "1:35.105", "1:35.314"]
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
].map(([name, team, color], index) => ({ position: index + 1, name, team, color }));

const driverStandings = [
	["Kimi Antonelli", "Mercedes", "teal", 402], ["Max Verstappen", "Red Bull Racing", "blue", 304],
	["Lewis Hamilton", "Ferrari", "red", 267], ["George Russell", "Mercedes", "teal", 264],
	["Lando Norris", "McLaren", "papaya", 264], ["Charles Leclerc", "Ferrari", "red", 250],
	["Oscar Piastri", "McLaren", "papaya", 167], ["Isack Hadjar", "Red Bull Racing", "blue", 122],
	["Liam Lawson", "Racing Bulls", "periwinkle", 89], ["Pierre Gasly", "Alpine", "pink", 52],
	["Arvid Lindblad", "Racing Bulls", "periwinkle", 38], ["Franco Colapinto", "Alpine", "pink", 35],
	["Oliver Bearman", "Haas", "silver", 23], ["Gabriel Bortoleto", "Audi", "orange", 14],
	["Nico Hülkenberg", "Audi", "orange", 14], ["Carlos Sainz", "Williams", "blue2", 11],
	["Esteban Ocon", "Haas", "silver", 7], ["Fernando Alonso", "Aston Martin", "green", 7],
	["Alexander Albon", "Williams", "blue2", 5], ["Yuki Tsunoda", "Racing Bulls", "periwinkle", 1],
	["Ryo Hirakawa", "Haas", "silver", 1], ["Lance Stroll", "Aston Martin", "green", 0],
	["Valtteri Bottas", "Cadillac", "sand", 0], ["Sergio Pérez", "Cadillac", "sand", 0],
	["Rafael Camara", "Haas", "silver", 0]
].map(([name, team, color, points], index) => ({ position: index + 1, name, team, color, points }));

const constructorStandings = [
	["Mercedes", "teal", 666], ["Ferrari", "red", 517], ["Red Bull Racing", "blue", 440],
	["McLaren", "papaya", 431], ["Racing Bulls", "periwinkle", 114], ["Alpine", "pink", 87],
	["Haas", "silver", 31], ["Audi", "orange", 28], ["Williams", "blue2", 16],
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
		? "Kvalifikácia · Las Vegas <span>20.11.2026 · OFICIÁLNE ČASY</span>"
		: "Šprint <span>21.11.2026 · NA TOMTO VÍKENDE NEPREBEHOL</span>";
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

document.querySelectorAll(".demo").forEach((label) => { label.textContent = "AKTUALIZOVANÉ · 23.11.2026"; });
const home = document.querySelector("main.page:not(.results-page)");
if (home) {
	const season = home.querySelector(".kicker > span:first-child");
	if (season) season.textContent = "SEZÓNA 2026";
	const featureTitle = home.querySelector(".feature-heading h2");
	if (featureTitle) featureTitle.textContent = "TOP 5 · Veľká cena Las Vegas";
	const featureEyebrow = home.querySelector(".feature-heading .eyebrow");
	if (featureEyebrow) featureEyebrow.textContent = "FORMULA 1 HEINEKEN LAS VEGAS GRAND PRIX · 21.11.2026";
	const raceName = home.querySelector(".featured-results .race-meta strong");
	if (raceName) raceName.textContent = "VEĽKÁ CENA LAS VEGAS 2026";
	const circuit = home.querySelector(".featured-results .race-meta span");
	if (circuit) circuit.textContent = "Las Vegas Strip Circuit · Las Vegas · 50 kôl";
	const featureList = home.querySelector(".feature-list");
	if (featureList) featureList.innerHTML = raceResults.slice(0, 5).map(({ position, name, team, gap }) => `<li><b>${formattedPosition(position)}</b><span><strong>${name}</strong><small>${team}</small></span><time>${gap}</time></li>`).join("");
	const winner = home.querySelector(".winner-note");
	if (winner) winner.textContent = "VÍŤAZ PRETEKOV: MAX VERSTAPPEN";
	const haas = [...home.querySelectorAll(".team-grid article")].find((item) => item.querySelector("h3")?.textContent === "Haas");
	if (haas) haas.querySelector("p").innerHTML = "Rafael Camara <span>CAM</span>";
	const raceNote = home.querySelector("#vysledky .note");
	if (raceNote) raceNote.innerHTML = 'VC Las Vegas · 21. 11. 2026. Šprint sa na tomto víkende nekonal. Najrýchlejšie kolo: Liam Lawson · 1:35.591. <a href="https://www.formula1.com/en/results/2026/races/1300/las-vegas/race-result" target="_blank" rel="noopener noreferrer">oficiálna klasifikácia F1</a>.';
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
if (standingsNote) standingsNote.textContent = "Poradie po VC Las Vegas. Sezónny súčet zahŕňa aj jazdcov, ktorí počas roka zaskakovali.";

document.querySelectorAll(".next-race").forEach((card) => {
	const label = card.querySelector("p");
	const title = card.querySelector("h3");
	const date = card.querySelector("time");
	if (label) label.innerHTML = 'Ďalšia Veľká cena <span>KOLO 22</span>';
	if (title) title.textContent = "Veľká cena Kataru";
	if (date) {
		date.dateTime = "2026-11-29";
		date.textContent = "27.–29. november 2026";
	}
});

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
if (teamsNote) teamsNote.textContent = "Zostavy podľa štartového poľa VC Las Vegas 2026.";

const resultsPage = document.querySelector("main.results-page");
if (resultsPage) {
	const kicker = resultsPage.querySelector(".kicker > span:first-child");
	if (kicker) kicker.textContent = "LAS VEGAS / 21.11.2026";
	const intro = resultsPage.querySelector(".page-intro > p");
	if (intro) intro.textContent = "Veľká cena Las Vegas · Las Vegas Strip Circuit. Kvalifikácia z 20. novembra; šprint sa nekonal.";
	const raceTitle = resultsPage.querySelector("#race-title");
	if (raceTitle) raceTitle.textContent = "Veľká cena Las Vegas";
	const raceMeta = resultsPage.querySelector(".results-meta");
	if (raceMeta) raceMeta.innerHTML = "<strong>VEĽKÁ CENA LAS VEGAS 2026</strong><span>Las Vegas Strip Circuit · Las Vegas · 21. 11. 2026</span>";
	const sessionHeading = resultsPage.querySelector(".ruled .section-head h2");
	if (sessionHeading) sessionHeading.textContent = "Kvalifikácia";
	const note = resultsPage.querySelector(".note");
	if (note) note.innerHTML = 'Kvalifikačné časy: <a href="https://www.formula1.com/en/results/2026/races/1300/las-vegas/qualifying" target="_blank" rel="noopener noreferrer">oficiálna klasifikácia F1</a>. Šprint sa na tomto víkende nekonal. Aktualizované 23. 11. 2026.';
}