import * as React from 'react'
import { render } from 'react-dom'

interface WordEntry {

}

interface AppState {
    words: Array<WordEntry>
}

class App extends React.Component<{}, AppState> {

    componentDidMount() {
        let that = this

        let xhr = new XMLHttpRequest()
        xhr.addEventListener('load', function (ev) {
            console.log(ev)
            console.log(this)
            console.log(this.response)
        })

        xhr.open('GET', '/api/words')
        xhr.send()
    }

    render() {
        return <div />
    }
}

render(
    <App />,
    document.getElementById('main'),
)
