const
	args = process.argv.slide(2),
	less = (args.includes('--less')) || (args.includes('l'));

export {
	less
}