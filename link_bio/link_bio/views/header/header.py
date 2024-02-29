import reflex as rx
from link_bio.components.perfil_image import perfil_image

def header() -> rx.Component:
    return rx.vstack(
        perfil_image(size=5),
        rx.text("HOLA MI NOMBRE ES MANUEL BEREA"),
        rx.text("""Soy analista de datos desde hace mas de 3 años. Actualmente trabajo como freelance Data Analyst.
                Aquí puedes encontrar una muestra de mi trabajo.
                ¡Bienvenid@!"""),         
        rx.link("mbaberearellano@gmail.com",href="mbaberearellano@gmail.com", color_scheme="gray")
    )