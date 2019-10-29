
/*!---- respond-----*/
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);


/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){u(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(c.ajax=f,c.queue=d,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var g,h,i,j=a.document,k=j.documentElement,l=[],m=[],n=[],o={},p=30,q=j.getElementsByTagName("head")[0]||k,r=j.getElementsByTagName("base")[0],s=q.getElementsByTagName("link"),t=function(){var a,b=j.createElement("div"),c=j.body,d=k.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=j.createElement("body"),c.style.background="none"),k.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&k.insertBefore(c,k.firstChild),a=b.offsetWidth,f?k.removeChild(c):c.removeChild(b),k.style.fontSize=d,e&&(c.style.fontSize=e),a=i=parseFloat(a)},u=function(b){var c="clientWidth",d=k[c],e="CSS1Compat"===j.compatMode&&d||j.body[c]||d,f={},o=s[s.length-1],r=(new Date).getTime();if(b&&g&&p>r-g)return a.clearTimeout(h),h=a.setTimeout(u,p),void 0;g=r;for(var v in l)if(l.hasOwnProperty(v)){var w=l[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?i||t():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?i||t():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(m[w.rules]))}for(var C in n)n.hasOwnProperty(C)&&n[C]&&n[C].parentNode===q&&q.removeChild(n[C]);n.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=j.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(j.createTextNode(F)),n.push(E)}},v=function(a,b,d){var e=a.replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var g=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},h=!f&&d;b.length&&(b+="/"),h&&(f=1);for(var i=0;f>i;i++){var j,k,n,o;h?(j=d,m.push(g(a))):(j=e[i].match(c.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&g(RegExp.$2))),n=j.split(","),o=n.length;for(var p=0;o>p;p++)k=n[p],l.push({media:k.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")>-1,minw:k.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},w=function(){if(d.length){var b=d.shift();f(b.href,function(c){v(c,b.href,b.media),o[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<s.length;b++){var c=s[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!o[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(v(c.styleSheet.rawCssText,e,f),o[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!r||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}w()};x(),c.update=x,c.getEmValue=t,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);
/*!---- responsive-----*/
var hmTopBox, hmBottomBox;
(function($j, window, document, undefined) {
    $j.responsiveWeb = function(element, options) {
        var windowadaptTimeout;
        var tempCounter = 0;
        var winWidth;
        var winHeight;
        this.options = {};
        var that = this;
        element.data("responsiveWeb", this);
        this.init = function(element, options) {
            this.options = $j.extend({}, $j.responsiveWeb.defaultOptions, options);
            options = this.options;
            element.resize(checkResize);
            checkResize();
            if (options.manipulateDesign) {
                manipulateDesign()
            }
        };

        function delayedResize() {
            options = that.options;
            var winNewWidth = $j(window).width();
            var winNewHeight = $j(window).height();
            if (winWidth != winNewWidth || winHeight != winNewHeight) {
                winWidth = winNewWidth;
                winHeight = winNewHeight;
                if (options.applyBodyClasses) {
                    applyBodyClasses()
                }
                if (options.rearrangeObjects) {
                    rearrangeObjects()
                }
            }
        }

        function checkResize() {
            window.clearTimeout(windowadaptTimeout);
            windowadaptTimeout = window.setTimeout(delayedResize, 250)
        }

        function applyBodyClasses() {
            options = that.options;
            clearBodyClasses();
            var currcC = "";
            var tmpWidth = decideResolution();
            var tmpArrWidth = tmpWidth.split(" ");
            tmpWidth = tmpArrWidth[0];
            if (options.applyPlatform) {
                currcC += decidePlatform()
            }
            if (options.applyBrowser) {
                currcC += decideBrowser()
            }
            if (options.applyResolution) {
                currcC += decideResolution()
            }
            $j("body").addClass(currcC);
            $j("body").attr("data-width", tmpWidth.substr(1));
            if (options.debug) {
                log(winWidth + "x" + winHeight + " || " + $j("body").attr("class"))
            }
        }

        function log(str) {
            var debugDiv = '<div class="debugDiv" style="position:absolute;top:0;right:0;padding:2px;background:black;color:lime;font-size:9px;line-height:9px;"></div>';
            if ($j(".debugDiv ul").length) {
                $j(".debugDiv ul").append("<li>" + str + "</li>")
            } else {
                $j("body").append(debugDiv);
                $j(".debugDiv").append("<ul></ul>");
                $j(".debugDiv ul").append("<li>" + str + "</li>")
            }
        }

        function decidePlatform() {
            var cC = "";
            var platform = navigator.userAgent;
            if (platform.indexOf("Windows") > 0) {
                cC = "windows "
            } else {
                if (platform.indexOf("Linux") > 0 && platform.indexOf("Android") < 0) {
                    cC = "linux "
                } else {
                    if (platform.indexOf("Mac") > 0 && (platform.indexOf("iphone") < 0 || platform.indexOf("ipad") < 0)) {
                        cC = "mac "
                    } else {
                        if (platform.indexOf("iPhone") > 0) {
                            cC = "iphone "
                        } else {
                            if (platform.indexOf("iPad") > 0) {
                                cC = "ipad "
                            } else {
                                if (platform.indexOf("Android") > 0) {
                                    cC = "android "
                                }
                            }
                        }
                    }
                }
            }
            return cC
        }

        function decideBrowser() {
            var cC = "";
            options = that.options;
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browserName = navigator.appName;
            var fullVersion = "" + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;
            if ((verOffset = nAgt.indexOf("Opera")) != -1) {
                browserName = "opera";
                fullVersion = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf("Version")) != -1) {
                    fullVersion = nAgt.substring(verOffset + 8)
                }
            } else {
                if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
                    browserName = "msie";
                    fullVersion = nAgt.substring(verOffset + 5)
                } else {
                    if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
                        browserName = "chrome";
                        fullVersion = nAgt.substring(verOffset + 7)
                    } else {
                        if ((verOffset = nAgt.indexOf("Safari")) != -1) {
                            browserName = "safari";
                            fullVersion = nAgt.substring(verOffset + 7);
                            if ((verOffset = nAgt.indexOf("Version")) != -1) {
                                fullVersion = nAgt.substring(verOffset + 8)
                            }
                        } else {
                            if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
                                browserName = "firefox";
                                fullVersion = nAgt.substring(verOffset + 8)
                            } else {
                                if ((nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))) {
                                    browserName = nAgt.substring(nameOffset, verOffset);
                                    fullVersion = nAgt.substring(verOffset + 1);
                                    if (browserName.toLowerCase() == browserName.toUpperCase()) {
                                        browserName = navigator.appName
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if ((ix = fullVersion.indexOf(";")) != -1) {
                fullVersion = fullVersion.substring(0, ix)
            }
            if ((ix = fullVersion.indexOf(" ")) != -1) {
                fullVersion = fullVersion.substring(0, ix)
            }
            majorVersion = parseInt("" + fullVersion, 10);
            if (isNaN(majorVersion)) {
                fullVersion = "" + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10)
            }
            if (options.applyBrowser) {
                cC += browserName + " "
            }
            if (options.applyBrowserVersion) {
                cC += browserName + majorVersion + " "
            }
            return cC
        }

        function decideResolution() {
            var h = $j(window).height();
            var w = $j(window).width();
            var cC = "";
            if (w >= 1880) {
                cC = "w1920 "
            } else {
                if (w >= 1560) {
                    cC = "w1600 "
                } else {
                    if (w >= 1400) {
                        cC = "w1440 "
                    } else {
                        if (w >= 1240) {
                            cC = "w1280 "
                        } else {
                            if (w >= 984) {
                                cC = "w1024 "
                            } else {
                                if (w >= 728) {
                                    cC = "w768 "
                                } else {
                                    if (w >= 440) {
                                        cC = "w480 "
                                    } else {
                                        if (w >= 280) {
                                            cC = "w320 "
                                        } else {
                                            cC = "wtiny "
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (h >= 864) {
                cC += "h1024 "
            } else {
                if (h >= 740) {
                    cC += "h900 "
                } else {
                    if (h >= 608) {
                        cC += "h768 "
                    } else {
                        if (h >= 440) {
                            cC += "h600 "
                        } else {
                            if (h >= 320) {
                                cC += "h480 "
                            } else {
                                cC += "htiny "
                            }
                        }
                    }
                }
            }
            return cC
        }

        function clearBodyClasses() {
            $j("body").removeClass("w1920 w1600 w1440 w1280 w1024 w768 w480 w320 wtiny h1024 h900 h768 h600 h480 htiny")
        }
        this.init(element, options)
    };
    $j.fn.responsiveWeb = function(options) {
        return this.each(function() {
            (new $j.responsiveWeb($j(this), options))
        })
    };
    $j.responsiveWeb.defaultOptions = {
        applyBodyClasses: true,
        applyResolution: true,
        applyPlatform: true,
        applyBrowser: true,
        applyBrowserVersion: true,
        manipulateDesign: true,
        rearrangeObjects: true,
        debug: false
    }
})($j, window, document);

function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    };
}

function manipulateDesign() {}

function rearrangeObjects() {
setEqualHeight_CommonClass(".box-introtext");
setEqualHeight_CommonClass(".bottom-box");
setEqualHeight_CommonClass(".upper-box");
setEqualHeight_CommonClass(".upper-box box-content");

setEqualHeight_CommonClass(".video-item-title");



    currWidth = viewport().width;
    
    // set left col right col equal height starts
    var lh = $j('#leftcol').height();
    var rh = $j('.content').height();

    if ($j('#threecolright').length > 0) {
        if (currWidth > 991) {
            if (lh > rh) {
                $j('.content').css('min-height', lh - 20);
            }
        } else {
            $j('.content').css('min-height', 'auto');
        }
    } else {
        if (lh > rh) {
            $j('.content').css('min-height', lh - 20);
        }
    }
    // set left col right col equal height ends
    if (currWidth >= 768) {
        /*---  For dynamic resposive main nav for desktop layout  ---*/
        $j('#navigation > ul > li.level1').respoMenu();
        $j(".newstab").show();
        if ($j(".drop-down span").hasClass("open")) {
            $j(".drop-down span").removeClass("open");
        }
    } else {

        var headerHeight = $j('#headerwrapper').outerHeight();
        $j('#mobishownav, #mobishowsearch').css('top', headerHeight);

        if ($j(".selectedTab").hasClass("open")) {
            $j(".newstab").show();
        } else {
            $j(".newstab").hide();
        }
    }
   
    if (currWidth >= 992) {
        $j('#mobishownav').css('display', 'none');
    } 

    if ($j(window).width() > 767) {
        $j(".banner-slider .slick-dots").appendTo(".slides-wrapper");
        $j('.mobinav a.selected ,.mobisearch a.selected').removeClass('selected');
        $j('#mobishowsearch, #mobishownav, .menuArrow, .menuArrow2').hide();
    } else {
        $j(".banner-slider .slick-dots").appendTo(".slides-wrapper");
        if ($j('.mobinav span').hasClass('selected') && $j('#mobishownav').css('display', 'none')) {
            $j('#mobishownav').css('display', 'block');
        }
    }

}

var bannerOn, bannerTextOn = false;

$j(document).ready(function() {
    $j(window).responsiveWeb({
        applyBodyClasses: true,
        applyResolution: true,
        applyPlatform: true,
        applyBrowser: true,
        applyBrowserVersion: false,
        manipulateDesign: true,
        rearrangeObjects: true
    })

    $j('.box1-content img').imagesLoaded(function() {
      if( hmTopBox && typeof hmTopBox !== 'undefined'){
        hmTopBox.reGroup();
      }
      
    });
});


$j(window).load(function() {
    var h = $j('.newstab-level4 ul').html();
    $j('.mobi-level4').append("<ul>" + h + "</ul>");
    var currWidth = $j(window).width();

    var l = $j('.mobi-level4 ul li.current').text();
    $j('.mobi-level4 p').text(l);
    
setEqualHeight_CommonClass(".upper-box");
setEqualHeight_CommonClass(".bottom-box");
setEqualHeight_CommonClass(".upper-box box-content");
}); // JavaScript Document

/*!---- color-box-min-----*/
(function ($j, document, window) {
    var defaults = {
        transition: 'elastic',
        speed: 300,
        width: false,
        initialWidth: '600',
        innerWidth: false,
        maxWidth: false,
        height: false,
        initialHeight: '450',
        innerHeight: false,
        maxHeight: false,
        scalePhotos: true,
        scrolling: true,
        inline: false,
        html: false,
        iframe: false,
        fastIframe: true,
        photo: false,
        href: false,
        title: false,
        rel: false,
        opacity: 0.9,
        preloading: true,
        className: false,
        current: 'image {current} of {total}',
        previous: 'previous',
        next: 'next',
        close: '',
        xhrError: 'This content failed to load.',
        imgError: 'This image failed to load.',
        open: false,
        returnFocus: true,
        reposition: true,
        loop: true,
        slideshow: false,
        slideshowAuto: true,
        slideshowSpeed: 2500,
        slideshowStart: 'start slideshow',
        slideshowStop: 'stop slideshow',
        onOpen: false,
        onLoad: false,
        onComplete: false,
        onCleanup: false,
        onClosed: false,
        overlayClose: true,
        escKey: true,
        arrowKey: true,
        top: false,
        bottom: false,
        left: false,
        right: false,
        fixed: false,
        data: undefined
    },
    // Abstracting the HTML and event identifiers for easy rebranding
    colorbox = 'colorbox',
    prefix = 'cbox',
    boxElement = prefix + 'Element',
    // Events
    event_open = prefix + '_open',
    event_load = prefix + '_load',
    event_complete = prefix + '_complete',
    event_cleanup = prefix + '_cleanup',
    event_closed = prefix + '_closed',
    event_purge = prefix + '_purge',
    // Special Handling for IE
    isIE = !$j.support.leadingWhitespace, // IE6 to IE8
    isIE6 = isIE && !window.XMLHttpRequest, // IE6
    event_ie6 = prefix + '_IE6',
    // Cached jQuery Object Variables
    $overlay,
    $box,
    $wrap,
    $content,
    $topBorder,
    $leftBorder,
    $rightBorder,
    $bottomBorder,
    $related,
    $window,
    $loaded,
    $loadingBay,
    $loadingOverlay,
    $title,
    $current,
    $slideshow,
    $next,
    $prev,
    $close,
    $groupControls,
    $events = $j({
    }),
    // Variables for cached values or use across multiple functions
    settings,
    interfaceHeight,
    interfaceWidth,
    loadedHeight,
    loadedWidth,
    element,
    index,
    photo,
    open,
    active,
    closing,
    loadingTimer,
    publicMethod,
    div = 'div',
    className,
    init;
    // ****************
    // HELPER FUNCTIONS
    // ****************
    // Convience function for creating new jQuery objects
    function $tag(tag, id, css) {
        var element = document.createElement(tag);
        if (id) {
            element.id = prefix + id;
        }
        if (css) {
            element.style.cssText = css;
        }
        return $j(element);
    }
    // Determine the next and previous members in a group.

    function getIndex(increment) {
        var
        max = $related.length,
        newIndex = (index + increment) % max;
        return (newIndex < 0) ? max + newIndex : newIndex;
    }
    // Convert '%' and 'px' values to integers

    function setSize(size, dimension) {
        return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width()  : $window.height()) / 100)  : 1) * parseInt(size, 10));
    }
    // Checks an href to see if it is a photo.
    // There is a force photo option (photo: true) for hrefs that cannot be matched by this regex.

    function isImage(url) {
        return settings.photo || /\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(url);
    }
    // Assigns function results to their respective properties

    function makeSettings() {
        var i,
        data = $j.data(element, colorbox);
        if (data == null) {
            settings = $j.extend({
            }, defaults);
            if (console && console.log) {
                console.log('Error: cboxElement missing settings object');
            }
        } else {
            settings = $j.extend({
            }, data);
        }
        for (i in settings) {
            if ($j.isFunction(settings[i]) && i.slice(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
                settings[i] = settings[i].call(element);
            }
        }
        settings.rel = settings.rel || element.rel || $j(element).data('rel') || 'nofollow';
        settings.href = settings.href || $j(element).attr('href');
        settings.title = settings.title || element.title;
        if (typeof settings.href === 'string') {
            settings.href = $j.trim(settings.href);
        }
    }
    function trigger(event, callback) {
        // for external use
        $j(document).trigger(event);
        // for internal use
        $events.trigger(event);
        if ($j.isFunction(callback)) {
            callback.call(element);
        }
    }
    // Slideshow functionality

    function slideshow() {
        var
        timeOut,
        className = prefix + 'Slideshow_',
        click = 'click.' + prefix,
        clear,
        set,
        start,
        stop;
        if (settings.slideshow && $related[1]) {
            clear = function () {
                clearTimeout(timeOut);
            };
            set = function () {
                if (settings.loop || $related[index + 1]) {
                    timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
                }
            };
            start = function () {
                $slideshow.html(settings.slideshowStop).unbind(click).one(click, stop);
                $events.bind(event_complete, set).bind(event_load, clear).bind(event_cleanup, stop);
                $box.removeClass(className + 'off').addClass(className + 'on');
            };
            stop = function () {
                clear();
                $events.unbind(event_complete, set).unbind(event_load, clear).unbind(event_cleanup, stop);
                $slideshow.html(settings.slideshowStart).unbind(click).one(click, function () {
                    publicMethod.next();
                    start();
                });
                $box.removeClass(className + 'on').addClass(className + 'off');
            };
            if (settings.slideshowAuto) {
                start();
            } else {
                stop();
            }
        } else {
            $box.removeClass(className + 'off ' + className + 'on');
        }
    }
    function launch(target) {
        if (!closing) {
            element = target;
            makeSettings();
            $related = $j(element);
            index = 0;
            if (settings.rel !== 'nofollow') {
                $related = $j('.' + boxElement).filter(function () {
                    var data = $j.data(this, colorbox),
                    relRelated;
                    if (data) {
                        relRelated = $j(this).data('rel') || data.rel || this.rel;
                    }
                    return (relRelated === settings.rel);
                });
                index = $related.index(element);
                // Check direct calls to ColorBox.
                if (index === - 1) {
                    $related = $related.add(element);
                    index = $related.length - 1;
                }
            }
            if (!open) {
                open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
                // Show colorbox so the sizes can be calculated in older versions of jQuery
                $box.css({
                    visibility: 'hidden',
                    display: 'block'
                });
                $loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden').appendTo($content);
                // Cache values needed for size calculations
                interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height(); //Subtraction needed for IE6
                interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
                loadedHeight = $loaded.outerHeight(true);
                loadedWidth = $loaded.outerWidth(true);
                if (settings.returnFocus) {
                    $j(element).blur();
                    $events.one(event_closed, function () {
                        $j(element).focus();
                    });
                }
                $overlay.css({
                    opacity: parseFloat(settings.opacity),
                    cursor: settings.overlayClose ? 'pointer' : 'auto',
                    visibility: 'visible'
                }).show();
                // Opens inital empty ColorBox prior to content being loaded.
                settings.w = setSize(settings.initialWidth, 'x');
                settings.h = setSize(settings.initialHeight, 'y');
                publicMethod.position();
                if (isIE6) {
                    $window.bind('resize.' + event_ie6 + ' scroll.' + event_ie6, function () {
                        $overlay.css({
                            width: $window.width(),
                            height: $window.height(),
                            top: $window.scrollTop(),
                            left: $window.scrollLeft()
                        });
                    }).trigger('resize.' + event_ie6);
                }
                slideshow();
                trigger(event_open, settings.onOpen);
                $groupControls.add($title).hide();
                $close.html(settings.close).show();
            }
            publicMethod.load(true);
        }
    }
    // ColorBox's markup needs to be added to the DOM prior to being called
    // so that the browser will go ahead and load the CSS background images.

    function appendHTML() {
        if (!$box && document.body) {
            init = false;
            $window = $j(window);
            $box = $tag(div).attr({
                id: colorbox,
                'class': isIE ? prefix + (isIE6 ? 'IE6' : 'IE')  : ''
            }).hide();
            $overlay = $tag(div, 'Overlay', isIE6 ? 'position:absolute' : '').hide();
            $loadingOverlay = $tag(div, 'LoadingOverlay').add($tag(div, 'LoadingGraphic'));
            $wrap = $tag(div, 'Wrapper');
            $content = $tag(div, 'Content').append($title = $tag(div, 'Title'), $current = $tag(div, 'Current'), $next = $tag(div, 'Next'), $prev = $tag(div, 'Previous'), $slideshow = $tag(div, 'Slideshow'), $close = $tag(div, 'Close')
            );
            $wrap.append( // The 3x3 Grid that makes up ColorBox
            $tag(div).append($tag(div, 'TopLeft'), $topBorder = $tag(div, 'TopCenter'), $tag(div, 'TopRight')
            ), $tag(div, false, 'clear:left').append($leftBorder = $tag(div, 'MiddleLeft'), $content, $rightBorder = $tag(div, 'MiddleRight')
            ), $tag(div, false, 'clear:left').append($tag(div, 'BottomLeft'), $bottomBorder = $tag(div, 'BottomCenter'), $tag(div, 'BottomRight')
            )
            ).find('div div').css({
                'float': 'left'
            });
            $loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none');
            $groupControls = $next.add($prev).add($current).add($slideshow);
            $j(document.body).append($overlay, $box.append($wrap, $loadingBay));
        }
    }
    // Add ColorBox's event bindings

    function addBindings() {
        function clickHandler(e) {
            // ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
            // See: http://jacklmoore.com/notes/click-events/
            if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
                e.preventDefault();
                launch(this);
            }
        }
        if ($box) {
            if (!init) {
                init = true;
                // Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
                $next.click(function () {
                    publicMethod.next();
                });
                $prev.click(function () {
                    publicMethod.prev();
                });
                $close.click(function () {
                    publicMethod.close();
                });
                $overlay.click(function () {
                    if (settings.overlayClose) {
                        publicMethod.close();
                    }
                });
                // Key Bindings
                $j(document).bind('keydown.' + prefix, function (e) {
                    var key = e.keyCode;
                    if (open && settings.escKey && key === 27) {
                        e.preventDefault();
                        publicMethod.close();
                    }
                    if (open && settings.arrowKey && $related[1]) {
                        if (key === 37) {
                            e.preventDefault();
                            $prev.click();
                        } else if (key === 39) {
                            e.preventDefault();
                            $next.click();
                        }
                    }
                });
                if ($j.isFunction($j.fn.on)) {
                    $j(document).on('click.' + prefix, '.' + boxElement, clickHandler);
                } else { // For jQuery 1.3.x -> 1.6.x
                    $j('.' + boxElement).live('click.' + prefix, clickHandler);
                }
            }
            return true;
        }
        return false;
    }
    // Don't do anything if ColorBox already exists.

    if ($j.colorbox) {
        return;
    }
    // Append the HTML when the DOM loads

    $j(appendHTML);
    // ****************
    // PUBLIC FUNCTIONS
    // Usage format: $j.fn.colorbox.close();
    // Usage from within an iframe: parent.$j.fn.colorbox.close();
    // ****************
    publicMethod = $j.fn[colorbox] = $j[colorbox] = function (options, callback) {
        var $this = this;
        options = options || {
        };
        appendHTML();
        if (addBindings()) {
            if ($j.isFunction($this)) { // assume a call to $j.colorbox
                $this = $j('<a/>');
                options.open = true;
            } else if (!$this[0]) { // colorbox being applied to empty collection
                return $this;
            }
            if (callback) {
                options.onComplete = callback;
            }
            $this.each(function () {
                $j.data(this, colorbox, $j.extend({
                }, $j.data(this, colorbox) || defaults, options));
            }).addClass(boxElement);
            if (($j.isFunction(options.open) && options.open.call($this)) || options.open) {
                launch($this[0]);
            }
        }
        return $this;
    };
    publicMethod.position = function (speed, loadedCallback) {
        var
        css,
        top = 0,
        left = 0,
        offset = $box.offset(),
        scrollTop,
        scrollLeft;
        $window.unbind('resize.' + prefix);
        // remove the modal so that it doesn't influence the document width/height
        $box.css({
            top: - 90000,
            left: - 90000
        });
        scrollTop = $window.scrollTop();
        scrollLeft = $window.scrollLeft();
        if (settings.fixed && !isIE6) {
            offset.top -= scrollTop;
            offset.left -= scrollLeft;
            $box.css({
                position: 'fixed'
            });
        } else {
            top = scrollTop;
            left = scrollLeft;
            $box.css({
                position: 'absolute'
            });
        }
        // keeps the top and left positions within the browser's viewport.

        if (settings.right !== false) {
            left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.right, 'x'), 0);
        } else if (settings.left !== false) {
            left += setSize(settings.left, 'x');
        } else {
            left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
        }
        if (settings.bottom !== false) {
            top += Math.max($window.height() - settings.h - loadedHeight - interfaceHeight - setSize(settings.bottom, 'y'), 0);
        } else if (settings.top !== false) {
            top += setSize(settings.top, 'y');
        } else {
            top += Math.round(Math.max($window.height() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
        }
        $box.css({
            top: offset.top,
            left: offset.left,
            visibility: 'visible'
        });
        // setting the speed to 0 to reduce the delay between same-sized content.
        speed = ($box.width() === settings.w + loadedWidth && $box.height() === settings.h + loadedHeight) ? 0 : speed || 0;
        // this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
        // but it has to be shrank down around the size of div#colorbox when it's done. If not,
        // it can invoke an obscure IE bug when using iframes.
        $wrap[0].style.width = $wrap[0].style.height = '9999px';
        function modalDimensions(that) {
            $topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt(that.style.width, 10) - interfaceWidth) + 'px';
            $content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt(that.style.height, 10) - interfaceHeight) + 'px';
        }
        css = {
            width: settings.w + loadedWidth + interfaceWidth,
            height: settings.h + loadedHeight + interfaceHeight,
            top: top,
            left: left
        };
        if (speed === 0) { // temporary workaround to side-step jQuery-UI 1.8 bug (http://bugs.jquery.com/ticket/12273)
            $box.css(css);
        }
        $box.dequeue().animate(css, {
            duration: speed,
            complete: function () {
                modalDimensions(this);
                active = false;
                // shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
                $wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + 'px';
                $wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + 'px';
                if (settings.reposition) {
                    setTimeout(function () { // small delay before binding onresize due to an IE8 bug.
                        $window.bind('resize.' + prefix, publicMethod.position);
                    }, 1);
                }
                if (loadedCallback) {
                    loadedCallback();
                }
            },
            step: function () {
                modalDimensions(this);
            }
        });
    };
    publicMethod.resize = function (options) {
        if (open) {
            options = options || {
            };
            if (options.width) {
                settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
            }
            if (options.innerWidth) {
                settings.w = setSize(options.innerWidth, 'x');
            }
            $loaded.css({
                width: settings.w
            });
            if (options.height) {
                settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
            }
            if (options.innerHeight) {
                settings.h = setSize(options.innerHeight, 'y');
            }
            if (!options.innerHeight && !options.height) {
                $loaded.css({
                    height: 'auto'
                });
                settings.h = $loaded.height();
            }
            $loaded.css({
                height: settings.h
            });
            publicMethod.position(settings.transition === 'none' ? 0 : settings.speed);
        }
    };
    publicMethod.prep = function (object) {
        if (!open) {
            return;
        }
        var callback,
        speed = settings.transition === 'none' ? 0 : settings.speed;
        $loaded.empty().remove(); // Using empty first may prevent some IE7 issues.
        $loaded = $tag(div, 'LoadedContent').append(object);
        function getWidth() {
            settings.w = settings.w || $loaded.width();
            settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
            return settings.w;
        }
        function getHeight() {
            settings.h = settings.h || $loaded.height();
            settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
            return settings.h;
        }
        $loaded.hide().appendTo($loadingBay.show()) // content has to be appended to the DOM for accurate size calculations.
        .css({
            width: getWidth(),
            overflow: settings.scrolling ? 'auto' : 'hidden'
        }).css({
            height: getHeight()
        }) // sets the height independently from the width in case the new width influences the value of height.
        .prependTo($content);
        $loadingBay.hide();
        // floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
        //$j(photo).css({'float': 'none', marginLeft: 'auto', marginRight: 'auto'});
        $j(photo).css({
            'float': 'none'
        });
        callback = function () {
            var total = $related.length,
            iframe,
            frameBorder = 'frameBorder',
            allowTransparency = 'allowTransparency',
            complete;
            if (!open) {
                return;
            }
            function removeFilter() {
                if (isIE) {
                    $box[0].style.removeAttribute('filter');
                }
            }
            complete = function () {
                clearTimeout(loadingTimer);
                $loadingOverlay.remove();
                trigger(event_complete, settings.onComplete);
            };
            if (isIE) {
                //This fadeIn helps the bicubic resampling to kick-in.
                if (photo) {
                    $loaded.fadeIn(100);
                }
            }
            $title.html(settings.title).add($loaded).show();
            if (total > 1) { // handle grouping
                if (typeof settings.current === 'string') {
                    $current.html(settings.current.replace('{current}', index + 1).replace('{total}', total)).show();
                }
                $next[(settings.loop || index < total - 1) ? 'show' : 'hide']().html(settings.next);
                $prev[(settings.loop || index) ? 'show' : 'hide']().html(settings.previous);
                if (settings.slideshow) {
                    $slideshow.show();
                }
                // Preloads images within a rel group

                if (settings.preloading) {
                    $j.each([getIndex( - 1),
                    getIndex(1)], function () {
                        var src,
                        img,
                        i = $related[this],
                        data = $j.data(i, colorbox);
                        if (data && data.href) {
                            src = data.href;
                            if ($j.isFunction(src)) {
                                src = src.call(i);
                            }
                        } else {
                            src = $j(i).attr('href');
                        }
                        if (src && (isImage(src) || data.photo)) {
                            img = new Image();
                            img.src = src;
                        }
                    });
                }
            } else {
                $groupControls.hide();
            }
            if (settings.iframe) {
                iframe = $tag('iframe') [0];
                if (frameBorder in iframe) {
                    iframe[frameBorder] = 0;
                }
                if (allowTransparency in iframe) {
                    iframe[allowTransparency] = 'true';
                }
                if (!settings.scrolling) {
                    iframe.scrolling = 'no';
                }
                $j(iframe).attr({
                    src: settings.href,
                    name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
                    'class': prefix + 'Iframe',
                    allowFullScreen: true, // allow HTML5 video to go fullscreen
                    webkitAllowFullScreen: true,
                    mozallowfullscreen: true
                }).one('load', complete).appendTo($loaded);
                $events.one(event_purge, function () {
                    iframe.src = '//about:blank';
                });
                if (settings.fastIframe) {
                    $j(iframe).trigger('load');
                }
            } else {
                complete();
            }
            if (settings.transition === 'fade') {
                $box.fadeTo(speed, 1, removeFilter);
            } else {
                removeFilter();
            }
        };
        if (settings.transition === 'fade') {
            $box.fadeTo(speed, 0, function () {
                publicMethod.position(0, callback);
            });
        } else {
            publicMethod.position(speed, callback);
        }
    };
    publicMethod.load = function (launched) {
        var href,
        setResize,
        prep = publicMethod.prep,
        $inline;
        active = true;
        photo = false;
        element = $related[index];
        if (!launched) {
            makeSettings();
        }
        if (className) {
            $box.add($overlay).removeClass(className);
        }
        if (settings.className) {
            $box.add($overlay).addClass(settings.className);
        }
        className = settings.className;
        trigger(event_purge);
        trigger(event_load, settings.onLoad);
        settings.h = settings.height ?
        setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
        settings.innerHeight && setSize(settings.innerHeight, 'y');
        settings.w = settings.width ?
        setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
        settings.innerWidth && setSize(settings.innerWidth, 'x');
        // Sets the minimum dimensions for use in image scaling
        settings.mw = settings.w;
        settings.mh = settings.h;
        // Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
        // If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
        if (settings.maxWidth) {
            settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
            settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
        }
        if (settings.maxHeight) {
            settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
            settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
        }
        href = settings.href;
        loadingTimer = setTimeout(function () {
            $loadingOverlay.appendTo($content);
        }, 100);
        if (settings.inline) {
            // Inserts an empty placeholder where inline content is being pulled from.
            // An event is bound to put inline content back when ColorBox closes or loads new content.
            $inline = $tag(div).hide().insertBefore($j(href) [0]);
            $events.one(event_purge, function () {
                $inline.replaceWith($loaded.children());
            });
            prep($j(href));
        } else if (settings.iframe) {
            // IFrame element won't be added to the DOM until it is ready to be displayed,
            // to avoid problems with DOM-ready JS that might be trying to run in that iframe.
            prep(' ');
        } else if (settings.html) {
            prep(settings.html);
        } else if (isImage(href)) {
            $j(photo = new Image()).addClass(prefix + 'Photo').bind('error', function () {
                settings.title = false;
                prep($tag(div, 'Error').html(settings.imgError));
            }).one('load', function () {
                var percent;
                if (settings.scalePhotos) {
                    setResize = function () {
                        photo.height -= photo.height * percent;
                        photo.width -= photo.width * percent;
                    };
                    if (settings.mw && photo.width > settings.mw) {
                        percent = (photo.width - settings.mw) / photo.width;
                        setResize();
                    }
                    if (settings.mh && photo.height > settings.mh) {
                        percent = (photo.height - settings.mh) / photo.height;
                        setResize();
                    }
                }
                if (settings.h) {
                    photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
                }
                if ($related[1] && (settings.loop || $related[index + 1])) {
                    photo.style.cursor = 'pointer';
                    photo.onclick = function () {
                        publicMethod.next();
                    };
                }
                if (isIE) {
                    photo.style.msInterpolationMode = 'bicubic';
                }
                setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
                    prep(photo);
                }, 1);
            });
            setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
                photo.src = href;
            }, 1);
        } else if (href) {
            $loadingBay.load(href, settings.data, function (data, status) {
                prep(status === 'error' ? $tag(div, 'Error').html(settings.xhrError)  : $j(this).contents());
            });
        }
    };
    // Navigates to the next page/image in a set.
    publicMethod.next = function () {
        if (!active && $related[1] && (settings.loop || $related[index + 1])) {
            index = getIndex(1);
            publicMethod.load();
        }
    };
    publicMethod.prev = function () {
        if (!active && $related[1] && (settings.loop || index)) {
            index = getIndex( - 1);
            publicMethod.load();
        }
    };
    // Note: to use this within an iframe use the following format: parent.$j.fn.colorbox.close();
    publicMethod.close = function () {
        if (open && !closing) {
            closing = true;
            open = false;
            trigger(event_cleanup, settings.onCleanup);
            $window.unbind('.' + prefix + ' .' + event_ie6);
            $overlay.fadeTo(200, 0);
            $box.stop().fadeTo(300, 0, function () {
                $box.add($overlay).css({
                    'opacity': 1,
                    cursor: 'auto'
                }).hide();
                trigger(event_purge);
                $loaded.empty().remove(); // Using empty first may prevent some IE7 issues.
                setTimeout(function () {
                    closing = false;
                    trigger(event_closed, settings.onClosed);
                }, 1);
            });
        }
    };
    // Removes changes ColorBox made to the document, but does not remove the plugin
    // from jQuery.
    publicMethod.remove = function () {
        $j([]).add($box).add($overlay).remove();
        $box = null;
        $j('.' + boxElement).removeData(colorbox).removeClass(boxElement);
        $j(document).unbind('click.' + prefix);
    };
    // A method for fetching the current element ColorBox is referencing.
    // returns a jQuery object.
    publicMethod.element = function () {
        return $j(element);
    };
    publicMethod.settings = defaults;
}($j, document, window));


