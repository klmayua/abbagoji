"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, ChevronDown, CheckCircle, Navigation, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";

const zoneBLGAs = [
  {
    name: "Damaturu",
    wards: ["Damaturu Central", "Damaturu East", "Damaturu West", "Mairi", "Kukareta"],
  },
  {
    name: "Gujba",
    wards: ["Gujba", "Buni Yadi", "Buni Gari", "Dadingel", "Matali"],
  },
  {
    name: "Gulani",
    wards: ["Gulani", "Bara", "Bursari", "Kukuwa", "Tetes"],
  },
  {
    name: "Busari",
    wards: ["Busari", "Jannaram", "Damboa", "Kamuya", "Yamarkumi"],
  },
  {
    name: "Buni",
    wards: ["Buni", "Buni South", "Buni North", "Buni East", "Buni West"],
  },
  {
    name: "Fika",
    wards: ["Fika Central", "Fika North", "Fika South", "Gudi", "Doho"],
  },
];

const mockPollingUnits = [
  { code: "001", name: "Damaturu Central Primary School", address: "Main Road, Damaturu Town", lga: "Damaturu", ward: "Damaturu Central" },
  { code: "002", name: "Damaturu Market Square", address: "Opposite Central Market", lga: "Damaturu", ward: "Damaturu Central" },
  { code: "003", name: "Shehu's Palace", address: "Palace Road, Damaturu", lga: "Damaturu", ward: "Damaturu East" },
  { code: "004", name: "Buni Yadi Primary School", address: "Buni Yadi Town Center", lga: "Gujba", ward: "Buni Yadi" },
  { code: "005", name: "Gujba Central School", address: "Gujba LGA Secretariat Road", lga: "Gujba", ward: "Gujba" },
  { code: "006", name: "Gulani Primary Health Center", address: "Gulani Town", lga: "Gulani", ward: "Gulani" },
];

export default function FindPollingUnitPage() {
  const [selectedLGA, setSelectedLGA] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedPU, setSelectedPU] = useState<typeof mockPollingUnits[0] | null>(null);

  const selectedLGAData = zoneBLGAs.find((l) => l.name === selectedLGA);

  const filteredUnits = mockPollingUnits.filter((pu) => {
    const matchesLGA = selectedLGA ? pu.lga === selectedLGA : true;
    const matchesWard = selectedWard ? pu.ward === selectedWard : true;
    const matchesSearch = searchQuery
      ? pu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pu.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pu.code.includes(searchQuery)
      : true;
    return matchesLGA && matchesWard && matchesSearch;
  });

  const handleSearch = () => {
    setShowResults(true);
    setSelectedPU(null);
  };

  return (
    <div className="min-h-screen bg-surface">
      <GlassNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-container text-white">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-display-sm mb-4">Find Your Polling Unit</h1>
            <p className="text-lg opacity-90">
              Locate your polling unit in Yobe East Zone B. Make sure you're registered to vote in the 2027 elections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 -mt-8">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(9,29,46,0.12)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* LGA Select */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface">Local Government Area</label>
                <div className="relative">
                  <select
                    value={selectedLGA}
                    onChange={(e) => {
                      setSelectedLGA(e.target.value);
                      setSelectedWard("");
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-outline-variant/30 text-on-surface appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select LGA</option>
                    {zoneBLGAs.map((lga) => (
                      <option key={lga.name} value={lga.name}>
                        {lga.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-on-surface-variant pointer-events-none" />
                </div>
              </div>

              {/* Ward Select */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface">Ward</label>
                <div className="relative">
                  <select
                    value={selectedWard}
                    onChange={(e) => setSelectedWard(e.target.value)}
                    disabled={!selectedLGA}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-outline-variant/30 text-on-surface appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select Ward</option>
                    {selectedLGAData?.wards.map((ward) => (
                      <option key={ward} value={ward}>
                        {ward}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-on-surface-variant pointer-events-none" />
                </div>
              </div>

              {/* Search Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant" />
                  <Input
                    type="search"
                    placeholder="Search by name or code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-surface"
                  />
                </div>
              </div>
            </div>

            <Button onClick={handleSearch} className="w-full md:w-auto">
              <Search className="size-4 mr-2" />
              Find Polling Unit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-8">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Results List */}
              <div className="space-y-4">
                <h2 className="text-headline-md text-on-surface mb-6">
                  {filteredUnits.length} Polling Unit{filteredUnits.length !== 1 && "s"} Found
                </h2>

                {filteredUnits.length > 0 ? (
                  filteredUnits.map((pu, index) => (
                    <motion.div
                      key={pu.code}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => setSelectedPU(pu)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedPU?.code === pu.code
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-surface-container-lowest hover:bg-surface-container border border-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="size-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-on-surface mb-1">{pu.name}</h3>
                          <p className="text-sm text-on-surface-variant mb-2">{pu.address}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-surface-container text-on-surface-variant">
                              {pu.lga}
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-surface-container text-on-surface-variant">
                              {pu.ward}
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                              PU-{pu.code}
                            </span>
                          </div>
                        </div>

                        {selectedPU?.code === pu.code && (
                          <CheckCircle className="size-5 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-surface-container-low rounded-xl">
                    <MapPin className="size-12 mx-auto mb-4 text-on-surface-variant/50" />
                    <p className="text-on-surface-variant">No polling units found matching your criteria.</p>
                    <p className="text-sm text-on-surface-variant/70 mt-2">Try adjusting your filters or search query.</p>
                  </div>
                )}
              </div>

              {/* Selected PU Details */}
              <div className="lg:sticky lg:top-24">
                {selectedPU ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <MapPin className="size-8 text-primary" />
                    </div>

                    <h2 className="text-headline-sm text-on-surface mb-2">{selectedPU.name}</h2>
                    <p className="text-body-md text-on-surface-variant mb-6">{selectedPU.address}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-outline-variant/15">
                        <span className="text-sm text-on-surface-variant">Polling Unit Code</span>
                        <span className="font-medium text-on-surface">PU-{selectedPU.code}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-outline-variant/15">
                        <span className="text-sm text-on-surface-variant">LGA</span>
                        <span className="font-medium text-on-surface">{selectedPU.lga}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-outline-variant/15">
                        <span className="text-sm text-on-surface-variant">Ward</span>
                        <span className="font-medium text-on-surface">{selectedPU.ward}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full">
                        <Navigation className="size-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Users className="size-4 mr-2" />
                        View Voter Information
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-surface-container-low rounded-2xl p-6 text-center">
                    <MapPin className="size-12 mx-auto mb-4 text-on-surface-variant/50" />
                    <p className="text-on-surface-variant">Select a polling unit to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Information Section */}
      <section className="py-16 bg-surface-container-low">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headline-md text-on-surface mb-8 text-center">Important Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest rounded-xl p-6">
                <h3 className="font-semibold text-on-surface mb-2">Voter Registration</h3>
                <p className="text-sm text-on-surface-variant">
                  Make sure you're registered to vote. Visit the INEC office or registration center in your LGA.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <h3 className="font-semibold text-on-surface mb-2">What to Bring</h3>
                <p className="text-sm text-on-surface-variant">
                  On election day, bring your Permanent Voter Card (PVC) and arrive early at your polling unit.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <h3 className="font-semibold text-on-surface mb-2">Election Date</h3>
                <p className="text-sm text-on-surface-variant">
                  The 2027 General Election is scheduled to hold on February 27, 2027. Plan to vote!
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <h3 className="font-semibold text-on-surface mb-2">Need Help?</h3>
                <p className="text-sm text-on-surface-variant">
                  Contact our campaign office for assistance with voter registration and polling unit information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
