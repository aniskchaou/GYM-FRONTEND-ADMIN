const _event = []

const getAll = () => {
    return _event;
};

const get = id => {
    return _event.find(item => item.id === id);
};

const create = (data) => {
    _event.push(data);
};

const update = (old, data) => {

    var foundIndex = _event.findIndex(item => item === old);
    _event[foundIndex] = data;
};

const remove = id => {
    _event.splice(id, 1);
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