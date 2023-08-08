const list = [
	{
		id: 'a',
		firstname: 'Robin',
		lastname: 'Wieruch',
		year: 1988,
	},
];

const ComplexList = () => (
	<ul>
		{list.map((item) => (
			<></>
		))}
	</ul>
);

export default ComplexList;
