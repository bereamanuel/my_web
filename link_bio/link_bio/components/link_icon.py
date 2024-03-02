import reflex as rx

import link_bio.styles.styles as styles

def link_icon(tag:str, url:str,color:str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag = tag,
            color=color
        ),
        href=url,
        is_external=True,
        width = "100%",
        padding_left = styles.Size.SMALL.value
    )