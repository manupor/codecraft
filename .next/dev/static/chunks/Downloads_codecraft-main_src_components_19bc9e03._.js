(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaggeredMenu",
    ()=>StaggeredMenu,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const StaggeredMenu = ({ position = 'right', colors = [
    '#B19EEF',
    '#5227FF'
], items = [], socialItems = [], displaySocials = true, displayItemNumbering = true, className, logoUrl = '/CODECRAFT_LOGO.png', menuButtonColor = '#fff', openMenuButtonColor = '#fff', changeMenuColorOnOpen = true, accentColor = '#5227FF', isFixed = false, closeOnClickAway = true, onMenuOpen, onMenuClose })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayerElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const plusHRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const plusVRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iconRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [textLines, setTextLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Menu',
        'Close'
    ]);
    const openTlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textCycleAnimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colorTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const itemEntranceTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "StaggeredMenu.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "StaggeredMenu.useLayoutEffect.ctx": ()=>{
                    const panel = panelRef.current;
                    const preContainer = preLayersRef.current;
                    const plusH = plusHRef.current;
                    const plusV = plusVRef.current;
                    const icon = iconRef.current;
                    const textInner = textInnerRef.current;
                    if (!panel || !plusH || !plusV || !icon || !textInner) return;
                    let preLayers = [];
                    if (preContainer) {
                        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
                    }
                    preLayerElsRef.current = preLayers;
                    const offscreen = position === 'left' ? -100 : 100;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set([
                        panel,
                        ...preLayers
                    ], {
                        xPercent: offscreen
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusH, {
                        transformOrigin: '50% 50%',
                        rotate: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusV, {
                        transformOrigin: '50% 50%',
                        rotate: 90
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(icon, {
                        rotate: 0,
                        transformOrigin: '50% 50%'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(textInner, {
                        yPercent: 0
                    });
                    if (toggleBtnRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                        color: menuButtonColor
                    });
                }
            }["StaggeredMenu.useLayoutEffect.ctx"]);
            return ({
                "StaggeredMenu.useLayoutEffect": ()=>ctx.revert()
            })["StaggeredMenu.useLayoutEffect"];
        }
    }["StaggeredMenu.useLayoutEffect"], [
        menuButtonColor,
        position
    ]);
    const buildOpenTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[buildOpenTimeline]": ()=>{
            const panel_0 = panelRef.current;
            const layers = preLayerElsRef.current;
            if (!panel_0) return null;
            openTlRef.current?.kill();
            if (closeTweenRef.current) {
                closeTweenRef.current.kill();
                closeTweenRef.current = null;
            }
            itemEntranceTweenRef.current?.kill();
            const itemEls = Array.from(panel_0.querySelectorAll('.sm-panel-itemLabel'));
            const numberEls = Array.from(panel_0.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
            const socialTitle = panel_0.querySelector('.sm-socials-title');
            const socialLinks = Array.from(panel_0.querySelectorAll('.sm-socials-link'));
            const layerStates = layers.map({
                "StaggeredMenu.useCallback[buildOpenTimeline].layerStates": (el)=>({
                        el,
                        start: Number(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(el, 'xPercent'))
                    })
            }["StaggeredMenu.useCallback[buildOpenTimeline].layerStates"]);
            const panelStart = Number(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(panel_0, 'xPercent'));
            if (itemEls.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls, {
                    yPercent: 140,
                    rotate: 10
                });
            }
            if (numberEls.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls, {
                    '--sm-num-opacity': 0
                });
            }
            if (socialTitle) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle, {
                    opacity: 0
                });
            }
            if (socialLinks.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                    y: 25,
                    opacity: 0
                });
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                paused: true
            });
            layerStates.forEach({
                "StaggeredMenu.useCallback[buildOpenTimeline]": (ls, i)=>{
                    tl.fromTo(ls.el, {
                        xPercent: ls.start
                    }, {
                        xPercent: 0,
                        duration: 0.5,
                        ease: 'power4.out'
                    }, i * 0.07);
                }
            }["StaggeredMenu.useCallback[buildOpenTimeline]"]);
            const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
            const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
            const panelDuration = 0.65;
            tl.fromTo(panel_0, {
                xPercent: panelStart
            }, {
                xPercent: 0,
                duration: panelDuration,
                ease: 'power4.out'
            }, panelInsertTime);
            if (itemEls.length) {
                const itemsStartRatio = 0.15;
                const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
                tl.to(itemEls, {
                    yPercent: 0,
                    rotate: 0,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: {
                        each: 0.1,
                        from: 'start'
                    }
                }, itemsStart);
                if (numberEls.length) {
                    tl.to(numberEls, {
                        duration: 0.6,
                        ease: 'power2.out',
                        '--sm-num-opacity': 1,
                        stagger: {
                            each: 0.08,
                            from: 'start'
                        }
                    }, itemsStart + 0.1);
                }
            }
            if (socialTitle || socialLinks.length) {
                const socialsStart = panelInsertTime + panelDuration * 0.4;
                if (socialTitle) {
                    tl.to(socialTitle, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    }, socialsStart);
                }
                if (socialLinks.length) {
                    tl.to(socialLinks, {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: 'power3.out',
                        stagger: {
                            each: 0.08,
                            from: 'start'
                        },
                        onComplete: {
                            "StaggeredMenu.useCallback[buildOpenTimeline]": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                                    clearProps: 'opacity'
                                });
                            }
                        }["StaggeredMenu.useCallback[buildOpenTimeline]"]
                    }, socialsStart + 0.04);
                }
            }
            openTlRef.current = tl;
            return tl;
        }
    }["StaggeredMenu.useCallback[buildOpenTimeline]"], [
        position
    ]);
    const playOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[playOpen]": ()=>{
            if (busyRef.current) return;
            busyRef.current = true;
            const tl_0 = buildOpenTimeline();
            if (tl_0) {
                tl_0.eventCallback('onComplete', {
                    "StaggeredMenu.useCallback[playOpen]": ()=>{
                        busyRef.current = false;
                    }
                }["StaggeredMenu.useCallback[playOpen]"]);
                tl_0.play(0);
            } else {
                busyRef.current = false;
            }
        }
    }["StaggeredMenu.useCallback[playOpen]"], [
        buildOpenTimeline
    ]);
    const playClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[playClose]": ()=>{
            openTlRef.current?.kill();
            openTlRef.current = null;
            itemEntranceTweenRef.current?.kill();
            const panel_1 = panelRef.current;
            const layers_0 = preLayerElsRef.current;
            if (!panel_1) return;
            const all = [
                ...layers_0,
                panel_1
            ];
            closeTweenRef.current?.kill();
            const offscreen_0 = position === 'left' ? -100 : 100;
            closeTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(all, {
                xPercent: offscreen_0,
                duration: 0.32,
                ease: 'power3.in',
                overwrite: 'auto',
                onComplete: {
                    "StaggeredMenu.useCallback[playClose]": ()=>{
                        const itemEls_0 = Array.from(panel_1.querySelectorAll('.sm-panel-itemLabel'));
                        if (itemEls_0.length) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls_0, {
                                yPercent: 140,
                                rotate: 10
                            });
                        }
                        const numberEls_0 = Array.from(panel_1.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
                        if (numberEls_0.length) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls_0, {
                                '--sm-num-opacity': 0
                            });
                        }
                        const socialTitle_0 = panel_1.querySelector('.sm-socials-title');
                        const socialLinks_0 = Array.from(panel_1.querySelectorAll('.sm-socials-link'));
                        if (socialTitle_0) __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle_0, {
                            opacity: 0
                        });
                        if (socialLinks_0.length) __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks_0, {
                            y: 25,
                            opacity: 0
                        });
                        busyRef.current = false;
                    }
                }["StaggeredMenu.useCallback[playClose]"]
            });
        }
    }["StaggeredMenu.useCallback[playClose]"], [
        position
    ]);
    const animateIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateIcon]": (opening)=>{
            const icon_0 = iconRef.current;
            if (!icon_0) return;
            spinTweenRef.current?.kill();
            if (opening) {
                spinTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(icon_0, {
                    rotate: 225,
                    duration: 0.8,
                    ease: 'power4.out',
                    overwrite: 'auto'
                });
            } else {
                spinTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(icon_0, {
                    rotate: 0,
                    duration: 0.35,
                    ease: 'power3.inOut',
                    overwrite: 'auto'
                });
            }
        }
    }["StaggeredMenu.useCallback[animateIcon]"], []);
    const animateColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateColor]": (opening_0)=>{
            const btn = toggleBtnRef.current;
            if (!btn) return;
            colorTweenRef.current?.kill();
            if (changeMenuColorOnOpen) {
                const targetColor = opening_0 ? openMenuButtonColor : menuButtonColor;
                colorTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                    color: targetColor,
                    delay: 0.18,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(btn, {
                    color: menuButtonColor
                });
            }
        }
    }["StaggeredMenu.useCallback[animateColor]"], [
        openMenuButtonColor,
        menuButtonColor,
        changeMenuColorOnOpen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "StaggeredMenu.useEffect": ()=>{
            if (toggleBtnRef.current) {
                if (changeMenuColorOnOpen) {
                    const targetColor_0 = openRef.current ? openMenuButtonColor : menuButtonColor;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                        color: targetColor_0
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                        color: menuButtonColor
                    });
                }
            }
        }
    }["StaggeredMenu.useEffect"], [
        changeMenuColorOnOpen,
        menuButtonColor,
        openMenuButtonColor
    ]);
    const animateText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateText]": (opening_1)=>{
            const inner = textInnerRef.current;
            if (!inner) return;
            textCycleAnimRef.current?.kill();
            const currentLabel = opening_1 ? 'Menu' : 'Close';
            const targetLabel = opening_1 ? 'Close' : 'Menu';
            const cycles = 3;
            const seq = [
                currentLabel
            ];
            let last = currentLabel;
            for(let i_0 = 0; i_0 < cycles; i_0++){
                last = last === 'Menu' ? 'Close' : 'Menu';
                seq.push(last);
            }
            if (last !== targetLabel) seq.push(targetLabel);
            seq.push(targetLabel);
            setTextLines(seq);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(inner, {
                yPercent: 0
            });
            const lineCount = seq.length;
            const finalShift = (lineCount - 1) / lineCount * 100;
            textCycleAnimRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(inner, {
                yPercent: -finalShift,
                duration: 0.5 + lineCount * 0.07,
                ease: 'power4.out'
            });
        }
    }["StaggeredMenu.useCallback[animateText]"], []);
    const toggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[toggleMenu]": ()=>{
            const target = !openRef.current;
            openRef.current = target;
            setOpen(target);
            if (target) {
                onMenuOpen?.();
                playOpen();
            } else {
                onMenuClose?.();
                playClose();
            }
            animateIcon(target);
            animateColor(target);
            animateText(target);
        }
    }["StaggeredMenu.useCallback[toggleMenu]"], [
        playOpen,
        playClose,
        animateIcon,
        animateColor,
        animateText,
        onMenuOpen,
        onMenuClose
    ]);
    const closeMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[closeMenu]": ()=>{
            if (openRef.current) {
                openRef.current = false;
                setOpen(false);
                onMenuClose?.();
                playClose();
                animateIcon(false);
                animateColor(false);
                animateText(false);
            }
        }
    }["StaggeredMenu.useCallback[closeMenu]"], [
        playClose,
        animateIcon,
        animateColor,
        animateText,
        onMenuClose
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "StaggeredMenu.useEffect": ()=>{
            if (!closeOnClickAway || !open) return;
            const handleClickOutside = {
                "StaggeredMenu.useEffect.handleClickOutside": (event)=>{
                    if (panelRef.current && !panelRef.current.contains(event.target) && toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)) {
                        closeMenu();
                    }
                }
            }["StaggeredMenu.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "StaggeredMenu.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["StaggeredMenu.useEffect"];
        }
    }["StaggeredMenu.useEffect"], [
        closeOnClickAway,
        open,
        closeMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (className ? className + ' ' : '') + 'staggered-menu-wrapper' + (isFixed ? ' fixed-wrapper' : ''),
        style: accentColor ? {
            ['--sm-accent']: accentColor
        } : undefined,
        "data-position": position,
        "data-open": open || undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: preLayersRef,
                className: "sm-prelayers",
                "aria-hidden": "true",
                children: (()=>{
                    const raw = colors && colors.length ? colors.slice(0, 4) : [
                        '#1e1e22',
                        '#35353c'
                    ];
                    let arr = [
                        ...raw
                    ];
                    if (arr.length >= 3) {
                        const mid = Math.floor(arr.length / 2);
                        arr.splice(mid, 1);
                    }
                    return arr.map((c, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm-prelayer",
                            style: {
                                background: c
                            }
                        }, i_1, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                            lineNumber: 410,
                            columnNumber: 36
                        }, ("TURBOPACK compile-time value", void 0)));
                })()
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "staggered-menu-header",
                "aria-label": "Main navigation header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm-logo",
                        "aria-label": "Logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logoUrl || '/CODECRAFT_LOGO.png',
                                alt: "CodeCraft",
                                className: "sm-logo-img",
                                draggable: false,
                                width: 110,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: toggleBtnRef,
                        className: "sm-toggle",
                        "aria-label": open ? 'Close menu' : 'Open menu',
                        "aria-expanded": open,
                        "aria-controls": "staggered-menu-panel",
                        onClick: toggleMenu,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: textWrapRef,
                                className: "sm-toggle-textWrap",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: textInnerRef,
                                    className: "sm-toggle-textInner",
                                    children: textLines.map((l, i_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm-toggle-line",
                                            children: l
                                        }, i_2, false, {
                                            fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                            lineNumber: 424,
                                            columnNumber: 42
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: iconRef,
                                className: "sm-icon",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: plusHRef,
                                        className: "sm-icon-line"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: plusVRef,
                                        className: "sm-icon-line sm-icon-line-v"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "staggered-menu-panel",
                ref: panelRef,
                className: "staggered-menu-panel",
                "aria-hidden": !open,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm-panel-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "sm-panel-list",
                            role: "list",
                            "data-numbering": displayItemNumbering || undefined,
                            children: items && items.length ? items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "sm-panel-itemWrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "sm-panel-item",
                                        href: it.link,
                                        "aria-label": it.ariaLabel,
                                        "data-index": idx + 1,
                                        onClick: ()=>closeMenu(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm-panel-itemLabel",
                                            children: it.label
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                            lineNumber: 441,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                        lineNumber: 440,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, it.label + idx, false, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 439,
                                    columnNumber: 61
                                }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "sm-panel-itemWrap",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sm-panel-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm-panel-itemLabel",
                                        children: "No items"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                        lineNumber: 445,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 444,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                lineNumber: 443,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        displaySocials && socialItems && socialItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm-socials",
                            "aria-label": "Social links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "sm-socials-title",
                                    children: "Socials"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "sm-socials-list",
                                    role: "list",
                                    children: socialItems.map((s, i_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "sm-socials-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: s.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "sm-socials-link",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                                lineNumber: 453,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, s.label + i_3, false, {
                                            fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                            lineNumber: 452,
                                            columnNumber: 46
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                            lineNumber: 449,
                            columnNumber: 71
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx",
        lineNumber: 399,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StaggeredMenu, "NUrbJG76cb1TBA/TbGQQV+2q5C4=");
_c = StaggeredMenu;
const __TURBOPACK__default__export__ = StaggeredMenu;
var _c;
__turbopack_context__.k.register(_c, "StaggeredMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/NavMenuWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavMenuWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/StaggeredMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const menuItems = [
    {
        label: 'Home',
        ariaLabel: 'Go to home',
        link: '#'
    },
    {
        label: 'About',
        ariaLabel: 'Learn about us',
        link: '#about'
    },
    {
        label: 'Services',
        ariaLabel: 'View our services',
        link: '#services'
    },
    {
        label: 'Authority',
        ariaLabel: 'See our track record',
        link: '#authority'
    },
    {
        label: 'Contact',
        ariaLabel: 'Get in touch',
        link: '#contact'
    }
];
function NavMenuWrapper() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "8db2c185f9eb6477d29ebff16810d354d15e0f1c20366cee32abe25af7cbcc4d") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8db2c185f9eb6477d29ebff16810d354d15e0f1c20366cee32abe25af7cbcc4d";
    }
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "NavMenuWrapper[useEffect()]": ()=>{
                const onScroll = {
                    "NavMenuWrapper[useEffect() > onScroll]": ()=>setScrolled(window.scrollY > 20)
                }["NavMenuWrapper[useEffect() > onScroll]"];
                window.addEventListener("scroll", onScroll);
                return ()=>window.removeEventListener("scroll", onScroll);
            }
        })["NavMenuWrapper[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = scrolled ? 1 : 0;
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-0 left-0 right-0 h-24 bg-black/80 backdrop-blur-xl border-b border-white/5 z-30 transition-opacity duration-300",
            style: {
                opacity: t2
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/NavMenuWrapper.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            position: "right",
            items: menuItems,
            displaySocials: false,
            displayItemNumbering: false,
            menuButtonColor: "#ffffff",
            openMenuButtonColor: "#fff",
            changeMenuColorOnOpen: true,
            colors: [
                "transparent",
                "transparent"
            ],
            logoUrl: "/codecraftt-logo.png",
            accentColor: "#5227FF",
            isFixed: true
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/NavMenuWrapper.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t3,
                t4
            ]
        }, void 0, true);
        $[6] = t3;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_s(NavMenuWrapper, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = NavMenuWrapper;
var _c;
__turbopack_context__.k.register(_c, "NavMenuWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/FloatingLines.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const vertexShader = `
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(100.0, 30.0, 120.0) / 255.0;
const vec3 BLUE  = vec3(20.0,  30.0, 80.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.3;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`;
const MAX_GRADIENT_STOPS = 8;
function hexToVec3(hex) {
    let value = hex.trim();
    if (value.startsWith('#')) {
        value = value.slice(1);
    }
    let r = 255;
    let g = 255;
    let b = 255;
    if (value.length === 3) {
        r = parseInt(value[0] + value[0], 16);
        g = parseInt(value[1] + value[1], 16);
        b = parseInt(value[2] + value[2], 16);
    } else if (value.length === 6) {
        r = parseInt(value.slice(0, 2), 16);
        g = parseInt(value.slice(2, 4), 16);
        b = parseInt(value.slice(4, 6), 16);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](r / 255, g / 255, b / 255);
}
function FloatingLines({ linesGradient, enabledWaves = [
    'top',
    'middle',
    'bottom'
], lineCount = [
    6
], lineDistance = [
    5
], topWavePosition, middleWavePosition, bottomWavePosition = {
    x: 2.0,
    y: -0.7,
    rotate: -1
}, animationSpeed = 1, interactive = true, bendRadius = 5.0, bendStrength = -0.5, mouseDamping = 0.05, parallax = true, parallaxStrength = 0.2, mixBlendMode = 'screen' }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1000, -1000));
    const currentMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1000, -1000));
    const targetInfluenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentInfluenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const targetParallaxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0));
    const currentParallaxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0));
    const getLineCount = (waveType)=>{
        if (typeof lineCount === 'number') return lineCount;
        if (!enabledWaves.includes(waveType)) return 0;
        const index = enabledWaves.indexOf(waveType);
        return lineCount[index] ?? 6;
    };
    const getLineDistance = (waveType)=>{
        if (typeof lineDistance === 'number') return lineDistance;
        if (!enabledWaves.includes(waveType)) return 0.1;
        const index = enabledWaves.indexOf(waveType);
        return lineDistance[index] ?? 0.1;
    };
    const topLineCount = enabledWaves.includes('top') ? getLineCount('top') : 0;
    const middleLineCount = enabledWaves.includes('middle') ? getLineCount('middle') : 0;
    const bottomLineCount = enabledWaves.includes('bottom') ? getLineCount('bottom') : 0;
    const topLineDistance = enabledWaves.includes('top') ? getLineDistance('top') * 0.01 : 0.01;
    const middleLineDistance = enabledWaves.includes('middle') ? getLineDistance('middle') * 0.01 : 0.01;
    const bottomLineDistance = enabledWaves.includes('bottom') ? getLineDistance('bottom') * 0.01 : 0.01;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingLines.useEffect": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](-1, 1, 1, -1, 0, 1);
            camera.position.z = 1;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: false
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.domElement.style.width = '100%';
            renderer.domElement.style.height = '100%';
            container.appendChild(renderer.domElement);
            const uniforms = {
                iTime: {
                    value: 0
                },
                iResolution: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1)
                },
                animationSpeed: {
                    value: animationSpeed
                },
                enableTop: {
                    value: enabledWaves.includes('top')
                },
                enableMiddle: {
                    value: enabledWaves.includes('middle')
                },
                enableBottom: {
                    value: enabledWaves.includes('bottom')
                },
                topLineCount: {
                    value: topLineCount
                },
                middleLineCount: {
                    value: middleLineCount
                },
                bottomLineCount: {
                    value: bottomLineCount
                },
                topLineDistance: {
                    value: topLineDistance
                },
                middleLineDistance: {
                    value: middleLineDistance
                },
                bottomLineDistance: {
                    value: bottomLineDistance
                },
                topWavePosition: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](topWavePosition?.x ?? 10.0, topWavePosition?.y ?? 0.5, topWavePosition?.rotate ?? -0.4)
                },
                middleWavePosition: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](middleWavePosition?.x ?? 5.0, middleWavePosition?.y ?? 0.0, middleWavePosition?.rotate ?? 0.2)
                },
                bottomWavePosition: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](bottomWavePosition?.x ?? 2.0, bottomWavePosition?.y ?? -0.7, bottomWavePosition?.rotate ?? 0.4)
                },
                iMouse: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1000, -1000)
                },
                interactive: {
                    value: interactive
                },
                bendRadius: {
                    value: bendRadius
                },
                bendStrength: {
                    value: bendStrength
                },
                bendInfluence: {
                    value: 0
                },
                parallax: {
                    value: parallax
                },
                parallaxStrength: {
                    value: parallaxStrength
                },
                parallaxOffset: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
                },
                lineGradient: {
                    value: Array.from({
                        length: MAX_GRADIENT_STOPS
                    }, {
                        "FloatingLines.useEffect": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1)
                    }["FloatingLines.useEffect"])
                },
                lineGradientCount: {
                    value: 0
                }
            };
            if (linesGradient && linesGradient.length > 0) {
                const stops = linesGradient.slice(0, MAX_GRADIENT_STOPS);
                uniforms.lineGradientCount.value = stops.length;
                stops.forEach({
                    "FloatingLines.useEffect": (hex, i)=>{
                        const color = hexToVec3(hex);
                        uniforms.lineGradient.value[i].set(color.x, color.y, color.z);
                    }
                }["FloatingLines.useEffect"]);
            }
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms,
                vertexShader,
                fragmentShader
            });
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2);
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
            scene.add(mesh);
            const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
            const setSize = {
                "FloatingLines.useEffect.setSize": ()=>{
                    const width = container.clientWidth || 1;
                    const height = container.clientHeight || 1;
                    renderer.setSize(width, height, false);
                    const canvasWidth = renderer.domElement.width;
                    const canvasHeight = renderer.domElement.height;
                    uniforms.iResolution.value.set(canvasWidth, canvasHeight, 1);
                }
            }["FloatingLines.useEffect.setSize"];
            setSize();
            const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(setSize) : null;
            if (ro) {
                ro.observe(container);
            }
            const handlePointerMove = {
                "FloatingLines.useEffect.handlePointerMove": (event)=>{
                    const rect = renderer.domElement.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    const dpr = renderer.getPixelRatio();
                    targetMouseRef.current.set(x * dpr, (rect.height - y) * dpr);
                    targetInfluenceRef.current = 1.0;
                    if (parallax) {
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const offsetX = (x - centerX) / rect.width;
                        const offsetY = -(y - centerY) / rect.height;
                        targetParallaxRef.current.set(offsetX * parallaxStrength, offsetY * parallaxStrength);
                    }
                }
            }["FloatingLines.useEffect.handlePointerMove"];
            const handlePointerLeave = {
                "FloatingLines.useEffect.handlePointerLeave": ()=>{
                    targetInfluenceRef.current = 0.0;
                }
            }["FloatingLines.useEffect.handlePointerLeave"];
            if (interactive) {
                renderer.domElement.addEventListener('pointermove', handlePointerMove);
                renderer.domElement.addEventListener('pointerleave', handlePointerLeave);
            }
            let raf = 0;
            const renderLoop = {
                "FloatingLines.useEffect.renderLoop": ()=>{
                    uniforms.iTime.value = clock.getElapsedTime();
                    if (interactive) {
                        currentMouseRef.current.lerp(targetMouseRef.current, mouseDamping);
                        uniforms.iMouse.value.copy(currentMouseRef.current);
                        currentInfluenceRef.current += (targetInfluenceRef.current - currentInfluenceRef.current) * mouseDamping;
                        uniforms.bendInfluence.value = currentInfluenceRef.current;
                    }
                    if (parallax) {
                        currentParallaxRef.current.lerp(targetParallaxRef.current, mouseDamping);
                        uniforms.parallaxOffset.value.copy(currentParallaxRef.current);
                    }
                    renderer.render(scene, camera);
                    raf = requestAnimationFrame(renderLoop);
                }
            }["FloatingLines.useEffect.renderLoop"];
            renderLoop();
            return ({
                "FloatingLines.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    if (ro) {
                        ro.disconnect();
                    }
                    if (interactive) {
                        renderer.domElement.removeEventListener('pointermove', handlePointerMove);
                        renderer.domElement.removeEventListener('pointerleave', handlePointerLeave);
                    }
                    geometry.dispose();
                    material.dispose();
                    renderer.dispose();
                    if (renderer.domElement.parentElement) {
                        renderer.domElement.parentElement.removeChild(renderer.domElement);
                    }
                }
            })["FloatingLines.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FloatingLines.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "floating-lines-container",
        style: {
            mixBlendMode: mixBlendMode
        }
    }, void 0, false, {
        fileName: "[project]/Downloads/codecraft-main/src/components/FloatingLines.tsx",
        lineNumber: 462,
        columnNumber: 10
    }, this);
}
_s(FloatingLines, "JeFiEeHCpJ9t4iS96WrDDb1RN5M=");
_c = FloatingLines;
var _c;
__turbopack_context__.k.register(_c, "FloatingLines");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/GlobalBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$FloatingLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/FloatingLines.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function GlobalBackground() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "f717ef526d93c9dd964a32c531e510a29f4618ca821326d18215bb489072b081") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f717ef526d93c9dd964a32c531e510a29f4618ca821326d18215bb489072b081";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$FloatingLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                enabledWaves: [
                    "top",
                    "middle",
                    "bottom"
                ],
                lineCount: 5,
                lineDistance: 5,
                bendRadius: 5,
                bendStrength: -0.5,
                interactive: true,
                parallax: true
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/GlobalBackground.tsx",
                lineNumber: 15,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/GlobalBackground.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = GlobalBackground;
var _c;
__turbopack_context__.k.register(_c, "GlobalBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
"use client";
;
;
;
;
const stats = [
    {
        value: "120+",
        label: "Projects Shipped"
    },
    {
        value: "5+",
        label: "Years Building"
    },
    {
        value: "3",
        label: "Countries Served"
    },
    {
        value: "100%",
        label: "Remote-Ready"
    }
];
const tech = [
    "React Native",
    "Next.js",
    "Node.js",
    "Flutter",
    "Python",
    "AWS",
    "OpenAI",
    "TypeScript"
];
function Hero() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "75ccbbe4c9ff8ed4519296864647044505b26b33e805cd717574b432ef4ddf2b") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "75ccbbe4c9ff8ed4519296864647044505b26b33e805cd717574b432ef4ddf2b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#10B981]/10 blur-[120px]"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 30,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px]"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 30,
                    columnNumber: 204
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/3 -right-32 w-[350px] h-[350px] rounded-full bg-violet-600/8 blur-[100px]"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 30,
                    columnNumber: 311
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 16
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        t3 = {
            duration: 0.6,
            ease: "easeOut"
        };
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            animate: t2,
            transition: t3,
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/5 text-[#10B981] text-xs sm:text-sm font-medium mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    size: 13,
                    className: "shrink-0"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 61,
                    columnNumber: 223
                }, this),
                "Trusted by 50+ startups & companies in the US and Latin America"
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0,
            y: 24
        };
        t6 = {
            opacity: 1,
            y: 0
        };
        t7 = {
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut"
        };
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            initial: t5,
            animate: t6,
            transition: t7,
            className: "text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]",
            children: [
                "Custom Software",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 93,
                    columnNumber: 175
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "gradient-text",
                    children: "Built to Scale."
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 93,
                    columnNumber: 181
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            initial: {
                opacity: 0,
                y: 24
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut"
            },
            className: "mt-6 text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed",
            children: "SaaS platforms, AI-powered apps, and high-performance websites — designed and engineered by a senior team in Costa Rica, built for businesses across the US and Latin America."
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    let t11;
    let t12;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            opacity: 0,
            y: 16
        };
        t11 = {
            opacity: 1,
            y: 0
        };
        t12 = {
            duration: 0.7,
            delay: 0.35,
            ease: "easeOut"
        };
        $[11] = t10;
        $[12] = t11;
        $[13] = t12;
    } else {
        t10 = $[11];
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t10,
            animate: t11,
            transition: t12,
            className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#contact",
                    className: "group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-[#10B981]/30 transition-all duration-200",
                    children: [
                        "Start Your Project",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 17,
                            className: "group-hover:translate-x-1 transition-transform"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                            lineNumber: 142,
                            columnNumber: 414
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 142,
                    columnNumber: 146
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#services",
                    className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white font-medium text-sm sm:text-base hover:bg-white/5 hover:border-white/20 transition-all duration-200",
                    children: "Explore Services"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 142,
                    columnNumber: 501
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    let t15;
    let t16;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            opacity: 0,
            y: 16
        };
        t15 = {
            opacity: 1,
            y: 0
        };
        t16 = {
            duration: 0.7,
            delay: 0.5
        };
        $[15] = t14;
        $[16] = t15;
        $[17] = t16;
    } else {
        t14 = $[15];
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t14,
            animate: t15,
            transition: t16,
            className: "mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden max-w-2xl mx-auto",
            children: stats.map(_HeroStatsMap)
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    let t19;
    let t20;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            opacity: 0
        };
        t19 = {
            opacity: 1
        };
        t20 = {
            duration: 1,
            delay: 0.7
        };
        $[19] = t18;
        $[20] = t19;
        $[21] = t20;
    } else {
        t18 = $[19];
        t19 = $[20];
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home",
            "aria-label": "CodeCraftt \u2014 Custom Software Development & AI Solutions",
            className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 text-center",
                    children: [
                        t4,
                        t8,
                        t9,
                        t13,
                        t17,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: t18,
                            animate: t19,
                            transition: t20,
                            className: "mt-10 flex flex-wrap items-center justify-center gap-2",
                            children: tech.map(_HeroTechMap)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                            lineNumber: 202,
                            columnNumber: 317
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 202,
                    columnNumber: 214
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    return t21;
}
_c = Hero;
function _HeroTechMap(t) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-xs font-medium",
        children: t
    }, t, false, {
        fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
        lineNumber: 210,
        columnNumber: 10
    }, this);
}
function _HeroStatsMap(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black/80 px-6 py-5 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2xl sm:text-3xl font-bold text-white",
                children: s.value
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                lineNumber: 213,
                columnNumber: 75
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-zinc-500 mt-1",
                children: s.label
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
                lineNumber: 213,
                columnNumber: 145
            }, this)
        ]
    }, s.label, true, {
        fileName: "[project]/Downloads/codecraft-main/src/components/Hero.tsx",
        lineNumber: 213,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/ClientLogos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLogos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const clients = [
    {
        name: "HiHub Global",
        logo: "/logos/logo-hihub-white.png",
        href: "https://hihubglobal.com"
    },
    {
        name: "Olavivo",
        logo: "/logos/OLAVIVO.png",
        href: "https://olavivo.com"
    },
    {
        name: "Riviera CR",
        logo: "/logos/logo-riviera.png",
        href: "https://rivieracr.net"
    },
    {
        name: "Reserva",
        logo: "/logos/Logo-Reserva-08_GOLD-e1718579433972-768x779.png",
        href: "#"
    },
    {
        name: "Ruby Wager",
        logo: "/logos/Ruby-Wager-Logo.png",
        href: "#"
    },
    {
        name: "AWS",
        logo: "/logos/aws.svg",
        href: "#"
    }
];
function ClientLogos() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "28590bbc42d1ebd520ea34dd100f243ff541055465eb8b00dcd005123dbc8dda") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "28590bbc42d1ebd520ea34dd100f243ff541055465eb8b00dcd005123dbc8dda";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            initial: {
                opacity: 0,
                y: 16
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5
            },
            viewport: {
                once: true
            },
            className: "text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-10",
            children: "Trusted by"
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/ClientLogos.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 20
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        t3 = {
            duration: 0.6,
            delay: 0.1
        };
        t4 = {
            once: true
        };
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 border-t border-white/5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: t1,
                        whileInView: t2,
                        transition: t3,
                        viewport: t4,
                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-xl overflow-hidden",
                        children: clients.map(_ClientLogosClientsMap)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/ClientLogos.tsx",
                        lineNumber: 87,
                        columnNumber: 113
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/ClientLogos.tsx",
                lineNumber: 87,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/ClientLogos.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = ClientLogos;
function _ClientLogosClientsMap(client, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        href: client.href,
        target: client.href !== "#" ? "_blank" : undefined,
        rel: "noopener noreferrer",
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        transition: {
            duration: 0.4,
            delay: i * 0.07
        },
        viewport: {
            once: true
        },
        className: "group flex items-center justify-center bg-[#0a0a0a] hover:bg-[#10B981]/5 transition-colors duration-300 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: client.logo,
            alt: client.name,
            className: "max-w-[110px] max-h-[44px] w-auto h-auto object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-300 brightness-0 invert"
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/ClientLogos.tsx",
            lineNumber: 104,
            columnNumber: 126
        }, this)
    }, client.name, false, {
        fileName: "[project]/Downloads/codecraft-main/src/components/ClientLogos.tsx",
        lineNumber: 95,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ClientLogos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudCog$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/cloud-cog.js [app-client] (ecmascript) <export default as CloudCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcw>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        title: "Mobile App Development",
        description: "Custom iOS and Android applications designed for performance, usability, and scalability. Built with React Native and Flutter."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        title: "Website Development",
        description: "High-performance websites designed to convert visitors into customers. Fast, responsive, and optimized for growth."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"],
        title: "AI Solutions",
        description: "We integrate artificial intelligence into real business workflows. Transform your business with intelligent systems."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudCog$3e$__["CloudCog"],
        title: "SaaS Platforms",
        description: "Complete SaaS product development from concept to launch with cloud infrastructure and scalability."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"],
        title: "Digital Products",
        description: "End-to-end product development for startups and companies ready to innovate."
    }
];
function Services() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "c62ef4233d3beb0de142966cf99fff294167493ce601d2a592617cc7279baaf9") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c62ef4233d3beb0de142966cf99fff294167493ce601d2a592617cc7279baaf9";
    }
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 40
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== isInView) {
        t3 = isInView ? {
            opacity: 1,
            y: 0
        } : {};
        $[4] = isInView;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            duration: 0.7
        };
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-indigo-400 tracking-wider uppercase mb-4",
            children: "Services"
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
            children: [
                "What we ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "gradient-text",
                    children: "build"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                    lineNumber: 95,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-base sm:text-lg text-zinc-200 max-w-xl mx-auto",
            children: "We help businesses move from concept → product → scale."
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[8] = t6;
        $[9] = t7;
    } else {
        t6 = $[8];
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t3) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            animate: t3,
            transition: t4,
            className: "text-center mb-16",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== isInView) {
        t9 = services.slice(0, 3).map({
            "Services[(anonymous)()]": (service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    animate: isInView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.6,
                        delay: 0.1 * i
                    },
                    className: "group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                size: 24,
                                className: "text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                                lineNumber: 123,
                                columnNumber: 333
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                            lineNumber: 123,
                            columnNumber: 180
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white",
                            children: service.title
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                            lineNumber: 123,
                            columnNumber: 393
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-zinc-200 leading-relaxed",
                            children: service.description
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                            lineNumber: 123,
                            columnNumber: 486
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                            lineNumber: 123,
                            columnNumber: 577
                        }, this)
                    ]
                }, service.title, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                    lineNumber: 114,
                    columnNumber: 50
                }, this)
        }["Services[(anonymous)()]"]);
        $[12] = isInView;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
            children: t9
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== isInView) {
        t11 = services.slice(3).map({
            "Services[(anonymous)()]": (service_0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    animate: isInView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.6,
                        delay: 0.1 * (i_0 + 3)
                    },
                    className: "group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service_0.icon, {
                                size: 24,
                                className: "text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                                lineNumber: 150,
                                columnNumber: 388
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                            lineNumber: 150,
                            columnNumber: 235
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white",
                            children: service_0.title
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                            lineNumber: 150,
                            columnNumber: 450
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-zinc-200 leading-relaxed",
                            children: service_0.description
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                            lineNumber: 150,
                            columnNumber: 545
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                            lineNumber: 150,
                            columnNumber: 638
                        }, this)
                    ]
                }, service_0.title, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                    lineNumber: 141,
                    columnNumber: 54
                }, this)
        }["Services[(anonymous)()]"]);
        $[16] = isInView;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center gap-6 mt-6",
            children: t11
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t10 || $[21] !== t12 || $[22] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "services",
            className: "relative py-12 lg:py-16",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-7xl mx-auto px-6 lg:px-8",
                    ref: ref,
                    children: [
                        t8,
                        t10,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
                    lineNumber: 167,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Services.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t12;
        $[22] = t8;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    return t13;
}
_s(Services, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
"use client";
;
;
;
;
function HowItWorks() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "ba2fc29aa8be121cfcdcc590dcb845a0d851d8e27e5ba316e274790b7c2a9050") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ba2fc29aa8be121cfcdcc590dcb845a0d851d8e27e5ba316e274790b7c2a9050";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                title: "Define the Vision",
                description: "Tell us about your product idea. We analyze your business model, target audience, product features, and AI opportunities."
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                title: "Build the Product",
                description: "Our team develops your solution using modern frameworks and cloud technologies. Fast, scalable, and secure."
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
                title: "Launch & Scale",
                description: "We deploy your product to the cloud and support its growth with updates, AI integrations, and performance optimization."
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const steps = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 20
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        t3 = {
            duration: 0.6
        };
        t4 = {
            once: true
        };
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            whileInView: t2,
            transition: t3,
            viewport: t4,
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-5xl font-bold text-white mb-4",
                    children: "Our Development Process"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
                    lineNumber: 65,
                    columnNumber: 112
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-zinc-400 max-w-2xl mx-auto",
                    children: "From idea to deployment — a streamlined process designed for speed and quality."
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
                    lineNumber: 65,
                    columnNumber: 203
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-8",
                        children: steps.map(_HowItWorksStepsMap)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
                        lineNumber: 72,
                        columnNumber: 89
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
                lineNumber: 72,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = HowItWorks;
function _HowItWorksStepsMap(step, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: index * 0.2
        },
        viewport: {
            once: true
        },
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#8B5CF6]/50 transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(step.icon, {
                        size: 48,
                        className: "text-[#8B5CF6]"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
                        lineNumber: 91,
                        columnNumber: 187
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
                    lineNumber: 91,
                    columnNumber: 165
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-6 right-6 text-6xl font-bold text-white/5",
                    children: index + 1
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
                    lineNumber: 91,
                    columnNumber: 243
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-white mb-3",
                    children: step.title
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
                    lineNumber: 91,
                    columnNumber: 332
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-400 leading-relaxed",
                    children: step.description
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
                    lineNumber: 91,
                    columnNumber: 399
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 91,
            columnNumber: 27
        }, this)
    }, index, false, {
        fileName: "[project]/Downloads/codecraft-main/src/components/HowItWorks.tsx",
        lineNumber: 80,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ContactForm() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    projectType: "",
                    message: ""
                });
                setTimeout(()=>setIsSubmitted(false), 5000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error sending message. Please try again or email us directly at manu@manuportuguez.com");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleChange = (e_0)=>{
        setFormData({
            ...formData,
            [e_0.target.name]: e_0.target.value
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-20 bg-gradient-to-b from-black to-zinc-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-5xl font-bold text-white mb-4",
                            children: "Get a Quote"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-zinc-400 max-w-2xl mx-auto",
                            children: "Tell us about your project and we'll get back to you within 24 hours."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.2
                    },
                    viewport: {
                        once: true
                    },
                    className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8",
                    children: isSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                size: 64,
                                className: "text-violet-500 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-white mb-2",
                                children: "Message Sent!"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400",
                                children: "We'll get back to you within 24 hours at the email you provided."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                        lineNumber: 86,
                        columnNumber: 26
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block text-sm font-medium text-zinc-300 mb-2",
                                                children: "Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                required: true,
                                                value: formData.name,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition",
                                                placeholder: "Your name"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-medium text-zinc-300 mb-2",
                                                children: "Email *"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                required: true,
                                                value: formData.email,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition",
                                                placeholder: "your@email.com"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "phone",
                                                className: "block text-sm font-medium text-zinc-300 mb-2",
                                                children: "Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                id: "phone",
                                                name: "phone",
                                                value: formData.phone,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition",
                                                placeholder: "+1 (555) 000-0000"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "company",
                                                className: "block text-sm font-medium text-zinc-300 mb-2",
                                                children: "Company"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "company",
                                                name: "company",
                                                value: formData.company,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition",
                                                placeholder: "Your company"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "projectType",
                                        className: "block text-sm font-medium text-zinc-300 mb-2",
                                        children: "Project Type *"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "projectType",
                                        name: "projectType",
                                        required: true,
                                        value: formData.projectType,
                                        onChange: handleChange,
                                        className: "w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-500 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select a project type"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "mobile-app",
                                                children: "Mobile App Development"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "website",
                                                children: "Website Development"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ai-solution",
                                                children: "AI Solution"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "saas",
                                                children: "SaaS Platform"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "other",
                                                children: "Other"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "message",
                                        className: "block text-sm font-medium text-zinc-300 mb-2",
                                        children: "Project Details *"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "message",
                                        name: "message",
                                        required: true,
                                        rows: 5,
                                        value: formData.message,
                                        onChange: handleChange,
                                        className: "w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition resize-none",
                                        placeholder: "Tell us about your project, timeline, and budget..."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting,
                                className: "w-full px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                            lineNumber: 148,
                                            columnNumber: 21
                                        }, this),
                                        "Sending..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                            lineNumber: 151,
                                            columnNumber: 21
                                        }, this),
                                        "Send Message"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500 text-center",
                                children: [
                                    "Or email us directly at",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:manu@manuportuguez.com",
                                        className: "text-violet-400 hover:text-violet-300",
                                        children: "manu@manuportuguez.com"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                        lineNumber: 92,
                        columnNumber: 22
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/codecraft-main/src/components/ContactForm.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
_s(ContactForm, "zAGrsN5BzoHpbicnRMDXypOjsbk=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_codecraft-main_src_components_19bc9e03._.js.map