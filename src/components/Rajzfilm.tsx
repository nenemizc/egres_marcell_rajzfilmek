import type { RajzfilmType } from "../types/Rajzfilm";
import Rajzfilmek from "../data/Rajzfilmek";
import { useState } from "react";

const rajzfilmek:RajzfilmType[] = await Rajzfilmek();

export default function Rajzfilm(){
    const [hidden,setHidden] = useState(true);
    return(
        <>
            <div>
                {rajzfilmek.map(film =>
                    <div key={film.id} className="card">
                        <div className="card-body">
                            <h2 className="card-title">{film.cim}</h2>
                            <p className="card-text"><i>{film.studio}</i></p>
                            <p className="card-text"><b>{film.megjelenesEve}</b></p>
                            <button type="button" className="btn-primary btn">Megjelenés</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
