import React from 'react'
import {getContentList} from '../../services/content-service'
import {ContentList} from '../../components/content-list/interfaces'

type ContentCategory =
    | 'free-top-movies'
    | 'store-hottest'
    | 'store-all-offers'
    | 'free-recently-added'

// Reducer action type
type Action = {
    type: 'SET_CONTENT'
    category: ContentCategory
    contentList: ContentList | null
}

// Type of the state for the reducer
type State = Record<ContentCategory, {contentList: ContentList | null}>

// Initial state of the reducer
const initialState: State = {
    'free-top-movies': {contentList: null},
    'store-hottest': {contentList: null},
    'store-all-offers': {contentList: null},
    'free-recently-added': {contentList: null}
}

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

    const categories: ContentCategory[] = [
        'free-top-movies',
        'store-hottest',
        'store-all-offers',
        'free-recently-added'
    ]

    React.useEffect(() => {
        const fetchData = async (category: ContentCategory) => {
            try {
                const contentList = await getContentList(category)
                dispatch({type: 'SET_CONTENT', category, contentList})
            } catch {}
        }

        // Load all categories (ToDO: implement lazy loading)
        categories.forEach((category) => {
            if (!state[category]?.contentList) {
                fetchData(category)
            }
        })
    }, [])

    return {
        freeTopMoviesList: state['free-top-movies'].contentList,
        storeHottestList: state['store-hottest'].contentList,
        storeAllOffersList: state['store-all-offers'].contentList,
        freeRecentlyAddedList: state['free-recently-added'].contentList
    }
}
