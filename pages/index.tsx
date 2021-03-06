// https://vuejs.org/guide/extras/render-function.html#jsx-tsx

import 'assets/sass/main.sass';
import 'assets/sass/pages/overview.sass';
import DashboardCard from '~~/components/dashboardCard';
import PageTitle from '~~/components/pageTitle';
import Sidebar from '~~/components/sidebar';

export default defineComponent({
  head() {
      return {
        title: "Overview"
      };
  },
  render () {
    const quotesCount = 17;
    const contributorsCount = 2;
    return (
      <div id="page-overview" class="page page-overview">
        <Sidebar />
        <div id="content" class="content">
          <PageTitle />
          <div>
            <div class="statistics-cards">
              <DashboardCard title="Quotes" value={quotesCount} />
              <DashboardCard title="Contributors" value={contributorsCount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

definePageMeta({
  title: 'Overview'
})