/* ═════════════════════════════════════════════════════════════
   DATOS DE CADA MODELO DE SERVICIO CLOUD
   ═════════════════════════════════════════════════════════════ */
const CLOUD_MODELS = {

  iaas: {
    label:       'IaaS — Infrastructure as a Service',
    color:       '#00d4ff',
    colorClass:  'text-cyber-blue',
    borderClass: 'border-cyber-blue',
    description: 'El proveedor ofrece recursos de cómputo virtualizados (servidores, redes, almacenamiento). Tú administras todo lo demás: SO, middleware y aplicaciones.',
    examples: [
      { name: 'Amazon EC2',           icon: '🟠', desc: 'Instancias virtuales escalables' },
      { name: 'Google Compute Engine',icon: '🔵', desc: 'VMs en infraestructura de Google' },
      { name: 'Microsoft Azure VMs',  icon: '🟣', desc: 'Máquinas virtuales Windows/Linux' },
      { name: 'DigitalOcean Droplets',icon: '💧', desc: 'VMs simples para devs' },
    ],
    useCases: 'Ideal para empresas que necesitan control total sobre el SO y el entorno de ejecución, o que migran infraestructura on-premise a la nube (lift-and-shift).',
    userControls: [
      '🖥 Sistema Operativo (Windows / Linux)',
      '🔒 Configuración de red y firewalls',
      '💽 Bases de datos y middleware',
      '📦 Runtime y librerías',
      '🚀 Código y aplicaciones',
      '🗂 Almacenamiento y backups',
    ],
    providerControls: [
      '⚙ Servidores físicos y hardware',
      '🌐 Red física y conectividad',
      '❄ Refrigeración y datacenter',
      '🔌 Alimentación eléctrica',
      '🔄 Virtualización (hipervisor)',
    ],
    stack: [
      { label: 'Aplicaciones',   user: true  },
      { label: 'Datos',          user: true  },
      { label: 'Runtime',        user: true  },
      { label: 'Middleware',     user: true  },
      { label: 'Sistema Op.',    user: true  },
      { label: 'Virtualización', user: false },
      { label: 'Servidores',     user: false },
      { label: 'Almacenamiento', user: false },
      { label: 'Red',            user: false },
    ],
    pros: ['+ Control total del entorno', '+ Máxima flexibilidad y personalización'],
    cons: ['− Mayor responsabilidad de gestión', '− Requiere equipo técnico especializado'],
  },

  paas: {
    label:       'PaaS — Platform as a Service',
    color:       '#a78bfa',
    colorClass:  'text-purple-400',
    borderClass: 'border-purple-400',
    description: 'El proveedor gestiona la infraestructura Y el sistema operativo. Tú solo te enfocas en desarrollar tu aplicación y gestionar tus datos.',
    examples: [
      { name: 'Google App Engine',     icon: '🔵', desc: 'Deploy automático de apps web' },
      { name: 'Heroku',                icon: '🟣', desc: 'Plataforma para devs sin ops' },
      { name: 'AWS Elastic Beanstalk', icon: '🟠', desc: 'Deploy fácil en AWS' },
      { name: 'Azure App Service',     icon: '🔷', desc: 'Hosting de apps web en Azure' },
    ],
    useCases: 'Perfecta para equipos de desarrollo que quieren hacer deploy rápido sin preocuparse por servidores, actualizaciones de SO o configuración de red.',
    userControls: [
      '🚀 Código de la aplicación',
      '🗂 Datos y esquemas de BD',
      '⚙ Configuración de la app',
      '🔐 Credenciales y variables de entorno',
    ],
    providerControls: [
      '🖥 Sistema Operativo',
      '📦 Runtime y librerías del sistema',
      '🔒 Seguridad y parches del SO',
      '⚙ Servidores físicos y hardware',
      '🌐 Red física y conectividad',
      '❄ Datacenter e infraestructura',
      '🔄 Escalado automático',
    ],
    stack: [
      { label: 'Aplicaciones',   user: true  },
      { label: 'Datos',          user: true  },
      { label: 'Runtime',        user: false },
      { label: 'Middleware',     user: false },
      { label: 'Sistema Op.',    user: false },
      { label: 'Virtualización', user: false },
      { label: 'Servidores',     user: false },
      { label: 'Almacenamiento', user: false },
      { label: 'Red',            user: false },
    ],
    pros: ['+ Desarrollo más ágil y rápido', '+ Sin gestión de infraestructura'],
    cons: ['− Menor control sobre el entorno', '− Posible vendor lock-in'],
  },

  saas: {
    label:       'SaaS — Software as a Service',
    color:       '#00ff88',
    colorClass:  'text-cyber-green',
    borderClass: 'border-cyber-green',
    description: 'El proveedor gestiona absolutamente todo: infraestructura, plataforma y software. El usuario final solo usa la aplicación a través del navegador.',
    examples: [
      { name: 'Google Workspace', icon: '🔵', desc: 'Gmail, Docs, Drive en la nube' },
      { name: 'Microsoft 365',    icon: '🟦', desc: 'Office completo como servicio' },
      { name: 'Salesforce',       icon: '☁',  desc: 'CRM empresarial en la nube' },
      { name: 'Slack / Zoom',     icon: '🟣', desc: 'Colaboración y videoconferencia' },
    ],
    useCases: 'Para usuarios finales y empresas que necesitan software listo para usar sin ningún mantenimiento técnico. Solo se paga una suscripción.',
    userControls: [
      '👤 Gestión de usuarios y permisos',
      '⚙ Configuración de la aplicación',
      '📊 Datos que ingresas al sistema',
    ],
    providerControls: [
      '🚀 Aplicación y todas sus funciones',
      '🗂 Bases de datos y almacenamiento',
      '📦 Runtime y librerías',
      '🖥 Sistema Operativo',
      '⚙ Servidores físicos y hardware',
      '🌐 Red física y conectividad',
      '❄ Datacenter e infraestructura',
      '🔒 Seguridad y actualizaciones',
    ],
    stack: [
      { label: 'Aplicaciones',   user: false },
      { label: 'Datos',          user: false },
      { label: 'Runtime',        user: false },
      { label: 'Middleware',     user: false },
      { label: 'Sistema Op.',    user: false },
      { label: 'Virtualización', user: false },
      { label: 'Servidores',     user: false },
      { label: 'Almacenamiento', user: false },
      { label: 'Red',            user: false },
    ],
    pros: ['+ Cero mantenimiento técnico', '+ Acceso inmediato desde cualquier lugar'],
    cons: ['− Sin control sobre el software', '− Dependencia total del proveedor'],
  },
};


