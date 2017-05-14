import React, {Component} from 'react'


const audio = new Audio();
audio.autoplay = false;
audio.preload = 'none';
audio.volume = 0.1;


export class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false,
        };
    }

    updateIsPlaying(event) {
        if (event) console.log(event.type, audio);

        this.setState((state, props) => {
            const isPlaying = 
                !audio.paused && 
                audio.currentSrc === props.src;

            return {isPlaying};
        });
    }

    componentDidMount() {
        this.updateIsPlaying();
        const update = this.updateIsPlaying.bind(this);
        const updateOn = [
            'loadstart',
            'playing',
            'pause',
        ];

        updateOn.forEach(
            (event) => audio.addEventListener(event, update)
        );

        this.componentWillUnmount = () =>
            updateOn.forEach(
                (event) => audio.removeEventListener(event, update)
            );
    }

    toggle() {
        if (this.state.isPlaying) {
            audio.pause();
        } else {
            audio.src = this.props.src;
            audio.currentTime = 0;
            audio.play();
        }
    }

    render() {
        return (
            <button 
                type="button"
                onClick={this.toggle.bind(this)}
            >
                {this.state.isPlaying ? 'stop' : 'play'}
            </button>
        );
    }
}
