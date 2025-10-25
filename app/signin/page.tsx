import { LoginGoogleButton } from "@/components/LoginButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};
const SignInPage = async ({ searchParams }: { searchParams?: Promise<{ redirect_url?: string }> }) => {
  const params = (await searchParams)?.redirect_url;
  let redirectUrl;
  if (!params) {
    redirectUrl = "/";
  } else {
    redirectUrl = `/${params}`;
  }

return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4">
    <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-gray-100 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Masuk ke Akun</h1>
        <p className="text-gray-500 font-medium">Selamat datang di Nginep.in</p>
      </div>

      {/* Divider */}
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-3 bg-white text-gray-500">Lanjutkan dengan</span>
        </div>
      </div>

      {/* Google Login Button */}
      <div className="space-y-4">
        <LoginGoogleButton redirectUrl={redirectUrl} />
      </div>
    </div>
  </div>
);
};

export default SignInPage;
