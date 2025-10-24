"use client";

import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Мама ученицы",
    text: "София — замечательный преподаватель! Моя дочь занималась с ней полгода перед ОГЭ. Результат превзошел все ожидания — 5 на экзамене! София не только знает математику, но и умеет объяснить сложные вещи простым языком.",
    rating: 5,
    verified: true,
  },
  {
    name: "Дмитрий",
    role: "Ученик 9 класса",
    text: "Раньше математика казалась мне китайской грамотой. После занятий с Софией я начал понимать предмет и даже полюбил его. Сдал ОГЭ на 4, хотя до этого у меня были тройки. Спасибо огромное!",
    rating: 5,
    verified: true,
  },
  {
    name: "Елена Иванова",
    role: "Мама ученика",
    text: "Очень довольны результатом! София помогла сыну подтянуть математику с тройки до четверки всего за 3 месяца. Занятия проходили онлайн, что очень удобно. Рекомендую!",
    rating: 5,
    verified: true,
  },
  {
    name: "Максим",
    role: "Ученик 9 класса",
    text: "Готовился к ОГЭ с Софией 4 месяца. Занятия всегда интересные, много практики. София терпеливо объясняет, пока не поймешь. Сдал экзамен на 5!",
    rating: 5,
    verified: true,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Mathematical decorations */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-20 left-20 text-9xl font-serif text-slate-800 rotate-12 animate-pulse" style={{ animationDuration: '4s' }}>π</div>
        <div className="absolute bottom-20 right-20 text-8xl font-serif text-slate-800 -rotate-12 animate-pulse" style={{ animationDuration: '5s' }}>√</div>
        <div className="absolute top-1/2 right-10 text-7xl font-serif text-orange-600 opacity-20 rotate-6">∞</div>
        <div className="absolute bottom-1/3 left-1/4 text-6xl font-serif text-slate-800 opacity-30">≠</div>
        <div className="absolute top-1/4 right-1/3 text-5xl font-serif text-amber-600 opacity-20">∑</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Отзывы учеников
            </h2>
            <p className="text-xl text-slate-600">
              Что говорят о занятиях ученики и их родители
            </p>
          </div>

          {/* Carousel */}
          <div className="relative mb-16">
            {/* Main testimonial card */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-slate-100 relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-50" />

                <div className="relative z-10">
                  <Quote className="w-12 h-12 text-orange-200 mb-6" />

                  {/* Rating stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-orange-400 text-orange-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-slate-700 leading-relaxed mb-8 text-lg md:text-xl italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author info */}
                  <div className="border-t border-slate-200 pt-6 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-slate-900 text-lg">
                          {testimonials[currentIndex].name}
                        </p>
                        {testimonials[currentIndex].verified && (
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-100 rounded-full">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            <span className="text-xs font-medium text-emerald-700">Проверено</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-slate-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-orange-300 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-orange-600 transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-orange-300 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-orange-600 transition-colors" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-orange-600 to-amber-600"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 mb-2 group-hover:scale-110 transition-transform">
                4.9/5
              </div>
              <div className="text-slate-600 font-medium">Средняя оценка</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 mb-2 group-hover:scale-110 transition-transform">
                100+
              </div>
              <div className="text-slate-600 font-medium">Довольных учеников</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 mb-2 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-slate-600 font-medium">Сдали на 4 и 5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
