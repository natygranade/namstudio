
module.exports = (sequelize, type)=>{
    const Product = sequelize.define("Product",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
          name:{
            type: type.STRING(12),
            allowNull: false
        },
      
        detail:{
            type: type.STRING(200),
            allowNull: true
        },
        colorways:{
            type: type.BLOB('long'),
            allowNull: false
        },
        exclusive:{
            type: type.STRING,
            allowNull: false
        },
        size:{
            type: type.STRING,
            allowNull: false
        },
        price:{
            type: type.DECIMAL(3,2),
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
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
       
    })
   
    Product.associate = function(models){
        Product.belongsTo( models.Category,{
            as: "category",
            foreignKey: "category_id"

        })
    }
    Product.associate = function(models){
        Product.belongsToMany( models.Cart,{
            as: "carts",
            through: "products_carts",
            foreignKey: "product_id",
            otherKey: "cart_id",
            timestamps: false
            
        })
    }
    return Product
}

