import reflex as rx

import link_bio.styles.styles as styles

def link_avatar(tag:str, url:str) -> rx.Component:
    return rx.link(
        rx.avatar(
            src = tag,
            size = "2"
        ),
        href=url,
        is_external=True,
        width = "100%",
        padding_left = styles.Size.SMALL.value
    )