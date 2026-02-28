"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

interface Landing {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  html: string;
  thumbnail?: string;
  isPublished?: boolean;
  publishedUrl?: string;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [landings, setLandings] = useState<Landing[]>([]);
  const [loading, setLoading] = useState(true);
  const [publishingId, setPublishingId] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchLandings();
    }
  }, [session]);

  const fetchLandings = async () => {
    try {
      setLoading(true);
      const AUTH_SERVICE_URL = process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || "http://localhost:4000";
      const token = (session as any)?.accessToken;

      if (!token) {
        console.error("No access token available");
        setLandings([]);
        return;
      }

      const response = await fetch(`${AUTH_SERVICE_URL}/api/landings`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setLandings(data.landings || []);
      } else {
        console.error("Failed to fetch landings");
        setLandings([]);
      }
    } catch (error) {
      console.error("Error fetching landings:", error);
      setLandings([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePublishLanding = async (landingId: string) => {
    const customSlug = window.prompt("Enter a custom URL slug (e.g. 'my-coffee-shop'):");
    if (!customSlug) return;

    try {
      setPublishingId(landingId);
      const AUTH_SERVICE_URL = process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || "http://localhost:4000";
      const token = (session as any)?.accessToken;

      const res = await fetch(`${AUTH_SERVICE_URL}/api/landings/${landingId}/publish`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ slug: customSlug }),
      });

      if (res.ok) {
        const data = await res.json();
        setLandings(prev => prev.map(l => l.id === landingId
          ? { ...l, isPublished: true, publishedUrl: data.landing.publishedUrl }
          : l
        ));
        window.open(data.landing.publishedUrl, '_blank');
      } else {
        const err = await res.json();
        alert(err.message || "Failed to publish");
      }
    } catch (error) {
      console.error("Error publishing:", error);
      alert("Error publishing landing page");
    } finally {
      setPublishingId(null);
    }
  };

  const handleDeleteLanding = async (landingId: string) => {
    if (!confirm("Are you sure you want to delete this landing?")) {
      return;
    }

    try {
      const AUTH_SERVICE_URL = process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || "http://localhost:4000";
      const token = (session as any)?.accessToken;

      const response = await fetch(`${AUTH_SERVICE_URL}/api/landings/${landingId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Remove from local state
        setLandings(landings.filter(l => l.id !== landingId));
      } else {
        alert("Failed to delete landing");
      }
    } catch (error) {
      console.error("Error deleting landing:", error);
      alert("Error deleting landing");
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-white">
                CodeCraft
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/dashboard" className="text-white hover:text-purple-400 transition">
                  Dashboard
                </Link>
                <Link href="/landing-builder" className="text-white hover:text-purple-400 transition">
                  Create New
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/profile"
                className="text-white hover:text-purple-400 transition flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  {session.user?.name?.[0]?.toUpperCase() || session.user?.email?.[0]?.toUpperCase()}
                </div>
                <span className="hidden md:inline">{session.user?.name || session.user?.email}</span>
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {session.user?.name?.split(" ")[0] || "User"}!
          </h1>
          <p className="text-gray-400 text-lg">
            Manage your landing pages and create new ones
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Landings</p>
                <p className="text-3xl font-bold text-white mt-1">{landings.length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Plan</p>
                <p className="text-3xl font-bold text-white mt-1">Free</p>
              </div>
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Account Status</p>
                <p className="text-3xl font-bold text-white mt-1">Active</p>
              </div>
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Landings Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Your Landing Pages</h2>
            <Link
              href="/landing-builder"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create New Landing
            </Link>
          </div>

          {landings.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-12 text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No landing pages yet</h3>
              <p className="text-gray-400 mb-6">
                Create your first landing page with AI assistance
              </p>
              <Link
                href="/landing-builder"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Get Started
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {landings.map((landing) => (
                <div
                  key={landing.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition group"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
                    {landing.thumbnail ? (
                      <img src={landing.thumbnail} alt={landing.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{landing.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Updated {new Date(landing.updatedAt).toLocaleDateString()}
                    </p>
                    {landing.isPublished && landing.publishedUrl && (
                      <a
                        href={landing.publishedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-400 hover:text-cyan-300 mb-2 flex items-center gap-1 truncate"
                      >
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {landing.publishedUrl.replace('https://', '')}
                      </a>
                    )}
                    <div className="flex gap-2">
                      <Link
                        href={`/landing-builder?id=${landing.id}`}
                        className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition text-center"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handlePublishLanding(landing.id)}
                        disabled={publishingId === landing.id}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                          landing.isPublished
                            ? 'bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400'
                            : 'bg-green-600/20 hover:bg-green-600/30 text-green-400'
                        } disabled:opacity-50`}
                        title={landing.isPublished ? "Republish" : "Publish to web"}
                      >
                        {publishingId === landing.id ? '...' : landing.isPublished ? '🌐' : '🚀'}
                      </button>
                      <button
                        onClick={() => handleDeleteLanding(landing.id)}
                        className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg text-sm font-medium transition"
                        title="Delete landing"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
