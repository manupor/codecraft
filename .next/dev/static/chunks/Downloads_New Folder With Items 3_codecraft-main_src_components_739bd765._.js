(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaggeredMenu",
    ()=>StaggeredMenu,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/gsap@3.14.2/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
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
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayerElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const plusHRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const plusVRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iconRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [textLines, setTextLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Menu',
        'Close'
    ]);
    const openTlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textCycleAnimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colorTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const itemEntranceTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "StaggeredMenu.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set([
                        panel,
                        ...preLayers
                    ], {
                        xPercent: offscreen
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusH, {
                        transformOrigin: '50% 50%',
                        rotate: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusV, {
                        transformOrigin: '50% 50%',
                        rotate: 90
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(icon, {
                        rotate: 0,
                        transformOrigin: '50% 50%'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(textInner, {
                        yPercent: 0
                    });
                    if (toggleBtnRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
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
    const buildOpenTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
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
                        start: Number(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(el, 'xPercent'))
                    })
            }["StaggeredMenu.useCallback[buildOpenTimeline].layerStates"]);
            const panelStart = Number(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(panel_0, 'xPercent'));
            if (itemEls.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls, {
                    yPercent: 140,
                    rotate: 10
                });
            }
            if (numberEls.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls, {
                    '--sm-num-opacity': 0
                });
            }
            if (socialTitle) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle, {
                    opacity: 0
                });
            }
            if (socialLinks.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                    y: 25,
                    opacity: 0
                });
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
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
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
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
    const playOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
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
    const playClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
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
            closeTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(all, {
                xPercent: offscreen_0,
                duration: 0.32,
                ease: 'power3.in',
                overwrite: 'auto',
                onComplete: {
                    "StaggeredMenu.useCallback[playClose]": ()=>{
                        const itemEls_0 = Array.from(panel_1.querySelectorAll('.sm-panel-itemLabel'));
                        if (itemEls_0.length) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls_0, {
                                yPercent: 140,
                                rotate: 10
                            });
                        }
                        const numberEls_0 = Array.from(panel_1.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
                        if (numberEls_0.length) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls_0, {
                                '--sm-num-opacity': 0
                            });
                        }
                        const socialTitle_0 = panel_1.querySelector('.sm-socials-title');
                        const socialLinks_0 = Array.from(panel_1.querySelectorAll('.sm-socials-link'));
                        if (socialTitle_0) __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle_0, {
                            opacity: 0
                        });
                        if (socialLinks_0.length) __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks_0, {
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
    const animateIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateIcon]": (opening)=>{
            const icon_0 = iconRef.current;
            if (!icon_0) return;
            spinTweenRef.current?.kill();
            if (opening) {
                spinTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(icon_0, {
                    rotate: 225,
                    duration: 0.8,
                    ease: 'power4.out',
                    overwrite: 'auto'
                });
            } else {
                spinTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(icon_0, {
                    rotate: 0,
                    duration: 0.35,
                    ease: 'power3.inOut',
                    overwrite: 'auto'
                });
            }
        }
    }["StaggeredMenu.useCallback[animateIcon]"], []);
    const animateColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateColor]": (opening_0)=>{
            const btn = toggleBtnRef.current;
            if (!btn) return;
            colorTweenRef.current?.kill();
            if (changeMenuColorOnOpen) {
                const targetColor = opening_0 ? openMenuButtonColor : menuButtonColor;
                colorTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                    color: targetColor,
                    delay: 0.18,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(btn, {
                    color: menuButtonColor
                });
            }
        }
    }["StaggeredMenu.useCallback[animateColor]"], [
        openMenuButtonColor,
        menuButtonColor,
        changeMenuColorOnOpen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "StaggeredMenu.useEffect": ()=>{
            if (toggleBtnRef.current) {
                if (changeMenuColorOnOpen) {
                    const targetColor_0 = openRef.current ? openMenuButtonColor : menuButtonColor;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                        color: targetColor_0
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
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
    const animateText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(inner, {
                yPercent: 0
            });
            const lineCount = seq.length;
            const finalShift = (lineCount - 1) / lineCount * 100;
            textCycleAnimRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$14$2e$2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(inner, {
                yPercent: -finalShift,
                duration: 0.5 + lineCount * 0.07,
                ease: 'power4.out'
            });
        }
    }["StaggeredMenu.useCallback[animateText]"], []);
    const toggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
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
    const closeMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
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
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (className ? className + ' ' : '') + 'staggered-menu-wrapper' + (isFixed ? ' fixed-wrapper' : ''),
        style: accentColor ? {
            ['--sm-accent']: accentColor
        } : undefined,
        "data-position": position,
        "data-open": open || undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    return arr.map((c, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm-prelayer",
                            style: {
                                background: c
                            }
                        }, i_1, false, {
                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                            lineNumber: 410,
                            columnNumber: 36
                        }, ("TURBOPACK compile-time value", void 0)));
                })()
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "staggered-menu-header",
                "aria-label": "Main navigation header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm-logo",
                        "aria-label": "Logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logoUrl || '/CODECRAFT_LOGO.png',
                                alt: "CodeCraft",
                                className: "sm-logo-img",
                                draggable: false,
                                width: 110,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: toggleBtnRef,
                        className: "sm-toggle",
                        "aria-label": open ? 'Close menu' : 'Open menu',
                        "aria-expanded": open,
                        "aria-controls": "staggered-menu-panel",
                        onClick: toggleMenu,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: textWrapRef,
                                className: "sm-toggle-textWrap",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: textInnerRef,
                                    className: "sm-toggle-textInner",
                                    children: textLines.map((l, i_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm-toggle-line",
                                            children: l
                                        }, i_2, false, {
                                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                            lineNumber: 424,
                                            columnNumber: 42
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: iconRef,
                                className: "sm-icon",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: plusHRef,
                                        className: "sm-icon-line"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: plusVRef,
                                        className: "sm-icon-line sm-icon-line-v"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "staggered-menu-panel",
                ref: panelRef,
                className: "staggered-menu-panel",
                "aria-hidden": !open,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm-panel-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "sm-panel-list",
                            role: "list",
                            "data-numbering": displayItemNumbering || undefined,
                            children: items && items.length ? items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "sm-panel-itemWrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "sm-panel-item",
                                        href: it.link,
                                        "aria-label": it.ariaLabel,
                                        "data-index": idx + 1,
                                        onClick: ()=>closeMenu(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm-panel-itemLabel",
                                            children: it.label
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                            lineNumber: 441,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                        lineNumber: 440,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, it.label + idx, false, {
                                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 439,
                                    columnNumber: 61
                                }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "sm-panel-itemWrap",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sm-panel-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm-panel-itemLabel",
                                        children: "No items"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                        lineNumber: 445,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 444,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                lineNumber: 443,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        displaySocials && socialItems && socialItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm-socials",
                            "aria-label": "Social links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "sm-socials-title",
                                    children: "Socials"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "sm-socials-list",
                                    role: "list",
                                    children: socialItems.map((s, i_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "sm-socials-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: s.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "sm-socials-link",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                                lineNumber: 453,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, s.label + i_3, false, {
                                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                            lineNumber: 452,
                                            columnNumber: 46
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                            lineNumber: 449,
                            columnNumber: 71
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx",
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
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/LanguageToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LanguageToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "2897c6e0932c37a2022049142a2b8d9d7440f1af0027d98d8e2c676cb3130da1") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2897c6e0932c37a2022049142a2b8d9d7440f1af0027d98d8e2c676cb3130da1";
    }
    const { language, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t0 = language === "en" ? "Cambiar a espa\xF1ol" : "Switch to English";
    const t1 = language === "en" ? "text-[#efece7]" : "text-[#5c5f66]";
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: "EN"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/LanguageToggle.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#3e4149]",
            children: "/"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/LanguageToggle.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = language === "es" ? "text-[#efece7]" : "text-[#5c5f66]";
    let t5;
    if ($[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: "ES"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/LanguageToggle.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== t0 || $[7] !== t2 || $[8] !== t5 || $[9] !== toggle) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggle,
            "aria-label": t0,
            className: "fixed top-7 right-[5.5rem] z-50 flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-white/15 bg-[#090a0c]/40 backdrop-blur-md text-xs font-semibold text-[#b8b5ae] hover:text-[#efece7] hover:border-white/30 transition-colors",
            children: [
                t2,
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/LanguageToggle.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = t0;
        $[7] = t2;
        $[8] = t5;
        $[9] = toggle;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
_s(LanguageToggle, "BRekW63/ZDiLBIFu5w/QP0x1DnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/NavMenuWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavMenuWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/StaggeredMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/LanguageToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function NavMenuWrapper() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "979365fd1dd3c7fdb655820780ce6db50431fedf73090b035848f3dc1bdf5d7d") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "979365fd1dd3c7fdb655820780ce6db50431fedf73090b035848f3dc1bdf5d7d";
    }
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== t.nav.home) {
        t0 = {
            label: t.nav.home,
            ariaLabel: t.nav.home,
            link: "#home"
        };
        $[1] = t.nav.home;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t.nav.about) {
        t1 = {
            label: t.nav.about,
            ariaLabel: t.nav.about,
            link: "#about"
        };
        $[3] = t.nav.about;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t.nav.services) {
        t2 = {
            label: t.nav.services,
            ariaLabel: t.nav.services,
            link: "#services"
        };
        $[5] = t.nav.services;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t.nav.process) {
        t3 = {
            label: t.nav.process,
            ariaLabel: t.nav.process,
            link: "#process"
        };
        $[7] = t.nav.process;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t.nav.contact) {
        t4 = {
            label: t.nav.contact,
            ariaLabel: t.nav.contact,
            link: "#contact"
        };
        $[9] = t.nav.contact;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t0 || $[12] !== t1 || $[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = [
            t0,
            t1,
            t2,
            t3,
            t4
        ];
        $[11] = t0;
        $[12] = t1;
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const menuItems = t5;
    let t6;
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "NavMenuWrapper[useEffect()]": ()=>{
                const onScroll = {
                    "NavMenuWrapper[useEffect() > onScroll]": ()=>setScrolled(window.scrollY > 20)
                }["NavMenuWrapper[useEffect() > onScroll]"];
                window.addEventListener("scroll", onScroll);
                return ()=>window.removeEventListener("scroll", onScroll);
            }
        })["NavMenuWrapper[useEffect()]"];
        t7 = [];
        $[17] = t6;
        $[18] = t7;
    } else {
        t6 = $[17];
        t7 = $[18];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/NavMenuWrapper.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const t9 = scrolled ? 1 : 0;
    let t10;
    if ($[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-0 left-0 right-0 h-24 bg-[#090a0c]/80 backdrop-blur-xl border-b border-white/5 z-30 transition-opacity duration-300",
            style: {
                opacity: t9
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/NavMenuWrapper.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = [
            "transparent",
            "transparent"
        ];
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== menuItems) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            position: "right",
            items: menuItems,
            displaySocials: false,
            displayItemNumbering: false,
            menuButtonColor: "#efece7",
            openMenuButtonColor: "#efece7",
            changeMenuColorOnOpen: true,
            colors: t11,
            logoUrl: "/codecraftt-logo.png",
            accentColor: "#e89230",
            isFixed: true
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/NavMenuWrapper.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[23] = menuItems;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t10 || $[26] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t8,
                t10,
                t12
            ]
        }, void 0, true);
        $[25] = t10;
        $[26] = t12;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    return t13;
}
_s(NavMenuWrapper, "B6O818+k4F57JCvLA9Rd3gCoVHk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = NavMenuWrapper;
var _c;
__turbopack_context__.k.register(_c, "NavMenuWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FloatingLines.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/three@0.183.1/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/three@0.183.1/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
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
const vec3 PINK  = vec3(140.0, 80.0, 30.0) / 255.0;
const vec3 BLUE  = vec3(25.0,  18.0, 12.0) / 255.0;

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
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](r / 255, g / 255, b / 255);
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
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [webglFailed, setWebglFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const targetMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1000, -1000));
    const currentMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1000, -1000));
    const targetInfluenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentInfluenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const targetParallaxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0));
    const currentParallaxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingLines.useEffect": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](-1, 1, 1, -1, 0, 1);
            camera.position.z = 1;
            let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    antialias: true,
                    alpha: false,
                    failIfMajorPerformanceCaveat: false
                });
            } catch  {
                setWebglFailed(true);
                return;
            }
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
            renderer.domElement.style.width = '100%';
            renderer.domElement.style.height = '100%';
            container.appendChild(renderer.domElement);
            const uniforms = {
                iTime: {
                    value: 0
                },
                iResolution: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1)
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
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](topWavePosition?.x ?? 10.0, topWavePosition?.y ?? 0.5, topWavePosition?.rotate ?? -0.4)
                },
                middleWavePosition: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](middleWavePosition?.x ?? 5.0, middleWavePosition?.y ?? 0.0, middleWavePosition?.rotate ?? 0.2)
                },
                bottomWavePosition: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](bottomWavePosition?.x ?? 2.0, bottomWavePosition?.y ?? -0.7, bottomWavePosition?.rotate ?? 0.4)
                },
                iMouse: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1000, -1000)
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
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
                },
                lineGradient: {
                    value: Array.from({
                        length: MAX_GRADIENT_STOPS
                    }, {
                        "FloatingLines.useEffect": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1)
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
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms,
                vertexShader,
                fragmentShader
            });
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2);
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
            scene.add(mesh);
            const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$183$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
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
                    if (typeof document !== 'undefined' && document.hidden) {
                        raf = requestAnimationFrame(renderLoop);
                        return;
                    }
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
    if (webglFailed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "floating-lines-fallback",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FloatingLines.tsx",
            lineNumber: 475,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "floating-lines-container",
        style: {
            mixBlendMode: mixBlendMode
        }
    }, void 0, false, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FloatingLines.tsx",
        lineNumber: 477,
        columnNumber: 10
    }, this);
}
_s(FloatingLines, "qiwQUOknu5XN/mffLTpYWT/kUgk=");
_c = FloatingLines;
var _c;
__turbopack_context__.k.register(_c, "FloatingLines");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/GlobalBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$components$2f$FloatingLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FloatingLines.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function GlobalBackground() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "92fbf505dbb4439ee0b9d4438f95b661cfa13ce0d6f302f5ff1606444c514239") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "92fbf505dbb4439ee0b9d4438f95b661cfa13ce0d6f302f5ff1606444c514239";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            contain: "strict"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-0",
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$components$2f$FloatingLines$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                parallax: true,
                mixBlendMode: "normal"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/GlobalBackground.tsx",
                lineNumber: 24,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/GlobalBackground.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = GlobalBackground;
