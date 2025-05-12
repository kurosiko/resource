import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Ad } from "~/components/routed_components/ad/ad";
export const useJoke = routeLoader$(async ()=>{
    const response = await fetch('https://icanhazdadjoke.com',{
        headers: {Accept : 'application/json'}
    })
    return (await response.json() as {
        id:string,
        status: number,
        joke:string
    })
})
export const useImage = routeLoader$(async ()=>{
    const response = await fetch('https://api.kurosiko.com/video/get',{
        mode:"cors"
    })
    return (await response.json() as {
        src:string,
        link:string,
        title:string
    }[])
})
export default component$(()=>{
    const jokeSingnal = useJoke();
    const videoSignal = useImage();
    return (
        <div>
            <h1 class="text-2xl">AD</h1>
            <Ad/>
            <h1 class="text-2xl">Joke</h1>
            <p>{jokeSingnal.value.joke}</p>
            <h1 class="text-2xl">API</h1>
            {videoSignal.value.map((item) => (
                <div key={item.src}>
                    <p>{item.title}</p>
                    <div class="px-5">
                        <p>{item.src}</p>
                        <a href={item.link} class="text-blue-500">{item.link}</a>
                    </div>
                </div>
            ))}
        </div>
    )
})