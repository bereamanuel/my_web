import reflex as rx
import link_bio.styles.styles as styles

def perfil_image(size:int)-> rx.Component:
    return rx.image(src="/images/me2.jpg", 
                    size=str(size),
                    align="center",
                    border_radius = styles.Size.BIG.value) 