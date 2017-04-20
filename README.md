# 福岡Ruby会議02 サイト

* Original: https://github.com/hugocarreira/jekyll-vision-casper-theme
* 一部ファイルは https://github.com/jekyll/minima から利用。

## ほらちゃんへ連絡事項

* レイアウトは以下のようです。
  * `_layouts/default.html` デフォルト
  * `_layouts/post.html` もともと記事投稿用のレイアウト。単独ページ用に
* `index2.html` に、元テーマの再利用できそうなパーツを集めたイメージを置いてあります。マークアップなど含めいい感じに直してください -> [テストサーバ向けリンク](http://127.0.0.1:4000/fukuoka02/index2.html)
  * まずはテーマ、日時、場所でお願いします。一旦人間のとこはコメントアウトでも
* `coc.md` はpostレイアウトのサンプルです。付加的な情報を載せるページ向け -> [テストサーバ向けリンク](http://127.0.0.1:4000/fukuoka02/coc.html)

### Jekyll の操作

* `rbenv` とかその辺を入れてRuby環境を作る
* チェックアウトして `bundle install --binstubs bin` で必要ライブラリを入れる
* `./bin/jekyll serve` でデモサイト。変更は勝手に更新されます
* `./bin/jekyll build` で `_site` の下に何かできます
* よくわからなければSlackか、Fukuoka.rbに来てください！
