// https://vuejs.org/guide/extras/render-function.html#jsx-tsx

import 'assets/sass/main.sass';
import PageTitle from '~~/components/pageTitle';
import Sidebar from '~~/components/sidebar';

export default defineComponent({
  head() {
      return {
        title: "Quotes"
      };
  },
  render () {
    return (
      <div id="page-quotes" class="page page-quotes">
        <Sidebar />
        <div id="content" class="content">
          <PageTitle />
          <div>
            Content
          </div>
        </div>
      </div>
    );
  }
});

definePageMeta({
  title: 'Quotes'
})