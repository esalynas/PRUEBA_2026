/* ===================================================
   RESPUESTAS TEÓRICAS Y CONFIGURACIÓN DE LA PRUEBA
   =================================================== */

const respuestasData = {
    caso1: {
        avatar: "avatar1.PNG",
        badge: "PREGUNTA 1 | LEVANTAMIENTO DE REQUERIMIENTOS REGISTRALES",
        instrucciones: "Completa la secuencia de 3 selecciones y finalmente califica la Complejidad del requerimiento (Baja, Media o Alta) para generar la Historia de Usuario.",
        teoria: `
            <h3 style="color:#fff; margin-bottom:10px; font-size:18px;">1. ¿Cómo abordaría el levantamiento de requerimientos con los usuarios del área de registros y el equipo de TI para asegurar que la solución responda a las necesidades de negocio y sea técnicamente viable?</h3>
            <p>Para mí, lo clave es construir un puente real entre la operación diaria y el equipo de desarrollo. Comenzaría por <b>escuchar y entender a fondo el día a día</b> del equipo registral. Me sentaría con ellos a revisar cómo realizan sus tareas en la práctica, dónde se les forman los embotellamientos, qué excepciones se les presentan con frecuencia y qué reglas siguen intuitivamente pero que no están escritas en ningún manual.</p><br>
            <p>Con esa información clara, pasaría a organizar y redactar los requerimientos de forma sencilla y estructurada:</p>
            <ul style="margin-left:20px; margin-top:6px; margin-bottom:10px;">
                <li><b>Delimitar claramente el alcance:</b> Tener muy claro qué entra en esta fase y qué se deja para después.</li>
                <li><b>Necesidades funcionales:</b> Cómo interactúa el usuario con la plataforma, qué pasos realiza y qué criterios determinan que una tarea está bien hecha.</li>
                <li><b>Aspectos clave de operación:</b> Garantizar la seguridad de la información, la velocidad del sistema, la disponibilidad y el rastreo de cada acción.</li>
                <li><b>Reglas del negocio:</b> Las normas normativas y procedimentales que el sistema debe validar obligatoriamente.</li>
            </ul>
            <p>Luego organizaría sesiones de <b>trabajo colaborativo con los equipos de tecnología</b> para revisar qué tan viable es lo propuesto, cómo se va a conectar con los sistemas que tenemos y de qué forma se van a almacenar los datos. Para cerrar, haría una revisión final con los líderes del negocio para asegurarnos de que estamos alineados en expectativas antes lanzar mejoramientos.</p>
        `,
        buildSim: function() {
            return `
                <div class="vertical-step-group">
                    <div class="step-box" id="stBox1">
                        <label style="font-size:11px; color:var(--accent); font-weight:700; display:block;">1. SELECCIONA EL ROL REGISTRAL:</label>
                        <select id="selRol" class="sim-select" onchange="advanceStep1(1)">
                            <option value="" disabled selected>-- Toca para seleccionar --</option>
                            <option value="Abogado">Abogado</option>
                            <option value="Auxiliar de Taquilla">Auxiliar de Taquilla</option>
                            <option value="Auditor de Cámara">Auditor de Cámara</option>
                        </select>
                    </div>

                    <div class="step-box hidden-step" id="stBox2">
                        <label style="font-size:11px; color:var(--accent); font-weight:700; display:block;">2. ACCIÓN OPERATIVA REQUERIDA:</label>
                        <select id="selAccion" class="sim-select" onchange="advanceStep1(2)">
                            <option value="" disabled selected>-- Toca para seleccionar --</option>
                            <option value="Validar código de barras notarial">Validar código de barras notarial</option>
                            <option value="Verificar homonimia mercantil">Verificar homonimia mercantil</option>
                            <option value="Revisar pago de impuesto de registro">Revisar pago de impuesto de registro</option>
                        </select>
                    </div>

                    <div class="step-box hidden-step" id="stBox3">
                        <label style="font-size:11px; color:var(--accent); font-weight:700; display:block;">3. CRITERIO DE APROBACIÓN AUTOMÁTICA:</label>
                        <select id="selCrit" class="sim-select" onchange="advanceStep1(3)">
                            <option value="" disabled selected>-- Toca para seleccionar --</option>
                            <option value="Certificado Notarial Activo y Vigente">Certificado Notarial Activo y Vigente</option>
                            <option value="Coincidencia del nombre">Coincidencia del nombre</option>
                            <option value="Confirmación inmediata de pasarela de pago">Confirmación inmediata de pasarela de pago</option>
                        </select>
                    </div>

                    <div class="step-box hidden-step" id="stBoxComplexity">
                        <label style="font-size:11px; color:var(--accent); font-weight:700; display:block;">4. NIVEL DE COMPLEJIDAD TÉCNICA:</label>
                        <div class="complexity-group">
                            <button class="btn-complexity low" onclick="selectComplexity('Baja (Sprint 1)')">🟢 Baja</button>
                            <button class="btn-complexity mid" onclick="selectComplexity('Media (Sprint 2)')">🟡 Media</button>
                            <button class="btn-complexity high" onclick="selectComplexity('Alta (Sprint 3)')">🔴 Alta</button>
                        </div>
                    </div>
                </div>
            `;
        },
        init: function() {}
    },

    caso2: {
        avatar: "avatar2.PNG",
        badge: "PREGUNTA 2 | EVALUACIÓN DE PROVEEDOR TECNOLÓGICO",
        instrucciones: "Selecciona el proveedor A o B tocando su pestaña, califica los niveles de Seguridad y Precisión IA deseados, y presiona 'Validar Selección' para calificar.",
        teoria: `
            <h3 style="color:#fff; margin-bottom:10px; font-size:18px;">2. Si la solución implica la contratación de un proveedor tecnológico con componentes de Inteligencia Artificial, ¿qué aspectos clave evaluaría para tomar la decisión?</h3>
            <p>Cuando se evalúa tecnología con inteligencia artificial para una entidad pública o registral, miro la decisión con bastante responsabilidad con base en factores clave como:</p>
            <ul style="margin-left:20px; margin-top:8px; margin-bottom:10px;">
                <li><b>Experiencia del proveedor:</b> Que el proveedor ya haya resuelto problemas similares en entornos regulados, mostrando casos reales y no solo promesas de ventas.</li>
                <li><b>Precisión del modelo de IA que usan:</b> Qué tan bien lee y procesa los documentos, cuál es su margen de error, y muy especialmente, que mantenga una supervisión humana para corregir.</li>
                <li><b>Seguridad de la información y normatividad:</b> Cumplimiento estricto con las leyes de de datos personales y certificaciones.</li>
                <li><b>Facilidad de integración:</b> Que su plataforma pueda conectarse de forma limpia y estándar con nuestros sistemas actuales, sin obligarnos a rehacer toda la infraestructura existente.</li>
                <li><b>Acompañamiento, soporte y costos transparentes:</b> Claridad absoluta en lo que costará el proyecto a largo plazo, garantías de tiempos de respuesta ante fallas y capacidad de escalar si el volumen de trámites crece.</li>
            </ul>
            <p>Para tomar una decisión objetiva, organizaría una <b>prueba piloto con casos y documentos reales</b> para medir a los proveedores con indicadores idénticos.</p>
        `,
        buildSim: function() {
            return `
                <div class="prov-selector-btns">
                    <button class="prov-btn active" id="btnProvA" onclick="selectProv('Proveedor A')">Proveedor A</button>
                    <button class="prov-btn" id="btnProvB" onclick="selectProv('Proveedor B')">Proveedor B</button>
                </div>

                <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:14px;">
                    <div>
                        <span style="font-size:11px; color:var(--accent);">Seguridad y Regulación:</span>
                        <select id="evalSeg" class="sim-select" onchange="saveProvData()">
                            <option value="95">Excelente (95%)</option>
                            <option value="80">Bueno (80%)</option>
                            <option value="60">Aceptable (60%)</option>
                        </select>
                    </div>
                    <div>
                        <span style="font-size:11px; color:var(--accent);">Precisión de Lectura IA:</span>
                        <select id="evalIa" class="sim-select" onchange="saveProvData()">
                            <option value="90">Excelente (90%)</option>
                            <option value="75">Bueno (75%)</option>
                            <option value="50">Bajo (50%)</option>
                        </select>
                    </div>
                </div>

                <button class="sim-btn" onclick="evaluarProveedorActual()">🎯 Validar Selección de Proveedor</button>

                <table class="sim-table" style="margin-top:14px;">
                    <thead>
                        <tr>
                            <th>Proveedor</th>
                            <th>Seguridad</th>
                            <th>Precisión</th>
                            <th>Puntaje</th>
                        </tr>
                    </thead>
                    <tbody id="provTableBody"></tbody>
                </table>
            `;
        },
        init: function() { loadProvFields(); }
    },

    caso3: {
        avatar: "avatar3.PNG",
        badge: "PREGUNTA 3 | MEJORA DE PROCESOS Y REDUCCIÓN DE TIEMPOS",
        instrucciones: "Los 3 procesos del radar titilan indicando retrasos. Toca cada proceso individualmente y escoge la opción tecnológica adecuada para reducir el tiempo de respuesta a 1 día.",
        teoria: `
            <h3 style="color:#fff; margin-bottom:10px; font-size:18px;">3. Si el objetivo es optimizar un proceso registral para reducir el tiempo de respuesta de 3 días a 1 día, ¿qué acciones realizaría para lograrlo?</h3>
            <p>Para lograr una reducción tan significativa sin descuidar el rigor legal, abordaría la solución desde cuatro frentes de trabajo:</p>
            <ul style="margin-left:20px; margin-top:8px; margin-bottom:10px;">
                <li><b>Entender el estado actual:</b> Analizaría paso a paso la ruta que sigue un trámite para detectar en dónde se detiene la información, qué revisiones se duplican y qué pasos manuales realmente no aportan valor.</li>
                <li><b>Aprovechar la tecnología:</b> Implementaría lectura automática de documentos para extraer datos clave, validaciones en línea de requisitos para evitar revisiones manuales repetitivas y asignación automática del trabajo al funcionario disponible.</li>
                <li><b>Medir el desempeño en tiempo real:</b> Montaría un tablero simple de control para seguir los tiempos que toma cada fase, identificar a tiempo dónde hay represamientos y medir la tasa de devoluciones.</li>
                <li><b>Acompañar a las personas:</b> Ajustaría la distribución de trabajo del equipo y capacitaría a los funcionarios para apoyarse en las nuevas herramientas tecnológicas sin perder nunca la precisión en la revisión jurídica.</li>
            </ul>
        `,
        buildSim: function() {
            return `
                <div class="radar-container">
                    <svg class="radar-svg" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(56,189,248,0.15)" stroke-width="1.5" />
                        <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(56,189,248,0.2)" stroke-width="1.5" stroke-dasharray="4 4" />
                        
                        <line x1="100" y1="100" x2="100" y2="25" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 5">
                            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                        </line>
                        <line x1="100" y1="100" x2="165" y2="140" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 5">
                            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                        </line>
                        <line x1="100" y1="100" x2="35" y2="140" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 5">
                            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                        </line>
                    </svg>

                    <div class="radar-node" id="rNode1" style="top:5px; left:calc(50% - 36px);" onclick="openRadarSubModal('n1')">
                        <span class="radar-node-icon">🏢</span>
                        <span class="radar-node-title">1. Escáner</span>
                    </div>

                    <div class="radar-node" id="rNode2" style="bottom:20px; right:10px;" onclick="openRadarSubModal('n2')">
                        <span class="radar-node-icon">👨‍⚖️</span>
                        <span class="radar-node-title">2. Abogados</span>
                    </div>

                    <div class="radar-node" id="rNode3" style="bottom:20px; left:10px;" onclick="openRadarSubModal('n3')">
                        <span class="radar-node-icon">📋</span>
                        <span class="radar-node-title">3. Registro</span>
                    </div>
                </div>

                <div style="background:#020617; padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,.1);">
                    <div style="display:flex; justify-content:space-between; font-size:11.5px; margin-bottom:4px;">
                        <span>TIEMPO TOTAL DEL TRÁMITE:</span>
                        <b id="c3_TimeText" style="color:var(--danger)">3 DÍAS LABORABLES</b>
                    </div>
                    <div style="font-size:11.5px; color:var(--muted);" id="c3_Desc">
                        ⚠️ <b>Estado Inicial:</b> Múltiples reprocesos manuales activos en el flujo radar.
                    </div>
                </div>
            `;
        },
        init: function() { resetRadarC3(); }
    },

    caso4: {
        avatar: "avatar4.PNG",
        badge: "PREGUNTA 4 | GESTIÓN DEL CAMBIO Y ADOPCIÓN",
        instrucciones: "Para enviar una duda operativa presiona el botón cuadrado de voz 🎙️ para dictar, o presiona 'Elegir opción' 📋 para desplegar la lista de consultas.",
        teoria: `
            <h3 style="color:#fff; margin-bottom:10px; font-size:18px;">4. ¿Cómo estructuraría un plan de trabajo para acompañar a los funcionarios en la adopción del cambio y reducir la resistencia?</h3>
            <p>La resistencia al cambio es totalmente normal cuando se introducen nuevas herramientas. Para abordarla con empatía y efectividad, trabajaría un plan enfocado en las personas:</p>
            <ul style="margin-left:20px; margin-top:8px; margin-bottom:10px;">
                <li><b>Comunicación siempre:</b> Explicar desde el primer día por qué se hace la actualización, resaltando cómo la nueva solución facilitará su trabajo diario y aclarando que la herramienta busca apoyarlos, no reemplazar su criterio técnico.</li>
                <li><b>Capacitaciones:</b> Diseñar talleres breves con casos del día a día, ofreciendo guías visuales y sencillas de consulta rápida.</li>
                <li><b>Líderes del cambio:</b> Identificar a compañeros dentro de la misma operación que tengan buena disposición hacia la tecnología para formarlos primero y que nos ayuden a resolver dudas a otros.</li>
                <li><b>Acompañamiento y escucha activa:</b> Mantener un canal directo para resolver dudas rápidamente y recoger sugerencias de mejora hechas por los mismos usuarios durante los primeros días de uso.</li>
            </ul>
        `,
        buildSim: function() {
            return `
                <div class="t4-square-row">
                    <button class="btn-square" id="micBtn" title="Dictar por voz" onclick="toggleVoiceRec()">
                        <span class="btn-square-icon">🎙️</span>
                        <span class="btn-square-label">Dictar Voz</span>
                    </button>
                    <button class="btn-square" id="btnEnableSel" title="Abrir lista de opciones" onclick="enableDropdownT4()">
                        <span class="btn-square-icon">📋</span>
                        <span class="btn-square-label">Elegir Opción</span>
                    </button>
                </div>

                <div class="t4-select-container" id="t4SelectWrapper">
                    <label style="font-size:11px; color:var(--accent); font-weight:700; display:block; margin-bottom:4px;">SELECCIONA LA CONSULTA OPERATIVA:</label>
                    <select id="selDuda" class="sim-select" onchange="evaluateCard4Selection()">
                        <option value="" disabled selected>-- Toca para seleccionar la consulta --</option>
                        <option value="1">¿Qué hago si la firma notarial escaneada aparece borrosa?</option>
                        <option value="2">¿Cómo reviso los antecedentes de homonimia rápidamente?</option>
                        <option value="3">¿Dónde verifico el pago del Impuesto de Registro?</option>
                    </select>
                </div>
            `;
        },
        init: function() {}
    },

    caso5: {
        avatar: "avatar5.PNG",
        badge: "PREGUNTA 5 | MONITOREO Y PLAN DE CONTINGENCIA",
        instrucciones: "El sistema monitorea en vivo. Cada 2 segundos surgirá una falla espontánea marcada en rojo titilante. Toca la tarjeta roja para activar el Plan B en el sub-modal.",
        teoria: `
            <h3 style="color:#fff; margin-bottom:10px; font-size:18px;">5. Ante una falla técnica en la solución contratada que detenga la operación registral, ¿cómo gestionaría la situación con el proveedor, TI y los usuarios?</h3>
            <p>Cuando ocurre un incidente en medio de la operación registral, la prioridad es mantener la calma y actuar rápido para evitar detener la atención. Lo abordaría así:</p>
            <ul style="margin-left:20px; margin-top:8px; margin-bottom:10px;">
                <li><b>Reportar fallos a los usuarios:</b> Avisar de inmediato a las áreas afectadas sobre lo que sucede, dando una estimación clara del tiempo y pautas sobre cómo proceder.</li>
                <li><b>Activar el plan de contingencia (Plan B):</b> Poner en marcha los procedimientos de contingencia para que los trámites sigan recibiéndose o procesándose de forma segura.</li>
                <li><b>Coordinación directa con TI y Proveedor:</b> Exigir el cumplimiento inmediato de los compromisos de soporte técnico, haciendo seguimiento paso a paso a la solución de la falla.</li>
                <li><b>Asegurar el restablecimiento y aprender del evento:</b> Una vez solucionado el problema, confirmar que la operación volvió a la normalidad, comunicar el cierre del evento y reunir al equipo para identificar la causa raíz y ajustar procedimientos preventivos.</li>
            </ul>
        `,
        buildSim: function() {
            return `
                <div class="nodes-grid-v">
                    <div class="node-card-v status-ok" id="c5_n1" onclick="clickFailedNode('n1')">
                        <span style="font-size:22px;">🏢</span>
                        <div>
                            <div style="font-size:13px; font-weight:700;">Taquillas y Sede Virtual</div>
                            <div style="font-size:11px; color:var(--muted);" id="c5_s1">Normal</div>
                        </div>
                    </div>
                    <div class="node-card-v status-ok" id="c5_n2" onclick="clickFailedNode('n2')">
                        <span style="font-size:22px;">🔍</span>
                        <div>
                            <div style="font-size:13px; font-weight:700;">Motor de Verificación</div>
                            <div style="font-size:11px; color:var(--muted);" id="c5_s2">Normal</div>
                        </div>
                    </div>
                    <div class="node-card-v status-ok" id="c5_n3" onclick="clickFailedNode('n3')">
                        <span style="font-size:22px;">📂</span>
                        <div>
                            <div style="font-size:13px; font-weight:700;">Base Registral CCB</div>
                            <div style="font-size:11px; color:var(--muted);" id="c5_s3">Normal</div>
                        </div>
                    </div>
                </div>

                <div id="c5_Console" style="background:#020617; border:1px solid rgba(255,255,255,.1); border-radius:12px; padding:12px; font-size:12px; color:#38bdf8;">
                    > Monitoreo en tiempo real activo...
                </div>
            `;
        },
        init: function() { startAutoIncidentC5(); }
    }
};