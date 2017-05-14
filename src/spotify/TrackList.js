import React from 'react'

import {Track} from './Track.js'

export function TrackList(props) {
    const tracks = props.tracks.map(
        (track) => <li><Track data={track}/></li>
    );

    return <ul>{tracks}</ul>;
}
