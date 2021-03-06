import { wrapFunctional } from './utils'

export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as Modal } from '../../components/modal.vue'

export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorial = import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const LazyModal = import('../../components/modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
