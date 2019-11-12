<script>
export default {
    props: {
        /* ✗ BAD */
        myProp: 'Number',
        anotherProp: ['Number', 'String'],
        myFieldWithBadType: {
            type: 'Object',
            default: function() {
                return {};
            }
        },
        myOtherFieldWithBadType: {
            type: 'Number',
            default: 1
        }
    }
};
</script>
