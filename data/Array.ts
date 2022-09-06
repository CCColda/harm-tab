export function groupArray<T = any>(arr: T[], n: number): T[][] {
	let result: T[][] = [];

	for (let i = 0; i < arr.length; i += n)
		result.push(arr.slice(i, Math.min(i + n, arr.length)));

	return result;
}