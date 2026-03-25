"use client";

import { motion } from "framer-motion";
import { Shield, Smartphone, ArrowLeft, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useRef } from "react";

export default function MFAVerificationPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
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

        {/* Security Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Lock className="w-10 h-10 text-primary" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-on-surface mb-2">
            Two-Factor Authentication
          </h1>
          <p className="text-on-surface-variant">
            Enter the verification code sent to your device
          </p>
          <Badge variant="outline" className="mt-3 text-xs border-secondary/30 text-secondary">
            <Shield className="w-3 h-3 mr-1" />
            Enhanced Security
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-outline-variant/15">
            <CardHeader>
              <CardTitle className="text-center text-lg flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Verification Code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Code Input */}
              <div className="flex justify-center gap-2">
                {code.map((digit, index) => (
                  <motion.input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                ))}
              </div>

              {/* Verify Button */}
              <Button className="w-full h-12 text-lg" variant="gold">
                Verify
              </Button>

              {/* Resend Code */}
              <div className="text-center">
                <p className="text-sm text-on-surface-variant">
                  Didn&apos;t receive the code?{" "}
                  <button className="text-primary hover:text-primary/80 font-medium">
                    Resend
                  </button>
                </p>
                <p className="text-xs text-on-surface-variant mt-2">
                  Code expires in 5:00
                </p>
              </div>

              {/* Alternative Methods */}
              <div className="pt-4 border-t border-outline-variant/15">
                <p className="text-sm text-on-surface-variant text-center mb-3">
                  Or verify using:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Authenticator App
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Email Code
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6"
        >
          <Link href="#" className="text-sm text-primary hover:text-primary/80">
            Need help? Contact IT Support
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
