
module.exports = (sequelize, type)=>{
    const Administrator = sequelize.define("Administrator",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        createdAt:{
            type: type.DATE,
                },
        updatedAt:{
            type: type.DATE
        },
        
    },{
        underscored: true,
        tableName: 'administrators',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        
    })
    
    Category.associate = function(models){
        Category.hasOne( models.User,{
            as: "user",
            foreignKey: "user_id"
            
        })
    }
    return Administrator
}

