import type { RajzfilmType } from "../types/Rajzfilm";

export default async function Rajzfilmek(){
    const response = await fetch('rajzfilmek.json');
    const rajzfilmek:RajzfilmType[] = await response.json();

    return rajzfilmek;
}