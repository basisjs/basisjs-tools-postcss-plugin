PostCSS plugin for basisjs-tools

## Install

```
npm install basisjs-tools-postcss-plugin postcss autoprefixer [any-postcss-plugin]
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
          "postcss-cssnext",
          ...
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
          },
          ...
        ]
      }
    }
  ]
}
```