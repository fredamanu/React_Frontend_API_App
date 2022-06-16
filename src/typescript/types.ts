import * as actions from "../redux/actions/types"

export type ActionTypes = 
    | {type: typeof actions.FETCH_COUNTRIES_REQUEST}
    | {type: typeof actions.FETCH_COUNTRIES_SUCCESS, payload: CountryOne[]}
    | {type: typeof actions.FETCH_COUNTRIES_FAILURE, payload: string}
    | {type: typeof actions.FETCH_COUNTRY_REQUEST}
    | {type: typeof actions.FETCH_COUNTRY_SUCCESS, payload: CountryTwo[]}
    | {type: typeof actions.FETCH_COUNTRY_FAILURE, payload: string}
    | {type: typeof actions.ADD_FAVORITE_COUNTRY, payload: FavoriteCountry}
    | {type: typeof actions.REMOVE_FAVORITE_COUNTRY, payload: FavoriteCountry}
    | {type: typeof actions.GET_SELECTED_COUNTRY, payload: string}
    | {type: typeof actions.SET_SEARCHTERM_ONE, payload: string}
    | {type: typeof actions.SET_SEARCHTERM_TWO, payload: string}
    | {type: typeof actions.SORT_COUNTRIES_BY_NAME, payload: any}
    | {type: typeof actions.SORT_COUNTRIES_BY_POPULATION, payload: any}
    | {type: typeof actions.SORT_COUNTRIES_BY_REGION, payload: any}


export type FavoriteCountry ={
    name: string
    fullname: string
    flag: string
}

export type CountryOne = {
    flag: string,
    name:{
        common: string
    },
    population: number,
    region: string,
    languages:{
        [key: string]: string
    }
}

export type CountryTwo = {
    name: {
        common: string,
        official: string
    },
    flags: {
        png: string
    },
    capital: string[],
    startOfWeek: string,
    currencies: {
        [key:string]: {
            name: string,
            symbol: string
        }
    },
    coatOfArms:{
        png: string
    },
    maps: {
        googleMaps: string
    }
}

export type FetchCountryReducerInitialState = {
    country: CountryTwo[],
    loading: boolean,
    error: null | string
}

export type FetchCountriesReducerInitialState = {
    countries: CountryOne[],
    loading: boolean,
    error: null | string
}

export type FavoriteCountriesReducerInitialState = {
    favoriteCountries: FavoriteCountry[],
    count: number
    
}

export type State = {
    fetchCountriesReducer: FetchCountriesReducerInitialState,
    searchTermReducer: {
        keywordOne: string,
        keywordTwo: string
    },
    fetchCountryReducer: FetchCountryReducerInitialState,
    favoriteCountriesReducer: FavoriteCountriesReducerInitialState,
    getSelectedCountryReducer: {
        selectedCountry: "string"
    }
}