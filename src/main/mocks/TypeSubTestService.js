const _typeSub = []

const getAll = () => {
    return _typeSub;
};

const get = id => {
    return _typeSub.find(item => item.id === id);
};

const create = (data) => {
    _typeSub.push(data);
};

const update = (old, data) => {

    var foundIndex = _typeSub.findIndex(item => item === old);
    _typeSub[foundIndex] = data;
};

const remove = id => {
    _typeSub.splice(id, 1);
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