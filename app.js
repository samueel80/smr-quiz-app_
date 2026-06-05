// SEED QUESTIONS FOR REVIEW (source: 'repaso')
const SEED_REPASO_QUESTIONS = [
    {
        question: "¿Cuál es el primer paso para instalar Outlook?",
        options: ["Configurar los parámetros del servidor manualmente", "Acceder a su web oficial y descargar la versión de escritorio o móvil", "Introducir el correo electrónico"],
        answer: "Acceder a su web oficial y descargar la versión de escritorio o móvil",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Cuál es el tiempo aproximado de aprovisionamiento de un escritorio en Amazon WorkSpaces?",
        options: ["5 minutos", "24 horas", "20-30 min"],
        answer: "20-30 min",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Cuál es una característica de la instalación de Shells?",
        options: ["Requiere configuración avanzada obligatoria", "Instalación rápida", "Necesita hardware especializado"],
        answer: "Instalación rápida",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Cuál es una ventaja relacionada con la disponibilidad?",
        options: ["Disponibilidad de la información las 24 horas del día, los 365 días del año", "Necesidad de internet para gestión de archivos", "Límites de compartir ciertas informaciones"],
        answer: "Disponibilidad de la información las 24 horas del día, los 365 días del año",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Cuál es uno de los requisitos previos para instalar ChromeOS Flex?",
        options: ["Un disco duro externo obligatorio", "Una tarjeta gráfica dedicada", "Una unidad USB de al menos 8 GB"],
        answer: "Una unidad USB de al menos 8 GB",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Cómo interactúa el usuario con un WebOS?",
        options: ["A través del navegador web", "A través de una conexión bluetooth", "Mediante una consola física"],
        answer: "A través del navegador web",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Cómo se edita una página en una wiki?",
        options: ["Con un simple clic en la opción editar página", "Mediante programación avanzada", "Desde el servidor directamente"],
        answer: "Con un simple clic en la opción editar página",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Cómo se llamó la primera wiki?",
        options: ["Wikiwikiweb", "Mediawiki", "Dokuwiki"],
        answer: "Wikiwikiweb",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Cómo se puede copiar la base de datos de Moodle?",
        options: ["Desde el bloc de notas", "Desde una herramienta como phpMyAdmin", "Desde un editor de imágenes"],
        answer: "Desde una herramienta como phpMyAdmin",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Cómo se transmiten los datos en Amazon WorkSpaces?",
        options: ["En formato cifrado", "Sin cifrado", "Mediante almacenamiento local"],
        answer: "En formato cifrado",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Desde dónde se debe descargar LibreOffice?",
        options: ["Desde una red social", "Desde cualquier blog tecnológico", "Desde la página oficial de LibreOffice"],
        answer: "Desde la página oficial de LibreOffice",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Desde dónde se gestiona de forma avanzada los usuarios en Google Workspace?",
        options: ["Desde la propia interfaz de Google Fotos", "Desde la consola de administración en [https://admin.google.com](https://admin.google.com)", "Desde Chrome Web Store"],
        answer: "Desde la consola de administración en [https://admin.google.com](https://admin.google.com)",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Desde dónde se pueden crear grupos en Gmail?",
        options: ["Desde Google Contactos mediante el uso de etiquetas", "Desde configuración general", "Desde redactar"],
        answer: "Desde Google Contactos mediante el uso de etiquetas",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Desde dónde se pueden crear y eliminar usuarios en Google Workspace?",
        options: ["Desde la opción tema", "Desde la consola de administración en [https://admin.google.com](https://admin.google.com)", "Desde el menú utilidades"],
        answer: "Desde la consola de administración en [https://admin.google.com](https://admin.google.com)",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Desde qué menú se accede a la copia de seguridad de un curso?",
        options: ["Administración del sitio – Seguridad", "Administración – Administración del curso – Copia de seguridad", "Apariencia – Temas"],
        answer: "Administración – Administración del curso – Copia de seguridad",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Dónde están alojados los sistemas operativos online?",
        options: ["En memorias USB", "En servidores remotos", "En discos duros externos"],
        answer: "En servidores remotos",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Dónde se encuentran los tres niveles de acceso?",
        options: ["Haciendo clic en el botón ‘Compartir’ dentro de cualquier archivo de Google docs, sheets o slides", "En el panel de control del sistema", "En la consola de Windows"],
        answer: "Haciendo clic en el botón ‘Compartir’ dentro de cualquier archivo de Google docs, sheets o slides",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Dónde se pueden retirar permisos otorgados a una aplicación?",
        options: ["En administrar las aplicaciones", "En el procesador de textos", "En el escritorio del sistema"],
        answer: "En administrar las aplicaciones",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Dónde se revisan las políticas de seguridad del sitio?",
        options: ["Usuarios > Cuentas", "Apariencia > Temas", "Administración del sitio > Seguridad > Políticas de seguridad"],
        answer: "Administración del sitio > Seguridad > Políticas de seguridad",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "¿Dónde suele darse habitualmente el problema de seguridad?",
        options: ["En los servidores de alojamiento", "En el cifrado automático", "En el punto más vulnerable: el propio usuario o administrador"],
        answer: "En el punto más vulnerable: el propio usuario o administrador",
        subject: "Aplicaciones Web",
        source: "repaso"
    },
    {
        question: "Crear un entorno personal de aprendizaje:",
        options: ["Ofrece beneficios tanto a nivel personal como profesional.", "Aporta ventajas profesionales, pero no personales.", "Aumenta la competitividad de los perfiles directivos."],
        answer: "Ofrece beneficios tanto a nivel personal como profesional.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "Cuando se recopilan y publican información privada de una persona en internet sin su consentimiento, con el objetivo de acosarla e intimidarla, hablamos de:",
        options: ["Doxing.", "Suplantación de identidad.", "Phishing."],
        answer: "Doxing.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "Las bibliotecas digitales:",
        options: ["Ofrecen cursos online de diversas disciplinas impartidas por universidades y expertos conocidos.", "Presentan vídeos de influencers en los que se exponen variedad de temas.", "Proporcionan acceso a artículos académicos, investigaciones y publicaciones especializadas."],
        answer: "Proporcionan acceso a artículos académicos, investigaciones y publicaciones especializadas.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "Las herramientas digitales que ayudan a estructura el tiempo de estudio y los recursos de manera eficiente se consideran:",
        options: ["Herramientas de organización y Un entorno físico donde se guardan materiales de estudio.", "PLN (Redes personales de aprendizaje).", "Herramientas de gestión de contenidos."],
        answer: "Herramientas de organización y Un entorno físico donde se guardan materiales de estudio.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "Señala cuál de las siguientes herramientas no es una herramienta de gestión de contenido:",
        options: ["Evernote.", "Moodle.", "Trello."],
        answer: "Trello.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Cuál es el objetivo principal del derecho del trabajo?",
        options: ["Aumentar la productividad de las empresas.", "Controlar las vacaciones de los empleados.", "Garantizar la justicia social y el equilibrio en el ámbito laboral."],
        answer: "Garantizar la justicia social y el equilibrio en el ámbito laboral.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Cuál es una ventaja del aprendizaje permanente?",
        options: ["Mantenerse competitivo y adaptarse a los cambios laborales.", "Reducir la carga de trabajo.", "Evitar el uso de nuevas tecnologías."],
        answer: "Mantenerse competitivo y adaptarse a los cambios laborales.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Cómo puede un profesional mejorar sus oportunidades en un mercado laboral saturado?",
        options: ["Optando exclusivamente por trabajos temporales.", "Especializándose en un nicho específico y fortaleciendo su red de contactos.", "Cambiando constantemente de sector laboral."],
        answer: "Especializándose en un nicho específico y fortaleciendo su red de contactos.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Cómo pueden las competencias blandas impactar en el éxito profesional?",
        options: ["Se centran en conocimientos específicos de una industria.", "Mejoran la colaboración, la comunicación y el liderazgo en el entorno laboral.", "Reemplazan la necesidad de habilidades técnicas."],
        answer: "Mejoran la colaboración, la comunicación y el liderazgo en el entorno laboral.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿En qué se basa la evaluación 360º?",
        options: ["Se basa en identificar amenazas y oportunidades del sector empresarial.", "Es una herramienta para desarrollar habilidades interpersonales y de liderazgo.", "Es una metodología que compara las competencias actuales con las competencias requeridas para alcanzar las metas profesionales o académicas."],
        answer: "Es una herramienta para desarrollar habilidades interpersonales y de liderazgo.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué acción protege la privacidad en redes sociales?",
        options: ["Compartir información sin restricciones.", "Aceptar todas las solicitudes de amistad.", "Configurar correctamente las opciones de privacidad y evitar publicar datos sensibles."],
        answer: "Configurar correctamente las opciones de privacidad y evitar publicar datos sensibles.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué acción refuerza una identidad digital profesional?",
        options: ["Mantener perfiles actualizados y consistentes en plataformas profesionales.", "Evitar interactuar con contactos relevantes en línea.", "Publicar contenido irrelevante en redes sociales."],
        answer: "Mantener perfiles actualizados y consistentes en plataformas profesionales.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué aspecto analiza un convenio colectivo aplicable por sectores?",
        options: ["Horarios generales de las empresas.", "Condiciones específicas laborales y salariales en un sector económico.", "Normas laborales internacionales."],
        answer: "Condiciones específicas laborales y salariales en un sector económico.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué aspecto es clave en la resolución de problemas laborales?",
        options: ["Evitar tomar decisiones inmediatas.", "Identificar las causas raíz y generar soluciones creativas.", "Delegar la responsabilidad a otros compañeros."],
        answer: "Identificar las causas raíz y generar soluciones creativas.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué aspecto es crucial al redactar una carta de presentación?",
        options: ["Utilizar un formato genérico para todas las empresas.", "Destacar logros relevantes y adaptar el contenido a la oferta laboral.", "Repetir la información del currículum sin variaciones."],
        answer: "Destacar logros relevantes y adaptar el contenido a la oferta laboral.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué beneficio aporta el autoconocimiento en la búsqueda de empleo?",
        options: ["Permite ocultar debilidades en las entrevistas.", "Reduce la necesidad de formación continua.", "Facilita la elección de trabajos afines a habilidades y valores personales."],
        answer: "Facilita la elección de trabajos afines a habilidades y valores personales.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué beneficio ofrece la creación de un EPA?",
        options: ["Evitar la participación en comunidades de aprendizaje.", "Limitar el aprendizaje a un solo tema.", "Mejorar el proceso educativo al adaptarlo a necesidades individuales."],
        answer: "Mejorar el proceso educativo al adaptarlo a necesidades individuales.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué caracteriza a un contrato indefinido?",
        options: ["Carece de fecha de finalización establecida.", "Solo se utiliza para trabajos temporales.", "Tiene una duración limitada."],
        answer: "Carece de fecha de finalización establecida.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué caracteriza a un objetivo de aprendizaje SMART?",
        options: ["Ser específico, alcanzable y medible.", "Ser general y poco medible.", "Fijarse sin límite de tiempo."],
        answer: "Ser específico, alcanzable y medible.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "¿Qué caracteriza a una identidad digital coherente?",
        options: ["Compartir todo tipo de contenido en redes sociales.", "Mantener consistencia en los mensajes y comportamientos online.", "Presentar información contradictoria en diferentes plataformas."],
        answer: "Mantener consistencia en los mensajes y comportamientos online.",
        subject: "Empleabilidad I",
        source: "repaso"
    },
    {
        question: "A la hora de afrontar la estrategia de una nube híbrida, ¿es necesario tener en cuenta aspectos externos?",
        options: ["No es necesario; solo debemos tener en cuenta aquellos aspectos que dependen de nuestra organización", "No es necesario, a no ser que suponga una derrama de dinero y entonces tengamos que aumentar los costes que teníamos previstos para este trabajo", "Sí, este tipo de aspectos quedan fuera del control de la organización, por lo que debemos adelantarnos y definir nuestro modelo de nube teniendo en cuenta estos puntos"],
        answer: "Sí, este tipo de aspectos quedan fuera del control de la organización, por lo que debemos adelantarnos y definir nuestro modelo de nube teniendo en cuenta estos puntos",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "A la hora de comenzar a usar un cloud público, ¿cuál es el descuido más común que cometen los usuarios?",
        options: ["No saber cómo acceder a un entorno virtual", "Ser incapaces de introducir la contraseña para poder acceder a su información", "Dejar los recursos funcionando, reservados sin usarse o asignar una IP a una máquina que está parada"],
        answer: "Dejar los recursos funcionando, reservados sin usarse o asignar una IP a una máquina que está parada",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Actualmente, ¿cuál es el líder en servicios de cloud computing?",
        options: ["Microsoft Azure", "Google Cloud Platform (GCP)", "Amazon AWS"],
        answer: "Amazon AWS",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Actualmente, ¿las nubes públicas ofrecen algún tipo de servicio de red?",
        options: ["Sí, y muy variados, desde un firewall que proteja nuestra instancia hasta complejos entramados de redes virtuales privadas, aplicativos de seguridad perimetral o conectores que permiten el acceso a internet", "Sí, pero tan solo aquellos relacionados con firewalls que protejan nuestras instancias", "No, es un servicio que tan solo ofrecen las nubes privadas"],
        answer: "Sí, y muy variados, desde un firewall que proteja nuestra instancia hasta complejos entramados de redes virtuales privadas, aplicativos de seguridad perimetral o conectores que permiten el acceso a internet",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Actualmente, ¿quién es el líder de los servicios en cloud público?",
        options: ["Amazon AWS", "Google Cloud Platform", "Microsoft"],
        answer: "Amazon AWS",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "De las siguientes opciones, ¿cuál es la norma más moderna en el entorno de los servicios web?",
        options: ["REST", "GrahphQL", "WS-Security"],
        answer: "GrahphQL",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "De las siguientes opciones, ¿cuál es una característica del servicio que ofrece Amazon RDS en VMware?",
        options: ["Parcialmente administrado", "Escalabilidad y rendimiento", "Poca durabilidad y desaprovechamiento de la infraestructura existente"],
        answer: "Escalabilidad y rendimiento",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "De las siguientes opciones, ¿cuál supone una amenaza cuando hemos decidido mover nuestra infraestructura a la nube?",
        options: ["Desaparición del proveedor", "Modelo de negocio joven", "Necesidad de conocimiento limitado y de alto coste"],
        answer: "Desaparición del proveedor",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "De las siguientes opciones, ¿cuál supone una fortaleza que nos permite afianzar nuestra estrategia de migración a la nube?",
        options: ["Reducción de costes de implantación para el cliente", "Reducción de la huella medioambiental", "Imposibilidad de compartir archivos y carpetas"],
        answer: "Reducción de costes de implantación para el cliente",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "De todas las operaciones que se realizan en un datacenter, ¿cuál es una de las primeras?",
        options: ["Creación de un ecosistema virtualizado para optimizar el uso de recursos software", "Creación de un ecosistema virtualizado para optimizar el uso de recursos hardware", "Creación de una adecuada infraestructura de cableado de red"],
        answer: "Creación de un ecosistema virtualizado para optimizar el uso de recursos hardware",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Dentro de Apache Hadoop, ¿qué herramientas pueden ayudarnos a realizar las consultas de la manera más eficiente posible?",
        options: ["Apache Sqoop, Apache Flume y Apache Kafka", "MapReduce, HDFS y YARN", "Hadoop Hive, Impala y visualización de datos"],
        answer: "Hadoop Hive, Impala y visualización de datos",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Desde el punto de vista de un administrador de la nube, ¿cuál es el punto que requiere más atención en su interacción con ella?",
        options: ["La gestión de claves, dada su naturaleza relacionada con la seguridad", "El método de encriptación de datos", "Cómo realizar la virtualización de los datos"],
        answer: "La gestión de claves, dada su naturaleza relacionada con la seguridad",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "En este modelo de nube, ¿qué papel juegan las API?",
        options: ["Juegan el mismo papel que hemos visto en las nubes tanto privadas como públicas", "El uso de las API es opcional, depende de cada organización y del gasto que quiera asumir", "Desaparecen gracias al uso de Red Hat, pues son objetos vulnerables a los errores al hacer actualizaciones o al cambiar de proveedores"],
        answer: "Desaparecen gracias al uso de Red Hat, pues son objetos vulnerables a los errores al hacer actualizaciones o al cambiar de proveedores",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "En las organizaciones de cierto tamaño, ¿de qué depende el buen funcionamiento de la gestión de identidades?",
        options: ["De la firma de un contrato de confidencialidad por parte de los trabajadores", "Del adecuado funcionamiento del departamento de sistemas", "De la adecuada colaboración y sincronía entre el área de RRHH y el departamento de sistemas"],
        answer: "De la adecuada colaboración y sincronía entre el área de RRHH y el departamento de sistemas",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Entre proveedor y empresa debe haber un acuerdo SLA; ¿qué tipo de compensación tendría la empresa si, por ejemplo, perdiera alguno de sus sistemas)?",
        options: ["Lo único que recibiría sería un descuento en su factura mensual", "Lo único que recibiría sería una indemnización acorde con lo que la empresa estimase oportuno", "No es un aspecto que se recoja en un SLA"],
        answer: "Lo único que recibiría sería un descuento en su factura mensual",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Hemos estudiado el análisis de debilidades de la nube, pero ¿sabrías decir si la fuerte dependencia de un proveedor es una debilidad del modelo privado o del modelo público?",
        options: ["No es una debilidad que hayamos estudiado", "Modelo público", "Modelo privado"],
        answer: "Modelo público",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Hemos visto que, en el caso de Google, el cifrado de datos se realiza de manera diferente, pero ¿sabrías decir por qué?",
        options: ["Porque los datos se encriptan o cifran antes de que se lleguen a escribir en el disco, por lo que se garantiza la seguridad y la integridad de la información en todo momento", "Porque tiene una réplica de la nube donde almacena los datos y, así, de sufrir algún tipo de ataque, la original quedaría bloqueada, pero podríamos seguir contando con la copia", "Google realiza el cifrado de datos del mismo modo que los demás modelos que hemos estudiado"],
        answer: "Porque los datos se encriptan o cifran antes de que se lleguen a escribir en el disco, por lo que se garantiza la seguridad y la integridad de la información en todo momento",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "La migración de todas las aplicaciones empresariales a la nube híbrida ¿se considera un objetivo para la organización?",
        options: ["No es un factor que esté entre los objetivos de una organización", "Sí, supone un objetivo a corto plazo", "Sí, supone un objetivo a largo plazo"],
        answer: "Sí, supone un objetivo a largo plazo",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Para realizar un networking o despliegue de redes en OpenStack, ¿qué opciones se recomiendan?",
        options: ["Llevar a cabo tal proceso mediante un proveedor de red", "No es posible realizar un networking en OpenStack", "Llevarlo a cabo mediante un proveedor de red o de autoservicio de redes"],
        answer: "Llevarlo a cabo mediante un proveedor de red o de autoservicio de redes",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Sabemos que las consultas pueden hacerse en distintos intervalos de tiempo, pero, en concreto, la consulta de 2 a 10 minutos ¿en qué nivel de proceso por lotes se encuentra?",
        options: ["Macrolotes", "No existe ningún tipo de clasificación por tiempos en el big data", "Microlotes"],
        answer: "Microlotes",
        subject: "HLC (Horas de Libre Configuración)",
        source: "repaso"
    },
    {
        question: "Al configurar Postfix, ¿qué línea define el nombre del servidor en el archivo main.cf?",
        options: ["Domain_id", "Server_name", "Myhostname"],
        answer: "Myhostname",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "Al configurar el acceso en Apache, ¿cuál es la función del archivo .htaccess?",
        options: ["Contener información de control de acceso para un directorio específico", "Almacenar las imágenes y vídeos de la página principal", "Guardar el historial de navegación de todos los usuarios"],
        answer: "Contener información de control de acceso para un directorio específico",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "Al configurar un entorno de alta densidad, ¿por qué se recomienda reducir el ancho de canal de 80 MHz a 20 MHz?",
        options: ["Para aumentar el número de canales no solapados disponibles y reducir la interferencia", "Para que los teléfonos IP antiguos puedan reconocer la señal de 5 GHz", "Para ahorrar espacio en el disco duro del controlador inalámbrico"],
        answer: "Para aumentar el número de canales no solapados disponibles y reducir la interferencia",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "Al configurar un proxy Squid, ¿para qué se utilizan las listas negras?",
        options: ["Para identificar a los usuarios que tienen permiso total", "Para realizar el bloqueo de sitios web no permitidos", "Para cambiar automáticamente el nombre del dominio"],
        answer: "Para realizar el bloqueo de sitios web no permitidos",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "En el contexto de WiFi 6, ¿qué función cumple el \"BSS Coloring\"?",
        options: ["Cambia el color de los LEDs del punto de acceso según el número de usuarios conectados", "Permite pintar mapas de calor en tiempo real sin necesidad de software externo", "Identifica las transmisiones de diferentes redes cercanas para que los dispositivos ignoren el ruido de redes ajenas"],
        answer: "Identifica las transmisiones de diferentes redes cercanas para que los dispositivos ignoren el ruido de redes ajenas",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "En el entorno comercial, ¿por qué se suelen usar VPNs para conectar sucursales?",
        options: ["Para que los clientes puedan entrar gratis a la red interna", "Para proteger los datos de clientes y las transacciones realizadas", "Para evitar el uso de direcciones MAC en la red"],
        answer: "Para proteger los datos de clientes y las transacciones realizadas",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "En el proceso de comunicación web, ¿qué acción realiza el navegador tras recibir la respuesta del servidor?",
        options: ["Interpreta la respuesta y muestra el contenido al usuario final", "Borra automáticamente el recurso solicitado del servidor remoto", "Envía una señal de voz analógica para confirmar la recepción"],
        answer: "Interpreta la respuesta y muestra el contenido al usuario final",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "En la configuración de Roundcube, ¿por qué es importante eliminar la carpeta del instalador tras finalizar?",
        options: ["Por seguridad, para evitar que terceros puedan reconfigurar el servidor web", "Porque el protocolo SMTP no funciona si esa carpeta existe", "Para liberar espacio en el disco duro del servidor Ubuntu"],
        answer: "Por seguridad, para evitar que terceros puedan reconfigurar el servidor web",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "En una comparativa técnica, ¿cuál es la principal limitación de una solución basada únicamente en Squid Proxy?",
        options: ["No ofrece cifrado propio y depende de firewalls externos para la seguridad perimetral", "Es incapaz de filtrar el contenido de las páginas web que no usan imágenes", "Solo puede instalarse en servidores que no tengan conexión a una red LAN"],
        answer: "No ofrece cifrado propio y depende de firewalls externos para la seguridad perimetral",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "Tras la instalación física y configuración de red, ¿cuál es el paso final para asegurar el funcionamiento del AP?",
        options: ["Pintar el dispositivo", "Cambiar el cable de alimentación", "Prueba de conectividad"],
        answer: "Prueba de conectividad",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál de los siguientes es un cliente de correo ampliamente usado en entornos empresariales?",
        options: ["Windows Server", "Google Drive", "Microsoft Outlook"],
        answer: "Microsoft Outlook",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál es el juego de caracteres obligatorio para enviar URLs a través de internet?",
        options: ["UTF-16", "EBCDIC", "ASCII"],
        answer: "ASCII",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál es el lugar donde se almacenan los correos recibidos y enviados de una cuenta?",
        options: ["La memoria RAM del cliente", "El buzón de usuario", "El historial del navegador web"],
        answer: "El buzón de usuario",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál es el límite máximo teórico de conexiones que suele soportar un encaminador doméstico?",
        options: ["253 conexiones", "100 conexiones", "500 conexiones"],
        answer: "253 conexiones",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál es el objetivo principal de la tecnología DKIM en la cabecera de un mensaje?",
        options: ["Bloquear todas las direcciones IP que no pertenezcan al mismo país", "Garantizar mediante una firma digital que el contenido no ha sido modificado en tránsito", "Ocultar la identidad del remitente para proteger su privacidad legal"],
        answer: "Garantizar mediante una firma digital que el contenido no ha sido modificado en tránsito",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál es el procedimiento correcto para alimentar un AP si el switch de la red local no dispone de tecnología PoE?",
        options: ["Utilizar una fuente de alimentación externa compatible", "No es posible instalar un Ap sin un switch Poe", "Conectar dos cables Ethernet en paralelo"],
        answer: "Utilizar una fuente de alimentación externa compatible",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál es el protocolo estándar utilizado para el envío de correos electrónicos a través de internet?",
        options: ["Ftp", "Http", "Smtp"],
        answer: "Smtp",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál es el puerto por defecto en el que opera el protocolo seguro HTTPS?",
        options: ["80", "443", "21"],
        answer: "443",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál es la forma de autenticación menos segura, ya que envía credenciales en texto plano?",
        options: ["Autenticación básica", "Kerberos", "Autenticación mutua"],
        answer: "Autenticación básica",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "¿Cuál es la forma más fácil de configurar un enrutador moderno si el fabricante ofrece una herramienta específica para el teléfono?",
        options: ["Usar una aplicación móvil", "Usar un cable de consola", "Usar comandos por terminal"],
        answer: "Usar una aplicación móvil",
        subject: "Servicios Red",
        source: "repaso"
    },
    {
        question: "BranchCache es una tecnología que:",
        options: ["Sincroniza archivos para acceso sin conexión", "Elimina carpetas temporales", "Cierra puertos TCP abiertos"],
        answer: "Sincroniza archivos para acceso sin conexión",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "Comprobar los servicios garantiza:",
        options: ["Reinicio del sistema", "Accesibilidad y correcta configuración de recursos compartidos", "Desinstalación automática del software"],
        answer: "Accesibilidad y correcta configuración de recursos compartidos",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "Dameware permite:",
        options: ["Ejecutar scripts y automatizar tareas", "Crear páginas web", "Diseñar bases de datos"],
        answer: "Ejecutar scripts y automatizar tareas",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "Durante el inicio de seguridad:",
        options: ["Se elimina la autenticación", "Se crean claves de cifrado de sesión", "Se desactiva el cifrado"],
        answer: "Se crean claves de cifrado de sesión",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "Durante la comunicación RDP la mayoría de los datos:",
        options: ["Pasan del cliente al servidor", "Pasan del servidor al cliente", "No se transmiten datos"],
        answer: "Pasan del servidor al cliente",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "El cliente RDP envía información sobre:",
        options: ["Dominio de usuario, nombre de usuario y contraseña", "Dirección postal", "Número de teléfono"],
        answer: "Dominio de usuario, nombre de usuario y contraseña",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "El cuerpo del paquete IP contiene:",
        options: ["La dirección MAC", "El encabezado", "Los datos transmitidos"],
        answer: "Los datos transmitidos",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "El firewall del sistema operativo UFW se utiliza en:",
        options: ["Ubuntu", "Windows Server", "Red Hat Enterprise Linux"],
        answer: "Ubuntu",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "El intercambio de capacidades en RDP:",
        options: ["Permite que cliente y servidor comuniquen sus capacidades", "Permite crear redes nuevas", "Permite eliminar usuarios"],
        answer: "Permite que cliente y servidor comuniquen sus capacidades",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "El protocolo NFS se usa principalmente en:",
        options: ["Distribuciones Linux", "Servidores Windows", "Dispositivos móviles"],
        answer: "Distribuciones Linux",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "El puerto 25 está asociado con el servicio:",
        options: ["HTTP", "DNS", "SMTP"],
        answer: "HTTP",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "El segundo servidor de N-Central debe tener:",
        options: ["Linux exclusivamente", "Android", "Windows Server"],
        answer: "Windows Server",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "El servicio IMAP se asocia al manejo de:",
        options: ["Recursos compartidos", "Correo electrónico", "Bases de datos SQL"],
        answer: "Correo electrónico",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "El servicio Samba se reinicia con:",
        options: ["smb /reload", "sudo systemctl restart smbd", "restart network"],
        answer: "sudo systemctl restart smbd",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "En Linux (Samba), ¿qué parámetro permite acceso sin contraseña a un recurso compartido?",
        options: ["guest ok = yes", "valid users = all", "encrypt password = off"],
        answer: "guest ok = yes",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "En Linux, la verificación de Samba se realiza accediendo desde un equipo:",
        options: ["macOS", "Windows", "Android"],
        answer: "Windows",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "En Samba, el parámetro “read only = no” indica:",
        options: ["Que está oculto", "Que el recurso es editable", "Que solo puede leerse"],
        answer: "Que el recurso es editable",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "En Samba, la opción “Visible” permite:",
        options: ["Cifrar archivos", "Mostrar o no la carpeta compartida en la red", "Cambiar el nombre del recurso"],
        answer: "Mostrar o no la carpeta compartida en la red",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "En Windows Server, se habilita la enumeración basada en acceso para:",
        options: ["Forzar el acceso anónimo", "Mostrar todos los archivos", "Evitar que usuarios sin permiso vean archivos"],
        answer: "Evitar que usuarios sin permiso vean archivos",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "En Windows, tras crear un recurso compartido, se comprueba su funcionamiento desde:",
        options: ["Panel de control > Sistema", "Firewall > Puertos", "Red > Nombre del equipo"],
        answer: "Red > Nombre del equipo",
        subject: "Sistemas Operativos en Red",
        source: "repaso"
    },
    {
        question: "A dialogue is:",
        options: ["A conversation between two or more people", "A monologue", "A poem with two voices"],
        answer: "A conversation between two or more people",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "A good cover letter should be:",
        options: ["Long and detailed", "Short and clear", "Without structure"],
        answer: "Short and clear",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "A podcast is:",
        options: ["A spoken audio conversation", "A written interview", "A TV show"],
        answer: "A spoken audio conversation",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "Addition linkers such as “Moreover” and “Furthermore” express:",
        options: ["Adding ideas", "Contrast", "Consequence"],
        answer: "Adding ideas",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "An essay is:",
        options: ["to explain, in a detailed way, what people, places or objects are like.", "a spoken conversation that includes at least two characters.", "a short, formal piece of writing that deals with a single topic."],
        answer: "a short, formal piece of writing that deals with a single topic.",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "An example of a WH-question is:",
        options: ["My father asked me where I had bought that book.", "My father told that I had bought the book.", "My father asked me if I had bought that book."],
        answer: "My father asked me where I had bought that book.",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "Can I open the window? means:",
        options: ["¿Puedo abrir la ventana?", "¿Sé abrir la ventana?", "¿Abrí la ventana?"],
        answer: "¿Puedo abrir la ventana?",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "Can expresses:",
        options: ["Possibility", "Ability", "Obligation"],
        answer: "Ability",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "Can’t means:",
        options: ["No puedo / no sé", "Debo", "Tengo que"],
        answer: "No puedo / no sé",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "Choose the word containing /j/:",
        options: ["Europe", "Window", "Yellow"],
        answer: "Yellow",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "Dialogues are used to:",
        options: ["Exchange ideas and information", "Describe objects", "Write reports"],
        answer: "Exchange ideas and information",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "Especially means:",
        options: ["Particularly", "Generally", "Finally"],
        answer: "Particularly",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "For example and for instance are used to:",
        options: ["Add reasons", "Give examples", "Compare ideas"],
        answer: "Give examples",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "For example introduces:",
        options: ["A contrast", "An illustration", "A summary"],
        answer: "An illustration",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "He can play the guitar means:",
        options: ["Sabe tocar la guitarra", "Tiene una guitarra", "Le gusta la guitarra"],
        answer: "Sabe tocar la guitarra",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "He finished doing his homework means:",
        options: ["Terminó de hacer los deberes", "Va a empezar los deberes", "Odia los deberes"],
        answer: "Terminó de hacer los deberes",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "He forgot to call her means:",
        options: ["Se olvidó de llamarla", "La llamó", "No quiere llamarla"],
        answer: "Se olvidó de llamarla",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "I ate very much yesterday. _______ I.",
        options: ["So did", "So do", "Ambas son correctas."],
        answer: "So did",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "I don’t like coffee means:",
        options: ["Me gusta el café", "No me gusta el café", "Me encanta el café"],
        answer: "No me gusta el café",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "I don’t mind studying means:",
        options: ["No me importa estudiar", "No quiero estudiar", "Odio estudiar"],
        answer: "No me importa estudiar",
        subject: "Inglés",
        source: "repaso"
    },
    {
        question: "En el proyecto emprendedor, los Business Angels se caracterizan por:",
        options: ["Ser empleados de la startup", "Ser agencias gubernamentales", "Ser inversores con experiencia empresarial"],
        answer: "Ser inversores con experiencia empresarial",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "En un análisis financiero, ¿qué combinación de herramientas permite evaluar simultáneamente la situación pasada y la proyección futura de una empresa?",
        options: ["Flujo de caja y análisis vertical.", "Presupuesto y análisis horizontal.", "Ratio de rentabilidad y auditoría ambiental."],
        answer: "Presupuesto y análisis horizontal.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "Una acción recomendada para fomentar la inclusión en la empresa es:",
        options: ["Contratar sin procesos definidos", "Excluir perfiles no tradicionales", "Realizar encuestas de clima laboral"],
        answer: "Realizar encuestas de clima laboral",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "Una empresa que adopta prácticas sostenibles consigue, entre otras cosas:",
        options: ["Reducir sus obligaciones legales", "Incrementar costes operativos", "Mejorar su reputación y atraer talento"],
        answer: "Mejorar su reputación y atraer talento",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál de las siguientes NO es una fase de la entrevista de problema?",
        options: ["Clasificación de problemas.", "Especificación de problemas.", "Identificación de oportunidades de inversión."],
        answer: "Identificación de oportunidades de inversión.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál de los siguientes factores incrementa el riesgo de fracaso en la transformación digital?",
        options: ["Automatizar tareas operativas básicas.", "Utilizar análisis predictivos para detectar oportunidades de mercado.", "No integrar los valores culturales de la empresa en el proceso de transformación."],
        answer: "No integrar los valores culturales de la empresa en el proceso de transformación.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es el papel de los indicadores ambientales como la huella de carbono en la evaluación del impacto empresarial?",
        options: ["Son herramientas cualitativas sin relevancia cuantificable.", "Permiten medir de forma concreta el impacto ambiental para ajustar estrategias sostenibles.", "Se utilizan solo en informes destinados a organismos públicos."],
        answer: "Permiten medir de forma concreta el impacto ambiental para ajustar estrategias sostenibles.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es el principal propósito del análisis del entorno?",
        options: ["Conocer tendencias emergentes y actores relevantes en el sector.", "Determinar el nivel de satisfacción de los clientes actuales.", "Crear una estrategia de publicidad más efectiva."],
        answer: "Conocer tendencias emergentes y actores relevantes en el sector.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es el principal riesgo de un modelo de negocio rígido?",
        options: ["Permite una mejor planificación estratégica.", "Limita la capacidad de adaptación a cambios.", "Reduce la vulnerabilidad frente a la competencia."],
        answer: "Limita la capacidad de adaptación a cambios.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es la mejor estrategia para evaluar la viabilidad de una idea de negocio antes de invertir en su desarrollo?",
        options: ["Realizar entrevistas de problema y estudios de mercado para validar su necesidad.", "Implementarla directamente y evaluar su éxito en el mercado.", "Analizar el rendimiento de empresas similares sin hacer estudios propios."],
        answer: "Realizar entrevistas de problema y estudios de mercado para validar su necesidad.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es un beneficio de fomentar el intraemprendimiento?",
        options: ["Desarrollar nuevas ideas dentro de una organización.", "Reducir los costos de formación de empleados.", "Evitar que los empleados propongan cambios."],
        answer: "Desarrollar nuevas ideas dentro de una organización.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es un beneficio de la economía circular?",
        options: ["Reducir el desperdicio mediante el reciclaje.", "Incrementar costos de producción.", "Depender de materiales desechables."],
        answer: "Reducir el desperdicio mediante el reciclaje.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es un ejemplo de innovación en procesos?",
        options: ["Solo lanzar campañas de marketing.", "Introducir nuevas formas de producción.", "Cambiar el nombre de un producto."],
        answer: "Introducir nuevas formas de producción.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es un objetivo de los ODS (Objetivos de Desarrollo Sostenible)?",
        options: ["Eliminar la tecnología.", "Erradicar la pobreza.", "Crear más productos comerciales."],
        answer: "Erradicar la pobreza.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es una característica de las competencias digitales básicas?",
        options: ["Diseñar sistemas complejos.", "Resolver problemas tecnológicos básicos.", "Crear modelos de negocio avanzados."],
        answer: "Resolver problemas tecnológicos básicos.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es una característica del liderazgo emprendedor?",
        options: ["Capacidad para inspirar equipos hacia metas innovadoras.", "Mantener un enfoque estricto sin flexibilidad.", "Evitar riesgos calculados."],
        answer: "Capacidad para inspirar equipos hacia metas innovadoras.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es una competencia digital básica?",
        options: ["Saber buscar y evaluar información.", "Programar en lenguajes avanzados.", "Diseñar sitios web complejos."],
        answer: "Saber buscar y evaluar información.",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es una ventaja de usar inteligencia artificial en los negocios?",
        options: ["Crear una nueva forma jurídica", "Tomar decisiones basadas en datos en tiempo real", "Eliminar todos los empleos administrativos"],
        answer: "Tomar decisiones basadas en datos en tiempo real",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es uno de los factores clave al elegir la forma jurídica de una empresa?",
        options: ["El número de socios y la responsabilidad patrimonial", "El color del logotipo", "La ubicación de la competencia"],
        answer: "El número de socios y la responsabilidad patrimonial",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "¿Cuál es uno de los objetivos principales de la ética empresarial?",
        options: ["Maximizar los beneficios a corto plazo", "Promover la confianza y los valores en la organización", "Aumentar la competitividad mediante publicidad agresiva"],
        answer: "Promover la confianza y los valores en la organización",
        subject: "Empleabilidad II",
        source: "repaso"
    },
    {
        question: "1¿Cuál de los siguientes es un beneficio de la transformación digital para la competitividad empresarial?",
        options: ["Reducción en la eficiencia de los procesos", "Mejora en la capacidad de adaptarse rápidamente a los cambios del mercado", "Menor necesidad de innovación"],
        answer: "Mejora en la capacidad de adaptarse rápidamente a los cambios del mercado",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Cuál es un desafío relacionado con la implementación de tecnologías digitales en una empresa?",
        options: ["Dificultades en la medición de rentabilidad de la inversión", "Escasez de productos en el mercado", "Baja demanda de empleados cualificados"],
        answer: "Dificultades en la medición de rentabilidad de la inversión",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Cómo contribuye el uso de Cloud Computing a la digitalización?",
        options: ["Aumenta la cantidad de recursos físicos necesarios", "Permite escalar operaciones y ajustar recursos TI de manera eficiente", "Impide la mejora de la productividad"],
        answer: "Permite escalar operaciones y ajustar recursos TI de manera eficiente",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿En qué casos es más útil una base de datos NoSQL?",
        options: ["Aplicaciones que manejan grandes volúmenes de datos a alta velocidad.", "Sistemas de bases de datos con estructuras de tabla simples.", "Análisis de datos en tiempo real con estructura relacional."],
        answer: "Aplicaciones que manejan grandes volúmenes de datos a alta velocidad.",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué característica distingue a las bases de datos NoSQL?",
        options: ["Requieren un esquema fijo para almacenar datos.", "Permiten la escalabilidad rápida para datos grandes y no estructurados.", "Tienen mayor complejidad operativa en comparación con SQL."],
        answer: "Permiten la escalabilidad rápida para datos grandes y no estructurados.",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué debe hacer una empresa antes de emprender un proyecto de transformación digital?",
        options: ["Evitar realizar inversiones iniciales significativas.", "Desarrollar un nuevo modelo de negocio.", "Identificar su posición actual y estrategia a largo plazo."],
        answer: "Identificar su posición actual y estrategia a largo plazo.",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué ejemplo de base de datos NoSQL se menciona en el texto?",
        options: ["MySQL.", "Oracle Database.", "Apache CouchDB."],
        answer: "Apache CouchDB.",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué impacto macroeconómico positivo tienen las tecnologías habilitadoras?",
        options: ["Reducción en la cantidad de empleos necesarios.", "Eliminación de procesos manuales.", "Creación de empleos altamente cualificados."],
        answer: "Creación de empleos altamente cualificados.",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué paradigma se basa en procesamiento masivo en centros centralizados?",
        options: ["Edge Computing", "Cloud Computing", "Mist Computing"],
        answer: "Cloud Computing",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué problema ayuda a resolver el Edge Computing en vehículos autónomos?",
        options: ["Procesar grandes volúmenes de datos en la nube", "Reducir la dependencia de sensores IoT", "Responder rápidamente a estímulos del entorno"],
        answer: "Responder rápidamente a estímulos del entorno",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué rol tiene la PaaS en la nube?",
        options: ["Proveer infraestructura básica para servicios locales", "Facilitar el desarrollo y despliegue de aplicaciones personalizadas", "Reemplazar el almacenamiento de datos en redes"],
        answer: "Facilitar el desarrollo y despliegue de aplicaciones personalizadas",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué se entiende por \"cambio cultural\" en el contexto de la transformación digital?",
        options: ["Cambio en la estructura de precios de la empresa", "La adaptación de la cultura organizacional a un entorno digital y flexible", "La sustitución de empleados por robots"],
        answer: "La adaptación de la cultura organizacional a un entorno digital y flexible",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué significa que la nube permite \"actualizaciones automáticas\"?",
        options: ["Los usuarios no necesitan actualizar manualmente sus programas", "Los datos locales se sincronizan con servidores locales", "Las redes deben instalarse cada cierto tiempo"],
        answer: "Los usuarios no necesitan actualizar manualmente sus programas",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué tecnología permite hacer transacciones seguras y seguir el rastro de los activos?",
        options: ["Blockchain", "Cloud Computing", "Realidad aumentada"],
        answer: "Blockchain",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué tipo de tecnología facilita la creación de productos innovadores mediante el análisis de datos?",
        options: ["Realidad aumentada", "Machine Learning", "Big Data y analytics"],
        answer: "Big Data y analytics",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué ventaja aporta la seguridad en la nube?",
        options: ["Protege datos mediante redundancia y encriptación", "Elimina la necesidad de copias de seguridad", "Restringe la interoperabilidad entre sistemas"],
        answer: "Protege datos mediante redundancia y encriptación",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué ventaja ofrece el diseño distribuido de NoSQL?",
        options: ["Incremento en la capacidad de almacenamiento.", "Garantiza disponibilidad y fiabilidad de datos.", "Optimización de recursos en servidores locales."],
        answer: "Garantiza disponibilidad y fiabilidad de datos.",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "1¿Qué ventaja ofrece el paradigma de Fog Computing sobre el Cloud Computing?",
        options: ["Procesar datos cerca de su origen para reducir latencia", "Uso exclusivo de almacenamiento físico", "Restringir acceso a dispositivos móviles"],
        answer: "Procesar datos cerca de su origen para reducir latencia",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "En el análisis de viabilidad organizacional para la digitalización, ¿qué aspecto se evalúa específicamente respecto a los empleados?",
        options: ["La actitud de los empleados hacia la digitalización y la capacidad de la dirección para gestionar los cambios", "La necesidad de actualización de la infraestructura", "La viabilidad económica de la tecnología implementada"],
        answer: "La actitud de los empleados hacia la digitalización y la capacidad de la dirección para gestionar los cambios",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "En el contexto de la digitalización, ¿cuál es el propósito principal de un ERP (Enterprise Resource Planning)?",
        options: ["Gestionar las relaciones con los clientes", "Actuar como un centro de operaciones que integra datos de diferentes áreas", "Automatizar los procesos de ventas y marketing"],
        answer: "Actuar como un centro de operaciones que integra datos de diferentes áreas",
        subject: "Digitalización",
        source: "repaso"
    },
    {
        question: "El objetivo de inventariar servicios de red es:",
        options: ["Crear nuevos servidores", "Controlar los servicios activos y detectar vulnerabilidades", "Aumentar la velocidad de la red"],
        answer: "Controlar los servicios activos y detectar vulnerabilidades",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "El protocolo WPA2 utiliza el cifrado:",
        options: ["AES con CCMP", "DES", "RC4"],
        answer: "AES con CCMP",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "El protocolo WPA3 protege las redes abiertas mediante:",
        options: ["RC4", "TKIP", "OWE (Opportunistic Wireless Encryption)"],
        answer: "OWE (Opportunistic Wireless Encryption)",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "El sistema operativo del NAS gestiona:",
        options: ["Exclusivamente comandos por consola", "Solo copias manuales", "Aplicaciones y configuración mediante interfaz web"],
        answer: "Aplicaciones y configuración mediante interfaz web",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "El “IP Hijacking” consiste en:",
        options: ["Interceptar tráfico cifrado con TLS", "Secuestrar una sesión activa imitando la dirección IP de la víctima", "Cambiar contraseñas de usuario"],
        answer: "Secuestrar una sesión activa imitando la dirección IP de la víctima",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "El “SMTP Spoofing” es una técnica usada para:",
        options: ["Instalar software antivirus", "Enviar mensajes con remitentes falsos", "Interceptar contraseñas"],
        answer: "Enviar mensajes con remitentes falsos",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "La entidad encargada de emitir certificados digitales en España es:",
        options: ["Fábrica Nacional de Moneda y Timbre", "Policía Nacional", "Ministerio de Defensa"],
        answer: "Fábrica Nacional de Moneda y Timbre",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "La redundancia en SAN se consigue mediante:",
        options: ["Cifrado SSL", "Desactivación automática de puertos", "Multipath I/O y arquitectura activa-activa"],
        answer: "Multipath I/O y arquitectura activa-activa",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Las SAN son ideales en entornos donde:",
        options: ["Se usa almacenamiento temporal", "Los servicios no pueden permitirse cortes", "No hay usuarios concurrentes"],
        answer: "Los servicios no pueden permitirse cortes",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Las copias de seguridad programadas son necesarias para:",
        options: ["Eliminar usuarios antiguos", "Actualizar firmware", "Evitar el punto único de falla en almacenamiento principal"],
        answer: "Evitar el punto único de falla en almacenamiento principal",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Los NAS empresariales permiten añadir almacenamiento externo mediante:",
        options: ["Conectores VGA", "Puertos USB o eSATA compatibles", "Ranuras de memoria RAM"],
        answer: "Puertos USB o eSATA compatibles",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Los factores que influyen en la accesibilidad del almacenamiento incluyen:",
        options: ["Temperatura ambiente", "Longitud de los discos duros", "Tipo de conexión y protocolos de red compatibles"],
        answer: "Tipo de conexión y protocolos de red compatibles",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Los modelos NAS empresariales se seleccionan considerando:",
        options: ["Capacidad proyectada y número de discos admitidos", "Consumo eléctrico del router", "Tipo de monitor y teclado"],
        answer: "Capacidad proyectada y número de discos admitidos",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Para proteger un certificado digital es necesario:",
        options: ["Guardarlo en texto plano", "Enviarlo sin cifrar por correo", "Habilitar la protección mediante clave privada"],
        answer: "Habilitar la protección mediante clave privada",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Un sistema DFS en NAS sirve para:",
        options: ["Crear volúmenes cifrados", "Proporcionar acceso a archivos del clúster independientemente del nodo", "Limitar accesos remotos"],
        answer: "Proporcionar acceso a archivos del clúster independientemente del nodo",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Un sistema de archivos distribuido (DFS) permite:",
        options: ["Acceder a archivos desde varios dispositivos NAS del clúster", "Eliminar las copias de seguridad", "Bloquear los accesos concurrentes"],
        answer: "Acceder a archivos desde varios dispositivos NAS del clúster",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Una buena práctica frente al correo no deseado es:",
        options: ["No abrir archivos adjuntos sospechosos", "Abrir todos los mensajes recibidos", "Enviar respuesta automática"],
        answer: "No abrir archivos adjuntos sospechosos",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Una de las diferencias clave entre NAS y SAN es:",
        options: ["SAN utiliza Wi-Fi, NAS solo cable", "NAS trabaja a nivel de archivos, SAN a nivel de bloques", "NAS no permite redundancia"],
        answer: "NAS trabaja a nivel de archivos, SAN a nivel de bloques",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "Una firma digital válida garantiza:",
        options: ["Compresión de datos", "Autenticidad y no modificación del mensaje", "Encriptación simétrica"],
        answer: "Autenticidad y no modificación del mensaje",
        subject: "Seguridad Informatica",
        source: "repaso"
    },
    {
        question: "WPA3 incorpora el método SAE para:",
        options: ["Filtrar paquetes TCP", "Cifrar discos duros", "Evitar ataques por fuerza bruta con contraseñas débiles"],
        answer: "Evitar ataques por fuerza bruta con contraseñas débiles",
        subject: "Seguridad Informatica",
        source: "repaso"
    }
];

