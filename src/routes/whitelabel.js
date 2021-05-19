import { Router } from 'express';
import whitelabel from '../models/whitelabel';

const router = Router();

router.get('/', async (req, res) => {
    const whitelabel = await req.context.models.Whitelabel.findAll();
    return res.send(whitelabel);
});

router.get('/:useremail', async (req, res) => {
    const {count, rows} = await req.context.models.Whitelabel.findAndCountAll({
        where: {
            "user_email": req.params.useremail,
        },

    });
    return res.send(rows);
});

router.post('/', async (req, res) => {
    const whitelabel = await req.context.models.Whitelabel.create({
        background_color: req.body.background_color,
        box_border_color: req.body.box_border_color,
        box_font_color: req.body.box_font_color,
        content_background_color: req.body.content_background_color,
        current_theme: req.body.current_theme,
        entity_icon_color: req.body.entity_icon_color,
        menu_font_color: req.body.menu_font_color,
        nav_background_color: req.body.nav_background_color,
        second_background_color: req.body.second_background_color,
        submenu_content_font_color: req.body.submenu_content_font_color,
        submenu_header_font_color: req.body.submenu_header_font_color,
        theme: req.body.theme,
        user_email: req.body.user_email
    });

    return res.send(whitelabel);
});

router.put('/', async (req, res) => {
    const [whitelabel, created] = await req.context.models.Whitelabel.findOrCreate({
        where: {
            user_email: req.body.user_email,
            theme: req.body.theme
        },
        defaults: {
            background_color: req.body.background_color,
            box_border_color: req.body.box_border_color,
            box_font_color: req.body.box_font_color,
            content_background_color: req.body.content_background_color,
            current_theme: true,
            entity_icon_color: req.body.entity_icon_color,
            menu_font_color: req.body.menu_font_color,
            nav_background_color: req.body.nav_background_color,
            second_background_color: req.body.second_background_color,
            submenu_content_font_color: req.body.submenu_content_font_color,
            submenu_header_font_color: req.body.submenu_header_font_color,
            theme: req.body.theme,
            user_email: req.body.user_email
        }
    })
    if (!created) {
        await req.context.models.Whitelabel.update(
            {
                background_color: req.body.background_color,
                box_border_color: req.body.box_border_color,
                box_font_color: req.body.box_font_color,
                content_background_color: req.body.content_background_color,
                current_theme: true,
                entity_icon_color: req.body.entity_icon_color,
                menu_font_color: req.body.menu_font_color,
                nav_background_color: req.body.nav_background_color,
                second_background_color: req.body.second_background_color,
                submenu_content_font_color: req.body.submenu_content_font_color,
                submenu_header_font_color: req.body.submenu_header_font_color,
                theme: req.body.theme,
                user_email: req.body.user_email
            },
            {
                where: {
                    user_email: req.body.user_email,
                    theme: req.body.theme
                }
            }
        )
        
    }

    for (var i = 1; i <= 4; i++) {
        if (req.body.theme !== i) {
            const [whites, created] = await req.context.models.Whitelabel.findOrCreate({
                where: {
                    user_email: req.body.user_email,
                    theme: i
                },
                defaults: {
                    background_color: req.body.background_color,
                    box_border_color: req.body.box_border_color,
                    box_font_color: req.body.box_font_color,
                    content_background_color: req.body.content_background_color,
                    current_theme: false,
                    entity_icon_color: req.body.entity_icon_color,
                    menu_font_color: req.body.menu_font_color,
                    nav_background_color: req.body.nav_background_color,
                    second_background_color: req.body.second_background_color,
                    submenu_content_font_color: req.body.submenu_content_font_color,
                    submenu_header_font_color: req.body.submenu_header_font_color,
                    theme: i,
                    user_email: req.body.user_email
                }
            })

            if (!created) {
                await req.context.models.Whitelabel.update(
                    {
                        current_theme: false,
                    },
                    {
                        where: {
                            user_email: req.body.user_email,
                            theme: i
                        }
                    }
                )
                
            }

        }

    }

    return res.send({ message: 'updated' });
});

router.delete('/:useremail', async (req, res) => {
    const result = await req.context.models.Whitelabel.destroy({
        where: { id: req.params.useremail },
    });

    return res.send(true);
});

export default router;