var colorboxW, colorboxH, videoCbox;
var w;
$j(document).ready(function() {


/*if($j(".banner-iframe-video").length>0)
{
$j(".banner-iframe-video").each(function(){
var vid_src = $j(this).attr("data-src");
if(vid_src!=="" && vid_src !== undefined)
$j(this).load(vid_src);
});
}*/
    /*-- Color box Video starts --*/
    
    w = "60%";
    var currWidth = viewport().width; 
    if (currWidth <= 991) {
        w = '80%';
    } else {
        w = '60%';
    }
    
    
    /*-- Color box Video ends --*/
	//$j("a.watch-video-link").colorbox({iframe:true, innerWidth:640, innerHeight:372});
    //$j("a.watch-link").colorbox({iframe:true, innerWidth:w, innerHeight:450});
   
		var currWidth = viewport().width; 
        if (currWidth <= 360) {
			$j("a.watch-video-link, a.watch-link").colorbox({ iframe:true,  innerWidth:240,  innerHeight:145});
        } else if (currWidth <= 480) {
			$j("a.watch-video-link, a.watch-link").colorbox({ iframe:true,  innerWidth:280,  innerHeight:164});
        } else if (currWidth <= 640) {
          $j("a.watch-video-link, a.watch-link").colorbox({ iframe:true,  innerWidth:480,  innerHeight:279});
        } else if (currWidth <= 767) {
			$j("a.watch-video-link, a.watch-link").colorbox({ iframe:true,  innerWidth:600,  innerHeight:348});
        } else {
          $j("a.watch-video-link, a.watch-link").colorbox({ iframe:true,  innerWidth:640,  innerHeight:372});
        }
        $j("a.watch-video-link").click(function(){
        ga('send', 'event', 'Video Button', 'click');
        });
});



