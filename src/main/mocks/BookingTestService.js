const _booking = []

const getAll = () => {
    return _booking;
};

const get = id => {
    return _booking.find(item => item.id === id);
};

const create = (data) => {
    _booking.push(data);
};

const update = (old, data) => {

    var foundIndex = _booking.findIndex(item => item === old);
    _booking[foundIndex] = data;
};

const remove = id => {
    _booking.splice(id, 1);
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