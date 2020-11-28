import React from "react";
import Link from 'next/link'

export function Links() {
  return (
    <ul>
        <Link href={"/"}>Home</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/dashboard"}>Dashboard (protected)</Link>
    </ul>
  )
}