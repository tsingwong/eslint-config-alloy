<script>
export default {
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        reversedArray() {
            return this.array.slice(0).reverse(); // .slice makes a copy of the array, instead of mutating the orginal
        }
    }
};
</script>
