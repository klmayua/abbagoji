"use client";

import { motion } from "framer-motion";
import { UserPlus, ArrowLeft, User, MapPin, Briefcase, ChevronRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

const roles = [
  { id: "coordinator", label: "LGA Coordinator", desc: "Oversee operations in your LGA" },
  { id: "canvasser", label: "Field Canvasser", desc: "Door-to-door voter outreach" },
  { id: "anchor", label: "Anchor Citizen", desc: "Community influencer and advocate" },
  { id: "data", label: "Data Manager", desc: "Manage voter data and analytics" },
  { id: "media", label: "Media Team", desc: "Social media and communications" },
  { id: "volunteer", label: "General Volunteer", desc: "Support various campaign activities" },
];

const lgas = [
  "Damaturu", "Gujba", "Gulani", "Tarmuwa", "Potiskum",
  "Bade", "Yunusari", "Geidam", "Nguru", "Fune",
];

export default function SignUpPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    lga: "",
    ward: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container-low to-surface-container py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
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

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <UserPlus className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-on-surface mb-2">
            Join the Campaign
          </h1>
          <p className="text-on-surface-variant">
            Create your volunteer account
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    s <= step
                      ? "bg-primary text-white"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  {s < step ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    s
                  )}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      s < step ? "bg-primary" : "bg-surface-container"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-12 mt-2 text-sm text-on-surface-variant">
            <span>Personal Info</span>
            <span>Role</span>
            <span>Location</span>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-outline-variant/15">
            <CardHeader>
              <CardTitle className="text-center">
                {step === 1 && "Personal Information"}
                {step === 2 && "Select Your Role"}
                {step === 3 && "Your Location"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                      <Input
                        placeholder="Enter your full name"
                        className="pl-10 h-12"
                        value={formData.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-12"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      className="h-12"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>

                  <Button
                    className="w-full h-12 mt-6"
                    variant="gold"
                    onClick={() => setStep(2)}
                    disabled={!formData.fullName || !formData.email || !formData.phone}
                  >
                    Continue
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        onClick={() => updateField("role", role.id)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          formData.role === role.id
                            ? "border-primary bg-primary/5"
                            : "border-outline-variant/15 hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${
                              formData.role === role.id
                                ? "border-primary bg-primary"
                                : "border-outline-variant"
                            }`}
                          >
                            {formData.role === role.id && (
                              <CheckCircle className="w-full h-full text-white" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-on-surface">{role.label}</p>
                            <p className="text-xs text-on-surface-variant">{role.desc}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" className="flex-1 h-12" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button
                      className="flex-1 h-12"
                      variant="gold"
                      onClick={() => setStep(3)}
                      disabled={!formData.role}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">LGA</label>
                    <div className="grid grid-cols-2 gap-2">
                      {lgas.map((lga) => (
                        <button
                          key={lga}
                          onClick={() => updateField("lga", lga)}
                          className={`p-3 rounded-lg border text-sm transition-all ${
                            formData.lga === lga
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-outline-variant/15 hover:border-primary/30"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {lga}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Ward</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                      <Input
                        placeholder="Enter your ward"
                        className="pl-10 h-12"
                        value={formData.ward}
                        onChange={(e) => updateField("ward", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-lg">
                    <p className="text-sm text-on-surface-variant">
                      <strong>Note:</strong> Your account will be reviewed by an administrator
                      before activation. You&apos;ll receive an email confirmation once approved.
                    </p>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" className="flex-1 h-12" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button
                      className="flex-1 h-12"
                      variant="gold"
                      disabled={!formData.lga || !formData.ward}
                    >
                      Submit Application
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-on-surface-variant mt-6"
        >
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
            Sign In
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
