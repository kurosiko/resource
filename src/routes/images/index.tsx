import { component$ } from "@builder.io/qwik";
import ImgMaki from '/static/images/maki.png?jsx';
import ImgHoshinoV1 from '/static/images/hoshino_v1.png?jsx';
import ImgHoshinoV2 from '/static/images/hoshino_v2.png?jsx';
import ImgUzawa from '/static/images/uzawa.png?jsx';
import LongAgo from "/static/images/long_ago.png?jsx"
export default component$(()=>{
    return(
        <>
            <div class="grid-cols-2 grid">
                <ImgHoshinoV1 />
                <ImgHoshinoV2 />
                <ImgMaki />
                <ImgUzawa />
                <LongAgo />
            </div>
        </>
    )
})