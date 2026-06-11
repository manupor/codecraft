module.exports=[58363,e=>{"use strict";var t=e.i(33154),a=e.i(91764),n=e.i(48362),r=e.i(1505),o=e.i(88337),s=e.i(32636),l=e.i(18543),i=e.i(40184),c=e.i(46005),d=e.i(89945),u=e.i(23668),p=e.i(33048),h=e.i(5833),g=e.i(68624),x=e.i(29713),m=e.i(93695);e.i(23786);var v=e.i(34049),f=e.i(93441);async function y(e){var t;let a,n,{prompt:r,images:o}=await e.json();if(!r||"string"!=typeof r)return f.NextResponse.json({error:"Invalid prompt provided"},{status:400});console.log("Generating landing page for prompt:",r.substring(0,50)+"..."),o&&o.length>0&&console.log(`Including ${o.length} reference images for cloning`);let s=process.env.PYTHON_AGENT_URL||"http://127.0.0.1:5000";try{console.log(`Attempting Python AI Agent call to ${s}...`);let e=new AbortController,t=setTimeout(()=>e.abort(),3e5),a=await fetch(`${s}/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:r,images:o||[]}),signal:e.signal});if(clearTimeout(t),a.ok){let e=await a.json();if(console.log("✅ Python AI Agent success! Provider:",e.provider),e.success&&e.html){let t=e.html;if(!t||!t.includes("<html")||t.length<500)throw console.error("❌ Invalid HTML received:",t?.substring(0,200)),Error("Generated content was invalid");if(t.includes("Given the complexities")||t.includes("I understand")||t.includes("Let me create"))throw console.error("❌ HTML contains reasoning text"),Error("Response contains reasoning text instead of pure HTML");let a=`data:text/html;charset=utf-8,${encodeURIComponent(t)}`;return f.NextResponse.json({html:t,demoUrl:a,files:[{path:"page.tsx",content:e.react_code||t},{path:"index.html",content:t}],chatId:`ai-${Date.now()}`,provider:e.provider||"ai"})}}else{let e=await a.text();console.error("❌ Python AI Agent HTTP error:",a.status,e)}}catch(e){"AbortError"===e.name?console.error("❌ Python AI Agent timeout after 120 seconds"):console.error("❌ Python AI Agent exception:",e.message),console.log("⚠️  Falling back to enhanced mock generation...")}console.log("Using enhanced mock data for generation");let l=function(e){let t=e.toLowerCase(),a="Your Business";for(let t of[/(?:for|about|called)\s+(?:a\s+)?([^,\.]+?)(?:\s+in|\s+located|\s+based|,|\.|\s+that|\s+which)/i,/(?:landing page for|website for)\s+([^,\.]+)/i]){let n=e.match(t);if(n&&n[1]){a=n[1].trim();break}}let n="",r=e.match(/(?:in|located in|based in|from)\s+([^,\.]+(?:,\s*[^,\.]+)?)/i);r&&(n=r[1].trim());let o="Get Started",s=e.match(/CTA[:\s]+['"]([^'"]+)['"]/i);s&&(o=s[1].trim());let l=`Transform Your Experience with ${a}`,i="Discover innovative solutions tailored to your needs.";t.includes("restaurant")||t.includes("café")||t.includes("cafe")?(l=`Experience Authentic Cuisine at ${a}`,i=n?`Serving delicious food in ${n}`:"Where every meal is a celebration",o="Get Started"===o?"Reserve a Table":o):t.includes("salon")||t.includes("spa")||t.includes("beauty")?(l=`Look & Feel Your Best at ${a}`,i=n?`Premium beauty services in ${n}`:"Expert care for your beauty needs",o="Get Started"===o?"Book Appointment":o):t.includes("gym")||t.includes("fitness")?(l=`Transform Your Body at ${a}`,i=n?`Your fitness journey starts in ${n}`:"Achieve your fitness goals",o="Get Started"===o?"Start Free Trial":o):t.includes("lawyer")||t.includes("legal")?(l=`Expert Legal Services - ${a}`,i=n?`Trusted legal representation in ${n}`:"Protecting your rights",o="Get Started"===o?"Free Consultation":o):(t.includes("dentist")||t.includes("dental")||t.includes("clinic"))&&(l=`Quality Healthcare at ${a}`,i=n?`Caring for your health in ${n}`:"Compassionate care",o="Get Started"===o?"Schedule Appointment":o);let c="#3B82F6",d="#60A5FA",u="#1E3A8A";return t.includes("green")||t.includes("emerald")?(c="#10B981",d="#34D399",u="#065F46"):t.includes("rose")||t.includes("pink")?(c="#F43F5E",d="#FB7185",u="#9F1239"):t.includes("purple")||t.includes("violet")?(c="#8B5CF6",d="#A78BFA",u="#5B21B6"):t.includes("orange")||t.includes("amber")?(c="#F59E0B",d="#FBBF24",u="#92400E"):(t.includes("teal")||t.includes("cyan"))&&(c="#14B8A6",d="#2DD4BF",u="#115E59"),`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${a}${n?` - ${n}`:""}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-bg { background: linear-gradient(135deg, ${u} 0%, #000000 100%); }
    .btn-primary { background-color: ${c}; transition: all 0.3s ease; }
    .btn-primary:hover { background-color: ${d}; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
    .card { backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.3s ease; }
    .card:hover { border-color: ${c}; background: rgba(255, 255, 255, 0.08); }
  </style>
</head>
<body class="gradient-bg text-white">
  <section class="container mx-auto px-6 py-20 text-center">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">${l}</h1>
    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">${i}</p>
    <div class="flex gap-4 justify-center flex-wrap">
      <button class="btn-primary text-white font-bold py-4 px-8 rounded-lg text-lg">${o}</button>
      <button class="border-2 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white/10 transition" style="border-color: ${c}">Learn More</button>
    </div>
  </section>

  <section class="container mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="card p-8 rounded-xl">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: ${c}20">
          <svg class="w-6 h-6" style="color: ${c}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Premium Quality</h3>
        <p class="text-gray-400">We deliver exceptional quality in everything we do, ensuring your complete satisfaction.</p>
      </div>
      <div class="card p-8 rounded-xl">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: ${c}20">
          <svg class="w-6 h-6" style="color: ${c}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Lightning Fast</h3>
        <p class="text-gray-400">Quick turnaround times without compromising on quality or attention to detail.</p>
      </div>
      <div class="card p-8 rounded-xl">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: ${c}20">
          <svg class="w-6 h-6" style="color: ${c}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Best Value</h3>
        <p class="text-gray-400">Competitive pricing that delivers outstanding value for your investment.</p>
      </div>
    </div>
  </section>

  <section class="container mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div class="card p-6 rounded-xl">
        <div class="flex gap-1 mb-4">
          <span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span>
        </div>
        <p class="text-gray-300 mb-4">"Absolutely fantastic service! Exceeded all expectations and delivered exactly what we needed."</p>
        <p class="font-semibold" style="color: ${c}">Sarah Johnson</p>
        <p class="text-sm text-gray-400">CEO, Tech Innovations</p>
      </div>
      <div class="card p-6 rounded-xl">
        <div class="flex gap-1 mb-4">
          <span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span><span class="text-yellow-400">★</span>
        </div>
        <p class="text-gray-300 mb-4">"Professional, reliable, and a pleasure to work with. Highly recommend to anyone!"</p>
        <p class="font-semibold" style="color: ${c}">Michael Chen</p>
        <p class="text-sm text-gray-400">Marketing Director</p>
      </div>
    </div>
  </section>

  <section class="container mx-auto px-6 py-20 text-center">
    <div class="max-w-3xl mx-auto p-12 rounded-2xl" style="background: linear-gradient(135deg, ${c} 0%, ${d} 100%)">
      <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
      <p class="text-xl mb-8">Join hundreds of satisfied customers who trust us with their success.</p>
      <form class="flex gap-4 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
        <button class="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3 rounded-lg transition">Start Now</button>
      </form>
    </div>
  </section>

  <footer class="border-t border-white/10 py-12">
    <div class="container mx-auto px-6 text-center">
      <p class="text-gray-400 mb-4">\xa9 ${new Date().getFullYear()} ${a}. All rights reserved.</p>
      <div class="flex gap-6 justify-center text-sm text-gray-500">
        <a href="#" class="transition" style="hover: color: ${c}">Privacy Policy</a>
        <a href="#" class="transition" style="hover: color: ${c}">Terms of Service</a>
        <a href="#" class="transition" style="hover: color: ${c}">Contact</a>
      </div>
    </div>
  </footer>
</body>
</html>`}(r);return f.NextResponse.json({html:l,demoUrl:`data:text/html;charset=utf-8,${encodeURIComponent(l)}`,files:[{path:"page.tsx",content:(n=(a=(t=r).match(/(?:for|about)\s+(?:a\s+)?([^,\.]+)/i))?a[1].trim():"Your Business",`export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-green-400">${n}</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          ${t.substring(0,150)}
        </p>
        <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition">
          Get Started
        </button>
      </section>
    </div>
  );
}`)},{path:"index.html",content:l}],chatId:`mock-${Date.now()}`})}e.s(["POST",()=>y],88077);var b=e.i(88077);let w=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/generate-landing/route",pathname:"/api/generate-landing",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Downloads/New Folder With Items 3/codecraft-main/src/app/api/generate-landing/route.ts",nextConfigOutput:"",userland:b}),{workAsyncStorage:R,workUnitAsyncStorage:E,serverHooks:A}=w;function C(){return(0,n.patchFetch)({workAsyncStorage:R,workUnitAsyncStorage:E})}async function $(e,t,n){w.isDev&&(0,r.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let f="/api/generate-landing/route";f=f.replace(/\/index$/,"")||"/";let y=await w.prepare(e,t,{srcPage:f,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:b,params:R,nextConfig:E,parsedUrl:A,isDraftMode:C,prerenderManifest:$,routerServerContext:k,isOnDemandRevalidate:T,revalidateOnlyGenerated:P,resolvedPathname:S,clientReferenceManifest:N,serverActionsManifest:I}=y,F=(0,l.normalizeAppPath)(f),O=!!($.dynamicRoutes[F]||$.routes[S]),B=async()=>((null==k?void 0:k.render404)?await k.render404(e,t,A,!1):t.end("This page could not be found"),null);if(O&&!C){let e=!!$.routes[S],t=$.dynamicRoutes[F];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await B();throw new m.NoFallbackError}}let H=null;!O||w.isDev||C||(H="/index"===(H=S)?"/":H);let D=!0===w.isDev||!O,M=O&&!D;I&&N&&(0,s.setManifestsSingleton)({page:f,clientReferenceManifest:N,serverActionsManifest:I});let U=e.method||"GET",_=(0,o.getTracer)(),j=_.getActiveScopeSpan(),L={params:R,prerenderManifest:$,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:D,incrementalCache:(0,r.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,n,r)=>w.onRequestError(e,t,n,r,k)},sharedContext:{buildId:b}},q=new i.NodeNextRequest(e),G=new i.NodeNextResponse(t),Y=c.NextRequestAdapter.fromNodeNextRequest(q,(0,c.signalFromNodeResponse)(t));try{let s=async e=>w.handle(Y,L).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=_.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=a.get("next.route");if(n){let t=`${U} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${f}`)}),l=!!(0,r.getRequestMeta)(e,"minimalMode"),i=async r=>{var o,i;let c=async({previousCacheEntry:a})=>{try{if(!l&&T&&P&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await s(r);e.fetchMetrics=L.renderOpts.fetchMetrics;let i=L.renderOpts.pendingWaitUntil;i&&n.waitUntil&&(n.waitUntil(i),i=void 0);let c=L.renderOpts.collectedTags;if(!O)return await (0,p.sendResponse)(q,G,o,L.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(o.headers);c&&(t[x.NEXT_CACHE_TAGS_HEADER]=c),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==L.renderOpts.collectedRevalidate&&!(L.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&L.renderOpts.collectedRevalidate,n=void 0===L.renderOpts.collectedExpire||L.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:L.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:n}}}}catch(t){throw(null==a?void 0:a.isStale)&&await w.onRequestError(e,t,{routerKind:"App Router",routePath:f,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:T})},!1,k),t}},d=await w.handleResponse({req:e,nextConfig:E,cacheKey:H,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:$,isRoutePPREnabled:!1,isOnDemandRevalidate:T,revalidateOnlyGenerated:P,responseGenerator:c,waitUntil:n.waitUntil,isMinimalMode:l});if(!O)return null;if((null==d||null==(o=d.value)?void 0:o.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(i=d.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});l||t.setHeader("x-nextjs-cache",T?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,h.fromNodeOutgoingHttpHeaders)(d.value.headers);return l&&O||m.delete(x.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,g.getCacheControlHeader)(d.cacheControl)),await (0,p.sendResponse)(q,G,new Response(d.value.body,{headers:m,status:d.value.status||200})),null};j?await i(j):await _.withPropagatedContext(e.headers,()=>_.trace(d.BaseServerSpan.handleRequest,{spanName:`${U} ${f}`,kind:o.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},i))}catch(t){if(t instanceof m.NoFallbackError||await w.onRequestError(e,t,{routerKind:"App Router",routePath:F,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:T})},!1,k),O)throw t;return await (0,p.sendResponse)(q,G,new Response(null,{status:500})),null}}e.s(["handler",()=>$,"patchFetch",()=>C,"routeModule",()=>w,"serverHooks",()=>A,"workAsyncStorage",()=>R,"workUnitAsyncStorage",()=>E],58363)}];

//# sourceMappingURL=e738d_next_dist_esm_build_templates_app-route_741412e5.js.map