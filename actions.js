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
        votes: 0
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id,
        votes: votes
    }
}

function remComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function upComment(rating) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        votes: votes + 1
    }
}

function downComment(rating) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        votes: votes - 1
    }
}