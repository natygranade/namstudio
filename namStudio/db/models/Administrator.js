
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
        user_id: {
            type: type.INTEGER,
            allowNull: false
        }
        
    },{
        underscored: true,
        tableName: 'administrators',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        
    })
    
    Administrator.associate = function(models){
        Administrator.belongsTo( models.User,{
            as: "user",
            foreignKey: "user_id"
            
        })
    }
    return Administrator
}

