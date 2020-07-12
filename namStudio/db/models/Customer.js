
module.exports = (sequelize, type)=>{
    const Customer = sequelize.define("Customer",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        adress:{
            type: type.STRING(45),
            allowNull: false
        },
        country:{
            type: type.STRING(45),
            allowNull: false
        },
        users_id: {
            type: type.INTEGER,
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
        tableName: 'categories',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        
    })
    
    Customer.associate = function(models){
        Customer.belongsTo( models.User,{
            as: "user",
            foreignKey: "users_id"
            
        })
    }
    return Customer
}

