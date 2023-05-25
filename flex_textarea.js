
// HTMLTextAreaElement.addEventListener( `input`, textarea_resize ) ;
export function textarea_resize( event ){
  const style = window.getComputedStyle( this ) ;
  const padding = style.padding ;
  const h = this.scrollHeight -  ( parseFloat( style.minHeight ) + parseFloat( style.paddingTop )  + parseFloat( style.paddingBottom ) ) ;
  const w = this.scrollWidth  -  ( parseFloat( style.minWidth )  + parseFloat( style.paddingLeft ) + parseFloat( style.paddingRight ) ) ;
  if( ( Math.abs( h ) < 1 ) && ( Math.abs( w ) < 1 ) ) return ;
  this.parentElement.style.height = `${ this.scrollHeight + this.offsetHeight - this.clientHeight }px` ;
  this.parentElement.style.width  = `${ this.scrollWidth  + this.offsetWidth  - this.clientWidth  }px` ;
  this.style.height  = "0px" ;
  this.style.width   = "0px" ;
  this.style.padding = "0px" ;
  this.style.height  = `${ this.scrollHeight }px` ;
  this.style.width   = `${ this.scrollWidth  }px` ;
  this.style.padding = padding ;
  this.parentElement.style.height = `${ this.scrollHeight + this.offsetHeight - this.clientHeight }px` ;
  this.parentElement.style.width  = `${ this.scrollWidth  + this.offsetWidth  - this.clientWidth  }px` ;
}


