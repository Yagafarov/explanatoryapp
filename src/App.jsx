// src/App.js
import React, { useState } from 'react';
import { Info, X, Github, Twitter, Linkedin, Globe } from 'lucide-react';
import dictionary from '../src/data/dictionary';
import WordList from '../src/components/WordList';
import SearchBar from '../src/components/SearchBar';
import logo from '../src/assets/logomost.png'
import rasm from '../src/assets/rasm.png'

const App = () => {
    const [query, setQuery] = useState("");
    const [langFilter, setLangFilter] = useState("");
    const [showInfo, setShowInfo] = useState(false);

    const filteredWords = dictionary.filter((item) =>
        (langFilter === "" || item.lang === langFilter) &&
        (
            item.word.toLowerCase().includes(query.toLowerCase()) ||
            item.translation.toLowerCase().includes(query.toLowerCase())
        )
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50 p-6 relative">
            {/* Floating Info Button */}
            <button
                onClick={() => setShowInfo(true)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
                aria-label="О проекте"
            >
                <Info size={28} />
            </button>

            {/* Information Modal */}
            {showInfo && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-indigo-700">О проекте</h2>
                            <button
                                onClick={() => setShowInfo(false)}
                                className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
                                aria-label="Закрыть"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                                <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-dashed border-indigo-200 bg-white flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt="СловоМост лого"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Платформа словаря СловоМост</h3>
                                    <p className="text-gray-700">
                                        Эта платформа разработана как толковый словарь слов на русском и узбекском языках.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Особенности</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <li className="flex items-start gap-2">
                                        <div className="bg-indigo-100 p-1 rounded-full mt-1">
                                            <div className="bg-indigo-600 w-2 h-2 rounded-full"></div>
                                        </div>
                                        <span>Двуязычный словарь (русский, узбекский)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-indigo-100 p-1 rounded-full mt-1">
                                            <div className="bg-indigo-600 w-2 h-2 rounded-full"></div>
                                        </div>
                                        <span>Произношение слов (text-to-speech)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-indigo-100 p-1 rounded-full mt-1">
                                            <div className="bg-indigo-600 w-2 h-2 rounded-full"></div>
                                        </div>
                                        <span>Визуальные пояснения с изображениями</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-indigo-100 p-1 rounded-full mt-1">
                                            <div className="bg-indigo-600 w-2 h-2 rounded-full"></div>
                                        </div>
                                        <span>Возможность поиска и фильтрации</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Автор проекта</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow-sm">
                                        <img
                                            src={rasm} // ⬅️ Rasmingiz manzili shu yerda
                                            alt="Акмал Шамсиддинов"
                                            className="w-18 h-18 rounded-full object-cover border-2 border-indigo-200"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Боймуродов Ёрбек Омонович</h4>
                                            <p className="text-gray-700">Русский язык как иностранный ФилФ, <a className='text-indigo-600' href="https://tsu.ru">ТГУ</a> </p>
                                            <div className="mt-2">
                                                <a
                                                    href="mailto:yorbek1258@gmail.com"
                                                    className="text-sm text-indigo-600 hover:underline"
                                                >
                                                    📧 yorbek1258@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-gradient-to-r from-indigo-50 to-green-50 p-2 rounded-xl border border-indigo-100">
                                <h3 className="text-lg font-bold text-indigo-700 mb-4 text-center">📊 Статистика проекта</h3>

                                <div className="grid grid-cols-2 gap-3 text-center">
                                    {/* Card 1 */}
                                    <div className="bg-white rounded-lg p-2 shadow-sm border border-indigo-100">
                                        {dictionary.length.toLocaleString()}+
                                        <p className="text-xs text-gray-700 mt-1">Слов</p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white rounded-lg p-2 shadow-sm border border-indigo-100">
                                        <span className="text-2xl font-bold text-indigo-600 leading-tight">2</span>
                                        <p className="text-xs text-gray-700 mt-1">Языка</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="p-6 border-t border-gray-200 flex justify-center">
                            <button
                                onClick={() => setShowInfo(false)}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-green-600 bg-clip-text text-transparent mb-2">
                        СловоМост
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Толковый словарь слов на русском и узбекском языках. Значения слов, произношение и визуальные изображения.
                    </p>
                </div>

                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    langFilter={langFilter}
                    setLangFilter={setLangFilter}
                />

                <WordList words={filteredWords} />

                <footer className="mt-12 text-center text-gray-600 text-sm">
                    <p>© 2025 Платформа словаря СловоМост. Все права защищены.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
