
module.exports = (sequelize, type)=>{
    const Cart = sequelize.define("Cart",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity:{
            type: type.INTEGER(6),
            allowNull: false
        },
        total:{
            type: type.DECIMAL(4,2),
            allowNull: false
        },
        paid:{
            type: type.BOOLEAN,
            allowNull: false
        },
        deleted:{
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
        tableName: 'carts',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        
    })
    
    Cart.associate = function(models){
        Cart.hasOne( models.Customer,{
            as: "customer",
            foreignKey: "customer_id"
            
        })
    }
    Cart.associate = function(models){
        Cart.hasOne( models.Payment,{
            as: "payment",
            foreignKey: "payment_id"
            
        })
    }
    Cart.associate = function(models){
        Cart.belongsToMany( models.Product,{
            as: "products",
            through: "products_carts",
            foreignKey: "cart_id",
            otherKey: "product_id",
            timestamps: false
            
        })
    }
    return Cart
}
