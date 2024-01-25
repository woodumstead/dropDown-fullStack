const controller = [
    {
        name: "",
        bird: "",
        flower: "",
        tree: "",
        significant_event: ""

}
]

const State = require('../models/stateModel')

// get
exports.getState = async (req, res) => {
    await State.findAll()
    .then((result) => res.json(result))
    .catch((error) => res.send('error occurred'))
}

// get by id
exports.getById = (req, res) => {
    let id = req.params.id;
    for (let state of states) {
        if (this.getById.id == id) {
            res.status(200);
            return res.send(state);
        }
    }

    res.send(400);
    res.send('error')
}