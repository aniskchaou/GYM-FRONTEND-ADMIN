const _product = []

const getAll = () => {
    return _product;
};

const get = id => {
    return _product.find(item => item.id === id);
};

const create = (data) => {
    _product.push(data);
};

const update = (old, data) => {

    var foundIndex = _product.findIndex(item => item === old);
    _product[foundIndex] = data;
};

const remove = id => {
    _product.splice(id, 1);
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