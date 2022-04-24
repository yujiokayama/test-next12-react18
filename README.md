This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 開発環境について
- ESLint (構文チェック)
- Prettier (コードフォーマット)
- Husky (push や commit 時に lint や format や test のコマンドが実行できる)
- lint-staged (git の stage に入ったファイルに対して lint や format ができる)
- Emotion（CSS-in-JS）
- Jest (Unitテスト)
- Storybook (コンポーネント駆動で開発のため)
- chromatic(ビジュアルリグレッションテスト)
- Cypress (E2E テスト)
- MSW（APIモック）

## husky & lint-staged の環境構築

install

```bash
yarn add -D husky lint-staged
```

### ****husky のセットアップ****

```bash
npx husky-init && yarn
```

### pre-commit(コミット直前のタイミング)の調整

.husky/pre-commit

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged
```

### pre-push(プッシュ直前のタイミング)の調整

.husky/pre-push

```jsx
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

#push前にtestと型チェックを実行する
yarn test & yarn type-check
```

### ****lint-staged****

```jsx
// .lintstagedrc.js
module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    (filenames) =>
      `next lint --fix --file ${filenames
        .map((file) => file.split(process.cwd())[1])
        .join(' --file ')}`,
    'prettier --write',
  ],
}
```

## jest & testing-library
```bash
yarn add -D jest @testing-library/react @testing-library/jest-dom
```

jest.config.js

```jsx
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット。基本は"./"で良い。
  dir: './',
})

// Jestのカスタム設定を設置する場所。従来のプロパティはここで定義。
const customJestConfig = {
  // jest.setup.jsを作成する場合のみ定義。
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // aliaseを定義（tsconfig.jsonのcompilerOptions>pathsの定義に合わせる）
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfigを定義することによって、jest.config.jsで定義された設定がNext.jsの設定に反映される
module.exports = createJestConfig(customJestConfig)
```

## storybook

install

```bash
yarn add -D @storybook/react
```

package.json

```json
{
  "scripts": {
    // ...
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  }
}
```

.storybook/main.js

```jsx
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
}
```

.storybook/preview.js

```jsx
import { addDecorator } from '@storybook/react'
import React from 'react'
import { GlobalStyles } from '../src/styles/global'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
```

### addon

install

```jsx
yarn add -D @storybook/addon-links @storybook/addon-essentials
```

**Essential addons**

- Docs ストーリー定義を元に、ドキュメントを自動生成する
- Controls コンポーネントに対するパラメータ(≒props)をGUI上で動的に切り替える
- Actions コンポーネントから発火されたイベント(≒emit)をロギングする
- Viewport 様々な画面サイズでストーリーを描画できるようにする
- Backgrounds 背景色を変更する
- Toolbars & globals グローバルパラメータの埋め込みと、それを設定するツールバーを作成する

**addon-links**

コンポーネント間で別のタブに遷移することによって、擬似的に状態の変化を再現することができる

.storybook/main.js

```jsx
module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
}
```
## Emotion
install

```bash
yarn add @emotion/react @emotion/babel-plugin
```

.babelrc

```json
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

### global対応

/src/styles/global.tsx

```jsx
import { css, Global } from '@emotion/react'
import * as React from 'react'

export const GlobalStyles: React.FC = () => (
  <>
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  </>
)
```

src/pages/_document.tsx

```jsx
import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

import { GlobalStyles } from '../styles/global'

class MyDocument extends Document {
  public render(): React.ReactElement {
    return (
      <Html lang={'ja'}>
        <Head>
          <GlobalStyles />
          <meta name="Description" content={'Next.js template'} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```