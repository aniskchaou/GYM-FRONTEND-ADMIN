const _member = [{
    "first_name": "Marshall Brodeur", "start_date": "13/01/2020",
    "end_date": "13/06/2021", "type": "normal", "coach": "Jack Doe"
}]


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