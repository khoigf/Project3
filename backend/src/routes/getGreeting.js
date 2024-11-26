const GREETING = 'List Items!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
