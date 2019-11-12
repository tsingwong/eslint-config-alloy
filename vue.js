/**
 * AlloyTeam ESLint 规则
 * https://alloyteam.github.io/eslint-config-alloy/
 *
 * 贡献者：
 *     xcatliu <xcatliu@gmail.com>
 *     heyli <lcxfs1991@gmail.com>
 *     DiamondYuan <admin@diamondyuan.com>
 *     Dash Chen <noreply@github.com>
 *     Swan <noreply@github.com>
 *
 * 依赖版本：
 *     eslint ^6.6.0
 *     babel-eslint ^10.0.3
 *     eslint-plugin-react ^7.16.0
 *     vue-eslint-parser ^7.0.0
 *     eslint-plugin-vue ^6.0.0
 *     @typescript-eslint/parser ^2.6.1
 *     @typescript-eslint/eslint-plugin ^2.6.1
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 *
 * @category 此规则属于哪种分类
 * @reason 为什么要开启（关闭）此规则
 */
module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        // 设置 js 的解析器为 babel-eslint
        // https://github.com/mysticatea/vue-eslint-parser#-options
        parser: 'babel-eslint',
        ecmaVersion: 2019,
        // ECMAScript modules 模式
        sourceType: 'module',
        ecmaFeatures: {
            // 不允许 return 语句出现在 global 环境下
            globalReturn: false,
            // 开启全局 script 模式
            impliedStrict: true,
            jsx: true
        },
        // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
        requireConfigFile: false,
        // 仅允许 import export 语句出现在模块的顶层
        allowImportExportEverywhere: false
    },
    plugins: ['vue'],
    rules: {
        /**
         * 数组括号内保持间距，默认不加间距
         * @from Uncategorized
         */
        'vue/array-bracket-spacing': 'warn',
        /**
         * 在箭头函数中，在箭头之前和之后执行一致的间距
         * @from Uncategorized
         */
        'vue/arrow-spacing': 'warn',
        /**
         * 限制自定义组件的属性风格
         * @from Priority B
         */
        'vue/attribute-hyphenation': 'warn',
        /**
         * 标签属性必须按规则排序
         * @from Priority C
         */
        'vue/attributes-order': 'warn',
        /**
         * 块级作用域前后执行一致的间距
         * @from Uncategorized
         */
        'vue/block-spacing': 'warn',
        /**
         * 对块级作用域执行一致的大括号样式
         * @from Uncategorized
         */
        'vue/brace-style': 'warn',
        /**
         * 变量名必须是 camelcase 风格的
         * @reason 很多 api 或文件名都不是 camelcase 风格的
         * @from Uncategorized
         */
        'vue/camelcase': 'warn',
        /**
         * 约束逗号
         * @from Uncategorized
         */
        'vue/comma-dangle': 'warn',
        /**
         * 支持在模版中使用 eslint-disable-next-line 等注释
         * @from Base Rules
         */
        'vue/comment-directive': 'error',
        /**
         * 限制组件名的风格，默认使用大驼峰
         * @from Uncategorized
         */
        'vue/component-name-in-template-casing': 'warn',
        /**
         *  `.` 之前之后保持一致的换行符
         * @from Uncategorized
         */
        'vue/dot-location': 'warn',
        /**
         * 必须使用 === 或 !==，禁止使用 == 或 !=
         * @from Uncategorized
         */
        'vue/eqeqeq': 'warn',
        /**
         * 保持右尖括号跟前面的换行一致
         * @from Priority B
         */
        'vue/html-closing-bracket-newline': 'warn',
        /**
         * 保持标签的右尖括号前保持一样的间距
         * @from Priority B
         */
        'vue/html-closing-bracket-spacing': 'warn',
        /**
         * 禁止标签缺少结束表示
         * @from Priority B
         */
        'vue/html-end-tags': 'warn',
        /**
         * 约束 template 内的缩进，默认为两个缩进
         * @from Priority B
         */
        'vue/html-indent': 'warn',
        /**
         * 约束 html 中的引号, 默认为双引号
         * @from Priority B
         */
        'vue/html-quotes': 'warn',
        /**
         * 空标签需要自闭合
         * @from Priority B
         */
        'vue/html-self-closing': 'warn',
        /**
         * 修复 no-unused-vars 不检查 jsx 的问题
         * @from Base Rules
         */
        'vue/jsx-uses-vars': 'error',
        /**
         * 在对象文字属性中强制键和值之间的间距一致
         * @from Uncategorized
         */
        'vue/key-spacing': 'warn',
        /**
         * 强制关键字前后的间距一致
         * @from Uncategorized
         */
        'vue/keyword-spacing': 'warn',
        /**
         * 组件名称必须和文件名一致
         * @from Uncategorized
         */
        'vue/match-component-file-name': 'warn',
        /**
         * 控制一行可接受的属性量，默认是 1 个
         * @from Priority B
         */
        'vue/max-attributes-per-line': 'warn',
        /**
         * 在多行元素之前和之后都需要换行符
         * @from Priority B
         */
        'vue/multiline-html-element-content-newline': 'warn',
        /**
         * 强制 mustache 插值的统一间距
         * @from Priority B
         */
        'vue/mustache-interpolation-spacing': 'warn',
        /**
         * 限制组件的 name 属性的值的风格
         * @from Priority B
         */
        'vue/name-property-casing': 'warn',
        /**
         * 计算属性禁止包含异步方法
         * @from Priority A
         */
        'vue/no-async-in-computed-properties': 'error',
        /**
         * 禁止给布尔值 props 添加默认值
         * @reason 类型相关的约束交给 TypeScript
         * @from Uncategorized
         */
        'vue/no-boolean-default': 'warn',
        /**
         * 禁用已废弃的 scope 属性
         * @from Uncategorized
         */
        'vue/no-deprecated-scope-attribute': 'warn',
        /**
         * 禁止重复的键名
         * @from Priority A
         */
        'vue/no-dupe-keys': 'error',
        /**
         * 禁止出现重复的属性
         * @from Priority A
         */
        'vue/no-duplicate-attributes': 'error',
        /**
         * 禁止解构赋值中出现空 {} 或 []
         * @from Uncategorized
         */
        'vue/no-empty-pattern': 'warn',
        /**
         * 不允许多个空格
         * @from Priority B
         */
        'vue/no-multi-spaces': 'warn',
        /**
         * 禁止出现语法错误
         * @from Priority A
         */
        'vue/no-parsing-error': 'error',
        /**
         * 禁止覆盖保留字
         * @from Priority A
         */
        'vue/no-reserved-keys': 'error',
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
        ],
        /**
         * 组件的 data 属性的值必须是一个函数
         * @from Priority A
         */
        'vue/no-shared-component-data': 'error',
        /**
         * 禁止在计算属性中对属性修改
         * @from Priority A
         */
        'vue/no-side-effects-in-computed-properties': 'error',
        /**
         * 属性中的 = 两边不允许使用空格
         * @from Priority B
         */
        'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
        /**
         * 禁止 <template> 使用 key 属性
         * @from Priority A
         */
        'vue/no-template-key': 'error',
        /**
         * 模版中的变量名禁止与前一个作用域重名
         * @from Priority B
         */
        'vue/no-template-shadow': 'warn',
        /**
         * 禁止在 <textarea> 中出现模版语法 {{message}}
         * @from Priority A
         */
        'vue/no-textarea-mustache': 'error',
        /**
         * 禁止定义在 components 中的组件未使用
         * @from Priority A
         */
        'vue/no-unused-components': 'error',
        /**
         * 模版中已定义的变量必须使用
         * @from Priority A
         */
        'vue/no-unused-vars': 'error',
        /**
         * 禁止在同一个元素上使用 v-if 和 v-for 指令
         * @from Priority A
         */
        'vue/no-use-v-if-with-v-for': 'error',
        /**
         * 禁止使用 v-html
         * @from Priority C
         */
        'vue/no-v-html': 'warn',
        /**
         * 强制括号内的间距一致
         * @from Uncategorized
         */
        'vue/object-curly-spacing': 'warn',
        /**
         * 组件的属性必须为一定的顺序
         * @from Priority C
         */
        'vue/order-in-components': 'error',
        /**
         * props 必须用驼峰式
         * @from Priority B
         */
        'vue/prop-name-casing': 'warn',
        /**
         * <component> 必须有绑定的组件
         * @from Priority A
         */
        'vue/require-component-is': 'error',
        /**
         * props 如果不是 required 的字段，必须有默认值（布尔值除外）
         * @reason 类型相关的约束交给 TypeScript
         * @from Priority B
         */
        'vue/require-default-prop': 'warn',
        /**
         * 必须直接使用 export default 导出组件
         * @from Uncategorized
         */
        'vue/require-direct-export': 'warn',
        /**
         * props 的取值必须是基本类型的构造函数，而不是字符串
         * @reason 类型相关的约束交给 TypeScript
         * @from Priority A
         */
        'vue/require-prop-type-constructor': 'error',
        /**
         * prop 必须有类型限制
         * @reason 类型相关的约束交给 TypeScript
         * @from Priority B
         */
        'vue/require-prop-types': 'warn',
        /**
         * render 函数必须有返回值
         * @from Priority A
         */
        'vue/require-render-return': 'error',
        /**
         * v-for 指令的元素必须有 v-bind:key
         * @from Priority A
         */
        'vue/require-v-for-key': 'error',
        /**
         * prop 的默认值必须匹配它的类型
         * @reason 类型相关的约束交给 TypeScript
         * @from Priority A
         */
        'vue/require-valid-default-prop': 'error',
        /**
         * 计算属性必须有返回值
         * @from Priority A
         */
        'vue/return-in-computed-property': 'error',
        /**
         * 在 <script> 中执行一致的缩进
         * @from Uncategorized
         */
        'vue/script-indent': 'warn',
        /**
         * 单行元素前后需要有空格
         * @from Priority B
         */
        'vue/singleline-html-element-content-newline': 'warn',
        /**
         * 要求中缀操作符之间的间距
         * @from Uncategorized
         */
        'vue/space-infix-ops': 'warn',
        /**
         * 在一元运算符之前或之后执行一致的间距
         * @from Uncategorized
         */
        'vue/space-unary-ops': 'warn',
        /**
         * 禁止在模版中用 this
         * @from Priority C"
         */
        'vue/this-in-template': 'warn',
        /**
         * 当一个节点上出现两个 v-on:click 时，其中一个必须为 exact
         * @from Priority A
         */
        'vue/use-v-on-exact': 'error',
        /**
         * 使用缩写的 : 而不是 v-bind:
         * @from Priority B
         */
        'vue/v-bind-style': 'warn',
        /**
         * 禁止在 v-on 的值中调用函数
         * @from Uncategorized
         */
        'vue/v-on-function-call': 'warn',
        /**
         * 使用缩写的 @click 而不是 v-on:click
         * @from Priority B
         */
        'vue/v-on-style': 'error',
        /**
         * 使用缩写的 #one 而不是 v-slot:one
         * @from Uncategorized
         */
        'vue/v-slot-style': 'warn',
        /**
         * template 的根节点必须合法
         * @from Priority A
         */
        'vue/valid-template-root': 'error',
        /**
         * v-bind 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-bind': 'error',
        /**
         * v-cloak 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-cloak': 'error',
        /**
         * v-else 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-else': 'error',
        /**
         * v-else-if 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-else-if': 'error',
        /**
         * v-for 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-for': 'error',
        /**
         * v-html 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-html': 'error',
        /**
         * v-if 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-if': 'error',
        /**
         * v-model 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-model': 'error',
        /**
         * v-on 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-on': 'error',
        /**
         * v-once 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-once': 'error',
        /**
         * v-pre 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-pre': 'error',
        /**
         * v-show 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-show': 'error',
        /**
         * v-slot 指令必须合法
         * @from Uncategorized
         */
        'vue/valid-v-slot': 'warn',
        /**
         * v-text 指令必须合法
         * @from Priority A
         */
        'vue/valid-v-text': 'error'
    }
};
