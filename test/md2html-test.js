const assert = require("assert");
const fs = require("fs");
const path = require("path");
const md2html = require("../md2html");

it("MarkdownをHtmlに変換(GMF=false)", () => {
    // 変換前のmarkdownファイル
    const sample = fs.readFileSync(
        path.resolve(__dirname, "./fixtures/sample.md"), { encoding: "utf8" }
    );
    // htmlファイル
    const expected = fs.readFileSync(
        path.resolve(__dirname, "./fixtures/expected.html"), { encoding: "utf8" }
    );

    // 変換後のmarkdownファイルとhtmlファイルが一致するか確認
    assert.strictEqual(
        md2html(sample, { gfm: false }).trimEnd(),
        expected.trimEnd()
    );
});

it("MarkdownをHtmlに変換(GMF=true)", () => {
    // 変換前のmarkdownファイル
    const sample = fs.readFileSync(
        path.resolve(__dirname, "./fixtures/sample.md"), { encoding: "utf8" }
    );
    // htmlファイル
    const expected = fs.readFileSync(
        path.resolve(__dirname, "./fixtures/expected-gfm.html"), { encoding: "utf8" }
    );

    // 変換後のmarkdownファイルとhtmlファイルが一致するか確認
    assert.strictEqual(
        md2html(sample, { gfm: true }).trimEnd(),
        expected.trimEnd()
    );
});