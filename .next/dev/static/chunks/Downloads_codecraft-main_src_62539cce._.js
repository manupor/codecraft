(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/codecraft-main/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(77);
    if ($[0] !== "a7e530e4ba019080bff7fdd03d81fef2aed751b4edae1fa8a6551ed5627a9713") {
        for(let $i = 0; $i < 77; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7e530e4ba019080bff7fdd03d81fef2aed751b4edae1fa8a6551ed5627a9713";
    }
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                const onScroll = {
                    "Navbar[useEffect() > onScroll]": ()=>setScrolled(window.scrollY > 30)
                }["Navbar[useEffect() > onScroll]"];
                window.addEventListener("scroll", onScroll);
                return ()=>window.removeEventListener("scroll", onScroll);
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = language === "es" ? "Inicio" : "Home";
    let t3;
    if ($[3] !== t2) {
        t3 = {
            label: t2,
            href: "#hero"
        };
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = language === "es" ? "Servicios" : "Services";
    let t5;
    if ($[5] !== t4) {
        t5 = {
            label: t4,
            href: "#services"
        };
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = language === "es" ? "Capacidades" : "Capabilities";
    let t7;
    if ($[7] !== t6) {
        t7 = {
            label: t6,
            href: "#capabilities"
        };
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = language === "es" ? "Clientes" : "Clients";
    let t9;
    if ($[9] !== t8) {
        t9 = {
            label: t8,
            href: "#clients"
        };
        $[9] = t8;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const t10 = language === "es" ? "Testimonios" : "Testimonials";
    let t11;
    if ($[11] !== t10) {
        t11 = {
            label: t10,
            href: "#testimonials"
        };
        $[11] = t10;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] !== t11 || $[14] !== t3 || $[15] !== t5 || $[16] !== t7 || $[17] !== t9) {
        t12 = [
            t3,
            t5,
            t7,
            t9,
            t11
        ];
        $[13] = t11;
        $[14] = t3;
        $[15] = t5;
        $[16] = t7;
        $[17] = t9;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    const navLinks = t12;
    const t13 = scrolled ? "rgba(10,10,10,0.92)" : "transparent";
    const t14 = scrolled ? "blur(20px)" : "none";
    const t15 = scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent";
    let t16;
    if ($[19] !== t13 || $[20] !== t14 || $[21] !== t15) {
        t16 = {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            transition: "all 0.3s ease",
            backgroundColor: t13,
            backdropFilter: t14,
            borderBottom: t15
        };
        $[19] = t13;
        $[20] = t14;
        $[21] = t15;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    const navStyle = t16;
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            color: "#838383",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: "600",
            letterSpacing: "1px",
            textTransform: "uppercase",
            transition: "color 0.2s ease",
            cursor: "pointer"
        };
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    const linkStyle = t17;
    let t18;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px"
        };
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    let t20;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            textDecoration: "none"
        };
        t20 = {
            fontSize: "1.4rem",
            fontWeight: "900",
            color: "#FAF7F6",
            letterSpacing: "-0.03em"
        };
        $[25] = t19;
        $[26] = t20;
    } else {
        t19 = $[25];
        t20 = $[26];
    }
    let t21;
    let t22;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#hero",
            style: t19,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: t20,
                children: [
                    "CODE",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#10B981"
                        },
                        children: "CRAFTT"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
                        lineNumber: 187,
                        columnNumber: 61
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
                lineNumber: 187,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        t22 = {
            display: "flex",
            alignItems: "center",
            gap: "36px"
        };
        $[27] = t21;
        $[28] = t22;
    } else {
        t21 = $[27];
        t22 = $[28];
    }
    let t23;
    if ($[29] !== navLinks) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t22,
            className: "rayo-nav-desktop",
            children: navLinks.map({
                "Navbar[navLinks.map()]": (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link.href,
                        style: linkStyle,
                        onMouseEnter: _NavbarNavLinksMapAOnMouseEnter,
                        onMouseLeave: _NavbarNavLinksMapAOnMouseLeave,
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
                        lineNumber: 204,
                        columnNumber: 43
                    }, this)
            }["Navbar[navLinks.map()]"])
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[29] = navLinks;
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    let t24;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            display: "flex",
            alignItems: "center",
            gap: "16px"
        };
        $[31] = t24;
    } else {
        t24 = $[31];
    }
    let t25;
    if ($[32] !== language || $[33] !== setLanguage) {
        t25 = ({
            "Navbar[<button>.onClick]": ()=>setLanguage(language === "en" ? "es" : "en")
        })["Navbar[<button>.onClick]"];
        $[32] = language;
        $[33] = setLanguage;
        $[34] = t25;
    } else {
        t25 = $[34];
    }
    let t26;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#838383",
            borderRadius: "100px",
            padding: "6px 14px",
            fontSize: "0.75rem",
            fontWeight: "700",
            letterSpacing: "2px",
            cursor: "pointer",
            transition: "all 0.2s ease"
        };
        $[35] = t26;
    } else {
        t26 = $[35];
    }
    const t27 = language === "en" ? "ES" : "EN";
    let t28;
    if ($[36] !== t25 || $[37] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t25,
            style: t26,
            onMouseEnter: _NavbarButtonOnMouseEnter,
            onMouseLeave: _NavbarButtonOnMouseLeave,
            children: t27
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[36] = t25;
        $[37] = t27;
        $[38] = t28;
    } else {
        t28 = $[38];
    }
    let t29;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            backgroundColor: "#10B981",
            color: "#161616",
            textDecoration: "none",
            padding: "10px 24px",
            borderRadius: "100px",
            fontSize: "0.8rem",
            fontWeight: "900",
            letterSpacing: "1px",
            textTransform: "uppercase",
            transition: "all 0.2s ease",
            display: "inline-block"
        };
        $[39] = t29;
    } else {
        t29 = $[39];
    }
    const t30 = language === "es" ? "Hablemos" : "Let's Talk";
    let t31;
    if ($[40] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#contact",
            style: t29,
            onMouseEnter: _NavbarAOnMouseEnter,
            onMouseLeave: _NavbarAOnMouseLeave,
            children: t30
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[40] = t30;
        $[41] = t31;
    } else {
        t31 = $[41];
    }
    let t32;
    if ($[42] !== mobileOpen) {
        t32 = ({
            "Navbar[<button>.onClick]": ()=>setMobileOpen(!mobileOpen)
        })["Navbar[<button>.onClick]"];
        $[42] = mobileOpen;
        $[43] = t32;
    } else {
        t32 = $[43];
    }
    let t33;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "none"
        };
        $[44] = t33;
    } else {
        t33 = $[44];
    }
    let t34;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            width: "22px",
            display: "flex",
            flexDirection: "column",
            gap: "5px"
        };
        $[45] = t34;
    } else {
        t34 = $[45];
    }
    const t35 = mobileOpen ? "#10B981" : "#FAF7F6";
    const t36 = mobileOpen ? "rotate(45deg) translateY(7px)" : "none";
    let t37;
    if ($[46] !== t35 || $[47] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                display: "block",
                height: "2px",
                backgroundColor: t35,
                transition: "all 0.3s",
                transform: t36
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[46] = t35;
        $[47] = t36;
        $[48] = t37;
    } else {
        t37 = $[48];
    }
    const t38 = mobileOpen ? 0 : 1;
    let t39;
    if ($[49] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                display: "block",
                height: "2px",
                backgroundColor: "#FAF7F6",
                opacity: t38,
                transition: "all 0.3s"
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[49] = t38;
        $[50] = t39;
    } else {
        t39 = $[50];
    }
    const t40 = mobileOpen ? "#10B981" : "#FAF7F6";
    const t41 = mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none";
    let t42;
    if ($[51] !== t40 || $[52] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                display: "block",
                height: "2px",
                backgroundColor: t40,
                transition: "all 0.3s",
                transform: t41
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[51] = t40;
        $[52] = t41;
        $[53] = t42;
    } else {
        t42 = $[53];
    }
    let t43;
    if ($[54] !== t37 || $[55] !== t39 || $[56] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t34,
            children: [
                t37,
                t39,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[54] = t37;
        $[55] = t39;
        $[56] = t42;
        $[57] = t43;
    } else {
        t43 = $[57];
    }
    let t44;
    if ($[58] !== t32 || $[59] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t32,
            style: t33,
            className: "rayo-hamburger",
            "aria-label": "Menu",
            children: t43
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[58] = t32;
        $[59] = t43;
        $[60] = t44;
    } else {
        t44 = $[60];
    }
    let t45;
    if ($[61] !== t28 || $[62] !== t31 || $[63] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t24,
            children: [
                t28,
                t31,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[61] = t28;
        $[62] = t31;
        $[63] = t44;
        $[64] = t45;
    } else {
        t45 = $[64];
    }
    let t46;
    if ($[65] !== t23 || $[66] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mxd-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: t18,
                children: [
                    t21,
                    t23,
                    t45
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
                lineNumber: 404,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[65] = t23;
        $[66] = t45;
        $[67] = t46;
    } else {
        t46 = $[67];
    }
    let t47;
    if ($[68] !== language || $[69] !== mobileOpen || $[70] !== navLinks) {
        t47 = mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: "#0a0a0a",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "24px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            },
            children: [
                navLinks.map({
                    "Navbar[navLinks.map()]": (link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link_0.href,
                            onClick: {
                                "Navbar[navLinks.map() > <a>.onClick]": ()=>setMobileOpen(false)
                            }["Navbar[navLinks.map() > <a>.onClick]"],
                            style: {
                                ...linkStyle,
                                fontSize: "1.1rem"
                            },
                            children: link_0.label
                        }, link_0.href, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
                            lineNumber: 421,
                            columnNumber: 45
                        }, this)
                }["Navbar[navLinks.map()]"]),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#contact",
                    onClick: {
                        "Navbar[<a>.onClick]": ()=>setMobileOpen(false)
                    }["Navbar[<a>.onClick]"],
                    style: {
                        backgroundColor: "#10B981",
                        color: "#161616",
                        textDecoration: "none",
                        padding: "14px 24px",
                        borderRadius: "100px",
                        fontSize: "0.9rem",
                        fontWeight: "900",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        textAlign: "center",
                        marginTop: "8px"
                    },
                    children: language === "es" ? "Hablemos" : "Let's Talk"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
                    lineNumber: 427,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 413,
            columnNumber: 25
        }, this);
        $[68] = language;
        $[69] = mobileOpen;
        $[70] = navLinks;
        $[71] = t47;
    } else {
        t47 = $[71];
    }
    let t48;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        @media (max-width: 768px) {\n          .rayo-nav-desktop { display: none !important; }\n          .rayo-hamburger { display: block !important; }\n        }\n      "
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        $[72] = t48;
    } else {
        t48 = $[72];
    }
    let t49;
    if ($[73] !== navStyle || $[74] !== t46 || $[75] !== t47) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            style: navStyle,
            children: [
                t46,
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Navbar.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[73] = navStyle;
        $[74] = t46;
        $[75] = t47;
        $[76] = t49;
    } else {
        t49 = $[76];
    }
    return t49;
}
_s(Navbar, "flcpybZR9d4JkTf7qq1F7s5q9SE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Navbar;
function _NavbarAOnMouseLeave(e_4) {
    e_4.currentTarget.style.backgroundColor = "#10B981";
    e_4.currentTarget.style.transform = "scale(1)";
}
function _NavbarAOnMouseEnter(e_3) {
    e_3.currentTarget.style.backgroundColor = "#059669";
    e_3.currentTarget.style.transform = "scale(1.04)";
}
function _NavbarButtonOnMouseLeave(e_2) {
    e_2.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
    e_2.currentTarget.style.color = "#838383";
}
function _NavbarButtonOnMouseEnter(e_1) {
    e_1.currentTarget.style.borderColor = "#10B981";
    e_1.currentTarget.style.color = "#10B981";
}
function _NavbarNavLinksMapAOnMouseLeave(e_0) {
    e_0.currentTarget.style.color = "#838383";
}
function _NavbarNavLinksMapAOnMouseEnter(e) {
    e.currentTarget.style.color = "#FAF7F6";
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ── SVG star/compass icon from Rayo template ── */ const StarIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "12b89e6fda91a359b8fa2e8fe2f093755e67ca0f0aeef5c90c5ec9e265b4dead") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12b89e6fda91a359b8fa2e8fe2f093755e67ca0f0aeef5c90c5ec9e265b4dead";
    }
    const { size: t1 } = t0;
    const size = t1 === undefined ? 32 : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            flexShrink: 0
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4z"
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== size) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 80 80",
            fill: "#10B981",
            style: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = size;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c = StarIcon;
