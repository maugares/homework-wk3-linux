import * as React from 'react'

export default function Selector(props) {
    return Object
        .keys(props.list)
        .map((key) => {
            const year = (props.list[key].year)
            const content = `${key} (${year})`
            return <option key={key} value={key}>{content}</option>
        })
}

