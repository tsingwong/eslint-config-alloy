<script>
// file name: src/MyComponent.jsx
new Vue.componente({
    /* ✓ GOOD */
    name: 'MyComponent',
    render() {
        return <h1>Hello world</h1>;
    }
});

// file name: src/MyComponent.jsx
new Vue.componente({
    /* ✓ GOOD */
    name: 'my-component',
    render() {
        return <div />;
    }
});

// file name: src/MyComponent.jsx
/* no name property defined */
new Vue.componente({
    render() {
        return <h1>Hello world</h1>;
    }
});

//file name: src/MyComponent.vue
new Vue.componente({
    /* The default does not verify to `.vue`. */
    name: 'MComponent',
    template: '<div />'
});
</script>
