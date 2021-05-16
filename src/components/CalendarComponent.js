import React, { useState } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import { useDispatch } from 'react-redux'
import 'react-calendar/dist/Calendar.css'
import { selectDate } from '../redux/actions/calendar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Events } from './'
import { useSelector } from 'react-redux'

const CalendarComponent = () => {
    const dispatch = useDispatch()
    const { events, selectedDate, dateString } = useSelector(state => state)
    const [date, setDate] = useState(dateString)

    const onSelectDate = date => {
        setDate(date)

        dispatch(
            selectDate(
                `${date.getDate()}.${
                    date.getMonth() + 1
                }.${date.getFullYear()}`,
                date
            )
        )
    }

    return (
        <Container>
            <Wrap>
                <Calendar onChange={onSelectDate} value={date} />
                <ButtonWrap>
                    <Link to='/add'>
                        <Button variant='contained' color='primary'>
                            Добавить
                        </Button>
                    </Link>
                </ButtonWrap>
            </Wrap>
            {events !== null && (
                <Events events={events} selectedDate={selectedDate} />
            )}
        </Container>
    )
}

export default CalendarComponent

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
`

const ButtonWrap = styled.div`
    margin-top: 10px;
    width: 350px;
    button {
        width: 100%;
    }
`

const Wrap = styled.div``