$j(window).resize(function() {

 var currWidth1 = viewport().width; 
    if (currWidth1 <= 991) {
        w = window.innerWidth * 0.9 + 'px';
        
    } else {
       w = window.innerWidth * 0.6 + 'px';
       
    } 
 //$j("a.watch-video-link").colorbox.resize({width: w});
 /*   if ($j('#colorbox').hasClass('colorbox-video')) {
    setTimeout(function(){
     $j.colorbox.resize({
            width: w
        });
    
    },500);

    }*/
    if (currWidth1 <= 360) {
			setTimeout(function(){
				$j.colorbox.resize({ innerWidth:240,  innerHeight:145});
            },1200);
            
        } else if (currWidth1 <= 480) {
			setTimeout(function(){
				$j.colorbox.resize({ innerWidth:280,  innerHeight:164});
            },1000);
            
		} else if (currWidth1 <= 640) {
            setTimeout(function(){
				$j.colorbox.resize({ innerWidth:480,  innerHeight:279});
            },1000);
		}  else if (currWidth1 <= 767) {
			setTimeout(function(){
				$j.colorbox.resize({ innerWidth:600,  innerHeight:348});
            },1000);
        } else{
			setTimeout(function(){
				$j.colorbox.resize({ innerWidth:640,  innerHeight:372});
            },1000);
        } 
});


/*!---- cookie-consent-----*/
var _cookiePlaceHolderSelector = "#headerwrapper"; // placeholder for cookie consent data and accept button
var _cookieWrapper = "_cookieConsentWrapper";
var _cookieName = "_cookieConsent"; // name of the cookie which will be used to store flag if user has clicked on i accept button
var _cookieTimeout = 16; // Time in SECONDS after which the cookie consent will disappear

var _cookieContent = '<div class="cookieWrapper"><p>This site uses cookies. To see how cookies are used, please review our <a href="/site-services/cookies.aspx">cookie notice</a>. If you agree to our use of cookies, please continue to use our site.</p> <input name="cookieagree" id="cookie-agree" onclick="setCookies();" value="Continue" type="button"></div>';


// disclaimer content
document.write('<style type="text/css">');
document.write('#' + _cookieWrapper + '{background-color:#f2f3f3; padding:10px 5px;margin-bottom: 20px;font-size: 1em;line-height: 1.2em;}');
document.write('#' + _cookieWrapper + ' .cookieWrapper{display:block;margin:0 auto;max-width:1080px;}');
document.write('#' + _cookieWrapper + ' p{color:#000000; margin:0 5px; padding-bottom:0;}');
document.write('#' + _cookieWrapper + ' a{color:#9032f5;text-decoration:underline;}');
document.write('#' + _cookieWrapper + ' a:hover{color:#9032f5;text-decoration:none;}');
document.write('#' + _cookieWrapper + ' input{cursor:pointer; padding:2px 5px;border:0px;text-decoration:underline;color:#9032f5;background:none;font-size:1.8rem}');
document.write('#' + _cookieWrapper + ' input:hover{color:#9032f5;text-decoration:none;}');
document.write('</style>');

function setCookies(name, value, hours) {

    name = typeof name !== 'undefined' ? name : _cookieName;
    value = typeof value !== 'undefined' ? value : 'yes';
    hours = typeof hours !== 'undefined' ? hours : 8760;
    var expire = "";
    if (hours != null) {
        expire = new Date((new Date()).getTime() + hours * 86400000);
        expire = "; expires=" + expire.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expire + "; path=/";
    $j("#" + _cookieWrapper).slideUp().promise().done(function() {
  });
  
/*-------------------------Setting of Section Div height Etc on cookie wrapper close Ends-----------------------*/ 
}

function GetCookie(name) {
    var cookieValue = "";
    var search = name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) end = document.cookie.length;
            cookieValue = unescape(document.cookie.substring(offset, end));
        }
    }
    return cookieValue;
}

