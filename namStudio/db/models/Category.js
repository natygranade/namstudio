
module.exports = (sequelize, type)=>{
    const Product = sequelize.define("Product",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
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
        tableName: 'categories',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        
    })
    
    Category.associate = function(models){
        Category.hasMany( models.Product,{
            as: "products",
            foreignKey: "category_id"
            
        })
    }
    return Category
}

