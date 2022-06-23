// https://vuejs.org/guide/extras/render-function.html#jsx-tsx

import './styles.sass';

export default defineComponent({
    render () {
        const route = useRoute();
        
        return (
        <div id="component-pageTitle" class="component component-pageTitle">
            <h2>{route.meta.title}</h2>
        </div>
        );
    }
})