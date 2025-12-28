"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User quan hệ với Group 1user - 1 group
      User.belongsTo(models.Group, {
        foreignKey: "groupId",
      });

      // User quan hệ với Project nhiều user - nhiều project
      // thông qua bảng trung gian ProjectUser
      User.belongsToMany(models.Project, {
        through: models.ProjectUser,
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      sex: DataTypes.STRING,
      groupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "User",
      freezeTableName: true, 
    }
  );
  return User;
};
