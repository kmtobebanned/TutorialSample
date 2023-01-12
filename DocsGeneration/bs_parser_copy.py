from bs4 import BeautifulSoup
import pandas as pd
import subprocess
import tempfile


with open('/home/runner/work/TutorialSample/TutorialSample/DocsGeneration/doxygen-output/html/index.html', 'r') as f:
    page = f.read()

    # Create object page
    soup = BeautifulSoup(page, 'html.parser')

df = pd.DataFrame(columns=['key', 'value'])


table1 = soup.find('table', class_='markdownTable')

contents = []
for row in table1.find_all('tr'):
    columns = row.find_all('td')
    
    cell = {}

    if(columns != []):
        cell['key'] = columns[0].text.strip()
        with tempfile.NamedTemporaryFile(mode='w+', suffix='.cpp') as f:
            f.write(columns[1].text.strip())
            f.flush()
            process = subprocess.run(["clang-format", "-style=file", f.name], stdout=subprocess.PIPE)
            cell['value'] = process.stdout.decode()

        contents.append(cell)


df = df.append(contents, ignore_index=True)
print (df.reset_index(drop=True).to_json(r'/home/runner/work/TutorialSample/TutorialSample/DocsGeneration/docs/_shared/df.json', orient='records'))