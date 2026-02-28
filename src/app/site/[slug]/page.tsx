"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function PublishedSitePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchSite = async () => {
      try {
        setLoading(true);
        const AUTH_SERVICE_URL =
          process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || "http://localhost:4000";

        const response = await fetch(
          `${AUTH_SERVICE_URL}/api/landings/site/${slug}`
        );

        if (!response.ok) {
          setError("Site not found");
          return;
        }

        const data = await response.json();
        if (data.success && data.site?.html) {
          setHtml(data.site.html);
        } else {
          setError("Site not found");
        }
      } catch (err) {
        console.error("Error fetching site:", err);
        setError("Error loading site");
      } finally {
        setLoading(false);
      }
    };

    fetchSite();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400 text-lg">Loading site...</p>
        </div>
      </div>
    );
  }

  if (error || !html) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
          <p className="text-gray-400 text-xl mb-6">
            {error || "Site not found"}
          </p>
          <a
            href="/"
            className="text-cyan-400 hover:text-cyan-300 underline text-lg"
          >
            ← Back to CodeCraftt
          </a>
        </div>
      </div>
    );
  }

  return (
    <iframe
      srcDoc={html}
      className="w-full h-screen border-0"
      title="Published Site"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    />
  );
}
