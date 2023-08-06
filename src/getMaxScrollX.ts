export function getMaxScrollX(): number {
	// ビューポートの幅
	const viewportWidth =
		document.documentElement.clientWidth || window.innerWidth;
	// ページの実際のコンテンツの幅
	const contentWidth =
		document.documentElement.scrollWidth || document.body.scrollWidth;

	// 横スクロール可能な最大値を計算
	const maxScrollX: number = contentWidth - viewportWidth;
	return maxScrollX;
}
