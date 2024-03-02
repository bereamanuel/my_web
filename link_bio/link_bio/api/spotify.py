import reflex as rx
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

auth_manager = SpotifyClientCredentials()
auth_manager.get_access_token()
sp = spotipy.Spotify(auth_manager=auth_manager)

print(sp.currently_playing('kimdom19'))