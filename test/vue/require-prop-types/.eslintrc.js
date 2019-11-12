module.exports = {
    rules: {
        /**
         * prop 必须有类型限制
         * @reason 类型相关的约束交给 TypeScript
         * @from Priority B
         */
        'vue/require-prop-types': 'warn'
    }
};
