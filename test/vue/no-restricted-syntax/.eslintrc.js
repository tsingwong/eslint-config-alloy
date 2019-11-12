module.exports = {
    rules: {
        /**
         * 禁止使用指定的语法
         * @from Uncategorized
         */
        'vue/no-restricted-syntax': [
            'warn',
            {
                selector: 'CallExpression',
                message: 'Call expressions are not allowed.'
            }
        ]
    }
};
