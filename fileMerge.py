import pandas as pd

folder = r'/Users/zenziali/Desktop/Phlask/JSWebScraping/treeOutput'

li = []

for f in os.listdir(folder) : 
  data = pd.read_csv(folder + '/' + f)
  li.append(data)

final = pd.concat(li)  

final = final[['Point X', 'Point Y', 'Street Address', 'City', 'Postal Code',
       'Planting Site Id', 'Updated At', 'Tree Id', 'Genus', 'Species', 'Common Name'
       ]]
final.to_csv('/Users/zenziali/Desktop/Phlask/treeMap.csv', index = False)

# final[final['Tree Present'] != True]