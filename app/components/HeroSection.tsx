import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* 背景画像 - 100% */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/adrian-sulyok-sczNLg6rrhQ-unsplash.jpg')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* テキスト背景ボックス - 最小限 */}
          <div className="inline-block">
            <div className="bg-white/75 backdrop-blur-[2px] rounded-2xl px-4 py-3 mb-4 inline-block">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                仕入れの相棒。
                <br />
                <span className="text-amber-600">
                  音声込みで
                  <br className="sm:hidden" />
                  "使うぶんだけ"に最適化。
                </span>
              </h1>
            </div>
            <div className="bg-white/75 backdrop-blur-[2px] rounded-2xl px-4 py-2 mb-6 inline-block">
              <p className="text-base sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                1GB/月880円・
                <br className="sm:hidden" />
                音声＋SMS込み。
                <br />
                重い月は100GB目安
                <br className="sm:hidden" />
                （10GB/3日）で
                <br className="sm:hidden" />
                使い倒せる。
              </p>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <Link
              href="/apply?type=mnp"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              MNPで申し込む
            </Link>
            <Link
              href="/apply?type=new"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 text-lg font-bold rounded-2xl border-2 border-gray-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              新規で申し込む
            </Link>
          </div>

          {/* バッジ */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200">
              <span className="text-sm font-semibold text-gray-700">
                音声＋SMS込み
              </span>
            </div>
            <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200">
              <span className="text-sm font-semibold text-gray-700">
                解約金なし
              </span>
            </div>
            <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200">
              <span className="text-sm font-semibold text-gray-700">
                MNP転出0円
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
