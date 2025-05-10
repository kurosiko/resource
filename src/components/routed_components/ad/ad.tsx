import { component$ } from "@builder.io/qwik";

export const Ad = component$(()=>{
    return(
        <>
            <div class="flex overflow-x-auto snap-x snap-mandatory py-4 gap-5 px-4">
                <div class="min-w-[400px] max-w-lg flex-shrink-0 snap-center">
                    <div class="bg-gradient-to-r from-yellow-100 to-orange-200 rounded-xl shadow-md overflow-hidden flex flex-col">
                        <div class="flex items-center justify-center h-48 md:h-64">
                            <p class="text-2xl md:text-4xl lg:text-5xl font-bold text-orange-700 text-center px-8">
                                ✨ アホ毛、それは<span class="text-yellow-800">個性</span>と<span class="text-red-600">魅力</span>の証。 ✨
                            </p>
                        </div>
                        <div class="bg-orange-50 py-4 text-center">
                            <p class="text-sm text-gray-600">
                                風になびく、あなただけのチャームポイント。
                            </p>
                            <button class="mt-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline">
                                もっと好きになる
                            </button>
                        </div>
                    </div>
                </div>

                <div class="min-w-[400px] max-w-lg flex-shrink-0 snap-center">
                    <div class="bg-gradient-to-r from-pink-100 to-purple-200 rounded-xl shadow-md overflow-hidden flex">
                        <div class="w-1/2 p-6 md:p-8 flex items-center justify-center h-48 md:h-64">
                            <img src="/static/images/hoshino_v2.png" alt="アホ毛のイラスト" class="max-h-48 md:max-h-64 object-contain"/>
                        </div>
                        <div class="w-1/2 p-6 md:p-8 flex flex-col justify-center">
                            <h2 class="text-xl md:text-2xl font-semibold text-purple-800 mb-2">
                                アホ毛は、<br/>あなたの可愛らしさのアクセント。
                            </h2>
                            <p class="text-sm text-gray-700 mb-4">
                                無理に隠さないで。自然な動きが、あなたの魅力を引き立てます。
                            </p>
                            <div class="flex justify-end">
                                <button class="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                                    もっと魅力を知る
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            <div class="min-w-[400px] max-w-lg flex-shrink-0 snap-center">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden flex">
            <div class="w-1/2  flex items-center justify-center h-48 md:h-64">
            <img src="/static/images/long_ago.png" alt="アホ毛のあるヘアスタイルの写真" class="w-full h-full object-cover"/>
            </div>
            <div class="w-1/2 p-8 flex flex-col justify-center bg-gray-100">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">
            「なんだか可愛い」って言われる秘密は、<br/><span class="text-indigo-600">アホ毛</span>の抜け感かも。
            </h2>
            <p class="text-sm text-gray-700 mb-4">
            頑張りすぎない、自然体の美しさ。あなたの個性をそっと引き立てます。
            </p>
            <div class="flex justify-end">
            <button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            自然体の自分をもっと好きに
            </button>
            </div>
            </div>
            </div>
            </div>

            <div class="min-w-[400px] max-w-lg flex-shrink-0 snap-center">
            <div class="bg-gradient-to-r from-lime-100 to-green-200 rounded-xl shadow-md overflow-hidden flex items-center justify-between p-6 md:p-8">
            <div class="w-1/3  flex items-center justify-center h-48 md:h-64">
            <img src="path/to/pop_aho_ge_illustration.png" alt="ポップなアホ毛のイラスト" class="max-h-32 md:max-h-48 object-contain"/>
            </div>
            <div class="w-2/3 text-right">
            <p class="text-xl md:text-3xl font-bold text-green-700 leading-tight" style={{ fontFamily: "'YourHandwritingFont', sans-serif" }}>
            アホ毛ウェルカム！<br/>だって、<span class="text-lime-800">チャームポイント</span>だもん♪
            </p>
            <button class="mt-4 bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            自分らしさをもっと楽しむ
            </button>
            </div>
            </div>
            </div>

             {/* New Ad Card */}
             <div class="min-w-[400px] max-w-lg flex-shrink-0 snap-center">
            <div class="bg-gradient-to-r from-teal-100 to-cyan-200 rounded-xl shadow-md overflow-hidden flex">
            <div class="w-1/2 p-6 md:p-8 flex items-center justify-center h-48 md:h-64">
            <img src="/static/images/aho_ge_care.png" alt="アホ毛ケアのイラスト" class="max-h-48 md:max-h-64 object-contain"/>
            </div>
            <div class="w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h2 class="text-xl md:text-2xl font-semibold text-teal-800 mb-2">
                アホ毛、気になり始めたら？
            </h2>
            <p class="text-sm text-gray-700 mb-4">
                毎日のケアで、アホ毛を魅力に変えましょう。
            </p>
            <div class="flex justify-end">
                <button class="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                ケアを始める
                </button>
            </div>
            </div>
            </div>
            </div>
            {/* End New Ad Card */}

            {/* New Ad Card 2 */}
            <div class="min-w-[400px] max-w-lg flex-shrink-0 snap-center">
            <div class="bg-gradient-to-r from-rose-100 to-pink-200 rounded-xl shadow-md overflow-hidden flex">
            <div class="w-1/2 p-6 md:p-8 flex items-center justify-center h-48 md:h-64">
            <img src="/static/images/aho_ge_item.png" alt="アホ毛対策アイテム" class="max-h-48 md:max-h-64 object-contain"/>
            </div>
            <div class="w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h2 class="text-xl md:text-2xl font-semibold text-rose-800 mb-2">
                アホ毛対策、何から始める？
            </h2>
            <p class="text-sm text-gray-700 mb-4">
                おすすめアイテムで、アホ毛をコントロール。
            </p>
            <div class="flex justify-end">
                <button class="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                アイテムを見る
                </button>
            </div>
            </div>
            </div>
            </div>
            {/* End New Ad Card 2 */}
            </div>

            <div class="bg-gray-100 rounded-xl shadow-sm overflow-hidden flex items-center p-4 md:p-6 mt-6">
            <div>
            <p class="text-lg font-medium text-gray-800">
            ちょっとした<span class="text-blue-600">遊び心</span>、それがアホ毛。
            </p>
            <p class="text-sm text-gray-600">
            あなたの日常に、さりげない個性をプラス。
            </p>
            </div>
            <div class="ml-auto">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            もっと見る
            </button>
            </div>
            </div>
        </>
    );
});