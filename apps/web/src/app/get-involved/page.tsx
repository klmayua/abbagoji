import { Metadata } from "next";
import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HandHeart, Users, MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved | Alhaji Abba Goji 2027",
  description: "Join the campaign to build Yobe East. Volunteer, become an Anchor Citizen, or find your polling unit.",
};

const volunteerOptions = [
  { icon: HandHeart, title: "Canvassing", description: "Door-to-door outreach" },
  { icon: Phone, title: "Phone Banking", description: "Call supporters" },
  { icon: Users, title: "Event Support", description: "Help at rallies" },
  { icon: MapPin, title: "Transportation", description: "Drive volunteers" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <GlassNavbar />
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="section-padding-sm bg-surface-container-low">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="text-label-md text-primary mb-4 block">Join The Movement</span>
              <h1 className="text-display-md text-on-surface mb-6">Get Involved</h1>
              <p className="text-body-lg text-on-surface-variant">
                Change happens when we work together. Join thousands of supporters across Yobe East Zone B.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Form Section */}
        <section className="section-padding bg-surface">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <div className="bg-surface-container-low rounded-2xl p-8">
                <h2 className="text-headline-md text-on-surface mb-2">Volunteer Sign Up</h2>
                <p className="text-body-md text-on-surface-variant mb-8">
                  Fill out the form below and our team will reach out to you.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">
                        First Name *
                      </label>
                      <Input type="text" placeholder="Enter first name" className="bg-surface-container-lowest" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">
                        Last Name *
                      </label>
                      <Input type="text" placeholder="Enter last name" className="bg-surface-container-lowest" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-2">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="0800 000 0000" className="bg-surface-container-lowest" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" className="bg-surface-container-lowest" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">
                        LGA *
                      </label>
                      <select className="w-full h-10 px-3 rounded-md border border-outline-variant/30 bg-surface-container-lowest text-on-surface">
                        <option value="">Select LGA</option>
                        <option value="damaturu">Damaturu</option>
                        <option value="gujba">Gujba</option>
                        <option value="gulani">Gulani</option>
                        <option value="tarmuwa">Tarmuwa</option>
                        <option value="bursari">Bursari</option>
                        <option value="yunusari">Geidam/Yunusari</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-2">
                        Ward
                      </label>
                      <Input type="text" placeholder="Enter ward" className="bg-surface-container-lowest" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-4">
                      How can you help? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {volunteerOptions.map((option) => {
                        const Icon = option.icon;
                        return (
                          <label
                            key={option.title}
                            className="flex items-start gap-3 p-4 rounded-lg border border-outline-variant/30 cursor-pointer hover:bg-surface-container transition-colors"
                          >
                            <input type="checkbox" className="mt-1" />
                            <div>
                              <div className="flex items-center gap-2">
                                <Icon className="size-4 text-primary" />
                                <span className="font-medium text-on-surface">{option.title}</span>
                              </div>
                              <p className="text-xs text-on-surface-variant mt-1">{option.description}</p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    Submit Application
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </form>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-surface-container-low">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center mb-4">
                    <HandHeart className="size-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-on-surface mb-2">Become an Anchor Citizen</h3>
                  <p className="text-body-md text-on-surface-variant mb-4">
                    Anchor Citizens are community leaders who help spread our message and organize support in their networks.
                  </p>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-primary" />
                      <span>Organize house meetings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-primary" />
                      <span>Spread the message on social media</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-primary" />
                      <span>Connect with neighbors and friends</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-surface-container-low">
                  <h3 className="text-lg font-semibold text-on-surface mb-4">Contact Campaign HQ</h3>
                  <div className="space-y-3">
                    <a href="mailto:hello@abbagoji.com.ng" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
                      <Mail className="size-5" />
                      hello@abbagoji.com.ng
                    </a>
                    <a href="tel:+2348000000000" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
                      <Phone className="size-5" />
                      +234 800 000 0000
                    </a>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <MapPin className="size-5" />
                      Damaturu, Yobe State
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
