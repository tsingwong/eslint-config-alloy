module.exports = {
    rules: {
        /**
         * props 的取值必须是基本类型的构造函数，而不是字符串
         * @reason 类型相关的约束交给 TypeScript
         * @from Priority A
         */
        'vue/require-prop-type-constructor': 'error'
    }
};
