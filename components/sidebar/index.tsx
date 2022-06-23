// https://vuejs.org/guide/extras/render-function.html#jsx-tsx

import { NuxtLink } from '~~/.nuxt/components';
import './styles.sass';

// Icons
import IconOverview from '~~/assets/icons/iconOverview.svg';

export default defineComponent({
  render () {
    return (
      <div id="component-sidebar" class="component component-sidebar">
        <div class="logo">
          <h2>Impressive Quotes</h2>
        </div>
        <div class="navigation">
          <NuxtLink to="/" class="router-link">
            <img src={IconOverview} class="icon" alt="icon Overview" />
            <span>Overview</span>
          </NuxtLink>
        </div>
      </div>
    );
  }
})