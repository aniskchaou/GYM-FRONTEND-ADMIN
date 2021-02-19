const _member = []

const getAll = () => {
    return _member;
};

const get = id => {
    return _member.find(item => item.id === id);
};

const create = (data) => {
    _member.push(data);
};

const update = (old, data) => {

    var foundIndex = _member.findIndex(item => item === old);
    _member[foundIndex] = data;
};

const remove = id => {
    _member.splice(id, 1);
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