/* empty css                         */
import { e as createComponent, r as renderTemplate, i as renderHead, j as renderComponent, h as createAstro, g as addAttribute, k as Fragment } from '../astro_DAtOYCau.mjs';
import { g as getSession } from './__Cxfh-Riq.mjs';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Productos = asDrizzleTable("Productos", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Productos", "primaryKey": true } }, "nombre": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "nombre", "collection": "Productos", "primaryKey": false, "optional": false } }, "descripcion": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "descripcion", "collection": "Productos", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  const productos = await db.select().from(Productos);
  const session = await getSession(Astro2.request);
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const nombre = formData.get("nombre");
    const descripcion = formData.get("descripcion");
    if (typeof nombre === "string" && typeof descripcion === "string") {
      await db.insert(Productos).values({ nombre, descripcion });
      console.log({ nombre, descripcion });
    }
  }
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>login</title>${renderHead()}</head> <body> <header> <br> </header> <main> <button id="logout">Logout</button>  ${session && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <ul> <p>Hola ${session.user?.name}</p> </ul> <img${addAttribute(session.user?.image, "src")} alt="" width="50px"> ` })}`} <h2>Productos</h2> <form method="POST" class="grid"> <label for="nombre">Nombre</label> <input id="nombre" name="nombre"> <textarea name="descripcion"></textarea> <button type="submit">Enviar</button> </form> ${productos.map(({ id, nombre }) => renderTemplate`<article> <p>Número: ${id}</p> <p>Nombre: ${nombre}</p> </article>`)} </main> <footer> <br> </footer> </body></html>`;
}, "/Users/oscarivm/project/Astro_AUTH_BD/astro-auth-bd/src/pages/home.astro", void 0);

const $$file = "/Users/oscarivm/project/Astro_AUTH_BD/astro-auth-bd/src/pages/home.astro";
const $$url = "/home";

export { $$Home as default, $$file as file, $$url as url };
