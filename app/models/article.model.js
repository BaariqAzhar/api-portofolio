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
    const Article = sequelize.define('pf_article', {
        order: {
            type: Sequelize.INTEGER,
        },
        title_id: {
            type: Sequelize.STRING,
        },
        title_en: {
            type: Sequelize.STRING,
        },
        date: {
            type: Sequelize.STRING,
        },
        description_id: {
            type: Sequelize.TEXT('long'),
        },
        description_en: {
            type: Sequelize.TEXT('long'),
        },
    });

    return Article;
};