function checkCookies() {
    var cval = GetCookie(_cookieName);
    if (cval == "yes") {
        $j("#" + _cookieWrapper).css("display", "none");
    } else {
        $j("#" + _cookieWrapper).slideDown(800);
        startTimeout();
    }
}
function startTimeout(){
	setTimeout(function(){
		$j("#" + _cookieWrapper).slideUp(600).promise().done(function() {
  });
    },_cookieTimeout*1000);
}
function cookieSetup() {
    wrapperDiv = '<div id="' + _cookieWrapper + '">' + _cookieContent + '</div>';
    $j(wrapperDiv).insertBefore($j(_cookiePlaceHolderSelector));
    checkCookies();
}
window.onload = cookieSetup;
/*!---- respo-menu-----*/
// Function for Responsive Dynamic Main Navigation
(function($j) {

    $j.fn.respoMenu = function() {

        //$j('#navigation > ul > li').css('height', 'auto');
//        $j('#navigation > ul > li > a, #navigation > ul > li > span').css('padding-top', 18);
  //      $j('#navigation > ul > li > a, #navigation > ul > li > span').css('padding-bottom', 18);
        // here 10 is initial padding for resetting calculation - this value should be same as given in css

        /*----    Variables for Main Navigation Responsive Starts    ----*/

        var navItems = $j('#navigation > ul > li').length;
        var totalWidth = $j('#navigation > ul').width();
        var navWidth = 100 / navItems;
        var emptyWidth = 0;
        var pad = 0;

        /*----    Variables for Main Navigation Responsive Ends    ----*/

        return this.each(function(i) {

            $j('#navigation > ul > li').css('width', navWidth + '%');

            var max = -1;
            $j('#navigation > ul > li').each(function() {
                var h = $j(this).height();
                max = h > max ? h : max;
            });

            //$j('#navigation > ul > li').css('height', max);

          //  var parentHeight = $j(this).height();
            //var childHeight = $j(this).find('>a, >span').height();
  //          $j(this).find('>a, >span').css('padding-top', (parentHeight - childHeight) / 2);
//            $j(this).find('>a, >span').css('padding-bottom', (parentHeight - childHeight) / 2);
        });

    };

})($j);
/*!---- main-----*/
$j(document).ready(function() {


	/**Disclaimer*/
    if($j('#disclaimer-popup').length>0){
		
        $j('#disclaimer-popup').fadeIn("fast",function(){
			
			$j('body').addClass('Fixed');
        });
        
        $j('#disclaimer-popup .agree-button').click(function(){
			
			$j('#disclaimer-popup').fadeOut("fast",function(){
				$j('body').removeClass('Fixed');
            });
			return false;
        });
        $j('#disclaimer-popup .disagree-button').click(function(){
			window.location.href=$j(this).attr('href');
			return false;
        });
    }
    
setEqualHeight_CommonClass(".box-introtext");
setEqualHeight_CommonClass(".upper-box box-content");
setEqualHeight_CommonClass(".bottom-signpost li");

setEqualHeight_CommonClass(".video-item-title");
	setEqualHeight_CommonClass(".perbox-item-content h2");

  /*---------- Equal Height boxes start -----------------*/
    hmTopBox = $j('.hm-top-box').getSameTopGroups({
        commonParent: '.row'
    }, function(gc) {
        for (i = 1; i <= gc; i++) {
//			setEqualHeight_CommonClass(".gg-g-" + i + " .hm-box-content h2");
            //setEqualHeight_CommonClass(".gg-g-" + i + " .hm-box-content .box-introtext");
            //setEqualHeight_CommonClass(".gg-g-" + i + " .hm-box-content .introImage");
            setEqualHeight_CommonClass(".gg-g-" + i + " .hm-box-content");
//            setEqualHeight_CommonClass(".gg-g-" + i + " .box-links a");
//            setEqualHeight_CommonClass(".gg-g-" + i + " .box-links");
            setEqualHeight_CommonClass(".gg-g-" + i + ".hm-top-box");
        }
    });
    
    hmBottomBox = $j('.box').getSameTopGroups({
        commonParent: '.row'
    }, function(gc) {
        for (i = 1; i <= gc; i++) {
			//setEqualHeight_CommonClass(".gg-g-" + i + " .upper-box h2");
            //setEqualHeight_CommonClass(".gg-g-" + i + " .upper-box .box-content");
            //setEqualHeight_CommonClass(".gg-g-" + i + " .upper-box");
            //setEqualHeight_CommonClass(".gg-g-" + i + " .box-links a");
//            setEqualHeight_CommonClass(".gg-g-" + i + " .box-links");
            setEqualHeight_CommonClass(".gg-g-" + i + ".box");
        }

    });
	
	
	
	PreBox = $j('.prebox-introtext').getSameTopGroups({
        commonParent: '.row'
    }, function(gc) {
        for (i = 1; i <= gc; i++) {
			//setEqualHeight_CommonClass(".gg-g-" + i + " .upper-box h2");
            //setEqualHeight_CommonClass(".gg-g-" + i + " .upper-box .box-content");
            //setEqualHeight_CommonClass(".gg-g-" + i + " .upper-box");
            //setEqualHeight_CommonClass(".gg-g-" + i + " .box-links a");
//            setEqualHeight_CommonClass(".gg-g-" + i + " .box-links");
            setEqualHeight_CommonClass(".gg-g-" + i + ".prebox-introtext");
        }

    });
    
    

     /*---------- Equal Height boxes end -----------------*/

    $j(".main-menu .level2.haschildren").hover(function() {
        //$j(".main-menu .level2.haschildren ul").show();
    });

    $j(".banner-slider .slick-dots").appendTo(".slides-wrapper");

    // For surface hover effect on clicking
    $j('#section-Homepage-level1 > li.level1.haschildren').attr('aria-haspopup', 'true');
    $j('#section-Homepage-level1 ul li').attr('aria-haspopup', 'false');

    /*----------Login page js starts---------*/
    $j('#PreviewWrapperInner').addClass('show');
    $j('#LogintxtUserName').attr('placeholder', 'Username');
    $j('#LogintxtPassword').attr('placeholder', 'Password');
    /*----------Login page js ends---------*/

$j(document).ready(function(){
			//$j(".watch-link").colorbox({iframe:true, width:"95%", height:"100%", maxWidth:"720px", maxHeight:"435px"});
			});
    /* Capital Extension jquery */
    $j('a.media-links').each(function() {
        value = $j(this).attr("title");
        valueOne = value.split(",");
        extension = valueOne[0].toUpperCase();
        $j(this).attr("title", extension + "," + valueOne[1] + "," + valueOne[2]);
    });

		$j(".con-site a").click(function() {
			$j(".con-site-list").slideToggle();
			$j(".con-site").toggleClass("open");
			});
    /* Capital Extension jquery ends */
    if ($j('.newstab ul li').length > 1) {
        $j(".selectedTab").click(function() {
            if (!($j(".newstab").is(":animated"))) {
                $j(".newstab").slideToggle();
                $j(this).toggleClass("open");
            }
        });
    } else {
        $j('div.drop-down').addClass('single-item');

    }
	
	 if ($j('.newstab2 ul li').length > 1) {
        $j(".selectedTab2").click(function() {
            if (!($j(".newstab2").is(":animated"))) {
                $j(".newstab2").slideToggle();
                $j(this).toggleClass("open");
            }
        });
    } else {
        //$j('div.drop-down.secondlevel').addClass('single-item');

    }
	

    var bodyID = $j('body').attr('class');
    if (bodyID.indexOf("ip3-financial-reports-and-presentations") >= 0) {
        $j('#nav-financial-reports-and-presentations-level2 > a').css('background-color', '#CADCE5');
    }

    $j('#leftnavigation .level2.selected').each(function() {
        if ($j(this).hasClass('haschildren')) {
            //$j(this).css('background-color','#CADCE5');
            var j = $j(this).find('ul').html();
            $j('.threecolcenter .content-tab').prepend("<ul class='new'>" + j + "</ul>");
            var h = $j('.content-tab').clone();
            $j('.content-tab').remove();
            $j('.threecolcenter').prepend(h);
        }
    });

    $j('.mobi-level4 p').click(function() {
        $j(this).next().slideToggle();
        var l = $j('.mobi-level4 ul li.current').text();
        $j('.mobi-level4 p').text(l);
    });

    /*----    Tele link click fn starts   ----*/

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.Opera() || isMobile.Windows() || isMobile.iOS());
        }
    };

    if (!isMobile.any()) {
        $j('a[href^=tel]').click(function(e) {
            e.preventDefault();
        });
    }
     else{
        $j('a[href^=tel]').addClass("mobile-tel-link");
    } 

    /*----    Tele link click fn ends   ----*/




    /*----    Disclaimer checkbox js fn    ----*/

    $j(".undrstnd-checkbox").change(function() {
        if (this.checked) {
            $j("#disclaimerAcceptButton").show();
        } else {
            $j("#disclaimerAcceptButton").hide();
        }
    });

    /* ------------------ Search - Following function is used for <enter> issue in IE ------------ */
    $j(".search input").keypress(function(e) {
        if (e.keyCode == 13) {
            document.getElementById("searchButton").click();
            return false;
        }
    });
    /* ------------------ <END> Following function is used for <enter> issue in IE ------------ */


    /* ------------------ File extension to UPPERCASE in title attribute ------------------ */

    $j(".your_classname a[title]").each(function() {
        var tmpTxt = $j(this).attr("title").split(",");
        if (tmpTxt.length > 1) {
            tmpTxt[0] = tmpTxt[0].toUpperCase();
        }
        $j(this).attr("title", tmpTxt.join());
    });

    /* ------------------ <END> File extension to UPPERCASE in title attribute ------------ */


    $j('.mobisearch span').click(function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {
            $j('#mobishowsearch').slideUp();
            $j(this).removeClass('selected');
            $j(".menuArrow2").hide(200);
        } else {
            if ($j('.mobinav span').hasClass('selected')) {
                $j('.mobinav span').trigger('click');
            }
            $j('#mobishowsearch').slideDown();
            $j(this).addClass('selected');
            //calSearchPos($j(this).parent());
            $j(".menuArrow2").show(200);
        }

    });

    $j('.mobinav span').click(function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {
            $j('#mobishownav').slideUp();
            $j(this).removeClass('selected');
            $j(".menuArrow").hide(200);
        } else {
            if ($j('.mobisearch span').hasClass('selected')) {
                $j('.mobisearch span').trigger('click');
            }
            $j('#mobishownav').slideDown();
            $j(this).addClass('selected');
            //calMenuPos($j(this).parent());
            $j(".menuArrow").show(200);
        }

    });

    $j('#mobishownav ul#mobi-section-Homepage-level1 li.level1.haschildren').each(function() {
        $j(this).append('<a href="#" class="showmore fa fa-angle-double-down"></a>');
    });

    $j('#mobishownav ul#mobi-section-Homepage-level1 li.level2.haschildren').each(function() {
        $j(this).css('position', 'relative');
        $j(this).append('<a href="#" class="showmore1 fa fa-angle-double-down"></a>');
    });


    $j('#mobishownav ul li.level1').each(function() {
        if ($j(this).hasClass('selected') || $j(this).hasClass('current')) {
            $j(this).children('ul').show();
            $j(this).children('.showmore').addClass('selected');
        }
    });

    $j('#mobishownav ul li.level2').each(function() {
        if (($j(this).hasClass('selected') || $j(this).hasClass('current')) && $j(this).children('a.showmore1').css('display') != 'none') {
            $j(this).children('ul').show();
            $j(this).children('.showmore1').addClass('selected');
        }
    });

    $j('#mobishownav ul li.level3').each(function() {
        if (($j(this).hasClass('selected') || $j(this).hasClass('current')) && $j(this).children('a.showmore1').css('display') != 'none') {
            $j(this).children('ul').show();
            $j(this).children('.showmore1').addClass('selected');
        }
    });


    $j(document).on('click', '.showmore', function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {
            $j(this).parent().children('ul').slideUp();
            $j(this).removeClass('selected');
            $j(this).parent().removeClass('navopen');
        } else {
            $j(".showmore").parent().find('ul').slideUp();
            $j(this).parent().find('ul:eq(0)').slideDown();
            $j(".showmore, .showmore1").removeClass('selected');
            $j(this).addClass('selected');
            $j(".showmore, .showmore1").parent().removeClass('navopen');
            $j(this).parent().addClass('navopen');
        }
    });

    $j(document).on('click', '.showmore1', function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {
            $j(this).parent().find('ul').slideUp();
            $j(this).removeClass('selected');
            $j(this).parent().removeClass('navopen');
        } else {
            $j(".showmore1").parent().find('ul').slideUp();
            $j(this).parent().find('ul').slideDown();
            $j(".showmore1").removeClass('selected');
            $j(this).addClass('selected');
            $j(".showmore1").parent().removeClass('navopen');
            $j(this).parent().addClass('navopen');
        }

    });

    // For surface 2nd level nav open Starts
    if (is_touch_device()) {
        if (window.navigator.msPointerEnabled) {
            $j('#navigation li.level1').bind('click', function(e) {
                eventCallback1(e, this);
            });
        } else {
            $j('#navigation li.level1').bind('touchstart', function(e) {
                eventCallback1(e, this);
            });
        }
    } else {
        $j('#navigation li.level1').hover(function() {
            if ($j(this).hasClass('current')) {
                $j(this).children('span').addClass('navhover');
            } else {
                $j(this).children('a').addClass('navhover');
            }
            if ($j(this).hasClass('haschildren')) {
                $j(this).children('ul').show();
            }
        }, function() {
            $j(".main-menu .level2.haschildren ul").hide();
            if ($j(this).hasClass('current')) {
                $j(this).children('span').removeClass('navhover');
            } else {
                $j(this).children('a').removeClass('navhover');
            }
            if ($j(this).hasClass('haschildren')) {
                $j(this).children('ul').hide();
            }



        });
    }
    // For surface 2nd level nav open Ends

    function eventCallback1(e, element) {
        e.stopPropagation();
        $j(element).children().addClass('navhover');
        if ($j(element).hasClass('haschildren')) {
            if ($j(element).hasClass('menuOpen')) {
                $j(element).removeClass('menuOpen');
                $j(element).css('background-color', '');
                $j(element).children('a,span').css('color', '');
            } else {
                $j(element).children('ul').show();
                e.preventDefault();
                $j(element).addClass('menuOpen');
                //$j(element).css('background-color','#b6bf00');
                // $j(element).children('a,span').css('color','#fbd127');
            }
        }
        $j(element).siblings('li').children('ul').hide();
        $j(element).siblings('li').removeClass('menuOpen');
        $j(element).siblings('li').children().removeClass('navhover');
        $j(element).siblings('li').css('background-color', '');
        $j(element).siblings('li').children('a,span').css('color', '');
    }

    $j(document).bind('click touchstart', function() {
        $j('#section-Homepage-level1 .level1').children('ul').hide();
        $j('#section-Homepage-level1 .level1').removeClass('menuOpen');
        $j('#section-Homepage-level1 .level1').css('background-color', '');
        $j('#section-Homepage-level1 .level1').children('a,span').css('color', '');
    });

    /*-------Wrap tables except inv-responsive tables with horizontal scrollable wrapper Starts--*/
    $j('.maincontent table:not(".inv-responsive, .rad-responsive, .searchresultpage  table")').each(function() {
        if ($j(this).parents('div.scroll-table-container').length < 1) {
            $j(this).wrap('<div class="scroll-table-container"></div>');
        }
    });
    /*-------Wrap tables except inv-responsive tables with horizontal scrollable wrapper Ends--*/


    /*--- error page redirection and counter starts --------*/
    if ($j('body').attr('id') == 'error-page' && !$j('body').hasClass('ip3-edit')) {
        var counter_value = parseInt($j('.counter').html());
        var cnt = setInterval(function() {
            counter_value--;
            if (counter_value < 10) {
                $j('.counter').html('0' + counter_value);
            } else {
                $j('.counter').html(counter_value);
            }
            if (counter_value <= 0) {
                window.location.href = window.location.protocol + '//' + window.location.hostname;
                clearInterval(cnt);
            }
        }, 1000);

    }
    /*--- error page redirection and counter ends --------*/

setTimeout(function(){ 
	$j( ".signpost-link ul li.sp-link-title a" ).each(function() {
  $j(this).live("click", function () {
	var rlt = $j(this).text();
	//alert(rlt);
	  ga('send', 'event', 'Related Links', 'Related Link - '+ rlt, 'Clicked from ' + window.location.href );
});	
});}, 3000);

	


}); //ends document ready


