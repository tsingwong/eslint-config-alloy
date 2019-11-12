<script>
export default {
    props: {
        a: {
            type: Number,
            required: true
        },
        b: {
            type: Number,
            default: 0
        },
        c: {
            type: Number,
            default: 0,
            required: false
        },
        d: {
            type: Boolean // Boolean is the only type that doesn't require default
        }
    }
};
</script>
