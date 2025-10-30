"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Для кого подойдут занятия?",
    answer: "Занятия предназначены для учеников 5–9 классов: помогаю закрыть пробелы по школьной программе, улучшить успеваемость и целенаправленно готовлю к ОГЭ для 9 класса."
  },
  {
    question: "Сколько длится одно занятие?",
    answer: "Одно занятие длится 60 минут. Это оптимальное время для эффективного усвоения материала без переутомления."
  },
  {
    question: "Как проходят онлайн-занятия?",
    answer: "Занятия проходят в удобном для вас формате через Zoom, Skype или другую платформу. Используем виртуальную доску, делимся экраном и материалами в реальном времени."
  },
  {
    question: "Нужно ли покупать дополнительные материалы?",
    answer: "Нет, все необходимые учебные материалы, задачники и, при необходимости, пробные варианты ОГЭ я предоставляю бесплатно."
  },
  {
    question: "Как часто нужно заниматься?",
    answer: "Рекомендую заниматься 2-3 раза в неделю для достижения максимального результата. Можем обсудить индивидуальный график на первом занятии."
  },
  {
    question: "Что если мне не подойдет формат занятий?",
    answer: "Первое занятие полностью бесплатное! Вы сможете оценить методику, мой стиль преподавания и принять решение о продолжении занятий без каких-либо обязательств."
  },
  {
    question: "Даете ли вы домашние задания?",
    answer: "Да, после каждого занятия я даю домашнее задание для закрепления материала. Проверяю его и разбираем ошибки на следующем уроке."
  },
  {
    question: "Можно ли перенести или отменить занятие?",
    answer: "Да, можно перенести занятие, предупредив заранее. Стараюсь быть гибкой и понимать, что могут возникнуть непредвиденные обстоятельства."
  },
  {
    question: "Гарантируете ли вы результат?",
    answer: "При регулярных занятиях и выполнении домашних заданий гарантирую значительное улучшение результатов по математике. 95% моих учеников сдают ОГЭ на 4 и 5!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Mathematical decorations */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-10 right-10 text-9xl font-serif text-slate-800 rotate-12">?</div>
        <div className="absolute bottom-10 left-10 text-8xl font-serif text-orange-600 -rotate-12">!</div>
        <div className="absolute top-1/2 left-1/4 text-6xl font-serif text-slate-800">≈</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-slate-600">
              Ответы на популярные вопросы о занятиях
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-100 hover:border-orange-200 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-100">
            <p className="text-lg text-slate-700 mb-4">
              Не нашли ответ на свой вопрос?
            </p>
            <p className="text-slate-600">
              Напишите мне в{" "}
              <a
                href="https://t.me/sssssssssofaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-semibold underline"
              >
                Telegram
              </a>
              {" "}или{" "}
              <a
                href="https://wa.me/79237004030"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-semibold underline"
              >
                WhatsApp
              </a>
              , и я с удовольствием отвечу!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
