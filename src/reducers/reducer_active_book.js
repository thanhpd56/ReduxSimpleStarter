// state: not application state, just state data that this reducer responsible for
export default function (state = null, action) {
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }

}