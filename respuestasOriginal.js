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
            <p>Iniciaría con una fase de <b>descubrimiento y entendimiento profundo</b> del proceso actual, realizando mesas de trabajo conjuntas con los usuarios expertos del área de registros para mapear el flujo de trabajo (AS-IS), identificando cuellos de botella, reglas de negocio implícitas, excepciones frecuentes y necesidades críticas.</p><br>
            <p>Posteriormente, estructuraría y documentaría detalladamente los requerimientos en:</p>
            <ul style="margin-left:20px; margin-top:6px; margin-bottom:10px;">
                <li><b>Alcance del proyecto.</b></li>
                <li><b>Requerimientos funcionales</b> (historias de usuario, casos de uso y criterios de aceptación).</li>
                <li><b>Requerimientos no funcionales</b> (seguridad, rendimiento, disponibilidad y trazabilidad).</li>
                <li><b>Reglas de negocio.</b></li>
            </ul>
            <p>Con esta base, sostendría sesiones de <b>validación técnica con el equipo de TI y arquitectura</b> para evaluar la factibilidad, acordar la estrategia de integración con los sistemas legados y definir la estructura de datos. Finalmente, realizaría una sesión de alineación y sign-off con los líderes de negocio para garantizar el compromiso y entendimiento mutuo antes de dar paso al desarrollo.</p>
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
            <h3 style="color:#fff; margin-bottom:10px; font-size:18px;">2. Si la solución implica la contratación de un proveedor tecnológico con componentes de IA, ¿qué aspectos clave evaluaría para tomar la decisión?</h3>
            <p>Evaluaría de manera integral los siguientes pilares clave:</p>
            <ul style="margin-left:20px; margin-top:8px; margin-bottom:10px;">
                <li><b>Experiencia y Madurez Técnica:</b> Casos de éxito comprobados en automatización y procesamiento de lenguaje o documentos en sectores regulados o similares.</li>
                <li><b>Precisión y Desempeño de la IA:</b> Tasas demostradas de precisión, recálculo, falsos positivos y mecanismos de aprendizaje continuo (human-in-the-loop).</li>
                <li><b>Seguridad y Cumplimiento Normativo:</b> Adherencia a normativas de protección de datos personales (Habeas Data / Ley 1581), cifrado de datos en tránsito y reposo, y políticas de no residencia de datos confidenciales en modelos públicos.</li>
                <li><b>Facilidad de Integración y Arquitectura:</b> Capacidad de conectividad mediante APIs REST u conectores estándar con los sistemas actuales.</li>
                <li><b>Soporte, Escalabilidad y Costo Total (TCO):</b> Acuerdos de Nivel de Servicio (SLA), esquema de licenciamiento transparente y capacidad de soportar incrementos en el volumen operado.</li>
            </ul>
            <p>Soportaría la decisión mediante una <b>matriz de evaluación ponderada</b> que combine pruebas de concepto (PoC) y puntuación de criterios.</p>
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
            <p>Desplegaría una estrategia sistemática de rediseño de procesos (TO-BE):</p>
            <ul style="margin-left:20px; margin-top:8px; margin-bottom:10px;">
                <li><b>Diagnóstico Operativo:</b> Analizar el flujo de valor para identificar y eliminar actividades sin valor agregado, tiempos muertos, aprobaciones redundantes y cuellos de botella.</li>
                <li><b>Automatización e Inteligencia:</b> Implementar validaciones automáticas de datos, extracción asistida con IA/OCR y enrutamiento inteligente de trámites.</li>
                <li><b>Línea Base e Indicadores (KPIs):</b> Establecer un tablero de control midiendo tiempos de procesamiento por etapa, tasa de rechazo/devueltos y efectividad de primera entrega.</li>
                <li><b>Acompañamiento en la Adopción:</b> Ajustar las cargas de trabajo y capacitar continuamente a los funcionarios para garantizar el cumplimiento sosteniendo la calidad jurídica.</li>
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
            <p>Estructuraría un plan de gestión del cambio en cuatro etapas metodológicas:</p>
            <ul style="margin-left:20px; margin-top:8px; margin-bottom:10px;">
                <li><b>Sensibilización y Comunicación Transparente:</b> Explicar claramente el "por qué" del cambio, destacando cómo la solución les facilitará la labor diaria sin reemplazar el criterio humano.</li>
                <li><b>Capacitación Práctica y Diferenciada:</b> Diseñar talleres por roles con casos reales y guías interactivas rápidas.</li>
                <li><b>Red de Campeones del Cambio:</b> Identificar y formar líderes de opinión dentro del equipo operativo para resolver dudas en el puesto de trabajo.</li>
                <li><b>Acompañamiento en Vivo y Retroalimentación:</b> Establecer canales directos de soporte y espacio para escuchar e incorporar mejoras continuas aportadas por los usuarios.</li>
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
            <p>Ejecutaría una gestión de incidentes coordinada y proactiva:</p>
            <ul style="margin-left:20px; margin-top:8px; margin-bottom:10px;">
                <li><b>Comunicación Inmediata con Usuarios:</b> Notificar con transparencia el incidente, el impacto estimado y dar instrucciones claras para no detener la atención.</li>
                <li><b>Activación de Contingencia (Plan B):</b> Habilitar procedimientos alternativos (verificación manual) garantizando la continuidad del servicio.</li>
                <li><b>Escalamiento con TI y Proveedor:</b> Exigir el cumplimiento inmediato del SLA de soporte, realizar seguimiento en tiempo real al diagnóstico técnico y articular las acciones de contención.</li>
                <li><b>Cierre y Post-Mortem:</b> Confirmar la estabilización con la operación, comunicar el restablecimiento e identificar la causa raíz para implementar acciones preventivas definitivas.</li>
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