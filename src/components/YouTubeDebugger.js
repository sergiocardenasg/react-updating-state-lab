// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor () {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitrate = () => {
        this.setState({
            ...this.state.errors,
            ...this.state.user,
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
    }

    handleResolution = () => {
        this.setState({
            ...this.state.errors,
            ...this.state.user,
            settings: {
                ...this.state.settings,
                video: {
                    resolution: "720p"
                }
            }
        })
    }
    
    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrate}></button>
                <button className='resolution' onClick={this.handleResolution}></button>
            </div>
        )
    }
}
