export function FeaturesSection() {
  const features = [
    {
      title: "音声＋SMS込み",
      description:
        "すべてのプランに音声通話とSMSが標準搭載。追加料金なしで始められます。",
    },
    {
      title: "選べる設計",
      description:
        "自動じゃなく「選べる」設計。1GBから100GB目安まで、使い方に合わせて最適化。",
    },
    {
      title: "請求シンプル",
      description:
        "わかりやすい料金体系。隠れた費用なし。解約金も0円で安心。",
    },
    {
      title: "MNP転出0円",
      description:
        "他社への乗り換えも手数料0円。いつでも自由に選択できます。",
    },
    {
      title: "仕入れ業務に最適",
      description:
        "ポケモンカード認証対応。複数回線の管理も簡単で、仕入れの相棒として活躍。",
    },
    {
      title: "ドコモ網で安心",
      description:
        "NTTドコモ網を使用。広いエリアで安定した通信品質を提供します。",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/chuttersnap-BNBA1h-NgdY-unsplash.jpg')",
        }}
      />
      {/* 半透明オーバーレイ */}
      <div className="absolute inset-0 bg-white/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            BUPPAN MOBILEの特徴
          </h2>
          <p className="text-lg text-gray-600">
            仕入れ業務を支える、使いやすく頼れるモバイルサービス
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 技術仕様 */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            技術仕様
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                ネットワーク
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 提供網：NTTドコモ網系MVNO</li>
                <li>• 提供区域：日本国内（ドコモエリア準拠）</li>
                <li>• 緊急通報：110/118/119 発信可能</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">通信速度</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 下り最大：375Mbps（ベストエフォート）</li>
                <li>• 上り最大：50Mbps（ベストエフォート）</li>
                <li>• テザリング：可（端末仕様に依存）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">国際対応</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 国際電話：対応（要申請）</li>
                <li>• 国際SMS：対応（要申請）</li>
                <li>• 国際ローミング：対応（要申請）</li>
                <li className="text-xs text-gray-500">
                  ※ 通話/通信料はキャリア実費100%請求
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                フェアユース
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 各プランに3日間の合計上限あり</li>
                <li>• 上限到達時：当該期間256kbpsに制御</li>
                <li>
                  • 「100GB」は10GB/3日で速度制御する目安表記
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
