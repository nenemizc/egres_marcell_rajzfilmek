import type { RajzfilmType } from "../types/Rajzfilm";
import Rajzfilmek from "../data/Rajzfilmek";
import { useState } from "react";

export default async function Rajzfilm(){
    const rajzfilmek:RajzfilmType[] = await Rajzfilmek();

    return(
        <>
            
        </>
    )
}
