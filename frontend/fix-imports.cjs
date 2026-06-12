const fs = require('fs');
const path = require('path');
const screensDir = path.join('src', 'screens');

const files = fs.readdirSync(screensDir);
files.forEach(file => {
  if (file.endsWith('.jsx')) {
    let content = fs.readFileSync(path.join(screensDir, file), 'utf8');
    
    // Some files have:
    // import React from 'react';
    // import { useI18n } from '../I18nContext';
    // //, { useState } from 'react';
    // or
    // //, { useState, useEffect } from 'react';

    const match = content.match(/import React from 'react';\r?\nimport \{ useI18n \} from '\.\.\/I18nContext';\r?\n\/\/(.*)from 'react';/);
    if (match) {
      const restOfImport = match[1]; // e.g. ", { useState } "
      const newImport = `import React${restOfImport}from 'react';\nimport { useI18n } from '../I18nContext';\n`;
      content = content.replace(match[0], newImport);
      fs.writeFileSync(path.join(screensDir, file), content);
      console.log('Fixed', file);
    }
  }
});
console.log('Done fixing imports.');
