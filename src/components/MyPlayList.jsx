import { SpotifyPlayer } from "./SpotifyPlayer"
import {useRef} from "react";
export const MyPlayList = () =>{
    const urlRef = useRef();
    const favoriteRef = useRef();
    const playlist = [{url:'0DQyTVcDhK9wm0f6RaErWO', favorite:true},
                    {url:'0H6TddUF2M63ZSHGvhk5yy', favorite:true},
                {url:'3fn4HfVz5dhmE0PG24rh6h', favorite:true},
                { url: '33qkK1brpt6t8unIpeM2Oy', favorite: true }]
    return(
        <div className="container">
            <h1 className="title text-center mt-5">Mi música favorita</h1>
            <div className="d-flex align-items-center">
                <input ref={urlRef} type="text" className="form-control" placeholder="Ingrese el código del albúm aquí"/>
                <div className="form-check ms-2">
                    <input ref={favoriteRef} type="checkbox" className="form-check-input"/>
                    <label htmlFor="" className="form-check-label">Favorito
                    </label>
                </div>
                <button className="btn btn-success ms-2">
                    <i className="bi bi-plus-circle-fill"></i>
                </button>
                <button className="btn btn-danger ms-2">
                    <i className="bi bi-trash"></i></button>
                <div>{
                    playlist.map(song => <SpotifyPlayer url={song.url} favorite={song.favorite}/>)
                }</div>
            </div>
        </div>
    )
}