<script>
Vue.component('bar', {
    props: ['foo']
});

Vue.component('baz', {
    props: {
        foo: {}
    }
});
</script>
