"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation(){
    const path = usePathname();
    // console.log("hello");
    const [count, setCount] = useState(0);
    return (
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link> {path==="/" ? "yes!":"no!"}
            </li>
            <li>
                <Link href="/about-us">About Us</Link> {path==="/about-us" ? "yes!":"no!"}
            </li>
            <li><button onClick={()=>setCount((c)=>c+1)}>{count}</button></li>
        </ul>
    </nav>
    )
}