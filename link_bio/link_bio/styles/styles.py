import reflex as rx
from enum import Enum

from .color import Color
from .font import Font

# Constants
MAX_WIDTH = "800px"

#Sizes
class Size(Enum):
    SMALL="0.5em"
    MEDIUM="0.8em"
    DEFAULT="1em"
    LARGE="1.5em"
    BIG="2em"

#Styles
BASE_STYLE = {
    "background_color" : Color.BACKGROUND_PRIMARY.value,
    "color" : Color.PRIMARY.value,
    "font_family" : Font.DEFAULT.value,
        rx.button: {
            "width" : "100%",
            "height" : "100%",
            "display" : "block",
            "padding" : Size.SMALL.value,
            "border_radius" : Size.BIG.value,
            "color_scheme" : Color.BACKGROUND_SECONDARY.value,
            "color" : Color.SECONDARY.value,
            "_hover" : {
                "color_scheme" : "gray",
                "high_contrast" : True
            }
        },
        rx.link : {
            "text_decoration" : "none",
            "_hover" : {

            }
        },
        rx.heading :{
            "font_family" : Font.TITLE.value
        }
}

navbar_title_style = dict(
    font_family = Font.LOGO.value,
    font_size = Size.LARGE.value
)

text_style = dict(
    font_size = Size.MEDIUM.value
)

button_title_style = dict(
    font_family = Font.TITLE.value,
    font_size = Size.DEFAULT.value
)

button_body_style = dict(
    font_family = Font.DEFAULT.value,
    font_size = Size.MEDIUM.value
)