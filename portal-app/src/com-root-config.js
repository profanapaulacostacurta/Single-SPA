import { registerApplication, start } from "single-spa";

 registerApplication({
   name: "@com/navbar",
   app: () => System.import("@com/navbar"),
   activeWhen: "/",
 });

start();

function loadWithoutAmd(name) {
  return Promise.resolve().then(() => {
    let globalDefine = window.define;
    delete window.define;
    return System.import(name).then((module) => {
      window.define = globalDefine;
      return module;
    });
  });
}
