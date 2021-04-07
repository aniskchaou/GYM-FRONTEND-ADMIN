const _event = [{
    "event_name": "Cours de dance",
    "event_date": "15/03/2021",
    "place_id": "93, avenue de Bouvines 89100 SENS",
    "starttime": "09:00", "endtime": "11:00"
}]


const getAll = () => {
    return _event;
};

const get = id => {
    return _event.find(item => item.id === id);
};

const create = (data) => {
    _event.push(data);
};

const update = (old, data) => {

    var foundIndex = _event.findIndex(item => item === old);
    _event[foundIndex] = data;
};

const remove = id => {
    _event.splice(id, 1);
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