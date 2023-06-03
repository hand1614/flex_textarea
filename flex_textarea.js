
// HTMLTextAreaElement.addEventListener( `input`, textarea_resize ) ;
export function textarea_resize ( event ) {
  const style    = window.getComputedStyle( this ) ;
  const padding  = style.padding ;
  const min_h    = parseFloat( style.minHeight ) + parseFloat( style.paddingTop )  + parseFloat( style.paddingBottom ) + 1 ;
  const min_w    = parseFloat( style.minWidth )  + parseFloat( style.paddingLeft ) + parseFloat( style.paddingRight )  + 1 ;
  const border_h = parseFloat( style.borderTopWidth )  + parseFloat( style.borderBottomWidth ) ;
  const border_w = parseFloat( style.borderLeftWidth ) + parseFloat( style.borderRightWidth )  ;
  console.log( min_h, min_w, this.scrollHeight, this.scrollWidth ) ; // 先にパディングを0にしないとパディング領域に溢れた分が計算されない
  if( ( this.scrollWidth < min_w ) && ( this.scrollHeight < min_h ) ) return ;
  this.parentElement.style.cssText = `height: ${ this.scrollHeight + border_h }px ; width: ${ this.scrollWidth + border_w }px ; ` ;
  this.style.cssText =               `height: 0px ; width: 0px ; padding: 0px ; ` ;
  this.style.cssText =               `height: ${ this.scrollHeight }px ; width: ${ this.scrollWidth }px ; padding: ${ padding } ; ` ;
  this.parentElement.style.cssText = `height: ${ this.scrollHeight + border_h }px ; width: ${ this.scrollWidth + border_w }px ; ` ;
}



