import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    srcDir: "src/",
    publicRuntimeConfig: {
        secret: process.env.SECRET,
      },
    buildModules: [
        "@unocss/nuxt",
    ],
    typescript: {
        shim: false,
    },
    components: {
        global: true,
        dirs: ['~/components']
    },
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        icons: {
            scale: 1.2,
        },
        shortcuts: [
            ["btn", "cursor-pointer inline-block px-3 py-1 text-center rounded-sm disabled:cursor-default disabled:active:cursor-not-allowed disabled:op50 transition-colors duration-300"],
            ["btn-basic", "text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 disabled:text-gray-200 disabled:bg-teal-600"],
            ["btn-secondary", "text-teal-600 rounded-sm bg-teal-100 hover:bg-teal-200 focus:bg-teal-200 active:bg-teal-300 disabled:text-gray-600 disabled:bg-teal-200"],
            ["btn-tertiary", "text-teal-600 rounded-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 disabled:text-black-600 disabled:bg-gray-200"],
            ["btn-quaternary", "text-teal-600 rounded-sm hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300 disabled:bg-transparent disabled:text-black-600"],
            ["btn-border", "text-black border border-solid border-gray-500 border-opacity-40 hover:border-teal-600 focus:border-teal-600 active:bg-gray-100 disabled:border-opacity-40"],
            ["btn-dashed", "text-black border border-dashed border-gray-500 border-opacity-40 hover:border-teal-600 focus:border-teal-600 active:bg-gray-100 disabled:border-opacity-40"],

            ['landing', 'bg-[#fff] pt-64px pb-110px flex flex-col min-h-screen'],
            ['landing__wrapper', 'my-0 mx-auto py-0 box-border relative w-full px-20px lg:w-768px xl:w-1024px xl:px-32px'],
            ['landing__header', 'fixed top-0 left-0 right-0 h-64px bg-[#fff] z-11'],
            ['landing__header_line', 'absolute w-full h-full z-100 bg-[#fff] border-b border-[#e7e8ec]'],
            ['landing__header_container', 'flex flex-row justify-between items-center h-full'],
            ['landing__header_logo', 'flex h-30px'],
            ['landing__header_menu', 'flex flex-row items-center !hidden !lg:block'],
            ['landing__header_button', '!text-[#6d7885] !hover:text-[#000] mr-32px'],
            ['landing__header_burger', 'flex lg:hidden items-center'],
            ['landing__header_burgerBox', 'relative inline-block w-20px h-24px'],
            ['landing__header_burgerBoxInner', 'block w-20px h-2px bg-[#333] rounded-4px'],
            ['landing__header_submenu', 'absolute block lg:hidden bg-[#fff] rounded-2xl top-64px shadow-lg w-full transition duration-300 -z-1'],
            ['landing__header_submenuСontainer', 'flex flex-col py-30px'],
            ['landing__header_submenuLine', 'h-28px mt-20px'],
        ],
        rules: [],
    },
})
