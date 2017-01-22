	const 
	args = process.argv.slice(2),
	action = args,
	help = (args.includes('-h')) || (args.includes('--help'));

	//Show help log when -h or --help is inputed after new-react
	if (help) {
		console.log([
			'need to make help section',
			'still in dev',
			'will make soon i swear',
		].join('\n'));
		//Instructs nodejs to terminate the process as quickly as possible
		process.exit();
	}