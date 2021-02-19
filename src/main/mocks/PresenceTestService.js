const _presence = []

const getAll = () => {
    return _presence;
};

const get = id => {
    return _presence.find(item => item.id === id);
};

const create = (data) => {
    _presence.push(data);
};

const update = (old, data) => {

    var foundIndex = _presence.findIndex(item => item === old);
    _presence[foundIndex] = data;
};

const remove = id => {
    _presence.splice(id, 1);
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