// https://v2.vuepress.vuejs.org/reference/default-theme/config.html

const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')

let ruThemeConfig = {
    selectLanguageText: 'Языки',
    selectLanguageName: 'Русский',
    editLinkText: 'Редактировать',
    contributorsText: 'Авторы',
    lastUpdatedText: 'Обновлено',

    navbar: [
        { text: 'Быстрый старт', link: '/ru/guide/' },
        { text: 'API', link: '/ru/api/' },
        { text: 'Примеры', link: '/ru/examples/' },
        { text: 'Ссылки', children: [
            { text: 'Extra', link: '/ru/extra/' },
            { text: 'Блог', link: '/ru/blog/' },
            { text: 'О нас', link: '/ru/about/' },
        ]},

        // { text: 'ru', link: '/ru/guide/', activeMatch: '^/ru/' },
        // { text: 'en', link: '/en/guide/', activeMatch: '^/en/' }
    ],
};

let enThemeConfig = {
    selectLanguageText: 'Languages',
    selectLanguageName: 'English',

    navbar: [
        { text: 'Quick Start', link: '/en/guide/' },
        { text: 'API', link: '/en/api/' },
        { text: 'Examples', link: '/en/examples/' },
        { text: 'Links', children: [
            { text: 'Extra', link: '/en/extra/' },
            { text: 'Blog', link: '/en/blog/' },
            { text: 'About', link: '/en/about/' },
        ]},
    ],
};


module.exports = {
    plugins: [
        searchPlugin(),
        nprogressPlugin(),
    ],

    base: '/php-next2-docs/',
    title: 'Next2',
    lang: 'ru',
    description: 'Документация по Next2',

    locales: {
        '/ru/': {
            lang: 'ru',
            head: [
                // ['link', { rel: 'icon', href: '/images/logo.png' }], // custom style inject
            ],
        },
        '/en/': {
            lang: 'en',
        },
    },

    theme: defaultTheme({
        home: '/',
        search: true,

        locales: {
            '/': ruThemeConfig,
            '/ru/': ruThemeConfig,

            '/en/': enThemeConfig,
        },

        repo: 'alexpts/php-next2',

        docsRepo: 'alexpts/php-next2-docs/',
        docsBranch: 'master',
        docsDir: 'src',
    }),


}