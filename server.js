const express = require('express');
const cors    = require('cors');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// Sirve index.html y cualquier asset estático desde la raíz del proyecto
app.use(express.static(path.join(__dirname)));

// ── Helper: log con timestamp ISO ───────────────────────────────────────────
function cloudLog(model, extra = '') {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [CLOUD LOG] Petición recibida: el usuario interactuó con el modelo ${model}.${extra ? ' ' + extra : ''}`);
}

// ── Rutas de la API ─────────────────────────────────────────────────────────

app.get('/api/log-iaas', (req, res) => {
  cloudLog('IaaS', 'Infrastructure as a Service seleccionado.');
  res.json({
    ok:      true,
    model:   'IaaS',
    message: 'Log IaaS registrado en el servidor.',
    ts:      new Date().toISOString(),
  });
});

app.get('/api/log-paas', (req, res) => {
  cloudLog('PaaS', 'Platform as a Service seleccionado.');
  res.json({
    ok:      true,
    model:   'PaaS',
    message: 'Log PaaS registrado en el servidor.',
    ts:      new Date().toISOString(),
  });
});

app.get('/api/log-saas', (req, res) => {
  cloudLog('SaaS', 'Software as a Service seleccionado.');
  res.json({
    ok:      true,
    model:   'SaaS',
    message: 'Log SaaS registrado en el servidor.',
    ts:      new Date().toISOString(),
  });
});

// ── Fallback: cualquier ruta no reconocida devuelve index.html ───────────────
// Express 5 usa '/{*splat}' en lugar del comodín '*' de Express 4
app.get('/{*splat}', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ── Arranque ─────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('╔══════════════════════════════════════════════╗');
  console.log(`║  Cloud Dashboard — servidor iniciado          ║`);
  console.log(`║  http://localhost:${PORT}                        ║`);
  console.log('╚══════════════════════════════════════════════╝');
});
