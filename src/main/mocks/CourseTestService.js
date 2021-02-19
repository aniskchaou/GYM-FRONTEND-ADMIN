const _course = []

const getAll = () => {
    return _course;
};

const get = id => {
    return _course.find(item => item.id === id);
};

const create = (data) => {
    _course.push(data);
};

const update = (old, data) => {

    var foundIndex = _course.findIndex(item => item === old);
    _course[foundIndex] = data;
};

const remove = id => {
    _course.splice(id, 1);
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