// STATE AND DATABASE MANAGEMENT
function createDefaultDb() {
    return {
        questions: [],
        starred: [],
        history: [],
        soundEnabled: true,
        streak: 0,
        lastStudyDate: null, // YYYY-MM-DD
        questionStats: {}, // normQ -> { attempts: 0, correct: 0 }
        millionaireWins: 0,
        millionairePlayed: 0,
        balance: 0,
        purchasedThemes: ['classic'],
        activeTheme: 'classic',
        purchasedFonts: ['default'],
        activeFont: 'default',
        purchasedButtons: ['default'],
        activeButton: 'default',
        purchasedPhrases: ['phrase-malaga1'],
        activePhrase: 'phrase-malaga1',
        fontSize: 'default',
        lineHeight: 'default',
        letterSpacing: 'default',
        maxReadingWidth: 'default',
        dyslexiaMode: false,
        highConcentration: false,
        intensiveStudy: false,
        indexPreloaded: false,
        unlockedAchievements: []
    };
}

let db = createDefaultDb();

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
    { id: 'first_test', title: 'Primer Paso', desc: 'Completa tu primer cuestionario.', condition: () => db.history.length >= 1 },
    { id: 'perfect_score', title: 'Examen Perfecto', desc: 'Consigue un 100% de aciertos.', condition: () => db.history.some(h => h.percent === 100) },
    { id: 'streak_3', title: 'Constancia', desc: 'Alcanza una racha de 3 días de estudio.', condition: () => db.streak >= 3 },
    { id: 'streak_7', title: 'Hábito de Hierro', desc: 'Alcanza una racha de 7 días de estudio.', condition: () => db.streak >= 7 },
    { id: 'starred_10', title: 'Coleccionista', desc: 'Guarda 10 o más preguntas favoritas.', condition: () => db.starred.length >= 10 },
    { id: 'repaso_master', title: 'Mente Curiosa', desc: 'Completa un test de solo repaso.', condition: () => db.history.some(h => h.mode !== 'smart' && h.subjects.includes("Repaso") || h.subjects === "Inglés" || h.subjects === "Digitalización") },
    { id: 'millionaire_play', title: 'Concursante', desc: 'Juega una partida de Quién Quiere Ser Millonario.', condition: () => (db.millionairePlayed || 0) > 0 },
    { id: 'millionaire_win', title: 'Mente Millonaria', desc: 'Gana el premio máximo de 1.000.000 €.', condition: () => (db.millionaireWins || 0) > 0 },
    { id: 'test_10', title: 'Constancia SMR', desc: 'Completa 10 cuestionarios en total.', condition: () => db.history.length >= 10 },
    { id: 'correct_100', title: 'Sabio SMR', desc: 'Responde 100 preguntas correctamente en total.', condition: () => { let sum = 0; db.history.forEach(h => sum += (h.score || 0)); return sum >= 100; } },
    { id: 'streak_15', title: 'Estudiante de Élite', desc: 'Alcanza una racha de 15 días de estudio.', condition: () => db.streak >= 15 },
    { id: 'time_limit_win', title: 'Contra el Reloj', desc: 'Completa un test en Modo Examen con tiempo límite.', condition: () => db.history.some(h => h.mode === 'exam') },
    { id: 'smart_mode_win', title: 'Inteligencia Artificial', desc: 'Completa un test en Modo Inteligente.', condition: () => db.history.some(h => h.mode === 'smart') },
    { id: 'starred_25', title: 'Enciclopedia', desc: 'Guarda 25 o más preguntas favoritas.', condition: () => db.starred.length >= 25 },
    { id: 'perfect_exam', title: 'Examen de Honor', desc: 'Consigue un 100% de aciertos en Modo Examen.', condition: () => db.history.some(h => h.mode === 'exam' && h.percent === 100) },
    { id: 'speedrun', title: 'Velocidad Absoluta', desc: 'Completa un test de al menos 10 preguntas en menos de 60 segundos.', condition: () => db.history.some(h => h.total >= 10 && h.timeSpent && h.timeSpent <= 60) },
    
    // NUEVOS LOGROS
    { id: 'first_purchase', title: 'Primera Compra', desc: 'Adquiere tu primer producto en la tienda académica.', condition: () => (db.purchasedThemes.length + db.purchasedFonts.length + db.purchasedButtons.length) > 3 },
    { id: 'theme_hoarder', title: 'Diseñador SMR', desc: 'Adquiere 3 o más temas visuales en la tienda.', condition: () => db.purchasedThemes.length >= 3 },
    { id: 'rich_student', title: 'Estudiante Acomodado', desc: 'Acumula un saldo de 50.000 € virtuales.', condition: () => (db.balance || 0) >= 50000 },
    { id: 'millionaire_capitalist', title: 'Magnate de SMR', desc: 'Acumula un saldo de 5.000.000 € virtuales.', condition: () => (db.balance || 0) >= 5000000 },
    { id: 'streak_30', title: 'Leyenda Viviente', desc: 'Alcanza una racha de 30 días de estudio.', condition: () => db.streak >= 30 },
    { id: 'test_50', title: 'Maratón de Estudio', desc: 'Completa un test de 50 preguntas o más.', condition: () => db.history.some(h => h.total >= 50) },
    { id: 'smart_master', title: 'Mente Algorítmica', desc: 'Completa 5 tests en Modo Inteligente.', condition: () => db.history.filter(h => h.mode === 'smart').length >= 5 },
    { id: 'exam_veteran', title: 'Veterano de Exámenes', desc: 'Completa 5 tests en Modo Examen.', condition: () => db.history.filter(h => h.mode === 'exam').length >= 5 },
    { id: 'all_subjects', title: 'Generalista SMR', desc: 'Completa un test que mezcle múltiples asignaturas.', condition: () => db.history.some(h => h.subjects.includes("Mezcla")) },
    { id: 'custom_importer', title: 'Creador de Contenido', desc: 'Importa tus propias preguntas a la base de datos.', condition: () => db.questions.some(q => q.source === 'añadida') },
    { id: 'favoritos_collector', title: 'Bibliotecario', desc: 'Guarda 50 o más preguntas en tus favoritos.', condition: () => db.starred.length >= 50 },
    { id: 'achievement_collector', title: 'Coleccionista de Logros', desc: 'Desbloquea 10 logros académicos en total.', condition: () => db.unlockedAchievements.length >= 10 }
];


