// http://www.htmq.com/html5/

module.exports = [
  // Document type definition
  // <!DOCTYPE html> …… ドキュメントタイプを宣言する
  // 0
  //  The root element
  // <html> …… HTML文書であることを示す
  ['html', []],
  // 1
  // Document metadata
  // <head> …… 文書のヘッダ情報を表す
  ['head', []],
  // <title> …… 文書にタイトルをつける
  ['title', []],
  // <base> …… 相対パスの基準URIを指定する
  ['base', []],
  // <link> …… リンクする外部リソースを指定する
  ['link', []],
  // <meta> …… その文書に関する情報（メタデータ）を指定する
  ['meta', []],
  // <style> …… スタイルシートを記述する
  ['style', []],
  // 2
  // Scripting
  // <script> …… 文書にJavaScriptなどのスクリプトを組み込む
  ['script', []],
  // <noscript> …… スクリプトが動作しない環境用の表示内容を指定する
  ['noscript', []],
  // 3
  // Sections
  // <body> …… 文書の本体を表す
  ['body', []],
  // <section> …… 一つのセクションであることを示すHTML5から追加
  ['section', []],
  // <nav> …… ナビゲーションであることを示すHTML5から追加
  ['nav', []],
  // <article> …… 記事であることを示すHTML5から追加
  ['article', []],
  // <aside> …… 余談・補足情報のセクションであることを示すHTML5から追加
  ['aside', []],
  // <h1>-<h6> …… 見出しを付ける
  ['h1', []],
  ['h2', []],
  ['h3', []],
  ['h4', []],
  ['h5', []],
  ['h6', []],
  // <hgroup> …… セクションの見出しを表す、見出しをまとめる【廃止予定】
  ['hgroup', []],
  // <header> ……ヘッダであることを示すHTML5から追加
  ['header', []],
  // <footer> …… フッタであることを示すHTML5から追加
  ['footer', []],
  // <address> …… 連絡先・問合せ先を表す
  ['address', []],
  // 4
  // Grouping content
  // <p> …… ひとつの段落（パラグラフ）であることを表す
  ['p', []],
  // <hr> …… テーマや話題の区切りを表す
  ['hr', []],
  // <pre> …… 半角スペースや改行をそのまま表示する
  ['pre', []],
  // <blockquote> …… 引用・転載セクションであることを表す
  ['blockquote', []],
  // <ol> …… 順序のあるリストを表示する
  ['ol', []],
  // <ul> …… 順序のないリストを表示する
  ['ul', []],
  // <li> …… リストの項目を記述する
  ['li', []],
  // <dl> …… 定義・説明リストを表す
  ['dl', []],
  // <dt> …… 定義・説明される言葉を表す
  ['dt', []],
  // <dd> …… 定義用語や言葉の説明をする
  ['dd', []],
  // <figure> …… 図表であることを示すHTML5から追加
  ['figure', []],
  // <figcaption> …… 図表のキャプションを示すHTML5から追加
  ['figcaption', []],
  // <div> ……ひとかたまりの範囲として定義する
  ['div', []],
  // <main> …… メインコンテンツであることを示す
  ['main', []],
  // 5
  // Text-level semantics
  // <a> …… ハイパーリンクを指定する
  ['a', ['cont', 'href']],
  // <em> …… 強勢する（アクセントを付ける）箇所を表す
  ['em', []],
  // <strong> …… 強い重要性を表す
  ['strong', []],
  // <small> …… 免責・警告・著作権などの注釈や細目を表す
  ['small', []],
  // <s> …… すでに正確ではなくなった内容を表す
  ['s', []],
  // <cite> …… 作品のタイトルを表す
  ['cite', []],
  // <q> …… 引用句・引用文であることを表す
  ['q', []],
  // <dfn> …… 用語が使用されていることを示す
  ['dfn', []],
  // <abbr> …… 略語や頭字語であることを表す
  ['abbr', ['cont', 'title']],
  // <time> …… 日付や時刻を正確に示すHTML5から追加
  ['time', []],
  // <code> …… プログラムなどのコードであることを示す
  ['code', []],
  // <var> …… 変数であることを示す
  ['var', []],
  // <samp> …… プログラムによる出力結果のサンプルであることを示す
  ['samp', []],
  // <kbd> …… ユーザーが入力する内容であることを示す
  ['kdb', []],
  // <sub> …… 下付き文字を表す
  ['sub', []],
  // <sup> …… 上付き文字を表す
  ['sup', []],
  // <i> …… 声や心の中で思ったことなど、他と区別したいテキストを表す
  ['i', []],
  // <b> …… 文書内のキーワードや製品名など、他と区別したいテキストを表す
  ['b', []],
  // <mark> …… 文書内の該当テキストを目立たせるHTML5から追加
  ['mark', []],
  // <ruby> …… ルビをふるHTML5から追加
  ['ruby', []],
  // <rt> …… ルビのテキストを指定するHTML5から追加
  ['rt', []],
  // <rp> …… ルビを囲む記号を指定するHTML5から追加
  ['rp', []],
  // <bdo> …… 文字表記の方向を指定する
  ['bdo', []],
  // <span> …… ひとつの範囲として定義する
  ['span', []],
  // <br> …… 改行する
  ['br', []],
  // <wbr> …… 改行しても良い位置を示すHTML5から追加
  ['wdr', []],
  // 6
  // Edits
  // <ins> …… 追加された部分であることを示す
  ['ins', []],
  // <del> …… 削除された部分であることを示す
  ['del', []],
  // 7
  // Embedded content
  // <img> …… 画像を表示する
  ['img', []],
  // <iframe> …… インラインフレームを作る
  ['iframe', []],
  // <embed> …… プラグインデータを埋め込むHTML5から追加
  ['embed', []],
  // <object> …… 文書に外部リソースを埋め込む
  ['object', []],
  // <param> …… プラグインのパラメータを指定する
  ['param', []],
  // <video> …… 動画を再生するHTML5から追加
  ['video', []],
  // <audio> …… 音声を再生するHTML5から追加
  ['audio', []],
  // <source> …… 動画や音声などのURLや種類を指定するHTML5から追加
  ['source', []],
  // <canvas> …… 図形を描くHTML5から追加
  ['canvas', []],
  // <map> …… イメージマップを作成する
  ['map', []],
  // <area> …… イメージマップのハイパーリンク領域を設定する
  ['area', []],
  // 8
  // Tabular data
  // <table> …… テーブル（表）を作成する
  ['table', []],
  // <caption> …… テーブル（表）にキャプションをつける
  ['caption', []],
  // <colgroup> …… 表の縦列をグループ化する
  ['colgroup', []],
  // <col> …… 表の縦列の属性やスタイルを指定する
  ['col', []],
  // <tbody> …… テーブル（表）のボディ部分を定義する
  ['tbody', []],
  // <thead> …… テーブル（表）のヘッダ部分を定義する
  ['thead', []],
  // <tfoot> …… テーブル（表）のフッタ部分を定義する
  ['tfoot', []],
  // <tr> …… テーブル（表）の横一行を定義する
  ['tr', []],
  // <td> …… テーブル（表）のデータセルを作成する
  ['td', []],
  // <th> …… テーブル（表）の見出しセルを作成する
  ['th', []],
  // 9
  // Forms
  // <form> …… 入力・送信フォームを作る
  ['form', []],
  // <fieldset> …… フォームの入力項目をグループ化する
  ['fieldset', []],
  // <legend> …… フォームの入力項目グループにキャプションを付ける
  ['legend', []],
  // <label> …… フォーム部品と項目名（ラベル）を関連付ける
  ['label', []],
  // <input> …… フォームを構成する様々な入力部品を作成する
  ['input', []],
  // <input type="hidden"> …… 画面上は表示されない隠しデータを指定する
  // <input type="text"> …… 一行テキストボックスを作成する
  // <input type="search"> …… 検索テキストの入力欄を作成するHTML5から追加
  // <input type="tel"> …… 電話番号の入力欄を作成するHTML5から追加
  // <input type="url"> …… URLの入力欄を作成するHTML5から追加
  // <input type="email"> …… メールアドレスの入力欄を作成するHTML5から追加
  // <input type="password"> …… パスワード入力欄を作成する
  // <input type="datetime"> …… 協定世界時による日時の入力欄を作成するHTML5から追加
  // <input type="date"> …… 日付の入力欄を作成するHTML5から追加
  // <input type="month"> …… 月の入力欄を作成するHTML5から追加
  // <input type="week"> …… 週の入力欄を作成するHTML5から追加
  // <input type="time"> …… 時間の入力欄を作成するHTML5から追加
  // <input type="datetime-local"> …… ローカル日時の入力欄を作成するHTML5から追加
  // <input type="number"> …… 数値の入力欄を作成するHTML5から追加
  // <input type="range"> …… レンジ入力欄を作成するHTML5から追加
  // <input type="color"> …… 色の入力欄を作成するHTML5から追加
  // <input type="checkbox"> …… チェックボックスを作成する
  // <input type="radio"> …… ラジオボタンを作成する
  // <input type="file"> …… サーバーへファイルを送信する
  // <input type="submit"> …… 送信ボタンを作成する
  // <input type="image"> …… 画像ボタンを作成する
  // <input type="reset"> …… リセットボタンを作成する
  // <input type="button"> …… 汎用ボタンを作成する
  // <input autofocus> …… 入力欄にカーソルを当てて自動フォーカスするHTML5から追加
  // <input placeholder> …… 入力欄に初期表示する内容を指定するHTML5から追加
  // <input required> …… 入力必須であることを示すHTML5から追加
  // <input pattern> …… 正規表現で入力値のパターンを指定するHTML5から追加
  // <input min max> …… 入力できる最小値と最大値を指定するHTML5から追加
  // <input step> …… 入力欄で刻むステップ値を指定するHTML5から追加
  // <input autocomplete> …… 入力候補を提示して入力内容を自動補完するHTML5から追加
  // <input multiple> …… 複数の値を入力・選択できるようにするHTML5から追加
  // <button> …… ボタンを作成する
  ['button', []],
  // <select> …… セレクトボックスを作成する
  ['select', []],
  // <datalist> …… 入力候補となるデータリストを定義するHTML5から追加
  ['datalist', []],
  // <optgroup> …… 選択肢をグループ化する
  ['optgroup', []],
  // <option> …… セレクトボックスや入力候補リストの選択肢を指定する
  ['option', []],
  // <textarea> …… 複数行のテキスト入力欄を作成する
  ['textarea', []],
  // <keygen> …… フォーム送信時にキーを発行するHTML5から追加
  ['keygen', []],
  // <output> …… 計算結果を示すHTML5から追加
  ['output', []],
  // <progress> …… タスク完了までの進行状況を示すHTML5から追加
  ['progress', []],
  // <meter> …… 規定範囲内の測定値を表すHTML5から追加
  ['meter', []],
  // ▲ページ先頭へ
  // Interactive elements
  // <details> …… 備考や操作手段などの詳細情報を示すHTML5から追加
  ['details', []],
  // <summary> …… <details>の内容の要約を示すHTML5から追加
  ['summary', []],
  // <command> …… 操作メニューの各コマンドを指定するHTML5から追加
  ['command', []],
  // <menu> …… 操作メニューを作成するHTML5から追加
  ['menu', []]
]
