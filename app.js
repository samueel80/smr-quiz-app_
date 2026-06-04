// SEED QUESTIONS FOR REVIEW (source: 'repaso')
const SEED_REPASO_QUESTIONS = [
    // Seguridad Informática
    {
        question: "¿Cuál de los siguientes algoritmos de cifrado es asimétrico?",
        options: ["AES", "DES", "RSA", "3DES"],
        answer: "RSA",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "¿Qué puerto utiliza por defecto el protocolo SSH para conexiones seguras?",
        options: ["Puerto 80", "Puerto 21", "Puerto 22", "Puerto 443"],
        answer: "Puerto 22",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "¿Cuál es el principal objetivo de un ataque de Ransomware?",
        options: ["Robar contraseñas mediante teclado", "Cifrar archivos y pedir un rescate económico", "Inundar el servidor con tráfico falso", "Espiar la cámara web del usuario"],
        answer: "Cifrar archivos y pedir un rescate económico",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "¿Qué tipo de copia de seguridad copia únicamente los archivos modificados desde la última copia incremental?",
        options: ["Copia Completa", "Copia Diferencial", "Copia Incremental", "Copia de Espejo"],
        answer: "Copia Incremental",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "¿Qué protocolo proporciona cifrado y autenticación para la navegación web segura?",
        options: ["HTTP", "SFTP", "HTTPS", "FTPS"],
        answer: "HTTPS",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "¿Qué tipo de ataque consiste en suplantar la identidad de una entidad de confianza (como un banco) por correo electrónico para robar datos de acceso?",
        options: ["Phishing", "Man-in-the-Middle", "DDoS", "SQL Injection"],
        answer: "Phishing",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "¿Cuál de las siguientes afirmaciones describe mejor al cifrado simétrico?",
        options: ["Utiliza una clave pública para cifrar y una privada para descifrar", "Utiliza la misma clave tanto para cifrar como para descifrar los datos", "No necesita ninguna clave para realizar el descifrado", "Solo se puede aplicar a archivos de texto plano"],
        answer: "Utiliza la misma clave tanto para cifrar como para descifrar los datos",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "En la gestión de accesos, ¿qué significan las siglas del modelo de control de acceso RBAC?",
        options: ["Control de Acceso Basado en Reglas", "Control de Acceso Basado en Roles (Role-Based)", "Control de Acceso de Restricción Básica", "Control de Acceso Basado en Raíces"],
        answer: "Control de Acceso Basado en Roles (Role-Based)",
        subject: "Seguridad Informatica",
        source: "repaso"
    },

    // Sistemas Operativos en Red
    {
        question: "¿Qué servicio de Windows Server se utiliza para centralizar la gestión de usuarios, equipos y directivas de grupo (GPOs)?",
        options: ["Active Directory (Directorio Activo)", "IIS (Internet Information Services)", "DHCP Server", "Hyper-V"],
        answer: "Active Directory (Directorio Activo)",
        subject: "Sistemas Operativos en red",
        source: "repaso"
    },
    {
        question: "¿Qué comando en Linux se utiliza para cambiar los permisos de acceso de un archivo?",
        options: ["chown", "chmod", "chperm", "passwd"],
        answer: "chmod",
        subject: "Sistemas Operativos en red",
        source: "repaso"
    },
    {
        question: "En Linux, ¿en qué archivo de configuración se definen los DNS que consultará el sistema?",
        options: ["/etc/hosts", "/etc/resolv.conf", "/etc/network/interfaces", "/etc/hostname"],
        answer: "/etc/resolv.conf",
        subject: "Sistemas Operativos en red",
        source: "repaso"
    },
    {
        question: "¿Qué protocolo de red permite asignar automáticamente direcciones IP y parámetros de red a los clientes?",
        options: ["DNS", "SNMP", "DHCP", "LDAP"],
        answer: "DHCP",
        subject: "Sistemas Operativos en red",
        source: "repaso"
    },
    {
        question: "¿Qué herramienta multiplataforma permite compartir carpetas e impresoras en red entre Linux y Windows?",
        options: ["NFS", "Samba", "Apache", "SSH"],
        answer: "Samba",
        subject: "Sistemas Operativos en red",
        source: "repaso"
    },
    {
        question: "¿Cuál es el comando en sistemas Linux para transferir archivos de forma segura entre servidores mediante protocolo SSH?",
        options: ["ftp", "scp", "rsync -e ssh", "ssh-copy"],
        answer: "scp",
        subject: "Sistemas Operativos en red",
        source: "repaso"
    },
    {
        question: "¿Qué archivo en Linux asocia direcciones IP con nombres de host locales antes de consultar a servidores DNS externos?",
        options: ["/etc/resolv.conf", "/etc/hosts", "/etc/hostname", "/etc/networks"],
        answer: "/etc/hosts",
        subject: "Sistemas Operativos en red",
        source: "repaso"
    },
    {
        question: "¿Qué protocolo por defecto utiliza Active Directory para realizar consultas de directorios y autenticación de objetos de red?",
        options: ["DHCP", "DNS", "LDAP", "Kerberos"],
        answer: "LDAP",
        subject: "Sistemas Operativos en red",
        source: "repaso"
    },

    // Aplicaciones Web
    {
        question: "¿Cuál de los siguientes gestores de contenido (CMS) es el más utilizado a nivel mundial para diseño web?",
        options: ["Moodle", "WordPress", "PrestaShop", "Joomla"],
        answer: "WordPress",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "En HTML5, ¿cuál es la etiqueta correcta para insertar una imagen?",
        options: ["<img>", "<image>", "<picture>", "<src>"],
        answer: "<img>",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Qué protocolo se utiliza habitualmente para subir archivos HTML a un servidor web?",
        options: ["SMTP", "FTP", "HTTP", "SNMP"],
        answer: "FTP",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "En CSS, ¿qué propiedad se utiliza para cambiar el color de fondo de un elemento?",
        options: ["color", "font-color", "background-color", "bg-color"],
        answer: "background-color",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Qué servidor web es muy popular y conocido por su alto rendimiento procesando peticiones concurrentes de manera asíncrona?",
        options: ["IIS", "Apache", "Nginx", "Tomcat"],
        answer: "Nginx",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Qué código de estado HTTP indica que el cliente no tiene permisos para acceder al recurso solicitado (Acceso Prohibido)?",
        options: ["404 Not Found", "403 Forbidden", "500 Internal Server Error", "301 Moved Permanently"],
        answer: "403 Forbidden",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Qué lenguaje se ejecuta del lado del cliente en un navegador web para aportar interactividad y dinamismo al DOM?",
        options: ["PHP", "SQL", "JavaScript", "Python"],
        answer: "JavaScript",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Qué puerto por defecto utiliza el protocolo seguro SFTP para transferir archivos?",
        options: ["Puerto 21", "Puerto 22", "Puerto 80", "Puerto 443"],
        answer: "Puerto 22",
        subject: "Aplicaciones Web",
        source: "repaso"
    },

    // Digitalización
    {
        question: "¿Qué concepto describe a la red de objetos físicos equipados con sensores y software para conectarse y compartir datos?",
        options: ["Big Data", "Cloud Computing", "IoT (Internet de las Cosas)", "Smart Industry"],
        answer: "IoT (Internet de las Cosas)",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "En servicios en la nube, ¿cuál de los siguientes modelos ofrece software listo para el usuario final (como Gmail o Office 365)?",
        options: ["IaaS (Infraestructura como Servicio)", "PaaS (Plataforma como Servicio)", "SaaS (Software como Servicio)", "BaaS (Backup como Servicio)"],
        answer: "SaaS (Software como Servicio)",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "¿Cuáles son las conocidas 'V' que caracterizan la definición de Big Data?",
        options: ["Valor, Vector, Variación", "Volumen, Velocidad, Variedad", "Visión, Ventas, Volumen", "Velocidad, Valor, Vector"],
        answer: "Volumen, Velocidad, Variedad",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "¿Qué modelo de nube combina nubes públicas de terceros con nubes privadas del propio negocio?",
        options: ["Nube Híbrida", "Nube Comunitaria", "Nube Distribuida", "Nube Exclusiva"],
        answer: "Nube Híbrida",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "En Cloud Computing, ¿cuál de los siguientes modelos describe a la provisión de servidores físicos virtuales, almacenamiento y redes (como AWS EC2)?",
        options: ["SaaS", "PaaS", "IaaS", "DaaS"],
        answer: "IaaS",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "¿Qué característica de Big Data se refiere a la fiabilidad, calidad y veracidad de los datos recopilados?",
        options: ["Velocidad", "Variedad", "Veracidad", "Volumen"],
        answer: "Veracidad",
        subject: "Digitalización",
        source: "repaso"
    },

    // Inglés Técnico
    {
        question: "¿Qué significa el término técnico en inglés 'Backup'?",
        options: ["Retroceder página", "Copia de seguridad", "Pila de disco duro", "Cortafuegos"],
        answer: "Copia de seguridad",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "¿Cuál es la traducción correcta de 'Hard Drive'?",
        options: ["Lector de tarjetas", "Unidad de red", "Disco Duro", "Memoria RAM"],
        answer: "Disco Duro",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "En redes, ¿qué término en inglés describe la tasa de transferencia de datos efectiva a través de un canal?",
        options: ["Bandwidth (Ancho de banda)", "Ping", "Latency (Latencia)", "Throughput (Rendimiento)"],
        answer: "Throughput (Rendimiento)",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "¿Cuál es el término en inglés utilizado para denominar al software malicioso diseñado para infiltrarse en un dispositivo?",
        options: ["Malware", "Firmware", "Shareware", "Hardware"],
        answer: "Malware",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "En informática de sistemas, ¿qué significan las siglas 'OS'?",
        options: ["Office Software", "Open Source", "Operating System", "Output System"],
        answer: "Operating System",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "¿Qué significa el verbo en inglés 'to boot' en el contexto informático de un ordenador?",
        options: ["Instalar una aplicación", "Iniciar o arrancar el sistema operativo", "Borrar archivos basura", "Actualizar la BIOS"],
        answer: "Iniciar o arrancar el sistema operativo",
        subject: "Inglés",
        source: "repaso"
    },

    // Empleabilidad
    {
        question: "¿Cuál es la duración máxima ordinaria de la jornada laboral en España?",
        options: ["35 horas semanales", "40 horas semanales en promedio de cómputo anual", "45 horas semanales", "38 horas semanales"],
        answer: "40 horas semanales en promedio de cómputo anual",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué tipo de contrato laboral tiene como objeto la realización de trabajos de naturaleza estacional o de temporada?",
        options: ["Contrato de formación en alternancia", "Contrato indefinido adscrito a obra", "Contrato fijo-discontinuo", "Contrato a tiempo parcial temporal"],
        answer: "Contrato fijo-discontinuo",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cómo se denomina al salario mínimo garantizado por ley que un trabajador debe percibir por una jornada ordinaria de trabajo?",
        options: ["Salario Base", "Salario Mínimo Interprofesional (SMI)", "Pagas Extraordinarias", "Plus de Convenio"],
        answer: "Salario Mínimo Interprofesional (SMI)",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué organismo público se encarga de la afiliación, altas, bajas y cotizaciones de los trabajadores en España?",
        options: ["El Servicio Público de Empleo Estatal (SEPE)", "La Tesorería General de la Seguridad Social (TGSS)", "El Ministerio de Trabajo", "La Inspección de Trabajo"],
        answer: "La Tesorería General de la Seguridad Social (TGSS)",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "En el diseño de modelos de negocio (Canvas), ¿cómo se llama al bloque que define el valor diferencial que ofrecemos al cliente?",
        options: ["Relaciones con Clientes", "Propuesta de Valor", "Segmentos de Clientes", "Canales de Distribución"],
        answer: "Propuesta de Valor",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Qué tipo de sociedad mercantil requiere un capital social mínimo de 3.000 euros para su constitución?",
        options: ["Sociedad Anónima (S.A.)", "Sociedad Colectiva", "Sociedad de Responsabilidad Limitada (S.L.)", "Sociedad Cooperativa"],
        answer: "Sociedad de Responsabilidad Limitada (S.L.)",
        subject: "Empleabilidad II",
        source: "repaso"
    },

    // HLC (Horas de Libre Configuración)
    {
        question: "¿Qué herramienta se utiliza para automatizar tareas repetitivas mediante scripts que se ejecutan en momentos programados en sistemas Unix/Linux?",
        options: ["Samba", "cron / crontab", "Active Directory", "FTP Server"],
        answer: "cron / crontab",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "¿Qué protocolo de red se utiliza para la sincronización horaria de los relojes de los dispositivos y servidores?",
        options: ["NTP", "SNMP", "DNS", "SMTP"],
        answer: "NTP",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    }
];

