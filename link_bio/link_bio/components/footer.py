import reflex as rx
import datetime 

import link_bio.styles.styles as styles

def footer() -> rx.Component:
    return rx.center(
                rx.link(f"© 2021-{datetime.date.today().year} BEREAMANUEL BY MANUEL BEREA.", href="https://google.com", is_external=True, size="2"),
                rx.text("Data Analyst.", size="2"),
                text_align = "center",
                width = "100%",
                margin = styles.Size.DEFAULT.value
        )