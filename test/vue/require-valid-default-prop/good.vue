<script>
export default {
    props: {
        // basic type check (`null` means accept any type)
        propA: Number,
        // multiple possible types
        propB: [String, Number],
        // a number with default value
        propD: {
            type: Number,
            default: 100
        },
        // object/array defaults should be returned from a factory function
        propE: {
            type: Object,
            default() {
                return { message: 'hello' };
            }
        },
        propF: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>
