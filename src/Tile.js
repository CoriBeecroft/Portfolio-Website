import React, { forwardRef } from "react";
import "./Tile.scss";

export const Tile = forwardRef((props, ref) => {
    return <div ref={ ref } id={ props.id } className={ "tile color" + props.index%3 }>
        <div className="tile-content">
            { props.children }
        </div>
    </div>
})