function is_touch_device() {
    return (('ontouchstart' in window) ||
        (navigator.MaxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

function getEqualHeight_great(obj1, obj2, greater) {
    $j(obj1).height('auto');
    $j(obj2).height('auto');
    if ($j(window).width() >= greater) {
        get_height1 = $j(obj1).height();
        get_height2 = $j(obj2).height();
        if (get_height1 > get_height2) {
            $j(obj1).height(get_height1);
            $j(obj2).height(get_height1);
        } else {
            $j(obj1).height(get_height2);
            $j(obj2).height(get_height2);
        }
    }
}

// imagesLoaded Fn Starts

/*!
 * jQuery imagesLoaded plugin v2.1.0
 * http://github.com/desandro/imagesloade
 */

/*jshint curly: true, eqeqeq: true, noempty: true, strict: true, undef: true, browser: true */
/*global jQuery: false */

(function(c, n) {
    var l = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    c.fn.imagesLoaded = function(f) {
        function m() {
            var b = c(i),
                a = c(h);
            d && (h.length ? d.reject(e, b, a) : d.resolve(e));
            c.isFunction(f) && f.call(g, e, b, a)
        }

        function j(b, a) {
            b.src === l || -1 !== c.inArray(b, k) || (k.push(b), a ? h.push(b) : i.push(b), c.data(b, "imagesLoaded", {
                isBroken: a,
                src: b.src
            }), o && d.notifyWith(c(b), [a, e, c(i), c(h)]), e.length === k.length && (setTimeout(m), e.unbind(".imagesLoaded")))
        }
        var g = this,
            d = c.isFunction(c.Deferred) ? c.Deferred() :
            0,
            o = c.isFunction(d.notify),
            e = g.find("img").add(g.filter("img")),
            k = [],
            i = [],
            h = [];
        c.isPlainObject(f) && c.each(f, function(b, a) {
            if ("callback" === b) f = a;
            else if (d) d[b](a)
        });
        e.length ? e.bind("load.imagesLoaded error.imagesLoaded", function(b) {
            j(b.target, "error" === b.type)
        }).each(function(b, a) {
            var d = a.src,
                e = c.data(a, "imagesLoaded");
            if (e && e.src === d) j(a, e.isBroken);
            else if (a.complete && a.naturalWidth !== n) j(a, 0 === a.naturalWidth || 0 === a.naturalHeight);
            else if (a.readyState || a.complete) a.src = l, a.src = d
        }) : m();
        return d ? d.promise(g) :
            g
    }
})($j);

// imagesLoaded Fn Ends

/*------------- Set equal height function Starts -------------- */

function setEqualHeight_CommonClass(arr) {
    var x = new Array([]);
    $j(arr).each(function(i) {
        $j(this).height('auto');
        x[i] = $j(this).outerHeight();
    });
    Max_Value = Array.max(x);
    $j(arr).each(function(i) {
        //if($j(arr[i]).height() != Max_Value)
        //	{x[i] = $j(arr[i]).height(Max_Value);}
        $j(this).outerHeight(Max_Value);
    });
}

function setEqualHeight(arr) {
    var x = new Array([]);
    for (i = 0; i < arr.length; i++) {
        x[i] = $j(arr[i]).height('auto');
        x[i] = $j(arr[i]).outerHeight();
    }
    Max_Value = Array.max(x);
    for (i = 0; i < arr.length; i++) {
        //if($j(arr[i]).height() != Max_Value)
        // {x[i] = $j(arr[i]).height(Max_Value);}
        x[i] = $j(arr[i]).outerHeight(Max_Value);
    }
}

Array.min = function(array) {
    return Math.min.apply(Math, array);
};

Array.max = function(array) {
    return Math.max.apply(Math, array);
};
/*------------- Set equal height function Ends -------------- */

;
(function($j) {
    var defaults = {
        waitforimages: true,
        waitforfonts: false,
        areSiblings: true,
        commonParent: ''
    }; // default settings
    $j.fn.getSameTopGroups = function(options, callback) {
        //var settings = {};
        if ($j(this).length < 1) {
            return false;
        }
        var settings = $j.extend(true, {}, defaults, options);
        var $jelement = $j(this);
        //$jelement['settings'] = $j.extend(true, {}, defaults, options)
        var winEvents = false;
        var totElements = 0;
        var reload = function(isInit, $jelementObj, groupCounter) {
            var parentWidth;
            if ($j(settings.commonParent).length > 0) {
                if (settings.commonParent === '') {
                    parentWidth = getStyle($jelement.first().parent()[0], 'width');
                } else {
                    parentWidth = getStyle($jelement.first().closest(settings.commonParent)[0], 'width');
                }
            } else {
                return false;
            }
            if (isInit) {
                totElements = $jelement.length;
                $jelement.removeClass('gg-taken');
                $jelement.removeClass(function(index, css) {
                    return (css.match(/\bgg-g-\S+/g) || []).join(' ');
                });
                $jelementObj = $jelement.first();
                var groupCounter = 1;
                var childWidth = getOuterWidthWithMargin($jelementObj, true);
                $jelementObj.addClass('gg-taken gg-g-' + groupCounter);
                --totElements;
                if (totElements === 0) {
                    callback(groupCounter);
                }
            } else {
                --totElements;
                childWidth = getOuterWidthWithMargin($jelementObj, true);
                $jelementObj.addClass('gg-taken gg-g-' + groupCounter);
                if (totElements === 0) {
                    callback(groupCounter);
                }
            }
            $jelement.not('.gg-taken').each(function(index) {
                childWidth = childWidth + getOuterWidthWithMargin($j(this), true);
                if (Math.floor(childWidth) > Math.floor(parentWidth)) {
                    childWidth = childWidth - getOuterWidthWithMargin($j(this), true);
                    ++groupCounter;
                    reload(false, $j(this), groupCounter);
                    return false;
                } else {
                    $j(this).addClass('gg-taken gg-g-' + groupCounter);
                    --totElements;
                }
                if (totElements === 0) {
                    callback(groupCounter);
                }
            });
        };
        var timeOut;
        var resFun = function() {
            clearTimeout(timeOut);
            timeOut = setTimeout(function() {
                reload(true);
            }, 300);
        };
        $jelement.reGroup = function() {
            $jelement = $j($jelement['selector']);
            reload(true);
        };
        $j(window).bind('load', function() {
            reload(true);
        });
        $j(document).bind('ajaxComplete', function() {
            $jelement = $j($jelement['selector']);
            $j('.hometwitter').height('auto');
            reload(true);
        });
        $j(window).bind('resize', resFun);
        return $jelement;
    };
    var getStyle = function(el, prop) {
        if (getComputedStyle !== 'undefined') {
            return parseFloat(getComputedStyle(el, null).getPropertyValue(prop));
        } else {
            return parseFloat(el.currentStyle[prop]);
        }
    };
    var getOuterWidthWithMargin = function(el, isBorderBox) {
        if (!isBorderBox)
            return getStyle(el[0], 'margin-left') + getStyle(el[0], 'margin-right') + getStyle(el[0], 'padding-left') + getStyle(el[0], 'padding-right') + getStyle(el[0], 'width');
        else
            return getStyle(el[0], 'margin-left') + getStyle(el[0], 'margin-right') + getStyle(el[0], 'width');
    };
})($j);


/*!---- responsive-table-----*/
    ;
    (function($j, window, document, undefined) {
        $j.InvResponsiveTable = function(element, options) {
            // Extend default settings
            this.options = {};
            element.data('InvResponsiveTable', this);
            var that = this;
            this.init = function(element, options) {
                this.options = $j.extend({}, $j.fn.InvResponsiveTable.defaultOptions, options);
                options = this.options;
                var $table = element;
                if (!$table.hasClass(options.prefix + "-responsive-table-processed")) {
                    var tableID = $table.attr("id");
                    newID = "";
                    if (tableID != "" && tableID !== undefined) {
                        newID = "id=" + options.prefix + "-" + tableID;
                    }
                    var tHeadData = new Array();
                    $table.wrap('<div class="' + options.prefix + '-responsive-table"></div>');
                    $table.parent().append('<div class="' + options.prefix + '-responsive-table-wrapper"></div>');
                    $resWrapper = $table.parent().find('.' + options.prefix + '-responsive-table-wrapper');
                    $table.css("display", "none");
                    $table.find(options.headerRowData).each(function(index) {
                        tHeadData[index] = $j(this).html();
                    });
                    var tbl = '';
                    //alert($table.find("tbody tr").length);
                    if (options.showTableHeader) {
                        $resWrapper.append("<" + options.tableHeaderHTMLTag + ">" + tHeadData[0] + "</" + options.tableHeaderHTMLTag + ">");
                    }
                    $table.find("tbody tr").each(function(index) {
                        id = 'id="' + options.prefix + '-responsive-table-' + index + '" ';
                        tbl = "";
                        tbl = '<table ' + id + ' class="' + options.prefix + '-responsive-table inv-responsive-table" border="0" cellspacing="0" cellpadding="0">';
                        tbl += '<tbody>';
                        if ($j(this).hasClass(options.ingoreHeaderClass)) {
                            SI = -1
                        } else {
                            SI = options.skipIndex;
                            tbl += '<tr class="' + options.prefix + '-responsive-header-tr inv-responsive-header-tr"><td class="' + options.prefix + '-responsive-header-td inv-responsive-header-td" colspan="2" >' + $j(this).find("th:eq(0)").html() + '</td></tr>';
                        }
                        tmpCnt = 1;
                        tmpLength = ($j(this).children().length - options.skipIndex);
                        $j(this).children().each(function(index) {
                            //alert(options.skipIndex);
                            if (index > SI) {
                                cls = new Array();
                                clscnt = 0;
                                if (tmpCnt == 1) {
                                    cls[clscnt] = options.prefix + '-responsive-data-tr-first inv-responsive-data-tr-first';
                                    clscnt++
                                }
                                if (tmpCnt == (tmpLength - 1)) {
                                    cls[clscnt] = options.prefix + '-responsive-data-tr-last inv-responsive-data-tr-last';
                                    clscnt++
                                }
                                if (tmpCnt % 2 == 0) {
                                    cls[clscnt] = options.prefix + '-responsive-data-tr-even inv-responsive-data-tr-even';
                                    clscnt++
                                } else {
                                    cls[clscnt] = options.prefix + '-responsive-data-tr-odd';
                                    clscnt++
                                }
                                clsName = cls.join(" ");
                                //alert(clsName);
                                tbl += '<tr class="' + options.prefix + '-responsive-data-tr ' + clsName + '"><td class="' + options.prefix + '-responsive-data-td ' + options.prefix + '-responsive-data-header inv-responsive-data-header">' + tHeadData[index] + '</td><td class="' + options.prefix + '-responsive-data-td ' + options.prefix + '-responsive-data-content inv-responsive-data-content">' + $j(this).html() + '</td></tr>';
                                tmpCnt++;
                            }
                        });
                        tbl += '</tbody>';
                        tbl += '</table>';
                        tbl += '';
                        // alert(tbl);
                        $resWrapper.append(tbl);
                    });
                    $resWrapper.find(".inv-responsive-data-header br").remove();
                    $table.addClass(options.prefix + "-responsive-table-processed");
                    runPlugin($table);
                    $j(window).resize(function() {
                        runPlugin($table);
                    });
                }
            };

            function runPlugin($table) {
                options = that.options;
                if ($j(window).width() <= options.switchWidth) {
                    $j('.' + options.prefix + '-responsive-table-wrapper').css("display", "block");
                    $table.css("display", "none");
                } else {
                    $j('.' + options.prefix + '-responsive-table-wrapper').css("display", "none");
                    $table.css("display", "table");
                }
            }
            this.init(element, options);
        }
        $j.fn.InvResponsiveTable = function(options) {
            return this.each(function() {
                (new $j.InvResponsiveTable($j(this), options));
            });
        };
        // set default option values
        $j.fn.InvResponsiveTable.defaultOptions = {
            prefix: 'inv',
            headerRowData: 'thead tr:eq(0) th',
            switchWidth: 586,
            ingoreHeaderClass: 'ignore-header',
            showTableHeader: false,
            tableHeaderHTMLTag: 'h3',
            skipIndex: 0
        }
    })($j, window, document);

    $j(document).ready(function() {

        $j('.rad-responsive').each(function(count) {
            $j(this).find("tr").addClass("ignore-header");
            $j(this).InvResponsiveTable({
                prefix: 'inv',
                showTableHeader: false
            });
        });
        $j(".inv-responsive-data-td:empty").parent().hide();
    });
/*!---- slick-slider-----*/
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory($j);
  }
  
}(function($j) {
  'use strict';
  var Slick = window.Slick || {};
  
  Slick = (function() {
    
    var instanceUid = 0;
    
    function Slick(element, settings) {
      
      var _ = this, dataSettings;
      
      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $j(element),
        appendDots: $j(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function(slider, i) {
          return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
        },
        dots: true,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: false,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      
      $j.extend(_, _.initials);
      
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.hidden = 'hidden';
      _.paused = false;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $j(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      
      dataSettings = $j(element).data('slick') || {};
      
      _.options = $j.extend({}, _.defaults, dataSettings, settings);
      
      _.currentSlide = _.options.initialSlide;
      
      _.originalSettings = _.options;
      
      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }
      
      _.autoPlay = $j.proxy(_.autoPlay, _);
      _.autoPlayClear = $j.proxy(_.autoPlayClear, _);
      _.changeSlide = $j.proxy(_.changeSlide, _);
      _.clickHandler = $j.proxy(_.clickHandler, _);
      _.selectHandler = $j.proxy(_.selectHandler, _);
      _.setPosition = $j.proxy(_.setPosition, _);
      _.swipeHandler = $j.proxy(_.swipeHandler, _);
      _.dragHandler = $j.proxy(_.dragHandler, _);
      _.keyHandler = $j.proxy(_.keyHandler, _);
      _.autoPlayIterator = $j.proxy(_.autoPlayIterator, _);
      
      _.instanceUid = instanceUid++;
      
      // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      
      
      _.registerBreakpoints();
      _.init(true);
      _.checkResponsive(true);
      
    }
    
    return Slick;
    
  }());
  
  Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
    
    var _ = this;
    
    if (typeof(index) === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || (index >= _.slideCount)) {
      return false;
    }
    
    _.unload();
    
    if (typeof(index) === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $j(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $j(markup).insertBefore(_.$slides.eq(index));
      } else {
        $j(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $j(markup).prependTo(_.$slideTrack);
      } else {
        $j(markup).appendTo(_.$slideTrack);
      }
    }
    
    _.$slides = _.$slideTrack.children(this.options.slide);
    
    _.$slideTrack.children(this.options.slide).detach();
    
    _.$slideTrack.append(_.$slides);
    
    _.$slides.each(function(index, element) {
      $j(element).attr('data-slick-index', index);
    });
    
    _.$slidesCache = _.$slides;
    
    _.reinit();
    
  };
  
  Slick.prototype.animateHeight = function() {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };
  
  Slick.prototype.animateSlide = function(targetLeft, callback) {
    
    var animProps = {},
        _ = this;
    
    _.animateHeight();
    
    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
      
    } else {
      
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -(_.currentLeft);
        }
        $j({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function(now) {
            now = Math.ceil(now);
            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' +
                now + 'px, 0px)';
              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' +
                now + 'px)';
              _.$slideTrack.css(animProps);
            }
          },
          complete: function() {
            if (callback) {
              callback.call();
            }
          }
        });
        
      } else {
        
        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);
        
        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }
        _.$slideTrack.css(animProps);
        
        if (callback) {
          setTimeout(function() {
            
            _.disableTransition();
            
            callback.call();
          }, _.options.speed);
        }
        
      }
      
    }
    
  };
  
  Slick.prototype.asNavFor = function(index) {
    
    var _ = this,
        asNavFor = _.options.asNavFor;
    
    if ( asNavFor && asNavFor !== null ) {
      asNavFor = $j(asNavFor).not(_.$slider);
    }
    
    if ( asNavFor !== null && typeof asNavFor === 'object' ) {
      asNavFor.each(function() {
        var target = $j(this).slick('getSlick');
        if(!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
    
  };
  
  Slick.prototype.applyTransition = function(slide) {
    
    var _ = this,
        transition = {};
    
    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }
    
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
    
  };
  
  Slick.prototype.autoPlay = function() {
    
    var _ = this;
    
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
    
    if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator,
                                    _.options.autoplaySpeed);
    }
    
  };
  
  Slick.prototype.autoPlayClear = function() {
    
    var _ = this;
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
    
  };
  
  Slick.prototype.autoPlayIterator = function() {
    
    var _ = this;
    
    if (_.options.infinite === false) {
      
      if (_.direction === 1) {
        
        if ((_.currentSlide + 1) === _.slideCount -
            1) {
          _.direction = 0;
        }
        
        _.slideHandler(_.currentSlide + _.options.slidesToScroll);
        
      } else {
        
        if ((_.currentSlide - 1 === 0)) {
          
          _.direction = 1;
          
        }
        
        _.slideHandler(_.currentSlide - _.options.slidesToScroll);
        
      }
      
    } else {
      
      _.slideHandler(_.currentSlide + _.options.slidesToScroll);
      
    }
    
  };
  
  Slick.prototype.buildArrows = function() {
    
    var _ = this;
    
    if (_.options.arrows === true ) {
      
      _.$prevArrow = $j(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $j(_.options.nextArrow).addClass('slick-arrow');
      
      if( _.slideCount > _.options.slidesToShow ) {
        
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }
        
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }
        
        if (_.options.infinite !== true) {
          _.$prevArrow
          .addClass('slick-disabled')
          .attr('aria-disabled', 'true');
        }
        
      } else {
        
        _.$prevArrow.add( _.$nextArrow )
        
        .addClass('slick-hidden')
        .attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
        
      }
      
    }
    
  };
  
  Slick.prototype.buildDots = function() {
    
    var _ = this,
        i, dotString;
    
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      
      dotString = '<ul class="' + _.options.dotsClass + '">';
      
      for (i = 0; i <= _.getDotCount(); i += 1) {
        dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
      }
      
      dotString += '</ul>';
      
      _.$dots = $j(dotString).appendTo(
        _.options.appendDots);
      
      _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
      
    }
    
  };
  
  Slick.prototype.buildOut = function() {
    
    var _ = this;
    
    _.$slides =
      _.$slider
    .children( _.options.slide + ':not(.slick-cloned)')
    .addClass('slick-slide');
    
    _.slideCount = _.$slides.length;
    
    _.$slides.each(function(index, element) {
      $j(element)
      .attr('data-slick-index', index)
      .data('originalStyling', $j(element).attr('style') || '');
    });
    
    _.$slider.addClass('slick-slider');
    
    _.$slideTrack = (_.slideCount === 0) ?
      $j('<div class="slick-track"/>').appendTo(_.$slider) :
    _.$slides.wrapAll('<div class="slick-track"/>').parent();
    
    _.$list = _.$slideTrack.wrap(
      '<div aria-live="polite" class="slick-list"/>').parent();
    _.$slideTrack.css('opacity', 0);
    
    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }
    
    $j('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
    
    _.setupInfinite();
    
    _.buildArrows();
    
    _.buildDots();
    
    _.updateDots();
    
    
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    
    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
    
  };
  
  Slick.prototype.buildRows = function() {
    
    var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;
    
    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();
    
    if(_.options.rows > 1) {
      
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(
        originalSlides.length / slidesPerSection
      );
      
      for(a = 0; a < numOfSlides; a++){
        var slide = document.createElement('div');
        for(b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');
          for(c = 0; c < _.options.slidesPerRow; c++) {
            var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      
      _.$slider.html(newSlides);
      _.$slider.children().children().children()
      .css({
        'width':(100 / _.options.slidesPerRow) + '%',
        'display': 'inline-block'
      });
      
    }
    
  };
  
  Slick.prototype.checkResponsive = function(initial, forceUpdate) {
    
    var _ = this,
        breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
    var sliderWidth = _.$slider.width();
    var windowWidth = window.innerWidth || $j(window).width();
    
    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }
    
    if ( _.options.responsive &&
        _.options.responsive.length &&
        _.options.responsive !== null) {
      
      targetBreakpoint = null;
      
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }
      
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint =
              targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $j.extend({}, _.originalSettings,
                                    _.breakpointSettings[
                                      targetBreakpoint]);
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $j.extend({}, _.originalSettings,
                                  _.breakpointSettings[
                                    targetBreakpoint]);
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;
          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }
          _.refresh(initial);
          triggerBreakpoint = targetBreakpoint;
        }
      }
      
      // only trigger breakpoints during an actual break. not on initialize.
      if( !initial && triggerBreakpoint !== false ) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
    
  };
  
  Slick.prototype.changeSlide = function(event, dontAnimate) {
    
    var _ = this,
        $target = $j(event.target),
        indexOffset, slideOffset, unevenOffset;
    
    // If target is a link, prevent default action.
    if($target.is('a')) {
      event.preventDefault();
    }
    
    // If target is not the <li> element (ie: a child), find the <li>.
    if(!$target.is('li')) {
      $target = $target.closest('li');
    }
    
    unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
    
    switch (event.data.message) {
        
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }
        break;
        
      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }
        break;
        
      case 'index':
        var index = event.data.index === 0 ? 0 :
        event.data.index || $target.index() * _.options.slidesToScroll;
        
        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger('focus');
        break;
        
      default:
        return;
    }
    
  };
  
  Slick.prototype.checkNavigable = function(index) {
    
    var _ = this,
        navigables, prevNavigable;
    
    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    
    return index;
  };
  
  Slick.prototype.cleanUpEvents = function() {
    
    var _ = this;
    
    if (_.options.dots && _.$dots !== null) {
      
      $j('li', _.$dots).off('click.slick', _.changeSlide);
      
      if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {
        
        $j('li', _.$dots)
        .off('mouseenter.slick', $j.proxy(_.setPaused, _, true))
        .off('mouseleave.slick', $j.proxy(_.setPaused, _, false));
        
      }
      
    }
    
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
    }
    
    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
    
    _.$list.off('click.slick', _.clickHandler);
    
    $j(document).off(_.visibilityChange, _.visibility);
    
    _.$list.off('mouseenter.slick', $j.proxy(_.setPaused, _, true));
    _.$list.off('mouseleave.slick', $j.proxy(_.setPaused, _, false));
    
    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }
    
    if (_.options.focusOnSelect === true) {
      $j(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }
    
    $j(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    
    $j(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    
    $j('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    
    $j(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    $j(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
  };
  
  Slick.prototype.cleanUpRows = function() {
    
    var _ = this, originalSlides;
    
    if(_.options.rows > 1) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');
      _.$slider.html(originalSlides);
    }
    
  };
  
  Slick.prototype.clickHandler = function(event) {
    
    var _ = this;
    
    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
    
  };
  
  Slick.prototype.destroy = function(refresh) {
    
    var _ = this;
    
    _.autoPlayClear();
    
    _.touchObject = {};
    
    _.cleanUpEvents();
    
    $j('.slick-cloned', _.$slider).detach();
    
    if (_.$dots) {
      _.$dots.remove();
    }
    
    
    if ( _.$prevArrow && _.$prevArrow.length ) {
      
      _.$prevArrow
      .removeClass('slick-disabled slick-arrow slick-hidden')
      .removeAttr('aria-hidden aria-disabled tabindex')
      .css("display","");
      
      if ( _.htmlExpr.test( _.options.prevArrow )) {
        _.$prevArrow.remove();
      }
    }
    
    if ( _.$nextArrow && _.$nextArrow.length ) {
      
      _.$nextArrow
      .removeClass('slick-disabled slick-arrow slick-hidden')
      .removeAttr('aria-hidden aria-disabled tabindex')
      .css("display","");
      
      if ( _.htmlExpr.test( _.options.nextArrow )) {
        _.$nextArrow.remove();
      }
      
    }
    
    
    if (_.$slides) {
      
      _.$slides
      .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
      .removeAttr('aria-hidden')
      .removeAttr('data-slick-index')
      .each(function(){
        $j(this).attr('style', $j(this).data('originalStyling'));
      });
      
      _.$slideTrack.children(this.options.slide).detach();
      
      _.$slideTrack.detach();
      
      _.$list.detach();
      
      _.$slider.append(_.$slides);
    }
    
    _.cleanUpRows();
    
    _.$slider.removeClass('slick-slider');
    _.$slider.removeClass('slick-initialized');
    
    _.unslicked = true;
    
    if(!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
    
  };
  
  Slick.prototype.disableTransition = function(slide) {
    
    var _ = this,
        transition = {};
    
    transition[_.transitionType] = '';
    
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
    
  };
  
  Slick.prototype.fadeSlide = function(slideIndex, callback) {
    
    var _ = this;
    
    if (_.cssTransitions === false) {
      
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });
      
      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
      
    } else {
      
      _.applyTransition(slideIndex);
      
      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });
      
      if (callback) {
        setTimeout(function() {
          
          _.disableTransition(slideIndex);
          
          callback.call();
        }, _.options.speed);
      }
      
    }
    
  };
  
  Slick.prototype.fadeSlideOut = function(slideIndex) {
    
    var _ = this;
    
    if (_.cssTransitions === false) {
      
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
      
    } else {
      
      _.applyTransition(slideIndex);
      
      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
      
    }
    
  };
  
  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
    
    var _ = this;
    
    if (filter !== null) {
      
      _.$slidesCache = _.$slides;
      
      _.unload();
      
      _.$slideTrack.children(this.options.slide).detach();
      
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
      
      _.reinit();
      
    }
    
  };
  
  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
    
    var _ = this;
    return _.currentSlide;
    
  };
  
  Slick.prototype.getDotCount = function() {
    
    var _ = this;
    
    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;
    
    if (_.options.infinite === true) {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }
    
    return pagerQty - 1;
    
  };
  
  Slick.prototype.getLeft = function(slideIndex) {
    
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide;
    
    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);
    
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
        verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
            verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
          } else {
            _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
            verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
        verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
      }
    }
    
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }
    
    if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }
    
    if (_.options.vertical === false) {
      targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
    } else {
      targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
    }
    
    if (_.options.variableWidth === true) {
      
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }
      
      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft =  0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }
      
      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }
        
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft =  0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }
        
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }
    
    return targetLeft;
    
  };
  
  Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
    
    var _ = this;
    
    return _.options[option];
    
  };
  
  Slick.prototype.getNavigableIndexes = function() {
    
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;
    
    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }
    
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }
    
    return indexes;
    
  };
  
  Slick.prototype.getSlick = function() {
    
    return this;
    
  };
  
  Slick.prototype.getSlideCount = function() {
    
    var _ = this,
        slidesTraversed, swipedSlide, centerOffset;
    
    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
    
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function(index, slide) {
        if (slide.offsetLeft - centerOffset + ($j(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
          swipedSlide = slide;
          return false;
        }
      });
      
      slidesTraversed = Math.abs($j(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      
      return slidesTraversed;
      
    } else {
      return _.options.slidesToScroll;
    }
    
  };
  
  Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
    
    var _ = this;
    
    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
    
  };
  
  Slick.prototype.init = function(creation) {
    
    var _ = this;
    
    if (!$j(_.$slider).hasClass('slick-initialized')) {
      
      $j(_.$slider).addClass('slick-initialized');
      
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
      
    }
    
    if (creation) {
      _.$slider.trigger('init', [_]);
    }
    
    if (_.options.accessibility === true) {
      _.initADA();
    }
    
  };
  
  Slick.prototype.initArrowEvents = function() {
    
    var _ = this;
    
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.on('click.slick', {
        message: 'previous'
      }, _.changeSlide);
      _.$nextArrow.on('click.slick', {
        message: 'next'
      }, _.changeSlide);
    }
    
  };
  
  Slick.prototype.initDotEvents = function() {
    
    var _ = this;
    
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $j('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);
    }
    
    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
      $j('li', _.$dots)
      .on('mouseenter.slick', $j.proxy(_.setPaused, _, true))
      .on('mouseleave.slick', $j.proxy(_.setPaused, _, false));
    }
    
  };
  
  Slick.prototype.initializeEvents = function() {
    
    var _ = this;
    
    _.initArrowEvents();
    
    _.initDotEvents();
    
    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);
    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);
    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);
    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);
    
    _.$list.on('click.slick', _.clickHandler);
    
    $j(document).on(_.visibilityChange, $j.proxy(_.visibility, _));
    
    _.$list.on('mouseenter.slick', $j.proxy(_.setPaused, _, true));
    _.$list.on('mouseleave.slick', $j.proxy(_.setPaused, _, false));
    
    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }
    
    if (_.options.focusOnSelect === true) {
      $j(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    
    $j(window).on('orientationchange.slick.slick-' + _.instanceUid, $j.proxy(_.orientationChange, _));
    
    $j(window).on('resize.slick.slick-' + _.instanceUid, $j.proxy(_.resize, _));
    
    $j('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    
    $j(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $j(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    
  };
  
  Slick.prototype.initUI = function() {
    
    var _ = this;
    
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      
      _.$prevArrow.show();
      _.$nextArrow.show();
      
    }
    
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      
      _.$dots.show();
      
    }
    
    if (_.options.autoplay === true) {
      
      _.autoPlay();
      
    }
    
  };
  
  Slick.prototype.keyHandler = function(event) {
    
    var _ = this;
    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
    if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: 'next'
          }
        });
      }
    }
    
  };
  
  Slick.prototype.lazyLoad = function() {
    
    var _ = this,
        loadRange, cloneRange, rangeStart, rangeEnd;
    
    function loadImages(imagesScope) {
      $j('img[data-lazy]', imagesScope).each(function() {
        
        var image = $j(this),
            imageSource = $j(this).attr('data-lazy'),
            imageToLoad = document.createElement('img');
        
        imageToLoad.onload = function() {
          image
          .animate({ opacity: 0 }, 100, function() {
            image
            .attr('src', imageSource)
            .animate({ opacity: 1 }, 200, function() {
              image
              .removeAttr('data-lazy')
              .removeClass('slick-loading');
            });
          });
        };
        
        imageToLoad.src = imageSource;
        
      });
    }
    
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = rangeStart + _.options.slidesToShow;
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    
    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
    loadImages(loadRange);
    
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else
      if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
        cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
        loadImages(cloneRange);
      } else if (_.currentSlide === 0) {
        cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
        loadImages(cloneRange);
      }
    
  };
  
  Slick.prototype.loadSlider = function() {
    
    var _ = this;
    
    _.setPosition();
    
    _.$slideTrack.css({
      opacity: 1
    });
    
    _.$slider.removeClass('slick-loading');
    
    _.initUI();
    
    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
    
  };
  
  Slick.prototype.next = Slick.prototype.slickNext = function() {
    
    var _ = this;
    
    _.changeSlide({
      data: {
        message: 'next'
      }
    });
    
  };
  
  Slick.prototype.orientationChange = function() {
    
    var _ = this;
    
    _.checkResponsive();
    _.setPosition();
    
  };
  
  Slick.prototype.pause = Slick.prototype.slickPause = function() {
    
    var _ = this;
    
    _.autoPlayClear();
    _.paused = true;
    
  };
  
  Slick.prototype.play = Slick.prototype.slickPlay = function() {
    
    var _ = this;
    
    _.paused = false;
    _.autoPlay();
    
  };
  
  Slick.prototype.postSlide = function(index) {
    
    var _ = this;
    
    _.$slider.trigger('afterChange', [_, index]);
    
    _.animating = false;
    
    _.setPosition();
    
    _.swipeLeft = null;
    
    if (_.options.autoplay === true && _.paused === false) {
      _.autoPlay();
    }
    if (_.options.accessibility === true) {
      _.initADA();
    }
    
  };
  
  Slick.prototype.prev = Slick.prototype.slickPrev = function() {
    
    var _ = this;
    
    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
    
  };
  
  Slick.prototype.preventDefault = function(event) {
    event.preventDefault();
  };
  
  Slick.prototype.progressiveLazyLoad = function() {
    
    var _ = this,
        imgCount, targetImage;
    
    imgCount = $j('img[data-lazy]', _.$slider).length;
    
    if (imgCount > 0) {
      targetImage = $j('img[data-lazy]', _.$slider).first();
      targetImage.attr('src', null);
      targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
        targetImage.removeAttr('data-lazy');
        _.progressiveLazyLoad();
        
        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }
      })
      .error(function() {
        targetImage.removeAttr('data-lazy');
        _.progressiveLazyLoad();
      });
    }
    
  };
  
  Slick.prototype.refresh = function( initializing ) {
    
    var _ = this, currentSlide, firstVisible;
    
    firstVisible = _.slideCount - _.options.slidesToShow;
    
    // check that the new breakpoint can actually accept the
    // "current slide" as the current slide, otherwise we need
    // to set it to the closest possible value.
    if ( !_.options.infinite ) {
      if ( _.slideCount <= _.options.slidesToShow ) {
        _.currentSlide = 0;
      } else if ( _.currentSlide > firstVisible ) {
        _.currentSlide = firstVisible;
      }
    }
    
    currentSlide = _.currentSlide;
    
    _.destroy(true);
    
    $j.extend(_, _.initials, { currentSlide: currentSlide });
    
    _.init();
    
    if( !initializing ) {
      
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
      
    }
    
  };
  
  Slick.prototype.registerBreakpoints = function() {
    
    var _ = this, breakpoint, currentBreakpoint, l,
        responsiveSettings = _.options.responsive || null;
    
    if ( $j.type(responsiveSettings) === "array" && responsiveSettings.length ) {
      
      _.respondTo = _.options.respondTo || 'window';
      
      for ( breakpoint in responsiveSettings ) {
        
        l = _.breakpoints.length-1;
        currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
        
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          
          // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.
          while( l >= 0 ) {
            if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
              _.breakpoints.splice(l,1);
            }
            l--;
          }
          
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
          
        }
        
      }
      
      _.breakpoints.sort(function(a, b) {
        return ( _.options.mobileFirst ) ? a-b : b-a;
      });
      
    }
    
  };
  
  Slick.prototype.reinit = function() {
    
    var _ = this;
    
    _.$slides =
      _.$slideTrack
    .children(_.options.slide)
    .addClass('slick-slide');
    
    _.slideCount = _.$slides.length;
    
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }
    
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    
    _.registerBreakpoints();
    
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    
    _.checkResponsive(false, true);
    
    if (_.options.focusOnSelect === true) {
      $j(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    
    _.setSlideClasses(0);
    
    _.setPosition();
    
    _.$slider.trigger('reInit', [_]);
    
    if (_.options.autoplay === true) {
      _.focusHandler();
    }
    
  };
  
  Slick.prototype.resize = function() {
    
    var _ = this;
    
    if ($j(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function() {
        _.windowWidth = $j(window).width();
        _.checkResponsive();
        if( !_.unslicked ) { _.setPosition(); }
      }, 50);
    }
  };
  
  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
    
    var _ = this;
    
    if (typeof(index) === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }
    
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }
    
    _.unload();
    
    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }
    
    _.$slides = _.$slideTrack.children(this.options.slide);
    
    _.$slideTrack.children(this.options.slide).detach();
    
    _.$slideTrack.append(_.$slides);
    
    _.$slidesCache = _.$slides;
    
    _.reinit();
    
  };
  
  Slick.prototype.setCSS = function(position) {
    
    var _ = this,
        positionProps = {},
        x, y;
    
    if (_.options.rtl === true) {
      position = -position;
    }
    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    
    positionProps[_.positionProp] = position;
    
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
        _.$slideTrack.css(positionProps);
      }
    }
    
  };
  
  Slick.prototype.setDimensions = function() {
    
    var _ = this;
    
    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: ('0px ' + _.options.centerPadding)
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: (_.options.centerPadding + ' 0px')
        });
      }
    }
    
    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();
    
    
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
      
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
    }
    
    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    
  };
  
  Slick.prototype.setFade = function() {
    
    var _ = this,
        targetLeft;
    
    _.$slides.each(function(index, element) {
      targetLeft = (_.slideWidth * index) * -1;
      if (_.options.rtl === true) {
        $j(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $j(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });
    
    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
    
  };
  
  Slick.prototype.setHeight = function() {
    
    var _ = this;
    
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.css('height', targetHeight);
    }
    
  };
  
  Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {
    
    var _ = this, l, item;
    
    if( option === "responsive" && $j.type(value) === "array" ) {
      for ( item in value ) {
        if( $j.type( _.options.responsive ) !== "array" ) {
          _.options.responsive = [ value[item] ];
        } else {
          l = _.options.responsive.length-1;
          // loop through the responsive object and splice out duplicates.
          while( l >= 0 ) {
            if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
              _.options.responsive.splice(l,1);
            }
            l--;
          }
          _.options.responsive.push( value[item] );
        }
      }
    } else {
      _.options[option] = value;
    }
    
    if (refresh === true) {
      _.unload();
      _.reinit();
    }
    
  };
  
  Slick.prototype.setPosition = function() {
    
    var _ = this;
    
    _.setDimensions();
    
    _.setHeight();
    
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }
    
    _.$slider.trigger('setPosition', [_]);
    
  };
  
  Slick.prototype.setProps = function() {
    
    var _ = this,
        bodyStyle = document.body.style;
    
    _.positionProp = _.options.vertical === true ? 'top' : 'left';
    
    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }
    
    if (bodyStyle.WebkitTransition !== undefined ||
        bodyStyle.MozTransition !== undefined ||
        bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }
    
    if ( _.options.fade ) {
      if ( typeof _.options.zIndex === 'number' ) {
        if( _.options.zIndex < 3 ) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }
    
    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }
    _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
  };
  
  
  Slick.prototype.setSlideClasses = function(index) {
    
    var _ = this,
        centerOffset, allSlides, indexOffset, remainder;
    
    allSlides = _.$slider
    .find('.slick-slide')
    .removeClass('slick-active slick-center slick-current')
    .attr('aria-hidden', 'true');
    
    _.$slides
    .eq(index)
    .addClass('slick-current');
    
    if (_.options.centerMode === true) {
      
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      
      if (_.options.infinite === true) {
        
        if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
          
          _.$slides
          .slice(index - centerOffset, index + centerOffset + 1)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
          
        } else {
          
          indexOffset = _.options.slidesToShow + index;
          allSlides
          .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
          
        }
        
        if (index === 0) {
          
          allSlides
          .eq(allSlides.length - 1 - _.options.slidesToShow)
          .addClass('slick-center');
          
        } else if (index === _.slideCount - 1) {
          
          allSlides
          .eq(_.options.slidesToShow)
          .addClass('slick-center');
          
        }
        
      }
      
      _.$slides
      .eq(index)
      .addClass('slick-center');
      
    } else {
      
      if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
        
        _.$slides
        .slice(index, index + _.options.slidesToShow)
        .addClass('slick-active')
        .attr('aria-hidden', 'false');
        
      } else if (allSlides.length <= _.options.slidesToShow) {
        
        allSlides
        .addClass('slick-active')
        .attr('aria-hidden', 'false');
        
      } else {
        
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
        
        if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
          
          allSlides
          .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
          
        } else {
          
          allSlides
          .slice(indexOffset, indexOffset + _.options.slidesToShow)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
          
        }
        
      }
      
    }
    
    if (_.options.lazyLoad === 'ondemand') {
      _.lazyLoad();
    }
    
  };
  
  Slick.prototype.setupInfinite = function() {
    
    var _ = this,
        i, slideIndex, infiniteCount;
    
    if (_.options.fade === true) {
      _.options.centerMode = false;
    }
    
    if (_.options.infinite === true && _.options.fade === false) {
      
      slideIndex = null;
      
      if (_.slideCount > _.options.slidesToShow) {
        
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }
        
        for (i = _.slideCount; i > (_.slideCount -
                                    infiniteCount); i -= 1) {
          slideIndex = i - 1;
          $j(_.$slides[slideIndex]).clone(true).attr('id', '')
          .attr('data-slick-index', slideIndex - _.slideCount)
          .prependTo(_.$slideTrack).addClass('slick-cloned');
        }
        for (i = 0; i < infiniteCount; i += 1) {
          slideIndex = i;
          $j(_.$slides[slideIndex]).clone(true).attr('id', '')
          .attr('data-slick-index', slideIndex + _.slideCount)
          .appendTo(_.$slideTrack).addClass('slick-cloned');
        }
        _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
          $j(this).attr('id', '');
        });
        
      }
      
    }
    
  };
  
  Slick.prototype.setPaused = function(paused) {
    
    var _ = this;
    
    if (_.options.autoplay === true && _.options.pauseOnHover === true) {
      _.paused = paused;
      if (!paused) {
        _.autoPlay();
      } else {
        _.autoPlayClear();
      }
    }
  };
  
  Slick.prototype.selectHandler = function(event) {
    
    var _ = this;
    
    var targetElement =
        $j(event.target).is('.slick-slide') ?
        $j(event.target) :
    $j(event.target).parents('.slick-slide');
    
    var index = parseInt(targetElement.attr('data-slick-index'));
    
    if (!index) index = 0;
    
    if (_.slideCount <= _.options.slidesToShow) {
      
      _.setSlideClasses(index);
      _.asNavFor(index);
      return;
      
    }
    
    _.slideHandler(index);
    
  };
  
  Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
    
    var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
        _ = this;
    
    sync = sync || false;
    
    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }
    
    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }
    
    if (_.slideCount <= _.options.slidesToShow) {
      return;
    }
    
    if (sync === false) {
      _.asNavFor(index);
    }
    
    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
    
    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function() {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function() {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }
    
    if (_.options.autoplay === true) {
      clearInterval(_.autoPlayTimer);
    }
    
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }
    
    _.animating = true;
    
    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
    
    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;
    
    _.setSlideClasses(_.currentSlide);
    
    _.updateDots();
    _.updateArrows();
    
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        
        _.fadeSlideOut(oldSlide);
        
        _.fadeSlide(animSlide, function() {
          _.postSlide(animSlide);
        });
        
      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }
    
    if (dontAnimate !== true) {
      _.animateSlide(targetLeft, function() {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
    
  };
  
  Slick.prototype.startLoad = function() {
    
    var _ = this;
    
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      
      _.$prevArrow.hide();
      _.$nextArrow.hide();
      
    }
    
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      
      _.$dots.hide();
      
    }
    
    _.$slider.addClass('slick-loading');
    
  };
  
  Slick.prototype.swipeDirection = function() {
    
    var xDist, yDist, r, swipeAngle, _ = this;
    
    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    
    if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
      return (_.options.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
      return (_.options.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
      return (_.options.rtl === false ? 'right' : 'left');
    }
    if (_.options.verticalSwiping === true) {
      if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
        return 'left';
      } else {
        return 'right';
      }
    }
    
    return 'vertical';
    
  };
  
  Slick.prototype.swipeEnd = function(event) {
    
    var _ = this,
        slideCount;
    
    _.dragging = false;
    
    _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;
    
    if (_.touchObject.curX === undefined) {
      return false;
    }
    
    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }
    
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      
      switch (_.swipeDirection()) {
        case 'left':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.slideHandler(slideCount);
          _.currentDirection = 0;
          _.touchObject = {};
          _.$slider.trigger('swipe', [_, 'left']);
          break;
          
        case 'right':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.slideHandler(slideCount);
          _.currentDirection = 1;
          _.touchObject = {};
          _.$slider.trigger('swipe', [_, 'right']);
          break;
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);
        _.touchObject = {};
      }
    }
    
  };
  
  Slick.prototype.swipeHandler = function(event) {
    
    var _ = this;
    
    if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }
    
    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
      event.originalEvent.touches.length : 1;
    
    _.touchObject.minSwipe = _.listWidth / _.options
    .touchThreshold;
    
    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options
      .touchThreshold;
    }
    
    switch (event.data.action) {
        
      case 'start':
        _.swipeStart(event);
        break;
        
      case 'move':
        _.swipeMove(event);
        break;
        
      case 'end':
        _.swipeEnd(event);
        break;
        
    }
    
  };
  
  Slick.prototype.swipeMove = function(event) {
    
    var _ = this,
        edgeWasHit = false,
        curLeft, swipeDirection, swipeLength, positionOffset, touches;
    
    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
    
    if (!_.dragging || touches && touches.length !== 1) {
      return false;
    }
    
    curLeft = _.getLeft(_.currentSlide);
    
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    
    _.touchObject.swipeLength = Math.round(Math.sqrt(
      Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    
    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = Math.round(Math.sqrt(
        Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
    }
    
    swipeDirection = _.swipeDirection();
    
    if (swipeDirection === 'vertical') {
      return;
    }
    
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      event.preventDefault();
    }
    
    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }
    
    
    swipeLength = _.touchObject.swipeLength;
    
    _.touchObject.edgeHit = false;
    
    if (_.options.infinite === false) {
      if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }
    
    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }
    
    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }
    
    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }
    
    _.setCSS(_.swipeLeft);
    
  };
  
  Slick.prototype.swipeStart = function(event) {
    
    var _ = this,
        touches;
    
    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }
    
    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }
    
    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    
    _.dragging = true;
    
  };
  
  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
    
    var _ = this;
    
    if (_.$slidesCache !== null) {
      
      _.unload();
      
      _.$slideTrack.children(this.options.slide).detach();
      
      _.$slidesCache.appendTo(_.$slideTrack);
      
      _.reinit();
      
    }
    
  };
  
  Slick.prototype.unload = function() {
    
    var _ = this;
    
    $j('.slick-cloned', _.$slider).remove();
    
    if (_.$dots) {
      _.$dots.remove();
    }
    
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }
    
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }
    
    _.$slides
    .removeClass('slick-slide slick-active slick-visible slick-current')
    .attr('aria-hidden', 'true')
    .css('width', '');
    
  };
  
  Slick.prototype.unslick = function(fromBreakpoint) {
    
    var _ = this;
    _.$slider.trigger('unslick', [_, fromBreakpoint]);
    _.destroy();
    
  };
  
  Slick.prototype.updateArrows = function() {
    
    var _ = this,
        centerOffset;
    
    centerOffset = Math.floor(_.options.slidesToShow / 2);
    
    if ( _.options.arrows === true &&
        _.slideCount > _.options.slidesToShow &&
        !_.options.infinite ) {
      
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      
      if (_.currentSlide === 0) {
        
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        
      }
      
    }
    
  };
  
  Slick.prototype.updateDots = function() {
    
    var _ = this;
    
    if (_.$dots !== null) {
      
      _.$dots
      .find('li')
      .removeClass('slick-active')
      .attr('aria-hidden', 'true');
      
      _.$dots
      .find('li')
      .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
      .addClass('slick-active')
      .attr('aria-hidden', 'false');
      
    }
    
  };
  
  Slick.prototype.visibility = function() {
    
    var _ = this;
    
    if (document[_.hidden]) {
      _.paused = true;
      _.autoPlayClear();
    } else {
      if (_.options.autoplay === true) {
        _.paused = false;
        _.autoPlay();
      }
    }
    
  };
  Slick.prototype.initADA = function() {
    var _ = this;
    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });
    
    _.$slideTrack.attr('role', 'listbox');
    
    _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
      $j(this).attr({
        'role': 'option',
        'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
      });
    });
    
    if (_.$dots !== null) {
      _.$dots.attr('role', 'tablist').find('li').each(function(i) {
        $j(this).attr({
          'role': 'presentation',
          'aria-selected': 'false',
          'aria-controls': 'navigation' + _.instanceUid + i + '',
          'id': 'slick-slide' + _.instanceUid + i + ''
        });
      })
      .first().attr('aria-selected', 'true').end()
      .find('button').attr('role', 'button').end()
      .closest('div').attr('role', 'toolbar');
    }
    _.activateADA();
    
  };
  
  Slick.prototype.activateADA = function() {
    var _ = this;
    
    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
    
  };
  
  Slick.prototype.focusHandler = function() {
    var _ = this;
    _.$slider.on('focus.slick blur.slick', '*', function(event) {
      event.stopImmediatePropagation();
      var sf = $j(this);
      setTimeout(function() {
        if (_.isPlay) {
          if (sf.is(':focus')) {
            _.autoPlayClear();
            _.paused = true;
          } else {
            _.paused = false;
            _.autoPlay();
          }
        }
      }, 0);
    });
  };
  
  $j.fn.slick = function() {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].slick = new Slick(_[i], opt);
      else
        ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };
  
}));