/* ═════════════════════════════════════════════════════════════
   SIMULADOR DE ARQUITECTURA CLOUD
   ═════════════════════════════════════════════════════════════ */

let currentModel = null;

async function notifyServer(modelKey) {
  addLog('info', `→ Enviando petición al servidor: /api/log-${modelKey}`);
  try {
    const res  = await fetch(`/api/log-${modelKey}`);
    const data = await res.json();
    if (data.ok) {
      addLog('success', `← Servidor confirmó: "${data.message}" [${data.ts}]`);
    } else {
      addLog('warn', `← El servidor respondió sin estado OK para ${modelKey}`);
    }
  } catch (err) {
    addLog('warn', `← Sin conexión con el backend. Modo offline activo. (${err.message})`);
  }
}

function selectModel(modelKey) {
  currentModel = modelKey;
  const model  = CLOUD_MODELS[modelKey];

  // Actualizar estado visual de los botones
  ['iaas', 'paas', 'saas'].forEach(key => {
    const btn = document.getElementById(`btn-${key}`);
    btn.className = btn.className
      .replace(/active-iaas|active-paas|active-saas/g, '')
      .trim();
  });
  document.getElementById(`btn-${modelKey}`).classList.add(`active-${modelKey}`);

  // Mostrar el diagrama
  document.getElementById('diagram-placeholder').classList.add('hidden');
  document.getElementById('diagram-content').classList.remove('hidden');

  // Título y descripción
  const titleEl = document.getElementById('model-title');
  titleEl.textContent = model.label;
  titleEl.className   = `font-orbitron text-2xl font-bold ${model.colorClass}`;
  document.getElementById('model-description').textContent = model.description;

  // Ejemplos reales
  document.getElementById('examples-list').innerHTML = model.examples.map(ex => `
    <div class="flex items-start gap-2 p-2 rounded-lg bg-cyber-dark/50">
      <span class="text-lg">${ex.icon}</span>
      <div>
        <p class="text-sm font-medium text-white">${ex.name}</p>
        <p class="text-xs text-gray-500">${ex.desc}</p>
      </div>
    </div>
  `).join('');

  // Casos de uso
  document.getElementById('use-cases').textContent = model.useCases;

  // Pila visual
  renderStack(model);

  // Listas de control
  renderControlList('user-controls',     model.userControls);
  renderControlList('provider-controls', model.providerControls);

  // Pros / contras
  document.getElementById('pros-cons').innerHTML = [
    ...model.pros.map(p => `<p class="text-cyber-green text-xs font-mono">${p}</p>`),
    ...model.cons.map(c => `<p class="text-red-400 text-xs font-mono">${c}</p>`),
  ].join('');

  addLog('info', `Modelo seleccionado: ${model.label}`);

  // Notificar al backend sin bloquear la UI
  notifyServer(modelKey);
}

