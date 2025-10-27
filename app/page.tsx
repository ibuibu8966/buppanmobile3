import Link from "next/link";
import { HeroSection } from "./components/HeroSection";
import { PricingBanner } from "./components/PricingBanner";
import { PricingTable } from "./components/PricingTable";
import { FeaturesSection } from "./components/FeaturesSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーション */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              BUPPAN MOBILE
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/apply"
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-colors"
              >
                今すぐ申し込む
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <HeroSection />
      <div id="pricing">
        <PricingBanner />
        <PricingTable />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
