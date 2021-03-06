import Main from '%{ cb "/js/main.js" }%';
import ProgressDialog from '%{ cb "/js/progress_dialog.js" }%';
import Messaging from '%{ cb "/js/messaging.js" }%';
import Theme from '%{ cb "/js/theme.js" }%';

window.Globals = {
	serverRequest: new Request("https://diplicity-engine.appspot.com/", {
		headers: {
			"X-Diplicity-API-Level": "8",
			Accept: "application/json"
		},
		mode: "cors"
	}),
	user: null,
	token: null,
	progressCount: 0,
	progressDialog: null,
	variants: [],
	memoizeCache: {},
	messaging: Messaging,
	contrastColors: (_ => {
		let m = dippyMap($("body"));
		return m.contrasts;
	})()
};

ReactDOM.render(<ProgressDialog />, document.getElementById("progress"));
ReactDOM.render(
	<MaterialUI.ThemeProvider theme={Theme}>
		<Main />
	</MaterialUI.ThemeProvider>,
	document.getElementById("app")
);

window.addEventListener("popstate", ev => {
	window.location.reload();
});
