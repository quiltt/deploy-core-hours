setup:
	npm i -g @vercel/ncc

build:
	ncc build index.js --license LICENSE
