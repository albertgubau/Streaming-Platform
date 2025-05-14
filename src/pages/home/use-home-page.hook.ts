import React from 'react'
import {getContentList} from '../../services/content-service'
import {ContentList} from '../../components/content-list/interfaces'

// Categories source of truth
const categories = [
    'free-top-movies',
    'store-hottest',
    'store-all-offers',
    'free-recently-added'
] as const

// Types of categories that we can have
type ContentCategory = (typeof categories)[number]

// Reducer action type
type Action = {
    type: 'SET_CONTENT'
    category: ContentCategory
    contentList: ContentList | null
}

// Type of the state for the reducer
type State = Record<ContentCategory, {contentList: ContentList | null}>

// Initial state of the reducer
const initialState: State = categories.reduce(
    (state, category) => ({
        ...state,
        [category]: {contentList: null}
    }),
    {} as State
)

// Reducer
function contentReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_CONTENT':
            return {
                ...state,
                [action.category]: {
                    contentList: action.contentList
                }
            }
        default:
            return state
    }
}

export default function useHomePage() {
    const [state, dispatch] = React.useReducer(contentReducer, initialState)
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        const fetchData = async (category: ContentCategory) => {
            try {
                const contentList = await getContentList(category)
                // Update the state with the new content list for the right category
                dispatch({type: 'SET_CONTENT', category, contentList})
            } catch (error) {
                setError(error as string)
            }
        }

        // Load all categories (ToDO: implement lazy loading while scrolling the home page)
        categories.forEach((category) => {
            if (!state[category]?.contentList) {
                fetchData(category)
            }
        })
    }, [])

    const contentLists: Array<ContentList | null> = categories.map(
        (category) => state[category].contentList
    )

    return {
        contentLists,
        error
    }
}
