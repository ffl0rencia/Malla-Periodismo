const ramos = [
  { semestre: 1, id: "PER2301", nombre: "HABILIDADES DEL LENGUAJE I", prerequisitos: [] },
  { semestre: 1, id: "PER2302", nombre: "PENSAMIENTO CRÍTICO I", prerequisitos: [] },
  { semestre: 1, id: "PER2303", nombre: "NOTICIAS", prerequisitos: [] },
  { semestre: 1, id: "PER2304", nombre: "FOTOGRAFÍA PERIODÍSTICA", prerequisitos: [] },
  { semestre: 1, id: "PER2305", nombre: "INSTITUCIONES Y PROCESOS POLÍTICOS DE CHILE I", prerequisitos: [] },
  { semestre: 1, id: "PER2306", nombre: "HISTORIA DEL PERIODISMO", prerequisitos: [] },
  { semestre: 1, id: "CCLS221", nombre: "INTRODUCCIÓN AL PENSAMIENTO FILOSÓFICO", prerequisitos: [] },

  { semestre: 2, id: "PER2307", nombre: "HABILIDADES DEL LENGUAJE II", prerequisitos: ["PER2301"] },
  { semestre: 2, id: "PER2308", nombre: "PENSAMIENTO CRÍTICO II", prerequisitos: ["PER2302"] },
  { semestre: 2, id: "PER2309", nombre: "TALLER DE NOTICIAS", prerequisitos: ["PER2303"] },
  { semestre: 2, id: "PER2310", nombre: "HERRAMIENTAS PERIODÍSTICAS", prerequisitos: [] },
  { semestre: 2, id: "PER2311", nombre: "INSTITUCIONES Y PROCESOS POLÍTICOS DE CHILE II", prerequisitos: ["PER2305"] },
  { semestre: 2, id: "CCLS224", nombre: "IDENTIDAD PERSONAL: PSICOLOGÍA Y HUMANIDADES", prerequisitos: [] },
  { semestre: 2, id: "CCLI221", nombre: "INGLÉS I", prerequisitos: [] }
];

const estadoRamos = {};

function crearMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  const semestres = [...new Set(ramos.map(r => r.semestre))];
  semestres.forEach(sem => {
    const div = document.createElement("div");
    div.classList.add("semestre");

    const titulo = document.createElement("h3");
    titulo.textContent = `Semestre ${sem}`;
    div.appendChild(titulo);

    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      const btn = document.createElement("div");
      btn.textContent = `${ramo.id} - ${ramo.nombre}`;
      btn.classList.add("ramo");

      const prereqCumplido = ramo.prerequisitos.every(p => estadoRamos[p]);

      if (!prereqCumplido && ramo.prerequisitos.length > 0) {
        btn.classList.add("bloqueado");
      } else if (estadoRamos[ramo.id]) {
        btn.classList.add("aprobado");
      } else {
        btn.classList.add("no-aprobado");
      }

      btn.onclick = () => {
        if (btn.classList.contains("bloqueado")) return;
        estadoRamos[ramo.id] = !estadoRamos[ramo.id];
        crearMalla();
      };

      div.appendChild(btn);
    });

    container.appendChild(div);
  });
}

crearMalla();

