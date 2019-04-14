# spec

## cli commands

### build

このコマンドは`--src`オプションで指定したディレクトリ以下を再帰的に検索し、見つかった`*.h.js`もしくは`*.hify.js`ファイルをhtmlに変換、保存する。

例外として`assets`ディレクトリ以下のファイル、rootディレクトリ直下の`favicon.ico`はそのままコピーされる。

#### options

```
-D, --dev          develop mode 
-s, --src [src]    source directory 
-d, --dest [dest]  destination directory 
-f, --force        Run without confirmation 
-h, --help         Display this message 
```

#### example

srcが以下のような構成の場合、次のように処理される。

```
testSrc
├── assets
│   ├── ⭕️fn.h.js
│   ├── img
│   │   ├── ⭕️dummy.jpg
│   │   └── ⭕️dummy.png
│   └── ⭕️test.html
├── 🔀asyncFn.h.js
├── ⭕️favicon.ico
├── 🔀fn.h.js
├── 🔀index.h.js
├── ❌invalid.h.js
├── ❌notConvert.js
└── 🔀promiseFn.h.js
```

- ⭕️ そのままコピー
- 🔀 htmlに変換
- ❌ 処理されない

処理されない(destディレクトリに含まれない)のは以下の場合。

- assetsディレクトリ以外
- 拡張子が`*.h.js`、`*.hify.js`以外
- この２点に該当する場合処理は行われない(上記の例では`notConvert.js`)

また、拡張子が`*.h.js`、`*.hify.js`の場合、以下の形式でexportする必要がある。

- CreateElementインスタンス
- CreateElementインスタンスを返すfunction
- CreateElementインスタンスを返すasync function
- CreateElementインスタンスをresolveするPromise

```js
// fn.h.js
const { el } = require('../../..')
module.exports = () => el.span('test function')
```

上記以外がexportされた場合は処理されない

```js
// invalid.h.js
module.exports = true
```
