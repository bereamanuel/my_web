import reflex as rx

from link_bio.components.link_icon import link_icon
from link_bio.components.link_avatar import link_avatar

import link_bio.variables.variables as variables
import link_bio.styles.styles as styles

def links() -> rx.Component:
    return rx.center(
        rx.hstack(
            link_icon(tag = "linkedin", url=variables.URL["LinkedIn"], color="#1086CD"),
            link_icon(tag = "github", url=variables.URL["Github"] , color ="black"),
            link_avatar(tag = "/kaggle.ico", url=variables.URL["Kaggle"] ),
            link_icon(tag = "mail", url=variables.URL["email"] , color ="black"),
            width = "100%",
            align="center"
            ),
            width = "100%",
            padding_top = styles.Size.DEFAULT.value,
            padding_left = styles.Size.BIG.value,
        )