// Helper: Merges user DB questions with hardcoded seed review questions and removes duplicates
let cachedAllQuestions = null;
function getAllQuestions() {
    if (cachedAllQuestions) return cachedAllQuestions;
    const qList = Array.isArray(db.questions) ? db.questions : [];
    const oficials = qList.map(q => ({ ...q, source: q.source || 'oficial' }));
    const all = [...oficials, ...SEED_REPASO_QUESTIONS];
    const seen = new Set();
    cachedAllQuestions = all.filter((q) => {
        const key = `${normalizeString(q.question)}|${normalizeString(q.subject || '')}|${normalizeString(q.answer || '')}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
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
        } else if (type === 'tick') {
            osc.frequency.setValueAtTime(880, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.05);
        } else if (type === 'intro') {
            const introNotes = [220, 277.18, 329.63, 440, 554.37, 659.25, 880];
            introNotes.forEach((freq, idx) => {
                const o = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                o.connect(g);
                g.connect(audioCtx.destination);
                o.type = 'triangle';
                o.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.08);
                g.gain.setValueAtTime(0.08, audioCtx.currentTime + idx * 0.08);
                g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.08 + 0.4);
                o.start(audioCtx.currentTime + idx * 0.08);
                o.stop(audioCtx.currentTime + idx * 0.08 + 0.4);
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

// Text-to-Speech Engine
let currentUtterance = null;
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.rate = 1.05;
        window.speechSynthesis.speak(utterance);
        currentUtterance = utterance;
    }
}
function stopSpeaking() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

// Hint Generator
function generateHint(q) {
    const ans = q.answer;
    if (!ans) return "No hay pista disponible.";
    
    const words = ans.split(" ");
    const revealedWords = words.map(word => {
        // Clean word length check (only counting alphanumeric characters)
        const alphaClean = word.replace(/[^a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ]/g, '');
        if (alphaClean.length <= 3) {
            return word; // Show short words fully
        }
        
        let letterCount = 0;
        let result = "";
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (/[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ]/.test(char)) {
                if (letterCount < 3) {
                    result += char;
                } else {
                    result += "_";
                }
                letterCount++;
            } else {
                result += char; // Preserve brackets, punctuation, symbols
            }
        }
        return result;
    });
    
    return `Pista (casi directa): "${revealedWords.join(" ")}"`;
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
const speakActiveBtn = document.getElementById('speakActiveBtn');
const studyExpandAllBtn = document.getElementById('studyExpandAllBtn');
const studyCollapseAllBtn = document.getElementById('studyCollapseAllBtn');
const exitTestBtn = document.getElementById('exitTestBtn');
const showHintBtn = document.getElementById('showHintBtn');
const hintBox = document.getElementById('hintBox');
const hintText = document.getElementById('hintText');

// Millionaire Elements
const millionaireGameBtn = document.getElementById('millionaireGameBtn');
const millionaireScreen = document.getElementById('millionaireScreen');
const millionaireSetup = document.getElementById('millionaireSetup');
const millionaireGame = document.getElementById('millionaireGame');
const millionaireBackBtn = document.getElementById('millionaireBackBtn');
const millionaireSubjectsGrid = document.getElementById('millionaireSubjectsGrid');
const millSelectAllBtn = document.getElementById('millSelectAllBtn');
const millDeselectAllBtn = document.getElementById('millDeselectAllBtn');
const startMillionaireGameBtn = document.getElementById('startMillionaireGameBtn');
const exitMillionaireBtn = document.getElementById('exitMillionaireBtn');
const millCurrentLevelLabel = document.getElementById('millCurrentLevelLabel');
const millLifeline50 = document.getElementById('millLifeline50');
const millLifelineAudience = document.getElementById('millLifelineAudience');
const millLifelinePhone = document.getElementById('millLifelinePhone');
const millLifelineFeedbackBox = document.getElementById('millLifelineFeedbackBox');
const millFeedbackIcon = document.getElementById('millFeedbackIcon');
const millFeedbackContent = document.getElementById('millFeedbackContent');
const millQuestionSubjectTag = document.getElementById('millQuestionSubjectTag');
const millQuestionText = document.getElementById('millQuestionText');
const millOptionsContainer = document.getElementById('millOptionsContainer');
const millPrizeLadderPanel = document.getElementById('millPrizeLadderPanel');

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
function preloadDefaultQuestions() {
    const arr = window.ALL_QUESTIONS_DATA;
    if (arr && (Array.isArray(arr) || arr.questions)) {
        let loadedCount = 0;
        const questionsArray = Array.isArray(arr) ? arr : (arr.questions || []);
        
        questionsArray.forEach(q => {
            if (q.question && Array.isArray(q.options) && q.answer !== undefined) {
                let finalSubject = q.subject || "Sin clasificar";
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
                if (finalSubject.toLowerCase() === "sistemas operativos en red") {
                    finalSubject = "Sistemas Operativos en Red";
                }
                if (finalSubject.toLowerCase() === "seguridad informática" || finalSubject.toLowerCase() === "seguridad informatica") {
                    finalSubject = "Seguridad Informatica";
                }

                // Evitar duplicados durante la precarga
                const normText = normalizeString(q.question);
                const exists = db.questions.some(item => normalizeString(item.question) === normText && item.subject === finalSubject);

                if (!exists) {
                    db.questions.push({
                        question: q.question,
                        options: q.options,
                        answer: q.answer,
                        subject: finalSubject,
                        source: q.source || "oficial"
                    });
                    loadedCount++;
                }
            }
        });
        db.indexPreloaded = true;
        saveDatabase();
        console.log(`Pre-cargadas ${loadedCount} preguntas.`);
    } else {
        db.indexPreloaded = true;
        saveDatabase();
    }
    updateDashboardUI();
}

function syncDatabaseWithFile() {
    const arr = window.ALL_QUESTIONS_DATA;
    if (!arr) return;
    const questionsArray = Array.isArray(arr) ? arr : (arr.questions || []);
    let updated = false;
    
    const existingMap = new Map();
    db.questions.forEach(q => {
        const key = `${normalizeString(q.question)}|${normalizeString(q.subject || '')}`;
        existingMap.set(key, q);
    });

    questionsArray.forEach(q => {
        if (q.question && Array.isArray(q.options) && q.answer !== undefined) {
            let finalSubject = q.subject || "Sin clasificar";
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
            if (finalSubject.toLowerCase() === "sistemas operativos en red") {
                finalSubject = "Sistemas Operativos en Red";
            }
            if (finalSubject.toLowerCase() === "seguridad informática" || finalSubject.toLowerCase() === "seguridad informatica") {
                finalSubject = "Seguridad Informatica";
            }

            const key = `${normalizeString(q.question)}|${normalizeString(finalSubject)}`;
            const existing = existingMap.get(key);
            const fileSource = q.source || "oficial";
            
            if (!existing) {
                db.questions.push({
                    question: q.question,
                    options: q.options,
                    answer: q.answer,
                    subject: finalSubject,
                    source: fileSource
                });
                updated = true;
            } else if (existing.source !== fileSource) {
                existing.source = fileSource;
                updated = true;
            }
        }
    });

    if (updated) {
        saveDatabase();
        console.log("Database synchronized with latest questions.");
    }
}

function loadDatabase() {
    const saved = localStorage.getItem('smr_questions_db_pro');
    if (saved) {
        try {
            db = Object.assign(createDefaultDb(), JSON.parse(saved));
            // Default structures migrations
            if (!Array.isArray(db.questions)) db.questions = [];
            if (!Array.isArray(db.starred)) db.starred = [];
            if (!Array.isArray(db.history)) db.history = [];
            if (typeof db.soundEnabled !== 'boolean') db.soundEnabled = true;
            if (typeof db.streak !== 'number') db.streak = 0;
            if (db.lastStudyDate === undefined) db.lastStudyDate = null;
            if (typeof db.questionStats !== 'object' || db.questionStats === null) db.questionStats = {};
            if (typeof db.indexPreloaded !== 'boolean') db.indexPreloaded = false;
            if (typeof db.millionaireWins !== 'number') db.millionaireWins = 0;
            if (typeof db.millionairePlayed !== 'number') db.millionairePlayed = 0;
            if (typeof db.balance !== 'number') db.balance = 0;
            if (!Array.isArray(db.purchasedThemes)) db.purchasedThemes = ['classic'];
            if (!db.activeTheme) db.activeTheme = 'classic';
            if (!Array.isArray(db.purchasedFonts)) db.purchasedFonts = ['default'];
            if (!db.activeFont) db.activeFont = 'default';
            if (!Array.isArray(db.purchasedButtons)) db.purchasedButtons = ['default'];
            if (!db.activeButton) db.activeButton = 'default';
            if (!Array.isArray(db.purchasedPhrases)) db.purchasedPhrases = ['phrase-malaga1'];
            if (!db.activePhrase) db.activePhrase = 'phrase-malaga1';
            if (!Array.isArray(db.unlockedAchievements)) {
                db.unlockedAchievements = [];
                // Quietly pre-populate achievements based on current database stats
                ACHIEVEMENTS.forEach(ach => {
                    if (ach.condition()) {
                        db.unlockedAchievements.push(ach.id);
                    }
                });
            }
            applyStoreCustomizations();


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
                    if (cleaned.toLowerCase() === "sistemas operativos en red") {
                        cleaned = "Sistemas Operativos en Red";
                    }
                    if (cleaned.toLowerCase() === "seguridad informática" || cleaned.toLowerCase() === "seguridad informatica") {
                        cleaned = "Seguridad Informatica";
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

    if (!db.indexPreloaded) {
        preloadDefaultQuestions();
    } else {
        updateDashboardUI();
        syncDatabaseWithFile();
    }
    
    // Night Mode check on load
    const currentHour = new Date().getHours();
    if (currentHour >= 20 || currentHour < 6) {
        setTimeout(() => {
            showCognitiveRec('theme-night-cognitive', 'Modo Nocturno Cognitivo', 'Es de noche. Para evitar deslumbramiento nocturno y proteger tus ritmos de sueño, sugerimos el Modo Nocturno');
        }, 1000);
    }
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

function closeAllModals() {
    const customModal = document.getElementById('customModal');
    const storeModal = document.getElementById('storeModal');
    let closed = false;
    if (storeModal && storeModal.style.display === 'flex') {
        storeModal.style.display = 'none';
        closed = true;
    }
    if (customModal && customModal.style.display === 'flex') {
        customModal.style.display = 'none';
        closed = true;
    }
    updateBodyScroll();
    return closed;
}

// Helper: Toggle body scrolling based on open modals
function updateBodyScroll() {
    const customModal = document.getElementById('customModal');
    const storeModal = document.getElementById('storeModal');
    const isCustomOpen = customModal && customModal.style.display === 'flex';
    const isStoreOpen = storeModal && storeModal.style.display === 'flex';
    
    if (isCustomOpen || isStoreOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Custom Alerts and Confirms
function showCustomAlert(title, message, icon = 'info') {
    return new Promise((resolve) => {
        const overlay = document.getElementById('customModal');
        const iconEl = document.getElementById('customModalIcon');
        const titleEl = document.getElementById('customModalTitle');
        const msgEl = document.getElementById('customModalMessage');
        
        let confirmBtn = document.getElementById('customModalConfirmBtn');
        let cancelBtn = document.getElementById('customModalCancelBtn');
        
        // Clone buttons to clear all prior event listeners
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
        confirmBtn = newConfirmBtn;

        const newCancelBtn = cancelBtn.cloneNode(true);
        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
        cancelBtn = newCancelBtn;

        iconEl.textContent = icon;
        titleEl.textContent = title;
        msgEl.innerHTML = message;
        cancelBtn.style.display = 'none';
        confirmBtn.textContent = 'Aceptar';

        overlay.style.display = 'flex';
        updateBodyScroll();

        confirmBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            updateBodyScroll();
            resolve(true);
        });
    });
}

function showCustomConfirm(title, message, icon = 'help') {
    return new Promise((resolve) => {
        const overlay = document.getElementById('customModal');
        const iconEl = document.getElementById('customModalIcon');
        const titleEl = document.getElementById('customModalTitle');
        const msgEl = document.getElementById('customModalMessage');
        
        let confirmBtn = document.getElementById('customModalConfirmBtn');
        let cancelBtn = document.getElementById('customModalCancelBtn');
        
        // Clone buttons to clear all prior event listeners
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
        confirmBtn = newConfirmBtn;

        const newCancelBtn = cancelBtn.cloneNode(true);
        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
        cancelBtn = newCancelBtn;

        iconEl.textContent = icon;
        titleEl.textContent = title;
        msgEl.innerHTML = message;
        cancelBtn.style.display = 'block';
        cancelBtn.textContent = 'Cancelar';
        confirmBtn.textContent = 'Aceptar';

        overlay.style.display = 'flex';
        updateBodyScroll();

        confirmBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            updateBodyScroll();
            resolve(true);
        });

        cancelBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            updateBodyScroll();
            resolve(false);
        });
    });
}

// Toast Notifications
function showToast(title, desc, iconName = 'notifications', type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast-item ${type}-toast`;
    
    let iconColor = 'var(--primary)';
    if (type === 'achievement') iconColor = '#fbbf24';
    if (type === 'streak') iconColor = '#f87171';

    toast.innerHTML = `
        <div class="toast-icon" style="color: ${iconColor};">
            <span class="material-symbols-outlined">${iconName}</span>
        </div>
        <div class="toast-body">
            <div class="toast-title">${title}</div>
            <div class="toast-desc">${desc}</div>
        </div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toast-fade-out 0.3s forwards';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4500);
}

// Update Study Streak
function updateStreakAndStudy() {
    const todayStr = getTodayDateString();
    const yesterdayStr = getYesterdayDateString();

    if (db.lastStudyDate !== todayStr) {
        if (db.lastStudyDate === yesterdayStr) {
            db.streak += 1;
            showToast('¡Racha Incrementada! 🔥', `Llevas ${db.streak} días consecutivos de estudio. ¡Sigue así!`, 'local_fire_department', 'streak');
        } else {
            db.streak = 1;
            showToast('¡Nueva Racha Iniciada! ⚡', `Has comenzado tu racha de estudio de hoy.`, 'local_fire_department', 'streak');
        }
        db.lastStudyDate = todayStr;
        saveDatabase();
    }
}

// Check and notify newly unlocked achievements
function checkNewAchievements() {
    if (!Array.isArray(db.unlockedAchievements)) {
        db.unlockedAchievements = [];
    }
    let updated = false;
    ACHIEVEMENTS.forEach(ach => {
        if (!db.unlockedAchievements.includes(ach.id)) {
            if (ach.condition()) {
                db.unlockedAchievements.push(ach.id);
                updated = true;
                // Wait slightly to offset overlapping toasts
                setTimeout(() => {
                    showToast('¡Logro Desbloqueado! 🏆', `${ach.title}: ${ach.desc}`, 'workspace_premium', 'achievement');
                    playSound('victory');
                }, 500);
            }
        }
    });
    if (updated) {
        saveDatabase();
    }
}

// UI UPDATE
function updateDashboardUI() {
    setHeaderNavigationBlocked(false);
    const totalList = getAllQuestions();
    totalQuestionsCount.textContent = totalList.length;
    starredCount.textContent = db.starred.length;
    soundIcon.textContent = db.soundEnabled ? "volume_up" : "volume_off";
    streakCount.textContent = db.streak;
    
    const balanceCount = document.getElementById('balanceCount');
    if (balanceCount) {
        balanceCount.textContent = (db.balance || 0).toLocaleString('es-ES');
    }
    const storeBalanceLabel = document.getElementById('storeBalanceLabel');
    if (storeBalanceLabel) {
        storeBalanceLabel.textContent = (db.balance || 0).toLocaleString('es-ES');
    }

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
    } else if (session.sourceFilter === 'añadida') {
        pool = pool.filter(q => q.source === 'añadida');
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
            <div style="display: flex; flex-direction: column; gap: 4px; flex: 1;">
                <span class="subject-card-name" style="font-size: 13px; font-weight: 700; line-height: 1.2; display: inline-flex; align-items: center; gap: 4px;"><span class="material-symbols-outlined" style="font-size: 16px; color: #fbbf24;">star</span> Favoritos</span>
                <span class="subject-card-count" style="font-size: 11px; color: var(--text-muted);">${currentStarredCount} preguntas</span>
            </div>
            <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: rgba(234, 179, 8, 0.1); border-radius: 50%; border: 1px solid rgba(234, 179, 8, 0.25);">
                <span class="material-symbols-outlined" style="font-size: 18px; color: #ea580c;">star</span>
            </div>
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

        let recoveryBadge = '';
        if (sub === 'Empleabilidad I') {
            recoveryBadge = `<span class="recovery-tag" title="Asignatura de 1º curso. Solo aplica a alumnos pendientes de recuperar.">⚠️<span class="recovery-tag-text"> Solo Recup.</span></span>`;
        }

        card.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 3px; flex: 1; min-width: 0;">
                <span class="subject-card-name">${sub}</span>
                <span class="subject-card-count">${counts[sub]} preguntas</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0;">
                <div title="Dominio: ${percent}%" style="
                    min-width: 34px;
                    height: 20px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 0.3px;
                    ${percent > 0
                        ? `background: var(--success-bg, rgba(16,185,129,0.12)); color: var(--success, #10b981); border: 1.5px solid var(--success-border, rgba(16,185,129,0.3));`
                        : `background: rgba(148,163,184,0.08); color: var(--text-muted); border: 1.5px solid var(--border-color);`
                    }
                ">${percent}%</div>
                ${recoveryBadge}
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
        
        let badgeIcon = '<span class="material-symbols-outlined">lock</span>';
        if (unlocked) {
            if (ach.id === 'first_test') badgeIcon = '<span class="material-symbols-outlined" style="color: #a5b4fc;">rocket_launch</span>';
            if (ach.id === 'perfect_score') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">workspace_premium</span>';
            if (ach.id === 'streak_3') badgeIcon = '<span class="material-symbols-outlined" style="color: #f87171;">local_fire_department</span>';
            if (ach.id === 'streak_7') badgeIcon = '<span class="material-symbols-outlined" style="color: #38bdf8;">shield</span>';
            if (ach.id === 'starred_10') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">star</span>';
            if (ach.id === 'repaso_master') badgeIcon = '<span class="material-symbols-outlined" style="color: #c084fc;">psychology</span>';
            if (ach.id === 'millionaire_play') badgeIcon = '<span class="material-symbols-outlined" style="color: #10b981;">emoji_events</span>';
            if (ach.id === 'millionaire_win') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">monetization_on</span>';
            if (ach.id === 'test_10') badgeIcon = '<span class="material-symbols-outlined" style="color: #60a5fa;">local_library</span>';
            if (ach.id === 'correct_100') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">auto_awesome</span>';
            if (ach.id === 'streak_15') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">military_tech</span>';
            if (ach.id === 'time_limit_win') badgeIcon = '<span class="material-symbols-outlined" style="color: #f87171;">hourglass_empty</span>';
            if (ach.id === 'smart_mode_win') badgeIcon = '<span class="material-symbols-outlined" style="color: #67e8f9;">neurology</span>';
            if (ach.id === 'starred_25') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">auto_stories</span>';
            if (ach.id === 'perfect_exam') badgeIcon = '<span class="material-symbols-outlined" style="color: #a7f3d0;">school</span>';
            if (ach.id === 'speedrun') badgeIcon = '<span class="material-symbols-outlined" style="color: #f87171;">speed</span>';
            
            // NUEVOS ICONOS
            if (ach.id === 'first_purchase') badgeIcon = '<span class="material-symbols-outlined" style="color: #60a5fa;">shopping_bag</span>';
            if (ach.id === 'theme_hoarder') badgeIcon = '<span class="material-symbols-outlined" style="color: #a7f3d0;">palette</span>';
            if (ach.id === 'rich_student') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">savings</span>';
            if (ach.id === 'millionaire_capitalist') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">account_balance</span>';
            if (ach.id === 'streak_30') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">workspace_premium</span>';
            if (ach.id === 'test_50') badgeIcon = '<span class="material-symbols-outlined" style="color: #f87171;">running_with_errors</span>';
            if (ach.id === 'smart_master') badgeIcon = '<span class="material-symbols-outlined" style="color: #c084fc;">psychology_alt</span>';
            if (ach.id === 'exam_veteran') badgeIcon = '<span class="material-symbols-outlined" style="color: #f87171;">history_edu</span>';
            if (ach.id === 'all_subjects') badgeIcon = '<span class="material-symbols-outlined" style="color: #a5b4fc;">layers</span>';
            if (ach.id === 'custom_importer') badgeIcon = '<span class="material-symbols-outlined" style="color: #34d399;">publish</span>';
            if (ach.id === 'favoritos_collector') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">bookmarks</span>';
            if (ach.id === 'achievement_collector') badgeIcon = '<span class="material-symbols-outlined" style="color: #fbbf24;">military_tech</span>';
        }

        card.innerHTML = `
            <div class="badge-icon">${badgeIcon}</div>
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
    soundIcon.textContent = db.soundEnabled ? "volume_up" : "volume_off";
    saveDatabase();
});

clearDatabaseBtn.addEventListener('click', () => {
    showCustomConfirm('Eliminar Base de Datos', '¿Seguro que deseas eliminar todas las preguntas importadas y restaurar estadísticas?', 'delete_forever').then(confirmed => {
        if (confirmed) {
            db = {
                questions: [],
                starred: [],
                history: [],
                soundEnabled: true,
                streak: 0,
                lastStudyDate: null,
                questionStats: {},
                millionaireWins: 0,
                millionairePlayed: 0,
                unlockedAchievements: []
            };
            saveDatabase();
        }
    });
});

// INTERACTIVE WIDGETS AND BADGES
document.getElementById('streakBadge').addEventListener('click', () => {
    // Prevent opening if navigation is blocked
    const studyGuideBtn = document.getElementById('studyGuideBtn');
    if (studyGuideBtn.disabled) return;

    const streakDays = db.streak || 0;
    const lastDate = db.lastStudyDate || 'Sin registro';
    const uniqueDates = new Set(db.history ? db.history.map(h => h.date.split(" ")[0]) : []);
    const totalDaysCount = uniqueDates.size;
    
    let htmlContent = `
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.95rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px;">
                <span>Racha actual:</span>
                <strong style="color: #f87171; display: inline-flex; align-items: center; gap: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 16px;">local_fire_department</span> ${streakDays} días
                </strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.95rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px;">
                <span>Último día de estudio:</span>
                <strong style="color: #6366f1;">${lastDate}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.95rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px;">
                <span>Sesiones de examen finalizadas:</span>
                <strong style="color: #10b981;">${db.history ? db.history.length : 0}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.95rem; padding-bottom: 8px;">
                <span>Días totales dedicados:</span>
                <strong style="color: #fbbf24;">${totalDaysCount}</strong>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; font-style: italic; margin-top: 8px;">
                ${streakDays > 0 ? "¡Felicidades por tu constancia! Sigue completando cuestionarios a diario para mantener encendido tu fuego de estudio." : "Comienza hoy mismo un cuestionario o una partida de Modo Millonario para iniciar tu racha diaria de estudio."}
            </p>
        </div>
    `;
    showCustomAlert('Detalles de tu Racha 🔥', htmlContent, 'local_fire_department');
});

document.getElementById('widgetSubjects').addEventListener('click', () => {
    document.querySelector('.subjects-panel').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('widgetStarred').addEventListener('click', () => {
    const allQ = getAllQuestions();
    const starredList = allQ.filter(q => db.starred.includes(normalizeString(q.question)));
    
    if (starredList.length === 0) {
        showCustomAlert('Mis Favoritos ⭐', '<p style="text-align: center; color: var(--text-muted); margin: 20px 0;">No tienes ninguna pregunta guardada como favorita todavía. Puedes guardar preguntas durante los cuestionarios activos o al revisar tus respuestas incorrectas.</p>', 'star');
        return;
    }
    
    let htmlContent = `
        <div style="max-height: 350px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; margin-top: 10px; padding-right: 4px;">
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">Aquí tienes tus ${starredList.length} preguntas favoritas. Haz clic en "Aceptar" para volver.</p>
    `;
    
    starredList.forEach((q, idx) => {
        htmlContent += `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 12px; font-size: 0.85rem; display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; justify-content: space-between; gap: 10px;">
                    <span style="font-weight: 700; color: #fbbf24;">${idx + 1}. [${q.subject || 'SMR'}]</span>
                </div>
                <p style="margin: 2px 0; font-weight: 500; color: white;">${q.question}</p>
                <div style="font-size: 0.8rem; color: var(--success); display: flex; align-items: center; gap: 4px; background: rgba(16,185,129,0.08); padding: 4px 8px; border-radius: 4px; border: 1px solid rgba(16,185,129,0.15);">
                    <span class="material-symbols-outlined" style="font-size: 14px;">check_circle</span> <strong>Solución:</strong> ${q.answer}
                </div>
            </div>
        `;
    });
    
    htmlContent += '</div>';
    showCustomAlert('Preguntas Favoritas ⭐', htmlContent, 'star');
});

document.getElementById('widgetScore').addEventListener('click', () => {
    document.querySelector('.history-card').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('widgetAchievements').addEventListener('click', () => {
    document.querySelector('.achievements-card').scrollIntoView({ behavior: 'smooth' });
});

// MULTI-SELECTION ASSIGNMENTS
selectAllSubjectsBtn.addEventListener('click', () => {
    let pool = getAllQuestions();
    if (session.sourceFilter === 'oficial') pool = pool.filter(q => q.source === 'oficial');
    if (session.sourceFilter === 'repaso') pool = pool.filter(q => q.source === 'repaso');
    if (session.sourceFilter === 'añadida') pool = pool.filter(q => q.source === 'añadida');
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
        
        const descEl = document.getElementById('modeDescription');
        if (session.mode === 'practice') {
            descEl.textContent = 'Modo Práctica: Sin límite de tiempo, pistas de ayuda habilitadas y corrección inmediata.';
        } else if (session.mode === 'exam') {
            descEl.textContent = 'Modo Examen: Con tiempo límite configurable, sin pistas de ayuda y corrección al finalizar el test.';
        } else if (session.mode === 'smart') {
            descEl.textContent = 'Modo Inteligente: Cuestionario adaptativo que prioriza las preguntas falladas y las no contestadas aún.';
        }
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
                    
                    // Safety migration checks for imported progress copies
                    if (db.balance === undefined) db.balance = 0;
                    if (!db.purchasedThemes) db.purchasedThemes = ['classic'];
                    if (!db.activeTheme) db.activeTheme = 'classic';
                    if (!db.purchasedFonts) db.purchasedFonts = ['default'];
                    if (!db.activeFont) db.activeFont = 'default';
                    if (!db.purchasedButtons) db.purchasedButtons = ['default'];
                    if (!db.activeButton) db.activeButton = 'default';
                    if (!db.unlockedAchievements) db.unlockedAchievements = [];
                    
                    saveDatabase();
                    applyStoreCustomizations();
                    showCustomAlert('Copia Restaurada', '¡Copia de seguridad restaurada correctamente!', 'check_circle');
                } else {
                    showCustomAlert('Formato Incorrecto', 'Formato de copia no válido.', 'error');
                }
            } catch (err) {
                showCustomAlert('Error', 'Error al abrir archivo de copia.', 'error');
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
                            if (finalSubject.toLowerCase() === "sistemas operativos en red") {
                                finalSubject = "Sistemas Operativos en Red";
                            }
                            if (finalSubject.toLowerCase() === "seguridad informática" || finalSubject.toLowerCase() === "seguridad informatica") {
                                finalSubject = "Seguridad Informatica";
                            }

                            const normText = normalizeString(q.question);
                            const exists = db.questions.some(item => normalizeString(item.question) === normText && item.subject === finalSubject);
                            
                            if (!exists) {
                                db.questions.push({
                                    question: q.question,
                                    options: q.options,
                                    answer: q.answer,
                                    subject: finalSubject,
                                    source: q.source || "añadida"
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
                    showCustomAlert('Importación Exitosa', `¡Importación completa!\nPreguntas nuevas: ${newCount}\nDuplicados omitidos: ${duplicateCount}`, 'check_circle');
                }
            } catch (err) {
                showCustomAlert('Error de Formato', `Error en el formato de ${file.name}.\nDetalle: ${err.message}\n\nRevisa que el archivo JSON esté bien escrito (comillas dobles, comas, etc).`, 'error');
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
    if (session.sourceFilter === 'añadida') pool = pool.filter(q => q.source === 'añadida');

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
        showCustomAlert('Sin Resultados', 'No hay preguntas para los parámetros seleccionados.', 'search_off');
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
    setHeaderNavigationBlocked(true);
    setupTimer();
    renderQuestion();
    showCognitiveRec('theme-concentration', 'Modo Concentración', 'Para mantener el foco sostenido y evitar distracciones, te sugerimos activar el Modo Concentración');
});

// QUICK CHALLENGE ⚡
quickChallengeBtn.addEventListener('click', () => {
    let pool = shuffleArray(getAllQuestions());
    if (pool.length === 0) {
        showCustomAlert('Sin Preguntas', 'Carga algunas preguntas primero para jugar un desafío.', 'warning');
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
    setHeaderNavigationBlocked(true);
    setupTimer();
    renderQuestion();
    showCognitiveRec('theme-concentration', 'Modo Concentración', 'Para tests rápidos de alta atención, recomendamos la paleta de alto contraste sin distracciones');
});

// TIMER
function setupTimer() {
    clearInterval(session.timerInterval);
    testTimer.classList.remove('warning-pulse');
    if (session.mode === 'exam') {
        testTimer.style.display = 'inline-block';
        session.timeRemaining = Math.round(session.timeLimit * 60);
        updateTimerDisplay();

        session.timerInterval = setInterval(() => {
            session.timeRemaining--;
            session.timeSpent++;
            updateTimerDisplay();
            
            if (session.timeRemaining <= 10 && session.timeRemaining > 0) {
                testTimer.classList.add('warning-pulse');
                playSound('tick');
            } else {
                testTimer.classList.remove('warning-pulse');
            }
            
            if (session.timeRemaining <= 0) {
                clearInterval(session.timerInterval);
                testTimer.classList.remove('warning-pulse');
                showCustomAlert('Tiempo Agotado', '¡Cuestionario finalizado por límite de tiempo!', 'alarm').then(() => {
                    finishTest();
                });
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
    stopSpeaking();
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
    hintBox.style.display = 'none';

    if (session.mode === 'practice') {
        showHintBtn.style.display = 'inline-flex';
        showHintBtn.onclick = () => {
            hintBox.style.display = 'flex';
            hintText.textContent = generateHint(q);
        };
    } else {
        showHintBtn.style.display = 'none';
    }

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
        showCustomConfirm('Finalizar Examen', `Tienes ${unans} preguntas sin responder. ¿Seguro que deseas finalizar el examen?`, 'warning').then(confirmed => {
            if (confirmed) {
                finishTest();
            }
        });
    } else {
        finishTest();
    }
});
speakActiveBtn.addEventListener('click', () => {
    const q = session.questions[session.currentIndex];
    if (!q) return;
    let textToSpeak = `${q.question}. `;
    q.shuffledOptions.forEach((opt, idx) => {
        textToSpeak += `Opción ${idx + 1}: ${opt}. `;
    });
    speakText(textToSpeak);
});
exitTestBtn.addEventListener('click', () => {
    showCustomConfirm('Salir del Test', '¿Estás seguro de que deseas salir del test? Tu progreso actual se perderá.', 'warning').then(confirmed => {
        if (confirmed) {
            clearInterval(session.timerInterval);
            setHeaderNavigationBlocked(false);
            stopSpeaking();
            showScreen(dashboardScreen);
            updateDashboardUI();
        }
    });
});

// COMPLETION
function finishTest() {
    clearInterval(session.timerInterval);
    setHeaderNavigationBlocked(false);
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
    updateStreakAndStudy();
    checkNewAchievements();

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
    showCognitiveRec('theme-memory', 'Modo Memoria', 'Para consolidar la memoria visual y repasar fallos con colores funcionales estructurados, sugerimos el Modo Memoria');
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
                <button class="star-btn ${isStarred ? 'active' : ''}"><span class="material-symbols-outlined" style="font-size: 18px;">star</span></button>
            </div>
            <div class="review-ans-info">
                <div class="review-user-ans ${isCorrect ? 'user-correct' : 'user-wrong'}">
                    <strong>Tu respuesta:</strong> ${choice}
                </div>
                ${!isCorrect ? `<div class="review-correct-ans"><strong>Respuesta correcta:</strong> ${q.answer}</div>` : ''}
            </div>
        `;

        const starBtn = item.querySelector('.star-btn');
        starBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const normQ = normalizeString(q.question);
            const btn = e.currentTarget;
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
    showCognitiveRec('theme-reading', 'Modo Lectura Prolongada', 'Para lecturas largas y evitar la fatiga ocular, recomendamos activar un tono cálido de fondo');
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
            optionsHTML += `<li class="study-card-opt-item ${isCorrect ? 'correct-ans' : ''}" style="display: flex; align-items: center; gap: 6px;">${isCorrect ? '<span class="material-symbols-outlined" style="font-size: 16px; color: var(--success);">check_circle</span>' : ''}${opt}</li>`;
        });

        card.innerHTML = `
            <div class="study-card-q">
                <span>${q.question}</span>
                <button class="study-speak-btn" title="Escuchar pregunta" style="background: none; border: none; cursor: pointer; font-size: 1rem; padding: 0 4px; color: var(--text-muted); transition: color 0.2s;">🔊</button>
            </div>
            <ul class="study-card-options">
                ${optionsHTML}
            </ul>
        `;

        // Interactive toggle for active recall
        card.addEventListener('click', (e) => {
            if (e.target.closest('.study-speak-btn')) return;
            card.classList.toggle('is-expanded');
        });

        const speakBtn = card.querySelector('.study-speak-btn');
        speakBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            let textToSpeak = `${q.question}. `;
            q.options.forEach((opt, idx) => {
                textToSpeak += `Opción ${idx + 1}: ${opt}. `;
            });
            speakText(textToSpeak);
        });

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
    stopSpeaking();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
    document.body.classList.toggle('test-active', screen && screen.id === 'testScreen');
    syncMobileBottomNav(screen);
}

