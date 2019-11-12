<script>
Vue.component('foo', {
    props: {
        // Without options, just type reference
        foo: String,
        // With options with type field
        bar: {
            type: String,
            required: true
        },
        // With options without type field but with validator field
        baz: {
            required: true,
            validator: function(value) {
                return value === null || (Array.isArray(value) && value.length > 0);
            }
        }
    }
});
</script>
