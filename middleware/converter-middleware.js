function convertParamToInteger(req, res, next, value, name) {
    const converted = parseInt(value, 10);
  
    if (isNaN(converted)) {
        return res.status(400).json({ error: `Invalid parameter '${name}' value.` });
    }
  
    req.params[name] = converted;
    next();
}

module.exports = { convertParamToInteger };
