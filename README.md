PostCSS plugin for basisjs-tools

## Install

### Install plugin
```
npm install --save-dev basisjs-tools-postcss-plugin
```
### Install PostCSS and plugins you want
```
npm install --save-dev postcss autoprefixer postcss-cssnext
```

## Usage
Add to basis.config these settings:
```json
{
  "plugins": [
    {
      "name": "basisjs-tools-postcss-plugin",
      "options": {
        "processors": [
          "autoprefixer",
          "postcss-cssnext"
        ]
      }
    }
  ]
}
```

For more custom configuration use:

```json
{
  "plugins": [
    {
      "name": "basisjs-tools-postcss-plugin",
      "options": {
        "processors": [
          {
            "name": "autoprefixer",
            "options": {
              "browsers": "last 2 versions"
            }
          },
          {
            "name": "postcss-cssnext",
            "options": {
              "features": {
                "customProperties": false
              }
            }
          }
        ]
      }
    }
  ]
}
```
