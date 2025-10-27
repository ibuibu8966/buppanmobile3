import Link from "next/link";

export default function TermsPage() {
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
          BUPPAN MOBILE 利用規約
        </h1>

        <div className="bg-white rounded-3xl p-8 shadow-lg space-y-6">
          <div>
            <p className="text-gray-700 leading-relaxed">
              本利用規約（以下「本規約」）は、合同会社ピーチ（以下「当社」）が提供するBUPPAN
              MOBILEサービス（以下「本サービス」）の利用条件を定めるものです。
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第1条（適用）
            </h2>
            <ol className="space-y-2 text-gray-700 pl-6 list-decimal">
              <li>
                本規約は、本サービスの利用に関する当社とお客様との間の権利義務関係を定めることを目的とし、お客様と当社との間の本サービスの利用に関わる一切の関係に適用されます。
              </li>
              <li>
                当社が本サービスに関して掲載する個別規定及び追加規定は、本規約の一部を構成するものとします。
              </li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第2条（定義）
            </h2>
            <p className="text-gray-700 mb-3">本規約において使用する用語の定義は、以下のとおりとします。</p>
            <ol className="space-y-2 text-gray-700 pl-6 list-decimal">
              <li>「お客様」：本サービスを利用する個人または法人</li>
              <li>「契約者」：当社と本サービスの利用契約を締結した者</li>
              <li>「SIMカード」：本サービスの提供に使用するSIMカード</li>
              <li>「通信サービス」：音声通話、SMS、データ通信等の電気通信サービス</li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第3条（契約の成立）
            </h2>
            <ol className="space-y-2 text-gray-700 pl-6 list-decimal">
              <li>
                本サービスの利用契約は、お客様が当社所定の方法により申し込み、当社がこれを承諾したときに成立するものとします。
              </li>
              <li>
                当社は、以下の場合、申し込みを承諾しないことがあります。
                <ul className="mt-2 space-y-1 pl-6 list-disc">
                  <li>申込内容に虚偽、誤記または記入漏れがあった場合</li>
                  <li>本人確認ができない場合</li>
                  <li>支払能力に疑義がある場合</li>
                  <li>過去に本規約違反により契約を解除されたことがある場合</li>
                  <li>その他、当社が不適当と判断した場合</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第4条（料金及び支払）
            </h2>
            <ol className="space-y-2 text-gray-700 pl-6 list-decimal">
              <li>
                お客様は、本サービスの利用にあたり、当社が別途定める料金を支払うものとします。
              </li>
              <li>
                初回申込時は、3ヶ月パック料金（事務手数料・登録料・配送料込み）をお支払いいただきます。
              </li>
              <li>
                月額基本料金は、ご利用月の翌月に請求されます。従量通話料等は、ご利用月の翌々月に合算して請求されます。
              </li>
              <li>申込初月および解約月の日割り計算は行いません。</li>
              <li>
                料金の支払方法は、クレジットカード決済または銀行振込とします。銀行振込の場合、振込手数料はお客様負担とします。
              </li>
              <li>
                料金の支払いが遅延した場合、当社は本サービスの提供を停止または契約を解除することができます。
              </li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第5条（利用制限）
            </h2>
            <ol className="space-y-2 text-gray-700 pl-6 list-decimal">
              <li>
                個人のお客様は、最大5回線までご契約いただけます。
              </li>
              <li>
                法人のお客様で20回線以上をお申し込みの場合は、別途審査を実施します。
              </li>
              <li>
                各プランには3日間のデータ使用量上限があり、これを超過した場合、当該期間は最大256kbpsに速度制御されます。
              </li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第6条（禁止事項）
            </h2>
            <p className="text-gray-700 mb-3">お客様は、以下の行為を行ってはなりません。</p>
            <ol className="space-y-2 text-gray-700 pl-6 list-decimal">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>
                大量の通信を行う等、ネットワークに過度な負荷をかける行為
              </li>
              <li>本サービスを転売または再販する行為</li>
              <li>虚偽の情報を登録または申告する行為</li>
              <li>不正な目的で本サービスを利用する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第7条（契約の解除）
            </h2>
            <ol className="space-y-2 text-gray-700 pl-6 list-decimal">
              <li>
                お客様は、当社所定の方法により、いつでも本サービスの利用契約を解約できます。解約は当月末をもって成立します。
              </li>
              <li>解約金は発生しません。</li>
              <li>
                当社は、お客様が以下のいずれかに該当する場合、事前の通知なく契約を解除できます。
                <ul className="mt-2 space-y-1 pl-6 list-disc">
                  <li>本規約に違反した場合</li>
                  <li>料金の支払いを怠った場合</li>
                  <li>虚偽の申告があった場合</li>
                  <li>その他、契約の継続が困難と当社が判断した場合</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第8条（免責事項）
            </h2>
            <ol className="space-y-2 text-gray-700 pl-6 list-decimal">
              <li>
                当社は、本サービスの内容、品質、精度等について、いかなる保証もいたしません。
              </li>
              <li>
                電波状況、設備の保守、天災等により、本サービスが一時的に利用できない場合があります。
              </li>
              <li>
                当社は、本サービスの利用により発生した損害について、債務不履行責任、不法行為責任その他の法律上の請求原因の如何を問わず、一切の責任を負いません。ただし、当社の故意または重過失による場合を除きます。
              </li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第9条（個人情報の取扱い）
            </h2>
            <p className="text-gray-700">
              当社は、お客様の個人情報を、当社が別途定める
              <Link href="/privacy" className="text-primary-dark hover:underline font-semibold">
                プライバシーポリシー
              </Link>
              に従って取り扱います。
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第10条（規約の変更）
            </h2>
            <p className="text-gray-700">
              当社は、必要に応じて本規約を変更することができます。変更後の規約は、本ウェブサイトに掲載した時点から効力を生じます。
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              第11条（準拠法及び管轄裁判所）
            </h2>
            <ol className="space-y-2 text-gray-700 pl-6 list-decimal">
              <li>本規約の準拠法は日本法とします。</li>
              <li>
                本サービスに関する紛争については、千葉地方裁判所を第一審の専属的合意管轄裁判所とします。
              </li>
            </ol>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600">
              制定日：2025年10月27日
              <br />
              合同会社ピーチ
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3">
            関連ドキュメント
          </h3>
          <div className="space-y-2">
            <Link
              href="/privacy"
              className="block text-blue-700 hover:text-blue-900 hover:underline"
            >
              → プライバシーポリシー
            </Link>
            <Link
              href="/legal"
              className="block text-blue-700 hover:text-blue-900 hover:underline"
            >
              → 特定商取引法に基づく表記
            </Link>
            <Link
              href="/telecom"
              className="block text-blue-700 hover:text-blue-900 hover:underline"
            >
              → 電気通信事業法に基づく表示
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
