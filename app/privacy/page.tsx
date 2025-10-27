import Link from "next/link";

export default function PrivacyPage() {
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
          プライバシーポリシー
        </h1>

        <div className="bg-white rounded-3xl p-8 shadow-lg space-y-6">
          <div>
            <p className="text-gray-700 leading-relaxed">
              合同会社ピーチ（以下「当社」）は、BUPPAN
              MOBILEサービス（以下「本サービス」）の提供にあたり、お客様の個人情報を以下のとおり取り扱います。
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              1. 収集する個人情報
            </h2>
            <p className="text-gray-700 mb-3">
              当社は、本サービスの提供にあたり、以下の個人情報を収集します。
            </p>
            <ul className="space-y-2 text-gray-700 pl-6">
              <li className="list-disc">
                氏名、生年月日、性別、住所、電話番号、メールアドレス
              </li>
              <li className="list-disc">
                本人確認書類（運転免許証、マイナンバーカード等）
              </li>
              <li className="list-disc">
                法人のお客様：法人名、登記情報、担当者情報
              </li>
              <li className="list-disc">
                支払情報（クレジットカード情報、銀行口座情報等）
              </li>
              <li className="list-disc">
                通信履歴、通話履歴、データ使用量等の利用情報
              </li>
              <li className="list-disc">端末情報、IPアドレス、Cookie情報</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              2. 個人情報の利用目的
            </h2>
            <ul className="space-y-2 text-gray-700 pl-6">
              <li className="list-disc">本サービスの提供・維持・改善</li>
              <li className="list-disc">本人確認及び契約者の特定</li>
              <li className="list-disc">料金請求・決済処理</li>
              <li className="list-disc">
                サービス利用状況の分析及び改善のための統計データの作成
              </li>
              <li className="list-disc">お問い合わせ対応・カスタマーサポート</li>
              <li className="list-disc">
                法令に基づく対応（犯罪捜査、訴訟手続き等）
              </li>
              <li className="list-disc">重要なお知らせ・キャンペーン情報の提供</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              3. 個人情報の第三者提供
            </h2>
            <p className="text-gray-700 mb-3">
              当社は、以下の場合を除き、お客様の同意なく第三者に個人情報を提供しません。
            </p>
            <ul className="space-y-2 text-gray-700 pl-6">
              <li className="list-disc">法令に基づく場合</li>
              <li className="list-disc">
                人の生命、身体または財産の保護のために必要がある場合
              </li>
              <li className="list-disc">
                国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
              </li>
              <li className="list-disc">
                電気通信サービスの提供に必要な範囲で、通信事業者（NTTドコモ等）に提供する場合
              </li>
              <li className="list-disc">
                決済処理のために、決済代行会社に提供する場合
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              4. 個人情報の管理
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、個人情報の漏洩、滅失、毀損の防止その他の個人情報の安全管理のため、必要かつ適切な措置を講じます。また、個人情報を取り扱う従業者や委託先に対して、必要かつ適切な監督を行います。
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              5. Cookie・広告識別子の取扱い
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              当社は、サービスの利便性向上のため、Cookie及びこれに類する技術を使用することがあります。
            </p>
            <ul className="space-y-2 text-gray-700 pl-6">
              <li className="list-disc">
                ログイン状態の保持、設定の保存
              </li>
              <li className="list-disc">
                アクセス解析・統計データの作成（Google Analytics等）
              </li>
              <li className="list-disc">広告配信の最適化</li>
            </ul>
            <p className="text-gray-700 mt-3">
              お客様は、ブラウザの設定によりCookieを無効化することができますが、一部機能が利用できなくなる場合があります。
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              6. 個人情報の開示・訂正・削除
            </h2>
            <p className="text-gray-700 leading-relaxed">
              お客様は、当社に対して、個人情報保護法に定めるところにより、個人情報の開示、訂正、削除等を請求することができます。請求方法については、下記のお問い合わせ先までご連絡ください。
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              7. プライバシーポリシーの変更
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、法令の変更、サービス内容の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              8. お問い合わせ窓口
            </h2>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-700">
                <strong>合同会社ピーチ 個人情報保護窓口</strong>
                <br />
                〒290-0242 千葉県市原市荻作530-4
                <br />
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

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600">制定日：2025年10月27日</p>
          </div>
        </div>
      </div>
    </div>
  );
}
