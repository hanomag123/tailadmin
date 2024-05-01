import './bootstrap';
import '../css/app.css';
import 'vue-final-modal/style.css'


import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createPinia } from 'pinia';
import VueApexCharts from 'vue3-apexcharts';
import { createVfm } from 'vue-final-modal';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
      const vfm = createVfm()
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(createPinia())
            .use(VueApexCharts)
            .use(vfm)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
