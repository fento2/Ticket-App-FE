"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateAccount = () => {
    // ambil value input di sini (pakai ref atau state)
    // validasi dan submit API
    console.log("Create Account clicked!");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Kolom kiri - Banner */}
      <div
        className="relative w-full h-[50vh] lg:h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/258804/pexels-photo-258804.jpeg')",
        }}
      >
        {/* Tombol back */}
        <Link
          href="/"
          className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
        >
          <ChevronLeft />
        </Link>

        {/* Overlay + teks */}
        <div className="h-full flex flex-col items-center justify-center bg-black/40 px-6 text-center">
          <h1 className="text-white text-3xl font-bold mb-4">Welcome!</h1>
        </div>
      </div>

      {/* Kolom kanan - Form */}
      <div className="flex items-center justify-center -mt-32 lg:mt-0 z-50">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
            <CardDescription className="text-center">
              Please fill in your information to create an account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateAccount();
              }}
            >
              <div>
                <Label htmlFor="name" className="text-lg">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="pr-10 py-6 !text-lg"
                />
              </div>

              <div>
                <Label htmlFor="username" className="text-lg">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="Choose a username"
                  className="pr-10 py-6 !text-lg"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-lg">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pr-10 py-6 !text-lg"
                />
              </div>

              <div className="relative">
                <Label htmlFor="password" className="text-lg">
                  Password
                </Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="pr-10 py-6 !text-lg"
                />
                {showPassword ? (
                  <Eye
                    className="absolute top-10 right-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeOff
                    className="absolute top-10 right-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-lg">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="pr-10 py-6 !text-lg"
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <span className="text-blue-600 underline hover:text-blue-800 cursor-pointer">
                    Terms and Conditions
                  </span>
                </Label>
              </div>

              {/* Button submit */}
              <Button type="submit" className="w-full py-6 text-lg">
                Create Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
