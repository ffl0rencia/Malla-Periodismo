// script.js

const ramos = [
  // 1er Semestre
  { semestre: 1, id: "PER2301", nombre: "HABILIDADES DEL LENGUAJE I", prerequisitos: [] },
  { semestre: 1, id: "PER2302", nombre: "PENSAMIENTO CRÍTICO I", prerequisitos: [] },
  { semestre: 1, id: "PER2303", nombre: "NOTICIAS", prerequisitos: [] },
  { semestre: 1, id: "PER2304", nombre: "FOTOGRAFÍA PERIODÍSTICA", prerequisitos: [] },
  { semestre: 1, id: "PER2305", nombre: "INSTITUCIONES Y PROCESOS POLÍTICOS DE CHILE I", prerequisitos: [] },
  { semestre: 1, id: "PER2306", nombre: "HISTORIA DEL PERIODISMO", prerequisitos: [] },
  { semestre: 1, id: "CCLS221", nombre: "INTRODUCCIÓN AL PENSAMIENTO FILOSÓFICO", prerequisitos: [] },

  // 2do Semestre
  { semestre: 2, id: "PER2307", nombre: "HABILIDADES DEL LENGUAJE II", prerequisitos: ["PER2301"] },
  { semestre: 2, id: "PER2308", nombre: "PENSAMIENTO CRÍTICO II", prerequisitos: ["PER2302"] },
  { semestre: 2, id: "PER2309", nombre: "TALLER DE NOTICIAS", prerequisitos: ["PER2303"] },
  { semestre: 2, id: "PER2310", nombre: "HERRAMIENTAS PERIODÍSTICAS", prerequisitos: [] },
  { semestre: 2, id: "PER2311", nombre: "INSTITUCIONES Y PROCESOS POLÍTICOS DE CHILE II", prerequisitos: ["PER2305"] },
  { semestre: 2, id: "CCLS224", nombre: "IDENTIDAD PERSONAL: PSICOLOGÍA Y HUMANIDADES", prerequisitos: [] },
  { semestre: 2, id: "CCLI221", nombre: "INGLÉS I", prerequisitos: [] },

  // 3er Semestre
  { semestre: 3, id: "PER2312", nombre: "LOCUCIÓN Y EXPRESIÓN ORAL", prerequisitos: [] },
  { semestre: 3, id: "PER2313", nombre: "REDACCIÓN PERIODÍSTICA", prerequisitos: ["PER2309"] },
  { semestre: 3, id: "PER2314", nombre: "PERIODISMO AUDIOVISUAL", prerequisitos: ["PER2309"] },
  { semestre: 3, id: "PER2315", nombre: "PERIODISMO DIGITAL", prerequisitos: ["PER2310"] },
  { semestre: 3, id: "PER2316", nombre: "ECONOMÍA CHILENA", prerequisitos: [] },
  { semestre: 3, id: "CCLS222", nombre: "ANTROPOLOGÍA FILOSÓFICA", prerequisitos: [] },
  { semestre: 3, id: "CCLI222", nombre: "INGLÉS II", prerequisitos: ["CCLI221"] },

  // 4to Semestre
  { semestre: 4, id: "PER2317", nombre: "PERIODISMO RADIAL", prerequisitos: ["PER2309"] },
  { semestre: 4, id: "PER2318", nombre: "TALLER DE PERIODISMO AUDIOVISUAL", prerequisitos: ["PER2314"] },
  { semestre: 4, id: "PER2319", nombre: "TALLER DE PERIODISMO DIGITAL", prerequisitos: ["PER2315"] },
  { semestre: 4, id: "PER2320", nombre: "ECONOMÍA MUNDIAL", prerequisitos: ["PER2316"] },
  { semestre: 4, id: "PER2321", nombre: "TEORÍA DE LA COMUNICACIÓN", prerequisitos: [] },
  { semestre: 4, id: "PER2322", nombre: "LEGISLACIÓN PERIODÍSTICA", prerequisitos: [] },
  { semestre: 4, id: "CCLS223", nombre: "ÉTICA GENERAL", prerequisitos: [] },
  { semestre: 4, id: "CCLI223", nombre: "INGLÉS III", prerequisitos: ["CCLI222"] },

  // 5to Semestre
  { semestre: 5, id: "PER2323", nombre: "TALLER DE PERIODISMO RADIAL", prerequisitos: ["PER2317"] },
  { semestre: 5, id: "PER2324", nombre: "REPORTAJE AUDIOVISUAL", prerequisitos: ["PER2318"] },
  { semestre: 5, id: "PER2325", nombre: "PERIODISMO DE DATOS", prerequisitos: ["PER2319"] },
  { semestre: 5, id: "PER2326", nombre: "CULTURA Y CIENCIA", prerequisitos: [] },
  { semestre: 5, id: "PER2327", nombre: "OPINIÓN PÚBLICA", prerequisitos: [] },
  { semestre: 5, id: "PER2328", nombre: "ÉTICA Y DEONTOLOGÍA PERIODÍSTICA", prerequisitos: [] },
  { semestre: 5, id: "PER2329", nombre: "INTRODUCCIÓN A LA COMUNICACIÓN ESTRATÉGICA", prerequisitos: [] },
  { semestre: 5, id: "CCLS225", nombre: "APRECIACIÓN DE LOS LENGUAJES ARTÍSTICOS", prerequisitos: [] },

  // 6to Semestre
  { semestre: 6, id: "PER2330", nombre: "REPORTAJES", prerequisitos: ["PER2319"] },
  { semestre: 6, id: "PER2331", nombre: "TALLER DE INNOVACIÓN AUDIOVISUAL", prerequisitos: ["PER2318"] },
  { semestre: 6, id: "PER2332", nombre: "NARRATIVA TRANSMEDIA", prerequisitos: ["PER2319"] },
  { semestre: 6, id: "PER2333", nombre: "MUNDO CONTEMPORÁNEO: ESTADOS UNIDOS Y LATINOAMÉRICA", prerequisitos: [] },
  { semestre: 6, id: "PER2334", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN", prerequisitos: [] },
  { semestre: 6, id: "PER2335", nombre: "PLAN DE COMUNICACIÓN", prerequisitos: ["PER2329"] },
  { semestre: 6, id: "ESPEC1", nombre: "ESPECIALIZACIÓN I", prerequisitos: [] },
  { semestre: 6, id: "CCLS226", nombre: "PERSONA Y TRASCENDENCIA", prerequisitos: [] },

  // 7mo Semestre
  { semestre: 7, id: "PER2336", nombre: "TEXTOS NARRATIVOS", prerequisitos: ["PER2330"] },
  { semestre: 7, id: "PER2337", nombre: "EMPRENDIMIENTOS PERIODÍSTICOS", prerequisitos: ["PER2319"] },
  { semestre: 7, id: "PER2338", nombre: "PRE PRÁCTICA I", prerequisitos: ["PER2323", "PER2324", "PER2325", "PER2326"] },
  { semestre: 7, id: "PER2339", nombre: "MUNDO CONTEMPORÁNEO: EUROPA Y ÁFRICA", prerequisitos: [] },
  { semestre: 7, id: "PER2340", nombre: "SEMINARIO DE INVESTIGACIÓN I", prerequisitos: ["PER2334"] },
  { semestre: 7, id: "ESPEC2", nombre: "ESPECIALIZACIÓN II", prerequisitos: ["PER2329"] },

  // 8vo Semestre
  { semestre: 8, id: "PER2341", nombre: "TALLER DE PERIODISMO MÓVIL", prerequisitos: ["PER2336", "PER2337"] },
  { semestre: 8, id: "PER2342", nombre: "PRE PROYECTO", prerequisitos: ["PER2336", "PER2337"] },
  { semestre: 8, id: "PER2343", nombre: "PRE PRÁCTICA II", prerequisitos: ["PER2338"] },
  { semestre: 8, id: "PER2344", nombre: "MUNDO CONTEMPORÁNEO: ASIA Y MEDIO ORIENTE", prerequisitos: [] },
  { semestre: 8, id: "PER2345", nombre: "SEMINARIO DE INVESTIGACIÓN II", prerequisitos: ["PER2340"] },
  { semestre: 8, id: "ESPEC3", nombre: "ESPECIALIZACIÓN III", prerequisitos: ["PER2329"] },
  { semestre: 8, id: "ESPEC4", nombre: "ESPECIALIZACIÓN IV", prerequisitos: ["PER2329"] },

  // 9no Semestre
  { semestre: 9, id: "PER2346", nombre: "PROYECTO DE TÍTULO", prerequisitos: ["PER2342"] },
  { semestre: 9, id: "PER2347", nombre: "PRÁCTICA PROFESIONAL", prerequisitos: [] }
];
// script.js

const ramos = [
  // (Lista completa de ramos del 1º al 9º semestre, ya agregados anteriormente...)
  // Esta parte no cambia
];

const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function crearMalla() {
  const container = document.getElementById("grid-malla");
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
        localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
        crearMalla();
      };

      div.appendChild(btn);
    });

    container.appendChild(div);
  });
}

function reiniciarMalla() {
  if (confirm("¿Estás segura que quieres reiniciar toda la malla?")) {
    localStorage.removeItem("estadoRamos");
    location.reload();
  }
}

crearMalla();

