# fixedFrameOnMiddleSection
## Usage

---
npm install
npm run dev
---

## セクション間だけ固定。
position: sticky;で最初は実装したもののフレームをstickyで固定してしまうとセクションの中身の要素がクリックができなくなってしまった為。
.section02の背景に画像等が固定される場合はposition: sticky;で実装でもよかったのですが、中身の要素はクリックできる状態で.box0*が前に位置するように実装しなくてはならなかった。
Intersection Observerを使用してやってみようと思ったが、実装の複雑さを考慮してScrollTriggerを使用した。
