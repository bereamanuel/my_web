import reflex as rx
import link_bio.styles.styles as styles

def navbar() -> rx.Component:
    return rx.hstack(
                rx.text(
                    "Manuel Berea",
                    size="6",
                    font_size=styles.Size.BIG.value,
                    height ="40px",
                    width = "100%"
                ),
                rx.hstack(rx.text("Home"),
                          rx.text("My bio"),
                          rx.text("Projects"),
                          rx.text("Contact"),
                          width = "100%"),
                width = "100%",
                position="sticky",
                padding=styles.Size.DEFAULT.value,
                z_index="999"
            )