// STATE AND DATABASE MANAGEMENT
let db = {
    questions: [],
    starred: [], 
    history: [], 
    soundEnabled: true,
    streak: 0,
    lastStudyDate: null, // YYYY-MM-DD
    questionStats: {} // normQ -> { attempts: 0, correct: 0 }
};

let session = {
    questions: [],
    currentIndex: 0,
    answers: {},
    mode: 'practice',
    timeLimit: 20,
    timerInterval: null,
    timeRemaining: 0,
    timeSpent: 0,
    selectedSubjects: [],
    sourceFilter: 'all' // 'all', 'oficial', 'repaso'
};

// Achievements definition
const ACHIEVEMENTS = [
    { id: 'first_test', title: 'Primer Paso 👣', desc: 'Completa tu primer cuestionario.', condition: () => db.history.length >= 1 },
    { id: 'perfect_score', title: 'Examen Perfecto 💯', desc: 'Consigue un 100% de aciertos.', condition: () => db.history.some(h => h.percent === 100) },
    { id: 'streak_3', title: 'Constancia 🔥', desc: 'Alcanza una racha de 3 días de estudio.', condition: () => db.streak >= 3 },
    { id: 'streak_7', title: 'Hábito de Hierro 🛡️', desc: 'Alcanza una racha de 7 días de estudio.', condition: () => db.streak >= 7 },
    { id: 'starred_10', title: 'Coleccionista ⭐', desc: 'Guarda 10 o más preguntas favoritas.', condition: () => db.starred.length >= 10 },
    { id: 'repaso_master', title: 'Mente Curiosa 🧠', desc: 'Completa un test de solo repaso.', condition: () => db.history.some(h => h.mode !== 'smart' && h.subjects.includes("Repaso") || h.subjects === "Inglés" || h.subjects === "Digitalización") }
];

