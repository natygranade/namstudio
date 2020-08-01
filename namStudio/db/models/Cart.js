
module.exports = (sequelize, type)=>{
    const Cart = sequelize.define("Cart",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity:{
            type: type.INTEGER(100),
            allowNull: true
        },
        total:{
            type: type.DECIMAL(10,2),
            allowNull: true
        },
        paid:{
            type: type.BOOLEAN,
            allowNull: true
        },
        
        createdAt:{
            type: type.DATE,
            allowNull: true,
        },
        updatedAt:{
            type: type.DATE,
            allowNull: true
        },
        deletedAt:{
            type: type.DATE,
            allowNull: true
        },
        user_id: {
            type: type.INTEGER,
            allowNull: true
        }
        
    },{
        underscored: true,
        tableName: 'carts',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at', 
        paranoid: true
            })
    
    Cart.associate = function(models){
        Cart.belongsTo( models.User,{
            as: "user",
            foreignKey: "user_id",
            timestamps: true
            
        })

        Cart.belongsTo( models.Payment,{
            as: "payment",
            foreignKey: "payment_id",
            timestamps: true
            
        })
 
        Cart.belongsToMany( models.Product,{
            as: "products",
            through: "product_cart",
            foreignKey: "cart_id",
            otherKey: "product_id",
            timestamps: true
            
        })
    }
    return Cart
}

