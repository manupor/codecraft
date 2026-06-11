(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__3a33b31b._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Downloads/codecraft-main/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/codecraft-main/node_modules/next-auth/jwt/index.js [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    // Protected routes that require authentication
    const protectedRoutes = [
        '/landing-builder',
        '/dashboard',
        '/profile'
    ];
    // Check if the current path is protected
    const isProtectedRoute = protectedRoutes.some((route)=>pathname.startsWith(route));
    if (isProtectedRoute) {
        // Check for NextAuth session token
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getToken"])({
            req: request,
            secret: process.env.NEXTAUTH_SECRET
        });
        // If no token, redirect to login
        if (!token) {
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$codecraft$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/landing-builder/:path*',
        '/dashboard/:path*',
        '/profile/:path*'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__3a33b31b._.js.map