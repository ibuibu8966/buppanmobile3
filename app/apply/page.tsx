"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Step = 1 | 2 | 3 | 4;
type ApplicationType = "new" | "mnp";

function ApplyForm() {
  const searchParams = useSearchParams();
  const initialType = (searchParams.get("type") as ApplicationType) || "new";

  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [applicationType, setApplicationType] =
    useState<ApplicationType>(initialType);

  const steps = [
    { number: 1, title: "本人確認" },
    { number: 2, title: "プラン選択" },
    { number: 3, title: "支払方法" },
    { number: 4, title: "最終確認" },
  ];

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
        {/* 申込タイプ選択 */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            お申し込み
          </h1>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setApplicationType("new")}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all ${
                applicationType === "new"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-600 border-2 border-gray-300"
              }`}
            >
              新規申込
            </button>
            <button
              onClick={() => setApplicationType("mnp")}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all ${
                applicationType === "mnp"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-600 border-2 border-gray-300"
              }`}
            >
              MNP転入
            </button>
          </div>
        </div>

        {/* ステッパー */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentStep >= step.number
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      currentStep >= step.number
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > step.number ? "bg-primary" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* フォームコンテンツ */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          {currentStep === 1 && (
            <Step1
              applicationType={applicationType}
              onNext={() => setCurrentStep(2)}
            />
          )}
          {currentStep === 2 && (
            <Step2
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}
          {currentStep === 3 && (
            <Step3
              onNext={() => setCurrentStep(4)}
              onBack={() => setCurrentStep(2)}
            />
          )}
          {currentStep === 4 && (
            <Step4
              applicationType={applicationType}
              onBack={() => setCurrentStep(3)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ステップ1: 本人確認
function Step1({
  applicationType,
  onNext,
}: {
  applicationType: ApplicationType;
  onNext: () => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        ステップ1: 本人確認
      </h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            申込者区分
          </label>
          <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none">
            <option>個人</option>
            <option>法人</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            氏名（個人）/ 法人名
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
            placeholder="山田 太郎"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            生年月日
          </label>
          <input
            type="date"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
          />
        </div>

        {applicationType === "mnp" && (
          <>
            <div className="border-t-2 border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                MNP転入情報
              </h3>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                MNP予約番号
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                placeholder="10桁の予約番号"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                有効期限
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                現在の電話番号
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                placeholder="090-1234-5678"
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            メールアドレス
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
            placeholder="example@email.com"
          />
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-900">
            <strong>本人確認について</strong>
            <br />
            個人：eKYC（オンライン本人確認）を実施します
            <br />
            法人：登記簿謄本と担当者の本人確認が必要です
          </p>
        </div>

        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-700">
            <strong>申込条件</strong>
            <br />
            • 個人：上限5回線まで
            <br />
            • 法人：20回線以上の申込は別途審査が必要
            <br />• 3ヶ月パックの再申込：利用終了後3ヶ月以内に回線名義を当社に戻すことで可能
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors"
        >
          次へ進む
        </button>
      </div>
    </div>
  );
}

// ステップ2: プラン選択
function Step2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const plans = [
    { id: "1gb", capacity: "1GB", price: "¥880", limit: "100MB/3日" },
    { id: "3gb", capacity: "3GB", price: "¥1,680", limit: "500MB/3日" },
    { id: "7.5gb", capacity: "7.5GB", price: "¥2,280", limit: "1GB/3日" },
    { id: "10gb", capacity: "10GB", price: "¥2,780", limit: "1.5GB/3日" },
    { id: "20gb", capacity: "20GB", price: "¥3,580", limit: "3GB/3日" },
    {
      id: "100gb",
      capacity: "100GB目安",
      price: "¥4,580",
      limit: "10GB/3日",
      popular: true,
    },
  ];

  const options = [
    { id: "5min", name: "5分かけ放題", price: "¥660/月" },
    { id: "10min", name: "10分かけ放題", price: "¥880/月" },
    { id: "unlimited", name: "かけ放題", price: "¥2,200/月" },
  ];

  const toggleOption = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        ステップ2: プラン選択
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            データ容量プラン
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-6 rounded-2xl border-2 transition-all text-left ${
                  selectedPlan === plan.id
                    ? "border-primary bg-amber-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 -right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    人気
                  </div>
                )}
                <div className="text-xl font-bold text-gray-900 mb-2">
                  {plan.capacity}
                </div>
                <div className="text-2xl font-bold text-primary-dark mb-2">
                  {plan.price}
                  <span className="text-sm text-gray-600">/月</span>
                </div>
                <div className="text-xs text-gray-600">{plan.limit}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            通話オプション（任意）
          </h3>
          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => toggleOption(option.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left flex justify-between items-center ${
                  selectedOptions.includes(option.id)
                    ? "border-primary bg-amber-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div>
                  <div className="font-semibold text-gray-900">
                    {option.name}
                  </div>
                  <div className="text-sm text-gray-600">{option.price}</div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedOptions.includes(option.id)
                      ? "border-primary bg-primary"
                      : "border-gray-300"
                  }`}
                >
                  {selectedOptions.includes(option.id) && (
                    <span className="text-white text-sm">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-900">
            <strong>プランについて</strong>
            <br />
            • 音声＋SMS込みの料金です
            <br />
            • 各プランに3日間合計の上限があります
            <br />
            • 通話は従量（11円/30秒）または定額オプションを選択できます
            <br />• 初回は3ヶ月パックの費用が必要です
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
        >
          戻る
        </button>
        <button
          onClick={onNext}
          disabled={!selectedPlan}
          className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          次へ進む
        </button>
      </div>
    </div>
  );
}

// ステップ3: 支払方法
function Step3({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "card" | "">("");

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        ステップ3: 支払方法
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            支払方法を選択
          </h3>
          <div className="space-y-4">
            <button
              onClick={() => setPaymentMethod("bank")}
              className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                paymentMethod === "bank"
                  ? "border-primary bg-amber-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    銀行振込
                  </div>
                  <p className="text-sm text-gray-600">
                    請求書対応可／振込手数料はお客様負担
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "bank"
                      ? "border-primary bg-primary"
                      : "border-gray-300"
                  }`}
                >
                  {paymentMethod === "bank" && (
                    <span className="text-white text-sm">✓</span>
                  )}
                </div>
              </div>
            </button>

            <button
              onClick={() => setPaymentMethod("card")}
              className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                paymentMethod === "card"
                  ? "border-primary bg-amber-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    クレジットカード
                  </div>
                  <p className="text-sm text-gray-600">
                    Visa / Mastercard / JCB / American Express
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary"
                      : "border-gray-300"
                  }`}
                >
                  {paymentMethod === "card" && (
                    <span className="text-white text-sm">✓</span>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>

        {paymentMethod === "card" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                カード番号
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  有効期限
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  セキュリティコード
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "bank" && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-900">
              <strong>振込情報について</strong>
              <br />
              お申し込み完了後、振込先情報をメールでお送りします。
              <br />
              初回3ヶ月パック費用のご入金確認後、SIMを発送いたします。
            </p>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            配送先住所
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                郵便番号
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                placeholder="123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                都道府県
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                placeholder="東京都"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                市区町村・番地
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                placeholder="渋谷区○○1-2-3"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                建物名・部屋番号
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                placeholder="○○マンション101号室"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-700">
            <strong>SIMカードについて</strong>
            <br />
            • 物理SIMのみ（eSIM非対応）
            <br />
            • 申込後1〜5営業日で発送
            <br />• 到着後、回線切替ボタンで即時開通（10:00-19:00稼働）
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
        >
          戻る
        </button>
        <button
          onClick={onNext}
          disabled={!paymentMethod}
          className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          次へ進む
        </button>
      </div>
    </div>
  );
}

// ステップ4: 最終確認
function Step4({
  applicationType,
  onBack,
}: {
  applicationType: ApplicationType;
  onBack: () => void;
}) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        ステップ4: 最終確認
      </h2>

      <div className="space-y-6">
        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            お申し込み内容
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">申込タイプ：</span>
              <span className="font-semibold">
                {applicationType === "new" ? "新規申込" : "MNP転入"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">プラン：</span>
              <span className="font-semibold">100GB目安（10GB/3日）</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">月額料金：</span>
              <span className="font-semibold">¥4,580</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">初回費用（3ヶ月パック）：</span>
              <span className="font-semibold text-lg">¥4,600</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            重要事項の確認
          </h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              ✓ 申込初月・解約月は日割りなしとなります
              <br />
              ✓ 解約金は0円です
              <br />
              ✓ MNP転出手数料は0円です
              <br />
              ✓ ユニバーサルサービス料2円/月、電話リレーサービス料1円/月を別途請求
              <br />
              ✓ 従量通話は翌々月に合算請求されます
              <br />
              ✓ 各プランに3日間合計の上限があり、到達時は256kbpsに制御されます
              <br />✓
              開通後の返品は不可（不良SIMは再発行手数料あり）
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-sm text-gray-700">
              <Link
                href="/terms"
                className="text-primary-dark hover:underline font-semibold"
              >
                利用規約
              </Link>
              、
              <Link
                href="/privacy"
                className="text-primary-dark hover:underline font-semibold"
              >
                プライバシーポリシー
              </Link>
              、
              <Link
                href="/legal"
                className="text-primary-dark hover:underline font-semibold"
              >
                特定商取引法表示
              </Link>
              の内容に同意します。
            </span>
          </label>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
        >
          戻る
        </button>
        <button
          disabled={!agreed}
          className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          この内容で申し込む
        </button>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="mt-4 text-gray-600">読み込み中...</p>
      </div>
    </div>}>
      <ApplyForm />
    </Suspense>
  );
}
