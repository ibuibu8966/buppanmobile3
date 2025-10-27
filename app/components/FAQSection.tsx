"use client";

import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "申込から何日で使えますか?",
      answer:
        "物理SIMは通常1〜5営業日で発送、到着後の開通操作でご利用開始できます。eSIMは非対応です。",
    },
    {
      question: "MNP転入・転出は可能ですか?",
      answer:
        "はい。転出手数料は0円です。マイページからお手続きいただけます。",
    },
    {
      question: "通話料金は?",
      answer:
        "従量は11円/30秒です。定額は5分/10分/かけ放題（1通話120分で自動終了）をご用意しています。",
    },
    {
      question: "データ追加は?",
      answer:
        "月内いつでも500MB 770円／1GB 1,320円を都度購入できます。",
    },
    {
      question: "速度制御はありますか?",
      answer:
        "各プランに3日間合計の上限があり、到達時は当該期間256kbpsに制御されます。",
    },
    {
      question: "対象外番号は?",
      answer:
        "0570／0180／104／衛星系は定額対象外です。",
    },
    {
      question: "テザリングは使えますか?",
      answer: "可能です（端末仕様に依存します）。",
    },
    {
      question: "国際電話・SMS・ローミングは?",
      answer:
        "いずれも対応（要申請）。通話/通信料はキャリアの実費100%をご請求します。",
    },
    {
      question: "初月・解約月は日割りになりますか?",
      answer:
        "いいえ、日割りはありません（オプション含む）。",
    },
    {
      question: "最低利用期間は?",
      answer:
        "小売りとしての解約金は設けません（初回3ヶ月パックは返金不可）。",
    },
    {
      question: "SIMを失くした・破損した場合は?",
      answer: "再発行手数料がかかります（再発行＋配送）。",
    },
    {
      question: "請求タイミングは?",
      answer:
        "基本料は月次、従量通話などは翌々月に合算されます。",
    },
    {
      question: "支払い方法は?",
      answer:
        "銀行振込（請求書対応可）／クレジットカードに対応しています。",
    },
    {
      question: "ポケモンカードの認証はできますか?",
      answer: "はい、可能です。",
    },
    {
      question: "個人は何回線まで契約できますか?",
      answer: "最大5回線までです。",
    },
    {
      question: "法人の申込条件は?",
      answer:
        "20回線以上のお申込は別途審査が必要です（与信・運用体制の確認）。",
    },
    {
      question: "個人の3ヶ月パックはまた申し込めますか?",
      answer:
        "利用終了後に当社へご連絡のうえ、3ヶ月以内に回線名義を当社に戻すことで再申込が可能です（在庫・審査状況により前後）。",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-gray-600">
            お困りのことがあれば、まずはこちらをご確認ください
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <span className="text-2xl text-primary-dark flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            その他のご質問がある場合は、お気軽にお問い合わせください
          </p>
          <a
            href="mailto:peach.2023.7.19@gmail.com"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-colors"
          >
            メールでお問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
