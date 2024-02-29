import reflex as rx
from link_bio.components.link_button import link_button

def links() -> rx.Component:
    return rx.vstack(link_button(name = "LinkedIn", url= "https://www.linkedin.com/in/manuel-berea/"),
                     link_button(name = "Github", url= "https://github.com/bereamanuel"))