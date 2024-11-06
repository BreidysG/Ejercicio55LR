// script.js
const palabrasIzquierda = [
    "Amabilidad", "Bienaventuranza", "Compasión", "Inconmensurable", "Irreemplazable", "Extraordinario", "Inexplicable", "Responsabilidad", "Impresionante", "Maravillosamente", "Consideración", "Establecimiento", "Interminable", "Desinteresado", "Comunicativo", "Imprescindible", "Conmemorativo", "Agradecimiento", "Independencia", "Intercultural", "Irrepetible", "Comprensiblemente", "Determinación", "Humanitario", "Interdisciplinario", "Reconocimiento", "Fenomenología", "Colaboración", "Desarrollador", "Prolongadamente", "Inigualable", "Inimaginable", "Satisfactoriamente", "Impresionabilidad", "Preocupadamente", "Espectacularidad", "Efectivamente", "Reconstrucción", "Constitucional", "Inestabilidad", "Previsiblemente", "Revolucionario", "Desenfadadamente", "Intercontinental", "Desapaciblemente", "Reproductividad", "Inalterablemente", "Insuperablemente", "Excepcionalidad", "Perceptiblemente", "Admirablemente", "Administración", "Agradecidamente", "Anticonvulsivo", "Antropocentrismo", "Aprehensiblemente", "Armoniosamente", "Autosuficiencia", "Autotransporte", "Benefactoramente", "Beneficiosamente", "Biodegradabilidad", "Capacidad", "Caracterización", "Categorización", "Cibernéticamente", "Clasificación", "Comercialización", "Comunicacional", "Comunicativamente", "Comprometedor", "Comprensiblemente", "Computacional", "Condecoración", "Conectividad", "Configuración", "Conmemorativo", "Consideración", "Constitucional", "Contaminación", "Contemporáneamente", "Contradictoriamente", "Contraproducente", "Convencionalismo", "Convergencia", "Cooperativamente", "Cosmopolita", "Criptografía", "Criticablemente", "Cualificación", "Curiosidad", "Decepcionante", "Definitivamente", "Degradabilidad", "Deliberadamente", "Democratización", "Desagradablemente", "Desalentadoramente", "Desalentamiento", "Desarticulación", "Desarrolladamente", "Descentralización", "Descompensación", "Desconfiguración", "Desconsiderado", "Desconsoladamente", "Desconstrucción", "Descontentamente", "Descontroladamente", "Desgarradoramente", "Deshumanización", "Desinteresadamente", "Desorganización", "Desproporcional", "Desproporcionado", "Desventajosamente", "Desvinculación", "Desvirtuación", "Desorientación", "Desnaturalización", "Desvinculadamente", "Devolutivamente", "Desplazamiento", "Despreciablemente", "Desvanecimiento", "Desventajosamente", "Devolutivamente", "Dignificación", "Discontinuamente", "Disfuncionalidad", "Disociación", "Disponibilidad", "Distinguidamente", "Distribuiblemente", "Diversificación", "Documentadamente", "Domiciliariamente", "Dramáticamente", "Eclesiásticamente", "Efectividad", "Electroacústico", "Electrocardiograma", "Electrodoméstico", "Electromagnetismo", "Elucidativamente", "Embellecedoramente", "Emotividad", "Emprendimiento", "Enajenadamente", "Enfáticamente", "Engrandecimiento", "Ensambladoramente", "Entendimiento", "Equidistantemente", "Estadísticamente", "Estereotípicamente", "Estructuración", "Eventualmente", "Evidentemente", "Exasperantemente", "Excesivamente", "Exclusivamente", "Explicablemente", "Experimentalmente", "Extraordinariamente", "Falsificabilidad", "Filantropía", "Flexibilización", "Fraternalmente", "Funcionalidad", "Fundamentalismo", "Generalización", "Geopolíticamente", "Gradualmente", "Gravitacional", "Habitabilidad", "Habilitación", "Harmoniosamente", "Heterogeneidad", "Hidroeléctrico", "Hipótesis", "Hospitalariamente", "Identificación", "Ilustración", "Imaginativamente", "Impecabilidad", "Imperfectamente", "Implícitamente", "Impredictibilidad", "Improbabilidad", "Impunemente", "Inalcanzablemente", "Inalterabilidad", "Inalteradamente", "Inamoviblemente", "Inatacablemente", "Incalculabilidad", "Incapacidad", "Incognoscibilidad", "Incomunicadamente", "Incondicionalidad", "Indescriptiblemente", "Independientemente", "Indestructibilidad", "Indisociabilidad", "Indiscriminación", "Indisolublemente", "Ineficazmente", "Inequívocamente", "Inescrupulosamente", "Ineficazmente", "Inequívocamente", "Infinitamente", "Inmensurabilidad", "Inmutabilidad", "Innavegabilidad", "Inquebrantablemente", "Insuficiencia", "Insatisfacción", "Insospechadamente", "Interdisciplinariamente", "Intercontinentalmente", "Intermitentemente", "Internacionalidad", "Intrascendencia", "Introspectivamente", "Invalorablemente", "Investigación", "Irrefutablemente", "Irreflexivamente", "Irritabilidad", "Irreconciliablemente", "Irremplazablemente", "Irracionalidad", "Jerarquización", "Legitimación", "Liberalización", "Magnificencia", "Materialización", "Mecanización", "Mediocridad", "Minuciosamente", "Misericordiosamente", "Multiplicación", "Multiplicativamente", "Mutuamente", "Necesariamente", "Objetivamente", "Observacionalmente", "Obstaculización", "Obtenible", "Ocultación", "Ofensivamente", "Ordinariamente", "Organización", "Paralelamente", "Particularmente"
];
const palabrasDerecha = [
    "lectura", "visual", "concepto", "rápida", "entrenamiento",
    "habilidad", "periférica", "palabras", "procesamiento", "velocidad","Internacionalización", "Sobreestimulación", "Incomprensiblemente", "Irrevocablemente", "Desacostumbrado", "Reconfiguración", "Característicamente", "Impresionabilidad", "Desafortunadamente", "Desaparecimiento", "Electrodoméstico", "Refrigeración", "Desproporcionado", "Preocupacional", "Responsablemente", "Sobrellevar", "Reconstrucción", "Posicionamiento", "Considerablemente", "Electroquímica", "Desarrolladamente", "Conmemoración", "Constitucionalidad", "Impresionantemente", "Históricamente", "Irrecuperablemente", "Desorganización", "Recuperabilidad", "Afortunadamente", "Desenmascarar", "Reproporcionado", "Desestabilización", "Incalculablemente", "Recalentamiento", "Desalojadamente", "Sobreproducción", "Interdependencia", "Despersonalización", "Administrativamente", "Desfavorablemente", "Inapreciablemente", "Incuestionablemente", "Desconsoladamente", "Apreciablemente", "Reconocimiento", "Desentendimiento", "Preestablecimiento", "Anticonceptivo", "Indiscutiblemente", "Desafortunadamente", "Abominablemente", "Abolicionismo", "Acontecimientos", "Actualización", "Afectuosamente", "Agigantadamente", "Aglomeración", "Alucinantemente", "Amortiguación", "Ancestralidad", "Antecedentemente", "Anticonstitucional", "Antropológicamente", "Antropomorfismo", "Aparentemente", "Aplicabilidad", "Apreciablemente", "Aproximadamente", "Arquitectónicamente", "Articuladamente", "Aspectualmente", "Asimilabilidad", "Asombrosamente", "Astonishment", "Atmosféricamente", "Atónitamente", "Automáticamente", "Bilingüismo", "Burocráticamente", "Campeonísimo", "Caracterización", "Categorizadamente", "Clasificablemente", "Climatológicamente", "Coleccionabilidad", "Colisionabilidad", "Combinatoriamente", "Compasibilidad", "Complementariamente", "Complicadamente", "Compositivamente", "Computacionalmente", "Concretabilidad", "Concurrentemente", "Condicionalidad", "Confiabilidad", "Consecutivamente", "Consolación", "Constructivamente", "Contemporáneamente", "Continuadamente", "Contributivamente", "Convencionalmente", "Conversacionalmente", "Cooperabilidad", "Coordinadamente", "Correlacionadamente", "Corresponsabilidad", "Cotidianamente", "Definición", "Deliberadamente", "Democráticamente", "Desapercibidamente", "Desarrollabilidad", "Desarrollísticamente", "Descentralizadamente", "Desconcertadamente", "Desconsideradamente", "Descontinuadamente", "Desigualablemente", "Desintegración", "Desmesuradamente", "Desordenadamente", "Despreocupadamente", "Destacadamente", "Determinadamente", "Detestablemente", "Difícilmente", "Discapacitación", "Discerniblemente", "Discriminatoriamente", "Disfrutablemente", "Disminución", "Disponiblemente", "Disposicionalmente", "Divinamente", "Dramáticamente", "Económicamente", "Educativamente", "Elementalmente", "Embellecimiento", "Empáticamente", "Enérgicamente", "Enriquecedoramente", "Equilibradamente", "Eruditamente", "Estimulantemente", "Estructuralmente", "Estúpidamente", "Eventualmente", "Exageradamente", "Excepcionalmente", "Experimentalmente", "Explícitamente", "Extraordinariamente", "Facilibilidad", "Fascinantemente", "Fenomenológicamente", "Filosóficamente", "Finalizadamente", "Fortalecedoramente", "Fraccionabilidad", "Fundacionalmente", "Fundamentabilidad", "Generacionalmente", "Geográficamente", "Globalizadamente", "Gradualidad", "Gravitacionalmente", "Habitualmente", "Heredablemente", "Hilarantemente", "Historificablemente", "Honorablemente", "Humanísticamente", "Idealización", "Identificación", "Imaginativamente", "Impresionantemente", "Improductivamente", "Inaccesibilidad", "Inalcanzablemente", "Inalterablemente", "Inamovibilidad", "Inaplazablemente", "Inapropiadamente", "Incertidumbre", "Incomunicadamente", "Incongruencia", "Independientemente", "Indescriptiblemente", "Indestructiblemente", "Indiscriminadamente", "Ineficientemente", "Inescrupulosamente", "Inestabilidad", "Inexplicablemente", "Infinitesimalmente", "Infinitivamente", "Inflamablemente", "Inmaculadamente", "Inmensurabilidad", "Innovativamente", "Innumerabilidad", "Inquebrantablemente", "Insatisfactoriamente", "Insuficiencia", "Intransferiblemente", "Interdependencia", "Interdisciplinario", "Interiorización", "Internacionalmente", "Intolerantemente", "Intrínsecamente", "Investigativo", "Irrefrenablemente", "Irremediablemente", "Irrevocabilidad", "Jurídicamente", "Laboriosamente", "Lamentablemente", "Legítimamente", "Libidinosamente", "Lúdicamente", "Maliciosamente", "Malinterpretación", "Maravillosamente", "Matemáticamente", "Materialización", "Mecanizadamente", "Mediáticamente", "Meteorológicamente", "Minuciosamente", "Misceláneamente", "Modernización", "Moleculabilidad", "Multiplicabilidad", "Mutuabilidad", "Naturalización", "Neutralización", "Obligatoriamente", "Observacionalmente", "Operacionalmente", "Organizacionalmente", "Oscurantismo", "Paradójicamente", "Perfeccionadamente", "Perpendicularmente", "Posmodernidad", "Predictibilidad", "Presentablemente", "Prestigiosamente", "Probabilísticamente", "Progresivamente", "Proporcionalmente", "Provocativamente", "Psicológicamente", "Psicosociología", "Purificabilidad"
];
let intervalId;
let timerId;
let tiempoRestante = 180; // 3 minutos en segundos

