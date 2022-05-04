module.exports = (sequelize, types) => {
    const User = sequelize.define(
        'users',
        {
            id: {
                type: types.INTEGER(10).UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },

            username: {
                type: types.STRING(30),
                allowNull: false,
            },

            password: {
                type: types.STRING,
                allowNull: false,
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        },
    );

    return User;
};