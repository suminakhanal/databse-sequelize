module.exports=(sequelize, DataTypes)=> {
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },

        age: {
            type: DataTypes.NUMBER,
            allowNUll: false,
            validate: {
                notEmpty: true,

            },
        },
    });

    return User;
}