// Helper: Merges user DB questions with hardcoded seed review questions
let cachedAllQuestions = null;
function getAllQuestions() {
    if (cachedAllQuestions) return cachedAllQuestions;
    const qList = Array.isArray(db.questions) ? db.questions : [];
    const oficials = qList.map(q => ({ ...q, source: q.source || 'oficial' }));
    cachedAllQuestions = [...oficials, ...SEED_REPASO_QUESTIONS];
    return cachedAllQuestions;
}

// Audio Engine
let audioCtx = null;
function playSound(type) {
    if (!db.soundEnabled) return;
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        if (type === 'correct') {
            osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
            osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.2);
        } else if (type === 'wrong') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.25);
        } else if (type === 'victory') {
            const notes = [261.63, 329.63, 392.00, 523.25];
            notes.forEach((freq, idx) => {
                const o = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                o.connect(g);
                g.connect(audioCtx.destination);
                o.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.1);
                g.gain.setValueAtTime(0.1, audioCtx.currentTime + idx * 0.1);
                g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + idx * 0.1 + 0.3);
                o.start(audioCtx.currentTime + idx * 0.1);
                o.stop(audioCtx.currentTime + idx * 0.1 + 0.3);
            });
        }
    } catch (e) {
        console.warn("AudioContext init warning");
    }
}

// HTML5 Canvas Confetti
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animationFrameId = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class ConfettiParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 20;
        this.size = Math.random() * 8 + 6;
        this.color = `hsl(${Math.random() * 360}, 90%, 60%)`;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * -12 - 8;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += 0.25;
        this.rotation += this.rotationSpeed;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
    }
}

function startConfetti() {
    cancelAnimationFrame(animationFrameId);
    particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push(new ConfettiParticle());
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, idx) => {
        p.update();
        p.draw();
        if (p.y > canvas.height + 20 && p.speedY > 0) {
            particles.splice(idx, 1);
        }
    });
    if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(animateConfetti);
    }
}

// Elements
const dashboardScreen = document.getElementById('dashboardScreen');
const testScreen = document.getElementById('testScreen');
const resultsScreen = document.getElementById('resultsScreen');
const studyScreen = document.getElementById('studyScreen');

const totalQuestionsCount = document.getElementById('totalQuestionsCount');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundIcon = document.getElementById('soundIcon');
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const clearDatabaseBtn = document.getElementById('clearDatabaseBtn');

// Dashboard Stats
const subjectsCount = document.getElementById('subjectsCount');
const starredCount = document.getElementById('starredCount');
const avgScore = document.getElementById('avgScore');
const achievementsCount = document.getElementById('achievementsCount');
const subjectsGrid = document.getElementById('subjectsGrid');
const historyList = document.getElementById('historyList');
const streakCount = document.getElementById('streakCount');
const achievementsGrid = document.getElementById('achievementsGrid');

// Params
const sourceChips = document.getElementById('sourceChips');
const questionLimitChips = document.getElementById('questionLimitChips');
const examTimerGroup = document.getElementById('examTimerGroup');
const timeLimitRange = document.getElementById('timeLimitRange');
const timeLimitLabel = document.getElementById('timeLimitLabel');
const searchFilterInput = document.getElementById('searchFilter');
const startTestBtn = document.getElementById('startTestBtn');
const quickChallengeBtn = document.getElementById('quickChallengeBtn');
const selectAllSubjectsBtn = document.getElementById('selectAllSubjectsBtn');
const deselectAllSubjectsBtn = document.getElementById('deselectAllSubjectsBtn');

