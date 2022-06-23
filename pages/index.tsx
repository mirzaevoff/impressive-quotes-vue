// https://vuejs.org/guide/extras/render-function.html#jsx-tsx

import 'assets/sass/main.sass';
import Sidebar from '~~/components/sidebar';

export default defineComponent({
  render () {
    return (
      <div id="page-index" class="page page-index">
        <Sidebar />
        <div id="content" class="content">
123
        </div>
      </div>
    );
  }
})