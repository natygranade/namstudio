
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
            type: type.STRING(8),
            allowNull: false
        },
        phone:{
            type: type.STRING(20),
            allowNull: true
        },
        terms:{
            type: type.BOOLEAN,
            allowNull: false
        },
        createdAt:{
            type: type.DATE
        },
        updatedAt:{
            type: type.DATE
        },
        
    },{
        underscored: true,
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        fullName: "full_name"
        
    })
    
    User.associate = function(models){
        User.hasOne( models.Customer,{
            as: "customer",
            foreignKey: "user_id"
            
        })
    }
    return User
}

