<script>
export default {
    props: {
        propA: {
            type: String,
            default: {}
        },
        propB: {
            type: String,
            default: []
        },
        propC: {
            type: Object,
            default: []
        },
        propD: {
            type: Array,
            default: []
        },
        propE: {
            type: Object,
            default: { message: 'hello' }
        }
    }
};
</script>
