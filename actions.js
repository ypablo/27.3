import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        rating: 0
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4(),
        rating: rating
    }
}

function remComment(text) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

function upComment(text) {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid.v4(),
        rating: rating + 1
    }
}

function downComment(text) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4(),
        rating: rating - 1
    }
}