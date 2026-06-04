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
function preloadDefaultQuestions() {
    // Intentamos cargar el archivo preguntas.json con las 1151 preguntas si existe, si no, cargamos el por defecto de HLC
    fetch('preguntas.json')
        .then(response => {
            if (!response.ok) {
                return fetch('preguntas_HCL_1780578960016.json');
            }
            return response;
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo descargar ningún archivo de preguntas.');
            }
            return response.json();
        })
        .then(arr => {
            if (Array.isArray(arr) || (arr && arr.questions)) {
                let loadedCount = 0;
                // Si viene de un backup exportado, puede ser un objeto con estructura {questions: [...]} o un array simple
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
        })
        .catch(err => {
            console.error('Error pre-cargando preguntas:', err);
            updateDashboardUI();
        });
}

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
            if (db.indexPreloaded === undefined) db.indexPreloaded = false;

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
