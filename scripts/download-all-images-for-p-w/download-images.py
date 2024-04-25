import requests
import os

#catalog folder
dirname = "D:\\College\\course_3\\WebDev\\Web\\Practical_Work_15\\images\\catalog"
folders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'SP']
def saveImage(dirname, letter):
    url = f'https://place-hold.it/512x512/084C5C/84c4d5.jpg&text={letter}&bold&fontsize=35'
    r = requests.get(url, allow_redirects=True)
    open(dirname, 'wb').write(r.content)
    print(f"SAVED {letter}.jpg")

if __name__ == "__main__":
    for folder in folders:
        os.mkdir(f"{dirname}\\{folder}", 0o666)
        saveImage(f"{dirname}\\{folder}\\Category_{folder}.jpg", folder)
        for i in range(1, 9):
            saveImage(f"{dirname}\\{folder}\\{folder}_{i}.jpg",f'{folder}_{i}')
