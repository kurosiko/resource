import { $, component$, useSignal } from "@builder.io/qwik";

export const Ad = component$(() => {
    const scrollRef = useSignal<Element>();

    const scrollBy = $((offset: number) => {
        const el = scrollRef.value;
        if (el) {
            el.scrollBy({ left: offset, behavior: "smooth" });
        }
    });

    return (
        <>
            <div class="relative group">
                <div
                    ref={scrollRef}
                    class="flex overflow-x-auto snap-x snap-mandatory gap-5 *:w-full *:h-28  *:border *:border-blue-500 *:flex-shrink-0 *:snap-center text-center"
                >
                    <div class="rounded-lg shadow-md p-4 bg-rose-300 text-white ">
                        <p class="text-lg font-bold">✨「アホ毛、それは自由の象徴！」✨</p>
                        <p class="text-sm">風になびくアホ毛のように、あなたも自由に。🕊️</p>
                    </div>
                    <div class="rounded-lg shadow-md p-4 bg-lime-300 text-white ">
                        <p class="text-lg font-bold">📡「アホ毛は、秘密のアンテナ！」📡</p>
                        <p class="text-sm">あなたの魅力をキャッチ！💖</p>
                    </div>
                    <div class="rounded-lg shadow-md p-4 bg-amber-300 text-white ">
                        <p class="text-lg font-bold">☀️「今日のアホ毛、絶好調！」☀️</p>
                        <p class="text-sm">アホ毛と過ごす、最高の一日。😊</p>
                    </div>
                    <div class="rounded-lg shadow-md p-4 bg-violet-300 text-white ">
                        <p class="text-lg font-bold">💡「アホ毛、それは創造の源！」💡</p>
                        <p class="text-sm">ユニークなアイデアが生まれる予感。🌟</p>
                    </div>
                    <div class="rounded-lg shadow-md p-4 bg-sky-300 text-white ">
                        <p class="text-lg font-bold">🗣️「アホ毛は、心の声！」🗣️</p>
                        <p class="text-sm">素直な気持ちを表現。💬</p>
                    </div>
                    <div class="rounded-lg shadow-md p-4 bg-red-300 text-white ">
                        <p class="text-lg font-bold">🚀「アホ毛と、どこまでも！」🚀</p>
                        <p class="text-sm">一緒に新しい世界へ飛び出そう。🌍</p>
                    </div>
                    <div class="rounded-lg shadow-md p-4 bg-pink-300 text-white ">
                        <p class="text-lg font-bold">💯「アホ毛こそ、自分らしさ！」💯</p>
                        <p class="text-sm">ありのままのあなたが好き。💖</p>
                    </div>
                </div>
                <button
                    type="button"
                    class="absolute top-1/2 left-0 bg-black text-white text-5xl w-10 h-10 text-center rounded-r-xl transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"
                    onClick$={() => scrollBy(-300)}
                    aria-label="左にスクロール"
                >
                    <img src="/static/svg/arrow_back_48dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg" />
                </button>
                <button
                    type="button"
                    class="absolute top-1/2 right-0 bg-black text-white text-5xl w-10 h-10 text-center rounded-l-xl transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"
                    onClick$={() => scrollBy(300)}
                    aria-label="右にスクロール"
                >
                    <img src="/static/svg/arrow_right_alt_48dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg" />
                </button>
            </div>
        </>
    );
});