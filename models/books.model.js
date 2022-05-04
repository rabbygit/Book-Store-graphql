module.exports = (sequelize, types) => {
    const Book = sequelize.define(
        'books',
        {
            id: {
                type: types.INTEGER(10).UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },

            title: {
                type: types.STRING(30),
                allowNull: false,
            },

            description: {
                type: types.CHAR(60),
                allowNull: false,
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        },
    );

    return Book;
};