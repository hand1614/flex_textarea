
// HTMLTextAreaElement.addEventListener( `input`, textarea_resize ) ;
export function textarea_resize( event ){
  const style = window.getComputedStyle( this ) ;
  const padding = style.padding ;
  const h = this.scrollHeight -  ( parseFloat( style.minHeight ) + parseFloat( style.paddingTop )  + parseFloat( style.paddingBottom ) ) ;
  const w = this.scrollWidth  -  ( parseFloat( style.minWidth )  + parseFloat( style.paddingLeft ) + parseFloat( style.paddingRight ) ) ;
  if( ( Math.abs( h ) < 1 ) && ( Math.abs( w ) < 1 ) ) return ;
  this.parentElement.style.cssText = `height: ${ this.scrollHeight + this.offsetHeight - this.clientHeight }px ; width: ${ this.scrollWidth  + this.offsetWidth  - this.clientWidth }px ; ` ;
  this.style.cssText = `height: 0px ; width: 0px ; padding: 0px ; ` ;
  this.style.cssText = `height: ${ this.scrollHeight }px ; width: ${ this.scrollWidth }px ; padding: ${ padding } ; ` ;
  this.parentElement.style.cssText = `height: ${ this.scrollHeight + this.offsetHeight - this.clientHeight }px ; width: ${ this.scrollWidth  + this.offsetWidth  - this.clientWidth }px ; ` ;
}