function renderStack(model) {
  const container = document.getElementById('stack-visual');
  container.innerHTML = `<p class="text-center font-mono text-xs text-gray-600 mb-4 tracking-widest uppercase">← Pila Tecnológica →</p>`;

  model.stack.forEach((layer, index) => {
    const cell = document.createElement('div');
    cell.className = 'stack-cell rounded-lg px-4 py-3 flex items-center justify-between text-sm font-medium border';

    if (layer.user) {
      cell.style.cssText = `
        background: ${model.color}15;
        border-color: ${model.color}60;
        color: ${model.color};
      `;
      cell.innerHTML = `<span>${layer.label}</span><span class="text-xs font-mono opacity-70">TÚ</span>`;
    } else {
      cell.style.cssText = `
        background: rgba(30,45,64,0.6);
        border-color: rgba(30,45,64,0.9);
        color: #6b7280;
      `;
      cell.innerHTML = `<span>${layer.label}</span><span class="text-xs font-mono opacity-50">PROVEEDOR</span>`;
    }

    container.appendChild(cell);
    setTimeout(() => cell.classList.add('visible'), index * 60);
  });

  container.innerHTML += `
    <div class="mt-4 flex items-center justify-center gap-4 text-xs font-mono">
      <span class="flex items-center gap-1" style="color: ${model.color}">
        <span class="w-3 h-3 rounded-sm inline-block" style="background: ${model.color}40; border: 1px solid ${model.color}"></span>
        Tú gestionas
      </span>
      <span class="flex items-center gap-1 text-gray-600">
        <span class="w-3 h-3 rounded-sm inline-block bg-cyber-border border border-gray-700 inline-block"></span>
        Proveedor gestiona
      </span>
    </div>
  `;
}

function renderControlList(elementId, items) {
  document.getElementById(elementId).innerHTML = items.map(item => `
    <li class="flex items-start gap-2 text-gray-300 text-sm">
      <span class="mt-0.5 flex-shrink-0">${item}</span>
    </li>
  `).join('');
}


/* ═════════════════════════════════════════════════════════════
   SIMULADOR DE DESPLIEGUE (DEPLOY)
   ═════════════════════════════════════════════════════════════ */

const PIPELINE_STAGES = [
  { id: 'build',     label: 'Build',      icon: '⚙' },
  { id: 'test',      label: 'Tests',      icon: '✓' },
  { id: 'package',   label: 'Package',    icon: '📦' },
  { id: 'push',      label: 'Push Image', icon: '⬆' },
  { id: 'provision', label: 'Provision',  icon: '🔧' },
  { id: 'deploy',    label: 'Deploy',     icon: '🚀' },
  { id: 'health',    label: 'Health Chk', icon: '❤' },
];

const DEPLOY_MESSAGES = [
  { pct: 5,   stage: 'Compilando código fuente...',        log: 'info',    msg: 'Iniciando compilación del proyecto...' },
  { pct: 15,  stage: 'Ejecutando tests unitarios...',       log: 'info',    msg: 'npm run test — 47 tests passed ✓' },
  { pct: 22,  stage: 'Verificando cobertura de código...',  log: 'success', msg: 'Code coverage: 92.3% — OK' },
  { pct: 30,  stage: 'Construyendo imagen Docker...',       log: 'info',    msg: 'docker build -t my-app:latest .' },
  { pct: 42,  stage: 'Subiendo imagen al registry...',      log: 'info',    msg: 'Pushing image to registry.cloud.io/my-app:latest' },
  { pct: 55,  stage: 'Provisionando instancias cloud...',   log: 'info',    msg: 'Requesting 3x t3.medium instances in us-east-1' },
  { pct: 65,  stage: 'Configurando balanceador de carga...', log: 'info',   msg: 'Setting up Application Load Balancer...' },
  { pct: 75,  stage: 'Desplegando contenedores...',         log: 'info',    msg: 'kubectl apply -f deployment.yaml' },
  { pct: 85,  stage: 'Ejecutando health checks...',         log: 'warn',    msg: 'Waiting for pods to become ready... (1/3)' },
  { pct: 90,  stage: 'Validando endpoints...',              log: 'info',    msg: 'All 3 pods running ✓ — checking endpoints' },
  { pct: 95,  stage: 'Actualizando DNS...',                 log: 'info',    msg: 'DNS propagation in progress...' },
  { pct: 100, stage: '¡Despliegue completado!',             log: 'success', msg: 'Deployment successful — app live at https://my-app-prod.cloudapp.io' },
];

