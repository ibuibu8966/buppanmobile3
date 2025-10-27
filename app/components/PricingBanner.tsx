export function PricingBanner() {
  return (
    <section className="bg-amber-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            事務手数料込み・3ヶ月パック
          </h2>
          <p className="text-lg text-amber-900 font-semibold">
            音声＋SMS込み・SIM登録・個別配送込み／MNP転出0円
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 50回線以上 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-amber-500 transform hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-amber-500 text-white text-sm font-bold rounded-full mb-4">
                おすすめ
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                50回線以上の一括申込
              </h3>
              <div className="my-6">
                <span className="text-5xl font-bold text-primary-dark">
                  ¥4,200
                </span>
                <span className="text-gray-600 text-lg">/回線</span>
              </div>
              <p className="text-gray-600 mb-4">
                3ヶ月分・税込
                <br />
                登録/個別配送込み
              </p>
              <div className="text-sm text-gray-500 bg-amber-50 rounded-xl p-4">
                <p className="font-semibold mb-2">含まれるもの：</p>
                <ul className="space-y-1 text-left">
                  <li>✓ 音声通話＋SMS</li>
                  <li>✓ SIM登録手数料</li>
                  <li>✓ 個別配送</li>
                  <li>✓ MNP転出手数料0円</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 50回線未満 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 transform hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-gray-200 text-gray-700 text-sm font-bold rounded-full mb-4">
                標準
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                50回線未満
              </h3>
              <div className="my-6">
                <span className="text-5xl font-bold text-gray-900">
                  ¥4,600
                </span>
                <span className="text-gray-600 text-lg">/回線</span>
              </div>
              <p className="text-gray-600 mb-4">
                3ヶ月分・税込
                <br />
                登録/個別配送込み
              </p>
              <div className="text-sm text-gray-500 bg-gray-50 rounded-xl p-4">
                <p className="font-semibold mb-2">含まれるもの：</p>
                <ul className="space-y-1 text-left">
                  <li>✓ 音声通話＋SMS</li>
                  <li>✓ SIM登録手数料</li>
                  <li>✓ 個別配送</li>
                  <li>✓ MNP転出手数料0円</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-amber-900">
            ※ 個人は最大5回線まで／法人で20回線以上は別途審査が必要です
          </p>
        </div>
      </div>
    </section>
  );
}
