function isPositive(_req, res, next, value, name) {
    if (value < 0) {
        return res.status(400).json({ error: `Invalid parameter '${name}, value must be possitive.'`});
    }

    next();
}

module.exports = { isPositive };
