const _exercice = []

const getAll = () => {
    return _exercice;
};

const get = id => {
    return _exercice.find(item => item.id === id);
};

const create = (data) => {
    _exercice.push(data);
};

const update = (old, data) => {

    var foundIndex = _exercice.findIndex(item => item === old);
    _exercice[foundIndex] = data;
};

const remove = id => {
    _exercice.splice(id, 1);
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