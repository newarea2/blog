import { sidebar } from 'vuepress-theme-hope';

import vue from '../framework/vue/sidebar'
import react from '../framework/react/sidebar'
import elementPlus from '../component-library/element-plus/sidebar'
import arcoDesign from '../component-library/arco-design/sidebar'

import html from '../basic/html/sidebar'
import javascript from '../basic/javascript/sidebar'
import css from '../basic/css/sidebar'
import typescript from '../basic/typescript/sidebar'
import node from '../basic/node/sidebar'
import npm from '../basic/npm/sidebar'


import vite from '../build-tool/vite/sidebar'
import rollup from '../build-tool/rollup/sidebar'
import parcel from '../build-tool/parcel/sidebar'
import webpack from '../build-tool/webpack/sidebar'

import browser from '../dependency/browser/sidebar'
import dependencyNode from '../dependency/node/sidebar'

import standardization from '../standardization/sidebar'

import tool from '../tool/sidebar'

export const enSidebar = sidebar({
  '/framework/vue/': vue,
  '/framework/react/': react,

  '/component-library/element-plus/': elementPlus,
  '/component-library/arco-design/': arcoDesign,


  '/basic/html/': html,
  '/basic/javascript/': javascript,
  '/basic/css/': css,
  '/basic/typescript/': typescript,
  '/basic/node/': node,
  '/basic/npm/': npm,

  '/build-tool/vite/': vite,
  '/build-tool/rollup/': rollup,
  '/build-tool/parcel/': parcel,
  '/build-tool/webpack/': webpack,

  '/dependency/browser/': browser,
  '/dependency/node/': dependencyNode,

  '/standardization/': standardization,

  '/tool/': tool,
});
