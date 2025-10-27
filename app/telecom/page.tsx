import Link from "next/link";

export default function TelecomPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              BUPPAN MOBILE
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← トップに戻る
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          電気通信事業法に基づく表示
        </h1>

        <div className="bg-white rounded-3xl p-8 shadow-lg space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              電気通信事業者
            </h3>
            <p className="text-gray-700">合同会社ピーチ</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">届出番号</h3>
            <p className="text-gray-700">
              A-07-22969（総務省 届出受理済）
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">受理通知</h3>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-900 mb-2">
                総務省より受理された届出書の受理通知（令和7年10月6日付）
              </p>
              <a
                href="/documents/20251022133036857.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:underline font-semibold"
              >
                受理通知PDF（A-07-22969）を確認する
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">提供区域</h3>
            <p className="text-gray-700">
              日本国内（NTTドコモ網の提供エリアに準拠）
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              緊急通報（110/118/119）
            </h3>
            <p className="text-gray-700">発信可能</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              通話定額の対象外番号
            </h3>
            <p className="text-gray-700">
              • 0570（ナビダイヤル）
              <br />
              • 0180（テレドーム）
              <br />
              • 104（番号案内）
              <br />• 衛星電話・衛星船舶電話
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              フェアユースポリシー（速度制御）
            </h3>
            <p className="text-gray-700 mb-4">
              各プランに3日間合計の上限があり、超過時は当該期間256kbpsに速度制御されます。
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                各プランの3日間上限
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 1GBプラン：100MB/3日</li>
                <li>• 3GBプラン：500MB/3日</li>
                <li>• 7.5GBプラン：1GB/3日</li>
                <li>• 10GBプラン：1.5GB/3日</li>
                <li>• 20GBプラン：3GB/3日</li>
                <li>• 100GB目安プラン：10GB/3日</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              通信速度（ベストエフォート）
            </h3>
            <p className="text-gray-700">
              下り最大：375Mbps
              <br />
              上り最大：50Mbps
              <br />
              <span className="text-sm text-gray-600">
                ※
                実際の速度は通信環境や混雑状況により変動します。記載の速度は技術規格上の最大値であり、実効速度を保証するものではありません。
              </span>
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              使用ネットワーク
            </h3>
            <p className="text-gray-700">NTTドコモ網系MVNO</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              サービス提供時間
            </h3>
            <p className="text-gray-700">
              24時間365日（設備保守・障害時を除く）
              <br />
              回線切替操作：10:00-19:00
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              最低利用期間・解約金
            </h3>
            <p className="text-gray-700">
              最低利用期間：なし
              <br />
              解約金：0円
              <br />
              <span className="text-sm text-gray-600">
                ※ 初回3ヶ月パックは返金不可
              </span>
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">お問い合わせ</h3>
            <p className="text-gray-700">
              メール：
              <a
                href="mailto:peach.2023.7.19@gmail.com"
                className="text-primary-dark hover:underline"
              >
                peach.2023.7.19@gmail.com
              </a>
              <br />
              受付時間：平日10:00-18:00
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3">
            関連ドキュメント
          </h3>
          <div className="space-y-2">
            <Link
              href="/terms"
              className="block text-blue-700 hover:text-blue-900 hover:underline"
            >
              → BUPPAN MOBILE 利用規約
            </Link>
            <Link
              href="/legal"
              className="block text-blue-700 hover:text-blue-900 hover:underline"
            >
              → 特定商取引法に基づく表記
            </Link>
            <Link
              href="/privacy"
              className="block text-blue-700 hover:text-blue-900 hover:underline"
            >
              → プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
