import createRouter from "./router.js";

const $container = document.querySelector("main");
const router = createRouter();

function renderView() {
  const matchedRoute = router.checkRoutes();
  if (matchedRoute) {
    const viewFunction = matchedRoute.view;
    const param = matchedRoute.param || null;
    $container.innerHTML = viewFunction(param);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderView();
});

window.addEventListener("popstate", () => {
  renderView();
});
