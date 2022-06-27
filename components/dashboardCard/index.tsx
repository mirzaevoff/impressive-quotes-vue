// https://vuejs.org/guide/extras/render-function.html#jsx-tsx

import './styles.sass';

export default defineComponent({
    props: {
        title: String,
        value: Number
    },
    render () {
        return (
        <div id="component-dashboardCard" class="component component-dashboardCard">
            <h4 class="component-dashboardCard-title">{this.title}</h4>
            <span class="component-dashboardCard-value">{this.value}</span>
        </div>
        );
    }
});