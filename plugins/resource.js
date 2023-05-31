const resource = function (resource, controller) {
    this.get(resource, controller.get);
    this.get(`${resource}/:id`, controller.getById);
    this.patch(`${resource}/:id`, controller.update);
    this.post(`${resource}`, controller.create);
    this.delete(`${resource}/:id`, controller.delete);
};

const plugin = function (app) {
    app.resource = resource;
};

module.exports = plugin;
