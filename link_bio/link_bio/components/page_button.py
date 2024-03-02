import reflex as rx
import link_bio.styles.styles as styles

def page_button(text:str, url:str) -> rx.Component:
    return rx.text(text,
                    padding=styles.Size.DEFAULT.value)