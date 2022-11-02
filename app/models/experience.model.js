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
    const Experience = sequelize.define('experience', {
        order: {
            type: Sequelize.INTEGER,
        },
        exp_type: {
            type: Sequelize.STRING,
        },
        icon: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.STRING,
        },
        company: {
            type: Sequelize.STRING,
        },
        employment_type: {
            type: Sequelize.STRING,
        },
        date_range: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING,
        },
        description_id: {
            type: Sequelize.STRING,
        },
        description_en: {
            type: Sequelize.STRING,
        },
    });

    return Experience;
};
