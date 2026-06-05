#!/usr/bin/env python3
import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. Replace STORE_PRODUCTS ──────────────────────────────────────────────────
new_products = """const STORE_PRODUCTS = [
    // THEMES
    { id:'theme-classic', category:'theme', price:0, title:'Clásico Profesional', desc:'El tema por defecto en tonos azul marino y rojo.', preview:{type:'palette',colors:['#0b0f19','#2563eb','#dc2626','#f9fafb']} },
    { id:'theme-concentration', category:'theme', price:5000, title:'Modo Concentración 🧠', desc:'Azules de alto contraste. Mínimas distracciones para tests largos.', preview:{type:'palette',colors:['#0a0f1d','#3b82f6','#1d4ed8','#e0f2fe']} },
    { id:'theme-memory', category:'theme', price:15000, title:'Modo Memoria 💡', desc:'Colores funcionales en respuestas y errores para forzar asociaciones visuales.', preview:{type:'palette',colors:['#0d121f','#8b5cf6','#10b981','#ef4444']} },
    { id:'theme-reading', category:'theme', price:30000, title:'Lectura Prolongada 📖', desc:'Fondo cálido y contraste suave para reducir fatiga ocular.', preview:{type:'palette',colors:['#1c1510','#d97706','#92400e','#fef3c7']} },
    { id:'theme-night-cognitive', category:'theme', price:0, title:'Nocturno Cognitivo 🌙', desc:'Fondo azul-gris muy oscuro. Evita el deslumbramiento nocturno.', preview:{type:'palette',colors:['#0d1117','#1e3a5f','#2d4a6e','#94a3b8']} },
    { id:'theme-forest', category:'theme', price:20000, title:'Bosque Oscuro 🌲', desc:'Verde pino profundo con detalles esmeralda. Muy reposante para la vista.', preview:{type:'palette',colors:['#0a130d','#166534','#16a34a','#d1fae5']} },
    { id:'theme-sunset', category:'theme', price:45000, title:'Atardecer 🌄', desc:'Degradado cálido de rosa a naranja. Energía y creatividad.', preview:{type:'palette',colors:['#1a0610','#9d174d','#f97316','#fef9c3']} },
    { id:'theme-aurora', category:'theme', price:80000, title:'Aurora Boreal ✨', desc:'Cianos, magentas y esmeraldas que imitan la aurora polar.', preview:{type:'palette',colors:['#06141b','#0891b2','#7c3aed','#6ee7b7']} },
    { id:'theme-sevilla', category:'theme', price:150000, title:'Sevilla Especial 💃', desc:'Diseño en carmesí y albero. Sevilla tiene un color especial.', preview:{type:'palette',colors:['#1a0a05','#c0392b','#e67e22','#f9e4b7']} },
    { id:'theme-cyber', category:'theme', price:500000, title:'Cyberpunk 🤖', desc:'Amarillo eléctrico y cian neon sobre negro profundo. Gamer edition.', preview:{type:'palette',colors:['#000000','#facc15','#22d3ee','#f0abfc']} },
    { id:'theme-malaga', category:'theme', price:2000000, title:'Málaga Especial 🌅', desc:'Azul mediterráneo del Málaga pa el mundo. Exclusivo.', preview:{type:'palette',colors:['#060d1a','#0369a1','#0ea5e9','#bae6fd']} },

    // FONTS
    { id:'font-default', category:'font', price:0, title:'Outfit & Jakarta', desc:'Tipografía estándar de la interfaz. Moderna y limpia.', preview:{type:'font',sample:'Aa',family:'Outfit, sans-serif',hint:'Predeterminada'} },
    { id:'font-inter', category:'font', price:10000, title:'Inter', desc:'Sans-serif de alta legibilidad en escritorio y móvil.', preview:{type:'font',sample:'Aa',family:'Inter, sans-serif',hint:'Alta legibilidad'} },
    { id:'font-space-grotesk', category:'font', price:20000, title:'Space Grotesk', desc:'Geométrica y tecnológica. Futurista y muy legible.', preview:{type:'font',sample:'Ag',family:'"Space Grotesk", sans-serif',hint:'Futurista'} },
    { id:'font-source-sans', category:'font', price:25000, title:'Source Sans 3', desc:'Legibilidad perfecta en bloques de texto continuo.', preview:{type:'font',sample:'Aa',family:'"Source Sans 3", sans-serif',hint:'Texto largo'} },
    { id:'font-roboto-mono', category:'font', price:35000, title:'Roboto Mono', desc:'Monoespaciada. Ideal para definiciones técnicas y código.', preview:{type:'font',sample:'01',family:'"Roboto Mono", monospace',hint:'Mono / Técnica'} },
    { id:'font-atkinson', category:'font', price:50000, title:'Atkinson Hyperlegible', desc:'Caracteres diferenciables para facilitar el reconocimiento visual.', preview:{type:'font',sample:'Aa',family:'"Atkinson Hyperlegible", sans-serif',hint:'Dislexia-friendly'} },
    { id:'font-playfair', category:'font', price:60000, title:'Playfair Display', desc:'Serif elegante con mucho carácter. Para un estilo premium.', preview:{type:'font',sample:'Aa',family:'"Playfair Display", serif',hint:'Elegante'} },
    { id:'font-noto-sans', category:'font', price:100000, title:'Noto Sans', desc:'Excelente rendimiento y contraste para lectura digital.', preview:{type:'font',sample:'Aa',family:'"Noto Sans", sans-serif',hint:'Universal'} },

    // BUTTONS
    { id:'btn-default', category:'button', price:0, title:'Redondeado Estándar', desc:'Estilo de botones por defecto. Suave y profesional.', preview:{type:'button',style:'background:#2563eb;border-radius:8px;color:white;border:none;',label:'Responder'} },
    { id:'btn-minimal', category:'button', price:15000, title:'Minimalista Outline', desc:'Solo el borde visible. Elegancia y sencillez máxima.', preview:{type:'button',style:'background:transparent;border:1.5px solid rgba(255,255,255,0.5);border-radius:8px;color:white;',label:'Responder'} },
    { id:'btn-futuristic', category:'button', price:25000, title:'Botón Futurista 🔮', desc:'Bordes rectos con sombra de neón sutil. Estilo tech.', preview:{type:'button',style:'background:transparent;border:1px solid #22d3ee;border-radius:2px;color:#22d3ee;box-shadow:0 0 8px rgba(34,211,238,0.4);',label:'Responder'} },
    { id:'btn-gradient', category:'button', price:40000, title:'Gradiente Suave 🌈', desc:'Degradado horizontal de colores vivos en cada botón.', preview:{type:'button',style:'background:linear-gradient(90deg,#f97316,#ec4899);border:none;border-radius:8px;color:white;',label:'Responder'} },
    { id:'btn-glass', category:'button', price:75000, title:'Cristal Glass 🔮', desc:'Efecto de cristal esmerilado con fondo semitransparente.', preview:{type:'button',style:'background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.25);border-radius:10px;color:white;',label:'Responder'} },
    { id:'btn-pixel', category:'button', price:150000, title:'Retro Pixel 👾', desc:'Cuadrados con borde grueso y estilo arcade retro. Gamer.', preview:{type:'button',style:'background:#1a1a2e;border:3px solid #e94560;border-radius:0;color:#e94560;font-family:monospace;letter-spacing:1px;',label:'RESPONDER'} },
    { id:'btn-glow', category:'button', price:1000000, title:'Ultra Resplandor ✨', desc:'Animación de pulso luminosa constante. Efecto premium.', preview:{type:'button',style:'background:linear-gradient(135deg,#6366f1,#8b5cf6);border:none;border-radius:8px;color:white;box-shadow:0 0 18px rgba(139,92,246,0.7);',label:'Responder'} },

    // PHRASES
    { id:'phrase-malaga1', category:'phrase', price:0, title:'de málaga pa el mundo 🌍', desc:'Lema por defecto de la cabecera.', preview:{type:'phrase',text:'De Málaga pa el mundo 🌍',color:'#ef4444'} },
    { id:'phrase-motivacion1', category:'phrase', price:5000, title:'💥 A tope, el examen no espera!', desc:'Para activar el modo bestia antes de un test.', preview:{type:'phrase',text:'💥 A tope, el examen no espera!',color:'#f87171'} },
    { id:'phrase-motivacion2', category:'phrase', price:8000, title:'🤖 Modo IA activado', desc:'Para los que se sienten en el futuro estudiando.', preview:{type:'phrase',text:'🤖 Modo IA activado',color:'#6ee7b7'} },
    { id:'phrase-malaga2', category:'phrase', price:10000, title:'🍋 ¡Qué pechá de estudiar! 🍋', desc:'Lema malagueño para los días de estudio intenso.', preview:{type:'phrase',text:'🍋 ¡Qué pechá de estudiar!',color:'#facc15'} },
    { id:'phrase-madrid1', category:'phrase', price:20000, title:'🐻 De Madrid al cielo ☁️', desc:'Lema clásico madrileño.', preview:{type:'phrase',text:'🐻 De Madrid al cielo',color:'#60a5fa'} },
    { id:'phrase-sevilla1', category:'phrase', price:25000, title:'💃 Sevilla tiene un color especial 💃', desc:'Lema de la capital andaluza.', preview:{type:'phrase',text:'💃 Sevilla tiene un color especial',color:'#f97316'} },
    { id:'phrase-galicia', category:'phrase', price:30000, title:'🌊 Galicia Calidade 🌊', desc:'Para los que estudian con la lluvia de fondo.', preview:{type:'phrase',text:'🌊 Galicia Calidade',color:'#38bdf8'} },
    { id:'phrase-barcelona', category:'phrase', price:35000, title:'🗼 Barcelona més que un club', desc:'Homenaje a la ciudad condal.', preview:{type:'phrase',text:'🗼 Barcelona més que un club',color:'#f472b6'} },
    { id:'phrase-madrid2', category:'phrase', price:40000, title:'🚇 ¡Qué mazo preguntas! 🚇', desc:'Expresión típica madrileña para los tests gigantes.', preview:{type:'phrase',text:'🚇 ¡Qué mazo preguntas!',color:'#a78bfa'} },
    { id:'phrase-sevilla2', category:'phrase', price:50000, title:'🍊 ¡Mi arma, a por el diez! 🍊', desc:'Slogan motivador sevillano.', preview:{type:'phrase',text:'🍊 ¡Mi arma, a por el diez!',color:'#fb923c'} },
    { id:'phrase-cesur', category:'phrase', price:100000, title:'🎓 Orgullo Cesur 🎓', desc:'Lema oficial para los alumnos de Cesur.', preview:{type:'phrase',text:'🎓 Orgullo Cesur',color:'#34d399'} },
];
"""

