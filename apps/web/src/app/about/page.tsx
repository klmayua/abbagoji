import { Metadata } from "next";
import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Users, Building2, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Alhaji Abba Goji | Senate 2027",
  description: "Learn about Alhaji Abba Goji's background, experience, and vision for Yobe East Zone B.",
};

const achievements = [
  { icon: Building2, label: "Vice Chairman", value: "Resident Cement" },
  { icon: Users, label: "Jobs Created", value: "10,000+" },
  { icon: Heart, label: "Community Impact", value: "20+ Years" },
  { icon: Award, label: "Leadership", value: "Recognized" },
];

export default function AboutPage() {
  return (
    <>
      <GlassNavbar />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="section-padding-sm bg-surface-container-low">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="text-label-md text-secondary mb-4 block">About The Candidate</span>
              <h1 className="text-display-md text-on-surface mb-6">Alhaji Abba Goji</h1>
              <p className="text-body-lg text-on-surface-variant">
                A proven leader with decades of experience in business and community service, ready to bring transformation to Yobe East.
              </p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="section-padding bg-surface">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-container to-surface-container-high">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                        <span className="text-5xl font-bold text-white">AG</span>
                      </div>
                      <p className="text-on-surface-variant">[Formal Portrait]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-headline-md text-on-surface mb-4">Early Life & Education</h2>
                  <p className="text-body-md text-on-surface-variant">
                    Born in Yobe State, Alhaji Abba Goji's journey began with strong family values and a commitment to education. He pursued his studies with dedication, earning qualifications that would later inform his business acumen and leadership approach.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline-md text-on-surface mb-4">Professional Career</h2>
                  <p className="text-body-md text-on-surface-variant mb-4">
                    As Vice Chairman of Resident Cement Company Limited, Alhaji Goji has been instrumental in building one of Nigeria's leading cement manufacturers. Under his leadership, the company has:
                  </p>
                  <ul className="space-y-2 text-body-md text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Created over 10,000 direct and indirect jobs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Expanded operations across Northern Nigeria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Contributed significantly to local economic development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Supported infrastructure projects across Bauchi and Yobe States</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline-md text-on-surface mb-4">Community Service</h2>
                  <p className="text-body-md text-on-surface-variant">
                    Beyond business, Alhaji Goji has dedicated over two decades to philanthropic work, supporting education initiatives, healthcare programs, and community development projects across Yobe East.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="section-padding bg-surface-container-low">
          <div className="container-editorial">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-6 rounded-2xl bg-surface-container-lowest text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-primary mb-1">{item.value}</p>
                    <p className="text-sm text-on-surface-variant">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section-padding bg-surface">
          <div className="container-editorial">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-label-md text-secondary mb-4 block">Vision</span>
              <h2 className="text-headline-lg text-on-surface mb-6">Building Yobe East Together</h2>
              <div className="space-y-4 text-body-md text-on-surface-variant">
                <p>
                  My vision for Yobe East is rooted in the belief that every citizen deserves access to opportunities, quality healthcare, education, and infrastructure that enables them to thrive.
                </p>
                <p>
                  In the Senate, I will leverage my business experience and community relationships to bring federal resources, attract investments, and advocate for policies that directly benefit our people.
                </p>
                <p>
                  This campaign is not just about winning an election—it's about building a movement for positive change that will transform Yobe East for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
