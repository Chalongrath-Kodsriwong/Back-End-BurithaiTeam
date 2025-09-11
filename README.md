# Back-End-BurithaiTeam

# Command for run starter
 - npm install express cors axios
 - npm install -D typescript ts-node ts-node-dev @types/node @types/express
 - npx tsc --init

# Fix file !# tsconfig.json #!
 ``` 
 {
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "types": ["node"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

# Verify&Fix !# package.json #!

```
"scripts": {
  "start": "ts-node-dev --respawn --transpile-only src/index.ts",
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "test": "echo \"No tests specified\" && exit 0"
}
```

# Command for run test
 ``` npm run dev
```