// Backups
const exportBackupBtn = document.getElementById('exportBackupBtn');
const importBackupBtn = document.getElementById('importBackupBtn');
const backupFileInput = document.getElementById('backupFileInput');

// Test Runner Elements
const currentQuestionNum = document.getElementById('currentQuestionNum');
const questionSourceTag = document.getElementById('questionSourceTag');
const bookmarkActiveBtn = document.getElementById('bookmarkActiveBtn');
const testTimer = document.getElementById('testTimer');
const progressBar = document.getElementById('progressBar');
const questionSubjectTag = document.getElementById('questionSubjectTag');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const explanationBox = document.getElementById('explanationBox');
const explanationText = document.getElementById('explanationText');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');

// Results Screen Elements
const scorePercent = document.getElementById('scorePercent');
const scoreText = document.getElementById('scoreText');
const timeSpentVal = document.getElementById('timeSpentVal');
const correctAnswersVal = document.getElementById('correctAnswersVal');
const wrongAnswersVal = document.getElementById('wrongAnswersVal');
const reviewFilterChips = document.getElementById('reviewFilterChips');
const reviewContainer = document.getElementById('reviewContainer');
const restartBtn = document.getElementById('restartBtn');

// Study Guide Elements
const studyGuideBtn = document.getElementById('studyGuideBtn');
const backToDashboardBtn = document.getElementById('backToDashboardBtn');
const studySubjectSelect = document.getElementById('studySubjectSelect');
const studySearch = document.getElementById('studySearch');
const studyOficialCount = document.getElementById('studyOficialCount');
const studyRepasoCount = document.getElementById('studyRepasoCount');
const studyOficialList = document.getElementById('studyOficialList');
const studyRepasoList = document.getElementById('studyRepasoList');

