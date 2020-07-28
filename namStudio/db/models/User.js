
module.exports = (sequelize, type)=>{
    const User = sequelize.define("User",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        full_name:{
            type: type.STRING(100),
            allowNull: false
        },
        email:{
            type: type.STRING(50),
            allowNull: false
        },
        password:{
            type: type.STRING(100),
            allowNull: false
        },
        adress:{
            type: type.STRING(45),
            allowNull: true,
            defaultValue: null
        },
        country:{
            type: type.STRING(45),
            allowNull: true,
            defaultValue: null
        },
        phone:{
            type: type.STRING(20),
            allowNull: true,
            defaultValue: null
        },
        terms:{
            type: type.BOOLEAN,
            allowNull: false
        },
        admin: {
            type: type.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        },
        createdAt:{
            type: type.DATE
        },
        updatedAt:{
            type: type.DATE
        },
        avatar: {
            type: type.STRING(100),
            allowNull: true,
            defaultValue: null
                   }
              
    },{
        underscored: true,
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
             
    })
    User.associate = function(models){
        User.hasOne( models.Cart,{
            as: "cart",
            foreignKey: "user_id"
            
        })
    }
    return User
}

