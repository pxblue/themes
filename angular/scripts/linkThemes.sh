#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color


echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./demos/showcase/node_modules/@pxblue/angular-themes"
mkdir "./demos/showcase/node_modules/@pxblue/angular-themes"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying angular themes into node_modules...${NC}";
# Showcase demo
cp -r ./demos/showcase/package.json ./demos/showcase/node_modules/@pxblue/angular-themes/package.json
cp -r ./_blueTheme.scss ./demos/showcase/node_modules/@pxblue/angular-themes/_blueTheme.scss
cp -r ./_darkTheme.scss ./demos/showcase/node_modules/@pxblue/angular-themes/_darkTheme.scss
cp -r ./_fonts.scss ./demos/showcase/node_modules/@pxblue/angular-themes/_fonts.scss
cp -r ./_margins.scss ./demos/showcase/node_modules/@pxblue/angular-themes/_margins.scss
cp -r ./_typography.scss ./demos/showcase/node_modules/@pxblue/angular-themes/_typography.scss
cp -r ./_pxb-component-theme.scss ./demos/showcase/node_modules/@pxblue/angular-themes/_pxb-component-theme.scss
cp -r ./theme.scss ./demos/showcase/node_modules/@pxblue/angular-themes/theme.scss

# Theme demo
cp -r ./demos/showcase/package.json ./demos/theme/node_modules/@pxblue/angular-themes/package.json
cp -r ./_blueTheme.scss ./demos/theme/node_modules/@pxblue/angular-themes/_blueTheme.scss
cp -r ./_darkTheme.scss ./demos/theme/node_modules/@pxblue/angular-themes/_darkTheme.scss
cp -r ./_fonts.scss ./demos/theme/node_modules/@pxblue/angular-themes/_fonts.scss
cp -r ./_margins.scss ./demos/theme/node_modules/@pxblue/angular-themes/_margins.scss
cp -r ./_typography.scss ./demos/theme/node_modules/@pxblue/angular-themes/_typography.scss
cp -r ./_pxb-component-theme.scss ./demos/theme/node_modules/@pxblue/angular-themes/_pxb-component-theme.scss
cp -r ./theme.scss ./demos/theme/node_modules/@pxblue/angular-themes/theme.scss

echo -e "${GREEN}Done${NC}"

echo -e "${GRAY}Complete${NC}\r\n"
