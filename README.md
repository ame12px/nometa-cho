# のめた帖

服薬記録のアプリです。いつ・何を飲んだか、あわせてその時の体調を記録・管理できます。

## 公開URL

https://kusuripo.vercel.app

## スクリーンショット

<table>
    <tr>
        <img src="src/assets/screenshot_light_list.png" width="250" />
        <img src="src/assets/screenshot_light_form.png" width="250" />
        <img src="src/assets/screenshot_dark_list.png" width="250" />
        <img src="src/assets/screenshot_dark_form.png" width="250" />
    </tr>
</table>

## 機能

- 服薬記録の登録・編集・削除
- 薬名での検索・絞り込み
- 日付の新しい順・古い順ソート
- localStorage によるデータ永続化
- モバイル対応（iOS実機確認済み）
- React Router による画面遷移（ブラウザの戻るボタン対応）
- 日時・曜日の自動表示（datetime-local）
- ダークモード対応
- 削除時の確認ダイアログ

## 使用技術

- React 19
- Vite
- CSS（コンポーネント単位で管理）
- localStorage
- React Router v7

## 開発の背景

React学習中に制作したWebアプリです。
実際に自分が欲しかったものをつくりました。
Figmaでワイヤーフレームを作成してから実装するという、
実務を意識した開発フローで制作しました。

## 工夫した点

- コンポーネントを役割ごとに分割（App / ListScreen / FormScreen）
- 編集・新規登録を同じフォームで管理し、editIndexで状態を切り替え
- iOSでの表示崩れを実機確認して修正
- 空欄登録を防ぐバリデーション処理を実装
- 差別化できるアプリ名と記録したくなるUIに調整
- CSS変数でライト・ダークモードを一元管理