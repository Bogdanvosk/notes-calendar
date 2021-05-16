import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { useFormik } from 'formik'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { addEvent } from '../redux/actions/calendar'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { useHistory } from 'react-router-dom'

const AddEventForm = () => {
    const dispatch = useDispatch()

    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            name: '',
            type: 'Праздничные дни',
            budget: '',
            adress: '',
            hours: hours,
            minutes: minutes,
            extraNote: '',
            id: nanoid()
        },
        onSubmit: values => {
            dispatch(addEvent(values))
            history.push('/')
        }
    })

    const cancelAdd = () => {
        formik.resetForm()
        history.push('/')
    }

    return (
        <Container>
            <FormWrapper>
                <form onSubmit={formik.handleSubmit}>
                    <Wrap>
                        <TextField
                            variant='filled'
                            id='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            label='Название события'
                            required
                        />
                    </Wrap>
                    <Wrap>
                        <InputLabel id='typeEvent'>Тип события</InputLabel>
                        <Select
                            labelId='typeEvent'
                            label='Тип события'
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            id='type'
                            name='type'>
                            <MenuItem value='Праздничные дни'>
                                Праздничные дни
                            </MenuItem>
                            <MenuItem value='Мероприятия'>Мероприятия</MenuItem>
                            <MenuItem value='Пометки / Другое'>
                                Пометки / Другое
                            </MenuItem>
                        </Select>
                    </Wrap>

                    {formik.values.type === 'Праздничные дни' && (
                        <Wrap>
                            <TextField
                                label='Бюджет в руб'
                                id='budget'
                                value={formik.values.budget}
                                onChange={formik.handleChange}
                                required
                            />
                        </Wrap>
                    )}

                    {formik.values.type === 'Мероприятия' && (
                        <Wrap>
                            <TextField
                                id='adress'
                                label='Адрес'
                                value={formik.values.adress}
                                onChange={formik.handleChange}
                                required
                            />
                            <TextField
                                id='hours'
                                label='Часов'
                                value={formik.values.hours}
                                onChange={formik.handleChange}
                                required
                            />
                            <TextField
                                id='minutes'
                                label='Минут'
                                value={formik.values.minutes}
                                onChange={formik.handleChange}
                                required
                            />
                        </Wrap>
                    )}
                    {formik.values.type === 'Пометки / Другое' && (
                        <Wrap>
                            <TextField
                                id='extraNote'
                                label='Другой текст'
                                value={formik.values.extraNote}
                                onChange={formik.handleChange}
                                required
                            />
                        </Wrap>
                    )}

                    <ButtonGroup>
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={cancelAdd}>
                            Отмена
                        </Button>

                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'>
                            Сохранить
                        </Button>
                    </ButtonGroup>
                </form>
            </FormWrapper>
        </Container>
    )
}

export default AddEventForm

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormWrapper = styled.div`
    form {
        display: grid;
        grid-template-rows: repeat(4, minmax(0, 1fr));
        grid-gap: 15px;
    }
`

const Wrap = styled.div`
    .MuiTextField-root {
        margin-right: 10px;
    }
    label {
        margin-bottom: 10px;
    }
`

// const DateTimeContainer = styled.div`
//     display: flex;
//     flex-direction: column;

// `

const ButtonGroup = styled.div`
    display: flex;
    gap: 5px;
`
