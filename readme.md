## Clone the repo

## create a new backend

```cli
nest new apps/backend2 --skip-git
```

## update nest.js `tsconfig.json` file with

```json
{
  "extends": ["tsconfig/nest.json"]
}
```

## add `tsconfig: 'workspace:*' in package.json file inside newly created nest app`

```json
{
    ...
    "devDependencies": {
        ...,
        "tsconfig": "workspace:*"
    }
}
```

## Also change `start:dev` to `dev` in newly created app package.json
```json
{
    "scripts": {
        ...,
        "dev": "nest start --watch"
    }
}
```


## And finally add it in nest-cli.json in root folder
```json
{
    "projects": [
        ...,
        "backend2": {
            "type": "application",
            "root": "apps/backend2",
            "entryFile": "main",
            "sourceRoot": "apps/backend2/src",
            "compilerOptions": {
                "tsConfigPath": "apps/backend2/tsconfig.app.json"
            }
        }
    ]
}
```

## Create a new angular app
```
cd apps && ng new frontend2
```

```Update tsconfig.json and extends with `tsconfig/angular.json` ```.
