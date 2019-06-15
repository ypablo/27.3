const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: ADD_COMMENT,
        text: 'First comment !',
            id: uuid.v4(),
                rating: 0
}

{
    type: EDIT_COMMENT,
        text: "Edited first comment",
            id: uuid.v4(),
                rating: rating
}

{
    type: REMOVE_COMMENT,
        id: uuid.v4(),
            rating: rating
}

{
    type: HUMB_UP_COMMENT,
        id: uuid.v4(),
            rating: rating + 1
}

{
    type: HTHUMB_DOWN_COMMENT,
        id: uuid.v4(),
            rating: rating - 1
}