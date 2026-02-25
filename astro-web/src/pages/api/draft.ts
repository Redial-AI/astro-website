import type { APIRoute } from "astro";

export const GET: APIRoute = ({ url, cookies, redirect }) => {
    const documentId = url.searchParams.get("documentId");
    const path = url.searchParams.get("path") || "/";

    if (!documentId) {
        return new Response("Missing documentId", { status: 400 });
    }

    // Set the preview cookie (equivalent to Next.js draftMode)
    cookies.set("astro-preview", "true", {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60, // 1 hour
    });

    return redirect(path, 302);
};
