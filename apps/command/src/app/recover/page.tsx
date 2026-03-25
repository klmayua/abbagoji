"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, CheckCircle, AlertCircle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function AccountRecoveryPage() {
  const [step, setStep] = useState<"email" | "sent">("email");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("sent");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface via-surface-container-low to-surface-container p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <Link href="/login">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Button>
          </Link>
        </motion.div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Shield className="w-10 h-10 text-primary" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-on-surface mb-2">
            Account Recovery
          </h1>
          <p className="text-on-surface-variant">
            {step === "email"
              ? "Enter your email to reset your password"
              : "Check your email for reset instructions"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-outline-variant/15">
            <CardHeader>
              <CardTitle className="text-center text-lg">
                {step === "email" ? "Reset Password" : "Email Sent"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {step === "email" ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Alert */}
                  <div className="flex items-start gap-2 p-3 bg-warning/10 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-on-surface-variant">
                      For security reasons, we will send a verification link to your
                      registered email address. The link expires in 30 minutes.
                    </p>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10 h-12"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full h-12" variant="gold">
                    Send Reset Link
                  </Button>

                  {/* Additional Help */}
                  <div className="text-center text-sm text-on-surface-variant">
                    <p>
                      Don&apos;t have access to your email?{" "}
                      <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                        Contact Support
                      </Link>
                    </p>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-sentiment-positive/10 flex items-center justify-center"
                    >
                      <CheckCircle className="w-8 h-8 text-sentiment-positive" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-on-surface">
                      We&apos;ve sent a password reset link to:
                    </p>
                    <p className="font-medium text-on-surface">{email}</p>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-lg text-left">
                    <p className="text-sm text-on-surface-variant mb-2">
                      Next steps:
                    </p>
                    <ul className="text-sm text-on-surface-variant space-y-1 list-disc list-inside">
                      <li>Check your inbox (and spam folder)</li>
                      <li>Click the reset link in the email</li>
                      <li>Create a new secure password</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setStep("email")}
                    >
                      Use Different Email
                    </Button>

                    <Link href="/login">
                      <Button className="w-full" variant="gold">
                        Return to Login
                      </Button>
                    </Link>
                  </div>

                  <p className="text-xs text-on-surface-variant">
                    Didn&apos;t receive the email?{" "}
                    <button className="text-primary hover:text-primary/80">
                      Resend
                    </button>
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
