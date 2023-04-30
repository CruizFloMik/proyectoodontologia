module.exports = (sequelize, Sequelize) =>
{
    const User = sequelize.define("user",
    {
        name: {
            type: Sequelize.STRING(50)
            
        },
        homeAdress:{
            type: Sequelize.STRING(50)
        },
        status:Sequelize.BOOLEAN
    });

    return User;
};
