import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
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
export default component$(()=>{
    const jokeSingnal = useJoke();
    return (
        <div>
            <img src="https://media1.tenor.com/m/Q65Z2bfeRbMAAAAC/testing-simpsons.gif" alt="test"/>
            <p>{jokeSingnal.value.joke}</p>
        </div>
    )
})