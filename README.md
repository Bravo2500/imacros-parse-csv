# imacros-parse-csv
Allow iMacros to load data from a csv file located in ...\iMacros\Datasources folder.

```javascript
var parseCsv = require('imacros-parse-csv);
var parsed = parseCsv('my-list.csv');
```

You can also pass specific PapaParse's options:

```javascript
var parseCsv = require('imacros-parse-csv);
var parsed = parseCsv('my-list.csv', {
  delimiter: ";",
  comments: true
});
```
