const _revenue = [{ "revenue": "Cours de dance", "amount": "4432" }]

const getAll = () => {
    return _revenue;
};

const get = id => {
    return _revenue.find(item => item.id === id);
};

const create = (data) => {
    _revenue.push(data);
};

const update = (old, data) => {

    var foundIndex = _revenue.findIndex(item => item === old);
    _revenue[foundIndex] = data;
};

const remove = id => {
    _revenue.splice(id, 1);
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