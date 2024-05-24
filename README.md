## jnpi-photo-gallery

自分で撮影した画像のフォトギャラリー

## URL

- URL
  - Netlify
    https://jnpi-photo-gallery.netlify.app/

## 使用技術

フレームワーク

- Next.js 14.2.3

使用言語

- Typesctipt 5.4.5
- React 18.2.0

CSS

- Tailwind CSS 3.4.3

UI

- Shadcn/ui
- v0

CDN

- Netlify

CMS

- microCMS

## 制作中の着想

- shadcn/ui を使おうと思い、UI コンポーネントは vercel の v0 を通じて作成実装してみた。
- Load More ボタンの実装は、「すべての画像を分割表示する方法」と「ボタンを押下してフェッチを行う方法」の２種類を作成。それぞれに一長一短がある。
- 追加の fetch のために、route handlers を用いて、アプリ内に api を実装。
