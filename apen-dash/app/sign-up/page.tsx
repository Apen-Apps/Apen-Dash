import { GalleryVerticalEnd } from "lucide-react";

import { SignUpForm } from "@/components/sign-up-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className=" flex items-center justify-center">
              <img
                src="/logo-dark.svg"
                alt="Image"
              />
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>  
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/fantasy-style-clouds-with-city.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.8] dark:grayscale"
        />
      </div>
    </div>
  );
}
