import React from "react";
import "./Tile.scss";

export const Tile = props => {
    return <div className={ "tile color" + props.index%3 }>
        <div className="tile-content">
            { props.children }
        </div>
    </div>
}