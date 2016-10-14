// @flow
import React from 'react'

interface AppProps {
    title: string
}

const App = ({
    title
}:AppProps) => (
    <div>
        <h1>{title}</h1>
    </div>
)

export default App