
module.exports = (sequelize, type)=>{
    const Payment = sequelize.define("Payment",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        method:{
            type: type.STRING(45),
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
        tableName: 'payments',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        
    })
    
    Payment.associate = function(models){
        Payment.hasOne( models.Cart,{
            as: "cart",
            foreignKey: "payment_id"
            
        })
    }
    return Payment
}