// Sync which bottom-nav button is highlighted
function syncMobileBottomNav(activeScreen) {
    const mobileNav = document.getElementById('mobileBottomNav');
    if (!mobileNav) return;

    const screenToNavId = {
        'dashboardScreen': 'mobNavDashboard',
        'studyScreen': 'mobNavStudy',
        'millionaireScreen': 'mobNavMillionaire',
        'resultsScreen': 'mobNavDashboard',
    };

    // Hide nav during active test
    if (activeScreen && activeScreen.id === 'testScreen') {
        mobileNav.classList.add('nav-hidden');
    } else {
        mobileNav.classList.remove('nav-hidden');
    }

    // Update active button
    document.querySelectorAll('.mob-nav-btn').forEach(btn => btn.classList.remove('active'));
    const navId = activeScreen ? screenToNavId[activeScreen.id] : null;
    if (navId) {
        const btn = document.getElementById(navId);
        if (btn) btn.classList.add('active');
    }
}

// Block/Unblock header buttons during active gameplay or tests
function setHeaderNavigationBlocked(blocked) {
    const studyGuideBtn = document.getElementById('studyGuideBtn');
    const millionaireGameBtn = document.getElementById('millionaireGameBtn');
    if (blocked) {
        studyGuideBtn.disabled = true;
        studyGuideBtn.style.opacity = '0.3';
        studyGuideBtn.style.pointerEvents = 'none';
        
        millionaireGameBtn.disabled = true;
        millionaireGameBtn.style.opacity = '0.3';
        millionaireGameBtn.style.pointerEvents = 'none';
    } else {
        studyGuideBtn.disabled = false;
        studyGuideBtn.style.opacity = '1';
        studyGuideBtn.style.pointerEvents = 'auto';
        
        millionaireGameBtn.disabled = false;
        millionaireGameBtn.style.opacity = '1';
        millionaireGameBtn.style.pointerEvents = 'auto';
    }
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

// Expand/Collapse All buttons
studyExpandAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.study-card').forEach(c => c.classList.add('is-expanded'));
});
studyCollapseAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.study-card').forEach(c => c.classList.remove('is-expanded'));
});

