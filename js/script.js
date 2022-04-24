'use strict';
(function (){
class VideoFrame extends HTMLElement {
     constructor() {
        super();
        const shadow = this.attachShadow({mode:'open'});

        //shadow.append('iframe');

        let iframe = document.createElement('iframe');
        iframe.setAttribute('src','https://www.youtube.com');
        iframe.setAttribute('id','data-video-id');
        iframe.setAttribute('data-height','height=50px');
        iframe.setAttribute('data-width','width=500px');

        shadow.appendChild(iframe);
     }


}
customElements.define('yt-video',VideoFrame);
})();

// class VideoFrame extends HTMLElement {
//     constructor() {
//         super();
//         const shadow = this.attachShadow({mode:'open'});
//
//         shadow.append('body is good');
//         const iframe = document.createElement("iframe");
//     }
//
//
// }
// customElements.define('yt-video',VideoFrame);