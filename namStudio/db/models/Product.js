
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
         type: type.ARRAY(type.STRING),
            allowNull: true
        },
        exclusive:{
            type: type.STRING,
            allowNull: false
        },
        size:{
            type: type.STRING,
            allowNull: true
        },
        price:{
            type: type.DECIMAL(3,2),
            allowNull: true
        },
        category_id: {
type: type.INTEGER
        },
        created_at: {
            type: type.DATE,
            defaultValue: 'CURRENT_TIMESTAMP',
            allowNull: false
          },
          updated_at: {
            type: type.DATE,
            defaultValue: 'CURRENT_TIMESTAMP',
            allowNull: false
          }
        
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