// Índice del chip de pipeline activo para cada mensaje de despliegue
const STAGE_INDEX_MAP = [0, 0, 0, 1, 2, 3, 4, 5, 6, 6, 6, 6];

let deployRunning = false;

function initPipelineStages() {
  const container = document.getElementById('pipeline-stages');
  PIPELINE_STAGES.forEach(s => {
    const chip = document.createElement('div');
    chip.id        = `stage-${s.id}`;
    chip.className = 'px-3 py-1.5 rounded-lg text-xs font-mono border border-cyber-border bg-cyber-dark text-gray-600 transition-all duration-500';
    chip.innerHTML = `${s.icon} ${s.label}`;
    container.appendChild(chip);
  });
}

async function startDeploy() {
  if (deployRunning) return;
  deployRunning = true;

  const btn       = document.getElementById('deploy-btn');
  const bar       = document.getElementById('progress-bar');
  const pctEl     = document.getElementById('deploy-pct');
  const stageEl   = document.getElementById('deploy-stage');
  const successEl = document.getElementById('success-msg');

  btn.disabled = true;
  successEl.classList.add('hidden');

  PIPELINE_STAGES.forEach(s => {
    document.getElementById(`stage-${s.id}`).className =
      'px-3 py-1.5 rounded-lg text-xs font-mono border border-cyber-border bg-cyber-dark text-gray-600 transition-all duration-500';
  });

  addLog('info', '══ INICIANDO PIPELINE DE DESPLIEGUE ══');

  let lastPct = 0;

  for (let i = 0; i < DEPLOY_MESSAGES.length; i++) {
    const step = DEPLOY_MESSAGES[i];

    await animateProgress(bar, pctEl, lastPct, step.pct, 600);
    lastPct = step.pct;

    stageEl.textContent = step.stage;
    addLog(step.log, step.msg);

    const activeStage = PIPELINE_STAGES[STAGE_INDEX_MAP[i]];
    if (activeStage) {
      PIPELINE_STAGES.forEach(s => {
        document.getElementById(`stage-${s.id}`)
          .classList.remove('border-cyber-blue', 'text-cyber-blue', 'bg-cyber-blue/10');
      });
      document.getElementById(`stage-${activeStage.id}`)
        .classList.add('border-cyber-blue', 'text-cyber-blue', 'bg-cyber-blue/10');
    }

    await sleep(400 + Math.random() * 600);
  }

  PIPELINE_STAGES.forEach(s => {
    document.getElementById(`stage-${s.id}`).className =
      'px-3 py-1.5 rounded-lg text-xs font-mono border border-cyber-green/50 bg-cyber-green/10 text-cyber-green transition-all duration-500';
  });

  document.getElementById('deploy-hash').textContent =
    Math.random().toString(36).substring(2, 8);
  successEl.classList.remove('hidden');

  btn.disabled    = false;
  btn.textContent = '🔄 Nuevo Despliegue';
  deployRunning   = false;
}

function animateProgress(bar, pctEl, from, to, duration) {
  return new Promise(resolve => {
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const current  = Math.round(from + (to - from) * easeOut(progress));
      bar.style.width    = `${current}%`;
      pctEl.textContent  = `${current}%`;
      if (progress < 1) requestAnimationFrame(tick);
      else resolve();
    }
    requestAnimationFrame(tick);
  });
}

const easeOut = t => 1 - Math.pow(1 - t, 3);
const sleep   = ms => new Promise(r => setTimeout(r, ms));


/* ═════════════════════════════════════════════════════════════
   CONSOLA DE LOGS INTERACTIVA
   ═════════════════════════════════════════════════════════════ */

