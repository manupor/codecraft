"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || "",
        email: session.user.email || "",
      });
    }
  }, [session]);

  const handleSave = async () => {
    try {
      // TODO: Implement API to update user profile
      console.log("Saving profile:", formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  if (status === "loading") {
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
                className="text-purple-400 hover:text-purple-300 transition flex items-center gap-2"
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="text-gray-400 hover:text-white transition flex items-center gap-2 mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-gray-400 text-lg">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 border-b border-white/10">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                {session.user?.name?.[0]?.toUpperCase() || session.user?.email?.[0]?.toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {session.user?.name || "User"}
                </h2>
                <p className="text-gray-400">{session.user?.email}</p>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Active Account
                </div>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition"
                  />
                ) : (
                  <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                    {formData.name || "Not set"}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-400">
                  {formData.email}
                  <span className="ml-2 text-xs text-gray-500">(Cannot be changed)</span>
                </div>
              </div>

              {/* Account Type */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Account Type
                </label>
                <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white flex items-center justify-between">
                  <span>Free Plan</span>
                  <Link
                    href="/pricing"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium transition"
                  >
                    Upgrade →
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({
                          name: session.user?.name || "",
                          email: session.user?.email || "",
                        });
                      }}
                      className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg font-semibold transition"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 bg-red-900/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-8">
          <h3 className="text-xl font-bold text-red-400 mb-2">Danger Zone</h3>
          <p className="text-gray-400 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition">
            Delete Account
          </button>
        </div>
      </main>
    </div>
  );
}
