import React from 'react'
import './styles.css'

export default function Header(props) {

    return (
        <section>
            <span>
                <div className={"head-" + props.header}>
                    <div>{props.header}</div>
                </div>
                <div className={"desc-" + props.header}>
                    {props.description}
                </div>
            </span>
        </section>
    )

}