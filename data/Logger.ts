const Logger = (() => {
	const bracketColor = "color: #00a5f7";

	const log = (id: string, ...args: any[]) => console.log("%c[%c" + id + "%c]%c: ", bracketColor, "color: yellow", bracketColor, "color: white", ...args);
	return { log };
})();

export default Logger;