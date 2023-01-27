#!/bin/bash

doxygen DocsGeneration/Doxyfile
echo "generate doxygen-snippet finished!"

echo "start installing python packages!"
pip install beautifulsoup4
pip install pandas
echo "installing packages finished!"

echo "run python scraper!"
dir=$PWD
python3 DocsGeneration/bs_parser.py --currentdir "$dir" 
echo "python scraper finished!"

echo "docusaurus build and run command set!"
cd ./DocsGeneration/docs
npm install --frozen-lockfile
npm run build
npm run serve