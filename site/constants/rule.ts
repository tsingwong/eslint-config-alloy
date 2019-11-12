export type RuleNamespaces = 'index' | 'react' | 'vue' | 'typescript';

export type RuleVueNamespaces =
    | 'All'
    | 'Base'
    | 'PriorityA'
    | 'PriorityB'
    | 'PriorityC'
    | 'Uncategorized';

export const RuleNamespaceExtensionMap = {
    index: 'js',
    react: 'js',
    vue: 'vue',
    typescript: 'ts'
};

export const RuleNamespacePrismLanguageMap = {
    index: 'js',
    react: 'jsx',
    vue: 'html',
    typescript: 'ts'
};

export interface Rule {
    name: string;
    value: any;
    description: string;
    reason?: string;
    comments: string;
    badExample?: string;
    goodExample?: string;
    from?: string;
    [key: string]: string | boolean | undefined;
}

export type RuleVueConfigKey = {
    [key in RuleVueNamespaces]: {
        [key: string]: Rule;
    };
};
