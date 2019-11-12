module.exports = {
    rules: {
        /**
         * prop 的默认值必须匹配它的类型
         * @reason 类型相关的约束交给 TypeScript
         * @from Priority A
         */
        'vue/require-valid-default-prop': 'error'
    }
};