// MILLIONAIRE MINIGAME STATE
const millSession = {
    questions: [],
    currentIndex: 0,
    selectedSubjects: [],
    lifelines: {
        fiftyFifty: true,
        audience: true,
        phone: true
    },
    prizeLadder: [
        "100 €", "200 €", "300 €", "500 €", "1.000 €",
        "2.000 €", "4.000 €", "8.000 €", "16.000 €", "32.000 €",
        "64.000 €", "125.000 €", "250.000 €", "500.000 €", "1.000.000 €"
    ],
    safeLevels: [4, 9] // 1.000 € and 32.000 €
};

// Bind Millionaire Entry
millionaireGameBtn.addEventListener('click', () => {
    showScreen(millionaireScreen);
    document.getElementById('millionaireIntro').style.display = 'flex';
    millionaireSetup.style.display = 'none';
    millionaireGame.style.display = 'none';
});

document.getElementById('millionaireIntroBackBtn').addEventListener('click', () => {
    showScreen(dashboardScreen);
    updateDashboardUI();
});

document.getElementById('millionaireIntroStartBtn').addEventListener('click', () => {
    playSound('intro');
    document.getElementById('millionaireIntro').style.display = 'none';
    millionaireSetup.style.display = 'block';
    populateMillionaireSubjects();
});

