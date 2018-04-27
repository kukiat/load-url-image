from PIL import Image
import os
import glob

x = 0
for filename in glob.glob('img/*.jpg'):
  img = Image.open(filename)
  width, heigth = img.size
  img.resize((500,500)).save('resized/image'+ str(x) +'.jpg')
  x+=1

