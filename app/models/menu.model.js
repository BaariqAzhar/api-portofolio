/**
 * These columns will be generated automatically:
 * id, title, description, published, createdAt, updatedAt.
 * create a new Post: create(object)
 * find a Post by id: findByPk(id)
 * get all Posts: findAll()
 * update a Post by id: update(data, where: { id: id })
 * remove a Post: destroy(where: { id: id })
 * remove all Posts: destroy(where: {})
 * find all Posts by title: findAll({ where: { title: ... } })
 * These functions will be used in our Controller.
 */
module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define('menu', {
        order: {
            type: Sequelize.INTEGER,
        },
        name_id: {
            type: Sequelize.STRING,
        },
        name_en: {
            type: Sequelize.STRING,
        },
        path: {
            type: Sequelize.STRING,
        },
        privilege: {
            type: Sequelize.STRING,
        },
    });

    return Menu;
};
