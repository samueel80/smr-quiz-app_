#!/usr/bin/env python3
import json
import re

PREGUNTAS_JSON = "preguntas.json"
PREGUNTAS_JS = "preguntas.js"

def normalize_text(text):
    if not text:
        return ""
    text = text.lower().strip()
    # remove accents and punctuation
    text = re.sub(r'[áàäâ]', 'a', text)
    text = re.sub(r'[éèëê]', 'e', text)
    text = re.sub(r'[íìïî]', 'i', text)
    text = re.sub(r'[óòöô]', 'o', text)
    text = re.sub(r'[úùüû]', 'u', text)
    text = re.sub(r'[^a-z0-9]', '', text)
    return text

def main():
    # Load existing questions
    try:
        with open(PREGUNTAS_JSON, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error loading {PREGUNTAS_JSON}: {e}")
        return

    existing_questions = data.get("questions", [])
    existing_normalized = {normalize_text(q["question"]) for q in existing_questions if "question" in q}

    new_questions = []

    # 1. APLICACIONES WEB (15 questions)
    new_questions.extend([
        {
            "question": "¿Qué etiqueta HTML5 se utiliza para insertar audio en una página web?",
            "options": ["<sound>", "<music>", "<audio>"],
            "answer": "<audio>",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué método JavaScript se usa para añadir un elemento al final de un array?",
            "options": ["push()", "pop()", "shift()"],
            "answer": "push()",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué propiedad CSS se utiliza para redondear las esquinas de un elemento?",
            "options": ["border-radius", "border-round", "corner-radius"],
            "answer": "border-radius",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué formato de datos se basa en pares clave-valor y es ampliamente utilizado en APIs REST?",
            "options": ["JSON", "XML", "CSV"],
            "answer": "JSON",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la función principal de Webpack en el desarrollo web?",
            "options": ["Cifrar la base de datos", "Empaquetar y optimizar módulos JavaScript y assets", "Alojar el servidor web"],
            "answer": "Empaquetar y optimizar módulos JavaScript y assets",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué comando de Git se usa para descargar el historial de un repositorio remoto y fusionarlo con la rama actual?",
            "options": ["git push", "git pull", "git fetch"],
            "answer": "git pull",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué puerto utiliza por defecto una conexión HTTPS segura?",
            "options": ["80", "22", "443"],
            "answer": "443",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué directiva CSS se utiliza para aplicar estilos solo en pantallas con ciertas dimensiones (Responsive Design)?",
            "options": ["@media", "@import", "@screen"],
            "answer": "@media",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "En PHP, ¿qué superglobal se utiliza para recibir datos enviados a través de un formulario con el método POST?",
            "options": ["$_GET", "$_POST", "$_REQUEST"],
            "answer": "$_POST",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de base de datos es MySQL?",
            "options": ["No relacional", "Orientada a objetos", "Relacional"],
            "answer": "Relacional",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué protocolo se utiliza habitualmente para subir archivos de la web al servidor de hosting?",
            "options": ["FTP / SFTP", "SMTP", "DHCP"],
            "answer": "FTP / SFTP",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué significa CORS en desarrollo web?",
            "options": ["Cross-Origin Resource Sharing", "Central Object Recovery System", "Client Online Registry Service"],
            "answer": "Cross-Origin Resource Sharing",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué selector CSS aplica estilos a un enlace cuando el usuario pasa el cursor por encima?",
            "options": [":focus", ":active", ":hover"],
            "answer": ":hover",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué elemento HTML define la barra de navegación de un sitio web?",
            "options": ["<nav>", "<section>", "<header>"],
            "answer": "<nav>",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        },
        {
            "question": "¿Qué propiedad CSS se utiliza para cambiar el color del texto?",
            "options": ["text-color", "color", "font-color"],
            "answer": "color",
            "subject": "Aplicaciones Web",
            "source": "repaso"
        }
    ])

    # 2. DIGITALIZACIÓN (15 questions)
    new_questions.extend([
        {
            "question": "¿Cuál es un beneficio clave de usar SaaS (Software as a Service) para las empresas?",
            "options": ["Requiere comprar licencias de por vida", "Acceso al software a través de internet sin preocuparse de la infraestructura", "Obliga a tener servidores locales dedicados"],
            "answer": "Acceso al software a través de internet sin preocuparse de la infraestructura",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué tecnología permite registrar transacciones de forma inmutable, segura y distribuida sin intermediarios?",
            "options": ["Blockchain", "Caché proxy", "Active Directory"],
            "answer": "Blockchain",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué es la analítica descriptiva en el contexto de Big Data?",
            "options": ["Predecir el futuro de las ventas", "Analizar datos históricos para entender qué ha sucedido en el pasado", "Tomar decisiones de forma autónoma con IA"],
            "answer": "Analizar datos históricos para entender qué ha sucedido en el pasado",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "En IoT, ¿cuál es la función de un actuador?",
            "options": ["Medir la temperatura ambiental", "Realizar una acción física (como abrir una válvula o encender una luz) en respuesta a una señal", "Enviar datos a la base de datos remota"],
            "answer": "Realizar una acción física (como abrir una válvula o encender una luz) en respuesta a una señal",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué ley española regula la protección de datos personales de las personas físicas?",
            "options": ["LOPDGDD (Ley Orgánica de Protección de Datos)", "LSSI (Ley de Servicios de la Sociedad de la Información)", "Ley de Propiedad Intelectual"],
            "answer": "LOPDGDD (Ley Orgánica de Protección de Datos)",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es el propósito del Cloud Computing en la transformación digital?",
            "options": ["Reemplazar todas las pantallas por proyectores", "Flexibilidad para escalar recursos informáticos bajo demanda a través de internet", "Reducir la velocidad de red de la empresa"],
            "answer": "Flexibilidad para escalar recursos informáticos bajo demanda a través de internet",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué caracteriza a la Industria 4.0?",
            "options": ["El uso masivo de carbón para energía", "La automatización e interconexión mediante IoT, Big Data e Inteligencia Artificial", "La eliminación de ordenadores de las fábricas"],
            "answer": "La automatización e interconexión mediante IoT, Big Data e Inteligencia Artificial",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué herramienta colaborativa en la nube permite a múltiples usuarios editar hojas de cálculo en tiempo real?",
            "options": ["Google Sheets", "Adobe Photoshop", "Notepad++"],
            "answer": "Google Sheets",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué es la firma digital?",
            "options": ["Un dibujo hecho con tableta gráfica", "Mecanismo criptográfico que asegura la autenticidad e integridad de un documento electrónico", "Una foto del DNI firmada"],
            "answer": "Mecanismo criptográfico que asegura la autenticidad e integridad de un documento electrónico",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué es la administración electrónica?",
            "options": ["Llevar los archivadores a otra oficina", "El uso de las TIC por parte de las administraciones públicas para prestar servicios a los ciudadanos", "Comprar ordenadores para los funcionarios públicos"],
            "answer": "El uso de las TIC por parte de las administraciones públicas para prestar servicios a los ciudadanos",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de aprendizaje de IA requiere que los datos de entrenamiento estén etiquetados previamente?",
            "options": ["Aprendizaje supervisado", "Aprendizaje no supervisado", "Aprendizaje por refuerzo"],
            "answer": "Aprendizaje supervisado",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué es la computación en el extremo (Edge Computing)?",
            "options": ["Mover todos los servidores al borde del edificio", "Procesar los datos lo más cerca posible de donde se generan para reducir la latencia", "Comprar routers más veloces"],
            "answer": "Procesar los datos lo más cerca posible de donde se generan para reducir la latencia",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es un beneficio principal de la digitalización empresarial?",
            "options": ["Incrementar el consumo de papel", "Mejorar la eficiencia de los procesos y reducir costes operativos", "Facilitar que los virus entren en la red"],
            "answer": "Mejorar la eficiencia de los procesos y reducir costes operativos",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué tecnología facilita la creación de modelos digitales tridimensionales a partir de objetos reales?",
            "options": ["Escaneado 3D", "Impresión de inyección de tinta", "Monitor CRT"],
            "answer": "Escaneado 3D",
            "subject": "Digitalización",
            "source": "repaso"
        },
        {
            "question": "¿Qué es un Chatbot?",
            "options": ["Un virus de mensajería", "Programa informático diseñado para simular una conversación con usuarios humanos", "Un tipo de correo no deseado"],
            "answer": "Programa informático diseñado para simular una conversación con usuarios humanos",
            "subject": "Digitalización",
            "source": "repaso"
        }
    ])

    # 3. EMPLEABILIDAD I (15 questions)
    new_questions.extend([
        {
            "question": "¿Qué tipo de contrato laboral se realiza para sustituir a un trabajador con derecho a reserva del puesto de trabajo?",
            "options": ["Contrato de interinidad", "Contrato indefinido ordinario", "Contrato formativo"],
            "answer": "Contrato de interinidad",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Qué organismo público gestiona las prestaciones por desempleo en España?",
            "options": ["INSS (Instituto Nacional de la Seguridad Social)", "SEPE (Servicio Público de Empleo Estatal)", "Agencia Tributaria"],
            "answer": "SEPE (Servicio Público de Empleo Estatal)",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la duración máxima del período de prueba para los técnicos titulados según el Estatuto de los Trabajadores?",
            "options": ["Seis meses", "Un mes", "Dos años"],
            "answer": "Seis meses",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Qué porcentaje del sueldo bruto suele destinarse aproximadamente a las contingencias comunes a cargo del trabajador?",
            "options": ["4.7%", "10%", "23.6%"],
            "answer": "4.7%",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Qué documento refleja de manera detallada el salario devengado por un trabajador y sus correspondientes deducciones?",
            "options": ["El contrato laboral", "La nómina", "El certificado de empresa"],
            "answer": "La nómina",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la jornada laboral máxima ordinaria en España por término medio semanal?",
            "options": ["40 horas", "35 horas", "48 horas"],
            "answer": "40 horas",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es el número mínimo de días de vacaciones anuales retribuidas legalmente establecidos en España?",
            "options": ["30 días naturales", "15 días laborables", "20 días naturales"],
            "answer": "30 días naturales",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Qué convenio regula las condiciones laborales específicas de un sector en una provincia o comunidad?",
            "options": ["Convenio Colectivo", "Estatuto de los Trabajadores", "Constitución Española"],
            "answer": "Convenio Colectivo",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de despido se produce debido a causas económicas, técnicas, organizativas o de producción de la empresa?",
            "options": ["Despido objetivo", "Despido disciplinario", "Despido improcedente"],
            "answer": "Despido objetivo",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Qué indemnización general corresponde por despido objetivo si se declara procedente?",
            "options": ["20 días de salario por año trabajado", "33 días de salario por año trabajado", "12 días de salario por año trabajado"],
            "answer": "20 días de salario por año trabajado",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿A quién le corresponde el abono de la cotización por accidentes de trabajo y enfermedades profesionales?",
            "options": ["Exclusivamente al empresario", "Al trabajador y al empresario al 50%", "Exclusivamente al trabajador"],
            "answer": "Exclusivamente al empresario",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Qué concepto de la nómina cotiza a la Seguridad Social pero está exento de IRPF hasta ciertos límites?",
            "options": ["El salario base", "Las dietas y pluses de transporte justificados", "Las horas extraordinarias"],
            "answer": "Las dietas y pluses de transporte justificados",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la edad mínima general para poder firmar un contrato de trabajo en España de manera independiente?",
            "options": ["16 años", "18 años", "14 años"],
            "answer": "18 años",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Qué derecho permite a un trabajador ausentarse justificadamente del puesto manteniendo la retribución (ej: matrimonio)?",
            "options": ["Permiso retribuido", "Excedencia voluntaria", "Huelga"],
            "answer": "Permiso retribuido",
            "subject": "Empleabilidad I",
            "source": "repaso"
        },
        {
            "question": "¿Cómo se calcula la base de cotización por contingencias comunes?",
            "options": ["Salario base más horas extras", "Total devengado menos conceptos excluidos de cotización más prorrata de pagas extras", "Sueldo neto percibido"],
            "answer": "Total devengado menos conceptos excluidos de cotización más prorrata de pagas extras",
            "subject": "Empleabilidad I",
            "source": "repaso"
        }
    ])

    # 4. EMPLEABILIDAD II (15 questions)
    new_questions.extend([
        {
            "question": "¿Qué bloque del modelo Canvas define a quién se dirige el valor generado por la empresa?",
            "options": ["Segmentos de clientes", "Propuesta de valor", "Relaciones con clientes"],
            "answer": "Segmentos de clientes",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué forma jurídica requiere un capital mínimo de 3.000 euros para su constitución?",
            "options": ["Sociedad de Responsabilidad Limitada (S.L.)", "Autónomo (Empresario Individual)", "Sociedad Anónima (S.A.)"],
            "answer": "Sociedad de Responsabilidad Limitada (S.L.)",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué análisis estudia las Fortalezas, Oportunidades, Debilidades y Amenazas de un proyecto?",
            "options": ["Análisis DAFO", "Modelo Canvas", "Plan de viabilidad financiera"],
            "answer": "Análisis DAFO",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué fuente de financiación se basa en la aportación colectiva de pequeñas cantidades a través de plataformas online?",
            "options": ["Crowdfunding", "Préstamo bancario hipotecario", "Leasing"],
            "answer": "Crowdfunding",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de gasto representa el alquiler de un local comercial que se mantiene igual produzca o no la empresa?",
            "options": ["Gasto fijo", "Gasto variable", "Inversión inicial"],
            "answer": "Gasto fijo",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué bloque del lienzo Canvas describe el núcleo de lo que la empresa ofrece para solucionar los problemas del cliente?",
            "options": ["Propuesta de valor", "Canales", "Actividades clave"],
            "answer": "Propuesta de valor",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué impuesto directo grava los beneficios obtenidos por las sociedades mercantiles en España?",
            "options": ["Impuesto sobre Sociedades (IS)", "Impuesto sobre el Valor Añadido (IVA)", "IRPF"],
            "answer": "Impuesto sobre Sociedades (IS)",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la responsabilidad patrimonial de un empresario individual (autónomo) ante las deudas de su negocio?",
            "options": ["Ilimitada (responde con todo su patrimonio presente y futuro)", "Limitada al capital aportado al inicio", "Limitada a los activos de la empresa"],
            "answer": "Ilimitada (responde con todo su patrimonio presente y futuro)",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué es el umbral de rentabilidad o punto muerto?",
            "options": ["La cantidad de ventas necesarias para cubrir todos los costes sin ganar ni perder dinero", "El momento en que se cierra la empresa", "El margen de beneficio bruto obtenido"],
            "answer": "La cantidad de ventas necesarias para cubrir todos los costes sin ganar ni perder dinero",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué canal del Canvas describe cómo se entrega y comunica la propuesta de valor a los clientes?",
            "options": ["Canales", "Estructura de costes", "Fuentes de ingresos"],
            "answer": "Canales",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué sigla define al impuesto indirecto que grava el consumo de bienes y servicios en España?",
            "options": ["IVA", "IRPF", "IS"],
            "answer": "IVA",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de financiación consiste en un inversor privado que aporta capital y experiencia a startups en fases iniciales?",
            "options": ["Business Angel", "Préstamo ICO", "Pagaré de empresa"],
            "answer": "Business Angel",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la principal ventaja de una Sociedad Limitada frente al Empresario Individual?",
            "options": ["La responsabilidad está limitada al capital aportado por los socios", "No requiere pagar impuestos", "Se puede constituir en un solo minuto de forma gratuita"],
            "answer": "La responsabilidad está limitada al capital aportado por los socios",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué documento formal resume los objetivos de marketing, financieros y la estrategia operativa de una nueva empresa?",
            "options": ["El plan de empresa (o plan de negocio)", "La escritura de constitución", "El modelo Canvas preliminar"],
            "answer": "El plan de empresa (o plan de negocio)",
            "subject": "Empleabilidad II",
            "source": "repaso"
        },
        {
            "question": "¿Qué bloque del Canvas describe las tareas más importantes que debe ejecutar la empresa para que funcione su modelo?",
            "options": ["Actividades clave", "Asociaciones clave", "Recursos clave"],
            "answer": "Actividades clave",
            "subject": "Empleabilidad II",
            "source": "repaso"
        }
    ])

    # 5. HLC - HORAS DE LIBRE CONFIGURACIÓN (15 questions)
    new_questions.extend([
        {
            "question": "¿Qué comando de Git se usa para fusionar una rama en la rama activa actual?",
            "options": ["git merge", "git push", "git clone"],
            "answer": "git merge",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué formato estructurado de datos utiliza etiquetas personalizadas encerradas en corchetes angulares (ej. <tag>)?",
            "options": ["XML", "JSON", "YAML"],
            "answer": "XML",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué metodología ágil se basa en sprints de tiempo fijo, reuniones diarias de pie y un Scrum Master?",
            "options": ["Scrum", "Cascada", "Kanban"],
            "answer": "Scrum",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué norma internacional define los requisitos para implantar un Sistema de Gestión de Calidad (SGC)?",
            "options": ["ISO 9001", "ISO 27001", "ISO 14001"],
            "answer": "ISO 9001",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué licencia de software libre obliga a que las versiones modificadas del código también sean distribuidas como software libre (Copyleft)?",
            "options": ["GPL (General Public License)", "MIT", "Apache License"],
            "answer": "GPL (General Public License)",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué estándar define las pautas de accesibilidad para el contenido web con el objetivo de facilitar el acceso a personas con discapacidad?",
            "options": ["WCAG", "RFC", "IEEE 802.3"],
            "answer": "WCAG",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la función del comando 'git status'?",
            "options": ["Mostrar los archivos modificados en el área de trabajo y preparados para confirmar", "Subir los commits al servidor remoto", "Borrar el historial de versiones"],
            "answer": "Mostrar los archivos modificados en el área de trabajo y preparados para confirmar",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué formato de serialización de datos se utiliza ampliamente en Docker Compose y se basa en sangrías con espacios?",
            "options": ["YAML", "JSON", "XML"],
            "answer": "YAML",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué metodología ágil utiliza un tablero visual de columnas (ej. Por hacer, En progreso, Hecho) para limitar el trabajo en curso?",
            "options": ["Kanban", "Extreme Programming (XP)", "Cascada"],
            "answer": "Kanban",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué estándar de calidad de software se centra específicamente en la calidad del producto de software (ISO/IEC 25000)?",
            "options": ["SQuaRE", "ISO 9001", "CMMI"],
            "answer": "SQuaRE",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué comando de Git crea un clon o copia exacta de un repositorio remoto en la máquina local?",
            "options": ["git clone", "git fork", "git init"],
            "answer": "git clone",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de licencia de software es la licencia MIT?",
            "options": ["Permisiva (permite casi cualquier uso del código con mínimas restricciones)", "Fuerte con copyleft", "Propietaria de pago"],
            "answer": "Permisiva (permite casi cualquier uso del código con mínimas restricciones)",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué representa un diagrama de Gantt en la gestión de proyectos?",
            "options": ["Un gráfico que muestra las tareas del proyecto distribuidas a lo largo del tiempo", "Un mapa de la red informática", "Un esquema de clases de la aplicación"],
            "answer": "Un gráfico que muestra las tareas del proyecto distribuidas a lo largo del tiempo",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué comando de Git guarda los cambios confirmados temporalmente en una pila para recuperarlos más tarde sin hacer commit?",
            "options": ["git stash", "git checkout", "git reset"],
            "answer": "git stash",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        },
        {
            "question": "¿Qué principio de diseño establece que la privacidad debe estar integrada en los sistemas desde su concepción inicial?",
            "options": ["Privacidad por diseño (Privacy by Design)", "Seguridad por oscuridad", "Cero confianza (Zero Trust)"],
            "answer": "Privacidad por diseño (Privacy by Design)",
            "subject": "HLC (Horas de Libre Configuración)",
            "source": "repaso"
        }
    ])

    # 6. INGLÉS (15 questions)
    new_questions.extend([
        {
            "question": "How do you translate the term 'Backup' to Spanish?",
            "options": ["Base de datos", "Copia de seguridad", "Restauración de sistema"],
            "answer": "Copia de seguridad",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "What is the Spanish translation for the word 'Bandwidth'?",
            "options": ["Ancho de banda", "Velocidad de procesador", "Memoria intermedia"],
            "answer": "Ancho de banda",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "How do you say 'Cifrado' in English?",
            "options": ["Decryption", "Encryption", "Hashing"],
            "answer": "Encryption",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "What does 'Latency' mean in networking contexts?",
            "options": ["La capacidad de almacenamiento de un disco", "El retraso o tiempo de respuesta en la transmisión de datos", "La potencia de la señal WiFi"],
            "answer": "El retraso o tiempo de respuesta en la transmisión de datos",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "What is the Spanish translation for the word 'Firewall'?",
            "options": ["Cortafuegos", "Enrutador", "Conmutador"],
            "answer": "Cortafuegos",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "How do you translate the action 'to upload' in a web context?",
            "options": ["Subir o cargar un archivo", "Descargar un archivo", "Borrar un archivo"],
            "answer": "Subir o cargar un archivo",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "What does the IT abbreviation 'DBMS' stand for?",
            "options": ["Database Management System", "Data Backup Memory Space", "Dynamic Broadband Mail Server"],
            "answer": "Database Management System",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "How do you translate the verb 'to host' in web contexts?",
            "options": ["Hospedar o alojar un sitio web", "Programar una aplicación", "Comprar un dominio"],
            "answer": "Hospedar o alojar un sitio web",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "What is the English term for 'Dispositivo inalámbrico'?",
            "options": ["Wireless device", "Wired device", "Storage drive"],
            "answer": "Wireless device",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "How do you translate 'Servidor de correo' in English?",
            "options": ["Mail server", "Web server", "Database server"],
            "answer": "Mail server",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "What is the Spanish translation for 'User-friendly'?",
            "options": ["Fácil de usar o intuitivo", "Exclusivo para expertos", "Software de pago"],
            "answer": "Fácil de usar o intuitivo",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "What does the English term 'To troubleshoot' mean?",
            "options": ["Crear nuevos problemas", "Identificar y resolver fallos o averías en un sistema", "Actualizar el sistema operativo"],
            "answer": "Identificar y resolver fallos o averías en un sistema",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "What is the English word for 'Almacenamiento en la nube'?",
            "options": ["Cloud storage", "Local storage", "External drive"],
            "answer": "Cloud storage",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "How do you say 'Conexión por cable' in English?",
            "options": ["Wired connection", "Wireless connection", "Bluetooth link"],
            "answer": "Wired connection",
            "subject": "Inglés",
            "source": "repaso"
        },
        {
            "question": "Translate the phrase 'Access denied' to Spanish:",
            "options": ["Acceso permitido", "Acceso denegado", "Contraseña incorrecta"],
            "answer": "Acceso denegado",
            "subject": "Inglés",
            "source": "repaso"
        }
    ])

    # 7. SEGURIDAD INFORMATICA (15 questions)
    new_questions.extend([
        {
            "question": "¿Qué tipo de cifrado utiliza la misma clave tanto para cifrar como para descifrar la información?",
            "options": ["Cifrado simétrico", "Cifrado asimétrico", "Hashing SHA-256"],
            "answer": "Cifrado simétrico",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de cifrado utiliza un par de claves (una pública y una privada)?",
            "options": ["Cifrado asimétrico", "Cifrado simétrico", "Cifrado César"],
            "answer": "Cifrado asimétrico",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la función principal de una PKI (Public Key Infrastructure)?",
            "options": ["Bloquear puertos en el enrutador local", "Gestionar e emitir certificados digitales utilizando criptografía asimétrica", "Escanear virus en los discos"],
            "answer": "Gestionar e emitir certificados digitales utilizando criptografía asimétrica",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué protocolo seguro sustituye a HTTP e implementa encriptación mediante SSL/TLS?",
            "options": ["HTTPS", "FTP", "SSH"],
            "answer": "HTTPS",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué sistema detecta actividades sospechosas o intrusiones en la red sin llegar a bloquearlas por sí mismo?",
            "options": ["IDS (Intrusion Detection System)", "IPS (Intrusion Prevention System)", "Firewall de aplicaciones"],
            "answer": "IDS (Intrusion Detection System)",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué protocolo seguro se utiliza para la administración y control remoto de equipos Linux a través de consola?",
            "options": ["SSH", "Telnet", "RDP"],
            "answer": "SSH",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de red privada permite conectar trabajadores remotos de forma segura a la red interna de la oficina?",
            "options": ["VPN", "DMZ", "VLAN"],
            "answer": "VPN",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la característica principal de una función Hash (como SHA-256)?",
            "options": ["Permite descifrar el mensaje original fácilmente con la clave correcta", "Es unidireccional (no se puede recuperar el mensaje original a partir del hash)", "Comprime archivos grandes a formato zip"],
            "answer": "Es unidireccional (no se puede recuperar el mensaje original a partir del hash)",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué zona de red aislada se utiliza habitualmente para ubicar los servidores públicos de la empresa (ej: servidores web) separándolos de la red interna?",
            "options": ["DMZ (Zona Desmilitarizada)", "VLAN privada", "VPN corporativa"],
            "answer": "DMZ (Zona Desmilitarizada)",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué ataque manipula a las personas utilizando la psicología para que revelen información confidencial o contraseñas?",
            "options": ["Ingeniería social", "Ataque de denegación de servicio", "Inyección SQL"],
            "answer": "Ingeniería social",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de copia de seguridad copia solo los archivos modificados desde la última copia completa o incremental?",
            "options": ["Copia incremental", "Copia diferencial", "Copia completa"],
            "answer": "Copia incremental",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué ley de ámbito europeo regula de forma estricta la protección de datos personales de ciudadanos en la Unión Europea?",
            "options": ["RGPD (Reglamento General de Protección de Datos)", "LOPDGDD", "LSSI"],
            "answer": "RGPD (Reglamento General de Protección de Datos)",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es el propósito del Pentesting?",
            "options": ["Escribir código de software", "Realizar pruebas de intrusión controladas para identificar fallos de seguridad en los sistemas", "Configurar los cortafuegos de la empresa"],
            "answer": "Realizar pruebas de intrusión controladas para identificar fallos de seguridad en los sistemas",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué amenaza consiste en infectar un equipo para que forme parte de una red de ordenadores zombis controlados remotamente?",
            "options": ["Botnet", "Phishing", "Troyano bancario"],
            "answer": "Botnet",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        },
        {
            "question": "¿Qué certificado digital oficial permite la firma y autenticación de ciudadanos ante las administraciones públicas españolas?",
            "options": ["Certificado de la FNMT (Fábrica Nacional de Moneda y Timbre)", "Certificado SSL de Let's Encrypt", "Certificado de Active Directory"],
            "answer": "Certificado de la FNMT (Fábrica Nacional de Moneda y Timbre)",
            "subject": "Seguridad Informatica",
            "source": "repaso"
        }
    ])

    # 8. SERVICIOS RED (15 questions)
    new_questions.extend([
        {
            "question": "¿Qué registro de DNS asocia una dirección IPv6 (128 bits) a un nombre de host?",
            "options": ["AAAA", "A", "CNAME"],
            "answer": "AAAA",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué opción del servidor DHCP define la dirección IP del router o puerta de enlace que deben usar los clientes?",
            "options": ["Opción 003 Router", "Opción 006 DNS Servers", "Opción 015 Domain Name"],
            "answer": "Opción 003 Router",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué protocolo utiliza el correo SMTP por defecto para el envío de correos sin cifrado?",
            "options": ["Puerto 25", "Puerto 110", "Puerto 143"],
            "answer": "Puerto 25",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Cuál es la función principal de Samba en entornos Linux?",
            "options": ["Permitir compartir archivos e impresoras con sistemas Windows utilizando el protocolo SMB/CIFS", "Alojar servidores web apache de forma segura", "Administrar las GPO locales"],
            "answer": "Permitir compartir archivos e impresoras con sistemas Windows utilizando el protocolo SMB/CIFS",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué protocolo se utiliza para sincronizar la hora exacta de los relojes de las máquinas en una red?",
            "options": ["NTP (Network Time Protocol)", "SNMP", "SMTP"],
            "answer": "NTP (Network Time Protocol)",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué registro DNS asocia un alias o nombre alternativo a un nombre de dominio canónico existente?",
            "options": ["CNAME", "PTR", "MX"],
            "answer": "CNAME",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué protocolo de red asigna de forma automática direcciones IP y configuraciones de red a los equipos conectados?",
            "options": ["DHCP", "DNS", "LDAP"],
            "answer": "DHCP",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué puerto TCP utiliza por defecto el protocolo seguro de transferencia de archivos SFTP?",
            "options": ["22", "21", "443"],
            "answer": "22",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué protocolo se utiliza para la monitorización y gestión de dispositivos de red como routers, switches o servidores?",
            "options": ["SNMP", "SMTP", "SSH"],
            "answer": "SNMP",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de enrutamiento se calcula dinámicamente mediante protocolos como OSPF o RIP?",
            "options": ["Enrutamiento dinámico", "Enrutamiento estático", "Enrutamiento predeterminado"],
            "answer": "Enrutamiento dinámico",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué tecnología de red permite crear redes lógicas independientes dentro de una misma infraestructura física de switches?",
            "options": ["VLAN (Virtual LAN)", "VPN", "NAT"],
            "answer": "VLAN (Virtual LAN)",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué técnica traduce direcciones IP privadas de la LAN en una dirección IP pública para permitir el acceso a internet?",
            "options": ["NAT (Network Address Translation)", "DNS", "DHCP Reservation"],
            "answer": "NAT (Network Address Translation)",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué servidor proxy de código abierto es muy popular en sistemas Linux para el filtrado de contenidos y aceleración web mediante caché?",
            "options": ["Squid", "Apache", "BIND9"],
            "answer": "Squid",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de zona DNS traduce una dirección IP a su correspondiente nombre de host (resolución inversa)?",
            "options": ["Zona de búsqueda inversa (PTR)", "Zona de búsqueda directa (A)", "Zona de alias (CNAME)"],
            "answer": "Zona de búsqueda inversa (PTR)",
            "subject": "Servicios Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué cliente de correo web de código abierto se utiliza habitualmente preinstalado en servidores de hosting Linux?",
            "options": ["Roundcube", "Outlook", "Thunderbird"],
            "answer": "Roundcube",
            "subject": "Servicios Red",
            "source": "repaso"
        }
    ])

    # 9. SISTEMAS OPERATIVOS EN RED (15 questions)
    new_questions.extend([
        {
            "question": "¿Qué rol de Windows Server se encarga de almacenar la información de objetos en la red y gestionar la autenticación de usuarios?",
            "options": ["AD DS (Active Directory Domain Services)", "IIS (Internet Information Services)", "Hyper-V"],
            "answer": "AD DS (Active Directory Domain Services)",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué comando de Linux se utiliza para cambiar los permisos de acceso de un archivo o directorio?",
            "options": ["chmod", "chown", "mv"],
            "answer": "chmod",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué nivel de RAID realiza un espejo o duplicación exacta de los datos en dos discos distintos (RAID de espejo)?",
            "options": ["RAID 1", "RAID 0", "RAID 5"],
            "answer": "RAID 1",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué sistema de archivos por defecto utiliza la mayoría de distribuciones modernas de Linux (como Ubuntu)?",
            "options": ["ext4", "NTFS", "FAT32"],
            "answer": "ext4",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué herramienta de Windows Server se utiliza para aplicar configuraciones y políticas de seguridad y software de forma centralizada a usuarios o equipos?",
            "options": ["GPO (Directivas de grupo)", "Consola DHCP", "Administrador de discos"],
            "answer": "GPO (Directivas de grupo)",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué comando de Linux se utiliza para ver la lista de procesos que se están ejecutando activamente?",
            "options": ["ps", "ls", "grep"],
            "answer": "ps",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué nivel de RAID distribuye los datos a nivel de bloques junto con información de paridad repartida en al menos tres discos?",
            "options": ["RAID 5", "RAID 0", "RAID 1"],
            "answer": "RAID 5",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué herramienta integrada de Windows Server permite limitar la cantidad de espacio de almacenamiento en disco disponible para cada usuario?",
            "options": ["Cuotas de disco", "Desfragmentador de disco", "Copia de seguridad de Windows Server"],
            "answer": "Cuotas de disco",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué tipo de virtualización ejecuta las máquinas virtuales directamente sobre el hardware físico del servidor (Hypervisor Tipo 1 o Bare-Metal)?",
            "options": ["VMware ESXi / Hyper-V", "VirtualBox", "VMware Workstation"],
            "answer": "VMware ESXi / Hyper-V",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué comando de Linux cambia el propietario de un archivo o directorio?",
            "options": ["chown", "chmod", "cp"],
            "answer": "chown",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué rol FSMO de Active Directory se encarga de asegurar que no haya colisiones de nombres de dominio en el bosque?",
            "options": ["Maestro de nombres de dominio", "Emulador de PDC", "Maestro de esquema"],
            "answer": "Maestro de nombres de dominio",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué sistema de archivos propietario de Microsoft ofrece funciones avanzadas como permisos de seguridad, compresión y cuotas en Windows?",
            "options": ["NTFS", "FAT32", "exFAT"],
            "answer": "NTFS",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué intérprete de comandos y lenguaje de scripting de Microsoft es utilizado en Windows para automatizar tareas administrativas?",
            "options": ["PowerShell", "Bash", "CMD básico"],
            "answer": "PowerShell",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué comando de Linux permite leer o concatenar el contenido de un archivo de texto en pantalla?",
            "options": ["cat", "mkdir", "rm"],
            "answer": "cat",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        },
        {
            "question": "¿Qué comando de PowerShell se utiliza para obtener ayuda detallada de otros cmdlets?",
            "options": ["Get-Help", "Get-Command", "Get-Process"],
            "answer": "Get-Help",
            "subject": "Sistemas Operativos en Red",
            "source": "repaso"
        }
    ])

    # Filter out duplicates
    added_count = 0
    for q in new_questions:
        norm = normalize_text(q["question"])
        if norm not in existing_normalized:
            existing_questions.append(q)
            existing_normalized.add(norm)
            added_count += 1

    # Save to JSON
    data["questions"] = existing_questions
    try:
        with open(PREGUNTAS_JSON, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Added {added_count} new questions to {PREGUNTAS_JSON}")
    except Exception as e:
        print(f"Error saving {PREGUNTAS_JSON}: {e}")
        return

    # Convert to JS
    try:
        with open(PREGUNTAS_JS, "w", encoding="utf-8") as f:
            f.write("window.ALL_QUESTIONS_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";")
        print(f"Successfully converted database to {PREGUNTAS_JS}")
    except Exception as e:
        print(f"Error saving {PREGUNTAS_JS}: {e}")

if __name__ == "__main__":
    main()