document.getElementById('start-btn').addEventListener('click', iniciarEjercicio);

function iniciarEjercicio() {
    const velocidad = parseInt(document.getElementById('speed').value);
    document.getElementById("instruction").classList.remove("hidden");
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("word-container").classList.remove("hidden");
    document.getElementById("settings").classList.add("hidden");
    document.getElementById("p1").classList.add("hidden");
    document.getElementById("h1").classList.add("hidden");
    document.getElementById("instruction").classList.add("hidden");

    
    iniciarTemporizador();
    mostrarPalabrasAleatorias();

    intervalId = setInterval(() => {
        mostrarPalabrasAleatorias();
    }, velocidad);
}

function mostrarPalabrasAleatorias() {
    const palabraIzquierda = palabrasIzquierda[Math.floor(Math.random() * palabrasIzquierda.length)];
    const palabraDerecha = palabrasDerecha[Math.floor(Math.random() * palabrasDerecha.length)];

    document.getElementById("left-word").textContent = palabraIzquierda;
    document.getElementById("right-word").textContent = palabraDerecha;
}

function iniciarTemporizador() {
    actualizarTiempoRestante();

    timerId = setInterval(() => {
        tiempoRestante--;
        actualizarTiempoRestante();

        if (tiempoRestante <= 0) {
            finalizarEjercicio();
        }
    }, 1000);
}

function actualizarTiempoRestante() {
    const minutos = Math.floor(tiempoRestante / 60).toString().padStart(2, '0');
    const segundos = (tiempoRestante % 60).toString().padStart(2, '0');
    document.getElementById("time-remaining").textContent = `${minutos}:${segundos}`;
}

function finalizarEjercicio() {
    clearInterval(intervalId);
    clearInterval(timerId);
    document.getElementById("word-container").classList.add("hidden");
    alert("¡El ejercicio ha finalizado!");
}
