module.exports = {
    'env': {
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'use-decorator'
    ],
    'rules': {
        'use-decorator/use-decorator': [1, {
            'params': [
                {
                    'name': 'assertParameter',
                    'public': true
                }
            ],
            'methods': [
                {
                    'name': 'assert',
                    'public': true
                },
                {
                    'name': 'errorcatch',
                    'async': true,
                    'private': true
                }
            ],
            'class': [
                {
                    'superClass': ['Vue', 'Mixins'],
                    'name': 'Component'
                },
            ]
        }],
        '@taccolaa/typeorm/no-double-where-query': 'error',
        'indent': [
            'error',
            'tab',
            { 'ignoredNodes': ['PropertyDefinition'] }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
