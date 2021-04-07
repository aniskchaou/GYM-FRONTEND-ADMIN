const _staff = [{
    "first_name": "Virginie Brunault", "role": "Professeure de dance",
    "date": "05/09/2022", "mobile": "423234234"
}]


const getAll = () => {
    return _staff;
};

const get = id => {
    return _staff.find(item => item.id === id);
};

const create = (data) => {
    _staff.push(data);
};

const update = (old, data) => {

    var foundIndex = _staff.findIndex(item => item === old);
    _staff[foundIndex] = data;
};

const remove = id => {
    _staff.splice(id, 1);
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