let logsPaused   = false;
let currentFilter = 'all';
let allLogs       = [];

const AUTO_LOG_POOL = [
  { type: 'info',    msg: 'Heartbeat: todas las instancias responden correctamente' },
  { type: 'info',    msg: 'Auto-scaling: uso de CPU al 34% — sin cambios' },
  { type: 'info',    msg: 'Health check /api/status → 200 OK (12ms)' },
  { type: 'info',    msg: 'Conexión establecida con db-cluster-primary:5432' },
  { type: 'info',    msg: 'CDN cache: 98.2% hit rate en los últimos 5 min' },
  { type: 'warn',    msg: 'Latencia elevada detectada en us-west-2 (>200ms)' },
  { type: 'warn',    msg: 'Token JWT próximo a expirar — renovando...' },
  { type: 'warn',    msg: 'Queue de mensajes SQS: 142 mensajes pendientes' },
  { type: 'info',    msg: 'Backup automático completado: s3://backups/2026-06-24' },
  { type: 'success', msg: 'Auto-scaling: nueva instancia i-0abc123 iniciada OK' },
  { type: 'info',    msg: 'SSL/TLS: certificado válido, expira en 87 días' },
  { type: 'warn',    msg: 'Rate limiting activado para IP 203.45.67.89 (429)' },
  { type: 'error',   msg: 'Timeout en microservicio payments-svc (3 reintentos)' },
  { type: 'success', msg: 'Transacciones procesadas: 1,247 en el último minuto' },
  { type: 'info',    msg: 'Métricas enviadas a CloudWatch — OK' },
  { type: 'error',   msg: 'Error 503 en /api/recommendations — failover activado' },
  { type: 'info',    msg: 'Load balancer: distribuyendo tráfico entre 3 nodos' },
  { type: 'success', msg: 'Deployment rollout completado — 100% tráfico en v2.3.1' },
];

function addLog(type, message) {
  const timestamp = new Date().toLocaleTimeString('es-MX', { hour12: false });
  const entry     = { type, message, timestamp, id: Date.now() + Math.random() };
  allLogs.push(entry);
  if (allLogs.length > 200) allLogs.shift();
  if (!logsPaused) renderLog(entry);
}

function renderLog(entry) {
  if (currentFilter !== 'all' && entry.type !== currentFilter) return;

  const output = document.getElementById('log-output');
  const div    = document.createElement('div');
  div.className      = 'log-entry flex gap-3 text-xs';
  div.dataset.type   = entry.type;

  const colors = {
    info:    'text-gray-400',
    warn:    'text-yellow-400',
    error:   'text-red-400',
    success: 'text-cyber-green',
  };
  const badges = {
    info:    '<span class="text-gray-600 bg-gray-900 px-1 rounded">INFO </span>',
    warn:    '<span class="text-yellow-400 bg-yellow-400/10 px-1 rounded">WARN </span>',
    error:   '<span class="text-red-400 bg-red-400/10 px-1 rounded">ERROR</span>',
    success: '<span class="text-cyber-green bg-cyber-green/10 px-1 rounded">OK   </span>',
  };

  div.innerHTML = `
    <span class="text-gray-700 flex-shrink-0">${entry.timestamp}</span>
    ${badges[entry.type] || badges.info}
    <span class="${colors[entry.type] || colors.info}">${entry.message}</span>
  `;

  output.appendChild(div);
  output.scrollTop = output.scrollHeight;

  const entries = output.querySelectorAll('.log-entry');
  if (entries.length > 100) entries[0].remove();
}

function clearLogs() {
  allLogs = [];
  document.getElementById('log-output').innerHTML = '';
  addLog('info', 'Consola limpiada.');
}

function pauseLogs() {
  logsPaused = !logsPaused;
  const btn = document.getElementById('pause-btn');
  btn.textContent = logsPaused ? 'REANUDAR' : 'PAUSAR';
  btn.className   = logsPaused
    ? 'text-xs text-cyber-green font-mono hover:text-white transition-colors'
    : 'text-xs text-gray-600 font-mono hover:text-cyber-green transition-colors';

  if (!logsPaused) {
    const output = document.getElementById('log-output');
    output.innerHTML = '';
    allLogs.slice(-50).forEach(renderLog);
  }
}

