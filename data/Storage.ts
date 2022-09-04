export default class Storage {
	private static localStorage = window.localStorage;
	private static readonly registry = "__registry";
	private static readonly count = "__count";

	private static transformName(name: string) {
		return name.replace(/[^a-zA-Z0-9_]/g, '_');
	}

	static addToRegistry(name: string) {
		this.localStorage.setItem(this.registry, this.localStorage.getItem(this.registry) + "," + name);
		this.localStorage.setItem(this.count, `${this.getCount() + 1}`);
	}

	static findInRegistry(name: string) {
		const transformedName = this.transformName(name);

		return this.getRegistry().some(v => v == transformedName);
	}

	static removeFromRegistry(name: string): boolean {
		const registryData = this.getRegistry();
		const index = registryData.findIndex(v => v == name);
		if (index == -1)
			return false;

		registryData.splice(index);
		this.localStorage.setItem(this.registry, registryData.join(','));
		this.localStorage.setItem(this.count, `${this.getCount() - 1}`);

		return true;
	}

	static getRegistry(): string[] {
		return (this.localStorage.getItem(this.registry) ?? "").split(',');
	}

	static getCount(): number {
		return Number(this.localStorage.getItem(this.count) ?? "0");
	}

	static setKey(name: string, key: string) {
		this.localStorage.setItem(this.transformName(name), key);
	}

	static getKey(name: string): string | null {
		return this.localStorage.getItem(this.transformName(name));
	}

	static resetKey(name: string) {
		this.localStorage.removeItem(this.transformName(name));
	}
};