// SHUFFLE HELPER
function shuffleArray(arr) {
    if (!arr || !Array.isArray(arr)) return [];
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// LOAD & SAVE
function loadDatabase() {
    const saved = localStorage.getItem('smr_questions_db_pro');
    if (saved) {
        try {
            db = JSON.parse(saved);
            // Default structures migrations
            if (!db.questions) db.questions = [];
            if (!db.starred) db.starred = [];
            if (!db.history) db.history = [];
            if (db.soundEnabled === undefined) db.soundEnabled = true;
            if (db.streak === undefined) db.streak = 0;
            if (db.lastStudyDate === undefined) db.lastStudyDate = null;
            if (db.questionStats === undefined) db.questionStats = {};

            // Clean subject names automatically
            let hasChanges = false;
            db.questions.forEach(q => {
                if (q.subject) {
                    let cleaned = q.subject
                        .replace(/_\d+/g, '')
                        .replace(/\s+\d+/g, '')
                        .replace(/\d+/g, '')
                        .replace(/_/g, ' ')
                        .trim();
                    
                    cleaned = cleaned.split(/\b(ud|uds|unidades|unidad|tema|temas)\b/i)[0].trim();
                    
                    if (cleaned.toUpperCase() === "HCL" || cleaned.toUpperCase() === "HLC") {
                        cleaned = "HLC (Horas de Libre Configuración)";
                    }
                    
                    if (q.subject !== cleaned) {
                        q.subject = cleaned;
                        hasChanges = true;
                    }
                }
            });
            
            if (hasChanges) {
                localStorage.setItem('smr_questions_db_pro', JSON.stringify(db));
            }

            // Streak validity verification on startup
            verifyStreakValidity();

        } catch (e) {
            console.error("DB Load failed", e);
        }
    }
    updateDashboardUI();
}

function saveDatabase() {
    cachedAllQuestions = null;
    localStorage.setItem('smr_questions_db_pro', JSON.stringify(db));
    updateDashboardUI();
}

// Streak validity checker
function verifyStreakValidity() {
    if (!db.lastStudyDate) return;
    const today = getTodayDateString();
    const yesterday = getYesterdayDateString();

    if (db.lastStudyDate !== today && db.lastStudyDate !== yesterday) {
        // Reset streak if missed study day
        db.streak = 0;
        localStorage.setItem('smr_questions_db_pro', JSON.stringify(db));
    }
}

function getTodayDateString() {
    const d = new Date();
    return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`;
}

function getYesterdayDateString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`;
}

// UI UPDATE
function updateDashboardUI() {
    const totalList = getAllQuestions();
    totalQuestionsCount.textContent = totalList.length;
    starredCount.textContent = db.starred.length;
    soundIcon.textContent = db.soundEnabled ? "🔊" : "🔇";
    streakCount.textContent = db.streak;

    if (Array.isArray(db.history) && db.history.length > 0) {
        const sum = db.history.reduce((acc, curr) => acc + (curr.percent || 0), 0);
        avgScore.textContent = `${Math.round(sum / db.history.length)}%`;
    } else {
        avgScore.textContent = '0%';
    }

    populateSubjectsList();
    populateHistoryList();
    renderAchievements();
    validateStartButton();
}

function populateSubjectsList() {
    subjectsGrid.innerHTML = '';
    const counts = {};
    const correctStats = {};
    const attemptStats = {};
    
    // Filter pool
    let pool = getAllQuestions();
    if (session.sourceFilter === 'oficial') {
        pool = pool.filter(q => q.source === 'oficial');
    } else if (session.sourceFilter === 'repaso') {
        pool = pool.filter(q => q.source === 'repaso');
    }

    let currentStarredCount = 0;
    const safeStarred = Array.isArray(db.starred) ? db.starred : [];
    pool.forEach(q => {
        const sub = q.subject || "Sin clasificar";
        counts[sub] = (counts[sub] || 0) + 1;

        // Calculate mastery stats per subject
        const normQ = q.question ? normalizeString(q.question) : "unknown";
        const stats = (db.questionStats && db.questionStats[normQ]) ? db.questionStats[normQ] : { attempts: 0, correct: 0 };
        correctStats[sub] = (correctStats[sub] || 0) + stats.correct;
        attemptStats[sub] = (attemptStats[sub] || 0) + stats.attempts;
        
        if (safeStarred.includes(normQ)) {
            currentStarredCount++;
        }
    });

    const unique = Object.keys(counts).sort();
    subjectsCount.textContent = unique.length;

    // Starred card
    if (currentStarredCount > 0) {
        const isSel = session.selectedSubjects.includes('__starred__');
        const card = document.createElement('div');
        card.className = `subject-card ${isSel ? 'selected' : ''}`;
        card.innerHTML = `
            <span class="subject-card-name">⭐ Favoritos</span>
            <span class="subject-card-count">${currentStarredCount} preguntas guardadas</span>
        `;
        card.addEventListener('click', () => toggleSubjectSelection('__starred__'));
        subjectsGrid.appendChild(card);
    }

    unique.forEach(sub => {
        const isSel = session.selectedSubjects.includes(sub);
        const card = document.createElement('div');
        card.className = `subject-card ${isSel ? 'selected' : ''}`;
        
        // Calculate mastery percent
        const attempts = attemptStats[sub] || 0;
        const correct = correctStats[sub] || 0;
        const percent = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

        card.innerHTML = `
            <div>
                <span class="subject-card-name">${sub}</span>
                <span class="subject-card-count">${counts[sub]} preguntas</span>
            </div>
            <div class="subject-mastery-container">
                <div class="subject-mastery-info">
                    <span>Dominio</span>
                    <span>${percent}%</span>
                </div>
                <div class="subject-mastery-bar">
                    <div class="subject-mastery-fill" style="width: ${percent}%;"></div>
                </div>
            </div>
        `;
        card.addEventListener('click', () => {
            if (session.selectedSubjects.includes('__starred__')) {
                session.selectedSubjects = session.selectedSubjects.filter(s => s !== '__starred__');
            }
            toggleSubjectSelection(sub);
        });
        subjectsGrid.appendChild(card);
    });

    if (pool.length === 0) {
        subjectsGrid.innerHTML = `<p class="empty-history" style="grid-column: 1/-1;">No hay preguntas para los filtros seleccionados.</p>`;
    }
}

function toggleSubjectSelection(sub) {
    if (sub === '__starred__') {
        session.selectedSubjects = session.selectedSubjects.includes('__starred__') ? [] : ['__starred__'];
    } else {
        if (session.selectedSubjects.includes(sub)) {
            session.selectedSubjects = session.selectedSubjects.filter(s => s !== sub);
        } else {
            session.selectedSubjects.push(sub);
        }
    }
    populateSubjectsList();
    validateStartButton();
}

function populateHistoryList() {
    historyList.innerHTML = '';
    if (db.history.length === 0) {
        historyList.innerHTML = `<p class="empty-history">Aún no has realizado ningún test. ¡Comienza ahora!</p>`;
        return;
    }
    const last = [...db.history].reverse().slice(0, 10);
    last.forEach(h => {
        const item = document.createElement('div');
        item.className = 'history-item';
        const isPass = h.percent >= 50;
        item.innerHTML = `
            <div class="history-item-info">
                <span class="history-item-subject">${h.subjects}</span>
                <span class="history-item-date">${h.date} - ${h.mode === 'practice' ? 'Práctica' : h.mode === 'smart' ? 'Inteligente' : 'Examen'}</span>
            </div>
            <div class="history-item-score ${isPass ? 'pass' : 'fail'}">
                ${h.score}/${h.total} (${h.percent}%)
            </div>
        `;
        historyList.appendChild(item);
    });
}

function renderAchievements() {
    achievementsGrid.innerHTML = '';
    let unlockedCount = 0;

    ACHIEVEMENTS.forEach(ach => {
        const unlocked = ach.condition();
        if (unlocked) unlockedCount++;

        const card = document.createElement('div');
        card.className = `achievement-badge-card ${unlocked ? 'unlocked' : ''}`;
        
        let badgeIcon = '🔒';
        if (unlocked) {
            if (ach.id === 'first_test') badgeIcon = '👣';
            if (ach.id === 'perfect_score') badgeIcon = '💯';
            if (ach.id === 'streak_3') badgeIcon = '🔥';
            if (ach.id === 'streak_7') badgeIcon = '🛡️';
            if (ach.id === 'starred_10') badgeIcon = '⭐';
            if (ach.id === 'repaso_master') badgeIcon = '🧠';
        }

        card.innerHTML = `
            <span class="badge-icon">${badgeIcon}</span>
            <span class="badge-title">${ach.title}</span>
            <span class="badge-desc">${ach.desc}</span>
        `;
        achievementsGrid.appendChild(card);
    });

    achievementsCount.textContent = `${unlockedCount}/${ACHIEVEMENTS.length}`;
}

function validateStartButton() {
    startTestBtn.disabled = session.selectedSubjects.length === 0;
}

// SOURCE CHIPS FILTER
document.querySelectorAll('#sourceChips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#sourceChips .chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        session.sourceFilter = btn.dataset.value;
        session.selectedSubjects = [];
        populateSubjectsList();
        validateStartButton();
    });
});

// SOUND & RESET
soundToggleBtn.addEventListener('click', () => {
    db.soundEnabled = !db.soundEnabled;
    soundIcon.textContent = db.soundEnabled ? "🔊" : "🔇";
    saveDatabase();
});

clearDatabaseBtn.addEventListener('click', () => {
    if (confirm('¿Seguro que deseas eliminar todas las preguntas importadas y restaurar estadísticas?')) {
        db = { questions: [], starred: [], history: [], soundEnabled: true, streak: 0, lastStudyDate: null, questionStats: {} };
        saveDatabase();
    }
});

// MULTI-SELECTION ASSIGNMENTS
selectAllSubjectsBtn.addEventListener('click', () => {
    let pool = getAllQuestions();
    if (session.sourceFilter === 'oficial') pool = pool.filter(q => q.source === 'oficial');
    if (session.sourceFilter === 'repaso') pool = pool.filter(q => q.source === 'repaso');
    session.selectedSubjects = Array.from(new Set(pool.map(q => q.subject || "Sin clasificar")));
    populateSubjectsList();
    validateStartButton();
});

deselectAllSubjectsBtn.addEventListener('click', () => {
    session.selectedSubjects = [];
    populateSubjectsList();
    validateStartButton();
});

