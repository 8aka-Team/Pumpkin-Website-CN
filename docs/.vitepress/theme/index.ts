// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import FmtNum from '../components/FmtNum.vue'
import FmtDateTime from '../components/FmtDateTime.vue'
import {inBrowser} from 'vitepress'
import AdBanner from '../components/AdBanner.vue'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // 在导航栏右侧插入广告
            'nav-bar-content-after': () => h(AdBanner)
        })
    },
    enhanceApp({app, router, siteData}) {
        if (inBrowser) {
            app.config.globalProperties.$numberFormatter = new Intl.NumberFormat(navigator.languages);
            app.config.globalProperties.$dateTimeFormatter = new Intl.DateTimeFormat(navigator.languages, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                timeZoneName: "short"
            });
            app.component('FmtNum', FmtNum);
            app.component('FmtDateTime', FmtDateTime);
        }
    }
} satisfies Theme
