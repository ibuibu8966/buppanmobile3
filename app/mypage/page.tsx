"use client";

import { useState } from "react";
import Link from "next/link";

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<
    "usage" | "options" | "mnp" | "cancel"
  >("usage");

  // モックデータ（実際はAPIから取得）
  const userData = {
    plan: "100GB目安（10GB/3日）",
    monthlyFee: "¥4,580",
    dataUsed: 45.2,
    dataLimit: 100,
    threeDayUsage: 8.5,
    threeDayLimit: 10,
    callMinutes: 120,
    estimatedCallCharge: 2640,
    phoneNumber: "090-1234-5678",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              BUPPAN MOBILE
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                トップ
              </Link>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors">
                ログアウト
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">マイページ</h1>

        {/* ユーザー情報カード */}
        <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm opacity-90 mb-1">電話番号</div>
              <div className="text-2xl font-bold mb-4">
                {userData.phoneNumber}
              </div>
              <div className="text-sm opacity-90">現在のプラン</div>
              <div className="text-xl font-semibold">{userData.plan}</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">月額料金</div>
              <div className="text-3xl font-bold">{userData.monthlyFee}</div>
            </div>
          </div>
        </div>

        {/* タブナビゲーション */}
        <div className="bg-white rounded-2xl shadow-md mb-8 overflow-x-auto">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("usage")}
              className={`flex-1 px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                activeTab === "usage"
                  ? "border-b-4 border-primary text-primary-dark"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              利用状況
            </button>
            <button
              onClick={() => setActiveTab("options")}
              className={`flex-1 px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                activeTab === "options"
                  ? "border-b-4 border-primary text-primary-dark"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              オプション管理
            </button>
            <button
              onClick={() => setActiveTab("mnp")}
              className={`flex-1 px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                activeTab === "mnp"
                  ? "border-b-4 border-primary text-primary-dark"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              MNP予約番号
            </button>
            <button
              onClick={() => setActiveTab("cancel")}
              className={`flex-1 px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                activeTab === "cancel"
                  ? "border-b-4 border-primary text-primary-dark"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              解約申請
            </button>
          </div>
        </div>

        {/* タブコンテンツ */}
        {activeTab === "usage" && <UsageTab userData={userData} />}
        {activeTab === "options" && <OptionsTab />}
        {activeTab === "mnp" && <MNPTab />}
        {activeTab === "cancel" && <CancelTab />}
      </div>
    </div>
  );
}

