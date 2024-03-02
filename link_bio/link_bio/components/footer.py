import reflex as rx
import datetime 

import link_bio.styles.styles as styles

import link_bio.variables.variables as variables

def footer() -> rx.Component:
    return rx.hstack(
                rx.link(f"© 2021-{variables.YEAR} BEREAMANUEL BY MANUEL BEREA.", href="https://google.com", is_external=True, size="2"),
                rx.text("Data Analyst.", size="2"),
                width = "100%",
                padding = styles.Size.DEFAULT.value
        )