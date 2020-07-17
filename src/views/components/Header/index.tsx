import * as React from "react";

import "./header.scss"

export const Header:React.FC<{}> = () => {

    const [posTop, setPosTop] = React.useState(0);

    const handleScroll = (_: Event) => {
        console.log(_)
        console.log(window.scrollY)
        setPosTop(window.scrollY);
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return <header style={{
        background: posTop < 72 ? "transparent" : "blue"
    }}>
        サマーインターン前につよつよになろう！！
    </header>
}