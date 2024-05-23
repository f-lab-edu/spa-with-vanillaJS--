import productList from "./ProductList.js";
import productDetail from "./productDetail.js";

export default function createRouter() {
  const routes = [
    { path: "/", view: () => productList() },
    { path: "/:id", view: (param) => productDetail(param) },
  ];

  function checkRoutes() {
    const currentPath = window.location.pathname || "/";
    let result = null;
    routes.forEach((route) => {
      const routeRegex = new RegExp(
        "^" +
          route.path.replace(/:[^\s/]+/g, "([\\w-]+)").replace("/", "\\/") +
          "$"
      );
      const match = currentPath.match(routeRegex);
      if (match) {
        const params = match.slice(1);
        result = { view: route.view, param: params[0] };
      }
    });
    return result;
  }

  function navigate(path) {
    if (window.location.pathname !== path) {
      history.pushState({}, "", path);
      window.dispatchEvent(new Event("popstate"));
    }
  }

  return {
    checkRoutes,
    navigate,
  };
}