// TEST PARAMETERS (CHIPS)
document.querySelectorAll('#modeChips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#modeChips .chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        session.mode = btn.dataset.value;
        examTimerGroup.style.display = session.mode === 'exam' ? 'flex' : 'none';
    });
});

document.querySelectorAll('#questionLimitChips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#questionLimitChips .chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

timeLimitRange.addEventListener('input', () => {
    timeLimitLabel.textContent = timeLimitRange.value;
    session.timeLimit = parseInt(timeLimitRange.value, 10);
});

// BACKUP PROGRESS
exportBackupBtn.addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `copia_progreso_smr_${Date.now()}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
});

importBackupBtn.addEventListener('click', () => {
    backupFileInput.click();
});

backupFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const parsed = JSON.parse(event.target.result);
                if (parsed.questions && parsed.starred && parsed.history) {
                    db = parsed;
                    saveDatabase();
                    alert("¡Copia de seguridad restaurada correctamente!");
                } else {
                    alert("Formato de copia no válido.");
                }
            } catch (err) {
                alert("Error al abrir archivo de copia.");
            }
        };
        reader.readAsText(file);
    }
});

// DRAG AND DROP MOODLE UPLOAD
dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) processFiles(e.target.files);
});
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) processFiles(e.dataTransfer.files);
});

function processFiles(files) {
    let loadedCount = 0;
    let newCount = 0;
    let duplicateCount = 0;

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const arr = JSON.parse(event.target.result);
                if (Array.isArray(arr)) {
                    arr.forEach(q => {
                        if (q.question && Array.isArray(q.options) && q.answer !== undefined) {
                            const normText = normalizeString(q.question);
                            const exists = db.questions.some(item => normalizeString(item.question) === normText);
                            
                            if (!exists) {
                                let fileSubject = file.name
                                    .replace('preguntas_', '')
                                    .replace('.json', '')
                                    .replace(/_\d+/g, '')
                                    .replace(/\d+/g, '')
                                    .replace(/_/g, ' ')
                                    .trim();

                                let finalSubject = q.subject || fileSubject || "Sin clasificar";
                                finalSubject = finalSubject
                                    .replace(/_\d+/g, '')
                                    .replace(/\s+\d+/g, '')
                                    .replace(/\d+/g, '')
                                    .replace(/_/g, ' ')
                                    .trim();
                                
                                finalSubject = finalSubject.split(/\b(ud|uds|unidades|unidad|tema|temas)\b/i)[0].trim();
                                
                                if (finalSubject.toUpperCase() === "HCL" || finalSubject.toUpperCase() === "HLC") {
                                    finalSubject = "HLC (Horas de Libre Configuración)";
                                }

                                db.questions.push({
                                    question: q.question,
                                    options: q.options,
                                    answer: q.answer,
                                    subject: finalSubject,
                                    source: "oficial"
                                });
                                newCount++;
                            } else {
                                duplicateCount++;
                            }
                        }
                    });
                }
                loadedCount++;
                if (loadedCount === files.length) {
                    saveDatabase();
                    alert(`¡Importación completa!\nPreguntas nuevas: ${newCount}\nDuplicados omitidos: ${duplicateCount}`);
                }
            } catch (err) {
                alert(`Error en el formato de ${file.name}.\nDetalle: ${err.message}\n\nRevisa que el archivo JSON esté bien escrito (comillas dobles, comas, etc).`);
            }
        };
        reader.readAsText(file);
    });
}

function normalizeString(str) {
    return str.toLowerCase()
              .replace(/[^a-z0-9áéíóúüñ]/g, '')
              .trim();
}

// START TEST
startTestBtn.addEventListener('click', () => {
    let pool = getAllQuestions();
    
    // Filter source
    if (session.sourceFilter === 'oficial') pool = pool.filter(q => q.source === 'oficial');
    if (session.sourceFilter === 'repaso') pool = pool.filter(q => q.source === 'repaso');

    // Filter subjects
    if (session.selectedSubjects.includes('__starred__')) {
        pool = pool.filter(q => db.starred.includes(normalizeString(q.question)));
    } else {
        pool = pool.filter(q => session.selectedSubjects.includes(q.subject || "Sin clasificar"));
    }

    // Filter query
    const query = normalizeString(searchFilterInput.value);
    if (query) {
        pool = pool.filter(q => normalizeString(q.question).includes(query));
    }

    if (pool.length === 0) {
        alert("No hay preguntas para los parámetros seleccionados.");
        return;
    }

    // Adaptive spacing prioritization for SMART MODE
    if (session.mode === 'smart') {
        pool.sort((a, b) => {
            const statsA = db.questionStats[normalizeString(a.question)] || { attempts: 0, correct: 0 };
            const statsB = db.questionStats[normalizeString(b.question)] || { attempts: 0, correct: 0 };

            // Unseen questions first
            if (statsA.attempts === 0 && statsB.attempts > 0) return -1;
            if (statsB.attempts === 0 && statsA.attempts > 0) return 1;

            // Incorrect ones first
            const rateA = statsA.attempts > 0 ? statsA.correct / statsA.attempts : 0;
            const rateB = statsB.attempts > 0 ? statsB.correct / statsB.attempts : 0;
            return rateA - rateB;
        });
    } else {
        pool = shuffleArray(pool);
    }

    const limitBtn = questionLimitChips.querySelector('.chip-btn.active');
    const limitVal = limitBtn.dataset.value;
    const limit = limitVal === 'all' ? pool.length : Math.min(parseInt(limitVal, 10), pool.length);

    session.questions = pool.slice(0, limit).map(q => {
        return {
            ...q,
            shuffledOptions: shuffleArray(q.options)
        };
    });

    session.currentIndex = 0;
    session.answers = {};
    session.timeSpent = 0;

    showScreen(testScreen);
    setupTimer();
    renderQuestion();
});

// QUICK CHALLENGE ⚡
quickChallengeBtn.addEventListener('click', () => {
    let pool = shuffleArray(getAllQuestions());
    if (pool.length === 0) {
        alert("Carga algunas preguntas primero para jugar un desafío.");
        return;
    }

    session.questions = pool.slice(0, 10).map(q => {
        return {
            ...q,
            shuffledOptions: shuffleArray(q.options)
        };
    });

    session.currentIndex = 0;
    session.answers = {};
    session.timeSpent = 0;
    session.mode = 'exam';
    session.timeLimit = 3.5; // 210 seconds total

    showScreen(testScreen);
    setupTimer();
    renderQuestion();
});

// TIMER
function setupTimer() {
    clearInterval(session.timerInterval);
    if (session.mode === 'exam') {
        testTimer.style.display = 'inline-block';
        session.timeRemaining = Math.round(session.timeLimit * 60);
        updateTimerDisplay();

        session.timerInterval = setInterval(() => {
            session.timeRemaining--;
            session.timeSpent++;
            updateTimerDisplay();
            
            if (session.timeRemaining <= 0) {
                clearInterval(session.timerInterval);
                alert("¡Desafío finalizado por tiempo!");
                finishTest();
            }
        }, 1000);
    } else {
        testTimer.style.display = 'none';
        session.timerInterval = setInterval(() => {
            session.timeSpent++;
        }, 1000);
    }
}

function updateTimerDisplay() {
    const mins = Math.floor(session.timeRemaining / 60);
    const secs = session.timeRemaining % 60;
    testTimer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// RENDER QUESTION
function renderQuestion() {
    const q = session.questions[session.currentIndex];
    currentQuestionNum.textContent = `Pregunta ${session.currentIndex + 1} de ${session.questions.length}`;
    progressBar.style.width = `${((session.currentIndex + 1) / session.questions.length) * 100}%`;
    questionSubjectTag.textContent = q.subject || "Sin clasificar";
    questionText.textContent = q.question;

    questionSourceTag.textContent = q.source === 'repaso' ? 'Repaso' : 'Oficial';
    questionSourceTag.className = `source-badge ${q.source === 'repaso' ? 'repaso' : 'oficial'}`;

    const isStarred = db.starred.includes(normalizeString(q.question));
    bookmarkActiveBtn.classList.toggle('active', isStarred);

    bookmarkActiveBtn.onclick = () => {
        const normQ = normalizeString(q.question);
        if (db.starred.includes(normQ)) {
            db.starred = db.starred.filter(s => s !== normQ);
            bookmarkActiveBtn.classList.remove('active');
        } else {
            db.starred.push(normQ);
            bookmarkActiveBtn.classList.add('active');
        }
        saveDatabase();
    };

    optionsContainer.innerHTML = '';
    explanationBox.style.display = 'none';

    q.shuffledOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-item';
        btn.textContent = opt;

        const selectedOpt = session.answers[session.currentIndex];
        if (selectedOpt === opt) btn.classList.add('selected');

        if (session.mode === 'practice' && selectedOpt !== undefined) {
            applyFeedbackUI(btn, opt, q.answer);
            showExplanationBox(q.answer);
        }

        btn.onclick = () => {
            if (session.mode === 'practice' && session.answers[session.currentIndex] !== undefined) return;
            session.answers[session.currentIndex] = opt;
            document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
            btn.classList.add('selected');

            if (session.mode === 'practice') {
                applyFeedbackUI(btn, opt, q.answer);
                showExplanationBox(q.answer);
                if (normalizeString(opt) === normalizeString(q.answer)) {
                    playSound('correct');
                } else {
                    playSound('wrong');
                }
            }
        };
        optionsContainer.appendChild(btn);
    });

    prevBtn.style.visibility = session.currentIndex > 0 ? 'visible' : 'hidden';
    if (session.currentIndex === session.questions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        finishBtn.style.display = 'none';
    }
}

function applyFeedbackUI(element, text, correctText) {
    const isCorrect = normalizeString(text) === normalizeString(correctText);
    if (isCorrect) {
        element.classList.add('correct');
        element.innerHTML = `🟢 ${text}`;
    } else {
        element.classList.add('wrong');
        element.innerHTML = `🔴 ${text}`;
        setTimeout(() => {
            document.querySelectorAll('.option-item').forEach(el => {
                if (normalizeString(el.textContent) === normalizeString(correctText)) {
                    el.classList.add('correct');
                    el.innerHTML = `🟢 ${el.textContent}`;
                }
            });
        }, 80);
    }
}

function showExplanationBox(correctText) {
    explanationBox.style.display = 'flex';
    explanationText.textContent = correctText;
}

prevBtn.addEventListener('click', () => {
    if (session.currentIndex > 0) {
        session.currentIndex--;
        renderQuestion();
    }
});
nextBtn.addEventListener('click', () => {
    if (session.currentIndex < session.questions.length - 1) {
        session.currentIndex++;
        renderQuestion();
    }
});
finishBtn.addEventListener('click', () => {
    const unans = session.questions.length - Object.keys(session.answers).length;
    if (unans > 0 && (session.mode === 'exam' || session.mode === 'smart')) {
        if (!confirm(`Tienes ${unans} preguntas sin responder. ¿Finalizar examen?`)) return;
    }
    finishTest();
});

// COMPLETION
function finishTest() {
    clearInterval(session.timerInterval);
    let correct = 0;
    
    session.questions.forEach((q, idx) => {
        const choice = session.answers[idx];
        const normQ = normalizeString(q.question);
        
        // Save detailed retrieval stats
        if (!db.questionStats[normQ]) {
            db.questionStats[normQ] = { attempts: 0, correct: 0 };
        }
        db.questionStats[normQ].attempts += 1;

        const isCorrect = choice && normalizeString(choice) === normalizeString(q.answer);
        if (isCorrect) {
            correct++;
            db.questionStats[normQ].correct += 1;
        }
    });

    const percent = Math.round((correct / session.questions.length) * 100);

    // Save Daily Study Streak Progress
    const todayStr = getTodayDateString();
    const yesterdayStr = getYesterdayDateString();

    if (db.lastStudyDate !== todayStr) {
        if (db.lastStudyDate === yesterdayStr) {
            db.streak += 1;
        } else {
            db.streak = 1;
        }
        db.lastStudyDate = todayStr;
    }

    const dateStr = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
    let subjectLabel = session.selectedSubjects.includes('__starred__') ? "Favoritos" : 
                       (session.selectedSubjects.length === 1 ? session.selectedSubjects[0] : `Mezcla (${session.selectedSubjects.length} asig.)`);

    db.history.push({
        date: dateStr,
        score: correct,
        total: session.questions.length,
        percent: percent,
        subjects: subjectLabel,
        mode: session.mode,
        timeSpent: session.timeSpent
    });
    saveDatabase();

    if (percent >= 50) {
        playSound('victory');
        startConfetti();
    } else {
        playSound('wrong');
    }

    scorePercent.textContent = `${percent}%`;
    scoreText.textContent = `Has acertado ${correct} de ${session.questions.length} preguntas.`;

    const mins = Math.floor(session.timeSpent / 60);
    const secs = session.timeSpent % 60;
    timeSpentVal.textContent = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

    correctAnswersVal.textContent = correct;
    wrongAnswersVal.textContent = session.questions.length - correct;

    document.querySelector('.score-circle').style.background = `conic-gradient(var(--success) ${percent * 3.6}deg, var(--border-color) 0deg)`;
    renderReviewList('all');
    showScreen(resultsScreen);
}

function renderReviewList(filter) {
    reviewContainer.innerHTML = '';
    document.querySelectorAll('#reviewFilterChips .chip-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    session.questions.forEach((q, idx) => {
        const choice = session.answers[idx] || "No contestada";
        const isCorrect = choice !== "No contestada" && normalizeString(choice) === normalizeString(q.answer);

        if (filter === 'correct' && !isCorrect) return;
        if (filter === 'wrong' && isCorrect) return;

        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'item-correct' : 'item-wrong'}`;
        const isStarred = db.starred.includes(normalizeString(q.question));

        item.innerHTML = `
            <div class="review-item-header">
                <span class="review-qtext">${idx + 1}. [${q.source === 'repaso' ? 'Repaso' : 'Oficial'}] ${q.question}</span>
                <button class="star-btn ${isStarred ? 'active' : ''}">⭐</button>
            </div>
            <div class="review-ans-info">
                <div class="review-user-ans ${isCorrect ? 'user-correct' : 'user-wrong'}">
                    <strong>Tu respuesta:</strong> ${choice}
                </div>
                ${!isCorrect ? `<div class="review-correct-ans"><strong>Respuesta correcta:</strong> ${q.answer}</div>` : ''}
            </div>
        `;

        item.querySelector('.star-btn').addEventListener('click', (e) => {
            const normQ = normalizeString(q.question);
            const btn = e.target;
            if (db.starred.includes(normQ)) {
                db.starred = db.starred.filter(s => s !== normQ);
                btn.classList.remove('active');
            } else {
                db.starred.push(normQ);
                btn.classList.add('active');
            }
            saveDatabase();
        });

        reviewContainer.appendChild(item);
    });
}

