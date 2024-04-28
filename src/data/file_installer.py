
# install image files scraped from the web

import os
import shutil
import requests
from PIL import Image
from io import BytesIO

def install_images(image_urls, image_dir):
    if not os.path.exists(image_dir):
        os.makedirs(image_dir)
    for url in image_urls:
        image_name = url.split('/')[-1]
        response = requests.get(url)
        open(image_name, 'wb').write(response.content)
    return image_dir


dic = [
    "chat",
]

url = "https://projects.lib.rochester.edu/lsf-asl/wp-content/uploads/"

image_urls = [f"{url}/{d}_mobile.mp4" for d in dic]

image_dir = "src/assets/signs_word"

install_images(image_urls, image_dir)