// 利用状況タブ
function UsageTab({ userData }: { userData: any }) {
  return (
    <div className="space-y-6">
      {/* データ使用量 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          今月のデータ使用量
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 font-semibold">
                月間使用量（目安）
              </span>
              <span className="text-2xl font-bold text-primary-dark">
                {userData.dataUsed}GB
                <span className="text-sm text-gray-600">
                  {" "}
                  / {userData.dataLimit}GB
                </span>
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-amber-400 to-amber-500 h-4 rounded-full transition-all"
                style={{
                  width: `${(userData.dataUsed / userData.dataLimit) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="border-t-2 border-gray-100 pt-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 font-semibold">
                3日間カウント（直近）
              </span>
              <span className="text-2xl font-bold text-gray-900">
                {userData.threeDayUsage}GB
                <span className="text-sm text-gray-600">
                  {" "}
                  / {userData.threeDayLimit}GB
                </span>
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-400 to-blue-500 h-4 rounded-full transition-all"
                style={{
                  width: `${
                    (userData.threeDayUsage / userData.threeDayLimit) * 100
                  }%`,
                }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              ※ 3日間で{userData.threeDayLimit}
              GBを超えると256kbpsに速度制御されます
            </p>
          </div>
        </div>
      </div>

      {/* 通話使用量 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">今月の通話</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border-2 border-purple-200">
            <div className="text-sm text-purple-700 font-semibold mb-2">
              通話時間
            </div>
            <div className="text-4xl font-bold text-purple-900">
              {userData.callMinutes}
              <span className="text-xl">分</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-200">
            <div className="text-sm text-orange-700 font-semibold mb-2">
              概算通話料（従量）
            </div>
            <div className="text-4xl font-bold text-orange-900">
              ¥{userData.estimatedCallCharge.toLocaleString()}
            </div>
            <div className="text-xs text-orange-600 mt-2">
              ※ 翌々月に合算請求されます
            </div>
          </div>
        </div>
      </div>

      {/* 追加チャージ */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          データ追加チャージ
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <button className="p-6 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-300 rounded-2xl hover:shadow-lg transition-all text-left">
            <div className="text-xl font-bold text-gray-900 mb-2">
              500MB 追加
            </div>
            <div className="text-3xl font-bold text-primary-dark">¥770</div>
          </button>
          <button className="p-6 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-300 rounded-2xl hover:shadow-lg transition-all text-left">
            <div className="text-xl font-bold text-gray-900 mb-2">
              1GB 追加
            </div>
            <div className="text-3xl font-bold text-primary-dark">¥1,320</div>
          </button>
        </div>
      </div>
    </div>
  );
}

// オプション管理タブ
function OptionsTab() {
  const [options, setOptions] = useState({
    "5min": false,
    "10min": false,
    unlimited: false,
  });

  const optionList = [
    { id: "5min", name: "5分かけ放題", price: "¥660/月" },
    { id: "10min", name: "10分かけ放題", price: "¥880/月" },
    { id: "unlimited", name: "かけ放題", price: "¥2,200/月" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          通話オプション
        </h2>
        <div className="space-y-4">
          {optionList.map((option) => (
            <div
              key={option.id}
              className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl"
            >
              <div>
                <div className="text-lg font-bold text-gray-900">
                  {option.name}
                </div>
                <div className="text-sm text-gray-600">{option.price}</div>
              </div>
              <button
                onClick={() =>
                  setOptions((prev) => ({
                    ...prev,
                    [option.id]: !prev[option.id as keyof typeof options],
                  }))
                }
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  options[option.id as keyof typeof options]
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-primary hover:bg-primary-dark text-white"
                }`}
              >
                {options[option.id as keyof typeof options]
                  ? "解除する"
                  : "追加する"}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-900">
            <strong>注意事項</strong>
            <br />
            • オプションの追加・削除は即座に反映されます
            <br />
            • 月の途中での追加・削除でも日割り計算はありません
            <br />• かけ放題は1通話120分で自動終了します
          </p>
        </div>
      </div>
    </div>
  );
}

// MNP予約番号タブ
function MNPTab() {
  const [mnpNumber, setMnpNumber] = useState<string | null>(null);

  const generateMNP = () => {
    // モック：実際はAPIを呼び出す
    setMnpNumber("1234567890");
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          MNP予約番号の発行
        </h2>
        {!mnpNumber ? (
          <>
            <p className="text-gray-700 mb-6 leading-relaxed">
              他社への乗り換え（MNP転出）をご希望の場合、MNP予約番号を発行できます。
              <br />
              手数料は無料です。
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-900">
                <strong>MNP転出について</strong>
                <br />
                • 転出手数料：0円
                <br />
                • 予約番号の有効期限：発行日から15日間
                <br />• 転出後の解約金：0円
              </p>
            </div>
            <button
              onClick={generateMNP}
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors"
            >
              MNP予約番号を発行する
            </button>
          </>
        ) : (
          <>
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-400 rounded-2xl p-8 mb-6">
              <div className="text-center">
                <div className="text-sm text-green-700 font-semibold mb-2">
                  MNP予約番号
                </div>
                <div className="text-5xl font-bold text-green-900 mb-4 tracking-widest">
                  {mnpNumber}
                </div>
                <div className="text-sm text-green-700">
                  有効期限：2025年11月11日まで
                </div>
              </div>
            </div>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-900">
                <strong>ご注意</strong>
                <br />
                • MNP予約番号は転出先キャリアでのお申し込み時に必要です
                <br />
                • 有効期限内に転出手続きを完了してください
                <br />•
                有効期限を過ぎると自動的に無効になり、再発行が必要です
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// 解約申請タブ
function CancelTab() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">解約申請</h2>
        <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-2">
                解約前にご確認ください
              </h3>
              <ul className="text-sm text-red-800 space-y-2">
                <li>• 解約は当月末で完了します（日割り計算なし）</li>
                <li>• 解約金は0円です</li>
                <li>
                  • 初回3ヶ月パックの返金はありません
                </li>
                <li>• 電話番号は解約後使用できなくなります</li>
                <li>
                  • 他社への乗り換え（MNP）をご希望の場合は、MNP予約番号タブから手続きしてください
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <span className="text-sm text-gray-700">
              上記の内容を理解し、解約を申請します。
            </span>
          </label>
        </div>

        <button
          disabled={!agreed}
          className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          解約を申請する
        </button>
      </div>
    </div>
  );
}