document.querySelectorAll('#reviewFilterChips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => renderReviewList(btn.dataset.filter));
});

restartBtn.addEventListener('click', () => {
    showScreen(dashboardScreen);
    updateDashboardUI();
});

// STUDY GUIDE
studyGuideBtn.addEventListener('click', () => {
    showScreen(studyScreen);
    populateStudySubjects();
    renderStudyList();
});

backToDashboardBtn.addEventListener('click', () => {
    showScreen(dashboardScreen);
    updateDashboardUI();
});

function populateStudySubjects() {
    const list = getAllQuestions();
    const subjects = Array.from(new Set(list.map(q => q.subject || "Sin clasificar"))).sort();
    
    studySubjectSelect.innerHTML = '';
    subjects.forEach(sub => {
        const opt = document.createElement('option');
        opt.value = sub;
        opt.textContent = sub;
        studySubjectSelect.appendChild(opt);
    });
}

studySubjectSelect.addEventListener('change', renderStudyList);
studySearch.addEventListener('input', renderStudyList);

function renderStudyList() {
    const selectedSub = studySubjectSelect.value;
    const query = normalizeString(studySearch.value);
    
    const list = getAllQuestions().filter(q => {
        const matchSub = (q.subject || "Sin clasificar") === selectedSub;
        const matchQuery = query ? normalizeString(q.question).includes(query) : true;
        return matchSub && matchQuery;
    });

    studyOficialList.innerHTML = '';
    studyRepasoList.innerHTML = '';

    let oficialCount = 0;
    let repasoCount = 0;

    list.forEach(q => {
        const card = document.createElement('div');
        card.className = 'study-card';
        
        let optionsHTML = '';
        q.options.forEach(opt => {
            const isCorrect = normalizeString(opt) === normalizeString(q.answer);
            optionsHTML += `<li class="study-card-opt-item ${isCorrect ? 'correct-ans' : ''}">${isCorrect ? '✅ ' : ''}${opt}</li>`;
        });

        card.innerHTML = `
            <div class="study-card-q">${q.question}</div>
            <ul class="study-card-options">
                ${optionsHTML}
            </ul>
        `;

        if (q.source === 'repaso') {
            studyRepasoList.appendChild(card);
            repasoCount++;
        } else {
            studyOficialList.appendChild(card);
            oficialCount++;
        }
    });

    studyOficialCount.textContent = oficialCount;
    studyRepasoCount.textContent = repasoCount;

    if (oficialCount === 0) {
        studyOficialList.innerHTML = '<p class="empty-history">No hay preguntas oficiales importadas de esta asignatura.</p>';
    }
    if (repasoCount === 0) {
        studyRepasoList.innerHTML = '<p class="empty-history">No hay preguntas de repaso generadas para esta asignatura.</p>';
    }
}

// SCREEN TOGGLE
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// Pestañas móviles de la Guía de Estudio
document.querySelectorAll('#studyTabs .study-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#studyTabs .study-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const tab = btn.dataset.tab;
        document.querySelector('.study-column.column-oficial').classList.toggle('active', tab === 'oficial');
        document.querySelector('.study-column.column-repaso').classList.toggle('active', tab === 'repaso');
    });
});

// INITIAL STARTUP
loadDatabase();
