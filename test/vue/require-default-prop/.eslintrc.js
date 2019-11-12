module.exports = {
    rules: {
        /**
         * props 如果不是 required 的字段，必须有默认值（布尔值除外）
         * @reason 类型相关的约束交给 TypeScript
         * @from Priority B
         */
        'vue/require-default-prop': 'warn'
    }
};
