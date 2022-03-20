const program = require("commander");
const fs = require("fs");
const md2html = require("./md2html");

// gfmオプションを定義する
program.option("--gfm", "GFMを有効にする");

// 引数のパース処理
program.parse(process.argv);

// オプションを取得する
const options = program.opts();

// 引数でオプション指定されない場合、gfmにデフォルトでfalseを設定する
const cliOptions = {
    gfm: options.gfm ? options.gfm : false,
};

// ファイルパスの取得
const filePath = program.args[0];
console.log("処理対象のファイル：" + filePath);

console.log("----------開始----------");

// ファイルの中身の読み取り
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
    }
    const html = md2html(file, cliOptions);
    console.log(html);
});