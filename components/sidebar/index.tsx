// https://vuejs.org/guide/extras/render-function.html#jsx-tsx

import { NuxtLink } from '~~/.nuxt/components';
import './styles.sass';

export default defineComponent({
  render () {
    return (
      <div id="component-sidebar" class="component component-sidebar">
        <div class="logo">
          <h2>Impressive Quotes</h2>
        </div>
        <div class="navigation">
          <NuxtLink to="/" class="router-link">
            <i class="" />
            <span>Home</span>
          </NuxtLink>
        </div>
      </div>
    );
  }
})