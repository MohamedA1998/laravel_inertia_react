import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './layouts/Layout';
import { Ziggy } from './ziggy.js';
globalThis.Ziggy = Ziggy;

createInertiaApp({
  title: title => title ? `${title} - Larvel Inertia React` : 'Larvel Inertia React',

  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || (page => <Layout children={page} />)
    return page
  },
  
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress:{
    showSpinner:true
  }
})