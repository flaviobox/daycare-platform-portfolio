"use strict";

(() => {
  const messages = {
    "en": {
      "meta.description": "Daycare Platform: an evidence-backed cloud engineering portfolio. AWS architecture, security, CI/CD, Terraform, and measured staging results.",
      "meta.title": "Daycare Platform | Cloud Engineering Portfolio",
      "skip": "Skip to content",
      "brand.home": "Daycare Platform, back to top",
      "brand.subtitle": "ENGINEERING PORTFOLIO",
      "nav.label": "Main navigation",
      "nav.project": "Project",
      "nav.architecture": "Architecture",
      "nav.evidence": "Evidence",
      "nav.contact": "Contact",
      "language.label": "Language",
      "hero.eyebrow": "CLOUD ENGINEERING / AWS JOURNEY A–N",
      "hero.title1": "Cloud. Infrastructure.",
      "hero.title2": "Security.",
      "hero.lede": "Architecture built with intent. Decisions backed by evidence.",
      "hero.description": "From a local application to a private AWS staging architecture: the engineering decisions, security boundaries, and measured results behind Daycare Platform.",
      "hero.project": "Explore the project",
      "hero.architecture": "See the architecture",
      "hero.status": "COMPLETED JOURNEY · VALIDATED STAGING",
      "hero.boundary": "Cost-optimized staging. Production HA remains future work.",
      "about.eyebrow": "About",
      "about.title": "Building systems I can explain.",
      "about.body": "My focus is cloud infrastructure, networking, and security, demonstrated through the Daycare Platform project. I built and validated an AWS staging environment, connected the application to private services, and documented the reasoning behind each major decision.",
      "about.principle": "A working deployment is the starting point. Understanding its failure modes, costs, and limits is the engineering work.",
      "about.p1": "Explicit boundaries",
      "about.p2": "Measured trade-offs",
      "about.p3": "Traceable evidence",
      "skills.eyebrow": "Technical skills",
      "skills.title": "Depth across the delivery path.",
      "skills.intro": "Technologies applied in this project, organized by engineering responsibility.",
      "skill.cloud.name": "Cloud & networking",
      "skill.cloud.title": "Design the path. Define the boundary.",
      "skill.cloud.body": "A multi-tier VPC, private application and data subnets, HTTPS ingress, and private AWS service access.",
      "skill.security.name": "Security & identity",
      "skill.security.title": "Make access explicit.",
      "skill.security.body": "Federated deployment identity, scoped permissions, runtime secret injection, and session/CSRF protection.",
      "skill.delivery.name": "Infrastructure & delivery",
      "skill.delivery.title": "Make releases traceable.",
      "skill.delivery.body": "Containers, immutable artifacts, a test-gated release path, and deliberate Terraform ownership.",
      "skill.operations.name": "Operations & application",
      "skill.operations.title": "Measure the system you built.",
      "skill.operations.body": "Operational telemetry and authenticated load tests, grounded in a tenant-aware web application.",
      "project.eyebrow": "Featured project",
      "project.badge": "Completed & merged",
      "project.body": "A multi-tenant daycare operations application became the foundation for a complete cloud engineering journey: from Docker to private AWS runtime, secure delivery, observability, IaC, and performance analysis.",
      "project.scope": "The product covers attendance, daily notes, classrooms, messaging, inventory, and basic expenses. Organization membership and role-aware access define the application’s tenant boundaries.",
      "project.link": "Read the engineering challenges",
      "project.runtime": "Runtime",
      "project.frontend": "Frontend delivery",
      "project.release": "Release identity",
      "project.environment": "Environment",
      "project.environmentValue": "Staging · one task · Single-AZ database",
      "journey.foundation": "Application & containers",
      "journey.platform": "Network & cloud runtime",
      "journey.operations": "Observability, delivery & IaC",
      "journey.evidence": "Measurement & closure",
      "architecture.eyebrow": "Architecture",
      "architecture.title": "Public entry. Private execution.",
      "architecture.intro": "One browser origin, two CloudFront paths, and explicit boundaries between edge, application, and data.",
      "architecture.caption": "STAGING / HIGH-LEVEL REQUEST FLOW",
      "architecture.region": "Primary region: us-east-2",
      "architecture.browser": "Browser",
      "architecture.edge": "ACM TLS · WAF in Count mode",
      "architecture.staticRoute": "Default static behavior",
      "architecture.s3": "Private S3 origin",
      "architecture.s3Detail": "OAC · encryption · versioning",
      "architecture.s3Note": "Direct object access denied; CloudFront delivery validated.",
      "architecture.apiRoute": "Uncached HTTPS to API origin",
      "architecture.vpc": "VPC · subnets across two Availability Zones",
      "architecture.public": "PUBLIC INGRESS",
      "architecture.alb": "ACM · TLS termination",
      "architecture.privateApp": "PRIVATE APPLICATION",
      "architecture.privateData": "PRIVATE DATABASE",
      "architecture.rds": "Encrypted · Single-AZ",
      "architecture.sg": "Security groups restrict ALB → ECS → RDS. The ALB-to-task hop uses internal HTTP.",
      "architecture.privateAccess": "Private service access",
      "architecture.endpoints": "VPC endpoints · ECR, S3, Logs, Secrets Manager",
      "architecture.telemetry": "Operational signals",
      "architecture.monitoring": "CloudWatch logs & alarms → SNS notifications",
      "architecture.d1.title": "Same-origin, private assets",
      "architecture.d1.body": "CloudFront keeps browser requests same-origin. Session cookies and CSRF remain part of Django’s authentication flow.",
      "architecture.d2.title": "Private access has a cost",
      "architecture.d2.body": "Required AWS paths were validated before removing NAT. Interface endpoint hourly costs still matter at this small scale.",
      "architecture.d3.title": "A foundation, with limits",
      "architecture.d3.body": "Two-AZ networking does not make one task and Single-AZ RDS highly available. Multi-replica capacity and recovery tests remain future work.",
      "challenges.eyebrow": "Engineering challenges",
      "challenges.title": "The interesting work happens at the edges.",
      "challenges.intro": "Three documented incidents where observation changed the next decision.",
      "challenge.01.phase": "PHASE K",
      "challenge.01.title": "Permissions that passed static review",
      "challenge.problem": "Problem",
      "challenge.01.problem": "CI and OIDC succeeded, but the first image delivery attempt failed.",
      "challenge.diagnosis": "Diagnosis",
      "challenge.01.diagnosis": "Runtime exposed a missing repository-scoped ecr:BatchGetImage permission. Static policy validation had not proven deployment completeness.",
      "challenge.decision": "Decision & result",
      "challenge.01.solution": "Added only the missing repository permission. The rerun reused the existing immutable SHA image and completed the ECS rollout.",
      "challenge.01.lesson": "Static analysis and runtime validation are complementary.",
      "challenge.02.phase": "PHASE M",
      "challenge.02.title": "More workers, worse performance",
      "challenge.02.problem": "Would a second synchronous Gunicorn worker improve the small Fargate task?",
      "challenge.02.diagnosis": "On the unchanged 0.25-vCPU task, two workers drove CPU to approximately 100% and operational p95 to approximately 5.66 seconds.",
      "challenge.02.solution": "Rejected the experiment and restored one worker. More CPU and/or replicas need measurement before increasing concurrency.",
      "challenge.02.lesson": "Concurrency has to fit the available CPU budget.",
      "challenge.03.phase": "PHASE L",
      "challenge.03.title": "Sensitive inputs, visible plan output",
      "challenge.03.problem": "A sensitive OIDC input appeared in the derived IAM trust-policy plan output.",
      "challenge.03.diagnosis": "Sensitivity did not propagate to the final policy expression. Marking an input sensitive alone was insufficient.",
      "challenge.03.solution": "Marked the final expression sensitive and verified semantic equivalence and no-op convergence. Kept remote state private and encrypted.",
      "challenge.03.lesson": "Display masking does not remove sensitive data from state.",
      "results.eyebrow": "Validation & results",
      "results.title": "Evidence before extrapolation.",
      "results.intro": "Historical staging evidence recorded in the completed AWS Journey. These are measured observations, not a live service status or an independent certification.",
      "results.vus": "Within the defined p95 target",
      "results.p95": "Operational p95 at 15 VUs",
      "results.errors": "HTTP failures in the measured runs",
      "results.alarmsUnit": "alarms",
      "results.alarms": "With a validated email notification path",
      "results.workload": "Authenticated, read-heavy workload",
      "results.method": "k6 retained Django sessions with one login per virtual user and realistic think time. Operational latency excludes CSRF bootstrap and login. The target was p95 < 1.5 seconds on a 0.25-vCPU / 512-MiB task.",
      "results.limit": "A virtual user is not a tenant or a registered-user capacity claim. At 20 and 25 VUs, the application stayed functional while the latency target was missed.",
      "results.caption": "Phase M · operational p95",
      "results.target": "Target",
      "results.met": "Met",
      "results.p20": "~1.56 s",
      "results.missed": "Not met",
      "results.p25": "~1.89 s",
      "evidence.implemented": "IMPLEMENTED",
      "evidence.implementedTitle": "A controlled delivery foundation",
      "evidence.implementedBody": "Private ECS/RDS, S3/OAC, CI with ephemeral PostgreSQL, OIDC, immutable SHA images, migration-gated rollout, logs, alarms, and selected Terraform imports.",
      "evidence.validated": "VALIDATED",
      "evidence.validatedTitle": "Positive and negative runtime evidence",
      "evidence.validatedBody": "Django tests and checks, successful migrations, removed/restored network access, S3 denial, session/CSRF behavior, denied unrelated IAM operations, ECS rollout, and Terraform no-op convergence.",
      "evidence.documented": "DOCUMENTED",
      "evidence.documentedTitle": "Costs, recovery, and ownership",
      "evidence.documentedBody": "Cost analysis separated gross usage from credits. Backup & Restore, provisional recovery objectives, and IaC ownership boundaries were documented; full-account Terraform ownership was never claimed.",
      "evidence.future": "DEFERRED / FUTURE WORK",
      "evidence.futureTitle": "Production requires more validation",
      "evidence.futureBody": "Multi-task HA, RDS Multi-AZ, tested restore and measured RTO, WAF enforcement and tuning, secret rotation, production SLOs, frontend release automation, and stronger supply-chain attestations.",
      "results.evidenceNote": "Evidence basis: Phase N portfolio closure and the recorded Phase K, L, and M findings. Operational logs, account data, and internal configuration remain private. WAF Count is monitoring, not blocking; backup availability is not a tested restore.",
      "contact.eyebrow": "Contact / GitHub",
      "contact.title": "Let’s talk architecture.",
      "contact.body": "For a closer look at the engineering behind this project, find my professional profile on GitHub.",
      "contact.githubLabel": "Visit flaviobox on GitHub",
      "contact.profile": "GITHUB PROFILE",
      "footer.name": "Engineering portfolio",
      "footer.note": "Sanitized case study · AWS Journey A–N",
      "footer.topLabel": "Back to top",
      "language.changed": "Language changed to English."
    },
    "es": {
      "meta.description": "Daycare Platform: portafolio de ingeniería cloud respaldado por evidencias. Arquitectura AWS, seguridad, CI/CD, Terraform y resultados medidos en staging.",
      "meta.title": "Daycare Platform | Portafolio de Ingeniería Cloud",
      "skip": "Saltar al contenido",
      "brand.home": "Daycare Platform, volver al inicio",
      "brand.subtitle": "PORTAFOLIO DE INGENIERÍA",
      "nav.label": "Navegación principal",
      "nav.project": "Proyecto",
      "nav.architecture": "Arquitectura",
      "nav.evidence": "Evidencias",
      "nav.contact": "Contacto",
      "language.label": "Idioma",
      "hero.eyebrow": "INGENIERÍA CLOUD / AWS JOURNEY A–N",
      "hero.title1": "Cloud. Infraestructura.",
      "hero.title2": "Seguridad.",
      "hero.lede": "Arquitectura con propósito. Decisiones respaldadas por evidencias.",
      "hero.description": "De una aplicación local a una arquitectura privada de staging en AWS: las decisiones de ingeniería, los límites de seguridad y los resultados medidos de Daycare Platform.",
      "hero.project": "Explorar el proyecto",
      "hero.architecture": "Ver la arquitectura",
      "hero.status": "RECORRIDO COMPLETADO · STAGING VALIDADO",
      "hero.boundary": "Staging optimizado por costo. La alta disponibilidad de producción sigue pendiente.",
      "about.eyebrow": "Sobre mí",
      "about.title": "Construir sistemas que puedo explicar.",
      "about.body": "Mi enfoque es la infraestructura cloud, las redes y la seguridad, demostrado en Daycare Platform. Construí y validé un entorno de staging en AWS, conecté la aplicación con servicios privados y documenté el razonamiento detrás de cada decisión importante.",
      "about.principle": "Un despliegue funcional es el punto de partida. Comprender sus fallos, costos y límites es el trabajo de ingeniería.",
      "about.p1": "Límites explícitos",
      "about.p2": "Compromisos medidos",
      "about.p3": "Evidencias trazables",
      "skills.eyebrow": "Competencias técnicas",
      "skills.title": "Conocimiento a lo largo de la entrega.",
      "skills.intro": "Tecnologías aplicadas en este proyecto, organizadas por responsabilidad de ingeniería.",
      "skill.cloud.name": "Cloud y redes",
      "skill.cloud.title": "Diseñar la ruta. Definir el límite.",
      "skill.cloud.body": "VPC por capas, subredes privadas de aplicación y datos, entrada HTTPS y acceso privado a servicios AWS.",
      "skill.security.name": "Seguridad e identidad",
      "skill.security.title": "Hacer explícito el acceso.",
      "skill.security.body": "Identidad federada de despliegue, permisos acotados, inyección de secretos y protección de sesión y CSRF.",
      "skill.delivery.name": "Infraestructura y entrega",
      "skill.delivery.title": "Hacer trazables las versiones.",
      "skill.delivery.body": "Contenedores, artefactos inmutables, despliegues condicionados a pruebas y propiedad explícita en Terraform.",
      "skill.operations.name": "Operación y aplicación",
      "skill.operations.title": "Medir el sistema construido.",
      "skill.operations.body": "Telemetría operativa y pruebas de carga autenticadas sobre una aplicación con aislamiento por organización.",
      "project.eyebrow": "Proyecto destacado",
      "project.badge": "Completado e integrado",
      "project.body": "Una aplicación de gestión de guarderías con múltiples organizaciones sirvió de base para un recorrido de ingeniería cloud: desde Docker hasta ejecución privada en AWS, entrega segura, observabilidad, IaC y análisis de rendimiento.",
      "project.scope": "El producto abarca asistencia, notas diarias, aulas, mensajería, inventario y gastos básicos. La membresía por organización y el acceso por roles definen los límites entre organizaciones.",
      "project.link": "Ver los retos de ingeniería",
      "project.runtime": "Ejecución",
      "project.frontend": "Entrega del frontend",
      "project.release": "Identidad de despliegue",
      "project.environment": "Entorno",
      "project.environmentValue": "Staging · una tarea · base de datos Single-AZ",
      "journey.foundation": "Aplicación y contenedores",
      "journey.platform": "Red y ejecución cloud",
      "journey.operations": "Observabilidad, entrega e IaC",
      "journey.evidence": "Medición y cierre",
      "architecture.eyebrow": "Arquitectura",
      "architecture.title": "Entrada pública. Ejecución privada.",
      "architecture.intro": "Un origen para el navegador, dos rutas en CloudFront y límites explícitos entre el edge, la aplicación y los datos.",
      "architecture.caption": "STAGING / FLUJO DE SOLICITUDES A ALTO NIVEL",
      "architecture.region": "Región principal: us-east-2",
      "architecture.browser": "Navegador",
      "architecture.edge": "TLS con ACM · WAF en modo Count",
      "architecture.staticRoute": "Comportamiento estático predeterminado",
      "architecture.s3": "Origen S3 privado",
      "architecture.s3Detail": "OAC · cifrado · versionado",
      "architecture.s3Note": "Acceso directo al objeto denegado; entrega por CloudFront validada.",
      "architecture.apiRoute": "HTTPS sin caché hacia el origen API",
      "architecture.vpc": "VPC · subredes en dos zonas de disponibilidad",
      "architecture.public": "ENTRADA PÚBLICA",
      "architecture.alb": "ACM · terminación TLS",
      "architecture.privateApp": "APLICACIÓN PRIVADA",
      "architecture.privateData": "BASE DE DATOS PRIVADA",
      "architecture.rds": "Cifrado · Single-AZ",
      "architecture.sg": "Los grupos de seguridad restringen ALB → ECS → RDS. El salto ALB-tarea utiliza HTTP interno.",
      "architecture.privateAccess": "Acceso privado a servicios",
      "architecture.endpoints": "VPC endpoints · ECR, S3, Logs, Secrets Manager",
      "architecture.telemetry": "Señales operativas",
      "architecture.monitoring": "Registros y alarmas de CloudWatch → notificaciones SNS",
      "architecture.d1.title": "Mismo origen, archivos privados",
      "architecture.d1.body": "CloudFront mantiene las solicitudes del navegador bajo el mismo origen. Las cookies de sesión y CSRF siguen formando parte de la autenticación de Django.",
      "architecture.d2.title": "El acceso privado tiene un costo",
      "architecture.d2.body": "Las rutas AWS necesarias se validaron antes de retirar NAT. Los costos por hora de los endpoints de interfaz siguen siendo relevantes a esta escala.",
      "architecture.d3.title": "Una base con límites",
      "architecture.d3.body": "Una red en dos zonas no hace altamente disponibles una sola tarea y RDS Single-AZ. La capacidad con varias réplicas y las pruebas de recuperación siguen pendientes.",
      "challenges.eyebrow": "Retos de ingeniería",
      "challenges.title": "Los retos aparecen en los límites.",
      "challenges.intro": "Tres incidentes documentados en los que la observación cambió la siguiente decisión.",
      "challenge.01.phase": "FASE K",
      "challenge.01.title": "Permisos que superaron la revisión estática",
      "challenge.problem": "Problema",
      "challenge.01.problem": "CI y OIDC funcionaron, pero falló el primer intento de entrega de la imagen.",
      "challenge.diagnosis": "Diagnóstico",
      "challenge.01.diagnosis": "La ejecución reveló la falta del permiso ecr:BatchGetImage sobre el repositorio. La validación estática de la política no había demostrado que el despliegue estuviera completo.",
      "challenge.decision": "Decisión y resultado",
      "challenge.01.solution": "Se añadió únicamente el permiso faltante sobre el repositorio. La repetición reutilizó la imagen SHA inmutable existente y completó el despliegue ECS.",
      "challenge.01.lesson": "El análisis estático y la validación en ejecución se complementan.",
      "challenge.02.phase": "FASE M",
      "challenge.02.title": "Más workers, peor rendimiento",
      "challenge.02.problem": "¿Mejoraría un segundo worker síncrono de Gunicorn el rendimiento de la pequeña tarea Fargate?",
      "challenge.02.diagnosis": "En la misma tarea de 0,25 vCPU, dos workers llevaron la CPU a aproximadamente el 100 % y el p95 operativo a unos 5,66 segundos.",
      "challenge.02.solution": "Se descartó el experimento y se restauró un worker. Aumentar CPU y/o réplicas exige mediciones antes de incrementar la concurrencia.",
      "challenge.02.lesson": "La concurrencia debe ajustarse a la capacidad de CPU disponible.",
      "challenge.03.phase": "FASE L",
      "challenge.03.title": "Entradas sensibles, salida visible del plan",
      "challenge.03.problem": "Una entrada OIDC sensible apareció en la salida del plan de la política de confianza IAM.",
      "challenge.03.diagnosis": "La sensibilidad no se propagó a la expresión final de la política. Marcar solo la entrada como sensible fue insuficiente.",
      "challenge.03.solution": "Se marcó la expresión final como sensible y se verificaron la equivalencia semántica y la convergencia sin cambios. El estado remoto se mantuvo privado y cifrado.",
      "challenge.03.lesson": "Ocultar datos en pantalla no los elimina del estado.",
      "results.eyebrow": "Validación y resultados",
      "results.title": "Evidencia antes de extrapolar.",
      "results.intro": "Evidencia histórica de staging registrada en el AWS Journey completado. Son observaciones medidas, no un estado del servicio en vivo ni una certificación independiente.",
      "results.vus": "Dentro del objetivo p95 definido",
      "results.p95": "p95 operativo con 15 VUs",
      "results.errors": "Fallos HTTP en las ejecuciones medidas",
      "results.alarmsUnit": "alarmas",
      "results.alarms": "Con notificaciones por correo validadas",
      "results.workload": "Carga autenticada, principalmente de lectura",
      "results.method": "k6 conservó las sesiones Django con un inicio de sesión por usuario virtual y pausas realistas. La latencia operativa excluye la obtención de CSRF y el inicio de sesión. El objetivo era p95 < 1,5 segundos en una tarea de 0,25 vCPU / 512 MiB.",
      "results.limit": "Un usuario virtual no equivale a una organización ni determina la capacidad de usuarios registrados. Con 20 y 25 VUs, la aplicación siguió funcionando, aunque no cumplió el objetivo de latencia.",
      "results.caption": "Fase M · p95 operativo",
      "results.target": "Objetivo",
      "results.met": "Cumplido",
      "results.p20": "~1,56 s",
      "results.missed": "No cumplido",
      "results.p25": "~1,89 s",
      "evidence.implemented": "IMPLEMENTADO",
      "evidence.implementedTitle": "Una base de entrega controlada",
      "evidence.implementedBody": "ECS/RDS privados, S3/OAC, CI con PostgreSQL efímero, OIDC, imágenes SHA inmutables, despliegue condicionado a migraciones, registros, alarmas e importaciones seleccionadas en Terraform.",
      "evidence.validated": "VALIDADO",
      "evidence.validatedTitle": "Evidencia positiva y negativa en ejecución",
      "evidence.validatedBody": "Pruebas y comprobaciones de Django, migraciones exitosas, acceso de red retirado/restaurado, denegación S3, sesión/CSRF, operaciones IAM ajenas denegadas, despliegue ECS y convergencia Terraform sin cambios.",
      "evidence.documented": "DOCUMENTADO",
      "evidence.documentedTitle": "Costos, recuperación y propiedad",
      "evidence.documentedBody": "El análisis de costos separó el consumo bruto de los créditos. Se documentaron respaldo y restauración, objetivos provisionales de recuperación y límites de propiedad IaC; nunca se afirmó gestionar toda la cuenta con Terraform.",
      "evidence.future": "DIFERIDO / TRABAJO FUTURO",
      "evidence.futureTitle": "Producción requiere más validación",
      "evidence.futureBody": "HA con varias tareas, RDS Multi-AZ, restauración probada y RTO medido, bloqueo y ajuste de WAF, rotación de secretos, SLOs de producción, automatización del frontend y mayores garantías de cadena de suministro.",
      "results.evidenceNote": "Base de evidencia: cierre del portafolio de la fase N y hallazgos registrados de las fases K, L y M. Registros operativos, datos de cuenta y configuración interna permanecen privados. WAF Count es monitoreo, no bloqueo; disponer de respaldos no equivale a una restauración probada.",
      "contact.eyebrow": "Contacto / GitHub",
      "contact.title": "Hablemos de arquitectura.",
      "contact.body": "Para conocer más sobre la ingeniería detrás de este proyecto, visita mi perfil profesional en GitHub.",
      "contact.githubLabel": "Visitar flaviobox en GitHub",
      "contact.profile": "PERFIL DE GITHUB",
      "footer.name": "Portafolio de ingeniería",
      "footer.note": "Caso de estudio sanitizado · AWS Journey A–N",
      "footer.topLabel": "Volver al inicio",
      "language.changed": "Idioma cambiado a español."
    }
  };
  const storageKey = "daycare-portfolio-language";
  const buttons = document.querySelectorAll("[data-language]");
  const announcement = document.getElementById("language-announcement");

  function applyLanguage(language, announce = false) {
    const selected = Object.hasOwn(messages, language) ? language : "en";
    const translations = messages[selected];
    document.documentElement.lang = selected;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", translations[element.dataset.i18nAriaLabel]);
    });
    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      element.setAttribute("content", translations[element.dataset.i18nContent]);
    });
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === selected));
    });
    if (announce) announcement.textContent = translations["language.changed"];

    try {
      localStorage.setItem(storageKey, selected);
    } catch {
      // Switching still works when browser storage is unavailable.
    }
  }

  let preferredLanguage = "en";
  try {
    preferredLanguage = localStorage.getItem(storageKey) || "en";
  } catch {
    // English is the default, including for file previews with blocked storage.
  }
  applyLanguage(preferredLanguage);
  buttons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });

  // A local, decorative network scene. No telemetry or external assets.
  const canvas = document.querySelector(".hero-blueprint");
  const context = canvas?.getContext("2d");
  if (!context) return;
  const hero = canvas.closest(".hero");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let pointer = 0;
  let visible = true;
  let frame = 0;

  function draw(time = 0) {
    context.clearRect(0, 0, width, height);
    context.lineWidth = 1;
    context.strokeStyle = "#203c59";
    for (let x = 0; x < width; x += 80) {
      context.beginPath(); context.moveTo(x, 0); context.lineTo(x, height); context.stroke();
    }
    for (let y = 0; y < height; y += 80) {
      context.beginPath(); context.moveTo(0, y); context.lineTo(width, y); context.stroke();
    }
    context.save();
    context.translate(width * .72 + (reducedMotion.matches ? 0 : pointer * 8), height * .38);
    const routes = [
      [[-460, 190], [-190, 190], [-190, 0], [0, 0]],
      [[0, 0], [160, 0], [160, -150], [350, -150]],
      [[0, 0], [160, 0], [160, 190], [350, 190]],
      [[350, 190], [470, 190], [470, 330], [640, 330]],
    ];
    routes.forEach((points, index) => {
      context.strokeStyle = "#487ba7";
      context.beginPath();
      points.forEach(([x, y], i) => i ? context.lineTo(x, y) : context.moveTo(x, y));
      context.stroke();
      context.strokeStyle = "#82dae5";
      context.setLineDash([14, 680]);
      context.lineDashOffset = -(time / 45 + index * 110);
      context.stroke();
      context.setLineDash([]);
    });
    [[0, 0, 76], [350, -150, 50], [350, 190, 60], [640, 330, 48]].forEach(([x, y, size]) => {
      context.fillStyle = "#11263e";
      context.strokeStyle = "#699bc1";
      context.fillRect(x - size / 2, y - size / 2, size, size);
      context.strokeRect(x - size / 2, y - size / 2, size, size);
      context.strokeStyle = "#385f83";
      context.strokeRect(x - size / 2 - 9, y - size / 2 - 9, size + 18, size + 18);
      context.fillStyle = "#70dce7";
      context.fillRect(x - 3, y - 3, 6, 6);
    });
    context.restore();
    frame = 0;
    if (!reducedMotion.matches && visible && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function redraw() {
    cancelAnimationFrame(frame);
    draw();
  }
  new ResizeObserver(() => {
    width = hero.clientWidth;
    height = hero.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    redraw();
  }).observe(hero);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    redraw();
  }).observe(hero);
  hero.addEventListener("pointermove", (event) => {
    pointer = event.clientX / Math.max(width, 1) - .5;
  });
  hero.addEventListener("pointerleave", () => { pointer = 0; });
  reducedMotion.addEventListener("change", redraw);
  document.addEventListener("visibilitychange", redraw);
})();
