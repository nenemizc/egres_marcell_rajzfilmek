import type { RajzfilmType } from "../types/Rajzfilm";
import Rajzfilmek from "../data/Rajzfilmek";
import { useState } from "react";

const rajzfilmek:RajzfilmType[] = await Rajzfilmek();

function RajzfilmCard({ film }: { film: RajzfilmType }) {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="card col-sm-3">
            <div className="card-body">
                <h2 className="card-title">{film.cim}</h2>
                <p className="card-text"><i>{film.studio}</i></p>
                {!hidden && (
                    <p className="card-text"><b>{film.megjelenesEve}</b></p>
                )}
                <button 
                    type="button" 
                    className="btn-primary btn" 
                    onClick={() => setHidden(!hidden)}
                >
                    {hidden ? "Megjelenés mutatása" : "Megjelenés elrejtése"}
                </button>
            </div>
        </div>
    );
}

export default function Rajzfilm() {
    return (
        <>
            <div className="row">
                {rajzfilmek.map(film => (
                    <RajzfilmCard key={film.id} film={film} />
                ))}
            </div>
        </>
    );
}