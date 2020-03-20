export default class OrderDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			options: [],
			onClick: _ => {
				console.log("Uninitialized OrderDialog used?!");
			}
		};
		Globals.order_dialog = this;
		this.onClick = this.onClick.bind(this);
	}
	onClick(ev) {
		this.setState({ open: false });
		this.state.onClick(ev.currentTarget.getAttribute("xoption"));
	}
	render() {
		return (
			<MaterialUI.Dialog open={this.state.open}>
				<MaterialUI.ButtonGroup orientation="vertical">
					{this.state.options.map(option => {
						return (
							<MaterialUI.Button
								key={option}
								xoption={option}
								onClick={this.onClick}
							>
								{option}
							</MaterialUI.Button>
						);
					})}
				</MaterialUI.ButtonGroup>
			</MaterialUI.Dialog>
		);
	}
}