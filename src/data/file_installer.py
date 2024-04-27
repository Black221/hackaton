
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
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
]

url = "https://apprendre.tv5monde.com/sites/apprendre.tv5monde.com/files/audio"

image_urls = [f"{url}/{d}.mp3" for d in dic]

image_dir = "src/assets/signs_word"

install_images(image_urls, image_dir)

