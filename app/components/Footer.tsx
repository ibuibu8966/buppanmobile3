import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">BUPPAN MOBILE</h3>
            <p className="text-gray-400 text-sm">
              仕入れの相棒。音声込みで使うぶんだけに最適化。
            </p>
          </div>

          {/* サービス */}
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">
                  特徴
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-400 hover:text-white transition-colors">
                  お申し込み
                </Link>
              </li>
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h4 className="font-semibold mb-4">サポート</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mypage" className="text-gray-400 hover:text-white transition-colors">
                  マイページ
                </Link>
              </li>
              <li>
                <a
                  href="mailto:peach.2023.7.19@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          {/* 法的情報 */}
          <div>
            <h4 className="font-semibold mb-4">法的情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-white transition-colors">
                  特定商取引法表示
                </Link>
              </li>
              <li>
                <Link href="/telecom" className="text-gray-400 hover:text-white transition-colors">
                  電気通信事業法表示
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 会社情報 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              <strong className="text-white">運営：</strong>合同会社ピーチ（BUPPAN
              MOBILE運営）
            </p>
            <p>
              <strong className="text-white">代表責任者：</strong>宮崎忍
            </p>
            <p>
              <strong className="text-white">所在地：</strong>〒290-0242
              千葉県市原市荻作530-4
            </p>
            <p>
              <strong className="text-white">サポート：</strong>
              <a
                href="mailto:peach.2023.7.19@gmail.com"
                className="hover:text-white transition-colors"
              >
                peach.2023.7.19@gmail.com
              </a>
              （平日10:00-18:00）
            </p>
            <p>
              <strong className="text-white">電気通信事業者：</strong>合同会社ピーチ
              <span className="text-gray-500">
                （届出番号：【要転記：受理書面の届出番号】）
              </span>
            </p>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 BUPPAN MOBILE（合同会社ピーチ）. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
