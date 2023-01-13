from bs4 import BeautifulSoup
import pandas as pd
import subprocess
import tempfile
import os
import argparse


DOCUSAURUS_JSON_PATH ='/DocsGeneration/docs/_shared/df.json'
DOCUSAURUS_SHARED_DIR = '/docs/_shared'
DOXYGEN_HTML_PATH = '/DocsGeneration/doxygen-output/html/index.html'

def parse_args():
    parser=argparse.ArgumentParser()
    parser.add_argument("--currentdir", type=str, required=True)
    args=parser.parse_args()
    return args

def main():
    args = parse_args()

    parse_doxyhtml(args.currentdir)


def parse_doxyhtml(currentdir):
    with open(f'{currentdir}{DOXYGEN_HTML_PATH}', 'r') as f:
        page = f.read()

    # Create object page
    soup = BeautifulSoup(page, 'html.parser')
    # Create object dataframe
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
    print(df.to_string())
    os.mkdir(f'{currentdir}{DOCUSAURUS_SHARED_DIR}')
    print (df.reset_index(drop=True).to_json(f'{currentdir}{DOCUSAURUS_JSON_PATH}', orient='records'))

if __name__ == "__main__":
    main()