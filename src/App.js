import React from 'react'
import { Calendar } from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddEventForm from './components/AddEventForm'

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <Calendar />
                    </Route>
                    <Route path='/add'>
                        <AddEventForm />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