millionaireBackBtn.addEventListener('click', () => {
    document.getElementById('millionaireIntro').style.display = 'flex';
    millionaireSetup.style.display = 'none';
});

function populateMillionaireSubjects() {
    millionaireSubjectsGrid.innerHTML = '';
    const counts = {};
    const pool = getAllQuestions();
    
    pool.forEach(q => {
        const sub = q.subject || "Sin clasificar";
        counts[sub] = (counts[sub] || 0) + 1;
    });

    const unique = Object.keys(counts).sort();
    
    // Set all selected by default
    millSession.selectedSubjects = [...unique];

    unique.forEach(sub => {
        const card = document.createElement('div');
        const isSel = millSession.selectedSubjects.includes(sub);
        card.className = `subject-card ${isSel ? 'selected' : ''}`;
        
        let recoveryBadge = '';
        if (sub === 'Empleabilidad I') {
            recoveryBadge = `<span class="recovery-tag" title="Asignatura de 1º curso. Solo aplica a alumnos pendientes de recuperar.">⚠️<span class="recovery-tag-text"> Solo Recup.</span></span>`;
        }

        card.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 4px; flex: 1;">
                <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                    <span class="subject-card-name" style="font-size: 13px; font-weight: 700; line-height: 1.2;">${sub}</span>
                    ${recoveryBadge}
                </div>
                <span class="subject-card-count" style="font-size: 11px; color: var(--text-muted);">${counts[sub]} preguntas</span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            if (millSession.selectedSubjects.includes(sub)) {
                millSession.selectedSubjects = millSession.selectedSubjects.filter(s => s !== sub);
                card.classList.remove('selected');
            } else {
                millSession.selectedSubjects.push(sub);
                card.classList.add('selected');
            }
            startMillionaireGameBtn.disabled = millSession.selectedSubjects.length === 0;
        });
        
        millionaireSubjectsGrid.appendChild(card);
    });
    
    startMillionaireGameBtn.disabled = millSession.selectedSubjects.length === 0;
}

millSelectAllBtn.addEventListener('click', () => {
    const cards = millionaireSubjectsGrid.querySelectorAll('.subject-card');
    const pool = getAllQuestions();
    const subs = Array.from(new Set(pool.map(q => q.subject || "Sin clasificar"))).sort();
    millSession.selectedSubjects = [...subs];
    cards.forEach(c => c.classList.add('selected'));
    startMillionaireGameBtn.disabled = false;
});

millDeselectAllBtn.addEventListener('click', () => {
    const cards = millionaireSubjectsGrid.querySelectorAll('.subject-card');
    millSession.selectedSubjects = [];
    cards.forEach(c => c.classList.remove('selected'));
    startMillionaireGameBtn.disabled = true;
});

// START GAME
startMillionaireGameBtn.addEventListener('click', () => {
    const pool = getAllQuestions().filter(q => millSession.selectedSubjects.includes(q.subject || "Sin clasificar"));
    if (pool.length < 15) {
        showCustomAlert('Preguntas Insuficientes', `Se necesitan al menos 15 preguntas en las asignaturas seleccionadas (actualmente hay ${pool.length}). Por favor, selecciona más asignaturas.`, 'warning');
        return;
    }
    
    const shuffled = [...pool];
    shuffleArray(shuffled);
    millSession.questions = shuffled.slice(0, 15);
    millSession.currentIndex = 0;
    
    millSession.lifelines.fiftyFifty = true;
    millSession.lifelines.audience = true;
    millSession.lifelines.phone = true;
    
    resetLifelineButtons();
    
    millionaireSetup.style.display = 'none';
    millionaireGame.style.display = 'flex';
    setHeaderNavigationBlocked(true);
    
    renderMillionaireQuestion();
});

function resetLifelineButtons() {
    millLifeline50.disabled = false;
    millLifeline50.style.opacity = '1';
    millLifelineAudience.disabled = false;
    millLifelineAudience.style.opacity = '1';
    millLifelinePhone.disabled = false;
    millLifelinePhone.style.opacity = '1';
    millLifelineFeedbackBox.style.display = 'none';
}

// RENDER ACTIVE MILLIONAIRE QUESTION
function renderMillionaireQuestion() {
    stopSpeaking();
    const q = millSession.questions[millSession.currentIndex];
    
    const currentPrize = millSession.prizeLadder[millSession.currentIndex];
    millCurrentLevelLabel.textContent = `Pregunta ${millSession.currentIndex + 1} de 15 — Premio actual: ${currentPrize}`;
    
    millQuestionSubjectTag.textContent = q.subject || "Sin clasificar";
    millQuestionText.textContent = q.question;
    millLifelineFeedbackBox.style.display = 'none';
    
    q.shuffledOptions = [...q.options];
    shuffleArray(q.shuffledOptions);
    
    millOptionsContainer.innerHTML = '';
    q.shuffledOptions.forEach((opt, idx) => {
        const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D
        const btn = document.createElement('div');
        btn.className = 'option-item';
        btn.innerHTML = `<strong style="color: var(--primary); margin-right: 8px;">${optionLetter}:</strong> <span>${opt}</span>`;
        
        btn.onclick = () => {
            showCustomConfirm('Respuesta Definitiva', `¿Es tu respuesta definitiva para la opción ${optionLetter}?`, 'help').then(confirmed => {
                if (confirmed) {
                    checkMillionaireAnswer(opt, btn);
                }
            });
        };
        millOptionsContainer.appendChild(btn);
    });
    
    renderPrizeLadder();
}

function renderPrizeLadder() {
    millPrizeLadderPanel.innerHTML = '<h3 style="font-size: 1.1rem; margin-bottom: 15px; color: var(--text-glow); border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">Premios</h3>';
    
    for (let i = 14; i >= 0; i--) {
        const levelNum = i + 1;
        const prizeVal = millSession.prizeLadder[i];
        const isCurrent = millSession.currentIndex === i;
        const isSafe = millSession.safeLevels.includes(i) || i === 14;
        
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.padding = '6px 12px';
        row.style.borderRadius = '6px';
        row.style.fontSize = '0.9rem';
        row.style.fontWeight = isCurrent || isSafe ? '700' : '400';
        
        if (isCurrent) {
            row.style.background = 'rgba(251, 191, 36, 0.2)';
            row.style.border = '1px solid #fbbf24';
            row.style.color = '#fbbf24';
        } else if (i < millSession.currentIndex) {
            row.style.color = 'var(--success)';
            row.style.opacity = '0.7';
        } else {
            row.style.color = isSafe ? '#c084fc' : 'var(--text-muted)';
        }
        
        row.innerHTML = `
            <span style="display: flex; align-items: center; gap: 4px;">
                ${levelNum}. ${isSafe ? '<span class="material-symbols-outlined" style="font-size: 14px; color: #fbbf24; display: inline-flex;">grade</span>' : ''} Pregunta
            </span>
            <span>${prizeVal}</span>
        `;
        millPrizeLadderPanel.appendChild(row);
    }
}

// LIFELINE 1: 50:50
millLifeline50.addEventListener('click', () => {
    if (!millSession.lifelines.fiftyFifty) return;
    millSession.lifelines.fiftyFifty = false;
    millLifeline50.disabled = true;
    millLifeline50.style.opacity = '0.3';
    
    const q = millSession.questions[millSession.currentIndex];
    const correctVal = q.answer;
    
    const incorrect = q.shuffledOptions.filter(opt => normalizeString(opt) !== normalizeString(correctVal));
    shuffleArray(incorrect);
    
    const toHide = incorrect.slice(0, 2);
    const optionElements = millOptionsContainer.querySelectorAll('.option-item');
    
    optionElements.forEach(el => {
        const textSpan = el.querySelector('span');
        if (textSpan && toHide.includes(textSpan.textContent)) {
            el.style.opacity = '0.15';
            el.style.pointerEvents = 'none';
        }
    });
    
    playSound('correct');
});