const projects = [
    {
        src: '/rayo-img/demo/01_fea-img.webp',
        label: 'SaaS',
        tag: 'Product'
    },
    {
        src: '/rayo-img/demo/02_fea-img.webp',
        label: 'Web App',
        tag: 'Dev'
    },
    {
        src: '/rayo-img/demo/01_resp-img.webp',
        label: 'Responsive',
        tag: 'UX/UI'
    },
    {
        src: '/rayo-img/demo/01_comp-img.webp',
        label: 'Platform',
        tag: 'Full-Stack'
    },
    {
        src: '/rayo-img/demo/03_fea-img.webp',
        label: 'AI System',
        tag: 'AI'
    },
    {
        src: '/rayo-img/demo/04_fea-img.webp',
        label: 'Dashboard',
        tag: 'Data'
    }
];
const RayoHero = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(75);
    if ($[0] !== "12b89e6fda91a359b8fa2e8fe2f093755e67ca0f0aeef5c90c5ec9e265b4dead") {
        for(let $i = 0; $i < 75; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12b89e6fda91a359b8fa2e8fe2f093755e67ca0f0aeef5c90c5ec9e265b4dead";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            position: "absolute",
            bottom: "14px",
            left: "14px",
            background: "rgba(10,10,10,0.75)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "5px 12px",
            borderRadius: "100px",
            fontSize: "0.7rem",
            color: "#FAF7F6",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const tagStyle = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            backgroundColor: "#161616",
            overflow: "hidden"
        };
        t2 = {
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingTop: "100px",
            paddingBottom: "60px"
        };
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(16,185,129,0.35)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "40px"
        };
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
                display: "inline-block",
                animation: "rayo-pulse 2s ease-in-out infinite"
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = {
            fontSize: "0.75rem",
            color: "#10B981",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase"
        };
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    const t6 = language === "es" ? "Disponibles para proyectos" : "Available for projects";
    let t7;
    if ($[7] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: t5,
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                    lineNumber: 161,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            margin: 0,
            padding: 0
        };
        t9 = {
            display: "block",
            fontSize: "clamp(3.5rem, 10vw, 10rem)",
            fontWeight: "800",
            lineHeight: "0.9",
            letterSpacing: "-0.04em",
            color: "#FAF7F6"
        };
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    const t10 = language === "es" ? "Dominamos" : "We master";
    let t11;
    if ($[11] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            display: "block",
            fontSize: "clamp(3.5rem, 10vw, 10rem)",
            fontWeight: "800",
            lineHeight: "0.9",
            letterSpacing: "-0.04em",
            color: "#FAF7F6"
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    const t13 = language === "es" ? "el c\xF3digo." : "the code.";
    let t14;
    if ($[14] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t12,
            children: t13
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            display: "block",
            fontSize: "clamp(3.5rem, 10vw, 10rem)",
            fontWeight: "800",
            lineHeight: "0.9",
            letterSpacing: "-0.04em",
            color: "#333"
        };
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    const t16 = language === "es" ? "Sin l\xEDmites." : "No limits.";
    let t17;
    if ($[17] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t16;
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] !== t11 || $[20] !== t14 || $[21] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            style: t8,
            children: [
                t11,
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t11;
        $[20] = t14;
        $[21] = t17;
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    let t20;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
            marginTop: "60px"
        };
        t20 = {
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "#838383",
            maxWidth: "480px",
            lineHeight: "1.6",
            margin: 0
        };
        $[23] = t19;
        $[24] = t20;
    } else {
        t19 = $[23];
        t20 = $[24];
    }
    const t21 = language === "es" ? "No somos una agencia m\xE1s. Somos tu brazo tecnol\xF3gico de \xE9lite \u2014 SaaS, IA y apps de alto impacto." : "We're not just another agency. We're your elite tech arm \u2014 SaaS, AI and high-impact applications.";
    let t22;
    if ($[25] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t20,
            children: t21
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t21;
        $[26] = t22;
    } else {
        t22 = $[26];
    }
    let t23;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            display: "flex",
            gap: "50px"
        };
        $[27] = t23;
    } else {
        t23 = $[27];
    }
    const t24 = language === "es" ? "Proyectos" : "Projects";
    let t25;
    if ($[28] !== t24) {
        t25 = {
            num: "50+",
            label: t24
        };
        $[28] = t24;
        $[29] = t25;
    } else {
        t25 = $[29];
    }
    const t26 = language === "es" ? "A\xF1os" : "Years";
    let t27;
    if ($[30] !== t26) {
        t27 = {
            num: "7+",
            label: t26
        };
        $[30] = t26;
        $[31] = t27;
    } else {
        t27 = $[31];
    }
    const t28 = language === "es" ? "Satisfacci\xF3n" : "Satisfaction";
    let t29;
    if ($[32] !== t28) {
        t29 = {
            num: "98%",
            label: t28
        };
        $[32] = t28;
        $[33] = t29;
    } else {
        t29 = $[33];
    }
    let t30;
    if ($[34] !== t25 || $[35] !== t27 || $[36] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t23,
            children: [
                t25,
                t27,
                t29
            ].map(_temp)
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t25;
        $[35] = t27;
        $[36] = t29;
        $[37] = t30;
    } else {
        t30 = $[37];
    }
    let t31;
    if ($[38] !== t22 || $[39] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t19,
            children: [
                t22,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t22;
        $[39] = t30;
        $[40] = t31;
    } else {
        t31 = $[40];
    }
    let t32;
    if ($[41] !== t18 || $[42] !== t31 || $[43] !== t7) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mxd-container",
                children: [
                    t7,
                    t18,
                    t31
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                lineNumber: 353,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t18;
        $[42] = t31;
        $[43] = t7;
        $[44] = t32;
    } else {
        t32 = $[44];
    }
    let t33;
    let t34;
    let t35;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "20px 0",
            overflow: "hidden",
            backgroundColor: "#111"
        };
        t34 = {
            display: "flex",
            gap: "48px",
            animation: "rayo-marquee 20s linear infinite",
            whiteSpace: "nowrap",
            width: "max-content"
        };
        t35 = [
            ...Array(10)
        ];
        $[45] = t33;
        $[46] = t34;
        $[47] = t35;
    } else {
        t33 = $[45];
        t34 = $[46];
        t35 = $[47];
    }
    let t36;
    if ($[48] !== language) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t33,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: t34,
                children: t35.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.85rem",
                                    fontWeight: "700",
                                    color: "#555",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase"
                                },
                                children: language === "es" ? "c\xF3digo de \xE9lite" : "elite engineering"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                                lineNumber: 390,
                                columnNumber: 88
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                                lineNumber: 396,
                                columnNumber: 88
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.85rem",
                                    fontWeight: "700",
                                    color: "#555",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase"
                                },
                                children: language === "es" ? "resultados reales" : "real results"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                                lineNumber: 396,
                                columnNumber: 110
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                                lineNumber: 402,
                                columnNumber: 79
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                        lineNumber: 390,
                        columnNumber: 64
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                lineNumber: 390,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = language;
        $[49] = t36;
    } else {
        t36 = $[49];
    }
    let t37;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            padding: "80px 0 100px",
            backgroundColor: "#0f0f0f"
        };
        $[50] = t37;
    } else {
        t37 = $[50];
    }
    let t38;
    let t39;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "48px"
        };
        t39 = {
            fontSize: "0.75rem",
            color: "#555",
            fontWeight: "700",
            letterSpacing: "3px",
            textTransform: "uppercase",
            margin: 0
        };
        $[51] = t38;
        $[52] = t39;
    } else {
        t38 = $[51];
        t39 = $[52];
    }
    const t40 = language === "es" ? "\u2014 Nuestro trabajo" : "\u2014 Our work";
    let t41;
    if ($[53] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t39,
            children: t40
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t40;
        $[54] = t41;
    } else {
        t41 = $[54];
    }
    let t42;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = {
            textDecoration: "none",
            position: "relative",
            width: "110px",
            height: "110px",
            display: "block",
            flexShrink: 0
        };
        $[55] = t42;
    } else {
        t42 = $[55];
    }
    let t43;
    let t44;
    let t45;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            width: "110px",
            height: "110px",
            animation: "rayo-spin 14s linear infinite",
            position: "absolute",
            inset: 0
        };
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                id: "rayo-circ",
                d: "M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                lineNumber: 475,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t45 = {
            fontSize: "12.5px",
            fill: "#555",
            fontWeight: "700",
            letterSpacing: "2.5px"
        };
        $[56] = t43;
        $[57] = t44;
        $[58] = t45;
    } else {
        t43 = $[56];
        t44 = $[57];
        t45 = $[58];
    }
    const t46 = language === "es" ? "VER SERVICIOS * VER SERVICIOS * VER SERVICIOS * " : "SEE SERVICES * SEE SERVICES * SEE SERVICES * ";
    let t47;
    if ($[59] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 160 160",
            style: t43,
            children: [
                t44,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    style: t45,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                        href: "#rayo-circ",
                        children: t46
                    }, void 0, false, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                        lineNumber: 493,
                        columnNumber: 73
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                    lineNumber: 493,
                    columnNumber: 55
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 493,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t46;
        $[60] = t47;
    } else {
        t47 = $[60];
    }
    let t48;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {
                size: 28
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                lineNumber: 506,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t48;
    } else {
        t48 = $[61];
    }
    let t49;
    if ($[62] !== t47) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#services",
            style: t42,
            children: [
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 513,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t47;
        $[63] = t49;
    } else {
        t49 = $[63];
    }
    let t50;
    if ($[64] !== t41 || $[65] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t38,
            children: [
                t41,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = t41;
        $[65] = t49;
        $[66] = t50;
    } else {
        t50 = $[66];
    }
    let t51;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px"
            },
            children: projects.map((p, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        borderRadius: "20px",
                        overflow: "hidden",
                        aspectRatio: i_0 === 1 || i_0 === 4 ? "16/10" : "4/5",
                        backgroundColor: "#1a1a1a",
                        gridColumn: i_0 === 1 || i_0 === 4 ? "span 2" : "span 1"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: p.src,
                            alt: p.label,
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                                transition: "transform 0.5s ease"
                            },
                            onMouseEnter: _temp2,
                            onMouseLeave: _temp3
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                            lineNumber: 541,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                            lineNumber: 547,
                            columnNumber: 58
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: tagStyle,
                            children: p.tag
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                            lineNumber: 551,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                position: "absolute",
                                bottom: "14px",
                                right: "14px",
                                margin: 0,
                                fontSize: "0.8rem",
                                color: "rgba(255,255,255,0.5)",
                                fontWeight: "600"
                            },
                            children: p.label
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                            lineNumber: 551,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i_0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                    lineNumber: 534,
                    columnNumber: 34
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 530,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t51;
    } else {
        t51 = $[67];
    }
    let t52;
    if ($[68] !== t50) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t37,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mxd-container",
                children: [
                    t50,
                    t51
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                lineNumber: 566,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 566,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t50;
        $[69] = t52;
    } else {
        t52 = $[69];
    }
    let t53;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        @keyframes rayo-marquee {\n          from { transform: translateX(0); }\n          to   { transform: translateX(-50%); }\n        }\n        @keyframes rayo-spin {\n          from { transform: rotate(0deg); }\n          to   { transform: rotate(360deg); }\n        }\n        @keyframes rayo-pulse {\n          0%, 100% { opacity: 1; }\n          50%       { opacity: 0.3; }\n        }\n      "
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = t53;
    } else {
        t53 = $[70];
    }
    let t54;
    if ($[71] !== t32 || $[72] !== t36 || $[73] !== t52) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "hero",
            style: t1,
            children: [
                t32,
                t36,
                t52,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
            lineNumber: 581,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t32;
        $[72] = t36;
        $[73] = t52;
        $[74] = t54;
    } else {
        t54 = $[74];
    }
    return t54;
};
_s(RayoHero, "FlN/ZbmDt9Cr5Bksrso5IP5a1aE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = RayoHero;
const __TURBOPACK__default__export__ = RayoHero;
function _temp(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "2.2rem",
                    fontWeight: "900",
                    color: "#FAF7F6",
                    margin: 0,
                    lineHeight: 1
                },
                children: s.num
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                lineNumber: 593,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "0.8rem",
                    color: "#838383",
                    margin: "4px 0 0",
                    letterSpacing: "1px",
                    textTransform: "uppercase"
                },
                children: s.label
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
                lineNumber: 599,
                columnNumber: 19
            }, this)
        ]
    }, s.num, true, {
        fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx",
        lineNumber: 593,
        columnNumber: 10
    }, this);
}
function _temp2(e) {
    e.currentTarget.style.transform = "scale(1.04)";
}
function _temp3(e_0) {
    e_0.currentTarget.style.transform = "scale(1)";
}
var _c, _c1;
__turbopack_context__.k.register(_c, "StarIcon");
__turbopack_context__.k.register(_c1, "RayoHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const RayoServices = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "5545212d2e1786de9b77824a03df5e8c01adb2351de4b53f983411c0b880c5c1") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5545212d2e1786de9b77824a03df5e8c01adb2351de4b53f983411c0b880c5c1";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== language) {
        const services = [
            {
                id: "01",
                title: "PRODUCTOS DIGITALES DE \xC9LITE",
                titleEn: "ELITE DIGITAL PRODUCTS",
                description: "No hacemos \"paginitas\". Construimos plataformas robustas que soportan tu crecimiento y dominan tu nicho de mercado.",
                descriptionEn: "We don't do \"little websites\". We build robust platforms that support your growth and dominate your market niche.",
                tags: [
                    "SaaS",
                    "AI-Powered",
                    "Scalable"
                ]
            },
            {
                id: "02",
                title: "WEBS CORPORATIVAS DE ALTO IMPACTO",
                titleEn: "HIGH-IMPACT CORPORATE WEBSITES",
                description: "Tu sitio web es tu cerrador de ventas 24/7. Lo optimizamos para que cada visita cuente y cada scroll venda.",
                descriptionEn: "Your website is your 24/7 sales closer. We optimize it so every visit counts and every scroll sells.",
                tags: [
                    "Sales-Focused",
                    "Fast",
                    "SEO-Elite"
                ]
            },
            {
                id: "03",
                title: "ECOMMERCE AGRESIVO",
                titleEn: "AGGRESSIVE ECOMMERCE",
                description: "Eliminamos la fricci\xF3n en el checkout. Convertimos carritos abandonados en transacciones completadas con tecnolog\xEDa de punta.",
                descriptionEn: "We eliminate friction at checkout. We turn abandoned carts into completed transactions with cutting-edge technology.",
                tags: [
                    "Conversion",
                    "UX-Psychology",
                    "Secure"
                ]
            },
            {
                id: "04",
                title: "INTELIGENCIA ARTIFICIAL APLICADA",
                titleEn: "APPLIED ARTIFICIAL INTELLIGENCE",
                description: "Integramos cerebros digitales en tu flujo de trabajo. Automatizamos lo mundano para que tu equipo se enfoque en lo extraordinario.",
                descriptionEn: "We integrate digital brains into your workflow. We automate the mundane so your team can focus on the extraordinary.",
                tags: [
                    "Automation",
                    "LLMs",
                    "Efficiency"
                ]
            }
        ];
        t6 = "services";
        t7 = "mxd-section";
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = {
                backgroundColor: "#161616",
                padding: "100px 0"
            };
            $[11] = t8;
        } else {
            t8 = $[11];
        }
        t5 = "mxd-container grid-container";
        t4 = "mxd-block mxd-grid-item no-margin";
        t3 = "content__block";
        t0 = "services-stack";
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = {
                display: "flex",
                flexDirection: "column",
                gap: "40px"
            };
            $[12] = t1;
        } else {
            t1 = $[12];
        }
        t2 = services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stack-item",
                style: {
                    position: "sticky",
                    top: `${100 + index * 20}px`,
                    backgroundColor: index % 2 === 0 ? "#1a1a1a" : "#10B981",
                    borderRadius: "24px",
                    padding: "60px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    color: index % 2 === 0 ? "#FAF7F6" : "#161616"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mxd-services-stack__container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                marginBottom: "40px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "2.5rem",
                                        fontWeight: "bold",
                                        maxWidth: "600px",
                                        margin: 0
                                    },
                                    children: language === "es" ? service.title : service.titleEn
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
                                    lineNumber: 95,
                                    columnNumber: 12
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        opacity: 0.5
                                    },
                                    children: [
                                        "/",
                                        service.id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
                                    lineNumber: 100,
                                    columnNumber: 72
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
                            lineNumber: 90,
                            columnNumber: 55
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: "800px",
                                marginBottom: "40px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "1.3rem",
                                    lineHeight: "1.6",
                                    opacity: 0.9
                                },
                                children: language === "es" ? service.description : service.descriptionEn
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
                                lineNumber: 107,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
                            lineNumber: 104,
                            columnNumber: 40
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "15px"
                            },
                            children: service.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        padding: "8px 20px",
                                        borderRadius: "100px",
                                        border: `1px solid ${index % 2 === 0 ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
                                        fontSize: "0.9rem",
                                        fontWeight: "bold"
                                    },
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
                                    lineNumber: 114,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
                            lineNumber: 111,
                            columnNumber: 89
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
                    lineNumber: 90,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0))
            }, service.id, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
                lineNumber: 81,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0)));
        $[1] = language;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
    } else {
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
    }
    let t9;
    if ($[13] !== t0 || $[14] !== t1 || $[15] !== t2) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            style: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t0;
        $[14] = t1;
        $[15] = t2;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t3 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t9
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t3;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t10
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t10;
        $[21] = t4;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11 || $[24] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t11
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t11;
        $[24] = t5;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t12 || $[27] !== t6 || $[28] !== t7 || $[29] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t6,
            className: t7,
            style: t8,
            children: t12
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t12;
        $[27] = t6;
        $[28] = t7;
        $[29] = t8;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    return t13;
};
_s(RayoServices, "FlN/ZbmDt9Cr5Bksrso5IP5a1aE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = RayoServices;
const __TURBOPACK__default__export__ = RayoServices;
var _c;
__turbopack_context__.k.register(_c, "RayoServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const RayoCapabilities = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "6bef8e9f3b920f654d80ccedc49dadd7bcdde88381b97f9f3ba9ca8dc4a0ca02") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6bef8e9f3b920f654d80ccedc49dadd7bcdde88381b97f9f3ba9ca8dc4a0ca02";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                title: "CONSULTOR\xCDA ESTRAT\xC9GICA",
                titleEn: "STRATEGIC CONSULTANCY",
                desc: "Analizamos tu modelo de negocio y encontramos los cuellos de botella tecnol\xF3gicos. No solo programamos, optimizamos tu rentabilidad.",
                descEn: "We analyze your business model and find technological bottlenecks. We don't just code, we optimize your profitability."
            },
            {
                title: "UX/UI PSICOL\xD3GICO",
                titleEn: "PSYCHOLOGICAL UX/UI",
                desc: "Dise\xF1amos interfaces que gu\xEDan al usuario hacia la conversi\xF3n. Utilizamos psicolog\xEDa aplicada para retener y convertir.",
                descEn: "We design interfaces that guide the user towards conversion. We use applied psychology to retain and convert."
            },
            {
                title: "DEVELOPMENT DE ALTA DISPONIBILIDAD",
                titleEn: "HIGH AVAILABILITY DEVELOPMENT",
                desc: "Arquitecturas escalables preparadas para el tr\xE1fico masivo. Cero ca\xEDdas, m\xE1xima velocidad, seguridad impenetrable.",
                descEn: "Scalable architectures prepared for massive traffic. Zero downtime, maximum speed, impenetrable security."
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const capabilities = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            backgroundColor: "#0f0f0f",
            padding: "120px 0",
            borderTop: "1px solid rgba(255,255,255,0.05)"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px"
        };
        t3 = {
            marginBottom: "80px"
        };
        t4 = {
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: "bold",
            color: "#FAF7F6",
            margin: 0
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    const t5 = language === "es" ? "NUESTRAS" : "OUR";
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            color: "#10B981"
        };
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const t7 = language === "es" ? "CAPACIDADES" : "CAPABILITIES";
    let t8;
    if ($[7] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== t5 || $[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: t4,
                children: [
                    t5,
                    " ",
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
                lineNumber: 98,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px"
        };
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== language) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t10,
            children: capabilities.map((cap, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingRight: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    color: "#10B981",
                                    fontSize: "1.5rem",
                                    marginBottom: "20px",
                                    fontWeight: "bold"
                                },
                                children: language === "es" ? cap.title : cap.titleEn
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
                                lineNumber: 120,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#FAF7F6",
                                    opacity: 0.7,
                                    fontSize: "1.1rem",
                                    lineHeight: "1.7"
                                },
                                children: language === "es" ? cap.desc : cap.descEn
                            }, void 0, false, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
                                lineNumber: 125,
                                columnNumber: 64
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
                        lineNumber: 118,
                        columnNumber: 79
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
                    lineNumber: 118,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = language;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t11 || $[16] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "capabilities",
            className: "mxd-section",
            style: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mxd-container",
                style: t2,
                children: [
                    t9,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
                lineNumber: 138,
                columnNumber: 73
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t11;
        $[16] = t9;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    return t12;
};
_s(RayoCapabilities, "FlN/ZbmDt9Cr5Bksrso5IP5a1aE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = RayoCapabilities;
const __TURBOPACK__default__export__ = RayoCapabilities;
var _c;
__turbopack_context__.k.register(_c, "RayoCapabilities");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const clients = [
    {
        name: "Ruby Wager",
        url: "https://rubywager.com",
        logo: "/logos/Ruby-Wager-Logo.png"
    },
    {
        name: "HiHub Global",
        url: "https://hihubglobal.com",
        logo: "/logos/logo-hihub-white.png"
    },
    {
        name: "Olavivo",
        url: "https://olavivo.com",
        logo: "/logos/OLAVIVO.png"
    },
    {
        name: "Riviera CR",
        url: "https://rivieracr.net",
        logo: "/logos/logo-riviera.png"
    },
    {
        name: "Reserva",
        url: "https://reserva.com",
        logo: "/logos/Logo-Reserva-08_GOLD-e1718579433972-768x779.png"
    }
];
const RayoClients = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "f60bf03c3c9666397f45ca462fa5b8aee988bba1e817017c17b6b32de4f67502") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f60bf03c3c9666397f45ca462fa5b8aee988bba1e817017c17b6b32de4f67502";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            padding: "100px 0",
            backgroundColor: "#161616",
            borderTop: "1px solid rgba(255,255,255,0.05)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            marginBottom: "60px"
        };
        t2 = {
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "900",
            color: "#FAF7F6",
            textTransform: "uppercase",
            lineHeight: "1"
        };
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    const t3 = language === "es" ? "EMPRESAS QUE " : "COMPANIES THAT ";
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            color: "#10B981"
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = language === "es" ? "CONF\xCDAN EN NOSOTROS" : "TRUST US";
    let t6;
    if ($[5] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== t3 || $[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: t2,
                children: [
                    t3,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx",
                lineNumber: 89,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t3;
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "2px"
            },
            children: clients.map(_temp3)
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "clients",
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mxd-container",
                children: [
                    t7,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx",
                lineNumber: 109,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t7;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    return t9;
};
_s(RayoClients, "FlN/ZbmDt9Cr5Bksrso5IP5a1aE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = RayoClients;
const __TURBOPACK__default__export__ = RayoClients;
function _temp(e) {
    e.currentTarget.style.backgroundColor = "rgba(16,185,129,0.06)";
    e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";
}
function _temp2(e_0) {
    e_0.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
    e_0.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
}
function _temp3(client) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: client.url,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px 30px",
            border: "1px solid rgba(255,255,255,0.06)",
            textDecoration: "none",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(255,255,255,0.02)"
        },
        onMouseEnter: _temp,
        onMouseLeave: _temp2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: client.logo,
            alt: client.name,
            style: {
                maxWidth: "140px",
                maxHeight: "60px",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                opacity: 0.7
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx",
            lineNumber: 136,
            columnNumber: 49
        }, this)
    }, client.name, false, {
        fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx",
        lineNumber: 127,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "RayoClients");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const RayoTestimonials = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "12df9b4e6c5ff91e4de5def938a822a66cf260c40b9a4bc3bd20c0a10cc47316") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12df9b4e6c5ff91e4de5def938a822a66cf260c40b9a4bc3bd20c0a10cc47316";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                quote: "Fue un placer trabajar con Manuel para implementar nuestras aplicaciones integradas de Sora. Su nivel de ingenio para crear soluciones de automatizaci\xF3n inteligente es de otro nivel. Realmente entiende c\xF3mo unir el dise\xF1o con la funcionalidad t\xE9cnica compleja.",
                quoteEn: "It was a pleasure working with Manuel to implement our integrated Sora applications. His level of ingenuity in creating intelligent automation solutions is on another level. He truly understands how to bridge design with complex technical functionality.",
                author: "Priscila Chaverri",
                role: "Global Manager @ Amazon",
                avatar: "https://dummyimage.com/100x100/10B981/161616&text=PC"
            },
            {
                quote: "Manuel no solo es un desarrollador Full Stack excepcional, sino un arquitecto de soluciones. Su capacidad para manejar proyectos de IA y frontend simult\xE1neamente es impresionante. Es el socio tecnol\xF3gico que cualquier startup de alto nivel necesita.",
                quoteEn: "Manuel is not just an exceptional Full Stack developer \u2014 he is a solutions architect. His ability to handle AI and frontend projects simultaneously is impressive. He is the technology partner that any high-level startup needs.",
                author: "Kattia C.",
                role: "Senior Manager @ Amazon",
                avatar: "https://dummyimage.com/100x100/10B981/161616&text=KC"
            },
            {
                quote: "Trabajar con Manuel en proyectos de automatizaci\xF3n de procesos fue una experiencia reveladora. Su enfoque agresivo hacia la eficiencia y el c\xF3digo limpio transform\xF3 nuestra forma de operar. Es un experto que no teme a los desaf\xEDos t\xE9cnicos m\xE1s grandes.",
                quoteEn: "Working with Manuel on process automation projects was a revealing experience. His aggressive approach to efficiency and clean code transformed the way we operate. He is an expert who does not shy away from the biggest technical challenges.",
                author: "Andr\xE9s B.",
                role: "Operations Lead @ Amazon",
                avatar: "https://dummyimage.com/100x100/10B981/161616&text=AB"
            },
            {
                quote: "La atenci\xF3n al detalle y la visi\xF3n estrat\xE9gica de Manuel son impecables. Logr\xF3 traducir nuestras necesidades de negocio en una plataforma robusta y escalable. Su dominio de React y Node.js es de los mejores que he visto.",
                quoteEn: "Manuel's attention to detail and strategic vision are impeccable. He managed to translate our business needs into a robust and scalable platform. His command of React and Node.js is among the best I have ever seen.",
                author: "Luc\xEDa M.",
                role: "Product Owner @ Amazon",
                avatar: "https://dummyimage.com/100x100/10B981/161616&text=LM"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const testimonials = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            padding: "120px 0",
            backgroundColor: "#0f0f0f",
            borderTop: "1px solid rgba(255,255,255,0.05)"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            marginBottom: "80px"
        };
        t3 = {
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "900",
            color: "#FAF7F6",
            textTransform: "uppercase",
            lineHeight: "1"
        };
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    const t4 = language === "es" ? "LO QUE DICEN NUESTROS" : "WHAT OUR";
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = {
            color: "#10B981"
        };
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    const t7 = language === "es" ? "ALIADOS ESTRAT\xC9GICOS" : "STRATEGIC ALLIES SAY";
    let t8;
    if ($[7] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== t4 || $[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: t3,
                children: [
                    t4,
                    " ",
                    t5,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                lineNumber: 106,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px"
        };
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== language) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t10,
            children: testimonials.map((t, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 0.5,
                        delay: index * 0.1
                    },
                    viewport: {
                        once: true
                    },
                    style: {
                        backgroundColor: "#161616",
                        borderRadius: "32px",
                        padding: "50px",
                        border: "1px solid rgba(255,255,255,0.05)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                            size: 40,
                            style: {
                                color: "#10B981",
                                marginBottom: "30px",
                                opacity: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                            lineNumber: 146,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "1.1rem",
                                lineHeight: "1.7",
                                color: "#FAF7F6",
                                marginBottom: "40px",
                                fontStyle: "italic"
                            },
                            children: [
                                '"',
                                language === "es" ? t.quote : t.quoteEn,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                            lineNumber: 150,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: t.avatar,
                                    alt: t.author,
                                    style: {
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                                    lineNumber: 160,
                                    columnNumber: 12
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                color: "#FAF7F6",
                                                fontWeight: "900",
                                                margin: 0
                                            },
                                            children: t.author
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                                            lineNumber: 165,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#10B981",
                                                fontSize: "0.9rem",
                                                margin: 0
                                            },
                                            children: t.role
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                                            lineNumber: 169,
                                            columnNumber: 31
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                                    lineNumber: 165,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                            lineNumber: 156,
                            columnNumber: 59
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                    lineNumber: 126,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = language;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t11 || $[16] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "testimonials",
            className: "mxd-section",
            style: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mxd-container",
                children: [
                    t9,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
                lineNumber: 181,
                columnNumber: 73
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t11;
        $[16] = t9;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    return t12;
};
_s(RayoTestimonials, "FlN/ZbmDt9Cr5Bksrso5IP5a1aE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = RayoTestimonials;
const __TURBOPACK__default__export__ = RayoTestimonials;
var _c;
__turbopack_context__.k.register(_c, "RayoTestimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const RayoContact = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "c92cce81056fa2addfbc50d73f4957eacbd9f9b0bd0adac2317d58f71985805b") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c92cce81056fa2addfbc50d73f4957eacbd9f9b0bd0adac2317d58f71985805b";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== focused) {
        t0 = (name)=>({
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: `2px solid ${focused === name ? "#10B981" : "rgba(255,255,255,0.15)"}`,
                padding: "16px 0",
                color: "#FAF7F6",
                fontSize: "1.1rem",
                outline: "none",
                transition: "border-color 0.3s ease",
                boxSizing: "border-box"
            });
        $[1] = focused;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const inputStyle = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            padding: "120px 0",
            backgroundColor: "#0d0d0d",
            borderTop: "1px solid rgba(255,255,255,0.05)"
        };
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            paddingRight: "60px",
            marginBottom: "60px"
        };
        t3 = {
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: "900",
            color: "#FAF7F6",
            textTransform: "uppercase",
            lineHeight: "0.9",
            marginBottom: "40px"
        };
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    const t4 = language === "es" ? "\xBFLISTO PARA EL " : "READY FOR THE ";
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            color: "#10B981"
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = language === "es" ? "SIGUIENTE NIVEL?" : "NEXT LEVEL?";
    let t7;
    if ($[7] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== t4 || $[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            style: t3,
            children: [
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            fontSize: "1.2rem",
            color: "#838383",
            lineHeight: "1.7",
            maxWidth: "450px",
            marginBottom: "50px"
        };
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const t10 = language === "es" ? "No buscamos clientes, buscamos socios estrat\xE9gicos. Si tu proyecto requiere ingenier\xEDa de \xE9lite, hablemos sin rodeos." : "We don't look for clients, we look for strategic partners. If your project requires elite engineering, let's talk straight.";
    let t11;
    if ($[13] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t10;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            display: "flex",
            flexDirection: "column",
            gap: "24px"
        };
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "#838383",
                fontSize: "0.85rem",
                fontWeight: "bold",
                margin: "0 0 6px"
            },
            children: "EMAIL"
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t12;
        $[16] = t13;
    } else {
        t12 = $[15];
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t12,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t13,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:manu@manuportuguez.com",
                            style: {
                                color: "#FAF7F6",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                textDecoration: "none"
                            },
                            children: "manu@manuportuguez.com"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
                            lineNumber: 142,
                            columnNumber: 38
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
                    lineNumber: 142,
                    columnNumber: 28
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#838383",
                                fontSize: "0.85rem",
                                fontWeight: "bold",
                                margin: "0 0 6px"
                            },
                            children: "UBICACIÓN"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
                            lineNumber: 147,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#FAF7F6",
                                fontSize: "1.1rem",
                                margin: 0
                            },
                            children: "San José, Curridabat, Costa Rica 🇨🇷"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
                            lineNumber: 152,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
                    lineNumber: 147,
                    columnNumber: 44
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== t11 || $[19] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12 col-md-6",
            style: t2,
            children: [
                t8,
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t11;
        $[19] = t8;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    let t17;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            display: "flex",
            flexDirection: "column",
            gap: "36px"
        };
        t17 = {
            display: "block",
            color: "#838383",
            fontSize: "0.8rem",
            fontWeight: "bold",
            marginBottom: "8px",
            letterSpacing: "2px"
        };
        $[21] = t16;
        $[22] = t17;
    } else {
        t16 = $[21];
        t17 = $[22];
    }
    const t18 = language === "es" ? "NOMBRE COMPLETO" : "FULL NAME";
    let t19;
    if ($[23] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            style: t17,
            children: t18
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t18;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] !== inputStyle) {
        t20 = inputStyle("name");
        $[25] = inputStyle;
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    let t22;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ()=>setFocused("name");
        t22 = ()=>setFocused(null);
        $[27] = t21;
        $[28] = t22;
    } else {
        t21 = $[27];
        t22 = $[28];
    }
    const t23 = language === "es" ? "Tu nombre aqu\xED..." : "Your name here...";
    let t24;
    if ($[29] !== t20 || $[30] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            style: t20,
            onFocus: t21,
            onBlur: t22,
            placeholder: t23
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t20;
        $[30] = t23;
        $[31] = t24;
    } else {
        t24 = $[31];
    }
    let t25;
    if ($[32] !== t19 || $[33] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t19;
        $[33] = t24;
        $[34] = t25;
    } else {
        t25 = $[34];
    }
    let t26;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            style: {
                display: "block",
                color: "#838383",
                fontSize: "0.8rem",
                fontWeight: "bold",
                marginBottom: "8px",
                letterSpacing: "2px"
            },
            children: "EMAIL"
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t26;
    } else {
        t26 = $[35];
    }
    let t27;
    if ($[36] !== inputStyle) {
        t27 = inputStyle("email");
        $[36] = inputStyle;
        $[37] = t27;
    } else {
        t27 = $[37];
    }
    let t28;
    let t29;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ()=>setFocused("email");
        t29 = ()=>setFocused(null);
        $[38] = t28;
        $[39] = t29;
    } else {
        t28 = $[38];
        t29 = $[39];
    }
    let t30;
    if ($[40] !== t27) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    style: t27,
                    onFocus: t28,
                    onBlur: t29,
                    placeholder: "email@empresa.com"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
                    lineNumber: 274,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t27;
        $[41] = t30;
    } else {
        t30 = $[41];
    }
    let t31;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            display: "block",
            color: "#838383",
            fontSize: "0.8rem",
            fontWeight: "bold",
            marginBottom: "8px",
            letterSpacing: "2px"
        };
        $[42] = t31;
    } else {
        t31 = $[42];
    }
    const t32 = language === "es" ? "TU PROYECTO" : "YOUR PROJECT";
    let t33;
    if ($[43] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            style: t31,
            children: t32
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t32;
        $[44] = t33;
    } else {
        t33 = $[44];
    }
    let t34;
    if ($[45] !== inputStyle) {
        t34 = {
            ...inputStyle("message"),
            resize: "none"
        };
        $[45] = inputStyle;
        $[46] = t34;
    } else {
        t34 = $[46];
    }
    let t35;
    let t36;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = ()=>setFocused("message");
        t36 = ()=>setFocused(null);
        $[47] = t35;
        $[48] = t36;
    } else {
        t35 = $[47];
        t36 = $[48];
    }
    const t37 = language === "es" ? "Cu\xE9ntanos tu visi\xF3n..." : "Tell us your vision...";
    let t38;
    if ($[49] !== t34 || $[50] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            rows: 4,
            style: t34,
            onFocus: t35,
            onBlur: t36,
            placeholder: t37
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t34;
        $[50] = t37;
        $[51] = t38;
    } else {
        t38 = $[51];
    }
    let t39;
    if ($[52] !== t33 || $[53] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t33;
        $[53] = t38;
        $[54] = t39;
    } else {
        t39 = $[54];
    }
    let t40;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = {
            backgroundColor: "#10B981",
            color: "#161616",
            border: "none",
            padding: "20px 48px",
            borderRadius: "100px",
            fontSize: "1rem",
            fontWeight: "900",
            letterSpacing: "2px",
            cursor: "pointer",
            alignSelf: "flex-start",
            transition: "all 0.3s ease"
        };
        $[55] = t40;
    } else {
        t40 = $[55];
    }
    const t41 = language === "es" ? "ENVIAR MENSAJE \u2192" : "SEND MESSAGE \u2192";
    let t42;
    if ($[56] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            style: t40,
            onMouseEnter: _temp,
            onMouseLeave: _temp2,
            children: t41
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t41;
        $[57] = t42;
    } else {
        t42 = $[57];
    }
    let t43;
    if ($[58] !== t25 || $[59] !== t30 || $[60] !== t39 || $[61] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12 col-md-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                style: t16,
                children: [
                    t25,
                    t30,
                    t39,
                    t42
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
                lineNumber: 374,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t25;
        $[59] = t30;
        $[60] = t39;
        $[61] = t42;
        $[62] = t43;
    } else {
        t43 = $[62];
    }
    let t44;
    if ($[63] !== t15 || $[64] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            style: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mxd-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        t15,
                        t43
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
                    lineNumber: 385,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
                lineNumber: 385,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = t15;
        $[64] = t43;
        $[65] = t44;
    } else {
        t44 = $[65];
    }
    return t44;
};
_s(RayoContact, "oxe4TvqCTBn0ZHaqmxN2p0vMysQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = RayoContact;
const __TURBOPACK__default__export__ = RayoContact;
function _temp(e) {
    e.currentTarget.style.backgroundColor = "#059669";
    e.currentTarget.style.transform = "scale(1.03)";
}
function _temp2(e_0) {
    e_0.currentTarget.style.backgroundColor = "#10B981";
    e_0.currentTarget.style.transform = "scale(1)";
}
var _c;
__turbopack_context__.k.register(_c, "RayoContact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const RayoFooter = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "e412565f891e6ce6f1a5681f7d02db48a7ff51e9f970b9a3c6121ab54778fe84") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e412565f891e6ce6f1a5681f7d02db48a7ff51e9f970b9a3c6121ab54778fe84";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            padding: "80px 0 40px",
            backgroundColor: "#0a0a0a",
            borderTop: "1px solid rgba(255,255,255,0.05)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
            marginBottom: "60px"
        };
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: "4rem",
                        fontWeight: "900",
                        color: "#10B981",
                        margin: 0,
                        lineHeight: "0.85",
                        letterSpacing: "-0.03em"
                    },
                    children: "CODECRAFTT"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
                    lineNumber: 43,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: "1rem",
                        color: "#838383",
                        margin: "10px 0 0",
                        fontWeight: "bold",
                        letterSpacing: "3px"
                    },
                    children: "TECH ELITE AGENCY"
                }, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
                    lineNumber: 50,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = {
            display: "flex",
            gap: "40px",
            alignItems: "flex-end"
        };
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: "12px"
            },
            children: [
                "#hero",
                "#services",
                "#work",
                "#contact"
            ].map(_temp3)
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = {
            textAlign: "right"
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "#838383",
                fontSize: "0.9rem",
                margin: "0 0 6px"
            },
            children: "San José, Costa Rica 🇨🇷"
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t3,
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: t5,
                            children: [
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:manu@manuportuguez.com",
                                    style: {
                                        color: "#FAF7F6",
                                        fontSize: "0.95rem",
                                        textDecoration: "none",
                                        fontWeight: "bold"
                                    },
                                    children: "manu@manuportuguez.com"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
                                    lineNumber: 93,
                                    columnNumber: 70
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
                            lineNumber: 93,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
                    lineNumber: 93,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = {
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            color: "#333",
            fontSize: "0.8rem"
        };
        t9 = {
            margin: 0
        };
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t9,
            children: [
                "© ",
                new Date().getFullYear(),
                " CODECRAFTT — BUILT WITH AI. ENGINEERED FOR PERFORMANCE."
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t11 = {
            margin: 0
        };
        $[11] = t10;
        $[12] = t11;
    } else {
        t10 = $[11];
        t11 = $[12];
    }
    const t12 = language === "es" ? "Creado por " : "Created by ";
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: "#10B981",
                fontWeight: "bold"
            },
            children: "Manuel Portuguez"
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    let t14;
    if ($[14] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mxd-container",
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: t8,
                        children: [
                            t10,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: t11,
                                children: [
                                    t12,
                                    t13,
                                    " \xB7 Sr. Full Stack Developer"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
                                lineNumber: 147,
                                columnNumber: 86
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
                        lineNumber: 147,
                        columnNumber: 65
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
                lineNumber: 147,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t12;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    return t14;
};
_s(RayoFooter, "FlN/ZbmDt9Cr5Bksrso5IP5a1aE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = RayoFooter;
const __TURBOPACK__default__export__ = RayoFooter;
function _temp(e) {
    e.currentTarget.style.color = "#10B981";
}
function _temp2(e_0) {
    e_0.currentTarget.style.color = "#838383";
}
function _temp3(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: link,
        style: {
            color: "#838383",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            transition: "color 0.2s"
        },
        onMouseEnter: _temp,
        onMouseLeave: _temp2,
        children: link.replace("#", "").toUpperCase()
    }, link, false, {
        fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx",
        lineNumber: 163,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "RayoFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/Rayo/RayoHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/Rayo/RayoServices.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoCapabilities$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/Rayo/RayoCapabilities.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoClients$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/Rayo/RayoClients.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoTestimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/Rayo/RayoTestimonials.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/Rayo/RayoContact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/Rayo/RayoFooter.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const RayoTransformation = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "83a450df40fbdbd36fd9ec0c4c681f02ea9c4720637ce3e58ba1a6fd8515021d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "83a450df40fbdbd36fd9ec0c4c681f02ea9c4720637ce3e58ba1a6fd8515021d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: "#161616"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx",
                    lineNumber: 24,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx",
                    lineNumber: 24,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoCapabilities$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx",
                    lineNumber: 24,
                    columnNumber: 36
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoClients$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx",
                    lineNumber: 24,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoTestimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx",
                    lineNumber: 24,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx",
                    lineNumber: 24,
                    columnNumber: 91
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx",
                    lineNumber: 24,
                    columnNumber: 106
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = RayoTransformation;
const __TURBOPACK__default__export__ = RayoTransformation;
var _c;
__turbopack_context__.k.register(_c, "RayoTransformation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/codecraft-main/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoTransformation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/src/components/Rayo/RayoTransformation.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "a33bb2259af4af6884eaf11bd0d6d8775c77fde52401dba9cbb0f7ccc5f51989") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a33bb2259af4af6884eaf11bd0d6d8775c77fde52401dba9cbb0f7ccc5f51989";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            style: {
                backgroundColor: "#161616",
                color: "#FAF7F6"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/app/page.tsx",
                    lineNumber: 20,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$src$2f$components$2f$Rayo$2f$RayoTransformation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/codecraft-main/src/app/page.tsx",
                    lineNumber: 20,
                    columnNumber: 18
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/codecraft-main/src/app/page.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_codecraft-main_src_62539cce._.js.map