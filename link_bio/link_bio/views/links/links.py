import reflex as rx
from link_bio.components.link_button import link_button

def links() -> rx.Component:
    return rx.center(
        rx.hstack(
            link_button(title = "LinkedIn", body="", url= "https://www.linkedin.com/in/manuel-berea/"),
            link_button(title = "Github", body="", url= "https://github.com/bereamanuel"),
            link_button(title = "Kaggle", body="", url= "https://www.kaggle.com/manuelbereaarellano"),
            link_button(title = "email", body="", url="mbaberearellano@gmail.com"),
            width = "100%",
            align="center"
            ),
            width = "100%"
        )