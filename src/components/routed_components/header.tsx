import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
export const Header = component$(()=>{
    const messages = [
        "5 Day left",
        "Test2",
        "Test3"
    ]
    const loc = useLocation();
    const href_list:{title:string,href:string}[] = [
        {
            title:"Home",
            href:"/",
        },
        {
            title:"Test",
            href:"/test",
        },
        {
            title:"Images",
            href:"/images",

        }
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
            <img src="/static/svg/cloud_48dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg"/>
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
        <div class="flex flex-row *:flex-auto text-center *:content-center *:justify-center divide-x divide-gray-500 h-15 px-5">
            {href_list.map((item) => {
                const topLevelPath = loc.url.pathname.match(/^\/([^/]+)/)?.[1] || "";
                return (
                    <a 
                        href={item.href}
                        key={item.title}
                        class={topLevelPath === item.href.replace("/", "") ? "bg-pink-500 text-white rounded-t-md font-bold" : ""}
                    >
                        {item.title}
                    </a>
                );
            })}
        </div>
    </header>
    )
})