# Find the block from "const STORE_PRODUCTS" to the line with just "];"
pattern = r'const STORE_PRODUCTS = \[.*?\n\];'
content = re.sub(pattern, new_products.rstrip(), content, flags=re.DOTALL)

# ── 2. Replace STORE_BODY_CLASSES ──────────────────────────────────────────────
new_classes = """const STORE_BODY_CLASSES = [
    'theme-concentration', 'theme-memory', 'theme-reading', 'theme-night-cognitive',
    'theme-sevilla', 'theme-malaga', 'theme-forest', 'theme-sunset', 'theme-aurora', 'theme-cyber',
    'font-inter', 'font-source-sans', 'font-atkinson', 'font-noto-sans',
    'font-roboto-mono', 'font-playfair', 'font-space-grotesk',
    'btn-futuristic', 'btn-pixel', 'btn-glow', 'btn-glass', 'btn-gradient', 'btn-minimal',
    'dyslexia-active', 'high-concentration-active', 'intensive-study-active'
];"""
pattern2 = r'const STORE_BODY_CLASSES = \[.*?\];'
content = re.sub(pattern2, new_classes, content, flags=re.DOTALL)

# ── 3. Replace renderStore function ────────────────────────────────────────────
new_render = """// ─────────────────────────────────────────────
// Visual Preview Generator per product type
// ─────────────────────────────────────────────
function buildPreviewHTML(p) {
    if (!p.preview) return '';
    const { type } = p.preview;

    if (type === 'palette') {
        const cols = p.preview.colors;
        const swatches = cols.map((c, i) => {
            const s = i === 0 ? '30px' : i === 1 ? '22px' : i === 2 ? '18px' : '14px';
            return `<div style="width:${s};height:${s};background:${c};border-radius:${i===0?'7px':'50%'};flex-shrink:0;box-shadow:0 2px 6px rgba(0,0,0,0.4);"></div>`;
        }).join('');
        return `
        <div class="si-preview si-preview-palette">
            <div style="display:flex;align-items:center;gap:6px;">${swatches}</div>
            <div class="si-preview-ui-lines">
                <div style="height:6px;border-radius:3px;background:${cols[1]};margin-bottom:5px;width:75%;"></div>
                <div style="height:4px;border-radius:3px;background:${cols[2]};opacity:.5;width:55%;margin-bottom:4px;"></div>
                <div style="height:4px;border-radius:3px;background:${cols[3]};opacity:.35;width:40%;"></div>
            </div>
        </div>`;
    }

    if (type === 'font') {
        return `
        <div class="si-preview si-preview-font">
            <span class="si-font-sample" style="font-family:${p.preview.family};">${p.preview.sample}</span>
            <div class="si-font-right">
                <span class="si-font-abc" style="font-family:${p.preview.family};">ABCabc 012</span>
                <span class="si-font-tag">${p.preview.hint}</span>
            </div>
        </div>`;
    }

    if (type === 'button') {
        return `
        <div class="si-preview si-preview-button">
            <button style="${p.preview.style}padding:7px 16px;font-size:11px;cursor:default;font-family:inherit;pointer-events:none;">${p.preview.label}</button>
        </div>`;
    }

    if (type === 'phrase') {
        return `
        <div class="si-preview si-preview-phrase">
            <span style="color:${p.preview.color};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;line-height:1.4;">${p.preview.text}</span>
        </div>`;
    }

    return '';
}

// Render Shop UI by Category
function renderStore() {
    const storeGrid = document.getElementById('storeGrid');
    if (!storeGrid) return;
    storeGrid.innerHTML = '';

    const filtered = STORE_PRODUCTS.filter(p => p.category === currentStoreCategory);

    filtered.forEach(p => {
        let isPurchased = false;
        let isActive = false;

        if (p.category === 'theme') {
            isPurchased = db.purchasedThemes.includes(p.id);
            isActive = db.activeTheme === p.id || (p.id === 'theme-classic' && db.activeTheme === 'classic');
        } else if (p.category === 'font') {
            isPurchased = db.purchasedFonts.includes(p.id);
            isActive = db.activeFont === p.id || (p.id === 'font-default' && db.activeFont === 'default');
        } else if (p.category === 'button') {
            isPurchased = db.purchasedButtons.includes(p.id);
            isActive = db.activeButton === p.id || (p.id === 'btn-default' && db.activeButton === 'default');
        } else if (p.category === 'phrase') {
            isPurchased = db.purchasedPhrases.includes(p.id);
            isActive = db.activePhrase === p.id;
        }

        const itemCard = document.createElement('div');
        itemCard.className = `store-item ${isActive ? 'active-item' : ''}`;

        let btnText = 'Comprar';
        let btnClass = 'btn primary-btn store-item-btn';
        if (isActive) {
            btnText = 'Activo';
            btnClass = 'btn success-btn store-item-btn';
        } else if (isPurchased) {
            btnText = 'Activar';
            btnClass = 'btn secondary-btn store-item-btn';
        }

        const effectivelyFree = p.price === 0 || isPurchased || isActive;
        const priceLabel = effectivelyFree ? 'Gratis' : `${p.price.toLocaleString('es-ES')} €`;
        const ownedBadge = (isPurchased || isActive) && p.price > 0
            ? `<span class="si-owned-badge">&#10003; Ya adquirido</span>`
            : '';
        const activeDot = isActive
            ? `<span class="si-active-dot"></span>`
            : '';

        itemCard.innerHTML = `
            ${buildPreviewHTML(p)}
            <div class="store-item-info">
                <div class="si-title-row">
                    ${activeDot}
                    <span class="store-item-title">${p.title}</span>
                </div>
                <span class="store-item-desc">${p.desc}</span>
                <span class="store-item-price" style="${effectivelyFree && p.price > 0 ? 'color:var(--success);background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.3);' : ''}">${priceLabel}</span>
                ${ownedBadge}
            </div>
            <button class="${btnClass}" data-id="${p.id}" ${isActive ? 'disabled' : ''}>${btnText}</button>
        `;

        itemCard.querySelector('button').addEventListener('click', () => {
            handleStoreAction(p, isPurchased);
        });

        storeGrid.appendChild(itemCard);
    });
}
"""

# Replace the old renderStore function (from comment to closing brace)
pattern3 = r'// Render Shop UI by Category\nfunction renderStore\(\) \{.*?\n\}'
content = re.sub(pattern3, new_render.rstrip(), content, flags=re.DOTALL)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done. Lines:", content.count('\\n'))
