"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Group quan hệ với User 1 group - nhiều user
      Group.hasMany(models.User, {
        foreignKey: "groupId",
      });
      // Group quan hệ với Role nhiều group - nhiều role
      // thông qua bảng trung gian GroupRole
      Group.belongsToMany(models.Role, {
        through: models.GroupRole,
      });
    }
  }
  Group.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Group",
      tableName: "Group", // ✅ TRÙNG DB
      freezeTableName: true, // ✅ KHÔNG TỰ ĐỔI SỐ NHIỀU
    }
  );
  return Group;
};
