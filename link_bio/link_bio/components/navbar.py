import reflex as rx
import link_bio.styles.styles as styles
from  link_bio.components.page_button import page_button

def navbar() -> rx.Component:
    return rx.flex(
                rx.text(
                    "Manuel Berea",
                    font_size=styles.Size.BIG.value,
                ),
                rx.spacer(),
                rx.hstack(
                    page_button(text = "Home", url=""),
                    rx.divider(orientation="vertical"),
                    page_button(text = "Biography", url=""),
                    rx.divider(orientation="vertical"),
                    page_button(text = "Projects", url=""),
                    rx.divider(orientation="vertical"),
                    page_button(text = "Contact", url=""),

                ),
                width = "100%",
                position="sticky",
                padding=styles.Size.DEFAULT.value,
                z_index="999",
                top ="0",
                bg="white"
            )
