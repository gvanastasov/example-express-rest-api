const resource = function(app, controller) {
    this.get(path, controller.index);
    this.get(`${path}/:id`, controller.show);
    this.delete(`${path}/:id`, function(req, res) {
        var id = parseInt(req.params.id, 10);
        controller.destroy(req, res, id);
    });
}

const plugin = function(app) {
    app.resource = resource;
}

module.exports = plugin;