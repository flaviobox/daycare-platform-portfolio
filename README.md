# Daycare Platform Cloud Engineering Portfolio

This independent public repository contains the sanitized portfolio site for
Daycare Platform. It is a recruiter-facing case study derived from the completed
AWS Journey A-N in a separate private application repository.

## Public Scope

Only the six files listed in `PUBLICATION_ALLOWLIST.md` are approved for this
public repository. The application source, Terraform configuration, CI/CD workflows,
AWS identifiers, credentials, endpoints, internal documentation, and Git
history of the private project are intentionally excluded.

## Local Preview

Open `index.html` directly in Firefox or another modern browser. The site has
no runtime dependencies, package manager, build step, analytics, forms, or
external asset requests. Its only outbound link is the public GitHub profile.

English is the initial language. EN / ES changes visible content, document
language, title, description, and accessible labels without navigation. The
`daycare-portfolio-language` localStorage key retains the choice in that
browser. If storage is blocked, switching still works during the visit.
Technical names, service identifiers, and language endonyms remain unchanged.

Translations live in `script.js`; English HTML remains readable without
JavaScript. The decorative local canvas respects reduced motion and pauses
offscreen. No AWS service or private application endpoint is contacted.

## Publication

The publication target is GitHub Pages from the root of the `main` branch in
this separate public repository. Relative
asset paths support `/daycare-platform-portfolio/`; section links use local
anchors, not application routes. Do not publish the private repository or
change its visibility.

## Updating

1. Review the private Phase N portfolio source and newer validated evidence.
2. Update only allowlisted files in this repository.
3. Run the sensitive-data audit documented in `PUBLICATION_ALLOWLIST.md`.
4. Preview both languages on desktop, tablet, and mobile. Check storage
   persistence, keyboard navigation, reduced motion, and relative asset paths.
5. Review the complete candidate diff and obtain explicit publication approval.
6. Include only the six allowlisted paths, never a whole private folder or its
   Git history. Confirm the deployed Pages site only after approved publication.

## Revision Local / Local Review

Este es un portafolio publico independiente. El selector EN / ES traduce el
sitio sin recarga y guarda la preferencia solo en el navegador. Abrir
`index.html` no requiere servidor ni instalar paquetes. El repositorio de la
aplicacion permanece privado y no forma parte de esta publicacion. Antes de
cada actualizacion, revisar los seis archivos de la allowlist, repetir la
auditoria y revisar el diff publico completo.
