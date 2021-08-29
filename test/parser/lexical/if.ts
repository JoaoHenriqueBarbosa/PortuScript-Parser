// import { Context } from '../../../src/common';
// import { fail } from '../../test-utils';
// import * as t from 'assert';
// import { parseSource } from '../../../src/parser';

// describe('Lexical - If', () => {
//   fail('Lexical - If (fail)', [
//     ['if (x) var foo = 1; let foo = 1;', Context.OptionsLexical],
//     ['if (x) {} else var foo = 1; let foo = 1;', Context.OptionsLexical],
//     ['if (x) var foo = 1; else {} let foo = 1;', Context.OptionsLexical],
//     ['if (x) var foo = 1; let foo = 1;', Context.OptionsLexical],
//     ['if (x) var foo = 1; let foo = 1;', Context.OptionsLexical | Context.OptionsWebCompat],
//     ['do async function f(){} while (x);', Context.OptionsLexical],
//     [
//       `if (x) x;
//     else async function f(){}`,
//       Context.OptionsLexical
//     ],
//     [
//       `if (x) x;
//     else async function *f(){}`,
//       Context.OptionsLexical
//     ],
//     [
//       `if (x) x;
//     else function *f(){}`,
//       Context.OptionsLexical
//     ],
//     [
//       `if (x) x;
//     else function(){}`,
//       Context.OptionsLexical
//     ],
//     ['if (x) async function f(){}', Context.OptionsLexical],
//     ['if (x) {} else if (y) {} else var foo = 1; let foo = 1;', Context.OptionsLexical],
//     ['if (x) { if (y) var foo = 1; } let foo = 1;', Context.OptionsLexical | Context.OptionsNext],
//     [
//       'if (x) { if (y) var foo = 1; } let foo = 1;',
//       Context.OptionsLexical | Context.OptionsWebCompat | Context.OptionsNext
//     ],
//     ['const x = a; function x(){};', Context.OptionsLexical | Context.Module | Context.Strict],
//     ['if (x) var foo = 1; let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical | Context.Strict],
//     ['if (x) { if (y) var foo = 1; } let foo = 1;', Context.OptionsLexical],
//     ['const x = a; function x(){};', Context.OptionsLexical],
//     ['if (x) var foo = 1; let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical],
//     ['if (x) {} else var foo = 1; let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical],
//     ['if (x) var foo = 1; else {} let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical],
//     ['if (x) {} else if (y) {} else var foo = 1; let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical],
//     ['if (x) { if (y) var foo = 1; } let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical]
//   ]);

//   for (const arg of ['if (x) var foo = 1; var foo = 1;']) {
//     it(`${arg}`, () => {
//       t.doesNotThrow(() => {
//         parseSource(`${arg}`, undefined, Context.OptionsWebCompat | Context.OptionsLexical);
//       });
//     });
//     it(`${arg}`, () => {
//       t.doesNotThrow(() => {
//         parseSource(`${arg}`, undefined, Context.OptionsWebCompat | Context.OptionsLexical | Context.OptionsNext);
//       });
//     });
//   }
// });

import { Context } from '../../../src/common';
import { fail } from '../../test-utils';
import * as t from 'assert';
import { parseSource } from '../../../src/parser';

describe('Lexical - Se', () => {
  fail('Lexical - Se (fail)', [
    ['se (x) var foo = 1; let foo = 1;', Context.OptionsLexical],
    ['se (x) {} else var foo = 1; let foo = 1;', Context.OptionsLexical],
    ['se (x) var foo = 1; else {} let foo = 1;', Context.OptionsLexical],
    ['se (x) var foo = 1; let foo = 1;', Context.OptionsLexical],
    ['se (x) var foo = 1; let foo = 1;', Context.OptionsLexical | Context.OptionsWebCompat],
    ['do async function f(){} while (x);', Context.OptionsLexical],
    [
      `se (x) x;
    else async function f(){}`,
      Context.OptionsLexical
    ],
    [
      `se (x) x;
    else async function *f(){}`,
      Context.OptionsLexical
    ],
    [
      `se (x) x;
    else function *f(){}`,
      Context.OptionsLexical
    ],
    [
      `se (x) x;
    else function(){}`,
      Context.OptionsLexical
    ],
    ['se (x) async function f(){}', Context.OptionsLexical],
    ['se (x) {} else se (y) {} else var foo = 1; let foo = 1;', Context.OptionsLexical],
    ['se (x) { se (y) var foo = 1; } let foo = 1;', Context.OptionsLexical | Context.OptionsNext],
    [
      'se (x) { se (y) var foo = 1; } let foo = 1;',
      Context.OptionsLexical | Context.OptionsWebCompat | Context.OptionsNext
    ],
    ['const x = a; function x(){};', Context.OptionsLexical | Context.Module | Context.Strict],
    ['se (x) var foo = 1; let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical | Context.Strict],
    ['se (x) { se (y) var foo = 1; } let foo = 1;', Context.OptionsLexical],
    ['const x = a; function x(){};', Context.OptionsLexical],
    ['se (x) var foo = 1; let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical],
    ['se (x) {} else var foo = 1; let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical],
    ['se (x) var foo = 1; else {} let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical],
    ['se (x) {} else se (y) {} else var foo = 1; let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical],
    ['se (x) { se (y) var foo = 1; } let foo = 1;', Context.OptionsWebCompat | Context.OptionsLexical]
  ]);

  for (const arg of ['se (x) var foo = 1; var foo = 1;']) {
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseSource(`${arg}`, undefined, Context.OptionsWebCompat | Context.OptionsLexical);
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseSource(`${arg}`, undefined, Context.OptionsWebCompat | Context.OptionsLexical | Context.OptionsNext);
      });
    });
  }
});
