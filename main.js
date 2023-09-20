let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut() {
//     setInterval(loader, 3000);
// }

// window.onload = fadeOut();



var dom,doc,where,scriptBaseURL="https://www.paypalobjects.com/webstatic/r/fb/",iframe=document.createElement("iframe");iframe.src="about:blank",iframe.title="fb-all-prod",iframe.role="presentation",(iframe.frameElement||iframe).style.cssText="position:absolute; left: -9999px",document.body.appendChild(iframe);try{doc=iframe.contentWindow.document}catch(e){dom=document.domain,iframe.src="javascript:var d=document.open();d.domain='"+dom+"';void(0);",doc=iframe.contentWindow.document}function listener(){doc._l()}doc.open()._l=function(){var e=this.createElement("script");dom&&(this.domain=dom),e.id="js-iframe-async",e.src=scriptBaseURL+"fb-all-prod.pp.min.js",this.body.appendChild(e)},iframe.addEventListener?iframe.addEventListener("load",listener,!1):iframe.attachEvent?iframe.attachEvent("onload",listener):doc.write('<body onload="document._l();">'),doc.close();
    