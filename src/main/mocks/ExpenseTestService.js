const _expense = [{ "supplier": "maintenance matériel", "amount": "6764" }]

const getAll = () => {
    return _expense;
};

const get = id => {
    return _expense.find(item => item.id === id);
};

const create = (data) => {
    _expense.push(data);
};

const update = (old, data) => {

    var foundIndex = _expense.findIndex(item => item === old);
    _expense[foundIndex] = data;
};

const remove = id => {
    _expense.splice(id, 1);
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