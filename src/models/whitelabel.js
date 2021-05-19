const whitelabel = (sequelize, DataTypes) => {
    const Whitelabel = sequelize.define('whitelabel', {
        background_color: DataTypes.STRING, 
        box_border_color: DataTypes.STRING, 
        box_font_color: DataTypes.STRING, 
        content_background_color: DataTypes.STRING, 
        current_theme: DataTypes.BOOLEAN, 
        entity_icon_color: DataTypes.STRING, 
        menu_font_color: DataTypes.STRING, 
        nav_background_color: DataTypes.STRING,
        second_background_color: DataTypes.STRING, 
        submenu_content_font_color: DataTypes.STRING, 
        submenu_header_font_color: DataTypes.STRING,
        theme: DataTypes.INTEGER,
        user_email: DataTypes.STRING
    });
  
    // Whitelabel.associate = models => {
    //     Whitelabel.belongsTo(models.User);
    // };
  
    return Whitelabel;
  };
  
  export default whitelabel;
  