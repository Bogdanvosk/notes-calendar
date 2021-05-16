import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteEvent, editEvent } from '../redux/actions/calendar'

const Events = ({ events, selectedDate }) => {
    const dispatch = useDispatch()

    const handleDeleteEvent = id => {
        dispatch(deleteEvent(id))
    }

    const handleEditEvent = id => {
        const newName = prompt('Введите новое название события')
        if (newName) {
            dispatch(editEvent({ name: newName }, id))
        } else {
            alert('Пожалуйста введите имя')
        }
    }

    return (
        <Container>
            {!Object.keys(events).includes(selectedDate) ||
            events[selectedDate].length === 0 ? (
                <Typography variant='h4' components='h1'>
                    Событий нет
                </Typography>
            ) : (
                events[selectedDate].map(event => {
                    return (
                        <EventItem key={event.id}>
                            <Card variant='outlined'>
                                <CardContent>
                                    <Wrap>
                                        <Typography variant='h5' component='h2'>
                                            {event.name}
                                        </Typography>
                                        {event.type === 'Праздничные дни' && (
                                            <Typography component='p'>
                                                Бюджет: {event.budget} ₽
                                            </Typography>
                                        )}
                                        {event.type === 'Мероприятия' && (
                                            <Wrap>
                                                <Typography component='p'>
                                                    Адрес: {event.adress}
                                                </Typography>
                                                <Typography component='p'>
                                                    Время: {event.hours}:
                                                    {event.minutes}
                                                </Typography>
                                            </Wrap>
                                        )}
                                        {event.type === 'Пометки / Другое' && (
                                            <Typography component='p'>
                                                {event.extraNote}
                                            </Typography>
                                        )}
                                    </Wrap>
                                    <IconsWrap className='icons-wrap'>
                                        <EditIcon
                                            color='primary'
                                            onClick={() => {
                                                handleEditEvent(event.id)
                                            }}
                                        />
                                        <DeleteIcon
                                            color='primary'
                                            onClick={() =>
                                                handleDeleteEvent(event.id)
                                            }
                                        />
                                    </IconsWrap>
                                </CardContent>
                            </Card>
                        </EventItem>
                    )
                })
            )}
        </Container>
    )
}

export default Events

const Container = styled.div``
const EventItem = styled.div`
    margin-bottom: 10px;
    width: 300px;

    &:hover {
        .icons-wrap {
            opacity: 1;
        }
    }

    .MuiCardContent-root {
        display: flex;
        justify-content: space-between;
    }
`
const Wrap = styled.div``
const IconsWrap = styled.div`
    opacity: 0;
    transition: 0.3s all;

    svg {
        cursor: pointer;
    }
`
