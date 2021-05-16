import Types from '../types'
import produce from 'immer'

const d = new Date()

const initialState = {
    selectedDate: `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`,
    dateString: d,
    events: {}
}

export const calendar = produce((draft, action) => {
    switch (action.type) {
        case Types.SELECT_DATE:
            draft.selectedDate = action.payload.date
            draft.dateString = action.payload.dateString
            break

        case Types.ADD_EVENT:
            !draft.events[draft.selectedDate]
                ? (draft.events[draft.selectedDate] = [action.obj])
                : draft.events[draft.selectedDate].push(action.obj)
            break

        case Types.DELETE_EVENT:
            draft.events[draft.selectedDate] = draft.events[
                draft.selectedDate
            ].filter(event => {
                console.log(event.id)
                console.log(action.id)
                return event.id !== action.id
            })

            break

        case Types.EDIT_EVENT:
            draft.events[draft.selectedDate].find(
                event => event.id === action.payload.id
            ).name = action.payload.obj.name
            break
        default:
            break
    }
}, initialState)
