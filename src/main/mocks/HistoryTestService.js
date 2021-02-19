const _history = []

const getAll = () => {
    return _history;
};

const get = id => {
    return _history.find(item => item.id === id);
};

const create = (data) => {
    _history.push(data);
};

const update = (old, data) => {

    var foundIndex = _history.findIndex(item => item === old);
    _history[foundIndex] = data;
};

const remove = id => {
    _history.splice(id, 1);
};

const removeAll = () => {

};

const findByTitle = title => {

};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};