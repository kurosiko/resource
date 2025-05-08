import { component$ } from "@builder.io/qwik";

export const Header = component$(()=>{
    const messages = [
        "5 Day(s) left Doujin & Smartphone Game Super Sale Up to 90% OFF!",
        "Test2",
        "Test3"
    ]
    return (
    <header>
        <div class="h-12 overflow-y-scroll snap-y snap-mandatory">
            <ul class="flex *:flex-auto flex-col font-semibold h-max">
                {messages.map((message:string)=>
                    <li key={message}
                        class="text-3xl bg-pink-400 h-15 text-center justify-center content-center snap-center"
                    >{message}</li>
                )}
            </ul>
        </div>
        <div class="flex *:flex-auto px-20 h-20 content-center justify-center">
            <h1>Resource Logo</h1>
            <div class="flex *:flex-auto p-3 m-2 border rounded-md divide-gray-500 divide-x divide-solid">
                <select>
                    <option>Default</option>
                    <option>Dropdown 1</option>
                    <option>Dropdown 2</option>
                    <option>Dropdown 3</option>
                </select>
                <input type="text" class="border mx-2 rounded-md"/>
                <button class="border-b mx-2">Search</button>
            </div>
            <div class="flex *:flex-auto *:p-2 divide-x divide-gray-500 divide-dashed content-center justify-center text-center ">
                <div><a href="https://kurosiko.com/user/new">Register</a></div>
                <div><a href="https://kurosiko.com/user/login">My Page</a></div>
                <div>Language</div>
                <div>About</div>
            </div>
        </div>
        <div>
            <ul
                class="flex flex-row *:flex-auto text-center content-center justify-center p-5 divide-x divide-gray-500">
                <li><a href="https://x.com/kurosiko">Twitter</a></li>
                <li><a href="https://github.com/kurosiko">GitHub</a></li>
                <li><a href="https://kurosiko.com">Webpage</a></li>
            </ul>
        </div>

    </header>
    )
})