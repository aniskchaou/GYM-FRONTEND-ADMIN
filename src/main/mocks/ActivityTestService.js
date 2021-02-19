const _activity = []

const getAll = () => {
    return _activity;
};

const get = id => {
    return _activity.find(item => item.id === id);
};

const create = (data) => {
    _activity.push(data);
};

const update = (old, data) => {

    var foundIndex = _activity.findIndex(item => item === old);
    _activity[foundIndex] = data;
};

const remove = id => {
    _activity.splice(id, 1);
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