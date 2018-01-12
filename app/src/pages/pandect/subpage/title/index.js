import React from 'react'

import style from './index.css'

export default class Title extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <h3 className={style.title}>
                { this.props.name }
            </h3>
        )
    }
}

