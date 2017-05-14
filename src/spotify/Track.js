import React from 'react';

import {Player} from './Player';

export function Track(props) {
    return (
        <div>
            {props.data.name} 
            <Player src={props.data.preview_url}/>
        </div>
    );
}
