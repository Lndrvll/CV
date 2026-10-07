
"use client";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (isAuthenticated) {
      const params = new URLSearchParams(window.location.search);
      const role = params.get("role");
      if (role === "cyber") router.push("/lenses/cyber?role=cyber");
      else if (role === "av") router.push("/lenses/av?role=av");
      else router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-gray-900 selection:bg-blue-100">
      <div className={`max-w-2xl w-full transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Tailored Professional Experience</h1>
          <div className="h-1 w-12 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg mx-auto">
            To ensure we get to know each other effectively, I have curated my professional history into specialized lenses. 
            <br /><br />
            By authenticating, you allow me to present the most pertinent technical details, project evidence, and certifications aligned with your specific professional profile.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={() => loginWithRedirect()} 
            className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden transition-all hover:pr-12 active:scale-95"
          >
            <span className="relative z-10">Authenticate to Enter</span>
            <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              →
            </span>
          </button>
          <p className="mt-6 text-sm text-gray-400">Secure authentication powered by Auth0</p>
        </div>
      </div>
    </div>
  );
}