function filterLogs(filter) {
  currentFilter = filter;

  document.querySelectorAll('.log-filter').forEach(btn => {
    btn.classList.remove('active-filter', 'text-white');
    btn.classList.add('text-gray-400');
  });
  document.querySelector(`[data-filter="${filter}"]`).classList.add('active-filter', 'text-white');

  const output = document.getElementById('log-output');
  output.innerHTML = '';
  const filtered = filter === 'all' ? allLogs : allLogs.filter(l => l.type === filter);
  filtered.slice(-50).forEach(renderLog);
}


/* ═════════════════════════════════════════════════════════════
   MÉTRICAS DE SISTEMA (HEADER) — Simuladas
   ═════════════════════════════════════════════════════════════ */

function updateSystemMetrics() {
  const cpuTarget = 15 + Math.random() * 60;
  const memTarget = 50 + Math.random() * 35;

  const cpuBar = document.getElementById('cpu-bar');
  const memBar = document.getElementById('mem-bar');

  const newCpu = Math.round(parseInt(cpuBar.style.width) + (cpuTarget - parseInt(cpuBar.style.width)) * 0.2);
  const newMem = Math.round(parseInt(memBar.style.width) + (memTarget - parseInt(memBar.style.width)) * 0.1);

  cpuBar.style.width = `${newCpu}%`;
  document.getElementById('cpu-pct').textContent = `${newCpu}%`;
  memBar.style.width = `${newMem}%`;
  document.getElementById('mem-pct').textContent = `${newMem}%`;
}

function updateClock() {
  document.getElementById('clock').textContent =
    new Date().toLocaleTimeString('es-MX', { hour12: false });
}


/* ═════════════════════════════════════════════════════════════
   PARTÍCULAS FLOTANTES (HERO)
   ═════════════════════════════════════════════════════════════ */

function createParticles() {
  const container = document.getElementById('particles-container');
  const colors    = ['#00d4ff', '#7c3aed', '#00ff88', '#ffffff'];

  for (let i = 0; i < 25; i++) {
    const p        = document.createElement('div');
    const size     = 2 + Math.random() * 4;
    const color    = colors[Math.floor(Math.random() * colors.length)];
    const duration = 8 + Math.random() * 15;
    const dx       = (Math.random() - 0.5) * 200;

    p.className    = 'particle';
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      background: ${color};
      left: ${10 + Math.random() * 80}%;
      bottom: 0;
      --dx: ${dx}px;
      animation-duration: ${duration}s;
      animation-delay: ${Math.random() * duration}s;
      opacity: 0;
      box-shadow: 0 0 ${size * 2}px ${color};
    `;
    container.appendChild(p);
  }
}


/* ═════════════════════════════════════════════════════════════
   INICIALIZACIÓN — punto de entrada de la aplicación
   ═════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // Registrar listeners de eventos (sin onclick en el HTML)
  document.getElementById('btn-iaas').addEventListener('click', () => selectModel('iaas'));
  document.getElementById('btn-paas').addEventListener('click', () => selectModel('paas'));
  document.getElementById('btn-saas').addEventListener('click', () => selectModel('saas'));
  document.getElementById('deploy-btn').addEventListener('click', startDeploy);
  document.getElementById('clear-logs-btn').addEventListener('click', clearLogs);
  document.getElementById('pause-btn').addEventListener('click', pauseLogs);
  document.querySelectorAll('.log-filter').forEach(btn => {
    btn.addEventListener('click', () => filterLogs(btn.dataset.filter));
  });

  // Inicializar componentes
  initPipelineStages();
  createParticles();

  // Logs de bienvenida escalonados
  const welcomeLogs = [
    { type: 'success', msg: 'Sistema cloud inicializado correctamente' },
    { type: 'info',    msg: 'Conectando a cluster Kubernetes en us-east-1...' },
    { type: 'success', msg: 'Cluster conectado: 3 nodos activos, 12 pods running' },
    { type: 'info',    msg: 'Cargando configuración de auto-scaling...' },
    { type: 'info',    msg: 'Dashboard listo. Bienvenido al Panel Cloud.' },
  ];
  welcomeLogs.forEach((log, i) => setTimeout(() => addLog(log.type, log.msg), i * 400));

  // Stream de logs automático
  let logIndex = 0;
  setInterval(() => {
    const entry = AUTO_LOG_POOL[logIndex % AUTO_LOG_POOL.length];
    addLog(entry.type, entry.msg);
    logIndex++;
  }, 2800);

  // Reloj y métricas
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(updateSystemMetrics, 3000);
});