var _c;
__turbopack_context__.k.register(_c, "GlobalBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Hero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "b32077f575a2517b8fb0ac1c9ef453a6a4d19cdabaa00b3aa91850ac06a80593") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b32077f575a2517b8fb0ac1c9ef453a6a4d19cdabaa00b3aa91850ac06a80593";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const stats = t.hero.stats;
    const marquee = t.hero.marquee;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.12]"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-orange-500/[0.04] blur-[180px]"
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 29,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-amber-600/[0.03] blur-[140px]"
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 29,
                    columnNumber: 190
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0
        };
        t3 = {
            opacity: 1
        };
        t4 = {
            duration: 0.7
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t.hero.label) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            initial: t2,
            animate: t3,
            transition: t4,
            className: "text-xs font-semibold uppercase tracking-[0.25em] text-[#5c5f66]",
            children: t.hero.label
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[6] = t.hero.label;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            opacity: 0,
            y: 22
        };
        t7 = {
            opacity: 1,
            y: 0
        };
        t8 = {
            duration: 0.9,
            delay: 0.08,
            ease: "easeOut"
        };
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
    } else {
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== t.hero.headlineAccent) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "gradient-text",
            children: t.hero.headlineAccent
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[12] = t.hero.headlineAccent;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t.hero.headline || $[15] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            initial: t6,
            animate: t7,
            transition: t8,
            className: "mt-8 text-[clamp(3rem,7vw,6rem)] font-bold tracking-tight leading-[1.0]",
            children: [
                t.hero.headline,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[14] = t.hero.headline;
        $[15] = t10;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    let t13;
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0,
            y: 14
        };
        t13 = {
            opacity: 1,
            y: 0
        };
        t14 = {
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut"
        };
        $[17] = t12;
        $[18] = t13;
        $[19] = t14;
    } else {
        t12 = $[17];
        t13 = $[18];
        t14 = $[19];
    }
    let t15;
    if ($[20] !== t.hero.subtitle) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            initial: t12,
            animate: t13,
            transition: t14,
            className: "mt-7 text-lg sm:text-xl text-[#b8b5ae] leading-relaxed max-w-2xl",
            children: t.hero.subtitle
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[20] = t.hero.subtitle;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    let t17;
    let t18;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            opacity: 0,
            y: 10
        };
        t17 = {
            opacity: 1,
            y: 0
        };
        t18 = {
            duration: 0.6,
            delay: 0.35,
            ease: "easeOut"
        };
        $[22] = t16;
        $[23] = t17;
        $[24] = t18;
    } else {
        t16 = $[22];
        t17 = $[23];
        t18 = $[24];
    }
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            size: 16,
            className: "group-hover:translate-x-1 transition-transform"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== t.hero.cta1) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#contact",
            className: "group inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#e89230] text-[#090a0c] font-bold hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-200",
            children: [
                t.hero.cta1,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[26] = t.hero.cta1;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] !== t.hero.cta2) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#services",
            className: "inline-flex items-center px-8 py-4 rounded-sm border border-[#efece7]/10 text-[#b8b5ae] font-medium hover:bg-[#efece7]/[0.04] hover:border-[#efece7]/20 transition-all duration-200",
            children: t.hero.cta2
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[28] = t.hero.cta2;
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    let t22;
    if ($[30] !== t20 || $[31] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t16,
            animate: t17,
            transition: t18,
            className: "mt-10 flex flex-wrap justify-center gap-3",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[30] = t20;
        $[31] = t21;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== t11 || $[34] !== t15 || $[35] !== t22 || $[36] !== t5) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center text-center py-12",
            children: [
                t5,
                t11,
                t15,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[33] = t11;
        $[34] = t15;
        $[35] = t22;
        $[36] = t5;
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    let t24;
    let t25;
    let t26;
    let t27;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            opacity: 0
        };
        t25 = {
            opacity: 1
        };
        t26 = {
            duration: 0.6,
            delay: 0.8
        };
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px bg-white/[0.06] mb-8"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[38] = t24;
        $[39] = t25;
        $[40] = t26;
        $[41] = t27;
    } else {
        t24 = $[38];
        t25 = $[39];
        t26 = $[40];
        t27 = $[41];
    }
    let t28;
    if ($[42] !== stats) {
        t28 = stats.map(_HeroStatsMap);
        $[42] = stats;
        $[43] = t28;
    } else {
        t28 = $[43];
    }
    let t29;
    if ($[44] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t24,
            animate: t25,
            transition: t26,
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pb-12 grid grid-cols-2 sm:grid-cols-4 gap-8",
                    children: t28
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
                    lineNumber: 249,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[44] = t28;
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    let t30;
    if ($[46] !== t23 || $[47] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-8",
            children: [
                t23,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[46] = t23;
        $[47] = t29;
        $[48] = t30;
    } else {
        t30 = $[48];
    }
    let t31;
    let t32;
    let t33;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            opacity: 0
        };
        t32 = {
            opacity: 1
        };
        t33 = {
            duration: 0.6,
            delay: 1
        };
        $[49] = t31;
        $[50] = t32;
        $[51] = t33;
    } else {
        t31 = $[49];
        t32 = $[50];
        t33 = $[51];
    }
    let t34;
    let t35;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            x: [
                "0%",
                "-50%"
            ]
        };
        t35 = {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
        };
        $[52] = t34;
        $[53] = t35;
    } else {
        t34 = $[52];
        t35 = $[53];
    }
    let t36;
    if ($[54] !== marquee) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t31,
            animate: t32,
            transition: t33,
            className: "relative z-10 border-t border-white/[0.05] overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: t34,
                transition: t35,
                className: "flex py-4 whitespace-nowrap",
                children: [
                    ...marquee,
                    ...marquee
                ].map(_HeroAnonymous)
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
                lineNumber: 305,
                columnNumber: 139
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[54] = marquee;
        $[55] = t36;
    } else {
        t36 = $[55];
    }
    let t37;
    if ($[56] !== t30 || $[57] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home",
            "aria-label": "CodeCraftt \u2014 Web Design & Branding Studio",
            className: "relative min-h-[100svh] flex flex-col overflow-hidden pt-24",
            children: [
                t0,
                t1,
                t30,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[56] = t30;
        $[57] = t36;
        $[58] = t37;
    } else {
        t37 = $[58];
    }
    return t37;
}
_s(Hero, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Hero;
function _HeroAnonymous(item, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-6 px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] uppercase tracking-[0.22em] text-[#2e3138]",
                children: item
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
                lineNumber: 323,
                columnNumber: 74
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1 h-1 rounded-full bg-[#1f2229] shrink-0"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
                lineNumber: 323,
                columnNumber: 160
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
        lineNumber: 323,
        columnNumber: 10
    }, this);
}
function _HeroStatsMap(s, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 6
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            delay: 0.9 + i * 0.07
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-3xl sm:text-4xl font-bold text-[#efece7]",
                children: s.value
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
                lineNumber: 335,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-[#5c5f66] mt-1.5",
                children: s.label
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
                lineNumber: 335,
                columnNumber: 80
            }, this)
        ]
    }, s.label, true, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Hero.tsx",
        lineNumber: 326,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const techs = [
    {
        name: "React",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-7 h-7",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.32-.187-.69-.275-1.102-.275zm-.005 1.09c.133 0 .247.02.35.06.49.28.73 1.05.685 2.126-.01.195-.03.394-.06.595-.64-.134-1.342-.234-2.079-.296-.428-.614-.882-1.21-1.354-1.774.6-.379 1.168-.59 1.458-.71zm-9.77 0c.29.12.856.33 1.458.71-.468.56-.92 1.152-1.345 1.762-.73.063-1.428.163-2.068.295-.03-.195-.052-.39-.062-.584-.054-1.075.189-1.845.678-2.125a.73.73 0 0 1 .34-.058zM12 7.317c.43.532.863 1.115 1.285 1.744-.423-.02-.851-.03-1.285-.03-.435 0-.865.01-1.288.03C11.137 8.432 11.57 7.85 12 7.317zm-6.91 3.283c.39.105.804.195 1.23.27-.16.647-.27 1.316-.33 1.994-.06.68-.07 1.344-.03 1.996-.432.073-.848.165-1.243.274C2.3 14.252.73 13.16.73 12.004c0-1.153 1.57-2.247 4.36-3.404zm13.82 0c2.79 1.157 4.36 2.25 4.36 3.404 0 1.156-1.57 2.248-4.36 3.405-.39-.106-.8-.198-1.23-.273.04-.652.03-1.316-.03-1.996-.06-.678-.17-1.347-.33-1.994.426-.074.84-.165 1.23-.27zM12 9.77c.513 0 1.022.02 1.52.059.3.48.584.972.853 1.47.27.495.52 1 .745 1.507-.224.506-.474 1.01-.744 1.504-.27.497-.554.99-.854 1.47-.498.04-1.007.059-1.52.059-.513 0-1.022-.02-1.52-.059-.3-.48-.584-.972-.853-1.47-.27-.495-.52-1-.745-1.507.224-.506.474-1.01.744-1.504.27-.497.554-.99.854-1.47.498-.04 1.007-.059 1.52-.059zm-6.09 5.52c.43-.072.845-.164 1.24-.273.04-.652.03-1.316-.03-1.996-.06-.678-.17-1.347-.33-1.994-.43.072-.844.164-1.24.273-.04.652-.03 1.316.03 1.996.06.678.17 1.347.33 1.994zm8.59 1.418c.64.133 1.342.233 2.079.295.427.614.88 1.21 1.354 1.775-.6.378-1.168.59-1.458.71a.73.73 0 0 1-.35.058c-.247 0-.455-.04-.635-.138-.49-.28-.733-1.05-.686-2.126.01-.195.032-.395.06-.596zm-8.51 0c.03.195.052.39.062.585.054 1.075-.189 1.845-.678 2.125a.73.73 0 0 1-.34.058c-.29-.12-.856-.33-1.458-.71.468-.56.92-1.15 1.345-1.762.73-.063 1.428-.162 2.068-.295zM12 16.688c.43-.532.863-1.115 1.285-1.744-.423.02-.851.03-1.285.03-.435 0-.865-.01-1.288-.03.423.63.855 1.21 1.288 1.744z"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 8,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Next.js",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-7 h-7",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "TypeScript",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-7 h-7",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.089 4.1 4.1 0 0 1-1.487.542 8.579 8.579 0 0 1-1.826.181 9.585 9.585 0 0 1-1.94-.197 5.385 5.385 0 0 1-1.503-.589v-2.566a4.988 4.988 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Node.js",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-7 h-7",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.998.016a1.336 1.336 0 0 0-.673.18L2.396 5.424A1.344 1.344 0 0 0 1.72 6.59v10.818c0 .48.254.924.676 1.166l8.928 5.228a1.344 1.344 0 0 0 1.347 0l8.93-5.228a1.347 1.347 0 0 0 .676-1.166V6.59a1.345 1.345 0 0 0-.676-1.166L12.67.196a1.33 1.33 0 0 0-.672-.18zm-.085 2.219c.148 0 .277.044.384.107l6.67 3.9a.769.769 0 0 1 .384.665v7.784a.77.77 0 0 1-.384.665l-6.67 3.9a.762.762 0 0 1-.384.107.762.762 0 0 1-.385-.107l-6.668-3.9a.769.769 0 0 1-.385-.665V6.907c0-.273.146-.527.385-.665l6.668-3.9a.764.764 0 0 1 .385-.107zm0 2.48c-2.9 0-4.35 1.222-4.35 3.045 0 2.062 1.587 2.625 4.2 2.882 3.098.303 3.335.76 3.335 1.37 0 1.057-1.052 1.506-2.891 1.506-2.552 0-3.113-.645-3.304-1.927a.356.356 0 0 0-.351-.302h-1.15a.356.356 0 0 0-.354.356c0 2.1 1.14 3.598 5.159 3.598 3.085 0 4.86-1.224 4.86-3.353 0-2.116-1.434-2.674-4.447-3.07-3.046-.4-3.088-.6-3.088-1.302 0-.583.26-1.36 2.381-1.36 1.9 0 2.605.41 2.898 1.693a.356.356 0 0 0 .347.277h1.148c.1 0 .192-.04.26-.11a.349.349 0 0 0 .094-.263C15.91 6.89 14.607 4.715 11.913 4.715z"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Python",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-7 h-7",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.89S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.131V3.19S18.28 0 11.914 0zm-3.21 1.849a1.039 1.039 0 1 1 0 2.079 1.04 1.04 0 0 1 0-2.08zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.13S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.867s.109 3.402-3.35 3.402H9.45S6.21 12.284 6.21 15.468v5.342S5.72 24 12.086 24zm3.21-1.849a1.039 1.039 0 1 1 0-2.079 1.04 1.04 0 0 1 0 2.08z"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 28,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "AWS",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-8 h-8",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.778.778 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.15.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.026-.527.27-.352 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.608zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "OpenAI",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-7 h-7",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.372L15.115 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.403-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Flutter",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-7 h-7",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Google Cloud",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/tech/google-cloud.png",
            alt: "Google Cloud",
            className: "w-7 h-7 object-contain brightness-0 invert"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 48,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "React Native",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-7 h-7",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 2 4.37 3.68 0 1.68-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-2-4.37-3.68 0-1.68 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 51,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const duplicated = [
    ...techs,
    ...techs
];
function TechMarquee() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "3c245b5610ca2b2e0bf378c3d99cf0ec38b9057f3ceccd6ddd5c6bee3e88d31c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3c245b5610ca2b2e0bf378c3d99cf0ec38b9057f3ceccd6ddd5c6bee3e88d31c";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-[#090a0c] via-transparent to-[#090a0c] z-10"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== t.techMarquee.title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold uppercase tracking-[0.22em] text-[#5c5f66]",
                children: t.techMarquee.title
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 76,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[2] = t.techMarquee.title;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            x: [
                "0%",
                "-50%"
            ]
        };
        t3 = {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
        };
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: t2,
                transition: t3,
                className: "flex gap-10 whitespace-nowrap",
                children: duplicated.map(_TechMarqueeDuplicatedMap)
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 101,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t1) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            "aria-label": "Technologies we work with",
            className: "relative py-16 overflow-hidden border-y border-white/[0.05]",
            children: [
                t0,
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s(TechMarquee, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = TechMarquee;
function _TechMarqueeDuplicatedMap(tech, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-3 px-6 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#5c5f66] hover:text-[#b8b5ae] transition-colors duration-300",
                children: tech.icon
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 117,
                columnNumber: 82
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-medium text-[#3e4149] uppercase tracking-wider",
                children: tech.name
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
                lineNumber: 117,
                columnNumber: 183
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/TechMarquee.tsx",
        lineNumber: 117,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TechMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const icons = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"]
];
function Services() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "fe3091a13bef05451b41594265cdc41a07205edf981eec6421c369dc6d78545f") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fe3091a13bef05451b41594265cdc41a07205edf981eec6421c369dc6d78545f";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== t.services.eyebrow || $[2] !== t.services.headline || $[3] !== t.services.headlineAccent || $[4] !== t.services.items) {
        const services = t.services.items.map(_ServicesTServicesItemsMap);
        t4 = "services";
        t5 = "Web Design and Branding Services";
        t6 = "relative py-28 bg-[#0d0f11]/50";
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.015] to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                lineNumber: 33,
                columnNumber: 12
            }, this);
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        t2 = "relative max-w-7xl mx-auto px-6 lg:px-8";
        let t10;
        let t11;
        let t8;
        let t9;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = {
                opacity: 0,
                y: 12
            };
            t9 = {
                opacity: 1,
                y: 0
            };
            t10 = {
                duration: 0.5,
                ease: "easeOut"
            };
            t11 = {
                once: true,
                margin: "-80px"
            };
            $[14] = t10;
            $[15] = t11;
            $[16] = t8;
            $[17] = t9;
        } else {
            t10 = $[14];
            t11 = $[15];
            t8 = $[16];
            t9 = $[17];
        }
        let t12;
        if ($[18] !== t.services.eyebrow) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold uppercase tracking-[0.22em] text-[#e89230] mb-5",
                children: t.services.eyebrow
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this);
            $[18] = t.services.eyebrow;
            $[19] = t12;
        } else {
            t12 = $[19];
        }
        let t13;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this);
            $[20] = t13;
        } else {
            t13 = $[20];
        }
        let t14;
        if ($[21] !== t.services.headlineAccent) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "gradient-text",
                children: t.services.headlineAccent
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this);
            $[21] = t.services.headlineAccent;
            $[22] = t14;
        } else {
            t14 = $[22];
        }
        let t15;
        if ($[23] !== t.services.headline || $[24] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl sm:text-5xl font-bold tracking-tight max-w-xl",
                children: [
                    t.services.headline,
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this);
            $[23] = t.services.headline;
            $[24] = t14;
            $[25] = t15;
        } else {
            t15 = $[25];
        }
        if ($[26] !== t12 || $[27] !== t15) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t8,
                whileInView: t9,
                transition: t10,
                viewport: t11,
                className: "mb-16",
                children: [
                    t12,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                lineNumber: 103,
                columnNumber: 12
            }, this);
            $[26] = t12;
            $[27] = t15;
            $[28] = t3;
        } else {
            t3 = $[28];
        }
        t0 = "grid sm:grid-cols-2 gap-5";
        t1 = services.map(_ServicesServicesMap);
        $[1] = t.services.eyebrow;
        $[2] = t.services.headline;
        $[3] = t.services.headlineAccent;
        $[4] = t.services.items;
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t0 = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
    }
    let t8;
    if ($[29] !== t0 || $[30] !== t1) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[29] = t0;
        $[30] = t1;
        $[31] = t8;
    } else {
        t8 = $[31];
    }
    let t10;
    let t11;
    let t12;
    let t9;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            opacity: 0,
            y: 8
        };
        t10 = {
            opacity: 1,
            y: 0
        };
        t11 = {
            duration: 0.4,
            delay: 0.3,
            ease: "easeOut"
        };
        t12 = {
            once: true,
            margin: "-60px"
        };
        $[32] = t10;
        $[33] = t11;
        $[34] = t12;
        $[35] = t9;
    } else {
        t10 = $[32];
        t11 = $[33];
        t12 = $[34];
        t9 = $[35];
    }
    let t13;
    if ($[36] !== t.services.cta) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#contact",
            className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-[#e89230] text-[#090a0c] font-semibold text-sm hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-200",
            children: t.services.cta
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[36] = t.services.cta;
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    let t14;
    if ($[38] !== t.services.also) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-[#5c5f66]",
            children: t.services.also
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[38] = t.services.also;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] !== t13 || $[41] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t9,
            whileInView: t10,
            transition: t11,
            viewport: t12,
            className: "mt-10 flex items-center gap-4",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[40] = t13;
        $[41] = t14;
        $[42] = t15;
    } else {
        t15 = $[42];
    }
    let t16;
    if ($[43] !== t15 || $[44] !== t2 || $[45] !== t3 || $[46] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[43] = t15;
        $[44] = t2;
        $[45] = t3;
        $[46] = t8;
        $[47] = t16;
    } else {
        t16 = $[47];
    }
    let t17;
    if ($[48] !== t16 || $[49] !== t4 || $[50] !== t5 || $[51] !== t6 || $[52] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t4,
            "aria-label": t5,
            className: t6,
            children: [
                t7,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[48] = t16;
        $[49] = t4;
        $[50] = t5;
        $[51] = t6;
        $[52] = t7;
        $[53] = t17;
    } else {
        t17 = $[53];
    }
    return t17;
}
_s(Services, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Services;
function _ServicesServicesMap(s, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 14
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.45,
            delay: i_0 * 0.07,
            ease: "easeOut"
        },
        viewport: {
            once: true,
            margin: "-60px"
        },
        className: "group flex gap-6 p-8 rounded-sm border border-white/[0.1] bg-white/[0.03] hover:border-[#e89230]/35 hover:bg-white/[0.06] transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-11 h-11 rounded-sm bg-[#e89230]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e89230]/20 transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                    size: 21,
                    className: "text-[#e89230]"
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                    lineNumber: 239,
                    columnNumber: 310
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                lineNumber: 239,
                columnNumber: 168
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-semibold text-[#efece7]",
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                                lineNumber: 239,
                                columnNumber: 414
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-semibold text-[#e89230]/70 bg-[#e89230]/[0.08] px-2 py-0.5 rounded-sm shrink-0",
                                children: s.tag
                            }, void 0, false, {
                                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                                lineNumber: 239,
                                columnNumber: 483
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                        lineNumber: 239,
                        columnNumber: 368
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#b8b5ae] leading-relaxed",
                        children: s.description
                    }, void 0, false, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                        lineNumber: 239,
                        columnNumber: 617
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
                lineNumber: 239,
                columnNumber: 363
            }, this)
        ]
    }, s.title, true, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Services.tsx",
        lineNumber: 226,
        columnNumber: 10
    }, this);
}
function _ServicesTServicesItemsMap(item, i) {
    return {
        ...item,
        icon: icons[i]
    };
}
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BigStatement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BigStatement() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "e06918db8094827ad9361c1ad66118f860f375807c5152d9095d71ddd3ab210e") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e06918db8094827ad9361c1ad66118f860f375807c5152d9095d71ddd3ab210e";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.025] to-transparent"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 21,
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
            y: 28
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        t3 = {
            duration: 0.9,
            ease: "easeOut"
        };
        t4 = {
            once: true,
            margin: "-80px"
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
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t.bigStatement.headlineAccent) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "gradient-text",
            children: t.bigStatement.headlineAccent
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[7] = t.bigStatement.headlineAccent;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t.bigStatement.headline1 || $[11] !== t.bigStatement.headline2 || $[12] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0]",
            children: [
                t.bigStatement.headline1,
                t5,
                t6,
                t7,
                t.bigStatement.headline2
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[10] = t.bigStatement.headline1;
        $[11] = t.bigStatement.headline2;
        $[12] = t6;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t.bigStatement.paragraph) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-7 text-xl text-[#b8b5ae] leading-relaxed max-w-md",
            children: t.bigStatement.paragraph
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[14] = t.bigStatement.paragraph;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            size: 14,
            className: "group-hover:translate-x-1 transition-transform"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t.bigStatement.cta) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#contact",
            className: "group mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-sm border border-[#efece7]/[0.12] text-[#b8b5ae] font-medium text-sm hover:bg-white/[0.05] hover:border-[#efece7]/25 transition-all duration-200",
            children: [
                t.bigStatement.cta,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[17] = t.bigStatement.cta;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11 || $[20] !== t8 || $[21] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            whileInView: t2,
            transition: t3,
            viewport: t4,
            children: [
                t8,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t8;
        $[21] = t9;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    let t14;
    let t15;
    let t16;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            opacity: 0,
            x: 30
        };
        t14 = {
            opacity: 1,
            x: 0
        };
        t15 = {
            duration: 1,
            delay: 0.1,
            ease: "easeOut"
        };
        t16 = {
            once: true,
            margin: "-80px"
        };
        $[23] = t13;
        $[24] = t14;
        $[25] = t15;
        $[26] = t16;
    } else {
        t13 = $[23];
        t14 = $[24];
        t15 = $[25];
        t16 = $[26];
    }
    let t17;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t13,
            whileInView: t14,
            transition: t15,
            viewport: t16,
            className: "relative flex items-center justify-center lg:justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    y: [
                        0,
                        -10,
                        0
                    ]
                },
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/rayo-img/demo/01_fea-img.webp",
                    alt: "CodeCraftt \u2014 SaaS and AI product development",
                    width: 680,
                    height: 460,
                    className: "w-full max-w-[580px] h-auto object-contain drop-shadow-2xl",
                    priority: false
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
                    lineNumber: 162,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
                lineNumber: 156,
                columnNumber: 156
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== t12) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-24 overflow-hidden",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-7xl mx-auto px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                        children: [
                            t12,
                            t17
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
                        lineNumber: 169,
                        columnNumber: 124
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
                    lineNumber: 169,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/BigStatement.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    return t18;
}
_s(BigStatement, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = BigStatement;
var _c;
__turbopack_context__.k.register(_c, "BigStatement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const icons = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
];
function WhyUs() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "e4351e4afca3abc01b251c0518b1fe4d30182ed787ec1428b1e84d455d41760f") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4351e4afca3abc01b251c0518b1fe4d30182ed787ec1428b1e84d455d41760f";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== t.whyUs.eyebrow || $[2] !== t.whyUs.headline || $[3] !== t.whyUs.headlineAccent || $[4] !== t.whyUs.items) {
        const reasons = t.whyUs.items.map(_WhyUsTWhyUsItemsMap);
        t4 = "about";
        t5 = "relative py-28";
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.025] to-transparent"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                lineNumber: 31,
                columnNumber: 12
            }, this);
            $[12] = t6;
        } else {
            t6 = $[12];
        }
        t2 = "relative max-w-7xl mx-auto px-6 lg:px-8";
        let t10;
        let t7;
        let t8;
        let t9;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = {
                opacity: 0,
                y: 12
            };
            t8 = {
                opacity: 1,
                y: 0
            };
            t9 = {
                duration: 0.5,
                ease: "easeOut"
            };
            t10 = {
                once: true,
                margin: "-80px"
            };
            $[13] = t10;
            $[14] = t7;
            $[15] = t8;
            $[16] = t9;
        } else {
            t10 = $[13];
            t7 = $[14];
            t8 = $[15];
            t9 = $[16];
        }
        let t11;
        if ($[17] !== t.whyUs.eyebrow) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#e89230] mb-4",
                children: t.whyUs.eyebrow
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this);
            $[17] = t.whyUs.eyebrow;
            $[18] = t11;
        } else {
            t11 = $[18];
        }
        let t12;
        if ($[19] !== t.whyUs.headlineAccent) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "gradient-text",
                children: t.whyUs.headlineAccent
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this);
            $[19] = t.whyUs.headlineAccent;
            $[20] = t12;
        } else {
            t12 = $[20];
        }
        let t13;
        if ($[21] !== t.whyUs.headline || $[22] !== t12) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl sm:text-5xl font-bold tracking-tight",
                children: [
                    t.whyUs.headline,
                    " ",
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this);
            $[21] = t.whyUs.headline;
            $[22] = t12;
            $[23] = t13;
        } else {
            t13 = $[23];
        }
        if ($[24] !== t11 || $[25] !== t13) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t7,
                whileInView: t8,
                transition: t9,
                viewport: t10,
                className: "text-center mb-16",
                children: [
                    t11,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                lineNumber: 94,
                columnNumber: 12
            }, this);
            $[24] = t11;
            $[25] = t13;
            $[26] = t3;
        } else {
            t3 = $[26];
        }
        t0 = "grid sm:grid-cols-3 gap-6 mt-12";
        t1 = reasons.map(_WhyUsReasonsMap);
        $[1] = t.whyUs.eyebrow;
        $[2] = t.whyUs.headline;
        $[3] = t.whyUs.headlineAccent;
        $[4] = t.whyUs.items;
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t0 = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
    }
    let t7;
    if ($[27] !== t0 || $[28] !== t1) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[27] = t0;
        $[28] = t1;
        $[29] = t7;
    } else {
        t7 = $[29];
    }
    let t8;
    if ($[30] !== t2 || $[31] !== t3 || $[32] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[30] = t2;
        $[31] = t3;
        $[32] = t7;
        $[33] = t8;
    } else {
        t8 = $[33];
    }
    let t9;
    if ($[34] !== t4 || $[35] !== t5 || $[36] !== t6 || $[37] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t4,
            className: t5,
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[34] = t4;
        $[35] = t5;
        $[36] = t6;
        $[37] = t8;
        $[38] = t9;
    } else {
        t9 = $[38];
    }
    return t9;
}
_s(WhyUs, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = WhyUs;
function _WhyUsReasonsMap(r, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 14
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.45,
            delay: i_0 * 0.06,
            ease: "easeOut"
        },
        viewport: {
            once: true,
            margin: "-60px"
        },
        className: "group relative p-9 rounded-sm bg-white/[0.03] border border-white/[0.1] hover:border-[#e89230]/40 hover:bg-white/[0.06] transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-sm bg-[#e89230]/10 flex items-center justify-center group-hover:bg-[#e89230]/20 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(r.icon, {
                            size: 20,
                            className: "text-[#e89230]"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                            lineNumber: 169,
                            columnNumber: 354
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                        lineNumber: 169,
                        columnNumber: 221
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-bold text-[#e89230]/80 bg-[#e89230]/10 px-2 py-1 rounded-sm",
                        children: r.stat
                    }, void 0, false, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                        lineNumber: 169,
                        columnNumber: 407
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                lineNumber: 169,
                columnNumber: 166
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-base font-semibold text-[#efece7] mb-2",
                children: r.title
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                lineNumber: 169,
                columnNumber: 523
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[#b8b5ae] leading-relaxed",
                children: r.description
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
                lineNumber: 169,
                columnNumber: 597
            }, this)
        ]
    }, r.title, true, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/WhyUs.tsx",
        lineNumber: 156,
        columnNumber: 10
    }, this);
}
function _WhyUsTWhyUsItemsMap(item, i) {
    return {
        ...item,
        icon: icons[i]
    };
}
var _c;
__turbopack_context__.k.register(_c, "WhyUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HowItWorks() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "247d726112ae6def633b73e5dce109aa13c108618d049419220f05143f13a865") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "247d726112ae6def633b73e5dce109aa13c108618d049419220f05143f13a865";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const steps = t.howItWorks.steps;
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 12
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            duration: 0.5,
            ease: "easeOut"
        };
        t3 = {
            once: true,
            margin: "-80px"
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t.howItWorks.eyebrow) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#e89230] mb-4",
            children: t.howItWorks.eyebrow
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = t.howItWorks.eyebrow;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t.howItWorks.headlineAccent) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "gradient-text",
            children: t.howItWorks.headlineAccent
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[7] = t.howItWorks.headlineAccent;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t.howItWorks.headline || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl sm:text-5xl font-bold tracking-tight",
            children: [
                t.howItWorks.headline,
                " ",
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[9] = t.howItWorks.headline;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t.howItWorks.subtitle) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-base sm:text-lg text-[#b8b5ae] max-w-xl mx-auto",
            children: t.howItWorks.subtitle
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[12] = t.howItWorks.subtitle;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t4 || $[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t0,
            whileInView: t1,
            transition: t2,
            viewport: t3,
            className: "text-center mb-16",
            children: [
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== steps) {
        t9 = steps.map(_HowItWorksStepsMap);
        $[18] = steps;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
            children: t9
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "process",
            className: "relative py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8",
                children: [
                    t8,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
                lineNumber: 110,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t8;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    return t11;
}
_s(HowItWorks, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = HowItWorks;
function _HowItWorksStepsMap(step, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 14
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.45,
            delay: i * 0.06,
            ease: "easeOut"
        },
        viewport: {
            once: true,
            margin: "-60px"
        },
        className: "group relative p-7 rounded-sm bg-white/[0.03] border border-white/[0.1] hover:border-[#e89230]/40 hover:bg-white/[0.06] transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-5xl font-bold text-white/[0.12] leading-none block mb-4 group-hover:text-[#e89230]/20 transition-colors",
                children: step.num
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
                lineNumber: 133,
                columnNumber: 166
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-base font-semibold text-[#efece7] mb-2",
                children: step.title
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
                lineNumber: 133,
                columnNumber: 310
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[#b8b5ae] leading-relaxed",
                children: step.description
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
                lineNumber: 133,
                columnNumber: 387
            }, this)
        ]
    }, step.num, true, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/HowItWorks.tsx",
        lineNumber: 120,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FAQ() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "5a6c170bd88b8bd1d835f1958e5a568990d830b25b597a3fb78717afd108cce5") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5a6c170bd88b8bd1d835f1958e5a568990d830b25b597a3fb78717afd108cce5";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const faqs = t.faq.items;
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] !== faqs) {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(_FAQFaqsMap)
        };
        t2 = "faq";
        t3 = "relative py-24";
        t1 = "application/ld+json";
        t0 = JSON.stringify(faqSchema);
        $[1] = faqs;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t0) {
        t4 = {
            __html: t0
        };
        $[6] = t0;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t1 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
            type: t1,
            dangerouslySetInnerHTML: t4
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            opacity: 0,
            y: 12
        };
        t7 = {
            opacity: 1,
            y: 0
        };
        t8 = {
            duration: 0.5,
            ease: "easeOut"
        };
        t9 = {
            once: true,
            margin: "-80px"
        };
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t.faq.eyebrow) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#e89230] mb-4",
            children: t.faq.eyebrow
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[15] = t.faq.eyebrow;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t.faq.headlineAccent) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "gradient-text",
            children: t.faq.headlineAccent
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[17] = t.faq.headlineAccent;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t.faq.headline || $[20] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl sm:text-4xl font-bold tracking-tight",
            children: [
                t.faq.headline,
                " ",
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[19] = t.faq.headline;
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t10 || $[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t6,
            whileInView: t7,
            transition: t8,
            viewport: t9,
            className: "text-center mb-14",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== faqs || $[26] !== open) {
        let t15;
        if ($[28] !== open) {
            t15 = ({
                "FAQ[faqs.map()]": (faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 8
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.35,
                            delay: i * 0.04,
                            ease: "easeOut"
                        },
                        viewport: {
                            once: true,
                            margin: "-40px"
                        },
                        className: "rounded-xl border border-white/[0.1] bg-white/[0.03] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "FAQ[faqs.map() > <button>.onClick]": ()=>setOpen(open === i ? null : i)
                                }["FAQ[faqs.map() > <button>.onClick]"],
                                className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left",
                                "aria-expanded": open === i,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm sm:text-base font-medium text-[#efece7]",
                                        children: faq.q
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
                                        lineNumber: 150,
                                        columnNumber: 158
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0 text-[#b8b5ae]",
                                        children: open === i ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
                                            lineNumber: 150,
                                            columnNumber: 294
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
                                            lineNumber: 150,
                                            columnNumber: 316
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
                                        lineNumber: 150,
                                        columnNumber: 238
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
                                lineNumber: 148,
                                columnNumber: 93
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                initial: false,
                                children: open === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.25,
                                        ease: "easeInOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-6 pb-5 text-sm text-[#b8b5ae] leading-relaxed",
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
                                        lineNumber: 162,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
                                    lineNumber: 150,
                                    columnNumber: 399
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
                                lineNumber: 150,
                                columnNumber: 351
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
                        lineNumber: 135,
                        columnNumber: 40
                    }, this)
            })["FAQ[faqs.map()]"];
            $[28] = open;
            $[29] = t15;
        } else {
            t15 = $[29];
        }
        t14 = faqs.map(t15);
        $[25] = faqs;
        $[26] = open;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: t14
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t13 || $[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-6 lg:px-8",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[32] = t13;
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t16 || $[36] !== t2 || $[37] !== t3 || $[38] !== t5) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t2,
            className: t3,
            children: [
                t5,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FAQ.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[35] = t16;
        $[36] = t2;
        $[37] = t3;
        $[38] = t5;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    return t17;
}
_s(FAQ, "PGia+YPQK1HP/6mDANhXVMkiih4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = FAQ;
function _FAQFaqsMap(f) {
    return {
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: f.a
        }
    };
}
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FinalCTA() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "bb922def6817c5994f00d1bfe5ea19369c6d954bd2cef5563ddd1986a60b53d5") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb922def6817c5994f00d1bfe5ea19369c6d954bd2cef5563ddd1986a60b53d5";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-transparent via-orange-600/[0.04] to-transparent"
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
                    lineNumber: 20,
                    columnNumber: 64
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-orange-600/[0.06] blur-[100px]"
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
                    lineNumber: 20,
                    columnNumber: 171
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 20,
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
            duration: 0.8,
            ease: "easeOut"
        };
        t4 = {
            once: true,
            margin: "-80px"
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
    if ($[6] !== t.finalCta.eyebrow) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold uppercase tracking-[0.25em] text-[#5c5f66] mb-7",
            children: t.finalCta.eyebrow
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = t.finalCta.eyebrow;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t.finalCta.headlineAccent) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "gradient-text",
            children: t.finalCta.headlineAccent
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t.finalCta.headlineAccent;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t.finalCta.headline1 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0]",
            children: [
                t.finalCta.headline1,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[11] = t.finalCta.headline1;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t.finalCta.paragraph) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-7 text-lg text-[#b8b5ae] max-w-sm mx-auto leading-relaxed",
            children: t.finalCta.paragraph
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[14] = t.finalCta.paragraph;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            size: 16,
            className: "group-hover:translate-x-1 transition-transform"
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t.finalCta.cta1) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#contact",
            className: "group inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#e89230] text-[#090a0c] font-bold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-200",
            children: [
                t.finalCta.cta1,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[17] = t.finalCta.cta1;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t.finalCta.cta2) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://wa.me/50683442522",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 px-8 py-4 rounded-sm border border-white/[0.1] text-[#b8b5ae] font-medium hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200",
            children: t.finalCta.cta2
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[19] = t.finalCta.cta2;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t11 || $[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-3",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t.finalCta.trust) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-xs text-[#5c5f66]",
            children: t.finalCta.trust
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[24] = t.finalCta.trust;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t13 || $[27] !== t14 || $[28] !== t5 || $[29] !== t8 || $[30] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-32 overflow-hidden",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl mx-auto px-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: t1,
                        whileInView: t2,
                        transition: t3,
                        viewport: t4,
                        children: [
                            t5,
                            t8,
                            t9,
                            t13,
                            t14
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
                        lineNumber: 138,
                        columnNumber: 128
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
                    lineNumber: 138,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/FinalCTA.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[26] = t13;
        $[27] = t14;
        $[28] = t5;
        $[29] = t8;
        $[30] = t9;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    return t15;
}
_s(FinalCTA, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = FinalCTA;
var _c;
__turbopack_context__.k.register(_c, "FinalCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_babel-plugin-react-compiler@1.0.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/node_modules/.pnpm/lucide-react@0.575.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/New Folder With Items 3/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "d3d2e92c135997be8ee03ecb64e8b70c7e5165e4708df4b475b6498473bcec3b") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d3d2e92c135997be8ee03ecb64e8b70c7e5165e4708df4b475b6498473bcec3b";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const footerServices = t.footer.services;
    const industries = t.footer.industries;
    const company = t.footer.company;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/",
            className: "text-xl font-bold tracking-tight text-[#efece7]",
            children: [
                "Code",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#e89230]",
                    children: "craftt"
                }, void 0, false, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
                    lineNumber: 22,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== t.footer.tagline) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-sm text-[#5c5f66] leading-relaxed max-w-xs",
            children: t.footer.tagline
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[2] = t.footer.tagline;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex items-center gap-2.5",
            children: [
                {
                    href: "https://github.com/codecraftt",
                    Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"]
                },
                {
                    href: "https://linkedin.com/company/codecraftt",
                    Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"]
                },
                {
                    href: "https://instagram.com/codecraftt",
                    Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"]
                }
            ].map(_FooterAnonymous)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            size: 11
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t.footer.cta) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#contact",
            className: "mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#e89230] text-[#090a0c] text-xs font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all",
            children: [
                t.footer.cta,
                " ",
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[6] = t.footer.cta;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t1 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-2 md:col-span-1",
            children: [
                t0,
                t1,
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t.footer.servicesTitle) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c5f66] mb-4",
            children: t.footer.servicesTitle
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[11] = t.footer.servicesTitle;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== footerServices) {
        t7 = footerServices.map(_FooterFooterServicesMap);
        $[13] = footerServices;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-2.5",
            children: t7
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t6 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t.footer.industriesTitle) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c5f66] mb-4",
            children: t.footer.industriesTitle
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[20] = t.footer.industriesTitle;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== industries) {
        t11 = industries.map(_FooterIndustriesMap);
        $[22] = industries;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-2.5",
            children: t11
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t10 || $[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t.footer.companyTitle) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c5f66] mb-4",
            children: t.footer.companyTitle
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[29] = t.footer.companyTitle;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== company) {
        t15 = company.map(_FooterCompanyMap);
        $[31] = company;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-2.5 mb-7",
            children: t15
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t14 || $[36] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[35] = t14;
        $[36] = t16;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t.footer.contactTitle) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c5f66] mb-4",
            children: t.footer.contactTitle
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[38] = t.footer.contactTitle;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    let t20;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "mailto:hello@codecraftt.com",
                className: "flex items-center gap-2 text-xs text-[#5c5f66] hover:text-[#efece7] transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$575$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                        size: 11,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
                        lineNumber: 185,
                        columnNumber: 151
                    }, this),
                    " hello@codecraftt.com"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
                lineNumber: 185,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://wa.me/50683442522",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-xs text-[#5c5f66] hover:text-[#efece7] transition-colors",
                children: "+506 8344 2522"
            }, void 0, false, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
                lineNumber: 186,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[40] = t19;
        $[41] = t20;
    } else {
        t19 = $[40];
        t20 = $[41];
    }
    let t21;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-2.5",
            children: [
                t19,
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "text-xs text-[#5c5f66] leading-relaxed pt-1",
                    children: [
                        "San José, Curridabat",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
                            lineNumber: 195,
                            columnNumber: 129
                        }, this),
                        "Costa Rica"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
                    lineNumber: 195,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    let t22;
    if ($[43] !== t18) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[43] = t18;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] !== t13 || $[46] !== t17 || $[47] !== t22 || $[48] !== t5 || $[49] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-16 grid grid-cols-2 md:grid-cols-4 gap-10",
            children: [
                t5,
                t9,
                t13,
                t17,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[45] = t13;
        $[46] = t17;
        $[47] = t22;
        $[48] = t5;
        $[49] = t9;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    let t24;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            suppressHydrationWarning: true,
            children: new Date().getFullYear()
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[51] = t24;
    } else {
        t24 = $[51];
    }
    let t25;
    if ($[52] !== t.footer.rights) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-[#5c5f66]",
            children: [
                "© ",
                t24,
                " CodeCraftt. ",
                t.footer.rights
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[52] = t.footer.rights;
        $[53] = t25;
    } else {
        t25 = $[53];
    }
    let t26;
    if ($[54] !== t.footer.bottomTagline) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-[#3e4149]",
            children: t.footer.bottomTagline
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[54] = t.footer.bottomTagline;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] !== t25 || $[57] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-5 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[56] = t25;
        $[57] = t26;
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    let t28;
    if ($[59] !== t23 || $[60] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "relative border-t border-white/[0.06] bg-[#090a0c]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8",
                children: [
                    t23,
                    t27
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
                lineNumber: 254,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[59] = t23;
        $[60] = t27;
        $[61] = t28;
    } else {
        t28 = $[61];
    }
    return t28;
}
_s(Footer, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Footer;
function _FooterCompanyMap(t0) {
    const { label: label_0, href: href_0 } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href_0,
            className: "text-xs text-[#5c5f66] hover:text-[#efece7] transition-colors block",
            children: label_0
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 268,
            columnNumber: 28
        }, this)
    }, label_0, false, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
        lineNumber: 268,
        columnNumber: 10
    }, this);
}
function _FooterIndustriesMap(ind) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-xs text-[#5c5f66] leading-snug",
        children: ind
    }, ind, false, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
        lineNumber: 271,
        columnNumber: 10
    }, this);
}
function _FooterFooterServicesMap(label) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#services",
            className: "text-xs text-[#5c5f66] hover:text-[#efece7] transition-colors leading-snug block",
            children: label
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 274,
            columnNumber: 26
        }, this)
    }, label, false, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
        lineNumber: 274,
        columnNumber: 10
    }, this);
}
function _FooterAnonymous(t0) {
    const { href, Icon } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "w-8 h-8 rounded-sm bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[#5c5f66] hover:text-[#efece7] hover:border-white/20 transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$New__Folder__With__Items__3$2f$codecraft$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            size: 14
        }, void 0, false, {
            fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
            lineNumber: 281,
            columnNumber: 258
        }, this)
    }, href, false, {
        fileName: "[project]/Downloads/New Folder With Items 3/codecraft-main/src/components/Footer.tsx",
        lineNumber: 281,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_New%20Folder%20With%20Items%203_codecraft-main_src_components_739bd765._.js.map