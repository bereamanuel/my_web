import reflex as rx
from link_bio.components.perfil_image import perfil_image
import link_bio.styles.styles as styles
from link_bio.views.links.links import links

def header() -> rx.Component:
    return  rx.vstack(
                rx.hstack(
                    perfil_image(size=5),
                    rx.vstack(
                        rx.text.strong("¡HOLA! SOY MANUEL BEREA",
                            align="center",
                            padding_top = styles.Size.DEFAULT.value,
                            padding_left = styles.Size.BIG.value,
                            ),
                        links()
                        ),
                ),
                rx.text("""Soy analista de datos desde hace mas de 3 años. Actualmente trabajo como freelance Data Analyst.
                            Aquí puedes encontrar una muestra de mi trabajo.
                            ¡Bienvenid@!"""),
            align_items="center"
            )
        