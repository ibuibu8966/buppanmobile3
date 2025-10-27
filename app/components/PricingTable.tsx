"use client";

import { useState } from "react";

export function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "bulk">(
    "standard"
  );

  const standardPlans = [
    {
      capacity: "1GB",
      price: "¥880",
      description: "音声＋SMS込み",
      limit: "100MB/3日で制御",
      popular: true,
    },
    {
      capacity: "3GB",
      price: "¥1,680",
      description: "音声＋SMS込み",
      limit: "500MB/3日で制御",
    },
    {
      capacity: "7.5GB",
      price: "¥2,280",
      description: "音声＋SMS込み",
      limit: "1GB/3日で制御",
    },
    {
      capacity: "10GB",
      price: "¥2,780",
      description: "音声＋SMS込み",
      limit: "1.5GB/3日で制御",
    },
    {
      capacity: "20GB",
      price: "¥3,580",
      description: "音声＋SMS込み",
      limit: "3GB/3日で制御",
    },
    {
      capacity: "100GB目安",
      price: "¥4,580",
      description: "音声＋SMS込み",
      limit: "10GB/3日で制御",
    },
  ];

  const bulkPlans = [
    {
      capacity: "1GB",
      price: "¥780",
      description: "音声＋SMS込み",
      limit: "100MB/3日で制御",
      popular: true,
    },
    {
      capacity: "3GB",
      price: "¥1,580",
      description: "音声＋SMS込み",
      limit: "500MB/3日で制御",
    },
    {
      capacity: "7.5GB",
      price: "¥2,180",
      description: "音声＋SMS込み",
      limit: "1GB/3日で制御",
    },
    {
      capacity: "10GB",
      price: "¥2,680",
      description: "音声＋SMS込み",
      limit: "1.5GB/3日で制御",
    },
    {
      capacity: "20GB",
      price: "¥3,480",
      description: "音声＋SMS込み",
      limit: "3GB/3日で制御",
    },
    {
      capacity: "100GB目安",
      price: "¥4,480",
      description: "音声＋SMS込み",
      limit: "10GB/3日で制御",
    },
  ];

  const plans = selectedPlan === "standard" ? standardPlans : bulkPlans;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sim-card-1645646_1280.jpg')",
        }}
      />
      {/* 半透明オーバーレイ */}
      <div className="absolute inset-0 bg-white/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            音声＋SMS込み・
            <br className="sm:hidden" />
            使うぶんだけに最適化
          </p>
        </div>

        {/* タブ切り替え */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-col sm:flex-row rounded-2xl bg-white p-1 shadow-lg gap-1 sm:gap-0">
            <button
              onClick={() => setSelectedPlan("standard")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
                selectedPlan === "standard"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              標準プラン
              <span className="block text-xs">個人・小規模法人</span>
            </button>
            <button
              onClick={() => setSelectedPlan("bulk")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
                selectedPlan === "bulk"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span className="block">100回線以上</span>
              <span className="block">（継続）専用</span>
              <span className="block text-xs">法人/代理店向け</span>
            </button>
          </div>
        </div>

        {/* プランカード */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                plan.popular ? "border-4 border-primary relative" : "border-2 border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    人気
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.capacity}
                </h3>
                <div className="my-4">
                  <span className="text-4xl font-bold text-primary-dark">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/月</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
                <p className="text-xs text-gray-500">{plan.limit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 追加情報 */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            オプション・追加情報
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                追加データ（都度チャージ／月内）
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 500MB：<span className="font-bold">¥770</span></li>
                <li>• 1GB：<span className="font-bold">¥1,320</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">通話料金</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 従量通話：<span className="font-bold">¥11/30秒</span></li>
                <li className="text-xs text-gray-500">
                  （対象外：0570／0180／104／衛星系）
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                定額通話オプション
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 5分かけ放題：<span className="font-bold">¥660/月</span></li>
                <li>• 10分かけ放題：<span className="font-bold">¥880/月</span></li>
                <li>• かけ放題：<span className="font-bold">¥2,200/月</span></li>
                <li className="text-xs text-gray-500">
                  （1通話120分で自動終了）
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">注意事項</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • ユニバーサルサービス料2円/月、電話リレーサービス料1円/月を別途請求
                </li>
                <li>• 従量通話は翌々月に合算請求</li>
                <li>• 申込初月・解約月の日割りなし</li>
              </ul>
            </div>
          </div>
        </div>

        {selectedPlan === "bulk" && (
          <div className="mt-8 text-center">
            <div className="inline-block bg-amber-100 border-2 border-amber-400 rounded-2xl p-6">
              <p className="text-amber-900 font-semibold">
                100回線以上（継続）専用プラン
              </p>
              <p className="text-sm text-amber-800 mt-2">
                継続利用＆毎月100回線以上のご契約で標準価格から税込100円引き
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
