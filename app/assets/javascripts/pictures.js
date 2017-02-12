// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//Working downlow
! function() {
    "use strict";

    function t(t, e) {
        var i;
        for (i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function e(t) {
        if (!this || this.find !== e.prototype.find) return new e(t);
        if (this.length = 0, t)
            if ("string" == typeof t && (t = this.find(t)), t.nodeType || t === t.window) this.length = 1, this[0] = t;
            else {
                var i = t.length;
                for (this.length = i; i;) i -= 1, this[i] = t[i]
            }
    }
    e.extend = t, e.contains = function(t, e) {
        do
            if (e = e.parentNode, e === t) return !0; while (e);
        return !1
    }, e.parseJSON = function(t) {
        return window.JSON && JSON.parse(t)
    }, t(e.prototype, {
        find: function(t) {
            var i = this[0] || document;
            return "string" == typeof t && (t = i.querySelectorAll ? i.querySelectorAll(t) : "#" === t.charAt(0) ? i.getElementById(t.slice(1)) : i.getElementsByTagName(t)), new e(t)
        },
        hasClass: function(t) {
            return !!this[0] && new RegExp("(^|\\s+)" + t + "(\\s+|$)").test(this[0].className)
        },
        addClass: function(t) {
            for (var e, i = this.length; i;) {
                if (i -= 1, e = this[i], !e.className) return e.className = t, this;
                if (this.hasClass(t)) return this;
                e.className += " " + t
            }
            return this
        },
        removeClass: function(t) {
            for (var e, i = new RegExp("(^|\\s+)" + t + "(\\s+|$)"), s = this.length; s;) s -= 1, e = this[s], e.className = e.className.replace(i, " ");
            return this
        },
        on: function(t, e) {
            for (var i, s, n = t.split(/\s+/); n.length;)
                for (t = n.shift(), i = this.length; i;) i -= 1, s = this[i], s.addEventListener ? s.addEventListener(t, e, !1) : s.attachEvent && s.attachEvent("on" + t, e);
            return this
        },
        off: function(t, e) {
            for (var i, s, n = t.split(/\s+/); n.length;)
                for (t = n.shift(), i = this.length; i;) i -= 1, s = this[i], s.removeEventListener ? s.removeEventListener(t, e, !1) : s.detachEvent && s.detachEvent("on" + t, e);
            return this
        },
        empty: function() {
            for (var t, e = this.length; e;)
                for (e -= 1, t = this[e]; t.hasChildNodes();) t.removeChild(t.lastChild);
            return this
        },
        first: function() {
            return new e(this[0])
        }
    }), "function" == typeof define && define.amd ? define(function() {
        return e
    }) : (window.blueimp = window.blueimp || {}, window.blueimp.helper = e)
}(),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper"], t) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = t(window.blueimp.helper || window.jQuery))
}(function(t) {
    "use strict";

    function e(t, i) {
        return void 0 === document.body.style.maxHeight ? null : this && this.options === e.prototype.options ? t && t.length ? (this.list = t, this.num = t.length, this.initOptions(i), void this.initialize()) : void this.console.log("blueimp Gallery: No or empty list provided as first argument.", t) : new e(t, i)
    }
    return t.extend(e.prototype, {
        options: {
            container: "#blueimp-gallery",
            slidesContainer: "div",
            titleElement: "h3",
            displayClass: "blueimp-gallery-display",
            controlsClass: "blueimp-gallery-controls",
            singleClass: "blueimp-gallery-single",
            leftEdgeClass: "blueimp-gallery-left",
            rightEdgeClass: "blueimp-gallery-right",
            playingClass: "blueimp-gallery-playing",
            slideClass: "slide",
            slideLoadingClass: "slide-loading",
            slideErrorClass: "slide-error",
            slideContentClass: "slide-content",
            toggleClass: "toggle",
            prevClass: "prev",
            nextClass: "next",
            closeClass: "close",
            playPauseClass: "play-pause",
            typeProperty: "type",
            titleProperty: "title",
            urlProperty: "href",
            srcsetProperty: "urlset",
            displayTransition: !0,
            clearSlides: !0,
            stretchImages: !1,
            toggleControlsOnReturn: !0,
            toggleControlsOnSlideClick: !0,
            toggleSlideshowOnSpace: !0,
            enableKeyboardNavigation: !0,
            closeOnEscape: !0,
            closeOnSlideClick: !0,
            closeOnSwipeUpOrDown: !0,
            emulateTouchEvents: !0,
            stopTouchEventsPropagation: !1,
            hidePageScrollbars: !0,
            disableScroll: !0,
            carousel: !1,
            continuous: !0,
            unloadElements: !0,
            startSlideshow: !1,
            slideshowInterval: 5e3,
            index: 0,
            preloadRange: 2,
            transitionSpeed: 400,
            slideshowTransitionSpeed: void 0,
            event: void 0,
            onopen: void 0,
            onopened: void 0,
            onslide: void 0,
            onslideend: void 0,
            onslidecomplete: void 0,
            onclose: void 0,
            onclosed: void 0
        },
        carouselOptions: {
            hidePageScrollbars: !1,
            toggleControlsOnReturn: !1,
            toggleSlideshowOnSpace: !1,
            enableKeyboardNavigation: !1,
            closeOnEscape: !1,
            closeOnSlideClick: !1,
            closeOnSwipeUpOrDown: !1,
            disableScroll: !1,
            startSlideshow: !0
        },
        console: window.console && "function" == typeof window.console.log ? window.console : {
            log: function() {}
        },
        support: function(e) {
            function i() {
                var t, i, s = n.transition;
                document.body.appendChild(e), s && (t = s.name.slice(0, -9) + "ransform", void 0 !== e.style[t] && (e.style[t] = "translateZ(0)", i = window.getComputedStyle(e).getPropertyValue(s.prefix + "transform"), n.transform = {
                    prefix: s.prefix,
                    name: t,
                    translate: !0,
                    translateZ: !!i && "none" !== i
                })), void 0 !== e.style.backgroundSize && (n.backgroundSize = {}, e.style.backgroundSize = "contain", n.backgroundSize.contain = "contain" === window.getComputedStyle(e).getPropertyValue("background-size"), e.style.backgroundSize = "cover", n.backgroundSize.cover = "cover" === window.getComputedStyle(e).getPropertyValue("background-size")), document.body.removeChild(e)
            }
            var s, n = {
                    touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch
                },
                o = {
                    webkitTransition: {
                        end: "webkitTransitionEnd",
                        prefix: "-webkit-"
                    },
                    MozTransition: {
                        end: "transitionend",
                        prefix: "-moz-"
                    },
                    OTransition: {
                        end: "otransitionend",
                        prefix: "-o-"
                    },
                    transition: {
                        end: "transitionend",
                        prefix: ""
                    }
                };
            for (s in o)
                if (o.hasOwnProperty(s) && void 0 !== e.style[s]) {
                    n.transition = o[s], n.transition.name = s;
                    break
                }
            return document.body ? i() : t(document).on("DOMContentLoaded", i), n
        }(document.createElement("div")),
        requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
        initialize: function() {
            return this.initStartIndex(), this.initWidget() !== !1 && (this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), void(this.options.startSlideshow && this.play()))
        },
        slide: function(t, e) {
            window.clearTimeout(this.timeout);
            var i, s, n, o = this.index;
            if (o !== t && 1 !== this.num) {
                if (e || (e = this.options.transitionSpeed), this.support.transform) {
                    for (this.options.continuous || (t = this.circle(t)), i = Math.abs(o - t) / (o - t), this.options.continuous && (s = i, i = -this.positions[this.circle(t)] / this.slideWidth, i !== s && (t = -i * this.num + t)), n = Math.abs(o - t) - 1; n;) n -= 1, this.move(this.circle((t > o ? t : o) - n - 1), this.slideWidth * i, 0);
                    t = this.circle(t), this.move(o, this.slideWidth * i, e), this.move(t, 0, e), this.options.continuous && this.move(this.circle(t - i), -(this.slideWidth * i), 0)
                } else t = this.circle(t), this.animate(o * -this.slideWidth, t * -this.slideWidth, e);
                this.onslide(t)
            }
        },
        getIndex: function() {
            return this.index
        },
        getNumber: function() {
            return this.num
        },
        prev: function() {
            (this.options.continuous || this.index) && this.slide(this.index - 1)
        },
        next: function() {
            (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1)
        },
        play: function(t) {
            var e = this;
            window.clearTimeout(this.timeout), this.interval = t || this.options.slideshowInterval, this.elements[this.index] > 1 && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function(t, i) {
                e.animationFrameId = e.requestAnimationFrame.call(window, function() {
                    e.slide(t, i)
                })
            }, [this.index + 1, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass)
        },
        pause: function() {
            window.clearTimeout(this.timeout), this.interval = null, this.container.removeClass(this.options.playingClass)
        },
        add: function(t) {
            var e;
            for (t.concat || (t = Array.prototype.slice.call(t)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(t), this.num = this.list.length, this.num > 2 && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), e = this.num - t.length; e < this.num; e += 1) this.addSlide(e), this.positionSlide(e);
            this.positions.length = this.num, this.initSlides(!0)
        },
        resetSlides: function() {
            this.slidesContainer.empty(), this.unloadAllSlides(), this.slides = []
        },
        handleClose: function() {
            var t = this.options;
            this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass), t.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this)
        },
        close: function() {
            function t(i) {
                i.target === e.container[0] && (e.container.off(e.support.transition.end, t), e.handleClose())
            }
            var e = this;
            this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, t), this.container.removeClass(this.options.displayClass)) : this.handleClose()
        },
        circle: function(t) {
            return (this.num + t % this.num) % this.num
        },
        move: function(t, e, i) {
            this.translateX(t, e, i), this.positions[t] = e
        },
        translate: function(t, e, i, s) {
            var n = this.slides[t].style,
                o = this.support.transition,
                r = this.support.transform;
            n[o.name + "Duration"] = s + "ms", n[r.name] = "translate(" + e + "px, " + i + "px)" + (r.translateZ ? " translateZ(0)" : "")
        },
        translateX: function(t, e, i) {
            this.translate(t, e, 0, i)
        },
        translateY: function(t, e, i) {
            this.translate(t, 0, e, i)
        },
        animate: function(t, e, i) {
            if (!i) return void(this.slidesContainer[0].style.left = e + "px");
            var s = this,
                n = (new Date).getTime(),
                o = window.setInterval(function() {
                    var r = (new Date).getTime() - n;
                    return r > i ? (s.slidesContainer[0].style.left = e + "px", s.ontransitionend(), void window.clearInterval(o)) : void(s.slidesContainer[0].style.left = (e - t) * (Math.floor(r / i * 100) / 100) + t + "px")
                }, 4)
        },
        preventDefault: function(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        },
        stopPropagation: function(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        },
        onresize: function() {
            this.initSlides(!0)
        },
        onmousedown: function(t) {
            t.which && 1 === t.which && "VIDEO" !== t.target.nodeName && (t.preventDefault(), (t.originalEvent || t).touches = [{
                pageX: t.pageX,
                pageY: t.pageY
            }], this.ontouchstart(t))
        },
        onmousemove: function(t) {
            this.touchStart && ((t.originalEvent || t).touches = [{
                pageX: t.pageX,
                pageY: t.pageY
            }], this.ontouchmove(t))
        },
        onmouseup: function(t) {
            this.touchStart && (this.ontouchend(t), delete this.touchStart)
        },
        onmouseout: function(e) {
            if (this.touchStart) {
                var i = e.target,
                    s = e.relatedTarget;
                s && (s === i || t.contains(i, s)) || this.onmouseup(e)
            }
        },
        ontouchstart: function(t) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(t);
            var e = (t.originalEvent || t).touches[0];
            this.touchStart = {
                x: e.pageX,
                y: e.pageY,
                time: Date.now()
            }, this.isScrolling = void 0, this.touchDelta = {}
        },
        ontouchmove: function(t) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(t);
            var e, i, s = (t.originalEvent || t).touches[0],
                n = (t.originalEvent || t).scale,
                o = this.index;
            if (!(s.length > 1 || n && 1 !== n))
                if (this.options.disableScroll && t.preventDefault(), this.touchDelta = {
                        x: s.pageX - this.touchStart.x,
                        y: s.pageY - this.touchStart.y
                    }, e = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(e) < Math.abs(this.touchDelta.y)), this.isScrolling) this.translateY(o, this.touchDelta.y + this.positions[o], 0);
                else
                    for (t.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? i = [this.circle(o + 1), o, this.circle(o - 1)] : (this.touchDelta.x = e /= !o && e > 0 || o === this.num - 1 && e < 0 ? Math.abs(e) / this.slideWidth + 1 : 1, i = [o], o && i.push(o - 1), o < this.num - 1 && i.unshift(o + 1)); i.length;) o = i.pop(), this.translateX(o, e + this.positions[o], 0)
        },
        ontouchend: function(t) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(t);
            var e, i, s, n, o, r = this.index,
                a = this.options.transitionSpeed,
                l = this.slideWidth,
                h = Number(Date.now() - this.touchStart.time) < 250,
                d = h && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > l / 2,
                c = !r && this.touchDelta.x > 0 || r === this.num - 1 && this.touchDelta.x < 0,
                u = !d && this.options.closeOnSwipeUpOrDown && (h && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);
            this.options.continuous && (c = !1), e = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? u ? this.close() : this.translateY(r, 0, a) : d && !c ? (i = r + e, s = r - e, n = l * e, o = -l * e, this.options.continuous ? (this.move(this.circle(i), n, 0), this.move(this.circle(r - 2 * e), o, 0)) : i >= 0 && i < this.num && this.move(i, n, 0), this.move(r, this.positions[r] + n, a), this.move(this.circle(s), this.positions[this.circle(s)] + n, a), r = this.circle(s), this.onslide(r)) : this.options.continuous ? (this.move(this.circle(r - 1), -l, a), this.move(r, 0, a), this.move(this.circle(r + 1), l, a)) : (r && this.move(r - 1, -l, a), this.move(r, 0, a), r < this.num - 1 && this.move(r + 1, l, a))
        },
        ontouchcancel: function(t) {
            this.touchStart && (this.ontouchend(t), delete this.touchStart)
        },
        ontransitionend: function(t) {
            var e = this.slides[this.index];
            t && e !== t.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, e]))
        },
        oncomplete: function(e) {
            var i, s = e.target || e.srcElement,
                n = s && s.parentNode;
            s && n && (i = this.getNodeIndex(n), t(n).removeClass(this.options.slideLoadingClass), "error" === e.type ? (t(n).addClass(this.options.slideErrorClass), this.elements[i] = 3) : this.elements[i] = 2, s.clientHeight > this.container[0].clientHeight && (s.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === n && this.play(), this.setTimeout(this.options.onslidecomplete, [i, n]))
        },
        onload: function(t) {
            this.oncomplete(t)
        },
        onerror: function(t) {
            this.oncomplete(t)
        },
        onkeydown: function(t) {
            switch (t.which || t.keyCode) {
                case 13:
                    this.options.toggleControlsOnReturn && (this.preventDefault(t), this.toggleControls());
                    break;
                case 27:
                    this.options.closeOnEscape && (this.close(), t.stopImmediatePropagation());
                    break;
                case 32:
                    this.options.toggleSlideshowOnSpace && (this.preventDefault(t), this.toggleSlideshow());
                    break;
                case 37:
                    this.options.enableKeyboardNavigation && (this.preventDefault(t), this.prev());
                    break;
                case 39:
                    this.options.enableKeyboardNavigation && (this.preventDefault(t), this.next())
            }
        },
        handleClick: function(e) {
            function i(e) {
                return t(n).hasClass(e) || t(o).hasClass(e)
            }
            var s = this.options,
                n = e.target || e.srcElement,
                o = n.parentNode;
            i(s.toggleClass) ? (this.preventDefault(e), this.toggleControls()) : i(s.prevClass) ? (this.preventDefault(e), this.prev()) : i(s.nextClass) ? (this.preventDefault(e), this.next()) : i(s.closeClass) ? (this.preventDefault(e), this.close()) : i(s.playPauseClass) ? (this.preventDefault(e), this.toggleSlideshow()) : o === this.slidesContainer[0] ? s.closeOnSlideClick ? (this.preventDefault(e), this.close()) : s.toggleControlsOnSlideClick && (this.preventDefault(e), this.toggleControls()) : o.parentNode && o.parentNode === this.slidesContainer[0] && s.toggleControlsOnSlideClick && (this.preventDefault(e), this.toggleControls())
        },
        onclick: function(t) {
            return this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20) ? void delete this.touchDelta : this.handleClick(t)
        },
        updateEdgeClasses: function(t) {
            t ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), t === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass)
        },
        handleSlide: function(t) {
            this.options.continuous || this.updateEdgeClasses(t), this.loadElements(t), this.options.unloadElements && this.unloadElements(t), this.setTitle(t)
        },
        onslide: function(t) {
            this.index = t, this.handleSlide(t), this.setTimeout(this.options.onslide, [t, this.slides[t]])
        },
        setTitle: function(t) {
            var e = this.slides[t].firstChild.title,
                i = this.titleElement;
            i.length && (this.titleElement.empty(), e && i[0].appendChild(document.createTextNode(e)))
        },
        setTimeout: function(t, e, i) {
            var s = this;
            return t && window.setTimeout(function() {
                t.apply(s, e || [])
            }, i || 0)
        },
        imageFactory: function(e, i) {
            function s(e) {
                if (!n) {
                    if (e = {
                            type: e.type,
                            target: o
                        }, !o.parentNode) return a.setTimeout(s, [e]);
                    n = !0, t(l).off("load error", s), d && "load" === e.type && (o.style.background = 'url("' + h + '") center no-repeat', o.style.backgroundSize = d), i(e)
                }
            }
            var n, o, r, a = this,
                l = this.imagePrototype.cloneNode(!1),
                h = e,
                d = this.options.stretchImages;
            return "string" != typeof h && (h = this.getItemProperty(e, this.options.urlProperty), r = this.getItemProperty(e, this.options.titleProperty)), d === !0 && (d = "contain"), d = this.support.backgroundSize && this.support.backgroundSize[d] && d, d ? o = this.elementPrototype.cloneNode(!1) : (o = l, l.draggable = !1), r && (o.title = r), t(l).on("load error", s), l.src = h, o
        },
        createElement: function(e, i) {
            var s = e && this.getItemProperty(e, this.options.typeProperty),
                n = s && this[s.split("/")[0] + "Factory"] || this.imageFactory,
                o = e && n.call(this, e, i),
                r = this.getItemProperty(e, this.options.srcsetProperty);
            return o || (o = this.elementPrototype.cloneNode(!1), this.setTimeout(i, [{
                type: "error",
                target: o
            }])), r && o.setAttribute("srcset", r), t(o).addClass(this.options.slideContentClass), o
        },
        loadElement: function(e) {
            this.elements[e] || (this.slides[e].firstChild ? this.elements[e] = t(this.slides[e]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[e] = 1, t(this.slides[e]).addClass(this.options.slideLoadingClass), this.slides[e].appendChild(this.createElement(this.list[e], this.proxyListener))))
        },
        loadElements: function(t) {
            var e, i = Math.min(this.num, 2 * this.options.preloadRange + 1),
                s = t;
            for (e = 0; e < i; e += 1) s += e * (e % 2 === 0 ? -1 : 1), s = this.circle(s), this.loadElement(s)
        },
        unloadElements: function(t) {
            var e, i;
            for (e in this.elements) this.elements.hasOwnProperty(e) && (i = Math.abs(t - e), i > this.options.preloadRange && i + this.options.preloadRange < this.num && (this.unloadSlide(e), delete this.elements[e]))
        },
        addSlide: function(t) {
            var e = this.slidePrototype.cloneNode(!1);
            e.setAttribute("data-index", t), this.slidesContainer[0].appendChild(e), this.slides.push(e)
        },
        positionSlide: function(t) {
            var e = this.slides[t];
            e.style.width = this.slideWidth + "px", this.support.transform && (e.style.left = t * -this.slideWidth + "px", this.move(t, this.index > t ? -this.slideWidth : this.index < t ? this.slideWidth : 0, 0))
        },
        initSlides: function(e) {
            var i, s;
            for (e || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), t(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, i = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].offsetWidth, this.slideHeight = this.container[0].offsetHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", i && this.resetSlides(), s = 0; s < this.num; s += 1) i && this.addSlide(s), this.positionSlide(s);
            this.options.continuous && this.support.transform && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transform || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px")
        },
        unloadSlide: function(t) {
            var e, i;
            e = this.slides[t], i = e.firstChild, null !== i && e.removeChild(i)
        },
        unloadAllSlides: function() {
            var t, e;
            for (t = 0, e = this.slides.length; t < e; t++) this.unloadSlide(t)
        },
        toggleControls: function() {
            var t = this.options.controlsClass;
            this.container.hasClass(t) ? this.container.removeClass(t) : this.container.addClass(t)
        },
        toggleSlideshow: function() {
            this.interval ? this.pause() : this.play()
        },
        getNodeIndex: function(t) {
            return parseInt(t.getAttribute("data-index"), 10)
        },
        getNestedProperty: function(t, e) {
            return e.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function(e, i, s, n, o) {
                var r = o || i || s || n && parseInt(n, 10);
                e && t && (t = t[r])
            }), t
        },
        getDataProperty: function(e, i) {
            if (e.getAttribute) {
                var s = e.getAttribute("data-" + i.replace(/([A-Z])/g, "-$1").toLowerCase());
                if ("string" == typeof s) {
                    if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(s)) try {
                        return t.parseJSON(s)
                    } catch (t) {}
                    return s
                }
            }
        },
        getItemProperty: function(t, e) {
            var i = t[e];
            return void 0 === i && (i = this.getDataProperty(t, e), void 0 === i && (i = this.getNestedProperty(t, e))), i
        },
        initStartIndex: function() {
            var t, e = this.options.index,
                i = this.options.urlProperty;
            if (e && "number" != typeof e)
                for (t = 0; t < this.num; t += 1)
                    if (this.list[t] === e || this.getItemProperty(this.list[t], i) === this.getItemProperty(e, i)) {
                        e = t;
                        break
                    }
            this.index = this.circle(parseInt(e, 10) || 0)
        },
        initEventListeners: function() {
            function e(t) {
                var e = i.support.transition && i.support.transition.end === t.type ? "transitionend" : t.type;
                i["on" + e](t)
            }
            var i = this,
                s = this.slidesContainer;
            t(window).on("resize", e), t(document.body).on("keydown", e), this.container.on("click", e), this.support.touch ? s.on("touchstart touchmove touchend touchcancel", e) : this.options.emulateTouchEvents && this.support.transition && s.on("mousedown mousemove mouseup mouseout", e), this.support.transition && s.on(this.support.transition.end, e), this.proxyListener = e
        },
        destroyEventListeners: function() {
            var e = this.slidesContainer,
                i = this.proxyListener;
            t(window).off("resize", i), t(document.body).off("keydown", i), this.container.off("click", i), this.support.touch ? e.off("touchstart touchmove touchend touchcancel", i) : this.options.emulateTouchEvents && this.support.transition && e.off("mousedown mousemove mouseup mouseout", i), this.support.transition && e.off(this.support.transition.end, i)
        },
        handleOpen: function() {
            this.options.onopened && this.options.onopened.call(this)
        },
        initWidget: function() {
            function e(t) {
                t.target === i.container[0] && (i.container.off(i.support.transition.end, e), i.handleOpen())
            }
            var i = this;
            return this.container = t(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, e) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : (this.console.log("blueimp Gallery: Slides container not found.", this.options.slidesContainer), !1)) : (this.console.log("blueimp Gallery: Widget container not found.", this.options.container), !1)
        },
        initOptions: function(e) {
            this.options = t.extend({}, this.options), (e && e.carousel || this.options.carousel && (!e || e.carousel !== !1)) && t.extend(this.options, this.carouselOptions), t.extend(this.options, e), this.num < 3 && (this.options.continuous = !!this.options.continuous && null), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event)
        }
    }), e
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(t, e) {
    "use strict";
    t.extend(e.prototype.options, {
        fullScreen: !1
    });
    var i = e.prototype.initialize,
        s = e.prototype.close;
    return t.extend(e.prototype, {
        getFullScreenElement: function() {
            return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
        },
        requestFullScreen: function(t) {
            t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        },
        exitFullScreen: function() {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
        },
        initialize: function() {
            i.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0])
        },
        close: function() {
            this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), s.call(this)
        }
    }), e
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(t, e) {
    "use strict";
    t.extend(e.prototype.options, {
        indicatorContainer: "ol",
        activeIndicatorClass: "active",
        thumbnailProperty: "thumbnail",
        thumbnailIndicators: !0
    });
    var i = e.prototype.initSlides,
        s = e.prototype.addSlide,
        n = e.prototype.resetSlides,
        o = e.prototype.handleClick,
        r = e.prototype.handleSlide,
        a = e.prototype.handleClose;
    return t.extend(e.prototype, {
        createIndicator: function(e) {
            var i, s, n = this.indicatorPrototype.cloneNode(!1),
                o = this.getItemProperty(e, this.options.titleProperty),
                r = this.options.thumbnailProperty;
            return this.options.thumbnailIndicators && (r && (i = this.getItemProperty(e, r)), void 0 === i && (s = e.getElementsByTagName && t(e).find("img")[0], s && (i = s.src)), i && (n.style.backgroundImage = 'url("' + i + '")')), o && (n.title = o), n
        },
        addIndicator: function(t) {
            if (this.indicatorContainer.length) {
                var e = this.createIndicator(this.list[t]);
                e.setAttribute("data-index", t), this.indicatorContainer[0].appendChild(e), this.indicators.push(e)
            }
        },
        setActiveIndicator: function(e) {
            this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = t(this.indicators[e]), this.activeIndicator.addClass(this.options.activeIndicatorClass))
        },
        initSlides: function(t) {
            t || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), i.call(this, t)
        },
        addSlide: function(t) {
            s.call(this, t), this.addIndicator(t)
        },
        resetSlides: function() {
            n.call(this), this.indicatorContainer.empty(), this.indicators = []
        },
        handleClick: function(t) {
            var e = t.target || t.srcElement,
                i = e.parentNode;
            if (i === this.indicatorContainer[0]) this.preventDefault(t), this.slide(this.getNodeIndex(e));
            else {
                if (i.parentNode !== this.indicatorContainer[0]) return o.call(this, t);
                this.preventDefault(t), this.slide(this.getNodeIndex(i))
            }
        },
        handleSlide: function(t) {
            r.call(this, t), this.setActiveIndicator(t)
        },
        handleClose: function() {
            this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), a.call(this)
        }
    }), e
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(t, e) {
    "use strict";
    t.extend(e.prototype.options, {
        videoContentClass: "video-content",
        videoLoadingClass: "video-loading",
        videoPlayingClass: "video-playing",
        videoPosterProperty: "poster",
        videoSourcesProperty: "sources"
    });
    var i = e.prototype.handleSlide;
    return t.extend(e.prototype, {
        handleSlide: function(t) {
            i.call(this, t), this.playingVideo && this.playingVideo.pause()
        },
        videoFactory: function(e, i, s) {
            var n, o, r, a, l, h = this,
                d = this.options,
                c = this.elementPrototype.cloneNode(!1),
                u = t(c),
                p = [{
                    type: "error",
                    target: c
                }],
                m = s || document.createElement("video"),
                y = this.getItemProperty(e, d.urlProperty),
                f = this.getItemProperty(e, d.typeProperty),
                g = this.getItemProperty(e, d.titleProperty),
                v = this.getItemProperty(e, d.videoPosterProperty),
                C = this.getItemProperty(e, d.videoSourcesProperty);
            if (u.addClass(d.videoContentClass), g && (c.title = g), m.canPlayType)
                if (y && f && m.canPlayType(f)) m.src = y;
                else if (C)
                for (; C.length;)
                    if (o = C.shift(), y = this.getItemProperty(o, d.urlProperty), f = this.getItemProperty(o, d.typeProperty), y && f && m.canPlayType(f)) {
                        m.src = y;
                        break
                    }
            return v && (m.poster = v, n = this.imagePrototype.cloneNode(!1), t(n).addClass(d.toggleClass), n.src = v, n.draggable = !1, c.appendChild(n)), r = document.createElement("a"), r.setAttribute("target", "_blank"), s || r.setAttribute("download", g), r.href = y, m.src && (m.controls = !0, (s || t(m)).on("error", function() {
                h.setTimeout(i, p)
            }).on("pause", function() {
                m.seeking || (a = !1, u.removeClass(h.options.videoLoadingClass).removeClass(h.options.videoPlayingClass), l && h.container.addClass(h.options.controlsClass), delete h.playingVideo, h.interval && h.play())
            }).on("playing", function() {
                a = !1, u.removeClass(h.options.videoLoadingClass).addClass(h.options.videoPlayingClass), h.container.hasClass(h.options.controlsClass) ? (l = !0, h.container.removeClass(h.options.controlsClass)) : l = !1
            }).on("play", function() {
                window.clearTimeout(h.timeout), a = !0, u.addClass(h.options.videoLoadingClass), h.playingVideo = m
            }), t(r).on("click", function(t) {
                h.preventDefault(t), a ? m.pause() : m.play()
            }), c.appendChild(s && s.element || m)), c.appendChild(r), this.setTimeout(i, [{
                type: "load",
                target: c
            }]), c
        }
    }), e
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(t, e) {
    "use strict";
    if (!window.postMessage) return e;
    t.extend(e.prototype.options, {
        vimeoVideoIdProperty: "vimeo",
        vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",
        vimeoPlayerIdPrefix: "vimeo-player-",
        vimeoClickToPlay: !0
    });
    var i = e.prototype.textFactory || e.prototype.imageFactory,
        s = function(t, e, i, s) {
            this.url = t, this.videoId = e, this.playerId = i, this.clickToPlay = s, this.element = document.createElement("div"), this.listeners = {}
        },
        n = 0;
    return t.extend(s.prototype, {
        canPlayType: function() {
            return !0
        },
        on: function(t, e) {
            return this.listeners[t] = e, this
        },
        loadAPI: function() {
            function e() {
                !s && n.playOnReady && n.play(), s = !0
            }
            for (var i, s, n = this, o = "//f.vimeocdn.com/js/froogaloop2.min.js", r = document.getElementsByTagName("script"), a = r.length; a;)
                if (a -= 1, r[a].src === o) {
                    i = r[a];
                    break
                }
            i || (i = document.createElement("script"), i.src = o), t(i).on("load", e), r[0].parentNode.insertBefore(i, r[0]), /loaded|complete/.test(i.readyState) && e()
        },
        onReady: function() {
            var t = this;
            this.ready = !0, this.player.addEvent("play", function() {
                t.hasPlayed = !0, t.onPlaying()
            }), this.player.addEvent("pause", function() {
                t.onPause()
            }), this.player.addEvent("finish", function() {
                t.onPause()
            }), this.playOnReady && this.play()
        },
        onPlaying: function() {
            this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
        },
        onPause: function() {
            this.listeners.pause(), delete this.playStatus
        },
        insertIframe: function() {
            var t = document.createElement("iframe");
            t.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), t.id = this.playerId, this.element.parentNode.replaceChild(t, this.element), this.element = t
        },
        play: function() {
            var t = this;
            this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function() {
                t.onReady()
            })) : this.loadAPI())
        },
        pause: function() {
            this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
        }
    }), t.extend(e.prototype, {
        VimeoPlayer: s,
        textFactory: function(t, e) {
            var o = this.options,
                r = this.getItemProperty(t, o.vimeoVideoIdProperty);
            return r ? (void 0 === this.getItemProperty(t, o.urlProperty) && (t[o.urlProperty] = "//vimeo.com/" + r), n += 1, this.videoFactory(t, e, new s(o.vimeoPlayerUrl, r, o.vimeoPlayerIdPrefix + n, o.vimeoClickToPlay))) : i.call(this, t, e)
        }
    }), e
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function(t, e) {
    "use strict";
    if (!window.postMessage) return e;
    t.extend(e.prototype.options, {
        youTubeVideoIdProperty: "youtube",
        youTubePlayerVars: {
            wmode: "transparent"
        },
        youTubeClickToPlay: !0
    });
    var i = e.prototype.textFactory || e.prototype.imageFactory,
        s = function(t, e, i) {
            this.videoId = t, this.playerVars = e, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {}
        };
    return t.extend(s.prototype, {
        canPlayType: function() {
            return !0
        },
        on: function(t, e) {
            return this.listeners[t] = e, this
        },
        loadAPI: function() {
            var t, e = this,
                i = window.onYouTubeIframeAPIReady,
                s = "//www.youtube.com/iframe_api",
                n = document.getElementsByTagName("script"),
                o = n.length;
            for (window.onYouTubeIframeAPIReady = function() {
                    i && i.apply(this), e.playOnReady && e.play()
                }; o;)
                if (o -= 1, n[o].src === s) return;
            t = document.createElement("script"), t.src = s, n[0].parentNode.insertBefore(t, n[0])
        },
        onReady: function() {
            this.ready = !0, this.playOnReady && this.play()
        },
        onPlaying: function() {
            this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
        },
        onPause: function() {
            e.prototype.setTimeout.call(this, this.checkSeek, null, 2e3)
        },
        checkSeek: function() {
            this.stateChange !== YT.PlayerState.PAUSED && this.stateChange !== YT.PlayerState.ENDED || (this.listeners.pause(), delete this.playStatus)
        },
        onStateChange: function(t) {
            switch (t.data) {
                case YT.PlayerState.PLAYING:
                    this.hasPlayed = !0, this.onPlaying();
                    break;
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.ENDED:
                    this.onPause()
            }
            this.stateChange = t.data
        },
        onError: function(t) {
            this.listeners.error(t)
        },
        play: function() {
            var t = this;
            this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0,
                window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, {
                    videoId: this.videoId,
                    playerVars: this.playerVars,
                    events: {
                        onReady: function() {
                            t.onReady()
                        },
                        onStateChange: function(e) {
                            t.onStateChange(e)
                        },
                        onError: function(e) {
                            t.onError(e)
                        }
                    }
                })) : this.loadAPI())
        },
        pause: function() {
            this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
        }
    }), t.extend(e.prototype, {
        YouTubePlayer: s,
        textFactory: function(t, e) {
            var n = this.options,
                o = this.getItemProperty(t, n.youTubeVideoIdProperty);
            return o ? (void 0 === this.getItemProperty(t, n.urlProperty) && (t[n.urlProperty] = "//www.youtube.com/watch?v=" + o), void 0 === this.getItemProperty(t, n.videoPosterProperty) && (t[n.videoPosterProperty] = "//img.youtube.com/vi/" + o + "/maxresdefault.jpg"), this.videoFactory(t, e, new s(o, n.youTubePlayerVars, n.youTubeClickToPlay))) : i.call(this, t, e)
        }
    }), e
});
//# sourceMappingURL=blueimp-gallery.min.js.map
