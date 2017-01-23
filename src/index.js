#! /usr/bin/env node
    
	const 
	args = process.argv.slice(2),
	action = args[0],
	help = (args.includes('-h')) || (args.includes('--help'));

	console.log(process.argv)
 	console.log(args)
	console.log(action)

	//Show help log when -h or --help is inputed after new-react
	if (help) {
		console.log([
			'usage: new-react <type> <filename>',
			'',
			'type:',
			'b , base:  Creates basic react component with extension of base class',
			'rx, redux: Creates a react component set up with redux(map state to props and dispatch to props)',
			'',
			'Options:',
			'--less: 	Makes seperate basic less file with className identical to filename of react component and add style to index.less'

		].join('\n'));
		//Instructs nodejs to terminate the process as quickly as possible
		process.exit();
	}

	if(action == 'rx' || action == 'redux') {
		console.log('should make redux')
	}
	if(action == 'b' || action == 'base') {
		  require('./scripts/component');
	}