$j(document).ready(function(){
$j("#Homepage #bannerwrapper .watch-link").click(function() {
ga('send', 'event', 'Slider Video', 'click');
  $j('.home-banner .slides').slick('slickPause');
});
$j("#Homepage #cboxClose").click(function() {
  $j('.home-banner .slides').slick('slickPlay');
});

$j(document).keyup(function(e) {

  if (e.keyCode === 27) $j('.home-banner .slides').slick('slickPlay');
});

    $j('.home-banner .slides, .slide').slick({
    dots: true,  
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:false,
    nextArrow:false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    pauseOnFocus: false,
	pauseOnHover:false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
  
  $j('.homepage-container .story-slider').slick({
    dots: false,
    speed: 1000,   
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
 
    ]
  });
  
  $j('#content-banner .slides').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    prevArrow:false,
    nextArrow:false,
    adaptiveHeight: true
  });
  
  $j('.landingwrap #fp-carousel').slick({
    dots: false,
    speed: 1000,   
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
 
    ]
  });
  
  $j('#images-carousel').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]

  });
  $j(".slick-dots li button").click(function(){
  ga('send', 'event', 'Slider Pager', 'click');
  });
  
  
});
/*!---- gatag-----*/
var filetypes = /\.(zip.*|exe.*|dmg.*|pdf.*|doc.*|xls.*|ppt.*|mp3.*|txt.*|rar.*|wma.*|mov.*|ics.*|vcf.*|avi.*|wmv.*|flv.*|wav.*)$/i;
var baseHref = '';
if ($j('base').attr('href') != undefined) baseHref = $j('base').attr('href');
var hrefRedirect = '';
$j(document).ready(function(){
$j('body').on('click', 'a', function(event) {
	
	var el = $j(this);
	var track = true;
	var href = (typeof(el.attr('href')) != 'undefined' ) ? el.attr('href') : '';
	var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
	if (!href.match(/^javascript:/i)) {
		var elEv = []; elEv.value=0, elEv.non_i=false;
		if (href.match(/^mailto\:/i)) {
			elEv.category = 'email';
			elEv.action = 'click';
			elEv.label = href.replace(/^mailto\:/i, '');
			elEv.loc = href;
		}
		else if (href.match(filetypes)) {
			var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
			elEv.category = 'download';
			elEv.action = 'click-' + extension[0];
			elEv.label = href.replace(/ /g,'-');
			elEv.loc = baseHref + href;
		}
		else if (href.match(/^https?\:/i) && !isThisDomain) {
			elEv.category = 'external';
			elEv.action = 'click';
			elEv.label = href.replace(/^https?\:\/\//i, '');
			elEv.non_i = true;
			elEv.loc = href;
		}
		else if (href.match(/^tel\:/i)) {
			elEv.category = 'telephone';
			elEv.action = 'click';
			elEv.label = href.replace(/^tel\:/i, '');
			elEv.loc = href;
		}
		else track = false;
		
    
		if (track) {
			var ret = true;

			if((elEv.category == 'external' || elEv.category == 'download') && (el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank') ) {
				hrefRedirect = elEv.loc;

				ga('send','event', elEv.category.toLowerCase(),elEv.action.toLowerCase(),elEv.label.toLowerCase(),elEv.value,{
					'nonInteraction': elEv.non_i ,
					'hitCallback':gaHitCallbackHandler
				});

				ret = false;
			}
			else {
				ga('send','event', elEv.category.toLowerCase(),elEv.action.toLowerCase(),elEv.label.toLowerCase(),elEv.value,{
					'nonInteraction': elEv.non_i
				});
			}

			return ret;
		}
	}
});
	
	
/*Investor More documents tracking */
var url;
$j(".ir-box2 .box-links a").on("click", function() {
url = $j(this).attr("href");
//artnvrtitle2 = $j(this).text().toUpperCase();
//artnvfulllink2 = window.location.href;
//arnvfulllink2 = window.location.href + arnvrlink2;
setTimeout(function(){	
ga('send', 'event', 'Investor - More documents', 'click', url);
}, 300);
});


/*Homepage More documents tracking */
//var url;
$j("body#Homepage .box-1 .box-links a").on("click", function() {
url = $j(this).attr("href");
//artnvrtitle2 = $j(this).text().toUpperCase();
//artnvfulllink2 = window.location.href;
//arnvfulllink2 = window.location.href + arnvrlink2;
setTimeout(function(){	
ga('send', 'event', 'Homepage - More documents', 'click', url);
}, 300);
});
	
	
$j(".social-media-links li a").on("click", function() {
var surl = $j(this).attr("href");
//slable = $j(this).children("span").text();
var siconlable = $j(this).attr("title");
var fields = siconlable.split(' – ');
var siconlableNew = fields[0];
siconlableNew = siconlableNew +" - icon clicked from footer";

setTimeout(function(){	
ga('send', 'event', siconlableNew, 'click', surl);
}, 300);
});
	
/* Homepage - The links in each separate banner slide  */
$j("body#Homepage a.slick-slide").on("click", function() {
var slideurl = $j(this).attr("href");
var slidelable = $j(this).attr("data-text");

setTimeout(function(){	
ga('send', 'event', 'Homepage Slider banner', 'clicked on ' + slidelable, slideurl);
}, 300);
});	
	
/* Homepage - The links to the annual report in Latest documents box */
$j("body#Homepage .box-1 .news-item a").on("click", function() {
var arurl = $j(this).attr("href");
var arlable = $j(this).attr("data-text");

setTimeout(function(){	
ga('send', 'event', 'Homepage Latest documents box', 'clicked on ' + arlable, arurl);
}, 300);
});


$j("body#Homepage .banner-text a.watch-link").on("click", function() {
var slideurl = $j(this).attr("href");
var slidelable = $j(this).attr("data-text");

setTimeout(function(){	
ga('send', 'event', 'Homepage Slider banner', 'clicked on Video button', slideurl);
}, 300);
});		
	
/* Investor - The links to the annual report in Latest documents box */
$j("body#investors .ir-box2 .news-item a").on("click", function() {
var arurl = $j(this).attr("href");
var arlable = $j(this).attr("data-text");

setTimeout(function(){	
ga('send', 'event', 'Investor AR box', 'clicked on ' + arlable, arurl);
}, 300);
});	
	
/* Investor - The links to the regulatory news feeds */
$j("body#investors #rnsXmlContainer .news-item a").on("click", function() {
var arurl = $j(this).attr("href");
var arlable = $j(this).text();

setTimeout(function(){	
ga('send', 'event', 'Investor Regulatory news box', 'clicked on ' + arlable, arurl);
}, 300);
});	
	
$j("body#investors .box-2 .box-links a").on("click", function() {
var arurl = $j(this).attr("href");
var arlable = $j(this).text();

setTimeout(function(){	
ga('send', 'event', 'Investor Regulatory news box', 'clicked on ' + arlable, arurl);
}, 300);
});		
	
/* Investor - The links to the reports and presentations feeds */
$j("body#investors .box-3 .news-item a").on("click", function() {
var arurl = $j(this).attr("href");
var arlable = $j(this).text();

setTimeout(function(){	
ga('send', 'event', 'Investor Reports and presentations box', 'clicked on ' + arlable, arurl);
}, 300);
});		
	
$j("body#investors .box-3 .box-links a").on("click", function() {
var arurl = $j(this).attr("href");
var arlable = $j(this).text();

setTimeout(function(){	
ga('send', 'event', 'Investor Reports and presentations box', 'clicked on ' + arlable, arurl);
}, 300);
});	
	
	
$j(".regulation-bottom-signpost .media-links").on("click", function() {
var brurl = window.location.href;
var pglable = $j('.title h1').text();

setTimeout(function(){	
ga('send', 'event', 'Download the Brochure', 'clicked on page' + pglable, brurl);
}, 300);
});	
	
	
	
	
	
	
	
	
	
	
	
	
});

gaHitCallbackHandler = function() {
	window.location.href = hrefRedirect;
}

/*!---- autocomplete-----*/
$j(document).ready(function() {
    //main search textbox
    if ($j("#searchbox").length > 0) {
        $j("#searchbox").autocomplete({
            appendTo: "#searchTextboxContainer",
            source: function(request, response) {

                $j.ajax({
                    url: "/Investis/AdvancedSearch/PredictiveSearch.aspx",
                    data: {
                        ps_lang: 'en',
                        PS_HOSTNAME: autoCompleteDomain,
                        PS_SEARCHTERM: encodeURIComponent(request.term),
                        PS_MAXSUGGESTIONCOUNT: 7
                    },
                    async: true,
                    success: function(data) {

                        response(data);
                    },
                    error: function(result) {
                        //alert("Error loading the data" + result.responseText);
                    }
                });
            },
            minLength: 1,
            select: function(event, ui) {
                $j("#searchbox").val(ui.item.value);
                $j("#searchButton").trigger("click");
            }
        }).data("ui-autocomplete")._renderItem = function(ul, item) {
            return $j("<li class='ui-corner-all'>")
                .append("<a> <span style='float:left;'>" + item.label + "</span><span style='float:right;'>(" + item.count + ")</span></a>").appendTo(ul);
        };

    }



    //main search textbox for search result page

    if ($j("#searchTextbox2").length > 0) {
        $j("#searchTextbox2").autocomplete({
            appendTo: "#searchTextBoxContainer2",
            source: function(request, response) {

                $j.ajax({
                    url: "/Investis/AdvancedSearch/PredictiveSearch.aspx",
                    data: {
                        ps_lang: 'en',
                        PS_HOSTNAME: autoCompleteDomain,
                        PS_SEARCHTERM: encodeURIComponent(request.term),
                        PS_MAXSUGGESTIONCOUNT: 7
                    },
                    async: true,
                    success: function(data) {

                        response(data);
                    },
                    error: function(result) {
                        //alert("Error loading the data" + result.responseText);
                    }
                });
            },
            minLength: 1,
            select: function(event, ui) {
                $j("#searchTextbox2").val(ui.item.value);
                $j("#searchButton2").trigger("click");
            }
        }).data("ui-autocomplete")._renderItem = function(ul, item) {
            return $j("<li class='ui-corner-all'>")
                .append("<a> <span style='float:left;'>" + item.label + "</span><span style='float:right;'>(" + item.count + ")</span></a>").appendTo(ul);
        };


    }



    // Search result page textbox
    if ($j("#SearchTextboxRP").length > 0) {
        $j("#SearchTextboxRP").autocomplete({
            appendTo: "#searchTextBoxContainerRP",
            source: function(request, response) {
                $j.ajax({
                    url: "/Investis/AdvancedSearch/PredictiveSearch.aspx",
                    data: {
                        ps_lang: 'en',
                        PS_HOSTNAME: autoCompleteDomain,
                        PS_SEARCHTERM: encodeURIComponent(request.term),
                        PS_MAXSUGGESTIONCOUNT: 7
                    },
                    async: true,
                    success: function(data) {
                        response(data);
                    },
                    error: function(result) {
                        //alert("Error loading the data" + result.responseText);
                    }
                });
            },
            minLength: 1,
            select: function(event, ui) {
                $j("#SearchTextboxRP").val(ui.item.value);
                $j("#SearchbuttonRP").trigger("click");
            }
        }).data("ui-autocomplete")._renderItem = function(ul, item) {
            return $j("<li class='ui-corner-all'>")
                .append("<a> <span style='float:left;'>" + item.label + "</span><span style='float:right;'>(" + item.count + ")</span></a>").appendTo(ul);
        };
    }
});
/*!---- snapdown-----*/
$j(document).ready(function() {
  $j(".snapdown-title:eq(0)").addClass("selected");
  $j(".snapdown-content:eq(0)").slideDown("slow");
  $j(".snapdown-title").click(function() {
    if ($j(this).next().css("display") == "none") {
      $j(".snapdown-title").removeClass("selected");
      $j(this).addClass("selected");
      $j(".snapdown-content").slideUp("slow");
                  $j(this).next().slideDown("slow", function() {
                if (!($j('body').hasClass('ip3-edit'))) {
                    $j.scrollTo($j(this).parent().offset().top, 500);
                }
            });
    }
    else {
      $j(".snapdown-title").removeClass("selected");
      $j(this).removeClass("selected");
      $j(".snapdown-content").slideUp("slow");
    }
  });
});
// JavaScript Document

/*!---- back-to-top-----*/
/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($j){var h=$j.scrollTo=function(a,b,c){$j(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($j.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $j(window)._scrollable()};$j.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$j.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$j.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$j.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$j(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$j(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$j(targ)).offset()}$j.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$j(a).is('html,body'))return a[scroll]-$j(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})($j);

$j.fn.topLink = function (settings) {
    settings = jQuery.extend({
        min: 1,
        fadeSpeed: 200,
        ieOffset: 50
    }, settings);
    return this.each(function () {
        //listen for scroll
        var el = $j(this);
        el.css('display', 'none'); //in case the user forgot
        $j(window).scroll(function () {
            //console.log($j(window).scrollTop());
            if ($j(window).scrollTop() > 0) {
                el.fadeIn(settings.fadeSpeed);                           
            } else {
                el.fadeOut(settings.fadeSpeed);
                
            }
            
             
        });
    });
};

$j(document).ready(function () {

/*if(!is_touch_device())*/{    
    $j("#footerwrapper").append('<a href="#MainForm" id="auto-top-link"><span class="fa fa-angle-up"></span></a>');
    $j('#auto-top-link').topLink({
        min: 400,
        fadeSpeed: 500
    });

    //smoothscroll
    $j('#auto-top-link').click(function (e) {
        e.preventDefault();
        $j.scrollTo(0, 300);
    });
    }
});
/*!---- email-alerts-----*/
     function validateEmail(sEmail) {
         var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
         if (filter.test(sEmail)) {
             return true;
         } else {
             return false;
         }
     }
     $j(document).ready(function() {
         $j(".alert-textbox > a").click(function(e) {
             e.preventDefault();

             var text = document.getElementById('alerts-text').value;
             
             if(text=="your@email.com"){
              alert("Invalid Email Address");
             
             }else{
               if (validateEmail(text)) {
                 var url = "/site-services/email-alerts.aspx?alertEmail=" + text;
                 document.location.href = url;
             }
             else {
                 alert("Invalid Email Address");
             }
             return false;
             
             }
          
           
         });
         $j('input#alerts-text').bind('keypress', function(e) {
             if (e.keyCode == 13) {
             
                 $j('.alert-textbox > a').trigger("click");
                 return false;
             }
         });
         if ($j("body").attr("id") == "email-alerts") {
             var urlParams = {};
             (function() {
                 var e,
                     a = /\+/g, // Regex for replacing addition symbol with a space
                     r = /([^&=]+)=?([^&]*)/g,
                     d = function(s) {
                         return decodeURIComponent(s.replace(a, " "));
                     },
                     q = window.location.search.substring(1);
                 while (e = r.exec(q))
                     urlParams[d(e[1])] = d(e[2]);
             })();
             //var newiframetext = $j(".alertIframe").attr("src")+"&alertEmail="+urlParams["alertEmail"];
             if (urlParams['alertEmail'] !== undefined) {
                 //alert(urlParams['alertEmail']+"gfdsds"+$j("#iframe-wrapper iframe").attr("src"));
                 $j("#email-alerts #iframe iframe").attr("src", $j("#email-alerts #iframe iframe").attr("src") + "&alertEmail=" + urlParams['alertEmail']);
             }
         }
     });
/*!---- frame-manager-----*/
/*! iFrame Resizer (iframeSizer.min.js ) - v2.6.2 - 2014-10-11
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2014 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 *	Requires: iframeResizer_child.js on I-framed page.
 */

!function(){"use strict";function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!w;a+=1)w=window[b[a]+"RequestAnimationFrame"];w||c(" RequestAnimationFrame not supported")}function c(a){y.log&&"object"==typeof console&&console.log(s+"[Host page"+u+"]"+a)}function d(a){function b(){function a(){h(z),f(),y.resizedCallback(z)}i(a,z,"resetPage")}function d(a){var b=a.id;c(" Removing iFrame: "+b),a.parentNode.removeChild(a),y.closedCallback(b),c(" --")}function e(){var a=x.substr(t).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function j(a){var b=Number(y["max"+a]),d=Number(y["min"+a]),e=a.toLowerCase(),f=Number(z[e]);if(d>b)throw new Error("Value for min"+a+" can not be greater than max"+a);c(" Checking "+e+" is in range "+d+"-"+b),d>f&&(f=d,c(" Set "+e+" to min value")),f>b&&(f=b,c(" Set "+e+" to max value")),z[e]=""+f}function k(){var b=a.origin,d=z.iframe.src.split("/").slice(0,3).join("/");if(y.checkOrigin&&(c(" Checking connection is from: "+d),""+b!="null"&&b!==d))throw new Error("Unexpected message received from: "+b+" for "+z.iframe.id+". Message was: "+a.data+". This error can be disabled by adding the checkOrigin: false option.");return!0}function l(){return s===(""+x).substr(0,t)}function m(){var a=z.type in{"true":1,"false":1};return a&&c(" Ignoring init message from meta parent page"),a}function n(){var a=x.substr(x.indexOf(":")+r+6);c(" MessageCallback passed: {iframe: "+z.iframe.id+", message: "+a+"}"),y.messageCallback({iframe:z.iframe,message:a}),c(" --")}function o(){if(null===z.iframe)throw new Error("iFrame ("+z.id+") does not exist on "+u);return!0}function q(){c(" Reposition requested from iFrame"),v={x:z.width,y:z.height},f()}function w(){switch(z.type){case"close":d(z.iframe),y.resizedCallback(z);break;case"message":n();break;case"scrollTo":q();break;case"reset":g(z);break;case"init":b(),y.initCallback(z.iframe);break;default:b()}}var x=a.data,z={};l()&&(c(" Received: "+x),z=e(),j("Height"),j("Width"),!m()&&o()&&k()&&(w(),p=!1))}function e(){null===v&&(v={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},c(" Get position: "+v.x+","+v.y))}function f(){null!==v&&(window.scrollTo(v.x,v.y),c(" Set position: "+v.x+","+v.y),v=null)}function g(a){function b(){h(a),j("reset","reset",a.iframe)}c(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),e(),i(b,a,"init")}function h(a){function b(b){a.iframe.style[b]=a[b]+"px",c(" IFrame ("+a.iframe.id+") "+b+" set to "+a[b]+"px")}y.sizeHeight&&b("height"),y.sizeWidth&&b("width")}function i(a,b,d){d!==b.type&&w?(c(" Requesting animation frame"),w(a)):a()}function j(a,b,d){c("["+a+"] Sending msg to iframe ("+b+")"),d.contentWindow.postMessage(s+b,"*")}function k(){function b(){function a(a){1/0!==y[a]&&0!==y[a]&&(k.style[a]=y[a]+"px",c(" Set "+a+" = "+y[a]+"px"))}a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function d(a){return""===a&&(k.id=a="iFrameResizer"+o++,c(" Added missing iframe ID: "+a+" ("+k.src+")")),a}function e(){c(" IFrame scrolling "+(y.scrolling?"enabled":"disabled")+" for "+l),k.style.overflow=!1===y.scrolling?"hidden":"auto",k.scrolling=!1===y.scrolling?"no":"yes"}function f(){("number"==typeof y.bodyMargin||"0"===y.bodyMargin)&&(y.bodyMarginV1=y.bodyMargin,y.bodyMargin=""+y.bodyMargin+"px")}function h(){return l+":"+y.bodyMarginV1+":"+y.sizeWidth+":"+y.log+":"+y.interval+":"+y.enablePublicMethods+":"+y.autoResize+":"+y.bodyMargin+":"+y.heightCalculationMethod+":"+y.bodyBackground+":"+y.bodyPadding+":"+y.tolerance}function i(b){a(k,"load",function(){var a=p;j("iFrame.onload",b,k),!a&&y.heightCalculationMethod in x&&g({iframe:k,height:0,width:0,type:"init"})}),j("init",b,k)}var k=this,l=d(k.id);e(),b(),f(),i(h())}function l(a){if("object"!=typeof a)throw new TypeError("Options is not an object.")}function m(){function a(a){if("IFRAME"!==a.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");k.call(a)}function b(a){a=a||{},l(a);for(var b in z)z.hasOwnProperty(b)&&(y[b]=a.hasOwnProperty(b)?a[b]:z[b])}return function(c,d){b(c),Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a)}}function n(a){a.fn.iFrameResize=function(b){return b=b||{},l(b),y=a.extend({},z,b),this.filter("iframe").each(k).end()}}var o=0,p=!0,q="message",r=q.length,s="[iFrameSizer]",t=s.length,u="",v=null,w=window.requestAnimationFrame,x={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},y={},z={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){}};b(),a(window,"message",d),"jQuery"in window&&n($j),"function"==typeof define&&define.amd?define(function(){return m()}):window.iFrameResize=m()}();

if (!Array.prototype.forEach){
    Array.prototype.forEach = function(fun /*, thisArg */){
        "use strict";
        if (this === void 0 || this === null || typeof fun !== "function") throw new TypeError();

        var
            t = Object(this),
            len = t.length >>> 0,
            thisArg = arguments.length >= 2 ? arguments[1] : void 0;

        for (var i = 0; i < len; i++)
            if (i in t)
                fun.call(thisArg, t[i], i, t);
    };
}


$j(document).ready(function(){
	$j('iframe').attr('allowtransparency','true').attr('frameborder','0');
    $j('iframe.responsive').iFrameResize({log:false});
});

$j(window).resize(function(){
    if ($j("iframe.responsive").length > 0) {
    	$j("iframe.responsive").each(function(){
        $j(this).css("width", $j(this).parent('div').width() + "px");
        });
    }
});


/** Changes for keeping pop-up in the centre for fundamental tool **/

var __iframe;
$j(document).ready(function() {
	
    sendDimensions();
    if (__iframe !== undefined) {
        if (__iframe.addEventListener) {
            __iframe.addEventListener("load", sendDimensions, false);
        } else {
            __iframe.attachEvent("onload", sendDimensions);
        }
    }
    
});
$j(window).scroll(function() {

    sendDimensions();

});

$j(window).resize(function() {

    sendDimensions();

});

function sendDimensions() {

    
	fundamentalIndex = -1;
	$j("iframe").each(function(index){
		tmpSrc = $j(this).attr("src");
		if(tmpSrc.indexOf("fundamental=true") > 0)
		{
			fundamentalIndex = index;
		}
	});
	if(fundamentalIndex>=0)
	{
		__iframe = document.querySelectorAll("iframe.responsive")[fundamentalIndex];
		 var iFrameWindow = __iframe.contentWindow;
		var iframeSrcHost = getToolHostName(__iframe.src);
		iFrameWindow.postMessage("[Fundamentals_PageViewport]:" + $j(window).height() + ":" + $j(window).scrollTop() + ":" + $j(__iframe).offset().top + ":" + $j(__iframe).height(), iframeSrcHost);
	}
	
    
   
}

function getToolHostName(url) {
    var urlParser = document.createElement("a");
    urlParser.href = url;
    return urlParser.protocol + "//" + urlParser.host;
}