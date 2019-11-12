module.exports = {
    rules: {
        /**
         * 禁止给布尔值 props 添加默认值
         * @reason 类型相关的约束交给 TypeScript
         * @from Uncategorized
         */
        'vue/no-boolean-default': 'warn'
    }
};
