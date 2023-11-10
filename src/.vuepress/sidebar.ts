import { sidebar } from 'vuepress-theme-hope';

import vue from '../framework/vue/sidebar'
import react from '../framework/react/sidebar'
import elementPlus from '../component-library/element-plus/sidebar'
import arcoDesign from '../component-library/arco-design/sidebar'

import html from '../basis/html/sidebar'
import javascript from '../basis/javascript/sidebar'
import css from '../basis/css/sidebar'
import typescript from '../basis/typescript/sidebar'
import node from '../basis/node/sidebar'
import npm from '../basis/npm/sidebar'


import vite from '../build-tool/vite/sidebar'
import rollup from '../build-tool/rollup/sidebar'
import parcel from '../build-tool/parcel/sidebar'
import webpack from '../build-tool/webpack/sidebar'

export const enSidebar = sidebar({
  '/framework/vue/': vue,
  '/framework/react/': react,

  '/component-library/element-plus/': elementPlus,
  '/component-library/arco-design/': arcoDesign,


  '/basis/html/': html,
  '/basis/javascript/': javascript,
  '/basis/css/': css,
  '/basis/typescript/': typescript,
  '/basis/node/': node,
  '/basis/npm/': npm,

  '/build-tool/vite/': vite,
  '/build-tool/rollup/': rollup,
  '/build-tool/parcel/': parcel,
  '/build-tool/webpack/': webpack,
});
