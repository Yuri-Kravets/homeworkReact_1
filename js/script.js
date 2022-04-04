'use strict';
(function (){
class VideoFrame extends HTMLElement {
     constructor() {
        super();
        const shadow =this.attachShadow({mode:'open'});
     }
}
customElements.define('yt-video',VideoFrame);
})();

