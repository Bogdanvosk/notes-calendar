import Types from '../types'

export const selectDate = (date, dateString) => ({
    type: Types.SELECT_DATE,
    payload: { date, dateString }
})

export const addEvent = obj => ({ type: Types.ADD_EVENT, obj })

export const deleteEvent = id => ({ type: Types.DELETE_EVENT, id })

export const editEvent = (obj, id) => ({
    type: Types.EDIT_EVENT,
    payload: { obj, id }
})
