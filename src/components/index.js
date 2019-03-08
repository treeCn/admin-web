import AppBreadcrumb from './app-breadcrumb';
import AppHeader from './app-header';
import AppSidebar from './app-sidebar';
import Framement from './framement';

const components = {
  AppBreadcrumb,
  AppHeader,
  AppSidebar,
  Framement,
};

const install = function (Vue, opts = {}) {
  if (install.installed) { return false; }
  Object.keys(components).forEach(component => Vue.component(component, components[component]));
}

const API = {
  install,
  ...components,
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default API;
