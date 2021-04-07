const _groupe = [{ "groupe_name": "Groupe salsa" }]

const getAll = () => {
    return _groupe;
};

const get = id => {
    return _groupe.find(item => item.id === id);
};

const create = (data) => {
    _groupe.push(data);
};

const update = (old, data) => {

    var foundIndex = _groupe.findIndex(item => item === old);
    _groupe[foundIndex] = data;
};

const remove = id => {
    _groupe.splice(id, 1);
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