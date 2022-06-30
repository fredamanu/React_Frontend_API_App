import * as actions from "../redux/actions/types"

export type ActionTypes = 
    | {type: typeof actions.FETCH_COUNTRIES_REQUEST}
    | {type: typeof actions.FETCH_COUNTRIES_SUCCESS, payload: Country[]}
    | {type: typeof actions.FETCH_COUNTRIES_FAILURE, payload: string}
    | {type: typeof actions.FETCH_COUNTRY_REQUEST}
    | {type: typeof actions.FETCH_COUNTRY_SUCCESS, payload: Country[]}
    | {type: typeof actions.FETCH_COUNTRY_FAILURE, payload: string}
    | {type: typeof actions.ADD_FAVORITE_COUNTRY, payload: FavoriteCountry}
    | {type: typeof actions.REMOVE_FAVORITE_COUNTRY, payload: FavoriteCountry}
    | {type: typeof actions.GET_SELECTED_COUNTRY, payload: string}
    | {type: typeof actions.SET_SEARCHTERM, payload: string}
    | {type: typeof actions.SORT_COUNTRIES_BY_NAME, payload: any}
    | {type: typeof actions.SORT_COUNTRIES_BY_POPULATION, payload: any}
    | {type: typeof actions.SORT_COUNTRIES_BY_REGION, payload: any}


export type FavoriteCountry ={
    name: string
    fullname: string
    flag: string
}



export type Country = {
    name: {
        common: string,
        official: string
    },
    flag: string,
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
    population: number,
    region: string,
    languages:{
        [key: string]: string
    }
}

export type CountryState = {
    data: Country[],
    loading: boolean,
    error: null | string
}

export type Countries = {
    data: Country[],
    loading: boolean,
    error: null | string
}

export type FavoriteCountries = {
    countries: FavoriteCountry[],
    count: number
    
}

export type State = {
    countries: Countries,
    searchTerm: {
        keyword: string
    },
    fetchCountryReducer: CountryState,
    favoriteCountries: FavoriteCountries,
    selectedCountry: {
        name: "string"
    }
}