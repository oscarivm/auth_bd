/* empty css                         */
import { e as createComponent, r as renderTemplate, i as renderHead, h as createAstro } from '../astro_DAtOYCau.mjs';
import { g as getSession } from './__Cxfh-Riq.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const session = await getSession(Astro2.request);
  console.log(session);
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> <main> <button id="login-google">Login Google</button> <br> <button id="login-git">Login Githab</button> <br> <button id="logout">Logout</button>  <!--   {
        session && (
          <>
            <ul>
              <p>Hola {session.user?.name}</p>
            </ul>
            <img src={session.user?.image} alt="" width="50px" />
          </>
        )
      }--> </main> </body><!--     <body>
    <header>
      <br /><br /><br />
    </header>
    <main class="">
      <h1>Registro</h1>

      {
        session ? (
          <>
            <p>Hola {session.user?.name}</p>
            <img src={session.user?.image} alt="" />
            <SignOut>Cerrar Sesión</SignOut>
          </>
        ) : (
          <>
            <SignIn provider="github">Iniciar con Github</SignIn>

            <SignIn provider="google">Iniciar con Google</SignIn>
          </>
  
        )
      }
    </main>
  </body>
   --></html>`;
}, "/Users/oscarivm/project/Astro_AUTH_BD/astro-auth-bd/src/pages/index.astro", void 0);

const $$file = "/Users/oscarivm/project/Astro_AUTH_BD/astro-auth-bd/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
