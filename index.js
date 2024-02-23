const scloudjs = require('scloudjs');
let clouddatas = new Object();

// サーバーの処理
const server = (data) => {
	const temp = scloudjs.parsedata(data, clouddatas);
	clouddatas = temp.clouddatas;
	const changedlists = temp.changedlists;

	// ここから下に処理を書く
};

// ユーザーなどの情報を渡す
scloudjs.setdatas(process.env.user, process.env.pass, "接続したいプロジェクトのid", server);

// --------------------------------
// ここから下は基本的に変更しない
// --------------------------------

// クラウドへの接続
const setup = async () => {
	await scloudjs.login();
	await scloudjs.connect();
	await scloudjs.handshake();
};
setup();
