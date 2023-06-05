
import { textarea_resize } from "./flex_textarea.js" ;

for( const element of document.querySelectorAll( ".flex_textarea > textarea.textarea" ) ) element.addEventListener( "input", textarea_resize ) ;
