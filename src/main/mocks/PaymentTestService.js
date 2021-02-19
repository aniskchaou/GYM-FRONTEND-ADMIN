const _payment = []

const getAll = () => {
    return _payment;
};

const get = id => {
    return _payment.find(item => item.id === id);
};

const create = (data) => {
    _payment.push(data);
};

const update = (old, data) => {

    var foundIndex = _payment.findIndex(item => item === old);
    _payment[foundIndex] = data;
};

const remove = id => {
    _payment.splice(id, 1);
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