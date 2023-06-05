
// for( const element of document.querySelectorAll( ".flex_textarea > textarea.textarea" ) ) element.addEventListener( "input", textarea_resize ) ;

export function textarea_resize () { this.parentElement.querySelector( ".dummy" ).textContent = `${ this.value }\u200b` ; }
