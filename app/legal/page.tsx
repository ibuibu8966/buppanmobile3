import Link from "next/link";

export default function LegalPage() {
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
          特定商取引法に基づく表記
        </h1>

        <div className="bg-white rounded-3xl p-8 shadow-lg space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">販売業者</h3>
            <p className="text-gray-700">合同会社ピーチ（BUPPAN MOBILE運営）</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              代表責任者
            </h3>
            <p className="text-gray-700">宮崎忍</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">所在地</h3>
            <p className="text-gray-700">〒290-0242 千葉県市原市荻作530-4</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">電話番号</h3>
            <p className="text-gray-700">090-5997-2623（平日10:00-18:00）</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              メールアドレス
            </h3>
            <p className="text-gray-700">
              <a
                href="mailto:peach.2023.7.19@gmail.com"
                className="text-primary-dark hover:underline"
              >
                peach.2023.7.19@gmail.com
              </a>
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">販売価格</h3>
            <p className="text-gray-700">
              各プラン料金表に記載（税込）
              <br />
              <Link href="/#pricing" className="text-primary-dark hover:underline">
                料金プランを見る
              </Link>
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              商品代金以外の必要料金
            </h3>
            <p className="text-gray-700">
              • ユニバーサルサービス料（2円/月）
              <br />
              • 電話リレーサービス料（1円/月）
              <br />
              • 追加データチャージ料金
              <br />
              • 従量通話料金
              <br />
              • 各種オプション料金
              <br />• 振込手数料（銀行振込の場合、お客様負担）
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">申込方法</h3>
            <p className="text-gray-700">
              Webサイト（オンライン申込）
              <br />
              <Link href="/apply" className="text-primary-dark hover:underline">
                お申し込みページ
              </Link>
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">支払方法</h3>
            <p className="text-gray-700">
              • 銀行振込（請求書対応可）
              <br />• クレジットカード（Visa / Mastercard / JCB / American Express）
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">支払時期</h3>
            <p className="text-gray-700">
              月末締め翌月請求
              <br />
              従量通話料金などは翌々月に合算請求
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              引き渡し時期
            </h3>
            <p className="text-gray-700">
              物理SIM：申込後1〜5営業日で発送、到着後の開通手続きで利用開始
              <br />
              eSIM：非対応
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              返品・交換・解約
            </h3>
            <p className="text-gray-700">
              通信サービスの性質上、開通後の返品は不可。
              <br />
              不良SIMの場合は再発行対応（手数料あり）。
              <br />
              解約金：0円（当月解約は月末、日割りなし）
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              役務提供条件
            </h3>
            <p className="text-gray-700">
              電波状況・設備保守・天災等により一時的に利用できない場合があります。
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              クーリング・オフ
            </h3>
            <p className="text-gray-700">
              適用外（通信役務・通信販売における適用除外のため）
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
