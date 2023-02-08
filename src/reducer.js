export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQDHa2jlQisOsES4E6h2nlQHNcGXpyWxMh4dqPRLqcYS5hIZq_9-jisusgwpHMy1XAYBekY5z7af_23OCdCGem0QvuNFTT-MaX2bfz3QMDMYfqxDpHNYGNDUhNGCoXqELzDdoVIO-aGLvCo6Es7zZw3OC8Kb67wEFcr9Lp3q73FUFoynUHKCZ8xI9d4VzTGG5Wg-6hpDuv8Q_9Gp4Pwu8g',
    
};


const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
    return {
        ...state,
        user: action.user,//updates user

    };

    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token,
        };
    case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists:action.playlists,
        };
    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        }    
    default:
        return state;
}
};

export default reducer;