// LIFELINE 2: ASK THE AUDIENCE
millLifelineAudience.addEventListener('click', () => {
    if (!millSession.lifelines.audience) return;
    millSession.lifelines.audience = false;
    millLifelineAudience.disabled = true;
    millLifelineAudience.style.opacity = '0.3';
    
    const q = millSession.questions[millSession.currentIndex];
    const correctVal = q.answer;
    
    let distribution = {};
    let total = 100;
    
    const correctShare = Math.floor(Math.random() * 25) + 50;
    distribution[correctVal] = correctShare;
    total -= correctShare;
    
    const remainingOpts = q.shuffledOptions.filter(opt => normalizeString(opt) !== normalizeString(correctVal));
    remainingOpts.forEach((opt, idx) => {
        if (idx === remainingOpts.length - 1) {
            distribution[opt] = total;
        } else {
            const share = Math.floor(Math.random() * total);
            distribution[opt] = share;
            total -= share;
        }
    });
    
    millLifelineFeedbackBox.style.display = 'flex';
    millFeedbackIcon.textContent = 'bar_chart';
    
    let html = '<strong>Resultado de la votación del público:</strong><div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">';
    q.shuffledOptions.forEach((opt, idx) => {
        const optionLetter = String.fromCharCode(65 + idx);
        const share = distribution[opt] || 0;
        html += `
            <div style="display: flex; align-items: center; gap: 10px; font-size: 0.85rem;">
                <span style="width: 20px; font-weight: 700; color: #fbbf24;">${optionLetter}:</span>
                <div style="flex: 1; height: 10px; background: rgba(255, 255, 255, 0.05); border-radius: 4px; overflow: hidden;">
                    <div style="width: ${share}%; height: 100%; background: var(--primary); border-radius: 4px;"></div>
                </div>
                <span style="width: 35px; font-weight: 700; text-align: right;">${share}%</span>
            </div>
        `;
    });
    html += '</div>';
    
    millFeedbackContent.innerHTML = html;
    playSound('correct');
});

// LIFELINE 3: PHONE A FRIEND
millLifelinePhone.addEventListener('click', () => {
    if (!millSession.lifelines.phone) return;
    millSession.lifelines.phone = false;
    millLifelinePhone.disabled = true;
    millLifelinePhone.style.opacity = '0.3';
    
    const q = millSession.questions[millSession.currentIndex];
    const correctVal = q.answer;
    
    const correctLetter = String.fromCharCode(65 + q.shuffledOptions.indexOf(correctVal));
    const randomIncorrect = q.shuffledOptions.filter(opt => normalizeString(opt) !== normalizeString(correctVal));
    const wrongOpt = randomIncorrect[Math.floor(Math.random() * randomIncorrect.length)];
    const incorrectLetter = String.fromCharCode(65 + q.shuffledOptions.indexOf(wrongOpt));
    
    const isFriendRight = Math.random() < 0.75;
    const recommendedLetter = isFriendRight ? correctLetter : incorrectLetter;
    const confidence = isFriendRight ? Math.floor(Math.random() * 20) + 75 : Math.floor(Math.random() * 25) + 40;
    
    millLifelineFeedbackBox.style.display = 'flex';
    millFeedbackIcon.textContent = 'phone_in_talk';
    millFeedbackContent.innerHTML = `
        <strong>Llamando a tu amigo experto en SMR...</strong><br>
        <p style="margin-top: 8px; font-style: italic; color: #a5b4fc;">"Oye, estoy un ${confidence}% seguro de que la respuesta correcta es la <strong>opción ${recommendedLetter}</strong>."</p>
    `;
    playSound('correct');
});

exitMillionaireBtn.addEventListener('click', () => {
    const currentPrize = millSession.currentIndex > 0 ? millSession.prizeLadder[millSession.currentIndex - 1] : "0 €";
    showCustomConfirm('Retirarse del Juego', `¿Deseas retirarte del juego y llevarte el premio acumulado actual de ${currentPrize}?`, 'payments').then(confirmed => {
        if (confirmed) {
            showCustomAlert('Juego Terminado', `¡Enhorabuena! Te has retirado con un premio de: ${currentPrize} 💰`, 'emoji_events').then(() => {
                const prizeAmount = getPrizeValue(currentPrize);
                db.balance = (db.balance || 0) + prizeAmount;
                db.millionairePlayed = (db.millionairePlayed || 0) + 1;
                updateStreakAndStudy();
                checkNewAchievements();
                showScreen(dashboardScreen);
                updateDashboardUI();
            });
        }
    });
});

// VERIFY MILLIONAIRE ANSWER
function checkMillionaireAnswer(selected, selectedElement) {
    const q = millSession.questions[millSession.currentIndex];
    const isCorrect = normalizeString(selected) === normalizeString(q.answer);
    
    millOptionsContainer.querySelectorAll('.option-item').forEach(el => {
        el.style.pointerEvents = 'none';
        const textSpan = el.querySelector('span');
        if (textSpan && normalizeString(textSpan.textContent) === normalizeString(q.answer)) {
            el.style.background = 'var(--success-bg)';
            el.style.borderColor = 'var(--success-border)';
            el.querySelector('strong').style.color = 'var(--success)';
        }
    });
    
    if (isCorrect) {
        selectedElement.style.background = 'var(--success-bg)';
        selectedElement.style.borderColor = 'var(--success-border)';
        playSound('correct');
        
        setTimeout(() => {
            if (millSession.currentIndex === 14) {
                db.millionaireWins = (db.millionaireWins || 0) + 1;
                db.millionairePlayed = (db.millionairePlayed || 0) + 1;
                db.balance = (db.balance || 0) + 1000000;
                updateStreakAndStudy();
                startConfetti();
                checkNewAchievements();
                showCustomAlert('🎉 ¡INCREÍBLE! 🎉', '¡Has contestado correctamente las 15 preguntas y has ganado el MILLÓN DE EUROS VIRTUAL del Plan de Estudios SMR! 🏆💰', 'workspace_premium').then(() => {
                    showScreen(dashboardScreen);
                    updateDashboardUI();
                });
            } else {
                millSession.currentIndex++;
                renderMillionaireQuestion();
            }
        }, 1500);
    } else {
        selectedElement.style.background = 'var(--danger-bg)';
        selectedElement.style.borderColor = 'var(--danger-border)';
        selectedElement.querySelector('strong').style.color = 'var(--danger)';
        playSound('wrong');
        
        let safePrize = "0 €";
        let lastSafeIndex = -1;
        
        millSession.safeLevels.forEach(lvl => {
            if (lvl < millSession.currentIndex) {
                lastSafeIndex = lvl;
            }
        });
        
        if (lastSafeIndex !== -1) {
            safePrize = millSession.prizeLadder[lastSafeIndex];
        }
        
        setTimeout(() => {
            const prizeAmount = getPrizeValue(safePrize);
            db.balance = (db.balance || 0) + prizeAmount;
            db.millionairePlayed = (db.millionairePlayed || 0) + 1;
            updateStreakAndStudy();
            checkNewAchievements();
            showCustomAlert('💥 ¡Respuesta incorrecta! 💥', `El juego ha terminado. La respuesta correcta era: ${q.answer}.\n\nTe llevas a casa el premio asegurado de: ${safePrize} 💰`, 'dangerous').then(() => {
                showScreen(dashboardScreen);
                updateDashboardUI();
            });
        }, 2000);
    }
}

// Utility: convert prize string to integer
function getPrizeValue(prizeStr) {
    if (!prizeStr) return 0;
    const cleaned = prizeStr.replace(/[^0-9]/g, '');
    return parseInt(cleaned, 10) || 0;
}

// Shop Products Definition
const STORE_PRODUCTS = [
    // Themes
    { id: 'theme-classic', category: 'theme', title: 'Clásico Profesional', desc: 'El tema por defecto de la web en tonos Azul y Rojo.', price: 0 },
    { id: 'theme-concentration', category: 'theme', title: 'Modo Concentración 🧠', desc: 'Azules suaves de alto contraste y mínimas distracciones visuales para tests largos.', price: 5000 },
    { id: 'theme-memory', category: 'theme', title: 'Modo Memoria 💡', desc: 'Usa colores funcionales en respuestas, definiciones y errores para forzar asociaciones visuales.', price: 15000 },
    { id: 'theme-reading', category: 'theme', title: 'Modo Lectura Prolongada 📖', desc: 'Fondo cálido y contraste suave para reducir fatiga ocular en textos largos.', price: 30000 },
    { id: 'theme-night-cognitive', category: 'theme', title: 'Modo Nocturno Cognitivo 🌙', desc: 'Fondo azul-gris muy oscuro y letras gris claro que evita el deslumbramiento nocturno.', price: 0 },
    { id: 'theme-sevilla', category: 'theme', title: 'Sevilla Especial 💃', desc: 'Diseño en carmesí y albero de "Sevilla tiene un color especial".', price: 150000 },
    { id: 'theme-malaga', category: 'theme', title: 'Málaga Especial 🌅', desc: 'Diseño en azul mediterráneo del Málaga pa el mundo.', price: 2000000 },

    // Fonts
    { id: 'font-default', category: 'font', title: 'Outfit & Jakarta', desc: 'Tipografía de la interfaz estándar.', price: 0 },
    { id: 'font-inter', category: 'font', title: 'Inter', desc: 'Sans-serif moderna de alta legibilidad en escritorio y móvil.', price: 10000 },
    { id: 'font-source-sans', category: 'font', title: 'Source Sans 3', desc: 'Legibilidad perfecta en bloques de texto continuo.', price: 25000 },
    { id: 'font-atkinson', category: 'font', title: 'Atkinson Hyperlegible', desc: 'Diseñada con caracteres claramente diferenciables para facilitar el reconocimiento visual.', price: 50000 },
    { id: 'font-noto-sans', category: 'font', title: 'Noto Sans', desc: 'Excelente rendimiento y contraste para lectura digital continuada.', price: 100000 },

    // Buttons
    { id: 'btn-default', category: 'button', title: 'Botón Redondeado', desc: 'Estilo de botones estándar.', price: 0 },
    { id: 'btn-futuristic', category: 'button', title: 'Botón Futurista', desc: 'Bordes rectos con sombreado de neón sutil.', price: 25000 },
    { id: 'btn-pixel', category: 'button', title: 'Estilo Retro Pixel 👾', desc: 'Botones cuadrados con borde grueso y estilo arcade.', price: 150000 },
    { id: 'btn-glow', category: 'button', title: 'Ultra Resplandor ✨', desc: 'Botones con animación de pulso luminosa constante.', price: 1000000 },

    // Phrases
    { id: 'phrase-malaga1', category: 'phrase', title: 'de málaga pa el mundo 🌍', desc: 'Lema por defecto de la cabecera.', price: 0 },
    { id: 'phrase-malaga2', category: 'phrase', title: '🍋 ¡Qué pechá de estudiar! 🍋', desc: 'Lema malagueño para los días de estudio intenso.', price: 10000 },
    { id: 'phrase-sevilla1', category: 'phrase', title: '💃 Sevilla tiene un color especial 💃', desc: 'Lema de la capital andaluza.', price: 25000 },
    { id: 'phrase-sevilla2', category: 'phrase', title: '🍊 ¡Mi arma, a por el diez! 🍊', desc: 'Slogan motivador sevillano.', price: 50000 },
    { id: 'phrase-madrid1', category: 'phrase', title: '🐻 De Madrid al cielo ☁️', desc: 'Lema clásico madrileño.', price: 20000 },
    { id: 'phrase-madrid2', category: 'phrase', title: '🚇 ¡Qué mazo preguntas! 🚇', desc: 'Expresión típica madrileña para los tests gigantes.', price: 40000 },
    { id: 'phrase-cesur', category: 'phrase', title: '🎓 Orgullo Cesur 🎓', desc: 'Lema oficial para los alumnos de Cesur.', price: 100000 }
];

const STORE_BODY_CLASSES = [
    'theme-concentration', 'theme-memory', 'theme-reading', 'theme-night-cognitive', 'theme-sevilla', 'theme-malaga',
    'font-inter', 'font-source-sans', 'font-atkinson', 'font-noto-sans',
    'btn-futuristic', 'btn-pixel', 'btn-glow',
    'dyslexia-active', 'high-concentration-active', 'intensive-study-active'
];

function disableFocusModes(showFeedback = true) {
    let changed = false;
    if (db.highConcentration) {
        db.highConcentration = false;
        changed = true;
    }
    if (db.intensiveStudy) {
        db.intensiveStudy = false;
        changed = true;
    }
    if (changed) {
        saveDatabase();
        applyStoreCustomizations();
        if (showFeedback) {
            showToast('Modo enfoque desactivado', 'Se han restaurado los controles normales de la interfaz.', 'visibility', 'success');
        }
    }
}

function updateFocusModeExitButton() {
    const exitBtn = document.getElementById('exitFocusModeBtn');
    if (!exitBtn) return;
    const active = !!(db.highConcentration || db.intensiveStudy);
    exitBtn.style.display = active ? 'inline-flex' : 'none';
}

// Apply Customization Classes to Body
function applyStoreCustomizations() {
    STORE_BODY_CLASSES.forEach(cls => document.body.classList.remove(cls));
    if (db.activeTheme && db.activeTheme !== 'classic') {
        document.body.classList.add(db.activeTheme);
    }
    if (db.activeFont && db.activeFont !== 'default') {
        document.body.classList.add(db.activeFont);
    }
    if (db.activeButton && db.activeButton !== 'default') {
        document.body.classList.add(db.activeButton);
    }

    // Apply cognitive/accessibility styles dynamically
    let styleEl = document.getElementById('cognitiveStyles');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'cognitiveStyles';
        document.head.appendChild(styleEl);
    }
    
    let stylesText = '';
    
    // Dyslexia Mode
    if (db.dyslexiaMode) {
        document.body.classList.add('dyslexia-active');
        stylesText += `
            body.dyslexia-active {
                font-family: 'Atkinson Hyperlegible', sans-serif !important;
                letter-spacing: 0.12em !important;
                word-spacing: 0.2em !important;
                line-height: 1.8 !important;
            }
            body.dyslexia-active p, body.dyslexia-active span, body.dyslexia-active button, body.dyslexia-active h2 {
                letter-spacing: 0.12em !important;
                line-height: 1.8 !important;
            }
        `;
    } else {
        // Custom sliders values
        const fSize = db.fontSize || 'default';
        const lHeight = db.lineHeight || 'default';
        const lSpacing = db.letterSpacing || 'default';
        
        let sizeVal = '15px';
        if (fSize === 'medium') sizeVal = '17px';
        else if (fSize === 'large') sizeVal = '19px';
        else if (fSize === 'xlarge') sizeVal = '21px';
        
        let heightVal = '1.6';
        if (lHeight === 'low') heightVal = '1.3';
        else if (lHeight === 'high') heightVal = '1.8';
        else if (lHeight === 'extra') heightVal = '2.0';
        
        let spacingVal = 'normal';
        if (lSpacing === 'wide') spacingVal = '0.5px';
        else if (lSpacing === 'wider') spacingVal = '1.5px';
        
        stylesText += `
            body, p, span, button {
                font-size: ${sizeVal} !important;
                line-height: ${heightVal} !important;
                letter-spacing: ${spacingVal} !important;
            }
        `;
    }
    
    // Max Reading Width
    const maxWidth = db.maxReadingWidth || 'default';
    if (maxWidth !== 'default') {
        stylesText += `
            .question-container, .study-header-panel, .study-list {
                max-width: ${maxWidth}px !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }
        `;
    }
    
    // High Concentration Mode (solo durante un test activo)
    if (db.highConcentration) {
        document.body.classList.add('high-concentration-active');
        stylesText += `
            body.high-concentration-active.test-active * {
                animation: none !important;
                transition: none !important;
            }
            body.high-concentration-active.test-active .app-header,
            body.high-concentration-active.test-active .stats-grid,
            body.high-concentration-active.test-active .dashboard-footer-grid {
                opacity: 0.15;
                pointer-events: none;
            }
            body.high-concentration-active.test-active #testScreen {
                opacity: 1 !important;
                pointer-events: auto !important;
            }
            body.high-concentration-active.test-active .header-controls #openStoreBtn,
            body.high-concentration-active.test-active .header-controls #balanceBadge,
            body.high-concentration-active.test-active .exit-focus-mode-btn {
                opacity: 1 !important;
                pointer-events: auto !important;
            }
        `;
    }
    
    // Intensive Study Mode
    if (db.intensiveStudy) {
        document.body.classList.add('intensive-study-active');
        stylesText += `
            body.intensive-study-active .dashboard-footer-grid,
            body.intensive-study-active .streak-badge,
            body.intensive-study-active .stats-badge,
            body.intensive-study-active .glowing-orb {
                display: none !important;
            }
        `;
    }
    
    // Slogan Customization
    const sloganEl = document.getElementById('customSlogan');
    if (sloganEl) {
        const activePhraseObj = STORE_PRODUCTS.find(p => p.id === (db.activePhrase || 'phrase-malaga1'));
        if (activePhraseObj) {
            sloganEl.innerHTML = activePhraseObj.title;
        }
    }
    
    styleEl.textContent = stylesText;
    updateFocusModeExitButton();
}

let currentStoreCategory = 'theme';

