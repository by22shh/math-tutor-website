"use client";

import { BookOpen, Target, TrendingUp, Award, Calendar, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Знакомство",
    description: "Первое бесплатное занятие, где мы определяем ваш текущий уровень и ставим цели",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "План подготовки",
    description: "Составляем индивидуальную программу обучения с учетом ваших сильных и слабых сторон",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BookOpen,
    title: "Изучение материала",
    description: "Разбираем темы ОГЭ, решаем задачи, закрепляем знания домашними заданиями",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: FileCheck,
    title: "Практика",
    description: "Регулярно решаем пробные варианты ОГЭ, анализируем ошибки и работаем над ними",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Отслеживание прогресса",
    description: "Проводим промежуточные тесты и видим динамику улучшения результатов",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Award,
    title: "Успешная сдача ОГЭ",
    description: "Вы уверенно сдаете экзамен и получаете высокие баллы!",
    color: "from-yellow-500 to-orange-500"
  }
];

export default function LearningProcess() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Mathematical decorations */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-20 right-20 text-9xl font-serif text-slate-800 animate-pulse" style={{ animationDuration: '6s' }}>∫</div>
        <div className="absolute bottom-20 left-20 text-8xl font-serif text-slate-800 animate-pulse" style={{ animationDuration: '5s' }}>∑</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Как проходят занятия
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Простой и эффективный путь к успешной сдаче ОГЭ
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200 md:transform md:-translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-orange-500 rounded-full md:transform md:-translate-x-1/2 shadow-lg z-10" />

                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-orange-200 group">
                      <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
