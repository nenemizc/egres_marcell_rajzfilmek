import Rajzfilmek from "../data/Rajzfilmek";
import type { RajzfilmType } from "../types/Rajzfilm";
import Rajzfilm from "./Rajzfilm";

const rajzfilmek:RajzfilmType[] = await Rajzfilmek();

function getMin(){
    let min = 3000;
    for (const film of rajzfilmek){
        if (film.megjelenesEve < min){
            min = film.megjelenesEve;
        }
    }
    return min;
}

function getMax(){
    let max = 0;
    for (const film of rajzfilmek){
        if (film.megjelenesEve > max){
            max = film.megjelenesEve;
        }
    }
    return max;
}

export default function RajzfilmLista(){
    document.title = "Rajzfilm lista";

    return(
        <>
            <div className="container">
                <div className="row mb-3 mt-2">
                    <h2 className="text-center">Rajzfilm lista</h2>
                </div>
                <div className="row">
                    <div className="col-sm-4">Rajzfilmek száma: {rajzfilmek.length}</div>
                    <div className="col-sm-4">Legkorábbi megjelenési év: {getMin()} </div>
                    <div className="col-sm-4">Legkésőbbi megjelenési év: {getMax()}</div>
                </div>
                <Rajzfilm/>
            </div>
        </>
    )
}