// Render Shop UI by Category
function renderStore() {
    const storeGrid = document.getElementById('storeGrid');
    if (!storeGrid) return;
    storeGrid.innerHTML = '';
    
    if (currentStoreCategory === 'cognitive') {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.gap = '15px';
        wrapper.style.width = '100%';
        wrapper.style.padding = '5px';
        
        // Ensure values are defined
        if (db.fontSize === undefined) db.fontSize = 'default';
        if (db.lineHeight === undefined) db.lineHeight = 'default';
        if (db.letterSpacing === undefined) db.letterSpacing = 'default';
        if (db.maxReadingWidth === undefined) db.maxReadingWidth = 'default';
        
        wrapper.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 8px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; text-align: left;">
                <h4 style="margin: 0; color: white;">Ajustes de Lectura</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div>
                        <label style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 4px;">Tamaño de Texto:</label>
                        <select id="selectFontSize" class="btn secondary-btn" style="width: 100%; padding: 6px; font-size: 0.8rem; background: var(--bg-card); color: white;">
                            <option value="default" ${db.fontSize === 'default' ? 'selected' : ''}>Estándar (15px)</option>
                            <option value="medium" ${db.fontSize === 'medium' ? 'selected' : ''}>Mediano (17px)</option>
                            <option value="large" ${db.fontSize === 'large' ? 'selected' : ''}>Grande (19px)</option>
                            <option value="xlarge" ${db.fontSize === 'xlarge' ? 'selected' : ''}>Extra Grande (21px)</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 4px;">Altura de Línea:</label>
                        <select id="selectLineHeight" class="btn secondary-btn" style="width: 100%; padding: 6px; font-size: 0.8rem; background: var(--bg-card); color: white;">
                            <option value="default" ${db.lineHeight === 'default' ? 'selected' : ''}>Estándar (1.6)</option>
                            <option value="low" ${db.lineHeight === 'low' ? 'selected' : ''}>Baja (1.3)</option>
                            <option value="high" ${db.lineHeight === 'high' ? 'selected' : ''}>Alta (1.8)</option>
                            <option value="extra" ${db.lineHeight === 'extra' ? 'selected' : ''}>Extra (2.0)</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 4px;">Espaciado de Letras:</label>
                        <select id="selectLetterSpacing" class="btn secondary-btn" style="width: 100%; padding: 6px; font-size: 0.8rem; background: var(--bg-card); color: white;">
                            <option value="default" ${db.letterSpacing === 'default' ? 'selected' : ''}>Estándar</option>
                            <option value="wide" ${db.letterSpacing === 'wide' ? 'selected' : ''}>Ancho (+0.5px)</option>
                            <option value="wider" ${db.letterSpacing === 'wider' ? 'selected' : ''}>Muy Ancho (+1.5px)</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 4px;">Ancho Máx. Lectura:</label>
                        <select id="selectMaxWidth" class="btn secondary-btn" style="width: 100%; padding: 6px; font-size: 0.8rem; background: var(--bg-card); color: white;">
                            <option value="default" ${db.maxReadingWidth === 'default' ? 'selected' : ''}>Estándar (Completo)</option>
                            <option value="600" ${db.maxReadingWidth === '600' ? 'selected' : ''}>Estrecho (600px)</option>
                            <option value="700" ${db.maxReadingWidth === '700' ? 'selected' : ''}>Medio (700px)</option>
                            <option value="800" ${db.maxReadingWidth === '800' ? 'selected' : ''}>Ancho (800px)</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 12px; text-align: left;">
                <h4 style="margin: 0; color: white;">Optimizaciones Cognitivas</h4>
                
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                    <div style="flex: 1;">
                        <span style="font-size: 0.85rem; font-weight: 700; color: white; display: block;">Modo Alta Concentración</span>
                        <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">Reduce animaciones y destaca la pregunta activa reduciendo el brillo de otros paneles.</span>
                    </div>
                    <input type="checkbox" id="chkHighConcentration" ${db.highConcentration ? 'checked' : ''} style="width: 20px; height: 20px; cursor: pointer; flex-shrink: 0;">
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                    <div style="flex: 1;">
                        <span style="font-size: 0.85rem; font-weight: 700; color: white; display: block;">Adaptación para Dislexia</span>
                        <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">Aplica tipografía Atkinson Hyperlegible con mayor espaciado de caracteres para evitar rotación visual.</span>
                    </div>
                    <input type="checkbox" id="chkDyslexia" ${db.dyslexiaMode ? 'checked' : ''} style="width: 20px; height: 20px; cursor: pointer; flex-shrink: 0;">
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                    <div style="flex: 1;">
                        <span style="font-size: 0.85rem; font-weight: 700; color: white; display: block;">Modo Estudio Intensivo</span>
                        <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">Oculta widgets de estadísticas y rachas para liberar la carga cognitiva visual durante el estudio.</span>
                    </div>
                    <input type="checkbox" id="chkIntensiveStudy" ${db.intensiveStudy ? 'checked' : ''} style="width: 20px; height: 20px; cursor: pointer; flex-shrink: 0;">
                </div>
            </div>
        `;
        
        storeGrid.appendChild(wrapper);
        
        // Bind changes
        document.getElementById('selectFontSize').addEventListener('change', (e) => {
            db.fontSize = e.target.value;
            saveDatabase();
            applyStoreCustomizations();
        });
        document.getElementById('selectLineHeight').addEventListener('change', (e) => {
            db.lineHeight = e.target.value;
            saveDatabase();
            applyStoreCustomizations();
        });
        document.getElementById('selectLetterSpacing').addEventListener('change', (e) => {
            db.letterSpacing = e.target.value;
            saveDatabase();
            applyStoreCustomizations();
        });
        document.getElementById('selectMaxWidth').addEventListener('change', (e) => {
            db.maxReadingWidth = e.target.value;
            saveDatabase();
            applyStoreCustomizations();
        });
        document.getElementById('chkHighConcentration').addEventListener('change', (e) => {
            db.highConcentration = e.target.checked;
            saveDatabase();
            applyStoreCustomizations();
        });
        document.getElementById('chkDyslexia').addEventListener('change', (e) => {
            db.dyslexiaMode = e.target.checked;
            saveDatabase();
            applyStoreCustomizations();
        });
        document.getElementById('chkIntensiveStudy').addEventListener('change', (e) => {
            db.intensiveStudy = e.target.checked;
            saveDatabase();
            applyStoreCustomizations();
        });
        
        return;
    }

    const filtered = STORE_PRODUCTS.filter(p => p.category === currentStoreCategory);
    
    filtered.forEach(p => {
        const itemCard = document.createElement('div');
        itemCard.className = 'store-item';
        
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
        
        let btnText = 'Comprar';
        let btnClass = 'btn primary-btn store-item-btn';
        
        if (isActive) {
            btnText = 'Activo';
            btnClass = 'btn success-btn store-item-btn';
        } else if (isPurchased) {
            btnText = 'Activar';
            btnClass = 'btn secondary-btn store-item-btn';
        }
        
        const priceLabel = p.price === 0 ? 'Gratis' : `${p.price.toLocaleString('es-ES')} €`;
        
        itemCard.innerHTML = `
            <div class="store-item-info">
                <span class="store-item-title">${p.title}</span>
                <span class="store-item-desc">${p.desc}</span>
                <span class="store-item-price">${priceLabel}</span>
            </div>
            <button class="${btnClass}" data-id="${p.id}" ${isActive ? 'disabled' : ''}>${btnText}</button>
        `;
        
        // Button Event Listener
        itemCard.querySelector('button').addEventListener('click', () => {
            handleStoreAction(p, isPurchased);
        });
        
        storeGrid.appendChild(itemCard);
    });
}

// Handle Shop Purchases or Activations
function handleStoreAction(product, isPurchased) {
    if (isPurchased || product.price === 0) {
        // Activate product
        if (product.category === 'theme') {
            db.activeTheme = product.id === 'theme-classic' ? 'classic' : product.id;
        } else if (product.category === 'font') {
            db.activeFont = product.id === 'font-default' ? 'default' : product.id;
        } else if (product.category === 'button') {
            db.activeButton = product.id === 'btn-default' ? 'default' : product.id;
        } else if (product.category === 'phrase') {
            db.activePhrase = product.id;
        }
        saveDatabase();
        applyStoreCustomizations();
        renderStore();
        showToast('Personalización Aplicada 🎨', `Se ha activado el estilo "${product.title}" correctamente.`, 'palette', 'success');
    } else {
        // Purchase product
        if ((db.balance || 0) < product.price) {
            showCustomAlert('Saldo Insuficiente', `No tienes suficiente saldo virtual para comprar "${product.title}". ¡Sigue jugando al Millonario! 💸`, 'dangerous');
            return;
        }
        
        showCustomConfirm('Confirmar Compra', `¿Deseas gastar ${product.price.toLocaleString('es-ES')} € para desbloquear "${product.title}"?`, 'shopping_cart').then(confirmed => {
            if (confirmed) {
                db.balance -= product.price;
                if (product.category === 'theme') {
                    db.purchasedThemes.push(product.id);
                } else if (product.category === 'font') {
                    db.purchasedFonts.push(product.id);
                } else if (product.category === 'button') {
                    db.purchasedButtons.push(product.id);
                } else if (product.category === 'phrase') {
                    db.purchasedPhrases.push(product.id);
                }
                saveDatabase();
                renderStore();
                showToast('¡Compra Completada! 🛒', `Has desbloqueado "${product.title}" con éxito.`, 'shopping_bag', 'success');
            }
        });
    }
}

// Bind Store Modals Open/Close & Tabs switching
const storeModal = document.getElementById('storeModal');
const balanceBadge = document.getElementById('balanceBadge');
const openStoreBtn = document.getElementById('openStoreBtn');
const closeStoreBtn = document.getElementById('closeStoreBtn');

function openStore() {
    if (storeModal) {
        storeModal.style.display = 'flex';
        updateBodyScroll();
        currentStoreCategory = 'theme';
        // Reset tab buttons state
        document.querySelectorAll('#storeTabs .chip-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === 'theme');
        });
        renderStore();
    }
}

if (balanceBadge) {
    balanceBadge.addEventListener('click', openStore);
}
if (openStoreBtn) {
    openStoreBtn.addEventListener('click', openStore);
}
if (closeStoreBtn && storeModal) {
    closeStoreBtn.addEventListener('click', () => {
        storeModal.style.display = 'none';
        updateBodyScroll();
    });
}
if (storeModal) {
    storeModal.addEventListener('click', (e) => {
        if (e.target === storeModal) {
            storeModal.style.display = 'none';
            updateBodyScroll();
        }
    });
}

// Store Tabs click listeners
document.querySelectorAll('#storeTabs .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#storeTabs .chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentStoreCategory = btn.dataset.category;
        renderStore();
    });
});

// DEVELOPER EASTER EGG (Triggered by 5 clicks on logo area in < 3 seconds)
let developerClicks = 0;
let developerClicksTimeout = null;
const devTrigger = document.querySelector('.logo-area'); // Trigger on header title clicks
if (devTrigger) {
    devTrigger.style.cursor = 'pointer';
    devTrigger.addEventListener('click', () => {
        developerClicks++;
        clearTimeout(developerClicksTimeout);
        developerClicksTimeout = setTimeout(() => {
            developerClicks = 0;
        }, 3000);
        
        if (developerClicks >= 5) {
            developerClicks = 0;
            // Activate developer cheat code!
            db.balance = (db.balance || 0) + 5000000;
            // Buy all products automatically
            STORE_PRODUCTS.forEach(p => {
                if (p.category === 'theme' && !db.purchasedThemes.includes(p.id)) db.purchasedThemes.push(p.id);
                if (p.category === 'font' && !db.purchasedFonts.includes(p.id)) db.purchasedFonts.push(p.id);
                if (p.category === 'button' && !db.purchasedButtons.includes(p.id)) db.purchasedButtons.push(p.id);
                if (p.category === 'phrase' && !db.purchasedPhrases.includes(p.id)) db.purchasedPhrases.push(p.id);
            });
            saveDatabase();
            applyStoreCustomizations();
            playSound('victory');
            startConfetti();
            showCustomAlert('🛠️ MODO DESARROLLADOR 🛠️', '¡Easter Egg activado! Has obtenido 5.000.000 € virtuales y has desbloqueado toda la tienda de personalización de Málaga para el mundo.', 'terminal');
        }
    });
}

// COGNITIVE RECOMMENDATION SYSTEM
let pendingRecThemeId = null;

function showCognitiveRec(themeId, themeName, reason) {
    const banner = document.getElementById('cognitiveRecBanner');
    const textEl = document.getElementById('cognitiveRecText');
    if (!banner || !textEl) return;
    
    // If the theme is already active, don't recommend it
    if (db.activeTheme === themeId || (themeId === 'theme-classic' && db.activeTheme === 'classic')) {
        return;
    }
    
    pendingRecThemeId = themeId;
    textEl.innerHTML = `💡 <strong>Recomendación cognitiva:</strong> ${reason}. ¿Deseas activar el <strong>${themeName}</strong>?`;
    banner.style.display = 'flex';
}

// Bind recommendation buttons
const acceptRecBtn = document.getElementById('acceptCognitiveRecBtn');
const dismissRecBtn = document.getElementById('dismissCognitiveRecBtn');
const recBanner = document.getElementById('cognitiveRecBanner');

if (acceptRecBtn) {
    acceptRecBtn.addEventListener('click', () => {
        if (pendingRecThemeId) {
            db.activeTheme = pendingRecThemeId;
            // Ensure recommended theme is in purchased list (accessible/free gift)
            if (!db.purchasedThemes.includes(pendingRecThemeId)) {
                db.purchasedThemes.push(pendingRecThemeId);
            }
            saveDatabase();
            applyStoreCustomizations();
            if (typeof renderStore === 'function') {
                renderStore();
            }
            showToast('Tema Recomendado Aplicado 🧠', `Se ha activado el tema de forma óptima para tu sesión actual.`, 'palette', 'success');
        }
        if (recBanner) recBanner.style.display = 'none';
    });
}

if (dismissRecBtn) {
    dismissRecBtn.addEventListener('click', () => {
        if (recBanner) recBanner.style.display = 'none';
    });
}

// MOBILE BOTTOM NAV LISTENERS
(function setupMobileBottomNav() {
    const mobNavDashboard = document.getElementById('mobNavDashboard');
    const mobNavStudy = document.getElementById('mobNavStudy');
    const mobNavStore = document.getElementById('mobNavStore');
    const mobNavMillionaire = document.getElementById('mobNavMillionaire');
    const mobNavProfile = document.getElementById('mobNavProfile');

    if (mobNavDashboard) {
        mobNavDashboard.addEventListener('click', () => {
            showScreen(dashboardScreen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    if (mobNavStudy) {
        mobNavStudy.addEventListener('click', () => {
            showScreen(studyScreen);
            populateStudySubjects();
            renderStudyList();
            showCognitiveRec('theme-reading', 'Modo Lectura Prolongada', 'Para lecturas largas y evitar la fatiga ocular, recomendamos activar un tono cálido de fondo');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    if (mobNavStore) {
        mobNavStore.addEventListener('click', () => {
            const storeModal = document.getElementById('storeModal');
            if (storeModal) {
                storeModal.style.display = 'flex';
                if (typeof renderStore === 'function') renderStore();
                const balLabel = document.getElementById('storeBalanceLabel');
                if (balLabel) balLabel.textContent = db.balance || 0;
            }
        });
    }
    if (mobNavMillionaire) {
        mobNavMillionaire.addEventListener('click', () => {
            showScreen(millionaireScreen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    if (mobNavProfile) {
        mobNavProfile.addEventListener('click', () => {
            // Scroll to achievements section on dashboard
            showScreen(dashboardScreen);
            syncMobileBottomNav(dashboardScreen);
            // Remove active from dashboard, set profile active
            document.querySelectorAll('.mob-nav-btn').forEach(b => b.classList.remove('active'));
            mobNavProfile.classList.add('active');
            setTimeout(() => {
                const achievementsCard = document.querySelector('.achievements-card');
                if (achievementsCard) achievementsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    }
})();

// EMPLEABILIDAD ALERT DISMISS
(function setupEmpleabilidadAlert() {
    const alert = document.getElementById('empleabilidadAlert');
    const btn = document.getElementById('dismissEmpleabilidadAlert');
    if (!alert || !btn) return;

    // Hide if previously dismissed
    if (localStorage.getItem('empleabilidadAlertDismissed') === '1') {
        alert.style.display = 'none';
    }

    btn.addEventListener('click', () => {
        alert.style.transition = 'opacity 0.25s ease, max-height 0.3s ease, margin 0.3s ease, padding 0.3s ease';
        alert.style.opacity = '0';
        alert.style.maxHeight = '0';
        alert.style.marginBottom = '0';
        alert.style.padding = '0';
        alert.style.overflow = 'hidden';
        setTimeout(() => { alert.style.display = 'none'; }, 310);
        localStorage.setItem('empleabilidadAlertDismissed', '1');
    });
})();

function bindFocusModeEscapeHatch() {
    const exitFocusModeBtn = document.getElementById('exitFocusModeBtn');
    if (exitFocusModeBtn) {
        exitFocusModeBtn.addEventListener('click', () => disableFocusModes(true));
    }

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (closeAllModals()) return;
        if (db.highConcentration || db.intensiveStudy) {
            disableFocusModes(true);
        }
    });
}

bindFocusModeEscapeHatch();

// INITIAL STARTUP
loadDatabase();
