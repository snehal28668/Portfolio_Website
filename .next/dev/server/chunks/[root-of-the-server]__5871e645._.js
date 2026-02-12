module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/github-repos/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const DEFAULT_USERNAME = "snehal28668";
const USERNAME = process.env.GITHUB_USERNAME || process.env.NEXT_PUBLIC_GITHUB_USERNAME || DEFAULT_USERNAME;
const TOKEN = process.env.GITHUB_TOKEN;
const EXCLUDED_REPOS = new Set([
    "mind",
    "snehal-portfolio",
    "mind-ease",
    "mind-ease-",
    "special-code-",
    "portfolio",
    "resume"
]) // repos to hide from the projects list
;
async function GET() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const headers = {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "portfolio-site"
    };
    if (TOKEN) {
        headers.Authorization = `Bearer ${TOKEN}`;
    }
    const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=50`, {
        headers,
        next: {
            revalidate: 3600
        }
    });
    if (!response.ok) {
        const message = await response.text();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch repositories from GitHub.",
            details: message
        }, {
            status: response.status
        });
    }
    const repos = await response.json();
    const filteredRepos = repos.filter((repo)=>!EXCLUDED_REPOS.has(String(repo.name || "").toLowerCase()));
    // Custom project images mapping - add your project names and image paths here
    const customImages = {
        "ai-interview": "/ai-interview.jpg",
        "amazon-clone": "/amazon-clone.jpg",
        "analytics-dashboard": "/analytics-dashboard.png",
        "chat-ai-app": "/chat-ai-app.jpg",
        "collaboration-tool": "/collaboration-tool.jpg",
        "currency-exchange": "/currency-exchange.jpg",
        "ecommerce-store": "/ecommerce-store.jpg",
        "ml-model": "/ml-model.jpg",
        "password-manager": "/password-manager.jpg",
        "task-manager": "/task-manager.jpg"
    };
    const mapped = filteredRepos.map((repo)=>{
        const tags = Array.from(new Set([
            repo.language,
            ...Array.isArray(repo.topics) ? repo.topics : []
        ].filter(Boolean)));
        // Use custom image if available, otherwise fallback to GitHub opengraph
        const repoName = String(repo.name || "").toLowerCase();
        const customImage = customImages[repoName];
        const defaultImage = repo.full_name ? `https://opengraph.githubassets.com/1/${repo.full_name}` : undefined;
        return {
            id: repo.id,
            title: repo.name,
            description: repo.description || "No description provided.",
            tags,
            category: repo.language || "Other",
            image: customImage || defaultImage,
            github: repo.html_url,
            live: repo.homepage || repo.html_url
        };
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(mapped);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5871e645._.js.map