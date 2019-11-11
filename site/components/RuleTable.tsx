/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';

import { Rule, RuleNamespaces, RuleVueNamespaces, RuleVueConfigKey } from '../constants/rule';
import { parseDescription, ConfigMapFilter } from '../utils';

interface RuleTableProps {
    namespace: RuleVueNamespaces;
    shouldHideOff: boolean;
}

let VueConfigMap: RuleVueConfigKey = {
    all: require('../config/vue.json'),
    PriorityA: ConfigMapFilter(require('../config/vue.json'), 'Priority A'),
    PriorityB: ConfigMapFilter(require('../config/vue.json'), 'Priority B'),
    PriorityC: ConfigMapFilter(require('../config/vue.json'), 'Priority C'),
    Uncategorized: ConfigMapFilter(require('../config/vue.json'), 'Uncategorized')
};
console.log(Object.values(VueConfigMap.Uncategorized));

const configMap: {
    [key in RuleNamespaces]: {
        [key: string]: Rule;
    };
} = {
    index: require('../config/index.json'),
    react: require('../config/react.json'),
    vue: require('../config/vue.json'),
    typescript: require('../config/typescript.json')
};

const docsUrlMap: { [key in RuleVueNamespaces]: (rule: string) => string } = {
    all: (rule) => `https://eslint.vuejs.org/rules/${rule.replace(/.*\//, '')}.html`,
    PriorityA: (rule) => `https://eslint.vuejs.org/rules/${rule.replace(/.*\//, '')}.html`,
    PriorityB: (rule) => `https://eslint.vuejs.org/rules/${rule.replace(/.*\//, '')}.html`,
    PriorityC: (rule) => `https://eslint.vuejs.org/rules/${rule.replace(/.*\//, '')}.html`,
    Uncategorized: (rule) => `https://eslint.vuejs.org/rules/${rule.replace(/.*\//, '')}.html`
};

export const RuleTable: React.SFC<RuleTableProps> = ({ namespace, shouldHideOff }) => {
    const currentConfig = VueConfigMap[namespace];
    return (
        <div className="container-fluid">
            <div className="flex-left flex-wrap units-gap hide-on-mobile">
                <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">规则说明</h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-danger site-table-header-text">
                    错误的示例
                </h3>
                <h3 className="unit-1-3 unit-1-on-mobile text-success site-table-header-text">
                    正确的示例
                </h3>
            </div>
            {Object.values(currentConfig).map(
                ({ name, value, description, reason, badExample, goodExample, from }) => (
                    <div
                        key={name}
                        className={`flex-left flex-wrap top-gap-big units-gap site-row ${
                            value === 'off' ? 'site-row-off site-row-wide' : ''
                        }`}
                        style={
                            value === 'off' && shouldHideOff
                                ? {
                                      display: 'none'
                                  }
                                : {}
                        }
                    >
                        <div className="unit-1-3 unit-1-on-mobile site-desc">
                            <a href={docsUrlMap[namespace](name)}>{name}</a>
                            <p>该规则来自 {from}</p>
                            <p
                                className="top-gap-0"
                                dangerouslySetInnerHTML={{
                                    __html: parseDescription(description)
                                }}
                            />
                            {reason && (
                                <p
                                    className="text-muted text-small"
                                    style={{ marginTop: 5 }}
                                    dangerouslySetInnerHTML={{
                                        __html: parseDescription(reason)
                                    }}
                                />
                            )}
                            {Array.isArray(value) && (
                                <>
                                    <p className="text-muted text-small site-rule-value">
                                        配置：
                                        {typeof value[1] === 'object' ? (
                                            <pre>
                                                <code>{`["error", ${JSON.stringify(
                                                    value[1],
                                                    null,
                                                    4
                                                )}]`}</code>
                                            </pre>
                                        ) : (
                                            <code>{`["error", ${JSON.stringify(value[1])}]`}</code>
                                        )}
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="unit-1-3 unit-1-on-mobile">
                            {badExample && (
                                <pre className="language-html  site-code">
                                    <code
                                        dangerouslySetInnerHTML={{
                                            __html: badExample
                                        }}
                                    />
                                </pre>
                            )}
                        </div>
                        <div className="unit-1-3 unit-1-on-mobile">
                            {goodExample && (
                                <pre className="language-html  site-code">
                                    <code
                                        dangerouslySetInnerHTML={{
                                            __html: goodExample
                                        }}
                                    />
                                </pre>
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
