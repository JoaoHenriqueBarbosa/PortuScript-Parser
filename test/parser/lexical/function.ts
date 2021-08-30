import { Context } from '../../../src/common';
import { fail } from '../../test-utils';
import * as t from 'assert';
import { parseSource } from '../../../src/parser';

describe('Lexical - Funcao', () => {
  fail('Lexical - Funcao (fail)', [
    ['funcao f(x) {let x}', Context.OptionsLexical],
    ['{  let f = 123;  se (false) ; else funcao f() {}}', Context.OptionsLexical],
    ['funcao f(x) { let x }', Context.OptionsLexical],
    ['funcao f(x) { const x = y }', Context.OptionsLexical],
    ['funcao f(a, a) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f(a, b, a) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f(b, a, a) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f(a, a, b) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f(b, a, b, a) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f(b, a, b, a, [fine]) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f(b, a, b, a = x) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f(b, a, b, ...a) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f(a, a) {"use strict"}', Context.OptionsLexical],
    ['funcao f(a, b, a) {"use strict"}', Context.OptionsLexical],
    ['funcao f(b, a, a) {"use strict"}', Context.OptionsLexical],
    ['funcao f(b, a, b, a) {"use strict"}', Context.OptionsLexical],
    ['funcao f(b, a, b, a, [fine]) {"use strict"}', Context.OptionsLexical],
    ['funcao f(b, a, b, a = x) {"use strict"}', Context.OptionsLexical],
    ['funcao f(b, a, b, ...a) {"use strict"}', Context.OptionsLexical],
    ['funcao x([public], public){}', Context.OptionsLexical],
    ['funcao f([a, a]) {}', Context.OptionsLexical],
    ['funcao f([a, b, a]) {}', Context.OptionsLexical],
    ['funcao f([b, a, a]) {}', Context.OptionsLexical],
    ['funcao f([a, a, b]) {}', Context.OptionsLexical],
    ['funcao f([b, a, b, a]) {}', Context.OptionsLexical],
    ['funcao f([b, a], b) {}', Context.OptionsLexical],
    ['funcao f([b, a], {b}) {}', Context.OptionsLexical],
    ['funcao f([b, a], b=x) {}', Context.OptionsLexical],
    ['funcao f([b, a], ...b) {}', Context.OptionsLexical],
    ['funcao f(){ let x; var x; }', Context.OptionsLexical],
    ['funcao f(){ var x; let x; }', Context.OptionsLexical],
    ['funcao f(){ const x = y; var x; }', Context.OptionsLexical],
    ['funcao f(){ var x; const x = y; }', Context.OptionsLexical],
    ['funcao f(){ let x; funcao x(){} }', Context.OptionsLexical],
    ['funcao f(){ funcao x(){} let x; }', Context.OptionsLexical],
    ['funcao f(){ const x = y; funcao x(){} }', Context.OptionsLexical],
    ['funcao f(){ funcao x(){} const x = y; }', Context.OptionsLexical],
    ['funcao f(){} funcao f(){}', Context.Module | Context.OptionsLexical],
    ['funcao a() { const x = 1; var x = 2; }', Context.OptionsLexical],
    ['funcao* f(a) { let a; }', Context.OptionsLexical],
    ['funcao* f([a]){ let a; }', Context.OptionsLexical],
    ['funcao* f({a}){ let a; }', Context.OptionsLexical],
    ['funcao a() { const x = 1; var x = 2; }', Context.OptionsLexical],
    ['funcao a() { const x = 1; var x = 2; }', Context.OptionsLexical],
    ['funcao a() { const x = 1; var x = 2; }', Context.OptionsLexical],
    ['{ funcao f(){} funcao f(){} }', Context.OptionsLexical],
    ['funcao f(){  for (var x;;); const x = 1  }', Context.OptionsLexical],
    ['funcao foo({x:x, x:x}) {}', Context.OptionsLexical],
    ['funcao foo({x:x}, {x:x}) {}', Context.OptionsLexical],
    ['funcao foo() { return {}; }; let {x:foo()} = {};', Context.OptionsLexical],
    ['funcao foo([x, x]) {}', Context.OptionsLexical],
    ['funcao foo([x], [x]) {}', Context.OptionsLexical],
    ['funcao foo([x], {x:x}) {}', Context.OptionsLexical],
    ['funcao foo([x, x]) {}', Context.OptionsLexical | Context.Strict | Context.Module],
    ['funcao foo([x], [x]) {}', Context.OptionsLexical | Context.Strict | Context.Module],
    ['funcao foo([x], {x:x}) {}', Context.OptionsLexical | Context.Strict | Context.Module],
    ['funcao foo([x], x) {}', Context.OptionsLexical],
    ['funcao foo(x, [x]) {}', Context.OptionsLexical],
    ['funcao g() { { var x; let x; } }', Context.OptionsLexical],
    ['funcao f() { { { var x; } let x; } }', Context.OptionsLexical],
    ['funcao f() { { { var x; } let x; } }', Context.OptionsLexical | Context.OptionsWebCompat],
    ['funcao f() { { var x; let x; } }', Context.OptionsLexical | Context.OptionsWebCompat],
    ['funcao f() { { var x; let x; } }', Context.OptionsLexical],
    ['(funcao (e) { var e; const e = undefined; });', Context.OptionsLexical],
    ['funcao x() {}const y = 4, x = 5;', Context.OptionsLexical],
    ['funcao x() {}const y = 4, x = 5;', Context.OptionsLexical],
    ['funcao x() {}const x = funcao() {};', Context.OptionsLexical],
    ['funcao foo({x:{z:[z1]}}, z1) {}', Context.OptionsLexical],
    ['funcao foo([x]) { let x = 10;}', Context.OptionsLexical],
    ['funcao foo([x], [x]) {}', Context.OptionsLexical],
    ['(funcao() { "use strict"; { const f = 1; var f; } })', Context.OptionsLexical],
    ['funcao foo([x, x]) {}', Context.OptionsLexical],
    ['funcao x(x = class x {}) { const x = y; }', Context.OptionsLexical],
    ['async funcao af(x) { let x; }', Context.OptionsLexical],
    ['async funcao af(x) { const x = 1; }', Context.OptionsLexical],
    ['funcao foo([x]) { let x = 10;}', Context.OptionsLexical],
    ['async funcao af(x) { class x { } }', Context.OptionsLexical],
    ['funcao fooa(a = b, a) {}', Context.OptionsLexical],
    ['funcao f(x = 0, x) {}', Context.OptionsLexical],
    ['0, funcao(x = 0, x) {};', Context.OptionsLexical],
    ['funcao foo(a, a = b) {}', Context.OptionsLexical],
    ['funcao f(x = 0, x) {}', Context.OptionsLexical | Context.Strict | Context.Module],
    ['0, funcao(x = 0, x) {};', Context.OptionsLexical | Context.Strict | Context.Module],
    ['funcao foo(a, a = b) {}', Context.OptionsLexical | Context.Strict | Context.Module],
    ['funcao f([foo], [foo]){}', Context.OptionsLexical],
    ['funcao f([foo] = x, [foo] = y){}', Context.OptionsLexical],
    ['funcao f({foo} = x, {foo}){}', Context.OptionsLexical],
    ['funcao f([{foo}] = x, {foo}){}', Context.OptionsLexical],
    ['funcao f([{foo}] = x, [{foo}]){}', Context.OptionsLexical],
    ['funcao f([{foo}] = x, [{foo}]){}', Context.OptionsWebCompat | Context.OptionsLexical],
    ['funcao f(b, a, b, a = x) {}', Context.OptionsLexical],
    ['let x = a; funcao x(){};', Context.OptionsLexical],
    ['const x = a; funcao x(){};', Context.OptionsLexical],
    ['funcao f([b, a], b) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f([b, a], {b}) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f([b, a], b=x) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f([b, a, b, a]) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f([a, a, b]) {}', Context.Strict | Context.OptionsLexical],
    ['funcao f([b, a], ...b) {}', Context.Strict | Context.OptionsLexical],
    ['(funcao() { { funcao* foo() {} funcao* foo() {} } })()', Context.OptionsLexical],
    ['(funcao() { { funcao* foo() {} funcao foo() {} } })()', Context.OptionsLexical],
    ['(funcao() { { funcao foo() {} funcao* foo() {} } })()', Context.OptionsLexical],
    ['(funcao() { { async funcao foo() {} async funcao foo() {} } })()', Context.OptionsLexical],
    ['funcao f(...rest, b){}', Context.OptionsLexical],
    ['let x; { var x; }', Context.OptionsLexical],
    ['{ var x; } let x;', Context.OptionsLexical],
    ['funcao f(...a,){}', Context.OptionsLexical],
    ['funcao f(...a = x,){}', Context.OptionsLexical],
    ['funcao f(...a = x,){}', Context.OptionsLexical],
    ['funcao f(...a,){}', Context.OptionsLexical],
    ['funcao f(...a,){}', Context.OptionsLexical | Context.Strict | Context.Module],
    ['funcao f(...a = x,){}', Context.OptionsLexical | Context.Strict | Context.Module],
    ['funcao f(...a = x,){}', Context.OptionsLexical | Context.Strict | Context.Module],
    ['funcao f(...a,){}', Context.OptionsLexical | Context.Strict | Context.Module],
    ['funcao f(...a = x,){}', Context.OptionsLexical],
    ['funcao f({a: x, b: x}) {}', Context.OptionsLexical],
    ['funcao f({x, x}) {}', Context.OptionsLexical],
    ['funcao f(x, {a: {b: x}}) {}', Context.OptionsLexical],
    ['funcao f(x, {a: {x}}) {}', Context.OptionsLexical],
    ['funcao f(x, {15: x}) {}', Context.OptionsLexical],
    ['funcao f({a: x, ...{x}}) {}', Context.OptionsLexical],
    ['funcao f({a: x, ...x}) {}', Context.OptionsLexical],
    ['funcao f(x, {a: x}) {}', Context.OptionsLexical],
    ['funcao f(x, {"foo": x}) {}', Context.OptionsLexical],
    ['"use strict"; funcao foo(bar, bar){}', Context.OptionsLexical],
    ['funcao foo(bar, bar){}', Context.OptionsLexical | Context.Module | Context.Strict],
    ['funcao f(x) { let x }', Context.OptionsLexical],
    ['funcao f(x) { let x }', Context.OptionsLexical | Context.OptionsWebCompat],
    ['funcao f(a, b, a, c = 10) { }', Context.OptionsLexical],
    ['funcao f(a, b = 10, a) { }', Context.OptionsLexical],
    ['funcao foo(a) { let a; }', Context.OptionsLexical],
    ['funcao foo(a, b = () => a) { const b = 1; };', Context.OptionsLexical],
    ['funcao foo(a, b = () => a) { let b; };', Context.OptionsLexical],
    ['funcao foo(arguments, b = () => arguments) { let arguments; };', Context.OptionsLexical],
    ['funcao foo(arguments, b = () => arguments) { const arguments = 1; };', Context.OptionsLexical],
    ['(a, b = () => a) => { let b; };', Context.OptionsLexical],
    ['(a, b = () => a) => { const b = 1; };', Context.OptionsLexical],
    ['(arguments, b = () => arguments) => { let arguments; };', Context.OptionsLexical],
    ['funcao foo({a, b = () => a}) { let b; };', Context.OptionsLexical],
    ['funcao foo([a], b = () => a) { const b = 1; };', Context.OptionsLexical],
    ['funcao foo([arguments, b = () => arguments]) { let arguments; };', Context.OptionsLexical],
    ['funcao foo() {try {} catch({x:x, x:x}) {} }', Context.OptionsLexical],
    ['funcao foo() {try {} catch([x, x]) {} }', Context.OptionsLexical],
    ['funcao foo() {try {} catch({z1, x:{z:[z1]}}) {} }', Context.OptionsLexical],
    ['funcao foo() {try {} catch([x]) { let x = 10;} }', Context.OptionsLexical],
    ['funcao foo() {try {} catch([x]) { funcao x() {} } }', Context.OptionsLexical],
    ['funcao foo() {try {} catch([x]) { var x = 10;} }', Context.OptionsLexical]
  ]);

  for (const arg of [
    '{ funcao* foo() {}; }; let foo;',
    'funcao f(x) { { let x } }',
    'funcao f(x) { { const x = y } }',
    'funcao f(x) { { var x } }',
    'funcao f(f) { }',
    'funcao f([f]) { }',
    'funcao f(x) { funcao x() {} }',
    'funcao f(x) { var x; }',
    'funcao f() {{let f}}',
    'funcao f(){ funcao x(){} var x = y; }',
    'funcao f(){ var x = y; funcao x(){} }',
    'funcao f(){ var f }',
    'funcao f(){ let f }',
    'x=funcao f(){ var f }',
    'x=funcao f(){ let f }',
    'x={f(){ var f }}',
    'x={f(){ let f }}',
    'funcao f(){} funcao f(){}',
    'funcao g() {  funcao f(){} funcao f(){} }',
    'async funcao f(){ var f }',
    'async funcao f(){ let f }',
    'x=async funcao f(){ var f }',
    'x=async funcao f(){ let f }',
    'x={async f(){ var f }}',
    'x={async f(){ let f }}',
    'funcao *f(){ var f }',
    'funcao *f(){ let f }',
    'x={*f(){ var f }}',
    'x={*f(){ let f }}',
    'async funcao *f(){ var f }',
    'x={async *f(){ var f }}',
    'x={async *f(){ let f }}',
    'funcao foo({x:x}, {y:y}, {z:z}) {}',
    'funcao f(a){ var a }',
    'funcao foo([x]) { var x = 10;}',
    `(funcao F1(x) {
      funcao F2(y) {
        var z = x + y;
        {
          var w =  5;
          var v = "Capybara";
          var F3 = funcao(a, b) {
            funcao F4(p) {
              debugger;
              return p + a + b + z + w + v.length;
            }
            return F4;
          }
          return F3(4, 5);
        }
      }
      return F2(17);
    })(5)();`,
    `(funcao() {
      var v1 = 3;
      var v2 = 4;
      let l0 = 0;
      {
        var v3 = 5;
        let l1 = 6;
        let l2 = 7;
        {
          var v4 = 8;
          let l3 = 9;
          {
            var v5 = "Cat";
            let l4 = 11;
            var v6 = l4;
            return funcao() {
              debugger;
              return l0 + v1 + v3 + l2 + l3 + v6;
            };
          }
        }
      }
    })()();`,
    'funcao g() { var x = 1; { let x = 2; funcao g() { x; } g(); } }',
    'funcao f(one) { class x { } { class x { } funcao g() { one; x; } g() } } f()',
    `funcao f(x) {
      var z;
      switch (x) {
        case 1:
          let y = 1;
        case 2:
          y = 2;
        case 3:
          z = y;
      }
      return z;
    }`
  ]) {
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseSource(`${arg}`, undefined, Context.OptionsLexical);
      });
    });
  }

  for (const arg of [
    '{  let f = 123;  se (false) ; else funcao f() {  }  }',
    'funcao f(a){ var a }',
    'funcao f(x) { { var x } }',
    // Lexical shadowing allowed, no hoisting
    `(funcao() {
    funcao* x() { yield 1; }
    { funcao* x() { yield 2 } }
  })();`,
    `funcao a() {}
funcao a() {}`,
    `(funcao() {
    var y;
    async funcao x() { y = 1; }
    { async funcao x() { y = 2; } }
    x();
  })();`,
    `(funcao () { { let x = 'let x'; } { let y = 'let y'; } })();`,
    'funcao foo({x:x}, {y:y}, {z:z}) {}',
    `(funcao () { { var x = 'var x'; } { var y = 'var y'; } })();`,
    'funcao foo([x]) { var x = 10;}',
    'async funcao af(x) { funcao x() { } }',
    'async funcao af(x) { var x; }',
    '(funcao() { { funcao* foo() {} funcao* foo() {} } })()',
    '(funcao() { { funcao* foo() {} funcao foo() {} } })()',
    '(funcao() { { funcao foo() {} funcao* foo() {} } })()',
    '(funcao() { { async funcao foo() {} async funcao foo() {} } })()',
    'funcao g() { var x = 1; { let x = 2; funcao g() { x; } g(); } }',
    'funcao f(one) { class x { } { class x { } funcao g() { one; x; } g() } } f()',
    'funcao *f(){} { funcao *f(){} }',
    'funcao f(x) { { let x } }',
    'async funcao *f(){} { async funcao *f(){} }',
    'async funcao f(){} { async funcao f(){} }',
    'funcao f(x) { var x }',
    `(funcao foo(y, z) {{ funcao x() {} } })(1);`,
    // Complex parameter shouldn't be shadowed
    `(funcao foo(x = 0) { var x; { funcao x() {} } })(1);`,
    // Nested complex parameter shouldn't be shadowed
    `(funcao foo([[x]]) {var x; {funcao x() {} } })([[1]]);`,
    // Complex parameter shouldn't be shadowed
    `(funcao foo(x = 0) { var x; { funcao x() {}} })(1);`,
    // Nested complex parameter shouldn't be shadowed
    `(funcao foo([[x]]) { var x;{ funcao x() {} }  })([[1]]);`,
    // Rest parameter shouldn't be shadowed
    `(funcao foo(...x) { var x; {  funcao x() {}  } })(1);`,
    // Don't shadow complex rest parameter
    `(funcao foo(...[x]) { var x; { funcao x() {} } })(1);`,
    // Hoisting is not affected by other simple parameters
    `(funcao foo(y, z) {{funcao x() {}} })(1);`,
    // Hoisting is not affected by other complex parameters
    ` (funcao foo([y] = [], z) {{funcao x() {} } })();`,
    // Should allow shadowing funcao names
    `{(funcao foo() { { funcao foo() { return 0; } } })();}`,
    // rest parameter shouldn't be shadowed
    '(funcao shadowingRestParameterDoesntBind(...x) { {  funcao x() {} } })(1);',
    `{(funcao foo(...r) { { funcao foo() { return 0; } } })(); }`,
    `(funcao foo() { { let f = 0; (funcao () { { funcao f() { return 1; } } })(); } })();`,
    `(funcao foo() { var y = 1; (funcao bar(x = y) { { funcao y() {} } })();  })();`,
    `(funcao foo() { { funcao f() { return 4; } { funcao f() { return 5; } } }})()`,
    '(funcao foo(a = 0) { { let y = 3; funcao f(b = 0) { y = 2; } f(); } })();',
    '(funcao conditional() {  se (true) { funcao f() { return 1; } } else {  funcao f() { return 2; }} se (false) { funcao g() { return 1; }}  L: {break L;funcao f() { return 3; } }})();',
    '(funcao foo() {funcao outer() { return f; } { f = 1; funcao f () {} f = ""; } })();',
    '(funcao foo(x) { {  funcao x() {} } })(1);',
    '(funcao foo([[x]]) { { funcao x() {}}})([[1]]);',
    'funcao f(one) { class x { } { class x { } funcao g() { one; x; } g() } } f()'
  ]) {
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

    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseSource(`${arg}`, undefined, Context.OptionsWebCompat);
      });
    });
  }

  for (const arg of [
    'funcao f(a, a) {}',
    'funcao f(a, b, a) {}',
    'funcao f(b, a, a) {}',
    'funcao f([{foo}] = x, {foo}){}',
    'funcao f([{foo}] = x, [{foo}]){}',
    'funcao f([{foo}] = x, [{foo}]){}',
    'funcao f(b, a, b, a = x) {}',
    'let x = a; funcao x(){};',
    'funcao f(x) { { let x } }',
    'const x = a; funcao x(){};',
    'funcao f([b, a], b) {}',
    'funcao f([b, a], {b}) {}',
    // rest parameter shouldn't be shadowed
    '(funcao shadowingRestParameterDoesntBind(...x) { {  funcao x() {} } })(1);',
    `(funcao foo(y, z) {{ funcao x() {} } })(1);`,
    // Complex parameter shouldn't be shadowed
    `(funcao foo(x = 0) { var x; { funcao x() {} } })(1);`,
    // Nested complex parameter shouldn't be shadowed
    `(funcao foo([[x]]) {var x; {funcao x() {} } })([[1]]);`,
    // Complex parameter shouldn't be shadowed
    `(funcao foo(x = 0) { var x; { funcao x() {}} })(1);`,
    // Nested complex parameter shouldn't be shadowed
    `(funcao foo([[x]]) { var x;{ funcao x() {} }  })([[1]]);`,
    // Rest parameter shouldn't be shadowed
    `(funcao foo(...x) { var x; {  funcao x() {}  } })(1);`,
    // Don't shadow complex rest parameter
    `(funcao foo(...[x]) { var x; { funcao x() {} } })(1);`,
    // Hoisting is not affected by other simple parameters
    `(funcao foo(y, z) {{funcao x() {}} })(1);`,
    // Hoisting is not affected by other complex parameters
    ` (funcao foo([y] = [], z) {{funcao x() {} } })();`,
    // Should allow shadowing funcao names
    `{(funcao foo() { { funcao foo() { return 0; } } })();}`,
    `{(funcao foo(...r) { { funcao foo() { return 0; } } })(); }`,
    `(funcao foo() { { let f = 0; (funcao () { { funcao f() { return 1; } } })(); } })();`,
    `(funcao foo() { var y = 1; (funcao bar(x = y) { { funcao y() {} } })();  })();`,
    `(funcao foo() { { funcao f() { return 4; } { funcao f() { return 5; } } }})()`,
    '(funcao foo(a = 0) { { let y = 3; funcao f(b = 0) { y = 2; } f(); } })();',
    '(funcao conditional() {  se (true) { funcao f() { return 1; } } else {  funcao f() { return 2; }} se (false) { funcao g() { return 1; }}  L: {break L;funcao f() { return 3; } }})();',
    '(funcao foo() {funcao outer() { return f; } { f = 1; funcao f () {} f = ""; } })();',
    '(funcao foo(x) { {  funcao x() {} } })(1);',
    '(funcao foo([[x]]) { { funcao x() {}}})([[1]]);',
    'funcao f(x) { var x }',
    `(funcao() {
      var x = 1;
      (() => x);
      var y = "y";
      var z = "z";
      (funcao() {
        var x = 2;
        (funcao() {
          y;
          debugger;
        })();
      })();
      return y;
    })();`,
    `(funcao() {
      var x = 1;
      (() => x);
      var y = "y";
      var z = "z";
      (funcao() {
        var x = 2;
        (() => {
          y;
          a;
          this;
          debugger;
        })();
      })();
      return y;
    })();`,
    `funcao f9() {
      let a1= "level1";
      try {
          throw "level2";

      } catch(e) {
          let a1= "level2";
              try {
              throw "level3";
          } catch(e1) {
              a1 += "level3";
          }
      }
    };`,
    `funcao f5()
    {
        var a1 = 10;
        let a2 = "a2";
        const a4 = "a4_const";
        let a5 = "a5_let";
        {
            let a1 = "level1";
            let a2 = 222;
            const a3 = "a3_const";
            let a4 = "a4_level1";
            a3;
        }

        return 10;
    }`
  ]) {
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseSource(`${arg}`, undefined, Context.OptionsWebCompat);
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseSource(`${arg}`, undefined, Context.Strict);
      });
    });
  }
});
